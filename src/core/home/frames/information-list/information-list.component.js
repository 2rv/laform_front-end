import styled from 'styled-components';

import { setLinkRedirect } from '../../../../main/navigation';
import { spacing, THEME_SIZE } from '../../../../lib/theme';
import { IndentLayout } from '../../../../lib/element/layout';
import { TextPrimary } from '../../../../lib/element/text';
import { LinkSecondary } from '../../../../lib/element/link';
import { InformationDirectoryComponent } from '../../../../lib/common/information-directory';

import { INFORMATION_LIST_VIEW_ALL_PATH } from './information-list.constant';

export function InformationListComponent(props) {
  const { items } = props;

  return (
    <SectionLayout>
      <TitleContainer>
        <TitleText tid="HOME.INFORMATION_LIST.TITLE" />
        <ViewAllLink
          tid="HOME.VIEW_ALL"
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
    </SectionLayout>
  );
}

const SectionLayout = styled(IndentLayout)`
  @media screen and (max-width: 600px) {
    gap: ${spacing(3)};
  }
`;

const TitleContainer = styled.div`
  display: flex;
  @media screen and (max-width: 600px) {
    align-items: center;
  }
`;

const TitleText = styled(TextPrimary)`
  font-size: ${THEME_SIZE.FONT.LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  @media screen and (max-width: 600px) {
    font-size: ${THEME_SIZE.FONT.MEDIUM};
  }
`;

const ViewAllLink = styled(LinkSecondary)`
  margin-left: auto;
  @media screen and (max-width: 600px) {
    font-size: ${THEME_SIZE.FONT.SMALL};
  }
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${spacing(6)};
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    grid-row-gap: ${spacing(3)};
  }
`;
