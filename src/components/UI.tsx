import React from "react";
import { Error } from "./Error";
import { Panel } from "./Panel";
import Search from "./Search";

const UI = () => {
	return (
		<>
			<Error></Error>
			<div className="fixed right-4 top-4 z-20">
				<Search></Search>
			</div>
			<div className="fixed right-4 bottom-4 z-20">
				<Panel></Panel>
			</div>
		</>
	);
};

export default UI;
