import styled from 'styled-components';

import { THEME_SIZE } from '../../../../lib/theme';
import { SectionLayout } from '../../../../lib/element/layout';
import { TextPrimary } from '../../../../lib/element/text';
import { FaqItemComponent } from './faq-item.component';

export function FaqListComponent(props) {
  const { titleTid, items } = props;

  return (
    <SectionLayout type="SMALL">
      {titleTid && <ListTitle tid={titleTid} />}
      {items.map((x) => (
        <FaqItemComponent key={x.titleTid} {...x} />
      ))}
    </SectionLayout>
  );
}

const ListTitle = styled(TextPrimary)`
  font-size: ${THEME_SIZE.FONT.LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;
