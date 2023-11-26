// import friends from './friends.json';
import PropTypes from "prop-types";
import css from './FriendListItem.module.css'

const FriendListItem = ({avatar, name, isOnline, id}) => {
    return (
        <li className={css.item} key={id}>
            <span className={isOnline ? `${css.status} ${css.green}` : `${css.status} ${css.red}`}></span>
            <img className={css.avatar} src={avatar} alt={name} width="60" />
            <p className={css.name}>{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    // id: PropTypes.number.isRequired,
}

export default FriendListItem;