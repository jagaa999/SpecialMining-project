import { history } from "instantsearch.js/es/lib/routers";

export const routing = {
  router: history({
    createURL({ location, routeState }) {
      const indexState = routeState.moto_news_v2 || {};
      const refinementList = indexState.refinementList || {};
      const query = indexState.query || "";
      const urlParams = new URLSearchParams();

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
        } else {
          refinementList[key] = value.split(",");
        }
      }

      return {
        moto_news_v2: {
          query,
          refinementList,
        },
      };
    },
  }),

  stateMapping: {
    stateToRoute(uiState: any) {
      const indexUiState = uiState.moto_news_v2 || {};
      const refinementList = indexUiState.refinementList || {};
      const query = indexUiState.query || "";

      return {
        moto_news_v2: {
          query,
          refinementList,
        },
      };
    },

    routeToState(routeState: any) {
      return {
        moto_news_v2: {
          query: routeState.moto_news_v2?.query || "",
          refinementList: routeState.moto_news_v2?.refinementList || {},
        },
      };
    },
  },
};
