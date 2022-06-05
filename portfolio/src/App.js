import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home";
import Layout from "./components/Layout"

function App() {
	return (
		<>
		<Routes>
			<Route path="/" element={<Layout />} />
			<Route path="/" element={<Home />} />
		</Routes>
		</>
	);
}

export default App;
