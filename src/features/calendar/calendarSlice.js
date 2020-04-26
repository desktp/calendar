import { createSlice } from '@reduxjs/toolkit';
import setWith from 'lodash/setWith';
import get from 'lodash/get';

/**
 * reminders will have an object:key structure to access
 * reminders through year, month and day
 * ex:
 * {
 *   2020: {
 *     4: {
 *       21: [
 *         {
 *           text: 'this is a reminder for apr 21st',
 *           date: '20200421'
 *         }
 *       ],
 *       01: [
 *         {
 *           text: 'this is a reminder for apr 1st',
 *           date: '20200401'
 *         }
 *       ]
 *     }
 *   },
 *   1998: {
 *     7: {
 *       5: [
 *         text: 'this is a reminder for july 7th, 1998',
 *         date: '19980705'
 *       ]
 *     }
 *   }
 * }
 */

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    reminders: {}
  },
  reducers: {
    saveReminder: (state, { payload }) => {
      const [year, month, day] = payload.date.split('-');

      const remindersOfDay = get(state, `reminders[${year}][${month}][${day}]`, []);
      remindersOfDay.push(payload);

      // Just "mutating" the object sets the state
      setWith(state, `reminders[${year}][${month}][${day}]`, remindersOfDay, Object);
    },
  },
});

export const { saveReminder } = calendarSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = state => state.counter.value;

export default calendarSlice.reducer;
