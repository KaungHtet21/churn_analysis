import { useEffect, useState } from "react";
import Styles from "./styles";
import { Image } from "antd";
import { images } from "../../assets/images";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Styles.NavbarContainer $isScrolled={isScrolled}>
      <Image src={images.miit_logo} style={{width: '200px', height: '80px'}} />
      <Styles.ContactButton type="default">Contact Us</Styles.ContactButton>
    </Styles.NavbarContainer>
  );
};

export default Navbar;
