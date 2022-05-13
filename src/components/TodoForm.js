import React from "react";
import  {TodoContext}  from "../context";
import "../Style/form.css";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onCancel = () => {
    setOpenModal(false);
  };
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (newTodoValue === "") {
      alert("Please enter a todo");
    } else {
      addTodo(newTodoValue);
      setOpenModal(false);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Ingrese Todo</label>
      <textarea
        placeholder="Add Todo"
        value={newTodoValue}
        onChange={onChange}
      ></textarea>
      <div className="TodoForm-buttonContainer">
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Add
        </button>

        <button
          type="button"
          onClick={onCancel}
          className="TodoForm-button TodoForm-button--cancel"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
export default TodoForm;
