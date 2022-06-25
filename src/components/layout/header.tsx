import Head from "next/head";
import MainMenu from "../common/main-menu";

function Header(props: any) {

  console.log(props)
  return (
    <>
      <MainMenu />
    </>
  );
}

export default Header;
