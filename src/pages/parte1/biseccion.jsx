import { useState, useRef, useEffect } from "react";
import {
  Chart,
  CategoryScale,
  LinearScale,
  LineController,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import * as math from "mathjs";

Chart.register(
  CategoryScale,
  LinearScale,
  LineController,
  PointElement,
  LineElement,
  Title
);

const Biseccion = () => {
  const [fx, setFx] = useState("");
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const pointRadiusArray = useRef([]);

  const parseFunction = (expression, minX, maxX, step) => {
    console.log(expression);
    if (expression.includes("ln")) {
      console.log("enters");
      expression = expression.replace(/ln\(([^)]+)\)/g, "log($1)*2.303");
      console.log(expression);
    }
    const scope = { x: math.range(minX, maxX, step).toArray() };
    const compiled = math.compile(expression);
    return scope.x.map((x) => compiled.evaluate({ x }));
  };

  const graphFunction = () => {
    if (!fx) {
      alert("Please enter a function.");
      return;
    }

    const minX = 0;
    const maxX = 20;
    const step = 0.1;

    const data = {
      labels: math.range(minX, maxX, step).toArray(),
      datasets: [
        {
          label: fx,
          data: parseFunction(fx, minX, maxX, step),
          fill: true,
          borderColor: "green",
          pointRadius: pointRadiusArray.current,
        },
      ],
    };

    const options = {
      scales: {
        x: {
          type: "linear",
          position: "bottom",
        },
        y: {
          type: "linear",
          position: "left",
        },
      },
      plugins: {
        title: {
          display: true,
          text: "Bisección Chart",
        },
        tooltip: {
          enabled: true,
          custom: (tooltipModel) => {
            const { body } = tooltipModel;
            if (body) {
              const [label] = body;
              const [xValue, yValue] = label.lines[0].split(":");
              return `(${xValue.trim()}, ${yValue.trim()})`;
            }
            return "";
          },
        },
      },
    };

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current;

    pointRadiusArray.current = Array(data.labels.length).fill(0);

    const chart = new Chart(ctx, {
      type: "line",
      data: data,
      options: options,
    });

    chartInstance.current = chart;

    ctx.onclick = (e) => {
      const points = chart.getElementsAtEventForMode(e, "point", {
        intersect: true,
      });

      if (points.length > 0) {
        const pointIndex = points[0].index;
        pointRadiusArray.current[pointIndex] =
          pointRadiusArray.current[pointIndex] === 0 ? 3 : 0;
        chart.update();
      }
    };
  };

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
  }, []);

  return (
    <div>
      <h2>Bisección</h2>
      <div>
        <input
          placeholder="f(x)"
          value={fx}
          onChange={(ev) => setFx(ev.target.value)}
        />
        <button onClick={() => graphFunction()}>Graph</button>
        <input placeholder="a" />
        <input placeholder="b" />
        <input placeholder="Tolerancia" />
        <select>
          <option value="absoluto">Error absoluto</option>
          <option value="relativo">Error relativo</option>
        </select>
      </div>
      <div>
        <canvas id="myChart" ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default Biseccion;
