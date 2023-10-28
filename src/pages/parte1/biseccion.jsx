import { useState } from "react";
import Function from "./features/Function";

const Biseccion = () => {
  const [fx, setFx] = useState("");
  const [graph, setGraph] = useState(false);

  const handleFunction = (ev) =>{
    setFx(ev.target.value);
    setGraph(false);
  }
  
  return (
    <div>
      <h2>Bisección</h2>
      <div>
        <input
          placeholder="f(x)"
          value={fx}
          onChange={handleFunction}
        />
        <button onClick={()=>setGraph(true)}>Graph</button>
        <input placeholder="a" />
        <input placeholder="b" />
        <input placeholder="Tolerancia" />
        <select>
          <option value="absoluto">Error absoluto</option>
          <option value="relativo">Error relativo</option>
        </select>
      </div>
      {graph && <Function method={"Bisección"} expression={fx}/>}
    </div>
  );
};

export default Biseccion;
