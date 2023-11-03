import { useState, useEffect } from "react";
import MatrixInputs from "./features/MatrixInputs";
import {
  initializeAValues,
  initializeBValues,
} from "./features/initializeValues";
import Input from "../../components/inputs/Input";
import Select from "../../components/inputs/Select";

export default function GaussSeidel() {
  const [inputs, setInputs] = useState({
    size: 2,
    A: initializeAValues(),
    B: initializeBValues(),
    X: initializeBValues(),
  });

  const handleSize = (ev) => {
    setInputs((prev) => ({ ...prev, size: ev.target.value }));
  };

  useEffect(() => {
    setInputs((prev) => ({
      ...prev,
      A: initializeAValues(),
      B: initializeBValues(),
      X: initializeBValues(),
    }));
  }, [inputs.size]);

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
          <p>B</p>
          <MatrixInputs
            type="B"
            inputs={inputs.B}
            size={inputs.size}
            setInputs={setInputs}
          />
        </div>
        <div>
          <p>X</p>
          <MatrixInputs
            type="X"
            inputs={inputs.X}
            size={inputs.size}
            setInputs={setInputs}
          />
        </div>
        <Input placeholder="Tolerancia" />
        <Select>
          <option value="absoluto">Error absoluto</option>
          <option value="relativo">Error relativo</option>
        </Select>
      </div>
    </div>
  );
}
