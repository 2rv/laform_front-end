import styled, { css } from 'styled-components';
import { ReactComponent as CheckmarkIcon } from 'src/asset/svg/check-mark.svg';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../theme';
import { TextSecondary } from '../text';
import { FieldCheckboxProps } from './field.type';

export function FieldCheckbox(props: FieldCheckboxProps) {
  const {
    titleTid,
    labelTid,
    name,
    checked,
    onChange,
    className,
    onBlur,
    disabled,
  } = props;
  return (
    <Container className={className}>
      {titleTid && <Title tid={titleTid} />}
      <Content>
        <Input
          type="checkbox"
          onChange={onChange}
          name={name}
          checked={checked}
          onBlur={onBlur}
          disabled={disabled}
        />
        <CheckmarkContainer checked={!!checked}>
          <Checkmark />
        </CheckmarkContainer>
        <Title tid={labelTid} />
      </Content>
    </Container>
  );
}

const Title = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${spacing(1)};
`;
const Content = styled.label`
  display: flex;
  align-items: center;
  gap: ${spacing(2)};
  padding: ${spacing(2)} ${spacing(3)};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  background-color: ${THEME_COLOR.GRAY};
  cursor: pointer;
  height: 46px;
  user-select: none;
`;
const Input = styled.input`
  display: none;
`;
const CheckmarkContainer = styled.div<{ checked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
  color: transparent;
  background-color: ${THEME_COLOR.LIGHT_GRAY};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  transition-property: background-color, color;
  transition-duration: ${THEME_VALUE.TRANSITION.FAST};

  ${(p) =>
    p.checked &&
    css`
      color: ${THEME_COLOR.GRAY};
      background-color: ${THEME_COLOR.SECONDARY_DARK};
    `}
`;
const Checkmark = styled(CheckmarkIcon)`
  fill: currentColor;
`;
