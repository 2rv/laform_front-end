import styled from 'styled-components';
import { spacing, THEME_SIZE } from '../../../../lib/theme';
import { TextPrimary } from '../../../../lib/element/text';
import { LinkSecondary } from '../../../../lib/element/link';

export function FooterMenuComponent(props) {
  const { items, className } = props;

  return (
    <div className={className}>
      {items.map(({ sectionTid, items: sectionItems }) => (
        <MenuContainer key={sectionTid}>
          <MenuHeader tid={sectionTid} />
          {sectionItems.map(({ tid, tvalue, path }) => (
            <LinkSecondary key={tid} tid={tid} tvalue={tvalue} path={path} />
          ))}
        </MenuContainer>
      ))}
    </div>
  );
}

const MenuHeader = styled(TextPrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
`;
