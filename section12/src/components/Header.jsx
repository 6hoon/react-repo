import './Header.css';

const Header = ()=>{
  return (
    <>
      <div className="Header">
        <h3>오늘은 📆</h3>
        <p>{new Date().toDateString()}</p>
      </div>
    </>
  ); 
};

export default Header; 