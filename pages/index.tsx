import React from "react";
import { NextPage } from "next";
import TodoList from "../components/TodoList";
import { TodoType } from "../types/todo";

const todos: TodoType[] = [
    { id: 1, text: "마트 장보기", color: "red", checked: false },
    { id: 2, text: "수학 숙제", color: "orange", checked: false },
    { id: 3, text: "코딩", color: "yellow", checked: true },
    { id: 4, text: "넥스트 공부", color: "green", checked: true },
    { id: 5, text: "요리 연습", color: "blue", checked: false },
    { id: 6, text: "분리수거", color: "navy", checked: false },
]

const app: NextPage = () => {
    return <TodoList todos={todos}/>
}

export default app;