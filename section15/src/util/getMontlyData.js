// 월별 등록 게시글 filter
export const getMonthlyData = (data, pivotDate) => {
  const start = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1
  ).getTime();
  const end = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    1
  ).getTime();
  return data.filter((e) => {
    return start <= e.createDate && e.createDate < end;
  });
};
