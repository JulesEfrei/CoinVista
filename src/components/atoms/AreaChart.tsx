"use client";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const AreaChart = (props: {
  data: number[][] | string[][];
  labels: string[];
  title: string[];
  color?: {
    color: string;
    backgroundColor: string;
  }[];
}) => {
  const labels = props.labels;
  const datasets = props.data.reduce((prev, curr, index) => {
    return [
      ...prev,
      {
        label: props.title[index],
        data: curr,
        borderColor: (props.color && props.color[index].color) || "#F7931E",
        backgroundColor:
          (props.color && props.color[index].backgroundColor) ||
          "rgba(255, 149, 30, 0.2)",
        fill: true,
        pointStyle: "rectRot",
      },
    ];
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
    },
  };

  console.log(datasets);

  return (
    <Line options={options} data={{ labels, datasets }} className="xs:w-5/6" />
  );
};

export default AreaChart;
