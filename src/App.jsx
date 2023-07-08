import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import { Button, Container, Figure, Form } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { BiSolidKeyboard } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Container
        className="d-flex justify-content-center align-items-center flex-column"
        style={{ height: "630px" }}
      >
        <Figure>
          <Figure.Image
            width={270}
            height={140}
            alt="Google Icon"
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          />
        </Figure>
        <Form>
          <Form.Group>
            <Form.Control
              className="py-2 rounded-5 px-5"
              style={{ width: "36rem"}}
            />
            <AiOutlineSearch
              size={20}
              style={{
                opacity: ".5",
                position: "relative",
                bottom: "35",
                left: "15",
              }}
            />
            <BiSolidKeyboard
              size={20}
              style={{
                opacity: ".5",
                position: "relative",
                bottom: "35",
                left: "84%",
                cursor: "pointer",
              }}
            />
            <FcGoogle
              size={19}
              style={{
                position: "relative",
                bottom: "35",
                left: "86%",
                cursor: "pointer",
              }}
            />
            <Container className="d-flex justify-content-center">
              <Button variant="light">Sök på Google</Button>
              <Button variant="light">Jag har tur</Button>
            </Container>
          </Form.Group>
        </Form>
      </Container>
      <Footer/>
    </>
  );
};

export default App;
