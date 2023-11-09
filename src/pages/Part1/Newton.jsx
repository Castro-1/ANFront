import { useState } from "react";
import Function from "./features/Function";
import axios from "axios";
import Button from "../../components/Button";
import Input from "../../components/inputs/Input";
import Select from "../../components/inputs/Select";

export default function Newton() {
  const [inputs, setInputs] = useState({
    fun: "",
    dfun: "",
    x0: "",
    tol: "",
    niter: "",
    error: "0",
  });
  const [result, setResult] = useState(null);
  const [graph1, setGraph1] = useState(false);
  const [graph2, setGraph2] = useState(false);

  const handleInputs = (ev) => {
    let value = ev.target.value;
    if (ev.target.name === "fun") {
      setGraph1(false);
    } else if (ev.target.name === "dfun") {
      setGraph2(false);
    }
    setInputs((prev) => {
      return { ...prev, [ev.target.name]: value };
    });
  };

  const handleSubmit = async () => {
    let data = {
      fun: inputs.fun,
      x0: parseFloat(inputs.x0),
      tol: parseFloat(inputs.tol),
      niter: parseInt(inputs.niter),
      error: parseInt(inputs.error),
    };

    const response = await axios.post(
      "http://127.0.0.1:8000/part1/newton/",
      data
    );
    setResult(response.data);
    setGraph1(true);
    setGraph2(true);
  };

  const ResultsTable = ({ found, x, f, e }) => {
    const rows = x.map((value, i) => (
      <tr key={i} className="[&>*]:border-[0.1px]">
        <td>{i}</td>
        <td>{x[i]}</td>
        <td>{f[i]}</td>
        <td>{e[i]}</td>
      </tr>
    ));

    return (
      <table className="border-[0.1px] border-white [&>*]:border-[0.1px]">
        <thead className="">
          <tr>
            <th className="m-5">Iteración</th>
            <th>x</th>
            <th>f(x)</th>
            <th>error</th>
          </tr>
        </thead>
        <tbody className="[&>*]:border-[0.1px]">{rows}</tbody>
      </table>
    );
  };

  return (
    <div>
      <h2>Newton</h2>
      <div>
        <Input
          placeholder="f(x)"
          value={inputs.fun}
          onChange={handleInputs}
          name="fun"
        />
        <Input
          placeholder="f'(x)"
          value={inputs.dfun}
          onChange={handleInputs}
          name="dfun"
        />
        <Button
          onClick={() => {
            setGraph1(true);
            setGraph2(true);
          }}
        >
          Graficar
        </Button>
        <Input
          name="x0"
          placeholder="x0"
          onChange={handleInputs}
          value={inputs.x0}
        />
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
      {graph1 && <Function method={"Newton f(x)"} expression={inputs.fun} />}
      {graph2 && <Function method={"Newton f'(x)"} expression={inputs.dfun} />}
      {result !== null && <ResultsTable {...result} />}
    </div>
  );
}
