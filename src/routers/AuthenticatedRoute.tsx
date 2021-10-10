import { Route, Switch } from "react-router";
import { Header } from "../components/global/Header";
import Home from "../pages";
import Detalles from "../pages/detalles";
import Nuevo from "../pages/nuevo";
import Perfil from "../pages/perfil";

export const AuthenticatedRoute = () => {
  return (
    <div>
      <Header />
      <div className="mt-40">
        <Switch>
          <Route exact path="/detalles" component={Detalles} />
          <Route exact path="/" component={Home} />
          <Route exact path="/nuevo" component={Nuevo} />
          <Route exact path="/perfil" component={Perfil} />
        </Switch>
      </div>
    </div>
  );
};
