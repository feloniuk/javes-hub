import moment from 'moment-timezone';

export default function formatDate(dealDate) {
  const cestDate = moment(dealDate).tz('Europe/Berlin');
  const isDST = cestDate.isDST();
  const timezoneAbbr = isDST ? 'CEST' : 'CET';

  return cestDate.format(`MMM. DD, YYYY HH:mm [${timezoneAbbr}]`);
}