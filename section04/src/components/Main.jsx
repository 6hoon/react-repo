const Main = () => {
  // 멤버변수
  const number = 10;
  const obj = { a: 1 };

  // 렌더링 (최상위 태그 <> 있어야함)
  return (
    <>
      <h1>Main2</h1>
      <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
      <h3>상수 = {10}</h3>
      <h3>number = {number}</h3>
      <h3>[5,6,7]={[5, 6, 7]}</h3>
      <h3>true = {true}</h3>
      <h3>undefined = {undefined}</h3>
      <h3>null = {null}</h3>
      <h3>obj.a = {obj.a}</h3>
    </>
  );
};

export default Main;
