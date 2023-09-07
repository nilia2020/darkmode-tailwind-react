import { useEffect, useState } from "react";

function App() {
	const [theme, setTheme] = useState(() => {
		if (
			window.matchMedia("(prefers-color-scheme: dark)").matches
		) {
			return "dark";
		}
		return "light";
	});
	useEffect(() => {
		if (theme === "dark") {
			document.querySelector("html")?.classList.add("dark");
		} else {
			document.querySelector("html")?.classList.remove("dark");
		}
	}, [theme]);
	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};
	return (
		<div className="h-screen flex justify-center items-center dark:bg-neutral-900">
			<button
				className="bg-slate-200 font-medium text-2xl px-4 py-2 rounded hover:bg-slate-300 dark:bg-green-900 dark:hover:bg-green-800 dark:text-yellow-50"
				onClick={toggleTheme}
			>
				Change Theme
			</button>
		</div>
	);
}

export default App;
