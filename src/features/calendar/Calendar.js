import React, { useState } from 'react';
import moment from 'moment';

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
    const skipCells = now.date(1).day();
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

      if ((row === 0 && skip >= i) || day > now.daysInMonth())
        returnElements.push(<div className={s.cell} key={`cell_${day}`}></div>);
      else
        returnElements.push(<div className={s.cell} key={`cell_${day}`}>{day}</div>);
    }

    return returnElements;
  }

  return (
    <div>
      <button onClick={previousMonth}>previous</button>
      <h1>{now.format('MMMM (YYYY)')}</h1>
      <button onClick={nextMonth}>next</button>
    
      <div className={s.tableRoot}>
        <div className={s.row}>
          <div className={s.cell}>Sunday</div>
          <div className={s.cell}>Monday</div>
          <div className={s.cell}>Tuesday</div>
          <div className={s.cell}>Wednesday</div>
          <div className={s.cell}>Thursday</div>
          <div className={s.cell}>Friday</div>
          <div className={s.cell}>Saturday</div>
        </div>
        <div className={s.body}>
          {renderTableBody()}
        </div>
      </div>
    </div>
  )
}