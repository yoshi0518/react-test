// Docs: https://react-chartjs-2.js.org/
import { useSelector } from 'react-redux';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const OpenMeteoChart = () => {
  // すべてのステートを取得
  // const state = useSelector((state) => state);
  // console.log({ state });

  // 指定したステートのみ取得;
  const openMeteo = useSelector((state) => state.openMeteo);
  console.log({ openMeteo });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };
  const data = {
    labels: openMeteo.data.time,
    datasets: [
      {
        label: '最高気温',
        data: openMeteo.data.temperature_2m_max,
        lineTension: 0,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: '最低気温',
        data: openMeteo.data.temperature_2m_min,
        lineTension: 0,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default OpenMeteoChart;
