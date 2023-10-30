import { useState } from "react";
import Function from "./features/Function";

const Biseccion = () => {
  const [fx, setFx] = useState("");
  const [biseccion,setBiseccion] = useState({fx:"",a:0,b:0,tol:0,niter:0})
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
        <input type="number" placeholder="a" />
        <input type="number" placeholder="b" />
        <input type="number" placeholder="tolerancia" />
        <input type="number" placeholder="iteraciones" />
        <select>
          <option value="absoluto">Error absoluto</option>
          <option value="relativo">Error relativo</option>
        </select>
        <button onClick={handleSubmit}>Resolver</button>
      </div>
      {graph && <Function method={"Bisección"} expression={fx}/>}
    </div>
  );
};

export default Biseccion;
