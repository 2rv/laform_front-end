import React, { useState } from 'react';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from 'src/lib/theme';
import styled from 'styled-components';
import {
  VictoryAxis,
  VictoryBrushContainer,
  VictoryChart,
  VictoryLine,
  VictoryTooltip,
  VictoryZoomContainer,
  createContainer,
  VictoryBar,
  VictoryVoronoiContainer,
} from 'victory';

const month = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];
const styleData = {
  data: { stroke: 'tomato' },
};
const VictoryUtils = createContainer('voronoi', 'zoom');
export function ChartPrice(props) {
  const { data } = props;

  const [state, setState] = useState({});

  function handleBrush(domain) {
    setState({ zoomDomain: domain });
  }
  function handleZoom(domain) {
    setState({ selectedDomain: domain });
  }
  return (
    <Container>
      <VictoryChart
        width={1140}
        height={400}
        padding={{ left: 100, top: 50, right: 50, bottom: 50 }}
        scale={{ x: 'time' }}
        containerComponent={
          <VictoryUtils
            zoomDimension="x"
            zoomDomain={state.zoomDomain}
            onZoomDomainChange={handleZoom}
          />
        }
      >
        <VictoryBar
          x="date"
          y="price"
          style={{ data: { fill: '#219653' } }}
          data={data}
          barRatio={0.9}
          labels={({ datum }) => datum.price}
          labelComponent={<VictoryTooltip />}
        />
        <VictoryAxis
          style={{
            axisLabel: {
              padding: 50,
              fontFamily: THEME_VALUE.FONT_NAME.PRIMARY,
              fontSize: THEME_SIZE.FONT.MEDIUM,
            },
          }}
          label="Заказов"
          dependentAxis
          crossAxis
        />
        <VictoryAxis
          style={{
            axisLabel: {
              padding: 30,
              fontFamily: THEME_VALUE.FONT_NAME.PRIMARY,
              fontSize: THEME_SIZE.FONT.MEDIUM,
            },
          }}
          crossAxis
          label="День"
          tickFormat={(x) => new Date(x).toLocaleDateString()}
        />
      </VictoryChart>

      <VictoryChart
        width={1140}
        height={200}
        scale={{ x: 'time' }}
        containerComponent={
          <VictoryUtils
            zoomDimension="x"
            zoomDomain={state.zoomDomain}
            onZoomDomainChange={handleZoom}
            labels={({ datum }) => datum.price}
            labelComponent={<VictoryTooltip />}
          />
        }
      >
        <VictoryAxis
          tickValues={[
            new Date(2021, 1, 1),
            new Date(2021, 2, 1),
            new Date(2021, 3, 1),
            new Date(2021, 4, 1),
            new Date(2021, 5, 1),
            new Date(2021, 6, 1),
            new Date(2021, 7, 1),
          ]}
          tickFormat={(x) => new Date(x).getFullYear()}
        />
        <VictoryLine
          x="date"
          y="price"
          style={{
            data: { stroke: '#219653', strokeWidth: '3px' },
          }}
          data={data}
        />
      </VictoryChart>
    </Container>
  );
}

export function ChartOrders(props) {
  const { data } = props;
  const [state, setState] = useState({});

  function handleBrush(domain) {
    setState({ zoomDomain: domain });
  }
  function handleZoom(domain) {
    setState({ selectedDomain: domain });
  }
  return (
    <Container>
      <VictoryChart
        width={1140}
        height={400}
        padding={{ left: 100, top: 50, right: 50, bottom: 50 }}
        scale={{ x: 'time' }}
        containerComponent={
          <VictoryUtils
            zoomDimension="x"
            zoomDomain={state.zoomDomain}
            onZoomDomainChange={handleZoom}
          />
        }
      >
        <VictoryBar
          x="date"
          y="orders"
          style={{ data: { fill: '#219653' } }}
          data={data}
          barRatio={0.9}
          labels={({ datum }) => datum.orders}
          labelComponent={<VictoryTooltip />}
        />
        <VictoryAxis
          style={{
            axisLabel: {
              padding: 50,
              fontFamily: THEME_VALUE.FONT_NAME.PRIMARY,
              fontSize: THEME_SIZE.FONT.MEDIUM,
            },
          }}
          label="Заказов"
          dependentAxis
          crossAxis
        />
        <VictoryAxis
          style={{
            axisLabel: {
              padding: 30,
              fontFamily: THEME_VALUE.FONT_NAME.PRIMARY,
              fontSize: THEME_SIZE.FONT.MEDIUM,
            },
          }}
          crossAxis
          label="День"
          tickFormat={(x) => new Date(x).toLocaleDateString()}
        />
      </VictoryChart>

      <VictoryChart
        width={1140}
        height={200}
        scale={{ x: 'time' }}
        containerComponent={
          <VictoryUtils
            zoomDimension="x"
            zoomDomain={state.zoomDomain}
            onZoomDomainChange={handleZoom}
            labels={({ datum }) => datum.orders}
            labelComponent={<VictoryTooltip />}
          />
        }
      >
        <VictoryAxis
          tickValues={[
            new Date(2021, 1, 1),
            new Date(2021, 2, 1),
            new Date(2021, 3, 1),
            new Date(2021, 4, 1),
            new Date(2021, 5, 1),
            new Date(2021, 6, 1),
            new Date(2021, 7, 1),
          ]}
          tickFormat={(x) => new Date(x).getFullYear()}
        />
        <VictoryLine
          x="date"
          y="orders"
          style={{
            data: { stroke: '#219653', strokeWidth: '3px' },
          }}
          data={data}
        />
      </VictoryChart>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
`;
