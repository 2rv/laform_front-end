import { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceArea,
} from 'recharts';
import { TextButton } from 'src/lib/element/button';
import { TextSecondary } from 'src/lib/element/text';
import { spacing, THEME_COLOR } from 'src/lib/theme';
import styled from 'styled-components';

export function ChartComponent(props) {
  const { initialData = [] } = props;

  useEffect(
    () =>
      setChart({
        data: initialData,
        leftIndex: '',
        rightIndex: '',
      }),
    [initialData],
  );

  const [chartState, setChart] = useState({
    data: [],
    leftIndex: '',
    rightIndex: '',
  });

  const { data, leftIndex, rightIndex } = chartState;

  const areaLeft = (e) => {
    const copy = { ...chartState };
    copy.leftIndex = e.activeTooltipIndex || 0;

    return setChart(copy);
  };
  const areaRight = (e) => {
    if (typeof chartState.leftIndex === 'number') {
      const copy = { ...chartState };
      copy.rightIndex = e.activeTooltipIndex || 0;
      setChart(copy);
    }
    return;
  };
  const zoomOut = () => {
    setChart({
      data: initialData,
      leftIndex: '',
      rightIndex: '',
    });
  };
  const zoom = () => {
    const { data } = chartState;
    let { leftIndex, rightIndex } = chartState;

    if (leftIndex === rightIndex || rightIndex === '') {
      const copy = { ...chartState };
      copy.leftIndex = '';
      copy.rightIndex = '';
      return setChart(copy);
    }

    if (leftIndex > rightIndex) {
      [leftIndex, rightIndex] = [rightIndex, leftIndex];
    }

    return setChart({
      leftIndex: leftIndex,
      rightIndex: rightIndex,
      data: data.slice(leftIndex, rightIndex),
    });
  };

  return (
    <Container>
      <TextSecondary tid="Статистика покупок" />
      <ResponsiveContainer width="100%" height="80%">
        <LineChart
          data={data}
          onMouseDown={areaLeft}
          onMouseMove={areaRight}
          onMouseUp={zoom}
        >
          <XAxis dataKey="date" />
          <YAxis />
          <Line
            dataKey="orders"
            name="Покупок"
            type="natural"
            stroke={THEME_COLOR.PRIMARY}
            animationDuration={300}
          />
          <CartesianGrid
            stroke={THEME_COLOR.LIGHT_GRAY}
            strokeDasharray="1 1"
          />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
      <Button tid="Сбросить" onClick={zoomOut} />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500px;
  user-select: none;
  gap: ${spacing(3)};
`;

const Button = styled(TextButton)`
  width: max-content;
`;
