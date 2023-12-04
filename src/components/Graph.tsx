import React, { useState, useEffect, useCallback } from "react";
import cytoscape, { NodeSingular } from "cytoscape";
import { theme } from "../constants/theme";
import { useSetAtom, useAtom } from "jotai";
import { selectedNodeList } from "../constants/atoms";
import { NodeInterface } from "../constants/types";

const cola = require("cytoscape-cola");
cytoscape.use(cola);

function Graph() {
	const containerId = "cy";
	const [selected, setSelected] = useAtom(selectedNodeList);
	const [cyto, setCyto] = useState<cytoscape.Core>();

	function syncData(node: NodeInterface) {
		if (!localStorage.getItem("data")) {
			const data = fetch("/data.json")
				.then((res: any) => res.json())
				.then((json: any) => {
					// Retrieve prev. node raw data
					const rawNode = json.filter(
						(e: any) => e.data.id == node.id.toString()
					)[0];
					let filteredData = json.filter(
						(e: any) => e.data.id != node.id.toString()
					);

					// Update data
					let updatedNode = rawNode;
					updatedNode.data.name = node.name;

					// Put data back into json
					filteredData.unshift(updatedNode);

					// Rewrite data on file
					// Write to localstorage
					localStorage.setItem("data", JSON.stringify(filteredData));
				});
		} else {
			const data = JSON.parse(localStorage.getItem("data")!);
			const rawNode = data!.filter(
				(e: any) => e.data.id == node.id.toString()
			)[0];
			let filteredData = data!.filter(
				(e: any) => e.data.id != node.id.toString()
			);

			// Update data
			let updatedNode = rawNode;
			updatedNode.data.name = node.name;

			// Put data back into json
			filteredData.unshift(updatedNode);

			// Rewrite data on file
			// Write to localstorage
			localStorage.setItem("data", JSON.stringify(filteredData));
		}
	}

	const style: any = [
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
	];

	const declareCytoFunctions = (cy: cytoscape.Core, json: any) => {
		// Detect node tap (Update state)
		cy.on("tap", "node", function (evt) {
			var node: NodeSingular = evt.target;
			let nodeData = json.filter((e: any) => e.data.id == node.id())[0];
			let nodeObj: NodeInterface = {
				id: Number(node.id()),
				name: node.renderedStyle("label"),
				indegree: node.indegree(false),
				outdegree: node.outdegree(false),
				score: nodeData.data.score,
			};
			setSelected([nodeObj]);

			resetNodes(cy);
			styleNodes(cy, [node.id()]);
		});

		// Change node color back to default when deselected
		cy.on("click", (event) => {
			if (event.target === cy) {
				// click on the background
				setSelected([]);
				resetNodes(cy);
			}
		});
	};

	function resetNodes(cy: cytoscape.Core, targets: string[] = []) {
		cy.nodes().forEach((node) => {
			if (targets.includes(node.id()) || targets.length == 0) {
				node.connectedEdges().style({
					"line-color": theme.colors.alabaster.five,
					"target-arrow-color": theme.colors.alabaster.five,
					"source-arrow-color": theme.colors.alabaster.five,
				});
				node.style({ "background-color": "black" });
				node.neighborhood().style({ "background-color": "black" });
			}
		});
	}

	function styleNodes(cy: cytoscape.Core, targets: string[] = []) {
		cy.nodes().forEach((node) => {
			if (targets.includes(node.id()) || targets.length == 0) {
				node.style({ "background-color": theme.colors.stappatored.three });
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

		if (localStorage.getItem("data")) {
			const data = JSON.parse(localStorage.getItem("data")!);

			const cy = cytoscape({
				elements: data,
				container: containerEle,
				style: style,
			});

			// Initialize functions
			declareCytoFunctions(cy, data);

			cy.layout({
				name: "cola",
			}).run();

			setCyto(cy);
		} else {
			fetch("/data.json")
				.then((res: any) => res.json())
				.then((json: any) => {
					const cy = cytoscape({
						elements: json,
						container: containerEle,
						style: style,
					});

					// Initialize functions
					declareCytoFunctions(cy, json);

					cy.layout({
						name: "cola",
					}).run();

					setCyto(cy);
				});
		}
	}, []);

	useEffect(() => {
		if (selected.length == 1) {
			let el = cyto?.getElementById(selected[0].id.toString());
			el?.style("label", selected[0].name);
			syncData(selected[0]);
		}
	}, [selected]);

	return (
		<div className=" w-screen h-screen m-auto bg-ghost" id={containerId}></div>
	);
}

export default Graph;
