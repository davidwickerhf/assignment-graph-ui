import React, { useEffect, useState } from "react";
import { useAtomValue } from "jotai";
import { selectedNodeList } from "../constants/atoms";

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
				return response.json();
			})
			.then(function (myJson) {
				setData(myJson);
			});
	};
	const selected = useAtomValue(selectedNodeList);

	useEffect(() => {
		getData();
	}, []);

	useEffect(() => {
		console.log(selected);
	}, [selected]);

	return (
		<div className="bg-dark-five rounded-lg  text-white min-w-[350px]">
			<p
				className={"px-6 py-4" + (selected.length > 0 ? " border-b-[1px]" : "")}
			>
				{selected.length == 0
					? "No node selected"
					: `Selected ${selected.length} node(s)`}
			</p>
			<div className="flex flex-col">
				{data &&
					data
						.filter((e) => selected.includes(e.data.id))
						.map((e) => (
							<div className="px-6 py-4 flex flex-col gap-2" key={e.data.id}>
								{e.data.name}
							</div>
						))}
			</div>
		</div>
	);
};
