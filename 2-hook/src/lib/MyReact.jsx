import React from "react";
import { createEventEmitter } from "shared/lib/EventEmitter";

const MyReact = (function MyReact() {
  const memorizedStates = [];
  const deps = [];
  const isInitialized = [];
  const cleanups = [];
  let cursor = 0;

  function useState(initialValue = "") {
    const { forceUpdate } = useForceUpdate();

    if (!isInitialized[cursor]) {
      memorizedStates[cursor] = initialValue;
      isInitialized[cursor] = true;
    }

    const state = memorizedStates[cursor];

    const setStateAt = (_cursor) => (nextState) => {
      if (state === nextState) return;
      memorizedStates[_cursor] = nextState;
      forceUpdate();
    };
    const setState = setStateAt(cursor);
    cursor = cursor + 1;

    return [state, setState];
  }

  function useEffect(effect, nextDeps) {
    function runDeferedEffect() {
      function runEffect() {
        const cleanup = effect();
        if (cleanup) cleanups[cursor] = cleanup;
      }
      const ENOUGH_TIME_TO_RENDER = 1;
      setTimeout(runEffect, ENOUGH_TIME_TO_RENDER);
    }

    if (!isInitialized[cursor]) {
      isInitialized[cursor] = true;
      deps[cursor] = nextDeps;
      cursor = cursor + 1;
      runDeferedEffect();
      return;
    }

    const prevDeps = deps[cursor];
    const depsSame = prevDeps.every(
      (prevDep, index) => prevDep === nextDeps[index]
    );
    if (depsSame) {
      cursor = cursor + 1;
      return;
    }

    deps[cursor] = nextDeps;
    cursor = cursor + 1;
    runDeferedEffect();
  }

  // 구현을 위해 이곳만 리액트 훅을 사용한다.
  function useForceUpdate() {
    const [value, setValue] = React.useState(1);
    const forceUpdate = () => {
      setValue(value + 1);
      cursor = 0;
    };
    return {
      forceUpdate,
    };
  }

  function resetCursor() {
    cursor = 0;
  }

  function cleanupEffects() {
    cleanups.forEach((cleanup) => typeof cleanup === "function" && cleanup());
  }

  function createContext(initialValue) {
    const emitter = createEventEmitter(initialValue);

    function Provider({ value, children }) {
      React.useEffect(() => {
        emitter.set(value);
      }, [value]);

      return <>{children}</>;
    }

    return {
      Provider,
      emitter,
    };
  }

  function useContext(context) {
    const [value, setValue] = React.useState(context.emitter.get());

    React.useEffect(() => {
      context.emitter.on(setValue);
      return () => {
        context.emitter.off(setValue);
      };
    }, [context]);

    return value;
  }

  function useRef(initialValue) {
    if (!isInitialized[cursor]) {
      memorizedStates[cursor] = { current: initialValue };
      isInitialized[cursor] = true;
    }
    const memorizedState = memorizedStates[cursor];
    cursor = cursor + 1;
    return memorizedState;
  }

  function createStore(reducer, initialValue) {
    let currentState = initialValue;
    const listeners = [];

    const getState = () => currentState;
    const subscribe = (callback) => listeners.push(callback);

    const dispatch = (action) => {
      const nextState = reducer(currentState, action);
      if (nextState !== currentState) {
        currentState = nextState;
        listeners.forEach((listener) => listener());
      }
    };

    return { getState, subscribe, dispatch };
  }

  function useReducer(reducer, initialValue) {
    const { forceUpdate } = useForceUpdate();

    if (!isInitialized[cursor]) {
      memorizedStates[cursor] = createStore(reducer, initialValue);
      isInitialized[cursor] = true;
    }

    const store = memorizedStates[cursor];
    store.subscribe(forceUpdate);
    cursor = cursor + 1;

    return [store.getState(), store.dispatch];
  }

  function useMemo(nextCreate, deps) {
    if (!memorizedStates[cursor]) {
      const nextValue = nextCreate();
      memorizedStates[cursor] = [nextValue, deps];
      cursor = cursor + 1;
      return nextValue;
    }

    const nextDeps = deps;
    const [prevValue, prevDeps] = memorizedStates[cursor];
    if (prevDeps.every((prev, idx) => prev === nextDeps[idx])) {
      cursor = cursor + 1;
      return prevValue;
    }

    const nextValue = nextCreate();
    memorizedStates[cursor] = [nextValue, nextDeps];
    cursor = cursor + 1;
    return nextValue;
  }

  function memo(TargetComponent) {
    return (nextProps) => {
      if (!TargetComponent.memorizedState) {
        const nextValue = React.createElement(TargetComponent, nextProps);
        TargetComponent.memorizedState = [nextValue, nextProps];
        return nextValue;
      }

      const [prevValue, prevProps] = TargetComponent.memorizedState;
      const sameProps = Object.keys(nextProps).every((key) => {
        return nextProps[key] === prevProps[key];
      });
      if (sameProps) return prevValue;

      const nextValue = React.createElement(TargetComponent, nextProps);
      TargetComponent.memorizedState = [nextValue, nextProps];
      return nextValue;
    };
  }

  function useCallback(callback, deps) {
    return useMemo(() => callback, deps);
  }

  return {
    useState,
    useEffect,
    createContext,
    useContext,
    useRef,
    useReducer,
    useMemo,
    memo,
    useCallback,

    resetCursor,
    cleanupEffects,
    createStore,
  };
})();

export default MyReact;
