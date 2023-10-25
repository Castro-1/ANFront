import { useState } from "react";

export default function SOR() {
  const [size, setSize] = useState(2);

  const initializeAValues = () => {
    const values = [];
    for (let i = 0; i < 6; i++) {
      let hlp = [];
      for (let j = 0; j < 6; j++) {
        hlp.push(0);
      }
      values.push(hlp);
    }
    return values;
  };

  const initializeBValues = () => {
    const values = [];
    for (let i = 0; i < 6; i++) {
      values.push(0);
    }
    return values;
  };

  const [AValues, setAValues] = useState(initializeAValues());
  const [BValues, setBValues] = useState(initializeBValues());
  const [XValues, setXValues] = useState(initializeBValues());

  const handleA = (i, j, value) => {
    setAValues((prev) => {
      let tmp = prev;
      tmp[i][j] = value;
      return [...tmp];
    });
  };

  const handleB = (i, value) => {
    setBValues((prev) => {
      let tmp = prev;
      tmp[i] = value;
      return [...tmp];
    });
  };

  const handleX = (i, value) => {
    setXValues((prev) => {
      let tmp = prev;
      tmp[i] = value;
      return [...tmp];
    });
  };

  const generateAInputs = () => {
    const inputs = [];
    for (let i = 0; i < size; i++) {
      let hlp = [];
      for (let j = 0; j < size; j++) {
        hlp.push(
          <input
            type="number"
            key={j}
            value={AValues[i][j]}
            onChange={(ev) => handleA(i, j, ev.target.value)}
          />
        );
      }
      inputs.push(<div key={i}>{hlp}</div>);
    }
    return inputs;
  };

  const generateBInputs = () => {
    const inputs = [];
    for (let i = 0; i < size; i++) {
      inputs.push(
        <input
          type="number"
          key={i}
          value={BValues[i]}
          onChange={(ev) => handleB(i, ev.target.value)}
        />
      );
    }
    return inputs;
  };

  const generateXInputs = () => {
    const inputs = [];
    for (let i = 0; i < size; i++) {
      inputs.push(
        <input
          type="number"
          key={i}
          value={XValues[i]}
          onChange={(ev) => handleX(i, ev.target.value)}
        />
      );
    }
    return inputs;
  };

  return (
    <div>
      <h2>SOR</h2>
      <div>
        <select value={size} onChange={(ev) => setSize(ev.target.value)}>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
        </select>
        <div>
          <p>A</p>
          {generateAInputs()}
        </div>
        <div>
          <p>B</p>
          {generateBInputs()}
        </div>
        <div>
          <p>X</p>
          {generateXInputs()}
        </div>
        <input placeholder="Tolerancia" />
        <select>
          <option value="absoluto">Error absoluto</option>
          <option value="relativo">Error relativo</option>
        </select>
      </div>
    </div>
  );
}
