import styled from 'styled-components';
import { TextPrimary } from '../../lib/element/text';
import { spacing, THEME_SIZE } from '../../lib/theme';

export function NameTd(props) {
  const { image, name } = props;
  return (
    <Td>
      <Case>
        {image && <Image src={image} />}
        {name && <Text tid={name} />}
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
