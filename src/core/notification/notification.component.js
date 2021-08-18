import { spacing } from 'src/lib/theme';
import styled from 'styled-components';
import { SectionLayout } from '../../lib/element/layout';
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
`;
