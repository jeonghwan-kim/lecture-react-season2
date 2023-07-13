export const createEventEmitter = (value) => {
  let handlers = [];

  const on = (handler) => handlers.push(handler);
  const off = (handler) => {
    handlers = handlers.filter((h) => h !== handler);
  };

  const get = () => value;
  const set = (newValue) => {
    value = newValue;
    handlers.forEach((handler) => handler(value));
  };

  return {
    on,
    off,
    get,
    set,
  };
};
