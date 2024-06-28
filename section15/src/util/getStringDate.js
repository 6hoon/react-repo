// 날짜를 문자열로 바꾸는 함수  yyyy-mm-dd
export const getStringDate = (createDate) => {
  let year = createDate.getFullYear();
  let month = createDate.getMonth() + 1;
  let date = createDate.getDate();
  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }
  return `${year}-${month}-${date}`;
};
