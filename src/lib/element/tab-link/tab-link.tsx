import styled, { css } from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../theme';
import { ButtonBasic } from '../button';
import { TabLinkComponentProps } from './tab-link.type';
import { setLinkRedirect } from 'src/main/navigation';

export function TabLinkComponent(props: TabLinkComponentProps) {
  const { activePath, pathItems, disabled } = props;

  return (
    <Container>
      {pathItems.map((item, key) => (
        <Tab
          disabled={disabled}
          onClick={setLinkRedirect(item.path, item.pathConfig)}
          key={key}
          tid={item.name}
          isActive={activePath === item?.pathConfig?.params?.type}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  overflow: auto;
  width: 100%;
  gap: ${spacing(5)};
`;
const Tab = styled(ButtonBasic)<{ isActive: boolean }>`
  padding: ${spacing(2)} 0;
  min-width: max-content;
  width: fit-content;
  border-bottom: 2px solid transparent;
  background-color: transparent;
  border-radius: 0px;
  height: fit-content;
  ${(p) =>
    p.isActive &&
    css`
      font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
      border-color: ${THEME_COLOR.SECONDARY_DARK};
    `}
`;
