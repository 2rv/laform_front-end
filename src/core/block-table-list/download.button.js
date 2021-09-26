import styled from 'styled-components';
import { spacing } from '../../lib/theme';
import { ReactComponent as DownloadIcon } from '../../asset/svg/upload.svg';

export function DownloadButton(props) {
  return (
    <a target="_blank" href={props.filePDF}>
      <DownloadIcon />
    </a>
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
