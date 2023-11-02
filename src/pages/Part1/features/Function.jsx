import { useRef, useEffect } from "react";
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

export default function Function({ expression, method, color = "#646cff" }) {
  const chartRef = useRef(null);
  const pointRadiusArray = useRef([]);
  const chartInstance = useRef(null);

  const parseFunction = (expression, minX, maxX, step) => {
    if (expression.includes("ln")) {
      expression = expression.replace(/ln\(([^)]+)\)/g, "log($1)*2.303");
    }
    const scope = { x: math.range(minX, maxX, step).toArray() };
    const compiled = math.compile(expression);
    return scope.x.map((x) => compiled.evaluate({ x }));
  };

  useEffect(() => {
    if (!expression) {
      alert("Please enter a function.");
      return;
    }

    const minX =
      expression.includes("log") || expression.includes("ln") ? 0 : -20;
    const maxX = 20;
    const step = 0.1;

    const data = {
      labels: math.range(minX, maxX, step).toArray(),
      datasets: [
        {
          label: expression,
          data: parseFunction(expression, minX, maxX, step),
          fill: true,
          borderColor: color,
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
          text: method + " Chart",
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

    if (chartRef.current) {
      pointRadiusArray.current = Array(data.labels.length).fill(0);

      const chart = new Chart(chartRef.current, {
        type: "line",
        data: data,
        options: options,
      });
      chartInstance.current = chart;
    }
  }, [expression, method]);

  return (
    <div>
      <canvas id={`my${method}`} ref={chartRef}></canvas>
    </div>
  );
}
