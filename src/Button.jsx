export default function Button() {
  function handleClick() {
    console.log("Button CLick");
  }

  function sum(num1, num2) {
    const totalSum = num1 + num2;
    console.log(totalSum);
  }

  return (
    <>
      <div>
        <button onClick={() => console.warn("hello word")}>Button - 1</button>
        <button onClick={handleClick}>Button - 2</button>
        <button onClick={() => sum(20, 30)}>Button - 3</button>
        <button
          onClick={function () {
            console.log("Normal Function");
          }}
        >
          Button - 4
        </button>
        <button
          onClick={function handleClidk() {
            console.log("button learn ok");
          }}
        >
          Button - 5
        </button>
      </div>
    </>
  );
}
