import styled from 'styled-components';
import { THEME_SIZE, THEME_COLOR } from '../../lib/theme';
import { SectionLayout } from '../../lib/element/layout';
import { TextSecondary } from '../../lib/element/text';
import { CardListBlock } from '../../lib/element/card-list';
import { TitlePrimary } from '../../lib/element/title';
import { BlockComment } from '../block-comment';
import { EditorRenderer } from '../block-editor-renderer';
import { ConvertTime } from 'src/lib/common/time-convert';

export function ArticlePageComponent(props) {
  const {
    isPending,
    isError,
    isSuccess,
    errorMessage,
    pageLoading,
    productInfo,
  } = props;
  const { id, type, modifier, name, categories, postArticle, createdDate } =
    productInfo;
  return (
    <SectionLayout>
      <HeaderCase>
        <Title tid={name} />
        <TextLight tid={ConvertTime(createdDate)} />
      </HeaderCase>
      <EditorRenderer data={postArticle} />
      <BlockComment type={type} id={id} />
    </SectionLayout>
  );
}

const HeaderCase = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  line-height: 1.5;
`;
const TextLight = styled(TextSecondary)`
  color: ${THEME_COLOR.TEXT.LIGHT};
`;
const Title = styled(TitlePrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
`;
