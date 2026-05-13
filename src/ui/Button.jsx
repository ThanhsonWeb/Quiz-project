function Button({ children, onClick }) {
	return (
		<button
			onClick={onClick}
			className="px-4 py-2 bg-amber-50 rounded-xl text-black font-semibold cursor-pointer"
		>
			{children}
		</button>
	);
}

export default Button;
