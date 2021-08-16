import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { spacing } from '../../lib/theme';
import { SectionLayout } from 'src/lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';
import { IconButton } from '../../lib/element/button';
import { Spinner } from '../../lib/element/spinner';
import { ReactComponent as PlusIcon } from '../../asset/svg/plus-icon.svg';
import { ReactComponent as EditIcon } from '../../asset/svg/change-icon.svg';
import { ReactComponent as DeleteIcon } from '../../asset/svg/cancel-delete-icon.svg';
import { TextSecondary } from '../../lib/element/text';
import { TableList } from '../block-table-list';
import { sliderListUploadData, sliderItemRemove } from './slider-list.action';

export function SliderListComponent({ isPending, sliders, currentLang }) {
  const dispatch = useDispatch();

  const convertSlidersData = sliders.map((slider) => ({
    id: slider.id,
    name: slider.headingTextRu,
    image: slider.imageUrl || 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  }));

  return (
    <SectionLayout>
      <TitlePrimary tid="Слайдер" />
      {isPending ? (
        <Spinner />
      ) : (
        <TableList items={convertSlidersData}>
          {(id) => (
            <>
              <Button>
                <EditIcon />
              </Button>
              <Button onClick={() => dispatch(sliderItemRemove(currentLang.toLowerCase(), id))}>
                <DeleteIcon />
              </Button>
            </>
          )}
        </TableList>
      )}
      <AddSlide
        onClick={() => dispatch(sliderListUploadData(currentLang.toLowerCase()))}
        disabled={isPending}
      >
        <Button>
          <PlusIcon />
        </Button>
        <TextSecondary tid="Дополнить сборку" />
      </AddSlide>
    </SectionLayout>
  );
}
const AddSlide = styled.div`
  gap: ${spacing(3)};
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Button = styled(IconButton)`
  padding: 0;
`;
