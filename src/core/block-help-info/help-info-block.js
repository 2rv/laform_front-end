import styled from 'styled-components';
import { setLinkRedirect } from '../../main/navigation';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../lib/theme';
import { SectionLayout } from '../../lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';
import { TextSecondary } from '../../lib/element/text';
import { ReactComponent as SizeIcon } from '../../asset/svg/size.svg';
import { ReactComponent as DownloadIcon } from '../../asset/svg/arrow-down.svg';
import { ReactComponent as PaperIcon } from '../../asset/svg/paper.svg';
import { LinkSecondary } from 'src/lib/element/link';
import { FAQ_PAGE_ROUTE_PATH } from '../faq-page';

export function HelpInfoBlock(props) {
  const { viewAll } = props;
  return (
    <SectionLayout>
      <Case>
        <TitlePrimary tid="INFORMATION_DIRECTORY_LIST.TITLE" />
        {viewAll && (
          <LinkSecondary tid="HOME.VIEW_ALL" path={FAQ_PAGE_ROUTE_PATH} />
        )}
      </Case>
      <List>
        {listItems.map(({ icon: Icon, tid, path }, index) => (
          <Content key={index} onClick={setLinkRedirect(path)}>
            <Icon />
            <Text tid={tid} />
          </Content>
        ))}
      </List>
    </SectionLayout>
  );
}

export const listItems = [
  {
    icon: SizeIcon,
    tid: 'INFORMATION_DIRECTORY_LIST.ITEMS.SIZING_INFO',
    path: '/faq',
  },
  {
    icon: DownloadIcon,
    tid: 'INFORMATION_DIRECTORY_LIST.ITEMS.DOWNLOAD_AND_PRINT_PATTERN_INFO',
    path: '/faq',
  },
  {
    icon: PaperIcon,
    tid: 'INFORMATION_DIRECTORY_LIST.ITEMS.GLUE_PATTERN_INFO',
    path: '/faq',
  },
];

const Case = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const List = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: ${spacing(6)};
  @media screen and (max-width: 1070px) {
    grid-template-columns: repeat(1, 1fr);
    gap: ${spacing(3)};
  }
`;

const Content = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 140px;
  gap: ${spacing(2)};
  padding: ${spacing(7)};
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${THEME_COLOR.GRAY};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  cursor: pointer;
  &:hover {
    opacity: ${THEME_VALUE.OPACITY.HOVER};
  }
  transition: opacity ${THEME_VALUE.TRANSITION.HOVER};
`;

const Text = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  line-height: 1.5em;
`;
