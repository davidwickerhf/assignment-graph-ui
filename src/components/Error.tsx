import { useAtomValue } from "jotai";
import React from "react";
import { nameError } from "../constants/atoms";

export const Error = () => {
	const error = useAtomValue(nameError);
	console.log(error);

	return (
		<div
			className={
				!error
					? "hidden"
					: "fixed flex z-10 bg-stappatored-three/80 w-screen h-screen font-semibold text-2xl align-middle justify-center items-center text-white"
			}
		>
			<div>Name cannot be empty</div>
		</div>
	);
};
