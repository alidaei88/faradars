import Image from "next/image";
import { SVGProps } from "react";
import AppDownload from "../home/appDownload";
import RegOrLogin from "../home/regOrLogin";
import Organizations from "../home/organizations";
import Subjects from "../home/subjects";
import About from "../home/about"
import Social from "../home/social";



function Footer() {

  return (
    <footer>
      <AppDownload />
      <RegOrLogin />
      <Organizations />
      <Subjects />
      <About />
      <Social />
    </footer>
  );
}

export default Footer;
