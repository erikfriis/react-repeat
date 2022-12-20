import "./ExpenseItem.css";

const ExpenseItem = (props) => {
	return (
		<div className="container">
			<div className="left">
				<div className="date">
					blabla
				</div>
				<div className="name">
					{props.title}
				</div>
			</div>
			<div className="price">
				${props.amount}
			</div>
		</div>
	);
};

export default ExpenseItem;
