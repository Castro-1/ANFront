import { useState } from "react";
import Function from "../../components/Function";
import axios from "axios";
import Button from "../../components/Button";
import Input from "../../components/inputs/Input";
import Select from "../../components/inputs/Select";
import Results from "./features/Results";
import url from "../../assets/url";
import checkData from "../../components/checkData";

export default function Bisection() {
  const [inputs, setInputs] = useState({
    fun: "",
    a: "",
    b: "",
    tol: "",
    niter: "",
    error: "0",
  });
  const [result, setResult] = useState(null);
  const [graph, setGraph] = useState(false);
  const [error, setError] = useState(null);
  const [suggestions, setSuggestions] = useState(null);

  const handleInputs = (ev) => {
    let value = ev.target.value;
    if (ev.target.name === "fun") {
      setGraph(false);
    }
    setInputs((prev) => {
      return { ...prev, [ev.target.name]: value };
    });
  };

  const handleSubmit = async () => {
    let data = {
      fun: inputs.fun,
      a: parseFloat(inputs.a),
      b: parseFloat(inputs.b),
      tol: parseFloat(inputs.tol),
      niter: parseInt(inputs.niter),
      error: parseInt(inputs.error),
    };
    const validateData = checkData(data);
    if (validateData.is) {
      const response = await axios.post(`${url}/part1/biseccion/`, data);
      console.log(response.data);
      if (response.data.error) {
        setError(response.data.error);
        setResult(null);
      } else {
        setResult(response.data);
        setGraph(true);
        setError(null);
        setSuggestions(null);
      }
    } else {
      setError(validateData.message);
      setResult(null);
      if (validateData.suggestions) {
        setSuggestions(validateData.suggestions);
      }
    }
  };

  return (
    <div>
      <h2>Bisección</h2>
      <div className="text-left">
        <div>
          <p>Función</p>
          <Input
            placeholder="ln(x)-2"
            value={inputs.fun}
            onChange={handleInputs}
            name="fun"
          />
        </div>
        <div>
          <p>a</p>
          <Input
            name="a"
            placeholder="5"
            onChange={handleInputs}
            value={inputs.a}
          />
        </div>
        <div>
          <p>b</p>
          <Input
            name="b"
            placeholder="10"
            onChange={handleInputs}
            value={inputs.b}
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
          <p>Error</p>
          <Select name="error" onChange={handleInputs} value={inputs.error}>
            <option value={0}>Absoluto</option>
            <option value={1}>Relativo</option>
          </Select>
        </div>
        <div className="text-center">
          <Button onClick={handleSubmit}>Solucionar</Button>
        </div>
      </div>
      {error && <p>{error}</p>}
      {suggestions && (
        <ul>
          {suggestions.map((s) => (
            <li>{s}</li>
          ))}
        </ul>
      )}
      {graph && <Function method={"Bisección"} expression={inputs.fun} />}
      {result !== null && <Results {...result} />}
    </div>
  );
}
