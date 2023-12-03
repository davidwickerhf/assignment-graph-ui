import React, { useEffect, useState } from "react";
import { useAtomValue } from "jotai";
import { selectedNodeId } from "../constants/atoms";
import { theme } from "../constants/theme";

export const Panel = () => {
	const [data, setData] = useState<any[]>([]);

	// Solution for load function found at https://www.pluralsight.com/guides/fetch-data-from-a-json-file-in-a-react-app
	const getData = () => {
		fetch("data.json", {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		})
			.then(function (response) {
				console.log(response);
				return response.json();
			})
			.then(function (myJson) {
				console.log(myJson);
				setData(myJson);
			});
	};
	const selected = useAtomValue(selectedNodeId);

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="bg-dark-five rounded-lg  text-white">
			<p className="px-6 py-4">
				{selected == 0 ? "No node(s) selected" : "Selected 1 node"}
			</p>
			<p>
				{data &&
					data.filter((e) => e.data.id == selected).map((e) => e.data.name)}
			</p>
		</div>
	);
};
