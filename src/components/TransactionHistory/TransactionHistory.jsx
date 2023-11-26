import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({items}) => {
    return (
        <table className={css.transaction_history}>
            <thead>
                <tr className={css.header}>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
                <tbody>
                    {items.map(({id, type, amount, currency}) => {
                        return(
                        <tr className={css.row} key={id}>
                            <td className={css.type}>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>)
                    })}
                </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  };
export default TransactionHistory;