import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { scrollTo } from 'src/main/navigation';
import { THEME_COLOR } from 'src/lib/theme';
import { IconButton } from 'src/lib/element/button';
import { ReactComponent as ArrowUp } from 'src/asset/svg/arrow-up.svg';

export function ScrollToTopButton() {
  const [view, setView] = useState(false);

  const tooggleView = () => {
    if (window.pageYOffset > 300) setView(true);
    else setView(false);
  };

  useEffect(() => {
    document.addEventListener('scroll', tooggleView);
    return () => document.removeEventListener('scroll', tooggleView);
  }, []);

  const scrollToTop = () => scrollTo();

  if (!view) return null;
  return (
    <Button onClick={scrollToTop}>
      <ArrowUp />
    </Button>
  );
}
const Button = styled(IconButton)`
  background: ${THEME_COLOR.SECONDARY_DARK};
  z-index: 999;
  position: fixed;
  right: 30px;
  bottom: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  @media screen and (max-width: 720px) {
    right: 10px;
    bottom: 120px;
  }
`;
