import { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { spacing, THEME_COLOR, THEME_SIZE } from '../../theme';
import { TextPrimary } from '../text';

import { ModalMenuPropsType } from './modal.type';

export function ModalMenu(props: ModalMenuPropsType) {
  const { active, items, onClose, ...rest } = props;
  if (!active) return null;

  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef?.current?.contains(e.target as Node)) return;

      onClose();
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [modalRef]);

  return (
    <Container ref={modalRef} {...rest}>
      {items.map((x) => (
        <Item key={x.tid} tid={x.tid} onClick={x.action} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  display: grid;
  padding: ${spacing(2.4)} 0;
  background-color: ${THEME_COLOR.MODAL.PRIMARY};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.25);
  white-space: nowrap;
`;

const Item = styled(TextPrimary)`
  padding: ${spacing(1.2)} ${spacing(4)};
  cursor: pointer;

  &:hover {
    background-color: ${THEME_COLOR.BACKGROUND.GRAY};
  }
`;
