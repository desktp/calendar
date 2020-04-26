import React from 'react';

import ButtonBase from '@material-ui/core/ButtonBase';
import Tooltip from '@material-ui/core/Tooltip';

import s from './Reminder.module.css';

export default ({ reminder, handleSetEditing }) => {
  const handleClick = () => handleSetEditing(reminder);

  return (
    <Tooltip title='Edit reminder'>
      <ButtonBase
        component='div'
        style={{
          backgroundColor: reminder.color
        }}
        onClick={handleClick}
        classes={{
          root: s.reminderRoot
        }}
        >
        <span className={s.reminderTime}>{reminder.time}</span>
        <span className={s.reminderText}>{reminder.text}</span>
      </ButtonBase>
    </Tooltip>
  )
}
