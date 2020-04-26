import React, { useState } from 'react';
import moment from 'moment';

import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';

import Day from './common/Day';

import s from './Calendar.module.css';

export default () => {
  const [now, setNow] = useState(moment());
  const [, setMonth] = useState(now.month());

  const previousMonth = () => {
    if (now.month() === 0) {
      setMonth(11);
      setNow(now.year(now.year() - 1).month(11))
    } else {
      const m = now.month() - 1;
      setMonth(m);
      setNow(now.month(m))
    }
  }

  const nextMonth = () => {
    if (now.month() === 11) {
      setMonth(0);
      setNow(now.year(now.year() + 1).month(0));
    } else {
      const m = now.month() + 1;
      setMonth(m);
      setNow(now.month(m))
    }
  }

  const renderTableBody = () => {
    const days = now.daysInMonth();
    // Gets day of the week of first day of the month
    const skipCells = moment(now).date(1).day();
    const returnElements = [];
    const rowsNecessary = Math.trunc((days + skipCells) / 7);

    for (let i = 0; i <= rowsNecessary; i += 1) {
      returnElements.push(
        <div className={s.row} key={`row_${i}`}>
          {renderDays(i, skipCells)}
        </div>
      )
    }

    return returnElements;
  }

  const renderDays = (row, skip = 0) => {
    const returnElements = [];

    for (let i = 1; i <= 7; i += 1) {
      const day = (i - skip) + (row * 7);
      const isWeekend = i === 1 || i === 7;
      if ((row === 0 && skip >= i) || day > now.daysInMonth())
        returnElements.push(<div className={`${s.cell} ${isWeekend ? s.weekendCell : ''}` } key={`cell_${day}`}></div>);
      else {
        returnElements.push(<Day key={`cell_${day}`} date={moment(now).date(day)} isWeekend={isWeekend} />);
      }
    }

    return returnElements;
  }

  return (
    <>
      <div className={s.calendarHeader}>
        <div>
          <Tooltip title='Previous month'>
            <IconButton aria-label='previous' onClick={previousMonth}>
              <ChevronLeft />
            </IconButton>
          </Tooltip>
          <Tooltip title='Next month'>
            <IconButton aria-label='next' onClick={nextMonth}>
              <ChevronRight />
            </IconButton>
          </Tooltip>
        </div>
        <Typography variant='h4'>{now.format('MMMM (YYYY)')}</Typography>
      </div>
    
      <div className={s.tableRoot}>
        <div className={s.row}>
          <div className={s.headerCell}>Sunday</div>
          <div className={s.headerCell}>Monday</div>
          <div className={s.headerCell}>Tuesday</div>
          <div className={s.headerCell}>Wednesday</div>
          <div className={s.headerCell}>Thursday</div>
          <div className={s.headerCell}>Friday</div>
          <div className={s.headerCell}>Saturday</div>
        </div>
        <div className={s.body}>
          {renderTableBody()}
        </div>
      </div>
    </>
  )
}