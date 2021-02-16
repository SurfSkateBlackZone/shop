import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { GA_TRACKING_CODE } from "config";

ReactGA.initialize(GA_TRACKING_CODE, {
  gaOptions: {
    userId: ReactGA.ga((tracker) => {
      tracker.get("clientId");
    }),
  },
});

const withTracker = (WrappedComponent, options = {}) => {
  const trackPage = (page) => {
    ReactGA.set({
      page,
      ...options,
    });
    ReactGA.pageview(page);
  };

  const HOC = (props) => {
    useEffect(() => trackPage(props.location.pathname), [
      props.location.pathname,
    ]);

    return <WrappedComponent {...props} />;
  };

  return HOC;
};

export default withTracker;
