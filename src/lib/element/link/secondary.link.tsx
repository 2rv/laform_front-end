import { setLinkRedirect } from '../../../main/navigation';
import { TextSecondary } from '../text';

import { LinkPropsType } from './link.type';

export function LinkSecondary(props: LinkPropsType) {
  const { tid, tvalue, path, pathConfig, ...rest } = props;

  return (
    <a href={path} onClick={setLinkRedirect(path, pathConfig)}>
      <TextSecondary tid={tid} tvalue={tvalue} {...rest} />
    </a>
  );
}
