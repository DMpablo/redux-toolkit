const padTo2Digits = (num) => {
  return num.toString().padStart(2, "0");
};

const formatDate = (date) => {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join("/");
};
const x = formatDate(new Date())

const date = () => {
   return x
};

export default date;