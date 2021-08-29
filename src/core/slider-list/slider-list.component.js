import styled from 'styled-components';
import { spacing } from '../../lib/theme';
import { TitlePrimary } from '../../lib/element/title';
import { ButtonBasic, IconButton } from '../../lib/element/button';
import { Spinner } from '../../lib/element/spinner';
import { ReactComponent as PlusIcon } from '../../asset/svg/plus-icon.svg';
import { TextSecondary } from '../../lib/element/text';
import { LoaderPrimary } from '../..//lib/element/loader';
import { SliderList } from './frames';

export function SliderListComponent(props) {
  const { pageLoading, isPending, slidersItems, editSlide, addSlide, removeSlide } = props;
  return (
    <>
      {pageLoading && <LoaderPrimary />}
      <Container>
        <TitlePrimary tid="Слайдер" />
        {isPending ? (
          <Spinner />
        ) : (
          <SliderList
            slidersItems={slidersItems}
            removeSlide={removeSlide}
            editSlide={editSlide}
          />
        )}
        {slidersItems?.map((slider) => slider.id).includes('new') ? (
          <></>
        ) : (
          <AddSlide onClick={addSlide} disabled={isPending}>
            <Button>
              <PlusIcon />
            </Button>
            <TextSecondary tid="Дополнить сборку" />
          </AddSlide>
        )}
      </Container>
    </>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
`;
const AddSlide = styled(ButtonBasic)`
  background-color: transparent;
  width: fit-content;
  padding: 0;
  gap: ${spacing(3)};
`;
const Button = styled(IconButton)`
  padding: 0;
`;
