import { useRouteError } from "react-router-dom";

function Error() {
	const error = useRouteError();

	return (
		<div className="text-center p-4 bg-red-100 text-red-700 rounded">
			<h2 className="font-bold text-xl mb-2">Oops can't fetch your API  </h2>
			<p>{error.message || "Something went wrong"}</p>
		</div>
	);
}

export default Error;
