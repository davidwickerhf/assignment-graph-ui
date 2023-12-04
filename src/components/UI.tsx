import React from "react";
import { Error } from "./Error";
import { Panel } from "./Panel";

const UI = () => {
	return (
		<div>
			<Error></Error>
			<div className="fixed right-4 bottom-4 z-20">
				<Panel></Panel>
			</div>
		</div>
	);
};

export default UI;
