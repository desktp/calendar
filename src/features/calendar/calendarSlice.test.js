import calendar from './calendarSlice'

const INITIAL_STATE = { reminders: {} };

describe('calendar reducer', () => {
  it('should handle initial state', () => {
    expect(calendar(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should add reminder', () => {
    const reminder = {
      id: '1587927818',
      time: '12:00',
      color: '#039BE5',
      text: 'tea with the queen',
      date: '2020-04-12',
      city: 'London, United Kingdom'
    };
    
    const expected = {
      reminders: {
        '2020': {
          '04': {
            '12': [{ ...reminder }]
          }
        }
      }
    }

    expect(calendar(INITIAL_STATE, { type: 'calendar/saveReminder', payload: reminder })).toEqual(expected);
  });

  it('should trim reminder with long text', () => {
    const reminder = {
      id: '1587927818',
      time: '12:00',
      color: '#039BE5',
      text: '123456789012345678901234567890text',
      date: '2020-04-12',
      city: 'London, United Kingdom'
    };
    
    const expected = {
      reminders: {
        '2020': {
          '04': {
            '12': [{ ...reminder, text: '123456789012345678901234567890', }]
          }
        }
      }
    }

    expect(calendar(INITIAL_STATE, { type: 'calendar/saveReminder', payload: reminder })).toEqual(expected);
  });

  it('should remove reminder', () => {
    const reminder = {
      id: '1587927818',
      time: '12:00',
      color: '#039BE5',
      text: 'tea with the queen',
      date: '2020-04-12',
      city: 'London, United Kingdom'
    };
    
    const initial = {
      reminders: {
        '2020': {
          '04': {
            '12': [{ ...reminder }]
          }
        }
      }
    }

    const expected = {
      reminders: {
        '2020': {
          '04': {
            '12': []
          }
        }
      }
    }

    expect(calendar(initial, { type: 'calendar/deleteReminder', payload: reminder })).toEqual(expected);
  });

  it('should remove all reminders', () => {
    const reminder = {
      id: '1587927818',
      time: '12:00',
      color: '#039BE5',
      text: 'tea with the queen',
      date: '2020-04-12',
      city: 'London, United Kingdom'
    };
    
    const initial = {
      reminders: {
        '2020': {
          '04': {
            '12': [{ ...reminder }, { ...reminder, id: '1' }, { ...reminder, id: '2' }]
          }
        }
      }
    }

    const expected = {
      reminders: {
        '2020': {
          '04': {}
        }
      }
    }

    expect(calendar(initial, { type: 'calendar/deleteAllReminders', payload: '2020-04-12' })).toEqual(expected);
  })
});