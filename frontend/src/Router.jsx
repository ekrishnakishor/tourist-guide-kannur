import React from "react";
import { Route, Switch } from "react-router";
import Detail from "./components/common/Detail";
import Favourites from "./containers/Favourites";
import Home from "./containers/Home";
import Places from "./containers/Places";

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/favourites"} component={Favourites} />
        <Route exact path={"/places"} component={Places} />
        <Route exact path={"/:id"} component={Detail} />

      </Switch>
    </>
  );
};
export default Router;
