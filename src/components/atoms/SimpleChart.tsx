import { intervalDate } from "@type/api/assets";
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

const SimpleAreaChart = (props: {
  data: number[] | string[];
  labels: string[];
  title: string;
  color?: {
    color: string;
    backgroundColor: string;
  };
}) => {
  const labels = props.labels;
  const datasets = [
    {
      label: props.title,
      data: props.data,
      borderColor: props.color.color || "#F7931E",
      backgroundColor: props.color.backgroundColor || "rgba(255, 149, 30, 0.2)",
      fill: true,
      pointStyle: "rectRot",
    },
  ];

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
    },
  };

  return (
    <Line options={options} data={{ labels, datasets }} className="xs:w-5/6" />
  );
};

export default SimpleAreaChart;
