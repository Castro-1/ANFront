import SmallInput from "../../../components/inputs/SmallInput";

export default function MatrixInputs({ type, inputs, size, setInputs }) {
  const handleInputs = (matrix, i, j = 0, value) => {
    setInputs((prev) => {
      let tmp = prev[matrix];
      if (matrix === "A") {
        tmp[i][j] = value;
      } else {
        tmp[i] = value;
      }
      return { ...prev, [matrix]: prev[matrix] };
    });
  };

  const generateAInputs = () => {
    const cells = [];
    for (let i = 0; i < size; i++) {
      let hlp = [];
      for (let j = 0; j < size; j++) {
        hlp.push(
          <SmallInput
            key={j}
            value={inputs[i][j]}
            onChange={(ev) => handleInputs("A", i, j, ev.target.value)}
          />
        );
      }
      cells.push(<div key={i}>{hlp}</div>);
    }
    return cells;
  };

  const generateBInputs = () => {
    const cells = [];
    for (let i = 0; i < size; i++) {
      cells.push(
        <SmallInput
          key={i}
          value={inputs[i]}
          onChange={(ev) => handleInputs("B", i, 0, ev.target.value)}
        />
      );
    }
    return cells;
  };

  const generateXInputs = () => {
    const cells = [];
    for (let i = 0; i < size; i++) {
      cells.push(
        <SmallInput
          key={i}
          value={inputs[i]}
          onChange={(ev) => handleInputs("X", i, 0, ev.target.value)}
        />
      );
    }
    return cells;
  };

  const A = type === "A" && generateAInputs();
  const B = type === "B" && generateBInputs();
  const X = type === "X" && generateXInputs();

  return (
    <div>
      {A}
      {B}
      {X}
    </div>
  );
}
