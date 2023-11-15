import InterpolationFunction from "./InterpolationFunction";

const Poly = ({ results }) => {
  return (
    <p>
      <b>Polinomio: </b>
      {results}
    </p>
  );
};

const DisplayResults = ({ results, x, y }) => {
  return results ? (
    <div>
      <Poly results={results} />
      <InterpolationFunction
        method={"Lagrange"}
        expression={results}
        xValues={x}
        yValues={y}
      />
    </div>
  ) : (
    ""
  );
};

export default DisplayResults;
