import React from 'react';
import styled, { css } from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { SdekTariffItem } from './sdek-tarifflist.item';
import { basicTariffType } from '.';

interface SdekTariffListOptionProps {
  data: basicTariffType;
  onSelect: (value: basicTariffType) => void;
  onClose: (value: false) => void;
}

export function SdekTariffListOption(props: SdekTariffListOptionProps) {
  const { data, onSelect, onClose } = props;
  return (
    <Container
      selected={false}
      onClick={() => {
        onSelect(data);
        onClose(false);
      }}
    >
      <SdekTariffItem value={data} />
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
