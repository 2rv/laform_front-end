import styled from 'styled-components';
import { IndentLayout } from '../../lib/element/layout';
import { spacing } from '../../lib/theme';
import {
  NotificationFormContainer,
  NotificationHeaderComponent,
} from './frames';

export function NotificationComponent(props) {
  return (
    <Layout type="small">
      <NotificationHeaderComponent />
      <NotificationFormContainer {...props} />
    </Layout>
  );
}

const Layout = styled(IndentLayout)`
  display: grid;
  gap: ${spacing(3)};
`;
