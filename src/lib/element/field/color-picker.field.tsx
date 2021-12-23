import { ChangeEvent } from 'react';
import { HexColorPicker } from 'react-colorful';
import styled from 'styled-components';
import { BasicField } from '.';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../theme';
import { ButtonSecondary, IconButton } from '../button';
import { Popup } from '../popup';

type ColorPickerFieldProps = {
  titleTid?: string;
  placeholderTid?: string;
  error?: string;
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  setFieldValue: (name: string, value: string) => void;
  name: string;
};

export function ColorPickerField(props: ColorPickerFieldProps) {
  const {
    titleTid,
    placeholderTid,
    value = '',
    error,
    onChange,
    setFieldValue,
    name,
  } = props;

  const handleChange = (color: string) => {
    setFieldValue(name, color);
  };

  return (
    <Container>
      <BasicField
        titleTid={titleTid}
        placeholderTid={placeholderTid}
        name={name}
        value={value}
        onChange={onChange}
        error={error}
      />
      <Popup
        disableRelative
        disableBackground
        top={19}
        content={
          <Content>
            <Case>
              <HexColorPicker
                style={{ width: '100%', height: '100%' }}
                color={value}
                onChange={handleChange}
              />
            </Case>
            <ColumnCase>
              {COLOR_PRESETS.map((c, k) => (
                <ColorButton
                  color={c}
                  key={k}
                  onClick={() => handleChange(c)}
                />
              ))}
            </ColumnCase>
          </Content>
        }
      >
        <Button tid="Выбрать свой цвет" />
      </Popup>
    </Container>
  );
}

const COLOR_PRESETS = [
  THEME_COLOR.PRIMARY,
  THEME_COLOR.TEXT.WARNING,
  THEME_COLOR.TEXT.SUCCESS,
  THEME_COLOR.TEXT.INFO,
];

const Container = styled.div`
  display: flex;
  width: 100%;
  gap: ${spacing(1)};
  position: relative;
`;
const Button = styled(ButtonSecondary)`
  margin-top: 19px;
`;
const Case = styled.div`
  width: 100%;
`;
const Content = styled.div`
  display: flex;
  height: fit-content;
  width: 100%;
  background: ${THEME_COLOR.WHITE};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const ColumnCase = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: ${spacing(1)};
  padding: ${spacing(1)};
  z-index: 2;
`;
const ColorButton = styled(IconButton)<{ color: string }>`
  background-color: ${(p) => p.color};
`;
