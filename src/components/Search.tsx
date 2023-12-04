import React, { useState } from "react";
import { search } from "../constants/atoms";
import { useAtom } from "jotai";

const Search = () => {
	const [searchValue, setSearchValue] = useAtom(search);

	return (
		<div className="">
			<input
				type="text"
				className="min-w-[350px] place-content-center text-white px-6 py-4 bg-black rounded-lg  "
				placeholder="Filter nodes by name..."
				value={searchValue}
				onChange={(e) => setSearchValue(e.target.value)}
			></input>
		</div>
	);
};

export default Search;
