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
  VictoryScatter,
} from 'victory';

const MONTH = [
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

const ZOOM_CONTAINER_WIDTH = 1140;
const ZOOM_CONTAINER_HEIGHT = 400;

const BRUSH_CONTAINER_WIDTH = 1140;
const BRUSH_CONTAINER_HEIGHT = 200;

const VictoryUtils = createContainer('voronoi', 'zoom');

export function ChartPrice(props) {
  const { data } = props;
  const [state, setState] = useState({});

  function handleZoom(domain) {
    setState({ selectedDomain: domain });
  }

  function handleBrush(domain) {
    setState({ zoomDomain: domain });
  }

  return (
    <Container>
      <VictoryChart
        width={ZOOM_CONTAINER_WIDTH}
        height={ZOOM_CONTAINER_HEIGHT}
        padding={{ left: 100, top: 50, right: 50, bottom: 50 }}
        scale={{ x: 'time' }}
        containerComponent={
          <VictoryZoomContainer
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
          barRatio={1}
          labels={({ datum }) => datum?.price}
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
          label="Цена"
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
        width={BRUSH_CONTAINER_WIDTH}
        height={BRUSH_CONTAINER_HEIGHT}
        padding={{ left: 100, top: 50, right: 50, bottom: 50 }}
        scale={{ x: 'time' }}
        containerComponent={
          <VictoryBrushContainer
            brushDimension="x"
            brushDomain={state.selectedDomain}
            onBrushDomainChange={handleBrush}
          />
        }
      >
        <VictoryBar
          x="date"
          y="price"
          style={{ data: { fill: '#219653' } }}
          data={data}
          barRatio={0.9}
          labels={({ datum }) => datum?.price}
          labelComponent={<VictoryTooltip />}
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
    </Container>
  );
}
export function ChartOrders(props) {
  const { data } = props;
  const [state, setState] = useState({});

  function handleZoom(domain) {
    setState({ selectedDomain: domain });
  }

  function handleBrush(domain) {
    setState({ zoomDomain: domain });
  }

  return (
    <Container>
      <VictoryChart
        width={ZOOM_CONTAINER_WIDTH}
        height={ZOOM_CONTAINER_HEIGHT}
        padding={{ left: 100, top: 50, right: 50, bottom: 50 }}
        scale={{ x: 'time' }}
        containerComponent={
          <VictoryZoomContainer
            zoomDimension="x"
            zoomDomain={state.zoomDomain}
            onZoomDomainChange={handleZoom}
          />
        }
      >
        <VictoryBar
          x="date"
          y="count"
          style={{ data: { fill: '#219653' } }}
          data={data}
          barRatio={0.9}
          labels={({ datum }) => datum?.count}
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
        width={BRUSH_CONTAINER_WIDTH}
        height={BRUSH_CONTAINER_HEIGHT}
        padding={{ left: 100, top: 50, right: 50, bottom: 50 }}
        scale={{ x: 'time' }}
        containerComponent={
          <VictoryBrushContainer
            brushDimension="x"
            brushDomain={state.selectedDomain}
            onBrushDomainChange={handleBrush}
          />
        }
      >
        <VictoryBar
          x="date"
          y="count"
          style={{ data: { fill: '#219653' } }}
          data={data}
          barRatio={0.9}
          labels={({ datum }) => datum?.count}
          labelComponent={<VictoryTooltip />}
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
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
`;
