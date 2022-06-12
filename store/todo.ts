import { TodoType } from "../types/todo";

// 3. 항상 npm-module-or-app/reducer/ACTION_TYPE 형태의 action 타입을 가져야 한다.
export const INIT_TODO_LIST = "todo/INIT_TODO_LIST";

// 2. 항상 action creator를 함수 형태로 export 해야 한다.
export const setTodo = (payload: TodoType[]) => {
    return {
        type: INIT_TODO_LIST,
        payload
    };
};

export const todoActions = { setTodo };

interface TodoReduxState {
    todos: TodoType[];
}

const initialState: TodoReduxState = {
    todos: []
}

// 1. 항상 reducer 라는 이름의 함수를 export default 한다.
export default function reducer(state = initialState, action: any) {
    switch (action.type) {
        case SET_TODO_LIST:
            const newState = {...state, todos: action.payload};
            return newState;
        default:
            return state;
    }
}