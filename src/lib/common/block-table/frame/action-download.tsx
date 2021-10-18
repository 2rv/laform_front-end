import { ReactComponent as DownloadIcon } from '../../../../asset/svg/upload.svg';

interface props {
  filePDF?: string;
}

export function ActionDownload(props: props) {
  const { filePDF } = props;
  if (!Boolean(filePDF)) return null;

  return (
    <a target="_blank" href={props.filePDF}>
      <DownloadIcon />
    </a>
  );
}
