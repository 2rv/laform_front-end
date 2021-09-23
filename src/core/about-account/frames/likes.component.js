import styled from 'styled-components';
import { SectionLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { LinkSecondary } from 'src/lib/element/link';
import { Divider } from 'src/lib/element/divider';
import { spacing, THEME_SIZE } from 'src/lib/theme';
import { TextPrimary, TextSecondary } from 'src/lib/element/text';
import { convertLikesData } from '../about-account.convert';

export function LikesComponent({ likes }) {
  return (
    <SectionLayout type="SMALL">
      <Title tid="PROFILE.LIKES" />
      <Divider />
      {Boolean(likes?.length > 0) ? (
        <Container>
          {convertLikesData(likes).map((like) => (
            <Content key={like.id}>
              <Link path={`/${like.productName}/${like.productId}`}>
                <Image src={like.image} />
                <ProductTitle tid={like.text} />
              </Link>
              <div>
                <TextSecondary tid="BLOCK_TABLE_LIST.PARAMS.CATEGORY" />
                &nbsp;
                <TextPrimary tid={like.category} />
              </div>
            </Content>
          ))}
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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(900px, 1fr));
  align-items: center;
  gap: ${spacing(2)};
`;
const Link = styled(LinkSecondary)`
  display: flex;
  align-items: center;
  gap: ${spacing(2)};
`;
const Image = styled.img`
  width: 75px;
  height: 75px;
  min-width: 75px;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
