import { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';

import { PopupPropsType } from './popup.type';

import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';

export function Popup(props: PopupPropsType) {
  const {
    content,
    children,
    top = 45,
    middleLeft,
    mobileRight,
    disableRelative,
  } = props;
  const [visible, setVisible]: [boolean, Function] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (modalRef?.current?.contains(e.target as Node)) return;
    setVisible(false);
  };
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [modalRef]);

  return (
    <PopupContainer ref={modalRef} disableRelative={disableRelative}>
      {visible && (
        <PopupContent
          top={top}
          disableRelative={disableRelative}
          middleLeft={middleLeft}
          mobileRight={mobileRight}
        >
          {content instanceof Function ? content(setVisible) : content}
        </PopupContent>
      )}
      <PopupAction onClick={() => setVisible(!visible)}>{children}</PopupAction>
    </PopupContainer>
  );
}

const PopupContainer = styled.div<any>`
  position: relative;
  ${(p) =>
    p.disableRelative &&
    css`
      display: contents;
    `}
`;

const PopupContent = styled.div<any>`
  position: absolute;
  z-index: 11;
  top: ${(p) => p.top}px;
  right: 0;
  ${(p) =>
    p.middleLeft &&
    css`
      @media screen and (max-width: 875px) {
        left: 0;
      }
    `}
  @media screen and (max-width: 720px) {
    ${(p) =>
      p.mobileRight
        ? css`
            right: 0;
          `
        : css`
            left: 0;
          `}
  }
  display: flex;
  ${(p) =>
    p.disableRelative
      ? css`
          height: 100%;
          width: 100%;
        `
      : css`
          width: max-content;
        `}
  background: ${THEME_COLOR.WHITE};
  box-shadow: ${THEME_COLOR.SHADOW.MODAL};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  padding: ${spacing(4)};
`;

const PopupAction = styled.div`
  width: 100%;
  height: 100%;
`;
