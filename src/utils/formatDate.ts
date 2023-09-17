export default function formatDate(inputDate: string) {
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];

  const dateObj = new Date(inputDate);
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();
  const month = months[dateObj.getMonth()];
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();

  const formattedDate =
    `${day} ${month} ${year} в ${hours}:${minutes}`.toString();

  return formattedDate;
}
