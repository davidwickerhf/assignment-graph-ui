import React, { useEffect, useState } from "react";
import { NodeInterface } from "../constants/types";
import { nameError, selectedNodeList } from "../constants/atoms";
import { useAtom, useSetAtom } from "jotai";

interface PanelInterface {
	node: NodeInterface;
}

export const PanelItem = ({ node }: PanelInterface) => {
	const [open, setOpen] = useState(true);
	const [selected, setSelected] = useAtom(selectedNodeList);
	const [value, setValue] = useState(node.name);
	const setError = useSetAtom(nameError);

	useEffect(() => {
		if (value.length < 1) {
			setError(true);
			return;
		}
		// Update state
		let temp = selected;
		let el = temp.filter((el) => el.id == node.id)[0];
		temp = temp.filter((el) => el.id != node.id);
		setSelected([...temp, { ...el, name: value }]);
		setError(false);
	}, [value]);

	return (
		<div
			className="px-6 py-4 flex flex-col gap-2  transition-all duration-200 ease-in-out border-t-[1px]"
			key={node.id}
		>
			{/* Header */}
			<div
				className="flex gap-2 hover:cursor-pointer"
				onClick={() => {
					setOpen(!open);
				}}
			>
				<div className="">
					<span className="material-symbols-outlined">
						{open ? "chevron_right" : "expand_more"}
					</span>
				</div>
				<p>{node.name}</p>
			</div>
			{/* Contents */}
			<div
				className={
					!open ? "hidden" : "flex justify-between flex-col gap-2 w-full pl-10"
				}
			>
				<div className="flex w-full justify-between items-center">
					<span className="font-medium pr-4">Name: </span>
					<form>
						<input
							autoComplete="false"
							className="px-2 py-1 border-[1px] bg-dark-two w-min"
							type="text"
							value={value}
							onChange={(e) => setValue(e.target.value)}
						/>
					</form>
				</div>
				<div className=" flex  w-full justify-between">
					<span className="font-medium pr-4">Indegree: </span>
					<div>{node.indegree}</div>
				</div>
				<div className=" flex  w-full justify-between">
					<span className="font-medium pr-4">Outdegree: </span>
					<div>{node.outdegree}</div>
				</div>
				<div className=" flex  w-full justify-between">
					<span className="font-medium pr-4">Score: </span>
					<div>{node.score}</div>
				</div>
			</div>
		</div>
	);
};
