import { useMemo, useState } from "react";

function App() {
  const [fact, setFact] = useState(1);

  return (
    <div>
      <input
        type="number"
        onChange={(e) => setFact(Number(e.target.value))}
        placeholder="Enter the number here"
      />
      <br />
      Factorial of {fact} is {<Factorial number={fact} />}
    </div>
  );
}

 Factorial=useMemo(function Factorial({ number }) {
  if (isNaN(number) || number < 0) return "Invalid input";

  if (number === 0) return 1;

  let fact = 1;
  for (let i = number; i >= 1; i--) {
    fact *= i;
  }

  return fact;
},[fact])

export default App;
