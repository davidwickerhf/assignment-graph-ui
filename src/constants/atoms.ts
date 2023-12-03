import { atom } from "jotai";

export const selectedNodeList = atom<any[]>([]);

export const addSelectedNode = atom(
	(get) => get(selectedNodeList),
	(get, set, el) => {
		if (!get(selectedNodeList).includes(el))
			set(selectedNodeList, [...get(selectedNodeList), el]);
		else
			set(
				selectedNodeList,
				get(addSelectedNode).filter((e) => e != el)
			);
	}
);
