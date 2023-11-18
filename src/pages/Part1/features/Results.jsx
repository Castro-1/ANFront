const Results = ({ found, x, f, e }) => {
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
          : `El método no converge después de ${x.length} iteraciones.`}
      </p>
      <table className="m-auto border-[0.1px] border-white [&>*]:border-[0.1px]">
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

export default Results;
