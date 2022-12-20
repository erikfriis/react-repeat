import logo from "./logo.svg";
import "./App.css";
import Expenses from "./Components/Expenses";

const expenses = [
	{
		id: "id1",
		title: "toilet paper",
		amount: 499,
		date: new Date(),
	},
	{
		id: "id2",
		title: "toilet",
		amount: 649,
		date: new Date(),
	},
	{
		id: "id3",
		title: "paper",
		amount: 6849,
		date: new Date(),
	},
];

function App() {
	return (
		<div>
			<Expenses item={expenses} />
		</div>
	);
}

export default App;
