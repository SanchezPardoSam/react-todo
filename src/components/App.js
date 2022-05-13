import React from "react";
import "../Style/App.css";
import  AppUI  from "./UI/AppUI";
import  {TodoProvider} from "../context";

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;