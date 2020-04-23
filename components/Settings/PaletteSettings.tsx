import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, GridList, GridListTile } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { colorKey, paletteTypeKey } from '../../src/constants';
import { backgroundOptions, colorOptions } from '../../src/theme';
import { SettingContentTitle } from '../common';

const ColorItem = styled(Box)`
  width: 100%;
  height: 100%;
  flex-grow: 1;
`;

const ColorContainer = styled(Box)`
  display: flex;
  flex-direction: row;
`;

const PaletteGridList = styled(GridList)`
  justify-content: flex-start;
  overflow-y: visible;
  margin-top: 4px !important;
`;

export interface BackgroundPaletteSettingsProps {
  paletteType: string;
  setPaletteType: (type: string) => any;
}
const BackgroundPaletteSettings: React.FC<BackgroundPaletteSettingsProps> = ({
  paletteType,
  setPaletteType
}: BackgroundPaletteSettingsProps) => {
  const theme = useTheme();
  return (
    <>
      <SettingContentTitle title="Background color" />
      <PaletteGridList cellHeight={theme.spacing(96 / 8)} spacing={4} cols={4}>
        {Object.keys(backgroundOptions).map((key, i) => (
          <GridListTile
            key={key}
            onClick={() => {
              setPaletteType(key);
            }}
            style={{ cursor: 'pointer' }}
          >
            <ColorItem bgcolor={backgroundOptions[key].main} />
            {paletteType === key ? (
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{
                  fontSize: theme.spacing(36 / 8),
                  color: theme.palette.text.disabled,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  margin: 'auto'
                }}
              />
            ) : null}
          </GridListTile>
        ))}
      </PaletteGridList>
    </>
  );
};

export interface ThemePaletteSettingsProps {
  colorOptionId: number;
  setColorOptionId: (optionid: number) => any;
}

const ThemePaletteSettings: React.FC<ThemePaletteSettingsProps> = ({
  colorOptionId,
  setColorOptionId
}: ThemePaletteSettingsProps) => {
  const theme = useTheme();
  return (
    <>
      <SettingContentTitle title="Brand color" />
      <PaletteGridList cellHeight={theme.spacing(96 / 8)} spacing={4} cols={4}>
        {colorOptions.map((color, i) => (
          <GridListTile
            key={color}
            onClick={() => {
              setColorOptionId(i);
            }}
            style={{ cursor: 'pointer' }}
          >
            <ColorItem bgcolor={color} />
            {colorOptionId === i ? (
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{
                  fontSize: theme.spacing(36 / 8),
                  color: theme.palette.text.disabled,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  margin: 'auto'
                }}
              />
            ) : null}
          </GridListTile>
        ))}
      </PaletteGridList>
    </>
  );
};

export { ThemePaletteSettings };
export { BackgroundPaletteSettings };
