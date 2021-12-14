import styled from 'styled-components';
import { SectionLayout } from '../layout';
import { TitlePrimary } from '../title';
import { LinkSecondary } from '../link';
import { BasicCardList } from './basic.card-list';
import { CardListTypeProps } from './card-list.type';

export function CardListBlock(props: CardListTypeProps) {
  const {
    title,
    path,
    items,
    isSliced = true,
    isLoading,
    ...otherProps
  } = props;

  if (!isLoading && (!items || !Boolean(items.length))) return null;

  return (
    <SectionLayout>
      <HeaderCase>
        {title && <TitlePrimary tid={title} />}
        {path && <LinkSecondary tid="HOME.VIEW_ALL" path={path} />}
      </HeaderCase>
      <BasicCardList
        items={isSliced ? items.slice(0, 3) : items}
        isLoading={isLoading}
        {...otherProps}
      />
    </SectionLayout>
  );
}

const HeaderCase = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;
