import React, { useState } from 'react';
import get from 'lodash/get';

import Popover from '@material-ui/core/Popover';

import { saveReminder, updateReminder } from '../calendarSlice';
import { useSelector, useDispatch } from 'react-redux';

import ReminderForm from '../ReminderForm';
import Reminder from './Reminder';

import s from '../Calendar.module.css';

export default ({ date }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [editingReminder, setEditingReminder] = useState();

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

  const handleSetEditing = (reminder) => setEditingReminder(reminder);

  const handleSave = (reminder) => {
    dispatch(saveReminder(reminder));

    handleClose();
  }

  const handleUpdate = (payload) => {
    dispatch(updateReminder(payload));

    handleClose();
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <div className={s.cell} onClick={handleClick}>
        <span>{date.format('DD')}</span>
        {reminders.map(r => <Reminder key={r.id} reminder={r} handleSetEditing={handleSetEditing} />)}
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
        />
      </Popover>
    </>
  )
}