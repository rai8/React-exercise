import React from "react";
function Total() {
  const exercise1 = 10;
  const exercise2 = 7;
  const exercise3 = 7;
  return (
    <div>
      <p>
        The total number awarded in this exercise is{" "}
        {exercise1 + exercise2 + exercise3}
      </p>
    </div>
  );
}

export default Total;
