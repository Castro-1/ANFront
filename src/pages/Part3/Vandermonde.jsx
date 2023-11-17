import { useState } from "react";
import axios from "axios";
import { initializeXValues } from "./features/initializeValues";
import { formattedMatrix } from "./features/formattedMatrix";
import InterpolationTempalte from "./features/InterpolationTemplate";
import url from "../../assets/url";

export default function Vandermonde() {
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

    const response = await axios.post(`${url}/part3/vandermonde/`, data);
    console.log(response.data);
    setResults(response.data);
  };

  return (
    <InterpolationTempalte
      name={"Vandermonde"}
      inputs={inputs}
      results={results}
      setInputs={setInputs}
      handleSize={handleSize}
      handleSubmit={handleSubmit}
    />
  );
}
