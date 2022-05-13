import React from "react";
import "../Style/CreateTodoButton.css";

function CreateTodoButton({ setOpenModal }) {
  const onClickButton = () => {
    setOpenModal((state) => !state);
  };

  return (
    <button className="CreateTodoButton" onClick={onClickButton}>
      +
    </button>
  );
}

export default CreateTodoButton;
