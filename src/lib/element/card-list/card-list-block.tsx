import styled from 'styled-components';
import { SectionLayout } from '../layout';
import { TitlePrimary } from '../title';
import { LinkSecondary } from '../link';
import { BasicCardList } from './basic.card-list';
import { CardListTypeProps } from './card-list.type';

export function CardListBlock(props: CardListTypeProps) {
  const { title, path, items, ...otherProps } = props;

  if (!items || items.length === 0) return null;

  return (
    <SectionLayout>
      <HeaderCase>
        <TitlePrimary tid={title} />
        {path && <LinkSecondary tid="HOME.VIEW_ALL" path={path} />}
      </HeaderCase>
      <BasicCardList items={items.slice(0, 3)} {...otherProps} />
    </SectionLayout>
  );
}

const HeaderCase = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;
