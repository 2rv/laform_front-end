import styled from 'styled-components';

import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { TextPrimary, TextSecondary } from '../../../../lib/element/text';
import { LinkPrimary } from '../../../../lib/element/link';

export function ErrorComponent(props) {
  const { image: Image, titleTid, textTid, linkTid, linkPath } = props;

  return (
    <Container>
      {Image && <Image />}
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

const Container = styled.div`
  display: grid;
  gap: ${spacing(4)};
  text-align: center;
`;

const TextContainer = styled.div`
  display: grid;
  gap: ${spacing(2)};
`;

const TitleText = styled(TextPrimary)`
  font-size: ${THEME_SIZE.FONT.LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
  line-height: 1.2em;
`;

const ErrorText = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  line-height: 1.5em;
`;

const LinkText = styled(TextPrimary)`
  color: ${THEME_COLOR.PRIMARY};
  font-size: ${THEME_SIZE.FONT.SMALL};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  line-height: 1.5em;
`;
