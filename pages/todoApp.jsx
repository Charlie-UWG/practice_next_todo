import { useState } from "react";

export default function todoApp() {
  const [inputTexts, setInputTexts] = useState([""]);
  const onChangeText = (event) => setInputTexts(event.target.value);
  return (
    <div>
      <input
        placeholder="検索ワード"
        onChange={onChangeText}
        value={inputTexts}
      />
      <button>check</button>
    </div>
  );
}
