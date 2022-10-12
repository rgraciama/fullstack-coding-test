import { AppContainer } from "./App.styled";
import { Home } from "./pages/Home";
import NotFound from './pages/NotFound';
import Products from './pages/Products';
import React from "react";

const App = () => {
  return (
    <AppContainer>
        <Products/>
    </AppContainer>
  );
};

export default App;
