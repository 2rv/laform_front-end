import styled from 'styled-components';
import { SectionLayout } from '../../lib/element/layout';
import { spacing } from '../../lib/theme';
import {
  NotificationFormContainer,
  NotificationHeaderComponent,
} from './frames';

export function NotificationComponent(props) {
  return (
    <Container type="SMALL">
      <NotificationHeaderComponent />
      <NotificationFormContainer {...props} />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-flow: column;
  gap: ${spacing(3)};
  @media screen and (max-width: 875px) {
    order: 1;
  }
`;
