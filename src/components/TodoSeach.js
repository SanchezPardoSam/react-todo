import React from "react";
import  {TodoContext}  from "../context";

function TodoSeach(){
  const {searchValue, setSeacrchValue} = React.useContext(TodoContext);
  const onSearchValueChange = (event) => {
    setSeacrchValue(event.target.value);
  };
  return (
    <input 
    className="TodoSearch" 
    placeholder="Cebolla"
    onChange={onSearchValueChange}
    value = {searchValue}
     ></input>
  );
}

export default TodoSeach;