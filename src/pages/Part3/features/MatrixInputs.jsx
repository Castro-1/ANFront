import SmallInput from "../../../components/inputs/SmallInput";

export default function MatrixInputs({
  type,
  inputs,
  size,
  setInputs,
  setResults,
}) {
  const handleInputs = (matrix, i, value) => {
    setInputs((prev) => {
      let tmp = prev[matrix];
      tmp[i] = value;
      return { ...prev, [matrix]: prev[matrix] };
    });
    setResults(null);
  };

  const generateXInputs = () => {
    const cells = [];
    for (let i = 0; i < size; i++) {
      cells.push(
        <SmallInput
          key={i}
          value={inputs[i]}
          onChange={(ev) => handleInputs("x", i, ev.target.value)}
        />
      );
    }
    return cells;
  };

  const generateYInputs = () => {
    const cells = [];
    for (let i = 0; i < size; i++) {
      cells.push(
        <SmallInput
          key={i}
          value={inputs[i]}
          onChange={(ev) => handleInputs("y", i, ev.target.value)}
        />
      );
    }
    return cells;
  };

  const X = type === "x" && generateXInputs();
  const Y = type === "y" && generateYInputs();

  return (
    <div>
      {X}
      {Y}
    </div>
  );
}
