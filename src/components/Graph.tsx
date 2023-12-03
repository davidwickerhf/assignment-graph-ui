import React, { useState, useEffect } from "react";
import cytoscape, { NodeSingular } from "cytoscape";
import { theme } from "../constants/theme";
import { useSetAtom } from "jotai";
import { selectedNodeList, addSelectedNode } from "../constants/atoms";

const cola = require("cytoscape-cola");
cytoscape.use(cola);

function Graph() {
	const containerId = "cy";
	const setSelected = useSetAtom(selectedNodeList);
	const addSelected = useSetAtom(addSelectedNode);

	function resetNodes(cy: cytoscape.Core, targets: string[] = []) {
		cy.nodes().forEach((node) => {
			if (targets.includes(node.id()) || targets.length == 0) {
				node.connectedEdges().style({
					"line-color": theme.colors.alabaster.five,
					"target-arrow-color": theme.colors.alabaster.five,
					"source-arrow-color": theme.colors.alabaster.five,
				});
				node.style({ "background-color": "black" });
				node.neighborhood().filter(e => e.renderedStyle('background-color') != ).style({ "background-color": "black" });
			}
		});
	}

	function styleNodes(cy: cytoscape.Core, targets: string[] = []) {
		cy.nodes().forEach((node) => {
			if (targets.includes(node.id()) || targets.length == 0) {
				node.style({ "background-color": theme.colors.green.five });
				node.connectedEdges().style({
					"line-color": theme.colors.green.one,
					"target-arrow-color": theme.colors.green.one,
					"source-arrow-color": theme.colors.green.one,
				});
				node
					.neighborhood()
					.style({ "background-color": theme.colors.green.one });
			}
		});
	}

	useEffect(() => {
		const containerEle = document.getElementById(containerId);

		fetch("/data.json")
			.then((res: any) => res.json())
			.then((json: any) => {
				const cy = cytoscape({
					elements: json,
					container: containerEle,
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
								"font-size": "8px",
							},
						},
						{
							selector: "edge",
							style: {
								width: 0.3,
								"curve-style": "straight",
								"target-arrow-shape": "triangle",
								"arrow-scale": 0.5,
								"line-color": theme.colors.alabaster.five,
								"target-arrow-color": theme.colors.alabaster.five,
								"source-arrow-color": theme.colors.alabaster.five,
							},
						},
					],
				});

				cy.layout({
					name: "cola",
				}).run();

				// Detect node tap (Update state)
				cy.on("tap", "node", function (evt) {
					var node: NodeSingular = evt.target;
					addSelected(node.id());
					console.log("selected " + node.id());

					// Change node styling
					// If node was already selected, remove styling of the tapped node
					console.log(node.renderedStyle("background-color"));
					if (node.renderedStyle("background-color") == "rgb(56,106,78)") {
						console.log("Removing selected");
						resetNodes(cy, [node.id()]);
					} else {
						// If node was NOT previously selected, format it accordingly
						styleNodes(cy, [node.id()]);
					}
				});

				// Change node color back to default when deselected
				cy.on("click", (event) => {
					if (event.target === cy) {
						// click on the background
						setSelected([]);
						resetNodes(cy);
					}
				});
			});
	}, []);

	return (
		<div className=" w-screen h-screen m-auto bg-ghost" id={containerId}></div>
	);
}

export default Graph;
