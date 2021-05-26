import styled from 'styled-components';

import { spacing } from '../../../../lib/theme';
import { TextPrimary } from '../../../../lib/element/text';
import { LinkSecondary } from '../../../../lib/element/link';

export function FooterMenuComponent(props) {
  const { items, ...rest } = props;

  return (
    <div {...rest}>
      {items.map((sectionItems, idx) => (
        <MenuContainer key={idx}>
          <TextPrimary tid={`FOOTER.MENU.SECTION${idx + 1}.TITLE`} />
          {sectionItems.map(({ tid, tvalue, path }) => (
            <LinkSecondary key={tid} tid={tid} tvalue={tvalue} path={path} />
          ))}
        </MenuContainer>
      ))}
    </div>
  );
}

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
`;
