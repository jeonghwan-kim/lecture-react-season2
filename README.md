# [리액트 2부] 고급 주제와 훅

"[[리액트 2부] 고급 주제와 훅](https://inf.run/jascB)" 수업 자료입니다.

## 내용

"[[리액트 1부] 만들면서 학습하는 리액트](https://www.inflearn.com/course/만들면서-학습하는-리액트?inst=b59d75f4)"의 후속 수업입니다. 리액트로 생각하기 기반으로 컴포넌트 설계 기법을 익힙니다. 고급 주제인 컨택스트, 레프 객체, 고차 컴포넌트 패턴, 제어 컴포넌트를 다룹니다. 함수 컴포넌트와 함께 사용하는 리액트 훅을 기본 훅과 추가 훅으로 나눠 두 편에 걸쳐 학습합니다

각 주제의 구조와 원리를 만들면서 이해하도록 구성했습니다. 뿐만 아니라 리액트 api를 능숙하게 사용할 수 있도록 실습 예제에서 활용하도록 준비했습니다.

## 강의 노트

**1편 리액트로 사고하기**

- [1.1장 준비](https://jeonghwan-kim.github.io/2023/06/24/lecture-react-season2-part1-ch1)
- [1.2장 상품목록 화면](https://jeonghwan-kim.github.io/2023/06/24/lecture-react-season2-part1-ch2)
- [1.3장 주문내역 화면](https://jeonghwan-kim.github.io/2023/06/24/lecture-react-season2-part1-ch3)
- [1.4장 장부구니 화면](https://jeonghwan-kim.github.io/2023/06/24/lecture-react-season2-part1-ch4)
- [1편 최종 정리](https://jeonghwan-kim.github.io/2023/06/24/lecture-react-season2-part1-ch5)

**2편 고급 주제**

- [2.1장 컨택스트](https://jeonghwan-kim.github.io/2023/06/24/lecture-react-season2-part2-ch1)
- [2.2장 라우터 1](https://jeonghwan-kim.github.io/2023/06/24/lecture-react-season2-part2-ch2)
- [2.3장 라우터 2](https://jeonghwan-kim.github.io/2023/06/24/lecture-react-season2-part2-ch3)
- [2.4장 다이얼로그 1](https://jeonghwan-kim.github.io/2023/06/24/lecture-react-season2-part2-ch4)
- [2.5장 다이얼로그 2](https://jeonghwan-kim.github.io/2023/06/24/lecture-react-season2-part2-ch5)
- [2편 최종 정리](https://jeonghwan-kim.github.io/2023/06/24/lecture-react-season2-part2-ch6)

**3편 기본 훅**

- [3.1장 클래스/함수 컴포넌트](https://jeonghwan-kim.github.io/2023/06/24/lecture-react-season2-part3-ch1)
- [3.2장 상태 훅](https://jeonghwan-kim.github.io/2023/06/24/lecture-react-season2-part3-ch2)
- [3.3장 부수효과 훅](https://jeonghwan-kim.github.io/2023/06/24/lecture-react-season2-part3-ch3)
- [3.4장 훅 활용 1](https://jeonghwan-kim.github.io/2023/06/24/lecture-react-season2-part3-ch4)
- [3.5장 컨택스트 훅](https://jeonghwan-kim.github.io/2023/06/24/lecture-react-season2-part3-ch5)
- [3.6장 훅 활용 2](https://jeonghwan-kim.github.io/2023/06/24/lecture-react-season2-part3-ch6)
- [3편 최종정리](https://jeonghwan-kim.github.io/2023/06/24/lecture-react-season2-part3-ch7)

**4편 추가 훅**

- [4.1장 레프 훅](https://jeonghwan-kim.github.io/2023/06/24/lecture-react-season2-part4-ch1)
- [4.2장 제어 폼](https://jeonghwan-kim.github.io/2023/06/24/lecture-react-season2-part4-ch2)
- [4.3장 리듀서 훅](https://jeonghwan-kim.github.io/2023/06/24/lecture-react-season2-part4-ch3)
- [4.4장 메모이제이션 훅](https://jeonghwan-kim.github.io/2023/06/24/lecture-react-season2-part4-ch4)
- [4편 최종정리](https://jeonghwan-kim.github.io/2023/06/24/lecture-react-season2-part4-ch5)

## 폴더 구성

수업 실습을 위한 폴더는 다음과 같이 구성했습니다.

- 1-react: 1편, 2편에서 만든 어플리케이션
- 2-hook: 3편, 4편에서 다시 만든 어플리케이션(함수 컴포넌트와 훅 사용)
- shared: 위 두 프로젝트에서 공통으로 사용하는 코드(api 요청 객체, 목업 서버 등)

## 브랜치

강의 중 실습은 아래 브랜치 중 하나로 이동하여 진행합니다. 브랜치를 이용하면 각 실습에서 풀어야하는 문제를 준비되어 있습니다.

**1편 리액트로 사고하기**

- `1-think/01-init`: 1.1.4 실습 환경 구성
- `1-think/02-app`: 1.2.1 단일 컴포넌트 App
- `1-think/03-button`: 1.2.3 Button
- `1-think/04-product-item`: 1.2.4 ProductItem
- `1-think/05-title`: 1.2.5 Title
- `1-think/06-navbar`: 1.2.6 Navbar
- `1-think/07-page`: 1.2.7 Page
- `1-think/08-product-page`: 1.2.8 ProductPage
- `1-think/09-product-page-state`: 1.2.9 상태 정의
- `1-think/10-order-page`: 1.3.2 OrderPage
- `1-think/11-card`: 1.3.3 Card
- `1-think/12-xxxcard`: 1.3.4 OrderXXXCard
- `1-think/13-order-page-state`: 1.3.5 상태 정의
- `1-think/14-cart-page`: 1.4.2 CartPage
- `1-think/15-title`: 1.4.3 Title 다시보기
- `1-think/16-orderable-product-item`: 1.4.4 ProductItem 다시보기
- `1-think/17-form-control`: 1.4.5 FormControl
- `1-think/18-order-form`: 1.4.6 OrderForm, 비제어 컴포넌트
- `1-think/19-ref`: 1.4.8 OrderForm, 레프
- `1-think/20-payment-button`: 1.4.9 PaymentButton
- `1-think/21-cart-page-state`: 1.4.10 상태 정의
- `1-think/22-cart-page-onsubmit`: 1.4.11 역방향 데이터 흐름 추가하기

**2편 고급 주제**

- `2-advanced/01-event-emitter`: 2.1.2 이벤트 에미터
- `2-advanced/02-context`: 2.1.4 공급자와 소비자
- `2-advanced/03-history-api-fallback`: 2.2.2 경로에 따라 컴포넌트 렌더링
- `2-advanced/04-link`: 2.2.3 Link
- `2-advanced/05-router`: 2.2.4 Router
- `2-advanced/06-routes`: 2.2.5 Routes
- `2-advanced/07-route`: 2.2.6 Route
- `2-advanced/08-pushstate`: 2.3.1 주소창 주소 변경하기
- `2-advanced/09-popstate`: 2.3.2 뒤/앞으로 가기
- `2-advanced/10-change-path`: 2.3.3 프로그래밍적으로 주소 변경
- `2-advanced/11-get-component-name`: 2.3.4 고차 컴포넌트
- `2-advanced/12-withrouter-navigate`: 2.3.5 withRouter와 navigate
- `2-advanced/13-withrouter-match`: 2.3.6 match
- `2-advanced/14-withrouter-params`: 2.3.7 params
- `2-advanced/15-dialog`: 2.4.1 Dialog
- `2-advanced/16-layout`: 2.4.4 레이아웃 컨택스트
- `2-advanced/17-set-dialog`: 2.4.3 프로그래밍적으로 다이얼로그 제어
- `2-advanced/18-withlayout`: 2.4.4 withLayout
- `2-advanced/19-loading`: 2.4.5 다이얼로그 조합
- `2-advanced/20-portal`: 2.5.3 Dialog 문제 해결
- `2-advanced/21-error-dialog`: 2.5.4 ErrorDialog(alert)
- `2-advanced/22-payment-success-dialog`: 2.5.5 PaymentSuccessDialog(confirm)
- `2-advanced/23-dialog-ref`: 2.5.6 Dialog 개선: 레프

**3편 기본 훅**

- `3-hook/01-init`: 3.1.1 새로운 프로젝트
- `3-hook/02-use-state`: 3.2.5 더 단순하게
- `3-hook/03-use-effect`: 3.3.7 부수 효과 정리하기
- `3-hook/04-product-page`: 3.4.1 메뉴 목록 페이지
- `3-hook/05-cart-page`: 3.4.3 장바구니 페이지(실습)
- `3-hook/06-order-page`: 3.4.4 주문내역 페이지(실습)
- `3-hook/07-use-context`: 3.5.2 useContext
- `3-hook/08-router`: 3.6.1 MyRouter: Router
- `3-hook/09-routes-route-link`: 3.6.2 MyRouter: Routes, Route, Link
- `3-hook/10-router-hooks`: 3.6.3 MyRouter: 커스텀 훅
- `3-hook/11-router-apply`: 3.6.4 MyRouter 활용(실습)
- `3-hook/12-layout`: 3.6.6 MyLayout: Layout(실습)
- `3-hook/13-layout-hooks`: 3.6.8 MyLayout: 커스텀 훅 (실습)
- `3-hook/14-layout-apply`: 3.6.10 MyLayout 활용 (실습)

**4편 추가 훅**

- `4-hook/01-use-ref`: 4.1.1 useRef
- `4-hook/02-use-ref-apply`: 4.1.2 useRef 활용(실습)
- `4-hook/03-myform`: 4.2.6 리액트 컨택스트: Form, Field, ErrorMessage
- `4-hook/04-myform-apply`: 4.2.7 활용: OrderForm(실습)
- `4-hook/05-use-reducer`: 4.3.3 useReducer
- `4-hook/06-use-reducer-apply`: 4.3.6 활용: MyForm(실습)
- `4-hook/07-use-memo`: 4.4.4 useCallback
- `4-hook/08-use-memo-apply`: 4.4.6 활용: OrderStatusCard(실습)
- `main`: 4.4.8 활용: MyRouter params(실습). 최종 결과물.

## 샘플 어플리케이션 요구사항

- [요구사항 문서](https://github.com/jeonghwan-kim/lecture-react-season2/wiki/요구사항)
