import React from "react";
import MainLayout from "./src/layout/MainLayout";
import { Provider } from "react-redux";
import store from "./src/store";

const App = () => {
  return (
    <Provider store={store}>
      <MainLayout />
    </Provider>
  );
};

export default App;
