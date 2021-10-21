import styled from 'styled-components';
import { spacing, THEME_SIZE } from 'src/lib/theme';
import { LinkSecondary } from 'src/lib/element/link';
import { ReactComponent as OrderIcon } from 'src/asset/svg/order.svg';

interface props {
  image?: string;
  name?: string;
  vendorCode?: string;
  path: any;
  isOrder?: string;
  pathConfig: string;
}

export function TableName(props: props) {
  const {
    image,
    name,
    vendorCode,
    path = '/',
    isOrder,
    pathConfig = undefined,
  } = props;

  if (!name) return null;

  return (
    <Td>
      <Case>
        {image && (
          <LinkSecondary pathConfig={pathConfig} path={path}>
            <Image src={image} />
          </LinkSecondary>
        )}
        {isOrder && (
          <ImageLink pathConfig={pathConfig} path={path}>
            <OrderIcon />
          </ImageLink>
        )}
        <div>
          {name && (
            <LinkSecondary tid={name} pathConfig={pathConfig} path={path} />
          )}
          &nbsp;
          {vendorCode && (
            <LinkSecondary
              tid={vendorCode}
              path={path}
              pathConfig={pathConfig}
            />
          )}
        </div>
      </Case>
    </Td>
  );
}
const ImageLink = styled(LinkSecondary)`
  width: 75px;
  height: 75px;
  min-width: 75px;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const Td = styled.td`
  vertical-align: middle;
  padding-right: ${spacing(2)};
  width: 300px;
  min-width: 300px;
  @media screen and (max-width: 875px) {
    width: 100%;
  }
`;
const Image = styled.img`
  width: 75px;
  height: 75px;
  min-width: 75px;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
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
