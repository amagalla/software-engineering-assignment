import "../styles/index.scss";
import Registration from "./Registration";
import AdminReport from "./AdminReport";
import Homepage from "./Homepage";
import PageNotFound from "./PageNotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>
          <Route path='/registration'>
            <Registration />
          </Route>
          <Route path='/adminreport'>
            <AdminReport />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
