import { Box } from '@material-ui/core';
import { useTheme, withTheme } from '@material-ui/core/styles';
import React from 'react';
import styled from 'styled-components';
import ScrollContainer from 'react-indiana-drag-scroll';
import { HeaderTextLine } from './common';
import ControlItem, { ControlItemDescription, ControlItemImage } from './ControlItem';

export interface ControlComponentProps {
  categories: Array<ControlItemDescription>;
  selectedId: number;
  titleDescription: string;
  setSelected: (id: number) => any;
}

const ControlComponentContainer = styled(Box)`
  flex-grow: 1;
  width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
`;

const ControlItemContainer = withTheme(styled(Box)`
  margin: 0 0 ${({ theme }) => theme.spacing(48 / 8)}px 0;
`);

const ControlItemCctvContainer = withTheme(styled(Box)`
  padding: 0 0 ${({ theme }) => theme.spacing(24 / 8)}px 0;
`);

const WrapperControlItemContent = withTheme(styled(Box)`
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  overflow-x: visible;
  max-height: 100%;
  margin-bottom: ${({ theme }) => theme.spacing(24 / 8)}px;
`);

const ControlItemContent = ({ children }: any) => (
  <WrapperControlItemContent>
    <ScrollContainer horizontal={false} style={{ maxHeight: '100%' }}>
      {children}
    </ScrollContainer>
  </WrapperControlItemContent>
);

const ControlComponent: React.FC<ControlComponentProps> = ({
  categories,
  selectedId,
  titleDescription,
  setSelected
}: ControlComponentProps) => {
  const theme = useTheme();
  return (
    <ControlComponentContainer>
      <HeaderTextLine
        lineColor={theme.palette.secondary.dark}
        textColor={theme.palette.text.primary}
        description={titleDescription}
      />
      <ControlItemContent>
        {categories.map(({ title, numberHighlight, description }, id) => (
          <ControlItemContainer key={title} onClick={() => setSelected(id)}>
            <ControlItem
              title={title}
              numberHighlight={numberHighlight}
              description={description}
              isSelected={id === selectedId}
            />
          </ControlItemContainer>
        ))}
      </ControlItemContent>
    </ControlComponentContainer>
  );
};

const ControlComponentAppliances: React.FC<ControlComponentProps> = ({
  categories,
  selectedId,
  titleDescription,
  setSelected
}: ControlComponentProps) => {
  return (
    <ControlComponent
      categories={categories.map(cat => ({
        ...cat,
        description: `appliance${(cat.numberHighlight ?? 0) > 1 ? 's' : ''} in operation`
      }))}
      selectedId={selectedId}
      setSelected={setSelected}
      titleDescription={titleDescription}
    />
  );
};
const ControlComponentCctv: React.FC<ControlComponentProps> = ({
  categories,
  selectedId,
  titleDescription,
  setSelected
}: ControlComponentProps) => {
  const theme = useTheme();
  return (
    <ControlComponentContainer>
      <HeaderTextLine
        lineColor={theme.palette.secondary.dark}
        textColor={theme.palette.text.primary}
        description={titleDescription}
      />
      <ControlItemContent>
        {categories.map(({ title, imageUrl }, id) => (
          <ControlItemCctvContainer key={title} onClick={() => setSelected(id)}>
            <ControlItemImage title={title} imageUrl={imageUrl} isSelected={id === selectedId} />
          </ControlItemCctvContainer>
        ))}
      </ControlItemContent>
    </ControlComponentContainer>
  );
};

export default ControlComponent;
export { ControlComponentAppliances, ControlComponentCctv };
