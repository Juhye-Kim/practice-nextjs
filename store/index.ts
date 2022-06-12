import { combineReducers } from "redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import todo from "./todo";
import { configureStore } from "@reduxjs/toolkit";

// reducer들을 모듈별로 관리하기 때문에, combineReducer를 사용해 하나로 모음
const rootReducer = combineReducers({
    todo: todo.reducer,
});

// 합쳐진 리듀서에 타입이 '__NEXT_REDUX_WRAPPER_HYDRATE__'인 리듀서를 추가 
// (Hydrate: 서버에서 생성된 Redux Store를 클라이언트에서 사용할 수 있게 전달해줌)
const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, 
            ...action.payload
        };
        if (state.count) nextState.count = state.count;
        return nextState;
    }
    return rootReducer(state, action);
};

// Store 타입
export type RootState = ReturnType<typeof rootReducer>;

// reducer, middleware로 Store를 만들어 리턴
const initStore = () => {
    return configureStore({
        reducer,
        devTools: true,
    })
};

// App 컴포넌트에서 wrapper로 쓰기 위해
export const wrapper = createWrapper(initStore);



