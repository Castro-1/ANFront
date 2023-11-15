import { useState } from "react";
import axios from "axios";
import { initializeXValues } from "./features/initializeValues";
import { formattedMatrix } from "./features/formattedMatrix";
import MatrixInputs from "./features/MatrixInputs";
import Select from "../../components/inputs/Select";
import Button from "../../components/Button";
import DisplayResults from "./features/Results";

export default function Newton() {
  const [inputs, setInputs] = useState({
    size: 2,
    x: initializeXValues(),
    y: initializeXValues(),
  });

  const [results, setResults] = useState(null);

  const handleSize = (ev) => {
    setInputs((prev) => ({ ...prev, size: ev.target.value }));
  };

  const handleSubmit = async () => {
    let data = {
      x: formattedMatrix(inputs.x, inputs.size),
      y: formattedMatrix(inputs.y, inputs.size),
    };

    const response = await axios.post(
      "http://127.0.0.1:8000/part3/newton/",
      data
    );
    setResults(response.data);
  };

  return (
    <div>
      <h2>Newton</h2>
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
        <Button onClick={handleSubmit}>Interpolar</Button>
      </div>
      <DisplayResults results={results} x={inputs.x} y={inputs.y} />
    </div>
  );
}
