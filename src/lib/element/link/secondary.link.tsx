import { setLinkRedirect } from '../../../main/navigation';
import { TextSecondary } from '../text';

import { LinkPropsType } from './link.type';

export function LinkSecondary(props: LinkPropsType) {
  const { tid, tvalue, path, pathConfig, className } = props;

  return (
    <a
      className={className}
      href={path}
      onClick={setLinkRedirect(path, pathConfig)}
    >
      <TextSecondary tid={tid} tvalue={tvalue} />
    </a>
  );
}
