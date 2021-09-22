import styled from 'styled-components';
import { spacing } from '../../lib/theme';
import { ReactComponent as DownloadIcon } from '../../asset/svg/upload.svg';
import { IconButton } from 'src/lib/element/button';

export function DownloadButton(props) {
  const { id, downloadItem } = props;

  return (
    <Button onClick={() => downloadItem(id)}>
      <DownloadIcon />
    </Button>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${spacing(3)};
  @media screen and (max-width: 875px) {
    justify-content: flex-start;
  }
`;
const Button = styled(IconButton)`
  padding: 0;
`;
