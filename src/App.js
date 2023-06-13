import { Fragment } from "react";
import Body from "./components/body";
import Fotter from "./components/Footer";
import Header from "./components/header"
import  Form  from "./components/form";


function App() {
  return (
      <Fragment>
          <Header/>
          <Body/>
          <Form/>
      
          <Fotter/>
      </Fragment>
  );
}

export default App;
