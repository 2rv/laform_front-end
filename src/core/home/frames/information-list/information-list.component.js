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
      <TitleContainer>
        <TitleText tid="HOME.INFORMATION_LIST.TITLE" />
        <ViewAllLink
          tid="HOME.INFORMATION_LIST.VIEW_ALL"
          path={INFORMATION_LIST_VIEW_ALL_PATH}
        />
      </TitleContainer>
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

const TitleContainer = styled.div`
  display: flex;
`;

const TitleText = styled(TextPrimary)`
  font-size: ${THEME_SIZE.FONT.LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;

const ViewAllLink = styled(LinkSecondary)`
  margin-left: auto;
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${spacing(6)};
`;
