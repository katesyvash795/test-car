
import Catalog from "pages/Catalog";
import { Container } from "./AppStyled";
import { Home } from "pages/Home";

export const App = () => {
  return (
    <Container>
      <Home/>
      <Catalog/>
    </Container>
  );
};
