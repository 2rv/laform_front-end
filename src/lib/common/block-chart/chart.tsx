import { ChartData } from 'chart.js';
import dynamic from 'next/dynamic';
import { ChartProps } from 'react-chartjs-2';

const Chart = dynamic(() => import('./core'), {
  ssr: false,
});
export type ChartDataType = ChartData<'bar'>;

export const defaultData: ChartDataType = {
  labels: [],
  datasets: [
    {
      label: 'Нету данных',
      data: [],
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
    },
  ],
};

export function ChartBlock(props: Partial<Pick<ChartProps<'bar'>, 'data'>>) {
  const { data = defaultData } = props;
  return (
    <Chart
      type="bar"
      options={{
        plugins: {
          zoom: {
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true,
              },
              mode: 'x',
            },
            pan: {
              enabled: true,
              mode: 'x',
            },
          },
        },
      }}
      height={90}
      data={data}
    />
  );
}
