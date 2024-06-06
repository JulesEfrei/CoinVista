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
  ChartOptions,
  DefaultDataPoint,
  ChartDataset,
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
  data: number[][];
  labels: string[];
  title: string[];
  color?: {
    color: string;
    backgroundColor: string;
  }[];
}) => {
  const labels = props.labels;

  const datasets: ChartDataset<"line", DefaultDataPoint<"line">>[] =
    props.data.map((elm, index) => {
      return {
        label: props.title[index],
        data: elm,
        borderColor: (props.color && props.color[index].color) || "#F7931E",
        backgroundColor:
          (props.color && props.color[index].backgroundColor) ||
          "rgba(255, 149, 30, 0.2)",
        fill: true,
        pointStyle: "rectRot",
      };
    }, []);

  const options: ChartOptions<"line"> = {
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

export default AreaChart;
