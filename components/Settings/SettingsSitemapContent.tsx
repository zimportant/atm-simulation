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
import { setSitemapData, setSitemaps } from '../../redux/actions/sitemapActions';
import { RootState } from '../../redux/reducers';
import { WidgetDTO, ServicesApi, SitemapsApi, SitemapDTO } from '../../src/api';
import { showToast } from '../../redux/actions/toastActions';
import { configurationIdentifier } from '../../src/constants';

import MappedIcon from '../../src/faIconMapper';
import {
  ControlContentContainer,
  ControlItemContainer,
  ControlItemListContainer,
  RectBtnContainer
} from '../common';
import { FACircularIconSmall } from '../FACircularIcon';
import DashboardItem, { DashboardItemProps } from './DashboardItem';

export interface SettingsSitemapContentProps {
  title: string;
}

const SettingsSitemapContent: React.FC<SettingsSitemapContentProps> = ({
  title
}: SettingsSitemapContentProps) => {
  const theme = useTheme();
  const [dialogOpen, setDialogOpen] = useState(false);
  const { allSitemaps, allSitemapsSelected, sitemap, sitemapSelected } = useSelector(
    (state: RootState) => state.sitemap
  );
  console.log(allSitemaps);
  const dispatch = useDispatch();
  const [newDashboard, setNewDashboard] = useState('');

  const dashboardItems = allSitemaps.map(
    (s: SitemapDTO, id: number): DashboardItemProps => ({
      name: s.label ?? '--',
      prompt1: 'Label',
      description1: s.name ?? '--',
      icon: (
        <FACircularIconSmall
          icon={MappedIcon.none}
          margin=""
          color={
            id === allSitemapsSelected ? theme.palette.secondary.main : theme.palette.text.disabled
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
          onClick={async () => {
            try {
              const update = await new ServicesApi().updateConfiguration(configurationIdentifier, {
                allSitemapsSelectedKey: allSitemapsSelected,
                sitemapSelectedKey: 0
              });
              dispatch(showToast('success', 'Successfully save the configuration'));
            } catch (err) {
              dispatch(showToast('error', err));
            }
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
                onClick={async () => {
                  dispatch(setSitemaps(undefined, id));

                  const sitemapData = await (
                    await new SitemapsApi().getSitemapData(allSitemaps[id]?.name ?? '')
                  ).json();

                  dispatch(setSitemapData(sitemapData, 0));
                  dispatch(showToast('success', 'Successfully load the sitemap data'));
                }}
              >
                <DashboardItem
                  name={name}
                  prompt1={prompt1}
                  description1={description1}
                  prompt2={prompt2}
                  description2={description2}
                  icon={icon}
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
export default SettingsSitemapContent;
