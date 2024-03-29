import styled from 'styled-components';
import { THEME_SIZE, THEME_COLOR } from '../../lib/theme';
import { SectionLayout } from '../../lib/element/layout';
import { TextSecondary } from '../../lib/element/text';
import { TitlePrimary } from '../../lib/element/title';
import { BlockReactEditor } from 'src/lib/common/block-react-editor';
import { ConvertTime, ConvertDate } from 'src/lib/common/time';
import { LoaderPrimary } from 'src/lib/element/loader';

export function MasterClassPageComponent(props) {
  const { isPending, pageLoading, productInfo } = props;

  const {
    id,
    createdDate,
    expiredDate = new Date('00.00.00'),
    name,
    type,
    materials,
    articleText,
  } = productInfo;
  return (
    <SectionLayout>
      {isPending && <LoaderPrimary />}
      <HeaderCase>
        <Title tid={name} />
        <div>
          <TextLight tid="MASTER_CLASS.PAGE.ACCESS_FRONT_VIA" />
          &nbsp;
          <TextSecondary
            tid="MASTER_CLASS.PAGE.TIME_EXPIRED"
            tvalue={{
              text: ConvertTime(expiredDate),
              date: ConvertDate(expiredDate),
            }}
          />
        </div>
      </HeaderCase>
      {materials && (
        <BlockReactEditor data={materials} enableReInitialize readOnly />
      )}
      <BlockReactEditor
        titleTid="MASTER_CLASS.PAGE.MATERIALS"
        data={articleText}
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
