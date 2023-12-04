import React, { useState } from "react";

const Search = () => {
	const [value, setValue] = useState("");

	return (
		<div className="">
			<input
				type="text"
				className="min-w-[350px] place-content-center text-white px-6 py-4 bg-black rounded-lg  "
				placeholder="Filter nodes by name..."
				value={value}
				onChange={(e) => setValue(e.target.value)}
			></input>
		</div>
	);
};

export default Search;
