import React from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import s from './Calendar.module.css';

const COLORS = ['#039BE5', '#3F51B5', '#33B679', '#0B8043', '#F4511E', '#F6BF26'];

export default ({ date, day }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [time, setTime] = React.useState('120');
  const [text, setText] = React.useState('');
  const [city, setCity] = React.useState('');
  const [color, setColor] = React.useState(COLORS[0]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const setter = (func) => (event) => {
    func(event.target.value);
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSave = () => {
    const reminder = {
      time,
      color,
      text,
      date,
      city
    };

    //save(reminder);

    handleClose();
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const renderTime = () => {
    const returnElements = [];
    // 96 is the result of breaking 24 hours
    // into 15 minutes pieces
    for (let i = 0; i <= 95; i += 1) {
      const hour = Math.floor(i / 4);
      const minutes = (i % 4) * 15;
      const timeString = `${hour < 10 ? `0${hour}` : hour}:${minutes === 0 ? '00' : minutes}`

      returnElements.push(
        <MenuItem value={`${hour}${minutes}`} key={timeString}>
          {timeString}
        </MenuItem>
      );
    }

    return returnElements;
  }

  const renderColors = () => COLORS.map(c => <MenuItem key={c} value={c}><div className={s.colorPreview} style={{ backgroundColor: c }} /></MenuItem>)

  return (
    <>
      <div className={s.cell} onClick={handleClick}>
        <p>{date.format('DD')}</p>
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
        <Card className={s.root}>
          <CardContent>
            <Typography className={s.title} gutterBottom>
              Add reminder
            </Typography>
            <Typography className={s.pos} color='textSecondary'>
              {date.format('MMM do')}
            </Typography>
            <div className={s.formActions}>
              <FormControl>
                <InputLabel id='time'>Time</InputLabel>
                <Select
                  labelId='time'
                  id='time'
                  value={time}
                  onChange={setter(setTime)}
                >
                  {renderTime()}
                </Select>
              </FormControl>
              <FormControl>
                <TextField id='reminderText' label='Text' value={text} onChange={setter(setText)} />
              </FormControl>
              <FormControl>
                <TextField id='city' label='City' value={city} onChange={setter(setCity)} />
              </FormControl>
              <FormControl>
                <InputLabel id='color'>Color</InputLabel>
                <Select
                  labelId='color'
                  id='color'
                  value={color}
                  onChange={setter(setColor)}
                >
                  {renderColors()}
                </Select>
              </FormControl>
            </div>
          </CardContent>
          <CardActions>
            <Button size='small' color='primary' onClick={handleSave}>Save</Button>
          </CardActions>
        </Card>
      </Popover>
    </>
  )
}