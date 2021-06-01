import styled from 'styled-components';

import { setLinkRedirect } from '../../../../main/navigation';
import { spacing, THEME_SIZE } from '../../../../lib/theme';
import { IndentLayout } from '../../../../lib/element/layout';
import { TextPrimary } from '../../../../lib/element/text';
import { InformationDirectoryComponent } from '../../../../lib/common/information-directory';

export function InformationDirectoryListComponent(props) {
  const { items } = props;

  return (
    <IndentLayout>
      <TitleText tid="INFO.INFORMATION_DIRECTORY.TITLE" />
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
