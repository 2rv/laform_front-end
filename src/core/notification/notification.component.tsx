import styled from 'styled-components';
import { TitlePrimary } from 'src/lib/element/title';
import { spacing, THEME_SIZE } from 'src/lib/theme';
import { NotificationComponentProps } from './notification.type';
import { ButtonSecondary } from 'src/lib/element/button';

export function NotificationComponent(props: NotificationComponentProps) {
  const {
    state: { pending, checked, error },
    onChange,
  } = props;

  return (
    <Container>
      <div>
        <Title tid="NOTIFICATION.PRE_CTA" />
        <BoldTitle tid="NOTIFICATION.CTA" />
      </div>
      <ButtonSecondary
        tid={
          checked
            ? 'NOTIFICATION.BUTTON_TEXT_UNSUBSCRIBE'
            : 'NOTIFICATION.BUTTON_TEXT_SUBSCRIBE'
        }
        onClick={onChange}
        disabled={pending || error}
      />
    </Container>
  );
}
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
const Container = styled.div`
  display: flex;
  flex-flow: column;
  gap: ${spacing(3)};
  @media screen and (max-width: 720px) {
    order: 1;
  }
`;
const BoldTitle = styled(Title)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
  line-height: 1.5;
`;
