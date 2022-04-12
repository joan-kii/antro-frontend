// Get a random number
const randomNumber = (maxNumber) => {
  return Math.floor(Math.random() * maxNumber) + 1;
};

// Change picture URL
const changePictureId = (url) => {
  const newUrl = url.slice(0, -2) + randomNumber(70);
  return newUrl;
};

// Format date

const addZero = (number) => {
  if (number < 10) number = '0' + number;
  return number;
};

const getFormattedDate = (dateToFormat) => {
  const date = new Date(dateToFormat);
  const formattedDate = date.getDate()  + "-" + 
    (date.getMonth() + 1) + "-" + date.getFullYear() + " " +
    addZero(date.getHours()) + ":" + addZero(date.getMinutes());
  return formattedDate;
};

export { randomNumber, changePictureId, getFormattedDate };
