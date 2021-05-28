import styled from 'styled-components';

import { spacing } from '../../../../lib/theme';
import { LinkSecondary } from '../../../../lib/element/link';

export function FooterSocialListComponent(props) {
  const { items, className } = props;

  return (
    <Container className={className}>
      {items.map(({ icon: Icon, path, pathConfig }, idx) => (
        <LinkSecondary key={idx} path={path} pathConfig={pathConfig}>
          <Icon />
        </LinkSecondary>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: ${spacing(3)};
`;
