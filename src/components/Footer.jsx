import { Col, Container, Nav, Row } from "react-bootstrap";
import { IoIosLeaf } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <Container
        fluid
        className="d-flex align-items-center"
        style={{
          position: "fixed",
          bottom: "5%",
          backgroundColor: "#eeeeee",
          height: "50px",
          fontSize: "14px",
        }}
      >
        <span className="fw-light">Sverige</span>
      </Container>
      <Row
        className="fixed-bottom border-top py-1"
        style={{ backgroundColor: "#eeeeee", fontSize: "14px" }}
      >
        <Nav className="d-flex align-items-center">
          <Col lg={3} className="d-flex">
            <Nav.Link className="text-dark link-hover">Om</Nav.Link>
            <Nav.Link className="text-dark link-hover">Annonsering</Nav.Link>
            <Nav.Link className="text-dark link-hover">
              Företagslösningar
            </Nav.Link>
            <Nav.Link className="text-dark link-hover">
              Så fungerar Sök
            </Nav.Link>
          </Col>
          <Col
            lg={6}
            className="d-flex align-items-center justify-content-center"
          >
            <IoIosLeaf style={{ color: "green" }} />
            <Nav.Link className="text-dark link-hover">
              Koldioxidneutralt sedan 2007
            </Nav.Link>
          </Col>

          <Col lg={3} className="d-flex justify-content-end">
            <Nav.Link className="text-dark link-hover">Integritet</Nav.Link>
            <Nav.Link className="text-dark link-hover">Villkor</Nav.Link>
            <Nav.Link className="text-dark link-hover">Inställningar</Nav.Link>
          </Col>
        </Nav>
      </Row>
    </>
  );
};

export default Footer;
