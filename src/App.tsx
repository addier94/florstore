import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/global/Header";
import PageRender from "./PageRender";
// import { PublicRoute } from "./routers/PublicRoute";

// type Props = {
//   axact: boolean,
//   path: string,
//   component: Function,
//   isLoggedIn: boolean
// }

const App: React.FC = () => {
  console.log("ssss", typeof PageRender);
  return (
    <>
      <Router>
        <Header />
        <div className="mt-44 mb-10">
          <Switch>
            {/*  <PublicRoute
              exact
              path="/"
              component={PageRender}
              isLoggedIn={true}
            /> */}
            <Route exact path="/" component={PageRender} />
            <Route exact path="/:page" component={PageRender} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
