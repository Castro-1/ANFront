import { useState } from "react";
import axios from "axios";
import { initializeXValues } from "./features/initializeValues";
import { formattedMatrix } from "./features/formattedMatrix";
import InterpolationTempalte from "./features/InterpolationTemplate";
import url from "../../assets/url";
import checkData from "../../components/checkData";

export default function Spline3() {
  const [inputs, setInputs] = useState({
    size: 4,
    x: initializeXValues(),
    y: initializeXValues(),
  });
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const handleSize = (ev) => {
    setInputs((prev) => ({ ...prev, size: ev.target.value }));
    setResults(null);
  };

  const handleSubmit = async () => {
    let data = {
      x: formattedMatrix(inputs.x, inputs.size),
      y: formattedMatrix(inputs.y, inputs.size),
    };

    const validateData = checkData(data);
    console.log(data);
    if (validateData.is) {
      const response = await axios.post(`${url}/part3/spline3/`, data);
      console.log(response.data);
      if (response.data.error) {
        setError(response.data.error);
        setResults(null);
      } else if (response.data.includes("oo") || response.data === "nan") {
        setError("Valores repetidos en x");
        setResults(null);
      } else {
        setResults(response.data);
        setError(null);
      }
    } else {
      setError(validateData.message);
      setResults(null);
    }
  };

  return (
    <div>
      <InterpolationTempalte
        name={"Spline Cúbico"}
        inputs={inputs}
        results={results}
        setInputs={setInputs}
        handleSize={handleSize}
        handleSubmit={handleSubmit}
        setResults={setResults}
      />
      {error && <p>{error}</p>}
    </div>
  );
}
