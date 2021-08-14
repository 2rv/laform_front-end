import styled, { css } from 'styled-components';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../lib/theme';
import { TextPrimary, TextSecondary } from '../../lib/element/text';
import { SectionLayout } from '../../lib/element/layout';

export function MediaBlock(props) {
  const {
    title,
    type = 0,
    media = 'http://sun9-3.userapi.com/s/v1/if1/y72Ov_XZPLyuIeAQsCKjkYj31CV4h3ULfIBf755hFxDLRpqvvyxv0Rcs-RDqK0dOBufGqVX5.jpg?size=200x235&quality=96&crop=0,0,500,588&ava=1',
    options = { bold: false },
    description,
  } = props.content;
  const { bold } = options;
  return (
    <SectionLayout type="SMALL">
      {title && <Title tid={title} />}
      <MediaContent>
        {type === 0 && <ImageContent src={media} />}
        {type === 1 && (
          <iframe
            width="100%"
            height="100%"
            src={media}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        )}
        {type === 3 && <Content tid={media} />}
      </MediaContent>
      {description && <Description bold={bold}>{description}</Description>}
    </SectionLayout>
  );
}
const MediaContent = styled.div`
  display: flex;
  width: 100%;
  height: 360px;
  background-color: ${THEME_COLOR.GRAY};
  justify-content: center;
`;
const Description = styled(TextSecondary)`
  ${(p) => {
    return p.bold
      ? css`
          color: ${THEME_COLOR.SECONDARY};
          font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
        `
      : css`
          color: ${THEME_COLOR.TEXT.LIGHT};
        `;
  }}
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  line-height: 1.5;
`;
const Title = styled(TextSecondary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
const ImageContent = styled.img`
  object-fit: cover;
`;
const Content = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.EXTRA_LARGE};
  color: ${THEME_COLOR.TEXT.LIGHT};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  align-self: center;
`;
