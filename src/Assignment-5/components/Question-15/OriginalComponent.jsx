/**
 * Build an HOC called withLogger that logs the events of a component
 * (e.g., mounting, unmounting, updating).
 * Apply this HOC to a component and display the logs in the browser console.
 */

import React from "react";
import withLogging from "./withLogging";

const OriginalComponent = () => {
  return (
    <div>
      <h1>Parent Component</h1>
    </div>
  );
};

export default withLogging(OriginalComponent);
