import "./Images.css";
const Images = ({ src, num }) => {
  return (
    <>
      <div>
        <p>현재 이미지 {num}</p>
        <img src={src} />
      </div>
    </>
  );
};

export default Images;
