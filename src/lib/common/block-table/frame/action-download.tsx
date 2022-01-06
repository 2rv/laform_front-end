import { ReactComponent as DownloadIcon } from 'src/asset/svg/upload.svg';
import { ActionDownloadProps } from '../table.type';

export function ActionDownload(props: ActionDownloadProps) {
  const { filePDF } = props;
  if (!Boolean(filePDF)) return null;

  return (
    <a target="_blank" href={props.filePDF}>
      <DownloadIcon />
    </a>
  );
}
