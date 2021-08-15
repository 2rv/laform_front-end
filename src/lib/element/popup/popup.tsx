import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

import { PopupPropsType } from './popup.type';

import { spacing, THEME_COLOR } from 'src/lib/theme';

export function Popup(props: PopupPropsType) {
  const { content, children } = props;
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
        <PopupContent>
          {content}
        </PopupContent>
      )}
      <PopupAction onClick={() => setVisible(!visible)}>
        {children}
      </PopupAction>
    </PopupContainer>
  );
}

const PopupContainer = styled.div`
  position: relative;
`;

const PopupContent = styled.div`
  position: absolute;
  z-index: 1;
  transform: translateX(-85%);
  top: 45px;
  width: 300px;
  background: ${THEME_COLOR.WHITE};
  box-shadow: ${THEME_COLOR.SHADOW.MODAL};
  border-radius: 5px;
  padding: ${spacing(3)};
`;

const PopupAction = styled.div`
  width: 100%;
  height: 100%;
`;
