import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

import { PopupPropsType } from './popup.type';

import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';

export function Popup(props: PopupPropsType) {
  const { content, children, top = 45 } = props;
  const [visible, setVisible] = useState(false);
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
    <PopupContainer ref={modalRef}>
      {visible && (
        <PopupContent top={top}>
          {content instanceof Function ? content(setVisible) : content}
        </PopupContent>
      )}
      <PopupAction onClick={() => setVisible(!visible)}>{children}</PopupAction>
    </PopupContainer>
  );
}

const PopupContainer = styled.div`
  position: relative;
`;

const PopupContent = styled.div<any>`
  position: absolute;
  z-index: 3;
  /* transform: translateX(-85%); */
  top: ${(p) => p.top}px;
  right: 0;
  display: flex;
  width: max-content;
  background: ${THEME_COLOR.WHITE};
  box-shadow: ${THEME_COLOR.SHADOW.MODAL};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  padding: ${spacing(2)};
`;

const PopupAction = styled.div`
  width: 100%;
  height: 100%;
`;
