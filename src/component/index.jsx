import React from "react";
import { Provider } from "react-redux";
import store from "../app/store";
import Tugas from "./Tugas/tugas";

const Index = () => {
  return (
    <div>
      <Provider store={store}>
        <Tugas />
      </Provider>
    </div>
  );
};

export default Index;
