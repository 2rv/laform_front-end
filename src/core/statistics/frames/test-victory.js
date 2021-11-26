import React, { useState } from 'react';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from 'src/lib/theme';
import {
  VictoryChart,
  VictoryLine,
  VictoryBar,
  VictoryAxis,
  VictoryBrushContainer,
  VictoryZoomContainer,
  VictoryHistogram,
  VictoryLabel,
  DataLabel,
  VictoryBrushLine,
  VictoryLegend,
  createContainer,
} from 'victory';
import styled from 'styled-components';

const VictoryCustomContainer = createContainer('voronoi', 'zoom');

export function CustomChart(props) {
  const { DATA = [], dataYears } = props;

  const [state, setState] = useState({
    zoomDomain: { x: [DATA[0]?.x, DATA[11]?.x] },
  });

  const handleZoom = (domain) => {
    setState({ zoomDomain: domain });
  };

  return (
    <Container>
      <VictoryChart
        width={600}
        height={300}
        domainPadding={{ x: [30, 30] }}
        scale={{ x: 'time' }}
        containerComponent={
          <VictoryCustomContainer
            labels={({ datum }) => {
              const [date, time] = datum.x.toLocaleString().split(', ');

              return `Дата: ${date},
			   Время: ${time},
			   Цена: ${datum.y}`;
            }}
            allowZoom={true}
            zoomDimension="x"
            zoomDomain={state.zoomDomain}
            onZoomDomainChange={handleZoom}
            downsample={60}
          />
        }
      >
        <VictoryAxis dependentAxis />
        <VictoryAxis style={{ tickLabels: { fontSize: 10, padding: 5 } }} />

        <VictoryBar
          style={{
            data: { fill: '#219653' },
            labels: { fontSize: 10 },
          }}
          barWidth={20}
          barRatio={10}
          data={DATA}
        />
        <VictoryLegend
          y={270}
          title="Год: "
          titleOrientation="left"
          gutter={20}
          orientation="horizontal"
          style={{
            title: { fontSize: 13 },
            data: { cursor: 'pointer' },
            labels: { cursor: 'pointer', fontSize: 13 },
          }}
          data={dataYears}
          events={[
            {
              target: ['labels', 'data'],
              eventHandlers: {
                onClick: (e, { datum }, index) => {
                  const startMonth = DATA.find(({ x }) => {
                    return x.getFullYear() === datum.name;
                  });
                  setState({
                    zoomDomain: {
                      x: [startMonth.x, state.zoomDomain.x[1]],
                    },
                  });
                },
                onMouseOver: (e, props) => {
                  return [
                    {
                      target: 'data',
                      mutation: (props) => ({
                        style: { ...props.style, fill: '#2D9CDB' },
                      }),
                    },
                    {
                      target: 'labels',
                      mutation: (props) => ({
                        style: { ...props.style, fill: '#2D9CDB' },
                      }),
                    },
                  ];
                },
                onMouseOut: () => {
                  return [
                    {
                      target: 'data',
                      mutation: (props) => null,
                    },
                    {
                      target: 'labels',
                      mutation: (props) => null,
                    },
                  ];
                },
              },
            },
          ]}
        />
      </VictoryChart>

      <VictoryChart
        padding={{ top: 10, left: 40, right: 40, bottom: 10 }}
        width={600}
        height={100}
        scale={{ x: 'time' }}
        containerComponent={
          <VictoryBrushContainer
            brushDimension="x"
            brushDomain={state.zoomDomain}
            onBrushDomainChange={handleZoom}
          />
        }
      >
        <VictoryAxis tickFormat={(x) => new Date(x).getFullYear()} />
        <VictoryBar
          style={{
            data: { fill: '#219653' },
          }}
          data={DATA}
          barRatio={1}
        />
      </VictoryChart>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
