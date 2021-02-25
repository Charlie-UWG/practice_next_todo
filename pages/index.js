import { useState } from "react";

export default function todoApp() {
  const [inputTexts, setInputTexts] = useState("");
  const [todos, setTodos] = useState(["やる", "やるぞ", "やれば"]);
  const onChangeText = (event) => setInputTexts(event.target.value);
  console.log(inputTexts);

  const onClickAdd = () => {
    console.log(inputTexts);
    // setTodos([...todos, inputTexts]);
    // setInputTexts("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="TODO"
        onChange={onChangeText}
        value={inputTexts}
      />
      <button onclick={onClickAdd}>check</button>
    </div>
  );
}
