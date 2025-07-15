import { history } from "instantsearch.js/es/lib/routers";
import { simple } from "instantsearch.js/es/lib/stateMappings";

export const routing = {
  router: history(),
  stateMapping: simple(),
};
