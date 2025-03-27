import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  //   function handleAdd() {
  //     setCount(count + 1);
  //   }
  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={handleAdd}>Add</button>
    </>
  );
}
