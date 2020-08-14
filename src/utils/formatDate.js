export default (date) => {
  const nowMonth = date.getMonth() + 1;
  return (
    date.getFullYear() +
    "-" +
    (nowMonth < 10 ? "0" : "") +
    nowMonth +
    "-" +
    date.getDate()
  );
};
