import Link from 'next/link';
import { TextPrimary } from '../text';

import { LinkPropsType } from './link.type';

export function LinkPrimary(props: LinkPropsType) {
  const { tid, tvalue, href } = props;

  return (
    <Link href={href}>
      <a>
        <TextPrimary tid={tid} tvalue={tvalue} />
      </a>
    </Link>
  );
}
