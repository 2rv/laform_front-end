import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { TitlePrimary } from 'src/lib/element/title';
import { ButtonBasic, IconButton } from 'src/lib/element/button';
import { Spinner } from 'src/lib/element/spinner';
import { ReactComponent as PlusIcon } from 'src/asset/svg/plus.svg';
import { TextSecondary } from 'src/lib/element/text';
import { LoaderPrimary } from 'src//lib/element/loader';
import { SliderList } from './frames';

export function SliderListComponent(props) {
  const {
    pageLoading,
    isPending,
    slidersItems,
    editSlide,
    addSlide,
    removeSlide,
  } = props;
  return (
    <>
      {pageLoading && <LoaderPrimary />}
      <Container>
        <TitlePrimary tid="SLIDER.LIST.TITLE" />
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
            <TextSecondary tid="SLIDER.LIST.ADD_ASSEMLBY" />
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
const Button = styled.div`
  background-color: ${THEME_COLOR.GRAY};
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
