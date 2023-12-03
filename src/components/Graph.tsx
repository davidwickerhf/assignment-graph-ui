import React, { useState, useEffect } from "react";
import cytoscape from "cytoscape";
const cola = require("cytoscape-cola");
cytoscape.use(cola);

function Graph() {
  const containerId = "cy";

  const containerStyle = {
    height: "100vh",
    width: "100vw",
    margin: "auto",
    border: "1px solid",
  };

  useEffect(() => {
    const containerEle = document.getElementById(containerId);

    fetch("/data.json")
      .then((res: any) => res.json())
      .then((json: any) => {
        const cy = cytoscape({
          elements: json,
          container: containerEle,
          layout: {
            name: "cola",
          },
          style: [
            {
              selector: "node",
              style: {
                "background-color": "black",
                label: "data(name)",
                "text-valign": "center",
                "text-halign": "left",
                width: 6,
                height: 6,
              },
            },
            {
              selector: "edge",
              style: {
                width: 0.3,
                "curve-style": "straight",
                "target-arrow-shape": "triangle",
                "arrow-scale": 0.5,
              },
            },
          ],
        });

        cy.on("tap", "node", function (evt) {
          var node = evt.target;
          console.log("tapped " + node.id());
        });

        cy.$("node").on("tap", function (e) {
          var ele = e.target;
          ele.connectedEdges().style({ "line-color": "red" });
        });

        // cy.$("node").on("free", function (e) {
        //   var ele = e.target;
        //   ele.connectedEdges().style({ "line-color": "#FAFAFA" });
        // });
      });
  });

  return <div id={containerId} style={containerStyle}></div>;
}

export default Graph;
