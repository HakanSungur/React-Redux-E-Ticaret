import Navi from "../navi/Navi";
import {Container} from "reactstrap";
import DashBoard from "./DashBoard"
import {Route, Switch } from "react-router";
import CartDetail from "../cart/CartDetail";

function App() {
  return (
    <Container>
      <Navi />
      <Switch>
        <Route path="/" exact component={DashBoard}/>
        <Route path="/product" exact component={DashBoard}/>
        <Route path="/cart" exact component={CartDetail}/>
        

      </Switch>
      {/* <DashBoard /> */}
    </Container>
  );
}

export default App;
