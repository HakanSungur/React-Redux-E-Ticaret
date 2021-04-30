import Navi from "../navi/Navi";
import { Container } from "reactstrap";
import DashBoard from "./DashBoard";
import { Route, Switch } from "react-router";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";

function App() {
  return (
    <Container>
      <Navi />
      <Switch>
        <Route path="/" exact component={DashBoard} />
        <Route path="/product" exact component={DashBoard} />
        <Route path="/saveproduct/:productId" component={AddOrUpdateProduct} />
        <Route path="/saveproduct/" component={AddOrUpdateProduct} />
        <Route path="/cart" exact component={CartDetail} />
        <Route  component={NotFound} />
      </Switch>
      {/* <DashBoard /> */}
    </Container>
  );
}

export default App;
