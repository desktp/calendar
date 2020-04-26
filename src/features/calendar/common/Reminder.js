import React from 'react';

import ButtonBase from '@material-ui/core/ButtonBase';

// import s from './Reminder.module.css';

export default ({ reminder, handleSetEditing }) => {
  const handleClick = () => handleSetEditing(reminder);

  return (
    <ButtonBase
      component='div'
      style={{
        backgroundColor: reminder.color,
        width: '100%',
        margin: '5px 0'
      }}
      onClick={handleClick}
    >
      {reminder.time}: {reminder.text}
    </ButtonBase>
  )
}
