import { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../theme';
import { LinkSecondary } from '../link';
import { Divider } from '../divider';

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
      {items.map((item) => (
        <Item key={item.id} divider={item.divider}>
          <Link tid={item.tid} path={item.path} />
          {item.divider && <Divider />}
        </Item>
      ))}
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  display: grid;
  padding: ${spacing(2)} 0;
  background-color: ${THEME_COLOR.WHITE};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  box-shadow: ${THEME_COLOR.SHADOW.MODAL};
  white-space: nowrap;
`;

const Item = styled.div`
  padding: ${spacing(1)} ${spacing(4)};
  ${(props: { divider: boolean }) => !props.divider && `
    &:hover {
      background-color: ${THEME_COLOR.GRAY};
    }
  `}
`;

const Link = styled(LinkSecondary)`
  font-family: ${THEME_VALUE.FONT_NAME.PRIMARY};
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  color: ${THEME_COLOR.SECONDARY_DARK};
  cursor: pointer;
`;
