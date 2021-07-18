import { SliderItemComponent } from './frame/slider-item';

export function SliderComponent(props) {
  const {
    items,
    slide,
    prevSlide,
    nextSlide,
    isPending,
    isError,
    isSuccess,
    errorMessage,
  } = props;

  return (
    <SliderItemComponent
      items={items}
      slide={slide}
      prevSlide={prevSlide}
      nextSlide={nextSlide}
      isPending={isPending}
      isError={isError}
      isSuccess={isSuccess}
      errorMessage={errorMessage}
    />
  );
}
