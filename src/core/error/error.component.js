import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import { TextPrimary, TextSecondary } from '../../lib/element/text';
import { LinkPrimary } from '../../lib/element/link';
import { ReactComponent as ErrorImage } from '../../asset/svg/error-page-image.svg';

export function ErrorComponent(props) {
  const { titleTid, textTid, linkTid, linkPath } = props;
  return (
    <Container>
      <Image />
      <TextContainer>
        <TitleText tid={titleTid} />
        <div>
          <ErrorText tid={textTid} />
          {linkTid && (
            <>
              &nbsp;
              <LinkPrimary path={linkPath}>
                <LinkText tid={linkTid} />
              </LinkPrimary>
            </>
          )}
        </div>
      </TextContainer>
    </Container>
  );
}
const Image = styled(ErrorImage)`
  width: 360px;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${spacing(6)};
  text-align: center;
  @media screen and (max-width: 500px) {
    gap: ${spacing(3)};
  }
`;

const TextContainer = styled.div`
  display: grid;
  gap: ${spacing(2)};
`;
const TitleText = styled(TextPrimary)`
  font-size: ${THEME_SIZE.FONT.LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
  line-height: 1.5;
`;
const ErrorText = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  line-height: 1.5;
`;
const LinkText = styled(TextPrimary)`
  color: ${THEME_COLOR.PRIMARY};
  font-size: ${THEME_SIZE.FONT.SMALL};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  line-height: 1.5;
`;
