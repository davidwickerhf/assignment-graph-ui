import { atom } from "jotai";
import { NodeInterface } from "./types";

export const selectedNodeList = atom<NodeInterface[]>([]);

export const addSelectedNode = atom(
	(get) => get(selectedNodeList),
	(get, set, el: NodeInterface) => {
		if (!get(selectedNodeList).includes(el))
			set(selectedNodeList, [...get(selectedNodeList), el]);
		else
			set(
				selectedNodeList,
				get(addSelectedNode).filter((e) => e != el)
			);
	}
);

export const nameError = atom(false);
