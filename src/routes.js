import { Route } from "react-router";

import App from "./App";
import GifPage from "./GifPage";

export default (
  <Route path="/" component={App}>
    {/* <IndexRoute component={App} /> */}
    <Route path="/results" component={GifPage} />
  </Route>
);
