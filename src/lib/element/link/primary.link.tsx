import { setLinkRedirect } from '../../../main/navigation';
import { TextPrimary } from '../text';

import { LinkPropsType } from './link.type';

export function LinkPrimary(props: LinkPropsType) {
  const { tid, tvalue, path, pathConfig, ...rest } = props;

  return (
    <a href={path} onClick={setLinkRedirect(path, pathConfig)}>
      <TextPrimary tid={tid} tvalue={tvalue} {...rest} />
    </a>
  );
}
