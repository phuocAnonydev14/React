import clsx from "clsx";
import classes from "./Input.module.css";
import { useState, useRef } from "react";

function Input() {
  const [inputVal, setInputVal] = useState("");
  const [inputList, setInputList] = useState([]);
  const [changeBtn, setChangeBtn] = useState(true);
  const inputRef = useRef();
  const todoIdRef = useRef();

  function handleChangeBtn(id, todo) {
    todoIdRef.current = id;
    // inputRef.current.type.val = todo;
    setInputVal(todo);
    inputRef.current.focus();
    setChangeBtn(false);
  }
  function handleSubmit(inputVal) {
    setInputList((prev) => [...prev, inputVal]);
    inputRef.current.focus();
  }

  function handleDelete(index) {
    let newList = [...inputList];
    newList.splice(index, 1);
    setInputList(newList);
    console.log(inputList);
  }

  function handleUpdate() {
    inputList[todoIdRef.current] = inputVal;
    setChangeBtn(true);
    setInputVal("");
  }

  return (
    <div className="">
      <div className={classes.inputBox}>
        <input
          ref={inputRef}
          className={classes.inputVal}
          type="text"
          placeholder="type something...."
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        {changeBtn === true ? (
          <i
            onClick={() => {
              handleSubmit(inputVal);
              setInputVal("");
            }}
            className={clsx("fa-solid", " fa-circle-plus", classes.check)}
          ></i>
        ) : (
          <i
            onClick={() => {
              handleUpdate();
            }}
            class={clsx("fa-solid fa-pen", classes.check)}
          ></i>
        )}
      </div>

      <ul className={classes.list}>
        {" "}
        Your List
        {inputList.map((box, index) => {
          return (
            <li key={index}>
              <input type="checkbox" />
              <button
                onClick={() => {
                  handleChangeBtn(index, box);
                }}
              >
                Update
              </button>
              {box}{" "}
              <i
                onClick={() => {
                  handleDelete(index);
                }}
                className="fa-solid fa-x"
              ></i>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Input;
