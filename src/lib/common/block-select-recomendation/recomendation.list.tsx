import React from 'react';
import styled from 'styled-components';
import { ReactComponent as RemoveIcon } from 'src/asset/svg/remove.svg';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { TextSecondary } from 'src/lib/element/text';
import { ButtonBasic } from 'src/lib/element/button';
import { Divider } from 'src/lib/element/divider';
import { SectionLayout } from 'src/lib/element/layout';
import { RecommendationListProps } from './recomendation.type';

export function RecommendationList(props: RecommendationListProps) {
  const { handleChange, values } = props;

  return (
    <SectionLayout type="SMALL">
      {values.recommendationProducts.map((item) => {
        const product =
          item.masterClassId ||
          item.patternProductId ||
          item.sewingProductId ||
          item.postId;
        if (typeof item === 'undefined') return null;

        const srcImage = (
          item.masterClassId?.images[0] ||
          item.patternProductId?.images[0] ||
          item.sewingProductId?.images[0] ||
          item.postId?.image
        )?.fileUrl;
        return (
          <React.Fragment key={item.id}>
            <Container>
              <Content>
                <Image src={srcImage} />
                <Name tid={product?.titleRu} />
              </Content>

              <Content>
                <IconButton
                  onClick={() =>
                    handleChange(product?.id || '', product?.type || 0, false)
                  }
                >
                  <RemoveIcon />
                </IconButton>
              </Content>
            </Container>
            <Divider />
          </React.Fragment>
        );
      })}
    </SectionLayout>
  );
}
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(3)};
`;

const Name = styled(TextSecondary)`
  color: ${THEME_COLOR.SECONDARY_DARK};
  line-height: ${THEME_SIZE.FONT.LARGE};
`;
const Image = styled.img`
  height: 75px;
  width: 75px;
  min-width: 75px;
`;
const IconButton = styled(ButtonBasic)`
  width: 45px;
  height: 45px;
  padding: ${spacing(2.4)};
`;
