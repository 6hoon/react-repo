import "./Footer.css";

const Footer = () => {
  // 멤버변수
  const user = {
    name: "홍길동",
    isLogin: true,
  };

  // if (user.isLogin !== true) {
  //   return (
  //     <>
  //       <div className="logout">{user.name} 로그아웃</div>
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <div style={{ backgroundColor: "red", border: "1px solid black" }}>
  //         {user.name} 로그인
  //       </div>
  //     </>
  //   );
  // }

  return (
    <>
      {user.isLogin === true ? (
        <div style={{ backgroundColor: "red", border: "1px solid black" }}>
          {user.name} 로그인
        </div>
      ) : (
        <div className="logout">{user.name} 로그아웃</div>
      )}
    </>
  );
};

export default Footer;
