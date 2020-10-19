import Head from "next/head";
import Navbar from "./navbar";

const Layout = (props) => {
  return (
    <div>
      <head>
        <title>Hello Next Js</title>
      </head>
      <Navbar />
      {props.children}
    </div>
  );
};

export default Layout;
