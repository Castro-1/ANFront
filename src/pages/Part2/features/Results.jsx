const Radius = ({radio}) =>{
    return <p><b>Radio: </b>{radio}</p>
}

const Solution = ({sol}) =>{
    return <p><b>Solución: [</b>{sol.map((x,i)=>(<span key={i}>  {x}  </span>))}<b>]</b></p>
}

const Process = ({x}) =>{
    return <div className="m-auto text-left">
      <h3 className="font-bold">X</h3>
      <div>
        {x.map((value,i)=><p key={i}><b>{i+1}. [</b>{value.map((a,i)=>(<span key={i}>  {a}  </span>))}<b>]</b></p>)}
      </div>
    </div>
}

const DisplayResults = ({results})=>{
    return results ? <div>
      <Radius radio={results.radio}/>
      <Solution sol={results.sol}/>
      <Process x={results.x}/>
    </div> : ""
}

export default DisplayResults;