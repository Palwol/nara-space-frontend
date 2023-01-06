# 나라스페이스테크놀로지 프론트엔드 사전 과제

- node version: 18.12.1

## 실행 방법

```bash
npm i
npm run server # json-server 시작
npm run dev # webpack dev server 시작
```

## 사용 라이브러리

### 요구사항

- React
- Redux
- Styled-components
- json-server

### 환경 설정

- Webpack
- Babel
- TypeScript
- eslint
- prettier

### API 요청

- axios

### React

- react-router-dom

### Redux

- react-redux
- @reduxjs/toolkit

## 코드 설명

### 번들링

- webpack을 이용해 프로젝트 번들링을 진행했습니다.
- webpack config는 development, production 모드를 구분해서 설정했습니다.
  - development 모드에서는 webpack dev server가 실행됩니다.
  - production 모드에서는 프로젝트 최상단 경로에 `.build` 파일이 생성되며, 번들 최적화를 진행합니다.
- dotenv를 적용해 .env 파일에서 환경변수를 관리할 수 있도록 설정했습니다.

### 디자인 시스템

- Styled-components의 Theme, GlobalStyle을 적용하여 반복되는 스타일 코드를 줄였습니다.
- 반응형 레이아웃은 media query를 이용해 구현했습니다. 반복되는 media query 호출 코드도 Theme에서 관리하도록 했습니다.
- svg 파일은 webpack의 svgr 라이브러리를 이용해 리액트 컴포넌트로 import해서 사용했습니다.
- 비슷한 레이아웃과 데이터를 사용하는 컴포넌트는 `src/components` 폴더에 공통 컴포넌트로 분리했습니다. 컴포넌트 변형에 필요한 변수나 데이터는 해당 컴포넌트를 사용하는 상위 컴포넌트에게서 prop으로 전달받았습니다.

### Redux를 이용한 서버 상태 관리

- redux-toolkit의 `createAsyncThunk`를 미들웨어로 이용해서 비동기 API 요청(axios)을 실행했습니다.
  - `extraReducers`에서 서버 데이터를 가져올 때 발생하는 로딩, 에러 상태를 처리합니다. Promise가 pending일 때 로딩 상태를, reject 되었을 때 에러 상태를 `true`로 전환합니다.
- redux-toolkit의 `createSlice`를 이용해서 reducer를 작성했습니다.
  - 서버 데이터를 가져오면, `data`와 `changedData` state에 가져온 데이터를 저장합니다.
  - 사용자가 유저 리스트에서 유저를 체크해서 데이터가 변경되면 `changedData`를 업데이트합니다.
  - 변경한 유저 데이터를 저장 버튼으로 저장하면 `changedData`를 이용해 서버에 patch 요청을 보내고, 다시 데이터를 불러와서 `data`, `changedData`에 저장합니다.
  - 메인페이지를 벗어나면 `changedData`를 초기 상태인 `data`로 초기화합니다.

### json-server 데이터 구조

- `user_data.json` 데이터를 json-server에 다음과 같이 저장했습니다.

```json
{
  "users": [
    {
      "id": 1,
      "result": [
        {
          "id": 1,
          "name": "Pororo",
          "date": "1984-02-23",
          "comment": "I like to play.",
          "image": "1.png",
          "checked": false
        },
        {
          "id": 2,
          "name": "Apple Kim",
          "date": "1995-01-12",
          "comment": "This is innovation.",
          "image": "2.png",
          "checked": true
        }
        // ...
      ]
    }
  ]
}
```

- 유저들의 `checked` 정보를 변경한 데이터를 서버에 업데이트 요청 시, `checked`가 변경된 유저들마다 `patch` 요청을 하나씩 보내기에는 서버 요청 부담이 크다고 판단했습니다.
- 따라서 `users` 데이터에 id 1을 부여하고, id 1의 result에 해당하는 전체 유저 데이터를 payload로 보내서 업데이트하는 방식을 사용했습니다.

### 오름차순, 내림차순 정렬

- 오름차순, 내림차순을 선택하는 selectbox와 정렬이 적용되는 리스트는 각각 고유하게 정렬되어야 한다고 판단했습니다. 따라서 정렬 방식과 데이터 관리에 전역 상태를 사용하지 않고 지역 상태로 관리했습니다.
- 정렬을 사용하는 상위 컴포넌트에서 정렬된 데이터를 나타내는 상태인 `orderedData`, 현재 정렬 방식을 나타내는 상태인 `categoryItem`을 `useState`로 관리합니다.
- 서버에서 새 데이터를 받아오거나 정렬 방식이 변경되면 `sortData` 함수를 실행해서 데이터를 새롭게 정렬합니다.

## 스스로 판단한 부분

- 유저 리스트에서, 이름이 길어서 한 줄을 넘어가는 경우 말줄임표(...) 처리를 해 한 줄 안에 들어오도록 했습니다.
- `/user` 페이지와 `/user/:userId` 페이지를 구분해서 작성했습니다.
  - `/user` 페이지는 체크된 유저 리스트와 유저 상세정보가 함께 나오는 페이지이며, 유저 리스트에서 유저 클릭 시 오른쪽 유저 상세정보가 클릭한 유저의 정보로 변경됩니다.
  - `/user/:userId` 페이지는 직접 주소창에 입력해야 진입이 가능하며, `userId`에 해당하는 유저 정보만을 보여줍니다.
