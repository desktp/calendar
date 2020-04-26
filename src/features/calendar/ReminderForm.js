import React, { useState } from 'react';
import moment from 'moment';
import get from 'lodash/get';

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

export default ({ date, reminder, handleSave, handleUpdate }) => {
  const [time, setTime] = useState(get(reminder, 'time', '12:00'));
  const [text, setText] = useState(get(reminder, 'text', ''));
  const [city, setCity] = useState(get(reminder, 'city', ''));
  const [color, setColor] = useState(get(reminder, 'color', COLORS[0]));

  const getMonth = (date) => moment(date, 'YYYY-MM-DD').format('MMM');

  const [month, setMonth] = useState(getMonth(get(reminder, 'date', date)));
  const [day, setDay] = useState(1);

  const editing = !!reminder;

  const setter = (func) => (event) => {
    func(event.target.value);
  }

  const getDaysOfMonth = (month) => moment(`${date.year()}-${month}`, 'YYYY-MMM').daysInMonth();

  const handleSaveReminder = () => {
    const payload = {
      id: editing ? reminder.id : moment().unix().toString(),
      time,
      color,
      text,
      date: editing ?
        moment(`${date.year()}-${month}-${day}`, 'YYYY-MMM-DD').format('YYYY-MM-DD')
        : date.format('YYYY-MM-DD'),
      city
    };

    editing ? 
      handleUpdate({ reminder: payload, originalDate: reminder.date }) :
      handleSave(payload);
  }

  const renderColors = () => COLORS.map(c => <MenuItem key={c} value={c}><div className={s.colorPreview} style={{ backgroundColor: c }} /></MenuItem>)

  const renderTime = () => {
    const returnElements = [];
    // 96 is the result of breaking 24 hours
    // into 15 minutes pieces
    for (let i = 0; i <= 95; i += 1) {
      const hour = Math.floor(i / 4);
      const minutes = (i % 4) * 15;
      const timeString = `${hour < 10 ? `0${hour}` : hour}:${minutes === 0 ? '00' : minutes}`

      returnElements.push(
        <MenuItem value={timeString} key={timeString}>
          {timeString}
        </MenuItem>
      );
    }

    return returnElements;
  }

  const renderMonths = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months.map(m => <MenuItem value={m} key={m}>{m}</MenuItem>)
  }

  const renderDays = () => {
    const daysInMonth = getDaysOfMonth(month);
    const returnElements = [];

    for (let i = 1; i <= daysInMonth; i += 1) {
      returnElements.push(<MenuItem value={i} key={i}>{i}</MenuItem>)
    }

    return returnElements;
  }

  return (
    <Card className={s.root}>
      <CardContent>
        <Typography className={s.title} gutterBottom>
          {editing ? 'Edit' : 'Add'} reminder
        </Typography>
        <div className={s.formActions}>
          {
            editing ?
              <div>
                <FormControl>
                  <InputLabel id='month'>Month</InputLabel>
                  <Select
                    labelId='month'
                    id='month'
                    value={month}
                    onChange={setter(setMonth)}
                  >
                    {renderMonths()}
                  </Select>
                </FormControl>
                <FormControl>
                  <InputLabel id='day'>Day</InputLabel>
                  <Select
                    labelId='day'
                    id='day'
                    value={day}
                    onChange={setter(setDay)}
                  >
                    {renderDays()}
                  </Select>
                </FormControl>
              </div>
              :
              <Typography className={s.pos} color='textSecondary'>
                {date.format('MMM do')}
              </Typography>
          }
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
        <Button size='small' color='primary' onClick={handleSaveReminder}>
          {editing ? 'Update' : 'Create'}
        </Button>
      </CardActions>
    </Card>
  )
}