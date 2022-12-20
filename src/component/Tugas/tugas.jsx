import React from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementWitchCheckingAction,
  increment,
} from "../../app/feature/Counter/action";

const Tugas = () => {
  let { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <Container className="mt-5">
      <Button onClick={() => dispatch(decrementWitchCheckingAction(1))}>
        -
      </Button>
      <span> {count} </span>
      <Button onClick={() => dispatch(increment(1))}>+</Button>
    </Container>
  );
};

export default Tugas;
