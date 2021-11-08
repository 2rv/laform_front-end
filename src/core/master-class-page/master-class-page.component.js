import styled from 'styled-components';
import { THEME_SIZE, THEME_COLOR } from '../../lib/theme';
import { SectionLayout } from '../../lib/element/layout';
import { TextSecondary } from '../../lib/element/text';
import { TitlePrimary } from '../../lib/element/title';
import { ReactEditorBlock } from 'src/lib/common/block-react-editor';
import { ConvertTime } from 'src/lib/common/time-convert';
import { LoaderPrimary } from 'src/lib/element/loader';

export function MasterClassPageComponent(props) {
  const { isPending, pageLoading, productInfo } = props;

  return (
    <SectionLayout>
      {isPending && <LoaderPrimary />}
      <HeaderCase>
        <Title tid={productInfo.name} />
        <TextLight tid={ConvertTime(productInfo.createdDate)} />
      </HeaderCase>
      {productInfo.materials && (
        <ReactEditorBlock
          titleTid="PATTERNS.MATERIALS"
          data={productInfo.materials}
          enableReInitialize
          readOnly
        />
      )}
      <ReactEditorBlock
        titleTid="Пост"
        data={productInfo.articleText}
        enableReInitialize
        readOnly
      />
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
