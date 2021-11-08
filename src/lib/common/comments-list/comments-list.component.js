import styled from 'styled-components';
import { SectionLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { LinkSecondary } from 'src/lib/element/link';
import { Divider } from 'src/lib/element/divider';
import { spacing, THEME_SIZE } from 'src/lib/theme';
import { TextSecondary } from 'src/lib/element/text';
import { ConvertTime } from 'src/lib/common/time-convert';
import { convertCommentsData } from './comments-list.convert';

export function CommentsComponent(props) {
  const { comments = [] } = props;

  return (
    <SectionLayout type="SMALL">
      <Title tid="PROFILE.COMMENTS" />
      <Divider />
      {Boolean(comments?.length > 0) ? (
        <Container>
          {convertCommentsData(comments).map((comment) => (
            <Content key={comment.id}>
              <Link path={`/${comment.productName}/${comment.productId}`}>
                <Image src={comment.image} />
                <TextSecondary tid={comment.text} />
              </Link>
              <Text>{ConvertTime(comment.createDate)}</Text>
            </Content>
          ))}
        </Container>
      ) : (
        <TextSecondary tid="PROFILE.NOT_HAVE_COMMENTS" />
      )}
    </SectionLayout>
  );
}

const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
const Container = styled.div`
  display: grid;
  gap: ${spacing(6)};
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 720px) {
    flex-direction: column;
    gap: ${spacing(3)};
    align-items: flex-start;
  }
`;
const Text = styled(TextSecondary)`
  @media screen and (max-width: 720px) {
    margin-left: 90px;
  }
`;
const Link = styled(LinkSecondary)`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: ${spacing(2)};
  @media screen and (max-width: 720px) {
    align-items: flex-start;
  }
`;
const Image = styled.img`
  width: 75px;
  height: 75px;
  min-width: 75px;
  object-fit: cover;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
