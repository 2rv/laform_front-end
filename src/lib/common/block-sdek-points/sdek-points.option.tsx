import React from 'react';
import styled, { css } from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { SdekPointItem } from './sdek-points.item';
import { basicSdekPoints } from './sdek-points.type';

interface SdekPointOptionProps {
  data: basicSdekPoints;
  onSelect: (value: basicSdekPoints) => void;
  onClose: (value: false) => void;
}

export function SdekPointOption(props: SdekPointOptionProps) {
  const { data, onSelect, onClose } = props;
  return (
    <Container
      selected={false}
      onClick={() => {
        onSelect(data);
        onClose(false);
      }}
    >
      <SdekPointItem value={data} />
    </Container>
  );
}
const Container = styled.div<{ selected: boolean }>`
  display: flex;
  gap: ${spacing(3)};
  cursor: pointer;
  ${(p) =>
    p.selected
      ? css`
          background-color: ${THEME_COLOR.BACKGROUND_TRANSPARENT.GRAY_50};
        `
      : css`
          &:hover {
            background-color: ${THEME_COLOR.BACKGROUND_TRANSPARENT.GRAY_50};
          }
        `}
  &:hover {
    border: 1px solid ${THEME_COLOR.LIGHT_GRAY};
  }
  transition-duration: 0.2s;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
