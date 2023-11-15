import { useState, useEffect } from "react";
import { initializeXValues } from "./features/initializeValues";
import MatrixInputs from "./features/MatrixInputs";
import Select from "../../components/inputs/Select";
import Button from "../../components/Button";

export default function Spline() {
  const [inputs, setInputs] = useState({
    size: 2,
    x: initializeXValues(),
    y: initializeXValues(),
  })

  const handleSize = (ev) => {
    setInputs((prev) => ({ ...prev, size: ev.target.value }));
  };

  useEffect(() => {
    setInputs((prev) => ({
      ...prev,
      x: initializeXValues(),
      y: initializeXValues(),
    }));
  }, [inputs.size]);

  const handleSubmit = async () => {
    let data = {
      x: formattedMatrix(inputs.x, inputs.size),
      y: formattedMatrix(inputs.y, inputs.size),
    };

    const response = await axios.post(
      "http://127.0.0.1:8000/part2/lagrange/",
      data
    );
    console.log(response.data);
    setResults(response.data);
  };


  return (
    <div>
      <h2>Spline</h2>
      <div>
        <Select value={inputs.size} onChange={handleSize}>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
        </Select>
        <div>
          <p>x</p>
          <MatrixInputs
            type="x"
            inputs={inputs.x}
            size={inputs.size}
            setInputs={setInputs}
          />
        </div>
        <div>
          <p>y</p>
          <MatrixInputs
            type="y"
            inputs={inputs.y}
            size={inputs.size}
            setInputs={setInputs}
          />
        </div>
        <Button onClick={handleSubmit}>Solucionar</Button>
      </div>
    </div>
  );
}
