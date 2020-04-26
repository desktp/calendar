import React, { useState } from 'react';
import get from 'lodash/get';

import Popover from '@material-ui/core/Popover';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

import { saveReminder, updateReminder, deleteReminder, deleteAllReminders } from '../calendarSlice';
import { useSelector, useDispatch } from 'react-redux';

import ReminderForm from '../ReminderForm';
import Reminder from './Reminder';

import s from '../Calendar.module.css';
import d from './Day.module.css';

export default ({ date, isWeekend }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [editingReminder, setEditingReminder] = useState();
  const [dialogOpen, setDialogOpen] = useState(false);

  const dispatch = useDispatch();
  const reminders = useSelector((state) => {
    const formattedDate = date.format('YYYY-MM-DD');
    const [year, month, day] = formattedDate.split('-');
    const reminders = get(state, `calendar.reminders[${year}][${month}][${day}]`, []);

    return [...reminders].sort((a, b) => a.time.localeCompare(b.time));
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setEditingReminder();
    setAnchorEl(null);
  };

  const handleDialogOpen = (e) => {
    e.stopPropagation();
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleSetEditing = (reminder) => setEditingReminder(reminder);

  const handleSave = (reminder) => {
    dispatch(saveReminder(reminder));

    handleClose();
  }

  const handleUpdate = (payload) => {
    dispatch(updateReminder(payload));

    handleClose();
  }

  const handleDelete = (payload) => {
    dispatch(deleteReminder(payload));

    handleClose();
  }

  const handleDeleteAll = () => {
    dispatch(deleteAllReminders(date.format('YYYY-MM-DD')));

    handleDialogClose();
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <div className={`${s.cell} ${isWeekend ? s.weekendCell : ''}`} onClick={handleClick}>
        <div className={d.dayHeader}>
          <span>{date.format('DD')}</span>
          {reminders.length ?
            <Tooltip title='Clear day'>
              <IconButton aria-label='delete' color='secondary' size='small' onClick={handleDialogOpen}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
            : <></>
          }
        </div>
        <div className={d.remindersContainer}>
          {reminders.map(r => <Reminder key={r.id} reminder={r} handleSetEditing={handleSetEditing} />)}
        </div>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <ReminderForm
          date={date}
          reminder={editingReminder}
          handleSave={handleSave}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      </Popover>
      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>Clear day</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            This will delete ALL reminders for this day!
          </DialogContentText>
          <DialogContentText id='alert-dialog-description'>
            Are you sure?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleDeleteAll} color='secondary'>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}