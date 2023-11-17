import InterpolationFunction from "./InterpolationFunction";
import InterpolationSplineFunction from "./InterpolationSplineFunction";
import functionColors from "./colors";

const Poly = ({ results, polinomio, color = functionColors[0] }) => {
  console.log(color);
  return (
    <div className="flex items-center gap-1">
      <div
        className={"rounded-full p-1"}
        style={{ backgroundColor: color }}
      ></div>
      <p>
        <b className={`text-[${color}]`}>{polinomio}: </b>
        {results}
      </p>
    </div>
  );
};

const DisplayResults = ({ name, results, x, y }) => {
  return results ? (
    <div>
      {name.includes("Spline") ? (
        results.map((p, i) => (
          <Poly
            key={i}
            results={p}
            polinomio={"Polinomio " + (i + 1)}
            color={functionColors[i]}
          />
        ))
      ) : (
        <Poly results={results} polinomio={"Polinomio"} />
      )}
      {name.includes("Spline") ? (
        <InterpolationSplineFunction
          method={name}
          expressions={results}
          xValues={x}
          yValues={y}
        />
      ) : (
        <InterpolationFunction
          method={name}
          expression={results}
          xValues={x}
          yValues={y}
        />
      )}
    </div>
  ) : (
    ""
  );
};

export default DisplayResults;
