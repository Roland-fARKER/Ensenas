import { Fragment } from "react";
import Body from "./components/body";
import Fotter from "./components/Footer";
import Header from "./components/header"

function App() {
  return (
      <Fragment>
          <Header/>
          <Body/>
          <Fotter/>
      </Fragment>
  );
}

export default App;
