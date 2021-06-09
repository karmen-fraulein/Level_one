import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'


// add conditional statment
const ExpensesList = props => {

    if(props.items.length === 0){
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }
    // if not
    return(
        <ul className="expenses-list">
            {props.items.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </ul>
    )


};

export default ExpensesList;