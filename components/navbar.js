import Link from "next/link";
import style from "./styles/navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.bgRed}>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
