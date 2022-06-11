import { readFileSync, writeFileSync } from "fs";
import { TodoType } from "../../types/todo";

const getList = () => {
    const todoBuffer = readFileSync("data/todos.json");
    const todoString = todoBuffer.toString();

    if (!todoString) {
        return [];
    }

    const todos: TodoType[] = JSON.parse(todoString);

    return todos;
}

// id에 해당하는 투두 아이템이 있는지 확인하는 함수
const exist = ({ id }: { id: number }) => {
    const todos = getList();
    const todo = todos.some((todo) => todo.id === id);

    return todo;
}

const write = async (todos: TodoType[]) => {
    writeFileSync("data/todos.json", JSON.stringify(todos));
}

export default { getList, exist, write };