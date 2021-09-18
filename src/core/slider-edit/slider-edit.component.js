import { SectionLayout } from '../../lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';
import { Spinner } from '../../lib/element/spinner';
import { LoaderPrimary } from '../../lib/element/loader';
import { SliderEditPreviewComponent, SliderEditFormComponent } from './frames';

export function SliderEditComponent(props) {
  const {
    pickImage,
    removeSlider,
    sliderImage,
    titleTextColorOptions,
    buttonColorOptions,
    buttonTextColorOptions,

    formikObject,

    isNewSlider,
    pageLoading,
    isPending,
    dataPending,
    formPending,
    formSuccess,
    formError,
    errorMessage,
    isImageUploadError,
  } = props;

  return (
    <>
      {pageLoading && <LoaderPrimary />}
      {!isNewSlider && isPending ? (
        <Spinner />
      ) : (
        <SectionLayout type="SMALL">
          <TitlePrimary tid="SLIDER.EDIT_SLIDER.TITLE" />
          <SectionLayout>
            <SliderEditPreviewComponent
              pickImage={pickImage}
              sliderImage={sliderImage}
              values={formikObject.values}
              titleTextColorOptions={titleTextColorOptions}
              buttonColorOptions={buttonColorOptions}
              buttonTextColorOptions={buttonTextColorOptions}
            />
            <SliderEditFormComponent
              titleTextColorOptions={titleTextColorOptions}
              buttonColorOptions={buttonColorOptions}
              buttonTextColorOptions={buttonTextColorOptions}
              removeSlider={removeSlider}
              isPending={isPending}
              formikObject={formikObject}
              dataPending={dataPending}
              formPending={formPending}
              formSuccess={formSuccess}
              formError={formError}
              errorMessage={errorMessage}
              isImageUploadError={isImageUploadError}
            />
          </SectionLayout>
        </SectionLayout>
      )}
    </>
  );
}
