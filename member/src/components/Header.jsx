import "./Header.css";
const Header = () => {
  return (
    <div className="Header">
      <h2>회원가입</h2>
      <h3>Today</h3>
      <p>{new Date().toDateString()}</p>
    </div>
  );
};
export default Header;
