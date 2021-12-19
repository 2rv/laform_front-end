import styled from 'styled-components';
import { spacing, THEME_SIZE } from 'src/lib/theme';
import { TextPrimary, TextSecondary } from 'src/lib/element/text';
import { ButtonPrimary } from 'src/lib/element/button';
import { SectionLayout } from 'src/lib/element/layout';
import { setLinkRedirect } from 'src/main/navigation';
import { ErrorComponentProps } from './error.constant';

export function ErrorComponent(props: ErrorComponentProps) {
  const { titleTid, textTid, linkTid, linkPath, image } = props.config;
  const Image = image;
  return (
    <Container>
      <Image />
      <TextContainer>
        <TitleText tid={titleTid} />
        <SectionLayout type="SMALL">
          <ErrorText tid={textTid} />
          {linkTid && (
            <ButtonPrimary onClick={setLinkRedirect(linkPath)} tid={linkTid} />
          )}
        </SectionLayout>
      </TextContainer>
    </Container>
  );
}
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
  max-width: 540px;
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
