import { useState } from "react";
import axios from "axios";
import { initializeXValues } from "./features/initializeValues";
import { formattedMatrix } from "./features/formattedMatrix";
import InterpolationTempalte from "./features/InterpolationTemplate";

export default function Lagrange() {
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
      "http://127.0.0.1:8000/part3/lagrange/",
      data
    );
    console.log(response.data);
    setResults(response.data);
  };

  return (
    <InterpolationTempalte
      name={"Lagrange"}
      inputs={inputs}
      results={results}
      setInputs={setInputs}
      handleSize={handleSize}
      handleSubmit={handleSubmit}
    />
  );
}
