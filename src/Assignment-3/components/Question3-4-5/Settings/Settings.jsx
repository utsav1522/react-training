import React from "react";

const Settings = () => {
  return (
    <div>
      <h1>Settings Section</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>set Theme:</p>
        <div>
          <button> Light</button>
          <button>Dark</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
