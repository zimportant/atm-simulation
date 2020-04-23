import { Box } from '@material-ui/core';
import { useTheme, withTheme } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Router from 'next/router';
import { RootState } from '../../redux/reducers';
import { showToast } from '../../redux/actions/toastActions';
import { setTheme } from '../../redux/actions/themeActions';
import { ServicesApi } from '../../src/api';
import { ControlContentContainer, ControlItemContainer, RectBtnContainer } from '../common';
import { BackgroundPaletteSettings, ThemePaletteSettings } from './PaletteSettings';
import { paletteTypeKey, colorKey, configurationIdentifier } from '../../src/constants';

export interface SettingsPaletteContentProps {
  title: string;
}

const SettingsInnerContent = withTheme(styled(Box)`
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.spacing(46 / 8)}px 0 0 0;
`);

const Space = withTheme(styled(Box)`
  margin-top: ${({ theme }) => theme.spacing(32 / 8)}px;
`);

const SettingsPaletteContent: React.FC<SettingsPaletteContentProps> = ({
  title
}: SettingsPaletteContentProps) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { colorId, paletteType } = useSelector((state: RootState) => state.themeConfig);
  const [colorOption, setColorOptionId] = useState(colorId);
  const [paletteTypeOption, setPaletteType] = useState(paletteType);
  return (
    <ControlContentContainer>
      <ControlItemContainer
        fontSize="subtitle1.fontSize"
        fontWeight="fontWeightMedium"
        component="h6"
        color={theme.palette.text.secondary}
      >
        <Box>{title}</Box>
        <RectBtnContainer
          bgcolor="secondary.main"
          onClick={() => {
            new ServicesApi()
              .updateConfiguration(configurationIdentifier, {
                paletteTypeKey: paletteTypeOption,
                colorKey: colorOption
              })
              .then(res => {
                dispatch(setTheme(paletteTypeOption, colorOption));
                dispatch(showToast('success', 'Successfully save the configuration'));
                // Router.push('/');
              })
              .catch(err => {
                dispatch(showToast('error', err));
              });
          }}
        >
          <Box
            component="span"
            style={{ display: 'inline-block' }}
            color={theme.palette.secondary.contrastText}
          >
            Save
          </Box>
        </RectBtnContainer>
      </ControlItemContainer>
      <SettingsInnerContent>
        <BackgroundPaletteSettings
          paletteType={paletteTypeOption}
          setPaletteType={setPaletteType}
        />
        <Space />
        <ThemePaletteSettings colorOptionId={colorOption} setColorOptionId={setColorOptionId} />
      </SettingsInnerContent>
    </ControlContentContainer>
  );
};
export default SettingsPaletteContent;
