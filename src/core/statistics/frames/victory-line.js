import React, { useState } from 'react';
import styled from 'styled-components';
import {
  VictoryAxis,
  VictoryBrushContainer,
  VictoryChart,
  VictoryLine,
  VictoryTooltip,
  VictoryZoomContainer,
  createContainer,
} from 'victory';

const initialData = [
  { x: new Date(1982, 1, 1), y: 125 },
  { x: new Date(1987, 1, 1), y: 257 },
  { x: new Date(1993, 1, 1), y: 345 },
  { x: new Date(1997, 1, 1), y: 515 },
  { x: new Date(2001, 1, 1), y: 132 },
  { x: new Date(2005, 1, 1), y: 305 },
  { x: new Date(2011, 1, 1), y: 270 },
  { x: new Date(2015, 1, 1), y: 470 },
];
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

function Component(props) {
  const { data } = props;

  const [state, setState] = useState({});

  function handleZoom(domain) {
    setState({ selectedDomain: domain });
  }

  function handleBrush(domain) {
    setState({ zoomDomain: domain });
  }
  function tickFormatHours(x) {
    return `${new Date(x).toLocaleString('default', {
      minute: 'numeric',
      hour: '2-digit',
      day: 'numeric',
      month: 'short',
    })}`;
  }
  function tickFormatDays(x) {
    return `${new Date(x).toLocaleString('default', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })}`;
  }
  function labelsFn({ datum }) {
    return datum.y;
  }
  return (
    <Container>
      <VictoryChart
        width={500}
        height={220}
        scale={{ x: 'time' }}
        containerComponent={
          <VictoryUtils
            zoomDimension="x"
            zoomDomain={state.zoomDomain}
            onZoomDomainChange={handleZoom}
          />
        }
      >
        <VictoryLine
          style={styleData}
          data={data}
          labels={labelsFn}
          labelComponent={<VictoryTooltip />}
        />
        <VictoryAxis tickFormat={tickFormatHours} crossAxis />
        <VictoryAxis dependentAxis crossAxis />
      </VictoryChart>

      <VictoryChart
        width={500}
        height={100}
        scale={{ x: 'time' }}
        padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
        containerComponent={
          <VictoryBrushContainer
            brushDimension="x"
            brushDomain={state.selectedDomain}
            onBrushDomainChange={handleBrush}
          />
        }
      >
        <VictoryAxis
          //   tickValues={[
          //     new Date(2015, 1, 1),
          //     new Date(2016, 1, 1),
          //     new Date(2017, 1, 1),
          //     new Date(2018, 1, 1),
          //   ]}
          tickFormat={tickFormatDays}
        />
        <VictoryLine style={styleData} data={data} />
      </VictoryChart>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export default Component;
