import 'chart.js/auto';
import { Bar, ChartProps } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
Chart.register(zoomPlugin);
function ChartCore(props: ChartProps<'bar'>) {
  return <Bar {...props} />;
}
export default ChartCore;
