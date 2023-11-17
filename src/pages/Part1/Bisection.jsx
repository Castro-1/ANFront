import { useState } from "react";
import Function from "../../components/Function";
import axios from "axios";
import Button from "../../components/Button";
import Input from "../../components/inputs/Input";
import Select from "../../components/inputs/Select";

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
    console.log(data);

    const response = await axios.post(
      "http://127.0.0.1:8000/part1/biseccion/",
      data
    );
    console.log(response.data);
    setResult(response.data);
    setGraph(true);
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
      <div>
        <p>
          {found === 1
            ? `El método converge después de ${x.length} iteraciones.`
            : `El método no converge después de ${x.lenght} iteraciones.`}
        </p>
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
      </div>
    );
  };

  return (
    <div>
      <h2>Bisección</h2>
      <div>
        <Input
          placeholder="f(x)"
          value={inputs.fun}
          onChange={handleInputs}
          name="fun"
        />
        <Button onClick={() => setGraph(true)}>Graficar</Button>
        <Input
          name="a"
          placeholder="a"
          onChange={handleInputs}
          value={inputs.a}
        />
        <Input
          name="b"
          placeholder="b"
          onChange={handleInputs}
          value={inputs.b}
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
      {graph && <Function method={"Bisección"} expression={inputs.fun} />}
      {result !== null && <ResultsTable {...result} />}
    </div>
  );
}
