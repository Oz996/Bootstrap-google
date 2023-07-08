import { Nav, Navbar } from "react-bootstrap";
import { PiDotsNineBold } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <Navbar className="d-flex justify-content-end align-items-center">
      <Nav className="mx-2">
        <Nav.Link href="#" style={{ fontSize: "14px" }} className="link-hover">
          Gmail
        </Nav.Link>
        <Nav.Link href="#" style={{ fontSize: "14px" }} className="link-hover">
          Bilder
        </Nav.Link>
        <PiDotsNineBold
          className="mt-2 mx-3"
          size={25}
          style={{ cursor: "pointer" }}
        />
        <FaUserCircle
          className="mt-1 mx-3"
          size={30}
          style={{ cursor: "pointer" }}
        />
      </Nav>
    </Navbar>
  );
};

export default Header;
