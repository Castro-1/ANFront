import Button from "../../../components/Button";
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
}) {
  return (
    <div>
      <h2>{name}</h2>
      <div>
        <Select value={inputs.size} onChange={handleSize}>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
        </Select>
        <div>
          <p>x</p>
          <MatrixInputs
            type="x"
            inputs={inputs.x}
            size={inputs.size}
            setInputs={setInputs}
          />
        </div>
        <div>
          <p>y</p>
          <MatrixInputs
            type="y"
            inputs={inputs.y}
            size={inputs.size}
            setInputs={setInputs}
          />
        </div>
        <Button onClick={handleSubmit}>Solucionar</Button>
      </div>
      <DisplayResults
        results={results}
        x={formattedMatrix(inputs.x, inputs.size)}
        y={formattedMatrix(inputs.y, inputs.size)}
      />
    </div>
  );
}
