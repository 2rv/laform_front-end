import styled from 'styled-components';
import { TextSecondary, TextPrimary } from '../../lib/element/text';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import { ConvertDate } from 'src/lib/common/time-convert';
import { LinkPrimary } from 'src/lib/element/link';
import { ABOUT_ACCOUNT_ROUTE_PATH } from '../about-account';

export function ParamsTd(props) {
  const { params } = props;
  if (!params) return null;
  return (
    <Td>
      <Case>
        {Boolean(params.program?.value) && (
          <div>
            <TextSecondary tid="BLOCK_TABLE_LIST.PARAMS.PROGRAM" />
            &nbsp;
            <TextPrimary tid={params.program.value} />
          </div>
        )}
        {Boolean(params.color?.value) && (
          <div>
            <TextSecondary tid="BLOCK_TABLE_LIST.PARAMS.COLOR" />
            &nbsp;
            <TextPrimary tid={params.color.value} />
          </div>
        )}
        {Boolean(params.size?.value) && (
          <div>
            <TextSecondary tid="BLOCK_TABLE_LIST.PARAMS.SIZE" />
            &nbsp;
            <TextPrimary tid={params.size.value} />
          </div>
        )}
        {Boolean(params.format) && (
          <div>
            <TextSecondary tid="BLOCK_TABLE_LIST.PARAMS.FORMAT" />
            &nbsp;
            <TextPrimary tid={params.format} />
          </div>
        )}
        {Boolean(params.category) && (
          <div>
            <TextSecondary tid="BLOCK_TABLE_LIST.PARAMS.CATEGORY" />
            &nbsp;
            <TextPrimary tid={params.category} />
          </div>
        )}
        {Boolean(params.count) && (
          <div>
            <TextSecondary tid="BLOCK_TABLE_LIST.PARAMS.QUANTITY" />
            &nbsp;
            <TextPrimary tid={params.count} />
          </div>
        )}
        {Boolean(params.complexity) && (
          <div>
            <TextSecondary tid="BLOCK_TABLE_LIST.PARAMS.COMPLEXITY" />
            &nbsp;
            <TextPrimary tid={params.complexity} />
          </div>
        )}
        {Boolean(params.fullName) && (
          <div>
            <TextSecondary tid="BLOCK_TABLE_LIST.PARAMS.FULL_NAME" />
            &nbsp;
            <FullNameText
              tid={params.fullName}
              path={ABOUT_ACCOUNT_ROUTE_PATH}
              pathConfig={{ dynamic: true, params: { id: params?.userId } }}
            />
          </div>
        )}
        {Boolean(params.diliveryInfo) && (
          <div>
            <TextSecondary tid="BLOCK_TABLE_LIST.PARAMS.DILIVERY_INFO" />
            &nbsp;
            <TextPrimary tid={params.diliveryInfo} />
          </div>
        )}
        {Boolean(params.city) && (
          <div>
            <TextSecondary tid="BLOCK_TABLE_LIST.PARAMS.CITY" />
            &nbsp;
            <TextPrimary tid={params.city} />
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
        {Boolean(params.phoneNumber) && (
          <div>
            <TextSecondary tid="BLOCK_TABLE_LIST.PARAMS.PHONE" />
            &nbsp;
            <TextPrimary tid={params.phoneNumber} />
          </div>
        )}
        {Boolean(params.email) && (
          <div>
            <TextSecondary tid="BLOCK_TABLE_LIST.PARAMS.EMAIL" />
            &nbsp;
            <TextPrimary tid={params.email} />
          </div>
        )}
        {Boolean(params?.createdDate) && (
          <div>
            <TextSecondary tid="BLOCK_TABLE_LIST.PARAMS.CREATED_DATE" />
            &nbsp;
            <TextPrimary
              tid={ConvertDate(params.createdDate, 'MMMM DD, YYYY')}
            />
          </div>
        )}
      </Case>
    </Td>
  );
}

const Td = styled.td`
  vertical-align: middle;
  width: 100%;
  padding-right: ${spacing(4)};
  @media screen and (max-width: 875px) {
    padding-right: 0;
    margin-left: 90px;
    max-width: fit-content;
  }
`;
const Case = styled.div`
  display: flex;
  flex-wrap: wrap;
  line-height: 1.5;
  gap: ${spacing(1)};
`;
const FullNameText = styled(LinkPrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;
