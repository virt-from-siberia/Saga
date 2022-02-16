import { Route, Switch } from "react-router-dom";
import App from "./pages/App";
import { Details } from "./pages/Details";

export const MAIN_ROUTE = "MAIN_ROUTE";
export const PEOPLE_DETAILS_ROUTE = "PEOPLE_DETAILS_ROUTE";

export const routes = [
  {
    id: MAIN_ROUTE,
    path: "/",
    exact: true,
    component: App,
  },
  {
    id: PEOPLE_DETAILS_ROUTE,
    path: "/people/:id",
    exact: true,
    component: Details,
  },
];

export const getRouteConfig = (id) => {
  const route = routes.find((r) => r.id === id);
  if (route) {
    const { component, ...rest } = route;
    return rest;
  }
};

export const Routes = () => {
  return (
    <Switch>
      {routes.map((route) => {
        const { id, ...props } = route;
        return (
          <Route key={id} {...props}>
            <App />
          </Route>
        );
      })}
    </Switch>
  );
};
