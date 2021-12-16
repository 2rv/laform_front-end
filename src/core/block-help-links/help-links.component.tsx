import styled from 'styled-components';
import { ReactComponent as SizeIcon } from 'src/asset/svg/how-size.svg';
import { ReactComponent as DownloadIcon } from 'src/asset/svg/how-download.svg';
import { ReactComponent as PaperIcon } from 'src/asset/svg/how-paper.svg';
import { setLinkRedirect } from 'src/main/navigation';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from 'src/lib/theme';
import { SectionLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { TextSecondary } from 'src/lib/element/text';
import { LinkSecondary } from 'src/lib/element/link';
import {
  FAQ_SIZE_ROUTE_PATH,
  FAQ_HOW_PRINT_ROUTE_PATH,
  FAQ_HOW_GLUE_ROUTE_PATH,
  FAQ_ROUTE_PATH,
} from '../faq-article';

export function HelpLinksComponent(props: { viewAll?: boolean }) {
  const { viewAll } = props;
  return (
    <SectionLayout>
      <Case>
        <Title tid="INFORMATION_DIRECTORY_LIST.TITLE" />
        {viewAll && <LinkSecondary tid="HOME.VIEW_ALL" path={FAQ_ROUTE_PATH} />}
      </Case>
      <List>
        {INFO_BLOCK_ITEMS.map(({ icon: Icon, tid, path }, index) => (
          <Content key={index} onClick={setLinkRedirect(path)}>
            <Icon />
            <Text tid={tid} />
          </Content>
        ))}
      </List>
    </SectionLayout>
  );
}

const INFO_BLOCK_ITEMS = [
  {
    icon: SizeIcon,
    tid: 'INFORMATION_DIRECTORY_LIST.ITEMS.SIZING_INFO',
    path: FAQ_SIZE_ROUTE_PATH,
  },
  {
    icon: DownloadIcon,
    tid: 'INFORMATION_DIRECTORY_LIST.ITEMS.DOWNLOAD_AND_PRINT_PATTERN_INFO',
    path: FAQ_HOW_PRINT_ROUTE_PATH,
  },
  {
    icon: PaperIcon,
    tid: 'INFORMATION_DIRECTORY_LIST.ITEMS.GLUE_PATTERN_INFO',
    path: FAQ_HOW_GLUE_ROUTE_PATH,
  },
];
const Case = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled(TitlePrimary)`
  @media screen and (max-width: 500px) {
    font-size: ${THEME_SIZE.FONT.BIG};
  }
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
  min-height: 140px;
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
  line-height: 1.5;
`;
