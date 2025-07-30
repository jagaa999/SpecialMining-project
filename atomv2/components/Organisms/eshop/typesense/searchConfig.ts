import { history } from "instantsearch.js/es/lib/routers";

export const createRouting = (collectionName: string) => ({
  router: history({
    createURL({ location, routeState }) {
      const indexState = routeState[collectionName] || {};
      const refinementList = indexState.refinementList || {};
      const query = indexState.query || "";
      const urlParams = new URLSearchParams(location.search);

      if (query) {
        urlParams.set("q", query);
      }

      Object.entries(refinementList).forEach(([facetName, values]) => {
        if (Array.isArray(values)) {
          urlParams.set(facetName, values.join(","));
        }
      });

      return `${location.pathname}?${urlParams.toString()}`;
    },

    parseURL({ location }) {
      const queryParams = new URLSearchParams(location.search);
      const refinementList: any = {};
      let query = "";

      for (const [key, value] of queryParams.entries()) {
        if (key === "q") {
          query = value;
        } else if (key !== "id") {
          refinementList[key] = value.split(",");
        }
      }

      return {
        [collectionName]: {
          query,
          refinementList,
        },
      };
    },
  }),

  stateMapping: {
    stateToRoute(uiState: any) {
      const indexUiState = uiState[collectionName] || {};
      const refinementList = indexUiState.refinementList || {};
      const query = indexUiState.query || "";

      return {
        [collectionName]: {
          query,
          refinementList,
        },
      };
    },

    routeToState(routeState: any) {
      return {
        [collectionName]: {
          query: routeState[collectionName]?.query || "",
          refinementList: routeState[collectionName]?.refinementList || {},
        },
      };
    },
  },
});
