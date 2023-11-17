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

export default function SOR() {
  const [inputs, setInputs] = useState({
    size: 2,
    norm: "1",
    A: initializeAValues(),
    B: initializeBValues(),
    X: initializeBValues(),
    omega: "",
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

  const handleSubmit = async () => {
    let data = {
      A: formattedMatrix(inputs.A, inputs.size),
      b: formattedMatrix(inputs.B, inputs.size),
      x0: formattedMatrix(inputs.X, inputs.size),
      // norm,
      omega: parseFloat(inputs.omega),
      tol: parseFloat(inputs.tol),
      niter: parseInt(inputs.niter),
      error: parseInt(inputs.error),
    };

    const response = await axios.post("http://127.0.0.1:8000/part2/sor/", data);
    console.log(response.data);
    setResults(response.data);
  };

  return (
    <div>
      <h2>SOR</h2>
      <div className="text-left">
        <div>
          <p>Tamaño</p>
          <Select name="size" value={inputs.size} onChange={handleInputs}>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
          </Select>
        </div>
        <div className="text-center">
          <p>A</p>
          <MatrixInputs
            type="A"
            inputs={inputs.A}
            size={inputs.size}
            setInputs={setInputs}
          />
        </div>
        <div className="text-center">
          <p>b</p>
          <MatrixInputs
            type="B"
            inputs={inputs.B}
            size={inputs.size}
            setInputs={setInputs}
          />
        </div>
        <div className="text-center">
          <p>x0</p>
          <MatrixInputs
            type="X"
            inputs={inputs.X}
            size={inputs.size}
            setInputs={setInputs}
          />
        </div>
        <div>
          <p>Omega</p>
          <Input
            name="omega"
            placeholder="1.1"
            onChange={handleInputs}
            value={inputs.omega}
          />
        </div>
        <div>
          <p>Tolerancia</p>
          <Input
            name="tol"
            placeholder="0.001"
            onChange={handleInputs}
            value={inputs.tol}
          />
        </div>
        <div>
          <p>Iteraciones</p>
          <Input
            name="niter"
            placeholder="100"
            onChange={handleInputs}
            value={inputs.niter}
          />
        </div>
        <div>
          <p>Norma</p>
          <Select name="norm" value={inputs.norm} onChange={handleInputs}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={"inf"}>inf</option>
          </Select>
        </div>
        <div>
          <p>Error</p>
          <Select name="error" value={inputs.error} onChange={handleInputs}>
            <option value={0}>Error absoluto</option>
            <option value={1}>Error relativo</option>
          </Select>
        </div>
        <div className="text-center mt-2">
          <Button onClick={handleSubmit}>Solucionar</Button>
        </div>
      </div>
      <DisplayResults results={results} />
    </div>
  );
}
