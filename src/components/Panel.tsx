import React, { useEffect, useState } from "react";
import { useAtomValue } from "jotai";
import { selectedNodeList } from "../constants/atoms";
import { PanelItem } from "./PanelItem";
import { NodeInterface } from "../constants/types";

export const Panel = () => {
	const selected = useAtomValue(selectedNodeList);
	console.log("SELECTED: ", selected);

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
				{selected &&
					selected.map((node: NodeInterface) => (
						<PanelItem key={node.id} node={node}></PanelItem>
					))}
			</div>
		</div>
	);
};
