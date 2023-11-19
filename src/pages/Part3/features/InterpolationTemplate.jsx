import Button from "../../../components/Button";
import { Title } from "../../../components/Title";
import Select from "../../../components/inputs/Select";
import MatrixInputs from "./MatrixInputs";
import DisplayResults from "./Results";
import { formattedMatrix } from "./formattedMatrix";

export default function InterpolationTempalte({
  name,
  inputs,
  results,
  setInputs,
  handleSize,
  handleSubmit,
  setResults,
}) {
  const cubic = name === "Spline Cúbico";
  return (
    <div>
      <Title>{name}</Title>
      <div>
        <div className="text-left">
          <p>Tamaño</p>
          <Select value={inputs.size} onChange={handleSize}>
            {!cubic && <option value={2}>2</option>}
            {!cubic && <option value={3}>3</option>}
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
          </Select>
        </div>
        <div>
          <p>x</p>
          <MatrixInputs
            type="x"
            inputs={inputs.x}
            size={inputs.size}
            setInputs={setInputs}
            setResults={setResults}
          />
        </div>
        <div>
          <p>y</p>
          <MatrixInputs
            type="y"
            inputs={inputs.y}
            size={inputs.size}
            setInputs={setInputs}
            setResults={setResults}
          />
        </div>
        <Button onClick={handleSubmit}>Solucionar</Button>
      </div>
      <DisplayResults
        name={name}
        results={results}
        x={formattedMatrix(inputs.x, inputs.size)}
        y={formattedMatrix(inputs.y, inputs.size)}
      />
    </div>
  );
}
