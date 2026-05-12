function Button({ children }) {
	return (
		<button className="px-4 py-2 bg-amber-50 rounded-2xl text-black font-semibold">
			{children}
		</button>
	);
}

export default Button;
