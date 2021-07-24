import React from 'react';

function Total({ parts }) {
  const calculateTotal = () => parts.reduce((acc, item) => (acc + item.exercises), 0);
  return <div>Total exercises: {calculateTotal()}</div>;
}

export default Total;
