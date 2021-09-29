import styled from 'styled-components';
import { TextSecondary, TextPrimary } from '../../lib/element/text';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import { ConvertDate } from 'src/lib/common/time-convert';
import { Divider } from 'src/lib/element/divider';

export function ProductParams(props) {
  const { params } = props;
  if (!params) return null;
  return (
    <>
      <Divider />
      <Container>
        {Boolean(params.program) && (
          <div>
            <TextSecondary tid="BLOCK_TABLE_LIST.PARAMS.PROGRAM" />
            &nbsp;
            <TextPrimary tid={params.program} />
          </div>
        )}
        {Boolean(params.color) && (
          <div>
            <TextSecondary tid="BLOCK_TABLE_LIST.PARAMS.COLOR" />
            &nbsp;
            <TextPrimary tid={params.color} />
          </div>
        )}
        {Boolean(params.size) && (
          <div>
            <TextSecondary tid="BLOCK_TABLE_LIST.PARAMS.SIZE" />
            &nbsp;
            <TextPrimary tid={params.size} />
          </div>
        )}
        {Boolean(params.format) && (
          <div>
            <TextSecondary tid="BLOCK_TABLE_LIST.PARAMS.FORMAT" />
            &nbsp;
            <TextPrimary tid={params.format} />
          </div>
        )}
        {Boolean(params.count) && (
          <div>
            <TextSecondary tid="BLOCK_TABLE_LIST.PARAMS.QUANTITY" />
            &nbsp;
            <TextPrimary tid={params.count} />
          </div>
        )}
        {Boolean(params.diliveryAdress) && (
          <div>
            <TextSecondary tid="BLOCK_TABLE_LIST.PARAMS.DILIVERY_INFO" />
            &nbsp;
            <TextPrimary tid={params.diliveryAdress} />
          </div>
        )}
        {Boolean(params.diliveryMethod) && (
          <div>
            <TextSecondary tid="BLOCK_TABLE_LIST.PARAMS.DELIVERY_METHOD" />
            &nbsp;
            <TextPrimary tid={params.diliveryMethod} />
          </div>
        )}
        {Boolean(params.paymentMethod) && (
          <div>
            <TextSecondary tid="BLOCK_TABLE_LIST.PARAMS.PAYMENT_METHOD" />
            <TextPrimary tid={params.paymentMethod} />
          </div>
        )}
        {Boolean(params.createdDate) && (
          <div>
            <TextSecondary tid="BLOCK_TABLE_LIST.PARAMS.CREATED_DATE" />
            &nbsp;
            <TextPrimary
              tid={ConvertDate(params.createdDate, 'MMMM DD, YYYY')}
            />
          </div>
        )}
        {Boolean(params.status) && (
          <div>
            <TextSecondary tid="BLOCK_TABLE_LIST.PARAMS.STATUS" />
            &nbsp;
            <TextPrimary tid={params.status} />
          </div>
        )}
      </Container>
    </>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
`;
