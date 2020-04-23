import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, TextField } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useTheme } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { dashboardAddAction, dashboardRemoveAction } from '../../redux/actions/dashboardActions';
import { setSitemapData } from '../../redux/actions/sitemapActions';
import { RootState } from '../../redux/reducers';
import { WidgetDTO, ServicesApi } from '../../src/api';
import { showToast } from '../../redux/actions/toastActions';

import MappedIcon from '../../src/faIconMapper';
import {
  ControlContentContainer,
  ControlItemContainer,
  ControlItemListContainer,
  RectBtnContainer
} from '../common';
import { FACircularIconSmall } from '../FACircularIcon';
import DashboardItem, { DashboardItemProps } from './DashboardItem';
import { configurationIdentifier } from '../../src/constants';

export interface SettingsFloorContentProps {
  title: string;
}

const SettingsFloorContent: React.FC<SettingsFloorContentProps> = ({
  title
}: SettingsFloorContentProps) => {
  const theme = useTheme();
  const [dialogOpen, setDialogOpen] = useState(false);
  const { allSitemaps, allSitemapsSelected, sitemap, sitemapSelected } = useSelector(
    (state: RootState) => state.sitemap
  );
  const dispatch = useDispatch();
  const [newDashboard, setNewDashboard] = useState('');

  const dashboardItems =
    sitemap?.homepage?.widgets?.map(
      (w: WidgetDTO, id: number): DashboardItemProps => ({
        name: w.label ?? '--',
        prompt1: 'Total items',
        description1: String(w?.widgets?.length ?? 0),
        prompt2: 'Label',
        description2: w.icon ?? '--',
        icon: (
          <FACircularIconSmall
            icon={MappedIcon[w.icon ?? 'none']}
            margin=""
            color={
              id === sitemapSelected ? theme.palette.secondary.main : theme.palette.text.disabled
            }
          />
        )
      })
    ) ?? [];

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
                sitemapSelectedKey: sitemapSelected
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
          (
            { name, prompt1, prompt2, description1, description2, icon }: DashboardItemProps,
            id: number
          ) => (
            <>
              <Box
                key={name}
                onClick={() => {
                  dispatch(setSitemapData(undefined, id));
                }}
              >
                <DashboardItem
                  name={name}
                  prompt1={prompt1}
                  description1={description1}
                  prompt2={prompt2}
                  description2={description2}
                  icon={icon}
                  handleRemove={() => dispatch(dashboardRemoveAction(id))}
                />
              </Box>
              <br />
            </>
          )
        )}
      </ControlItemListContainer>

      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        aria-labelledby="form-dialog-title"
        fullWidth
      >
        <DialogTitle id="form-dialog-title">New Dashboard</DialogTitle>
        <DialogContent>
          <DialogContentText>Name of your new dashboard:</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="text"
            color="secondary"
            fullWidth
            onChange={e => setNewDashboard(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)} style={{ color: theme.palette.error.light }}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              setDialogOpen(false);
              dispatch(dashboardAddAction(newDashboard));
            }}
            color="secondary"
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </ControlContentContainer>
  );
};
export default SettingsFloorContent;
