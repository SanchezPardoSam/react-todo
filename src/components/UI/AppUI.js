import React from "react";
import  CreateTodoButton  from "../CreateTodoButton";
import  TodoCounter  from "../TodoCounter";
import  TodoItem  from "../TodoItem";
import  TodoList  from "../TodoList";
import  TodoSeach  from "../TodoSeach";
import  {TodoContext}  from "../../context";
import  Modal  from "../modal";
import  TodoForm  from "../TodoForm";

function AppUI() {
  const {
    loading,
    error,
    completedTodo,
    deletedTodo,
    searchedTodos,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <div className="App">
      <header className="App-header">
        <TodoCounter />
        <TodoSeach />

        <TodoList>
          {error && <p>error</p>}
          {loading && <p>Loading...</p>}
          {!loading && !searchedTodos.length && <p>Crea un Todo</p>}
          {searchedTodos.map((todo, indice) => (
            <TodoItem
              completed={todo.completed}
              key={indice}
              text={todo.text}
              onCompleted={() => completedTodo(todo.text)}
              onDeleted={() => deletedTodo(todo.text)}
            ></TodoItem>
          ))}{" "}
        </TodoList>

        {openModal && (
          <Modal>
            <TodoForm></TodoForm>
          </Modal>
        )}
        <div className="App-button">
          <CreateTodoButton setOpenModal={setOpenModal}></CreateTodoButton>
        </div>
      </header>
    </div>
  );
}

export default AppUI;
