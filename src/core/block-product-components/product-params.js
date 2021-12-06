import styled from 'styled-components';
import { TextSecondary, TextPrimary } from '../../lib/element/text';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import { ConvertDate } from 'src/lib/common/time-convert';
import { Divider } from 'src/lib/element/divider';

export function ProductParams(props) {
  const { params } = props;
  if (!params) return null;
  const {
    option,
    format,
    color,
    size,
    program,
    category,
    count,
    length,
    complexity,
    fullName,
    userId,
    diliveryInfo,
    address,
    diliveryMethod,
    paymentMethod,
    phoneNumber,
    email,
    createdDate,
  } = params;
  return (
    <>
      <Divider />
      <Container>
        {Boolean(option) && (
          <div>
            <TextSecondary tid="BLOCK_TABLE_LIST.PARAMS.OPTION" />
            &nbsp;
            <TextPrimary tid={option} />
          </div>
        )}
        {Boolean(color) && (
          <div>
            <TextSecondary tid="BLOCK_TABLE_LIST.PARAMS.COLOR" />
            &nbsp;
            <TextPrimary tid={color} />
          </div>
        )}
        {Boolean(size) && (
          <div>
            <TextSecondary tid="BLOCK_TABLE_LIST.PARAMS.SIZE" />
            &nbsp;
            <TextPrimary tid={size} />
          </div>
        )}
        {Boolean(program) && (
          <div>
            <TextSecondary tid="BLOCK_TABLE_LIST.PARAMS.PROGRAM" />
            &nbsp;
            <TextPrimary tid={program} />
          </div>
        )}
        {Boolean(format) && (
          <div>
            <TextSecondary tid="BLOCK_TABLE_LIST.PARAMS.FORMAT" />
            &nbsp;
            <TextPrimary tid={format} />
          </div>
        )}
        {Boolean(category) && (
          <div>
            <TextSecondary tid="BLOCK_TABLE_LIST.PARAMS.CATEGORY" />
            &nbsp;
            <TextPrimary tid={category} />
          </div>
        )}
        {Boolean(count) && (
          <div>
            <TextSecondary tid="BLOCK_TABLE_LIST.PARAMS.QUANTITY" />
            &nbsp;
            <TextPrimary tid={count} />
          </div>
        )}
        {Boolean(length) && (
          <div>
            <TextSecondary tid="BLOCK_TABLE_LIST.PARAMS.LENGTH" />
            &nbsp;
            <TextPrimary tid={length} />
          </div>
        )}
        {Boolean(complexity) && (
          <div>
            <TextSecondary tid="BLOCK_TABLE_LIST.PARAMS.COMPLEXITY" />
            &nbsp;
            <TextPrimary tid={String(complexity)} />
          </div>
        )}
        {Boolean(fullName) && (
          <div>
            <TextSecondary tid="BLOCK_TABLE_LIST.PARAMS.FULL_NAME" />
            &nbsp;
            <FullNameText
              tid={fullName}
              path={ABOUT_ACCOUNT_ROUTE_PATH}
              pathConfig={{ dynamic: true, params: { id: userId } }}
            />
          </div>
        )}
        {Boolean(diliveryInfo) && (
          <div>
            <TextSecondary tid="BLOCK_TABLE_LIST.PARAMS.DILIVERY_INFO" />
            &nbsp;
            <TextPrimary tid={diliveryInfo} />
          </div>
        )}
        {Boolean(address) && (
          <div>
            <TextSecondary tid="BLOCK_TABLE_LIST.PARAMS.CITY" />
            &nbsp;
            <TextPrimary tid={address} />
          </div>
        )}
        {Boolean(diliveryMethod) && (
          <div>
            <TextSecondary tid="BLOCK_TABLE_LIST.PARAMS.DELIVERY_METHOD" />
            &nbsp;
            <TextPrimary tid={diliveryMethod} />
          </div>
        )}
        {Boolean(paymentMethod) && (
          <div>
            <TextSecondary tid="BLOCK_TABLE_LIST.PARAMS.PAYMENT_METHOD" />
            <TextPrimary tid={paymentMethod} />
          </div>
        )}
        {Boolean(phoneNumber) && (
          <div>
            <TextSecondary tid="BLOCK_TABLE_LIST.PARAMS.PHONE" />
            &nbsp;
            <TextPrimary tid={phoneNumber} />
          </div>
        )}
        {Boolean(email) && (
          <div>
            <TextSecondary tid="BLOCK_TABLE_LIST.PARAMS.EMAIL" />
            &nbsp;
            <TextPrimary tid={email} />
          </div>
        )}
        {Boolean(createdDate) && (
          <div>
            <TextSecondary tid="BLOCK_TABLE_LIST.PARAMS.CREATED_DATE" />
            &nbsp;
            <TextPrimary tid={ConvertDate(createdDate, 'MMMM DD, YYYY')} />
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
