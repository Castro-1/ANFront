import { useState, useEffect } from "react";
import axios from "axios";
import {
  initializeAValues,
  initializeBValues,
} from "./features/initializeValues";
import { formattedMatrix } from "./features/formattedMatrix";
import DisplayResults from "./features/Results";
import Input from "../../components/inputs/Input";
import Select from "../../components/inputs/Select";
import Button from "../../components/Button";
import MatrixInputs from "./features/MatrixInputs";

export default function GaussSeidel() {
  const [inputs, setInputs] = useState({
    size: 2,
    A: initializeAValues(),
    B: initializeBValues(),
    X: initializeBValues(),
    tol: "",
    niter: "",
    error: "0",
  });
  const [results, setResults] = useState(null);

  const handleSize = (ev) => {
    setInputs((prev) => ({ ...prev, size: ev.target.value }));
  };

  const handleInputs = (ev) => {
    let value = ev.target.value;
    setInputs((prev) => {
      return { ...prev, [ev.target.name]: value };
    });
  };

  useEffect(() => {
    setInputs((prev) => ({
      ...prev,
      A: initializeAValues(),
      B: initializeBValues(),
      X: initializeBValues(),
    }));
  }, [inputs.size]);

  const handleSubmit = async () => {
    let data = {
      A: formattedMatrix(inputs.A, inputs.size),
      b: formattedMatrix(inputs.B, inputs.size),
      x0: formattedMatrix(inputs.X, inputs.size),
      tol: parseFloat(inputs.tol),
      niter: parseInt(inputs.niter),
      error: parseInt(inputs.error),
    };
    console.log(data);

    const response = await axios.post(
      "http://127.0.0.1:8000/part2/gaussseidel/",
      data
    );
    console.log(response.data);
    setResults(response.data);
  };

  return (
    <div>
      <h2>Gauss Seidel</h2>
      <div>
        <Select value={inputs.size} onChange={handleSize}>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
        </Select>
        <div>
          <p>A</p>
          <MatrixInputs
            type="A"
            inputs={inputs.A}
            size={inputs.size}
            setInputs={setInputs}
          />
        </div>
        <div>
          <p>b</p>
          <MatrixInputs
            type="B"
            inputs={inputs.B}
            size={inputs.size}
            setInputs={setInputs}
          />
        </div>
        <div>
          <p>x0</p>
          <MatrixInputs
            type="X"
            inputs={inputs.X}
            size={inputs.size}
            setInputs={setInputs}
          />
        </div>
        <Input
          name="tol"
          placeholder="tolerancia"
          onChange={handleInputs}
          value={inputs.tol}
        />
        <Input
          name="niter"
          placeholder="iteraciones"
          onChange={handleInputs}
          value={inputs.niter}
        />
        <Select name="error" onChange={handleInputs} value={inputs.error}>
          <option value={0}>Error absoluto</option>
          <option value={1}>Error relativo</option>
        </Select>
        <Button onClick={handleSubmit}>Solucionar</Button>
      </div>
      <DisplayResults results={results}/>
    </div>
  );
}
