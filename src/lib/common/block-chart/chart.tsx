import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('./core'), {
  ssr: false,
});
export function ChartBlock(props: any) {
  const { data } = props;
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
export const defaultData = {
  labels: [],
  datasets: [
    {
      label: 'Нету данных',
      data: [],
      fill: true,
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
    },
  ],
};
