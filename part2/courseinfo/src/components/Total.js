import React from "react";

const Total = (props) => {
  const total = props.parts
    .map((part) => part.exercises)
    .reduce((accumulator, currentValue) => accumulator + currentValue);
  return (
    <p>
      <b>Total of exercises {total}</b>
    </p>
  );
};

export default Total;
