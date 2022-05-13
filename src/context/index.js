import React from "react";
import  useLocalStore  from "./useLocalStorage,";

const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    loading,
    error,
    item: todos,
    saveItem: saveTodos,
  } = useLocalStore("TODOS_V1", []);

  const [searchValue, setSeacrchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  const completo = todos.filter((todo) => !!todo.completed).length;
  const totalCompleto = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todos) => {
      const todoText = todos.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    });
  }

  const completedTodo = (text) => {
    const completeIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];

    newTodos[completeIndex].completed = true;
    saveTodos(newTodos);
  };

  const addTodo = (text) => {
    
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text: text,
    });
    saveTodos(newTodos);
  };

  const deletedTodo = (text) => {
    const completeIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];

    newTodos.splice(completeIndex, 1);
    saveTodos(newTodos);
  };
  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        todos,
        saveTodos,
        searchValue,
        setSeacrchValue,
        completo,
        totalCompleto,
        completedTodo,
        deletedTodo,
        searchedTodos,
        openModal,
        setOpenModal,
        addTodo
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export  { TodoProvider, TodoContext };
