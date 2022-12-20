import React from "react";
import { Button, Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="mt-5">
      <Button>-</Button>
      <span> 0 </span>
      <Button>+</Button>
    </Container>
  );
};

export default Home;
