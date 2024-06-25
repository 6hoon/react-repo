import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <h4>회원가입</h4>
            <h3>Today</h3>
            <p>{new Date().toDateString()}</p>
        </div>
    );
}
export default Header;