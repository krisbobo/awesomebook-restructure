import { DateTime } from './luxon.js';

const dateTime = () => {
  const time = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  const date = document.querySelector('year');
  date.innerHTML = `${time}`;
};

export default dateTime;