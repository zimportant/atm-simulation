import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PanelType, setPanelType, showToast } from '../../redux/actions';
import { RootState } from '../../redux/reducers';
import { ServicesApi } from '../../src/api';
import MappedIcon from '../../src/faIconMapper';
import { configurationIdentifier } from '../../src/constants';
import {
  ControlContentContainer,
  ControlItemContainer,
  ControlItemListContainer,
  RectBtnContainer
} from '../common';
import { FACircularIconSmall } from '../FACircularIcon';
import DashboardItem, { DashboardItemProps } from './DashboardItem';

export interface SettingsPanelContentProps {
  title: string;
}

interface SettingsPanelType {
  label: string;
  value: PanelType;
  icon: string;
  description: string;
}

const panelItems: Array<SettingsPanelType> = [
  {
    label: 'Master',
    value: 'master',
    icon: 'master',
    description: 'Master Panel allow the user to select any Group'
  },
  {
    label: 'Detail',
    value: 'detail',
    icon: 'detail',
    description: 'Detail Panel will only display one Group'
  }
];

const SettingsPanelContent: React.FC<SettingsPanelContentProps> = ({
  title
}: SettingsPanelContentProps) => {
  const theme = useTheme();
  const [dialogOpen, setDialogOpen] = useState(false);
  const { panelType } = useSelector((state: RootState) => state.config);
  const dispatch = useDispatch();

  const dashboardItems = panelItems.map(
    (item: SettingsPanelType, id: number): DashboardItemProps => ({
      name: item.label,
      prompt1: 'Description',
      description1: item.description,
      icon: (
        <FACircularIconSmall
          icon={MappedIcon[item.icon]}
          margin=""
          color={
            item.value === panelType ? theme.palette.secondary.main : theme.palette.text.disabled
          }
        />
      )
    })
  );

  return (
    <ControlContentContainer>
      <ControlItemContainer
        fontSize="subtitle1.fontSize"
        fontWeight="fontWeightMedium"
        component="h6"
        color={theme.palette.text.secondary}
      >
        <Box
          component="span"
          color={theme.palette.text.secondary}
          style={{ textTransform: 'uppercase', justifyContent: 'flex-start' }}
          onClick={() => setDialogOpen(true)}
        >
          <FontAwesomeIcon icon={faPlusSquare} color={theme.palette.secondary.main} size="lg" />
          <Box component="span" style={{ marginLeft: '12px' }}>
            Add new Dashboard
          </Box>
        </Box>

        <RectBtnContainer
          bgcolor="secondary.main"
          onClick={() => {
            new ServicesApi()
              .updateConfiguration(configurationIdentifier, {
                panelTypeKey: panelType
              })
              .then(res => {
                dispatch(showToast('success', 'Successfully save the configuration'));
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
      <ControlItemListContainer>
        {dashboardItems.map(
          ({ name, prompt1, description1, icon }: DashboardItemProps, id: number) => (
            <>
              <Box
                key={name}
                onClick={() => {
                  dispatch(setPanelType(panelItems[id].value));
                }}
              >
                <DashboardItem
                  name={name}
                  prompt1={prompt1}
                  description1={description1}
                  icon={icon}
                />
              </Box>
              <br />
            </>
          )
        )}
      </ControlItemListContainer>
    </ControlContentContainer>
  );
};
export default SettingsPanelContent;
