import styled from 'styled-components';

import { setLinkRedirect } from '../../../../main/navigation';
import { spacing, THEME_SIZE } from '../../../../lib/theme';
import { IndentLayout } from '../../../../lib/element/layout';
import { TextPrimary } from '../../../../lib/element/text';
import { LinkSecondary } from '../../../../lib/element/link';
import { InformationDirectoryComponent } from '../../../../lib/common/information-directory';

import { INFORMATION_LIST_VIEW_ALL_PATH } from './information-list.constant';

export function InformationListComponent(props) {
  const { className, items } = props;

  return (
    <IndentLayout className={className}>
      <TitleText tid="С чем вам помочь?" />

      <ListContainer>
        {items.map(({ icon, tid, path }) => (
          <InformationDirectoryComponent
            key={tid}
            icon={icon}
            tid={tid}
            onClick={setLinkRedirect(path)}
          />
        ))}
      </ListContainer>
    </IndentLayout>
  );
}

const TitleText = styled(TextPrimary)`
  font-size: ${THEME_SIZE.FONT.LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${spacing(6)};
`;
