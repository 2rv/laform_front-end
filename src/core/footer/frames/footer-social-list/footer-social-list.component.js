import styled from 'styled-components';
import {
  spacing,
  THEME_SIZE,
  THEME_COLOR,
  THEME_VALUE,
} from '../../../../lib/theme';
import { LinkSecondary } from '../../../../lib/element/link';

export function FooterSocialListComponent(props) {
  const { items, className } = props;

  return (
    <Container className={className}>
      {items.map(({ icon: Icon, path }, idx) => (
        <Link href={path} key={idx} target="_blank" rel="noopener noreferrer">
          <Icon />
        </Link>
      ))}
    </Container>
  );
}

const Link = styled.a`
  &:hover {
    opacity: ${THEME_VALUE.OPACITY.HOVER};
  }
  transition: opacity ${THEME_SIZE.TRANSACTION.DEFAULT};
`;

const Container = styled.div`
  display: flex;
  gap: ${spacing(3)};
`;
