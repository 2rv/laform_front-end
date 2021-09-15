import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as SmallDelete } from 'src/asset/svg/small-delete.svg';
import { text } from '../../common/text';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../theme';
import { ErrorField } from '../error';
import { TextPrimary, TextSecondary } from '../text';
import { MultiFieldPropsType } from './field.type';
import { IconButton } from '../button';
import { useRef } from 'react';
import { useState } from 'react';

export function MultiField(props: MultiFieldPropsType) {
  const {
    width,
    adaptive,

    titleTid,
    placeholderTid,
    type,
    value,
    error,
    items = [],
    setItems,

    onChange,
    onBlur,
  } = props;

  const addItem = (event: any) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      const copy = [...items] as any;
      copy.push((event.target as HTMLInputElement).value);
      setItems(copy);
      (event.target as HTMLInputElement).value = '';
    }
  };

  const removeItem = (index: number) => {
    const copy = [...items];
    copy.splice(index, 1);
    setItems(copy);
  };
  const [padding, setPadding] = useState(0);
  const containerRef = useRef();

  useEffect(() => {
    if (containerRef.current) {
      setPadding((containerRef.current as HTMLDivElement).offsetWidth);
    }
  }, [items]);

  return (
    <Container width={width} adaptive={adaptive}>
      {titleTid && <Title tid={titleTid} />}
      <Content>
        <ChipsContainer ref={containerRef}>
          {items.map((item: any, index: any) => {
            return (
              <Chip key={index}>
                <ChipText tid={item} />
                <Button onClick={() => removeItem(index)}>
                  <SmallDelete />
                </Button>
              </Chip>
            );
          })}
        </ChipsContainer>
        <Input
          chipPadding={padding}
          disabled={items.length >= 5}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          onKeyDown={addItem}
          placeholder={text(placeholderTid)}
          type={type || 'text'}
          error={!!error}
        />
      </Content>
      {error && <ErrorField errorTid={error} />}
    </Container>
  );
}

const Container = styled.div<any>`
  display: flex;
  flex-direction: column;
  width: ${(p) => {
    if (p.width) return p.width + 'px';
    return '100%';
  }};
  ${(p) => {
    return (
      p.adaptive &&
      css`
        @media screen and (max-width: 720px) {
          width: 100%;
        }
      `
    );
  }}
  gap: ${spacing(1)};
`;
const Button = styled(IconButton)`
  height: fit-content;
  width: fit-content;
  padding: 0;
  background-color: transparent;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  height: 46px;
  width: inherit;
  position: relative;
`;
const ChipsContainer = styled.div<any>`
  display: flex;
  margin: 7px;
  width: fit-content;
  height: 32px;
  gap: 7px;
  max-width: 700px;
  position: absolute;
`;
const Chip = styled.div`
  display: flex;
  gap: ${spacing(1)};
  align-items: center;
  height: 100%;
  max-width: 300px;
  min-width: 0px;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  background-color: ${THEME_COLOR.WHITE};
  padding: 0 ${spacing(2)};
`;
const Title = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
const ChipText = styled(TextPrimary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const Input = styled.input<any>`
  height: inherit;
  width: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${THEME_VALUE.FONT_NAME.PRIMARY};
  padding: 0 ${spacing(7)} 0 15px;
  padding-left: ${(p) => (p.chipPadding ? `${p.chipPadding + 21}px` : '15px')};

  color: ${THEME_COLOR.SECONDARY_DARK};
  ::placeholder {
    color: ${THEME_COLOR.TEXT.LIGHT};
  }
  background-color: ${THEME_COLOR.GRAY};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  font-size: ${THEME_SIZE.FONT.SMALL};
  transition: ${THEME_VALUE.TRANSITION.HOVER};
  border: 1px solid transparent;

  ${(p) =>
    p.error &&
    css`
      border-color: ${THEME_COLOR.TEXT.DANGER};
    `}

  :focus {
    border-color: ${THEME_COLOR.LIGHT_GRAY};
  }
`;
