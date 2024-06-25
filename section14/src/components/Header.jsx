import "./Header.css";
import { memo } from "react";
const Header = () => {
  return (
    <>
      <div className="Header">
        <h3>오늘은 📆</h3>
        <p>{new Date().toDateString()}</p>
      </div>
    </>
  );
};

// export default Header;
export default memo(Header);
