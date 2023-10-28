import { useState } from "react";
import Function from "./features/Function";

export default function Newton() {
  const [fx, setFx] = useState("");
  const [dx, setDx] = useState("");
  const [graphf, setGraphf] = useState(false);
  const [graphd, setGraphd] = useState(false);

  const handleFunctionf = (ev) =>{
    setFx(ev.target.value);
    setGraphf(false);
  }

  const handleFunctiond = (ev) =>{
    setDx(ev.target.value);
    setGraphd(false);
  }

  return (
    <div>
      <h2>Newton</h2>
      <div>
        <input
          placeholder="f(x)"
          value={fx}
          onChange={handleFunctionf}
        />
        <button onClick={()=>setGraphf(true)}>Graph fx</button>
        <input
          placeholder="f'(x)"
          value={dx}
          onChange={handleFunctiond}
        />
        <button onClick={()=>setGraphd(true)}>Graph dx</button>
        <input placeholder="x0" />
        <input placeholder="Tolerancia" />
        <select>
          <option value="absoluto">Error absoluto</option>
          <option value="relativo">Error relativo</option>
        </select>
      </div>
      {graphf && <Function method={"Newtonfx"} expression={fx}/>}
      {graphd && <Function method={"Newtondx"} expression={dx} color="orange"/>}
    </div>
  );
}
