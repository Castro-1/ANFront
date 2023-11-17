import React, { useRef, useEffect } from "react";
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
import functionColors from "./colors";

Chart.register(
  CategoryScale,
  LinearScale,
  LineController,
  PointElement,
  LineElement,
  Title
);

export default function InterpolationSplineFunction({
  expressions,
  method,
  colors = functionColors,
  xValues,
  yValues,
}) {
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
    if (!expressions || expressions.length === 0) {
      alert("Please enter at least one function.");
      return;
    }

    let minX = Math.min(...xValues);
    let maxX = Math.max(...xValues);
    let minY = Math.min(...yValues);
    let maxY = math.max(...yValues);

    let step = (maxX - minX) / 100; // Adjust step based on the range of xValues
    const datasets = expressions.map((expression, index) => {
      const color = colors[index % colors.length];
      return {
        label: expression,
        data: parseFunction(expression, minX, maxX, step),
        borderColor: color,
        pointRadius: pointRadiusArray.current,
      };
    });

    const data = {
      labels: math.range(minX, maxX, step).toArray(),
      datasets: datasets,
    };

    if (xValues && yValues && xValues.length === yValues.length) {
      const pointsDataset = {
        label: "Points",
        data: xValues.map((x, index) => ({ x, y: yValues[index] })),
        backgroundColor: "red",
        pointRadius: 5,
      };

      data.datasets.push(pointsDataset);
    }

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (chartRef.current) {
      pointRadiusArray.current = Array(data.labels.length).fill(0);

      const chart = new Chart(chartRef.current, {
        type: "line",
        data: data,
        options: {
          scales: {
            x: {
              type: "linear",
              position: "bottom",
              min: minX,
              max: maxX,
            },
            y: {
              type: "linear",
              position: "left",
              min: minY,
              max: maxY,
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
        },
      });
      chartInstance.current = chart;
    }
  }, [expressions, method, xValues, yValues, colors]);

  return (
    <div>
      <canvas id={`my${method}`} ref={chartRef}></canvas>
    </div>
  );
}
