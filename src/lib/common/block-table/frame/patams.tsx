import styled from 'styled-components';
import { TextSecondary, TextPrimary, TextCurrency } from 'src/lib/element/text';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { ConvertDate } from 'src/lib/common/time-convert';
import { LinkPrimary } from 'src/lib/element/link';
import { ABOUT_ACCOUNT_ROUTE_PATH } from 'src/core/about-account';
import { TableParamsProps } from '../table.type';

export function TableParams(props: { params?: TableParamsProps }) {
  const { params } = props;
  if (!params) return null;

  return (
    <Td>
      <BlockParams params={params} />
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

export function BlockParams(props: { params: TableParamsProps }) {
  const { params } = props;
  const {
    option,
    type,
    color,
    size,
    program,
    category,
    count,
    length,
    complexity,
    fullName,
    userId,
    address,
    phone,
    email,
    createdDate,
  } = params;
  return (
    <Case>
      {Boolean(option) && (
        <div>
          <TextSecondary tid="Опция" />
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
      {Boolean(type) && (
        <div>
          <TextSecondary tid="BLOCK_TABLE_LIST.PARAMS.FORMAT" />
          &nbsp;
          {(type === 0 || type === 1) && (
            <TextPrimary tid="PATTERNS.MY_PATTERNS.DETAILS.ELECTRONIC" />
          )}
          {(type === 2 || type === 3) && (
            <TextPrimary tid="PATTERNS.MY_PATTERNS.DETAILS.PRINTED" />
          )}
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
          <NumberText price={count || 0} />
        </div>
      )}
      {Boolean(length) && (
        <div>
          <TextSecondary tid="Длинна" />
          &nbsp;
          <NumberText price={length || 0} />
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
      {Boolean(address) && (
        <div>
          <TextSecondary tid="BLOCK_TABLE_LIST.PARAMS.CITY" />
          &nbsp;
          <TextPrimary tid={address} />
        </div>
      )}
      {Boolean(phone) && (
        <div>
          <TextSecondary tid="BLOCK_TABLE_LIST.PARAMS.PHONE" />
          &nbsp;
          <TextPrimary tid={phone} />
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
    </Case>
  );
}

const Case = styled.div`
  display: flex;
  flex-wrap: wrap;
  line-height: 1.5;
  gap: ${spacing(1)};
`;
const FullNameText = styled(LinkPrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;
const NumberText = styled(TextCurrency)`
  color: ${THEME_COLOR.SECONDARY_DARK};
`;
