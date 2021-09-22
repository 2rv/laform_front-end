import styled from 'styled-components';
import { THEME_SIZE, THEME_COLOR } from '../../lib/theme';
import { SectionLayout } from '../../lib/element/layout';
import { TextSecondary } from '../../lib/element/text';
import { TitlePrimary } from '../../lib/element/title';
import { ReactEditor } from '../block-react-editor';
import { ConvertTime } from 'src/lib/common/time-convert';
import { LoaderPrimary } from 'src/lib/element/loader';
import { Spinner } from 'src/lib/element/spinner';

export function MasterClassArticleComponent(props) {
  const { isPending, pageLoading, productInfo } = props;

  return (
    <>
      {pageLoading && <LoaderPrimary />}
      {isPending ? (
        <Spinner />
      ) : (
        <SectionLayout>
          <HeaderCase>
            <Title tid={productInfo.name} />
            <TextLight tid={ConvertTime(productInfo.createdDate)} />
          </HeaderCase>
          <ReactEditor
            data={productInfo.materials}
            enableReInitialize
            readOnly
          />
        </SectionLayout>
      )}
    </>
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
