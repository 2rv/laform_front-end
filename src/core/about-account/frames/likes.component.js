import styled from 'styled-components';
import { SectionLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { LinkSecondary } from 'src/lib/element/link';
import { Divider } from 'src/lib/element/divider';
import { spacing, THEME_SIZE } from 'src/lib/theme';
import { TextPrimary, TextSecondary } from 'src/lib/element/text';

export function LikesComponent(props) {
  const { likes = [] } = props;
  return (
    <SectionLayout type="SMALL">
      <Title tid="PROFILE.LIKES" />
      <Divider />
      {Boolean(likes.length) ? (
        <Container>
          {likes.map((like) => {
            const { id, name, image, category, path, pathConfig } = like;
            return (
              <Content key={id}>
                <Link path={path} pathConfig={pathConfig}>
                  <Image src={image} />
                  <ProductTitle tid={name} />
                </Link>
                <Case>
                  <TextSecondary tid="BLOCK_TABLE_LIST.PARAMS.CATEGORY" />
                  &nbsp;
                  <TextPrimary tid={category} />
                </Case>
              </Content>
            );
          })}
        </Container>
      ) : (
        <TextSecondary tid="PROFILE.NOT_HAVE_LIKES" />
      )}
    </SectionLayout>
  );
}

const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
const ProductTitle = styled(TextSecondary)`
  word-break: break-word;
`;
const Container = styled.div`
  display: grid;
  gap: ${spacing(6)};
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(6)};
  @media screen and (max-width: 720px) {
    flex-direction: column;
    gap: ${spacing(3)};
    align-items: flex-start;
  }
`;
const Case = styled.div`
  @media screen and (max-width: 720px) {
    margin-left: 90px;
  }
`;
const Link = styled(LinkSecondary)`
  display: flex;
  align-items: center;
  gap: ${spacing(2)};
  @media screen and (max-width: 720px) {
    align-items: flex-start;
  }
`;
const Image = styled.img`
  width: 75px;
  height: 75px;
  min-width: 75px;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
