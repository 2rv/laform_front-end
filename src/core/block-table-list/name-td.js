import styled from 'styled-components';
import { spacing, THEME_SIZE } from '../../lib/theme';
import { LinkPrimary, LinkSecondary } from 'src/lib/element/link';
import { TextPrimary } from '../../lib/element/text';

export function NameTd(props) {
  const {
    image = null,
    name = null,
    vendorCode = null,
    path = '/',
    pathConfig = undefined,
  } = props;
  if (!image && !name) return null;
  return (
    <Td>
      <Case>
        {image && (
          <LinkSecondary pathConfig={pathConfig} path={path}>
            <Image src={image} />
          </LinkSecondary>
        )}
        <Column>
          {name && (
            <LinkSecondary tid={name} pathConfig={pathConfig} path={path} />
          )}
          {vendorCode && (
            <LinkSecondary
              tid={vendorCode}
              path={path}
              pathConfig={pathConfig}
            />
          )}
        </Column>
      </Case>
    </Td>
  );
}

const Td = styled.td`
  vertical-align: middle;
  padding-right: ${spacing(2)};
  width: 310px;
  min-width: 310px;
  @media screen and (max-width: 875px) {
    width: 100%;
  }
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.5;
`;
const Image = styled.img`
  width: 75px;
  height: 75px;
  min-width: 75px;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const Text = styled(TextPrimary)`
  word-break: break-word;
`;
const Case = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(3)};
  line-height: 1.5;
  @media screen and (max-width: 875px) {
    align-items: flex-start;
  }
`;
