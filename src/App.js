import { Fragment } from "react";
import Body from "./components/body";
import Fotter from "./components/Footer";
import Header from "./components/header"
import Nosotros from "./components/Nosotros"

function App() {
  return (
      <Fragment>
          <Header/>
          <Body/>
          <Nosotros/>
          <Fotter/>
      </Fragment>
  );
}

export default App;
