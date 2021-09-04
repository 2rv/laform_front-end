import styled from 'styled-components';
import { SectionLayout } from '../layout';
import { TitlePrimary } from '../title';
import { LinkSecondary } from '../link';
import { BasicCardList } from './basic.card-list';

export function CardListBlock(props) {
  const { title, path, cardType, items } = props;
  return (
    <SectionLayout>
      <Header>
        <TitlePrimary tid={title} />
        {path && <LinkSecondary tid="HOME.VIEW_ALL" path={path} />}
      </Header>
      <BasicCardList items={items.slice(0, 3)} type={cardType} />
    </SectionLayout>
  );
}

const Header = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;
