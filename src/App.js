import React from "react";
import "@quantumblack/kedro-viz/lib/styles/styles.min.css";
import demo from "./kedro-viz-input.json";
import KedroViz from "@quantumblack/kedro-viz";

function app() {
  return (
    <div style={{ height: `90vh`, width: `100%` }}>
      <KedroViz
        data={demo}
        options={{
          display: {
            expandPipelinesBtn: true,
            exportBtn: true,
            globalNavigation: true,
            labelBtn: true,
            layerBtn: true,
            metadataPanel: true,
            miniMap: true,
            sidebar: true,
            zoomToolbar: true,
          },
          theme: "dark",
        }}
      />
    </div>
  );
}

export default app;
