import css from './FriendList.module.css';
import PropTypes from "prop-types";
// import friends from './friends.json';
import FriendListItem from 'components/FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
        {friends.map(friend =>{
            return  <FriendListItem 
                id={friend.id}
                key={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
        />
        })}
    </ul>
  );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf
        (PropTypes.shape({
            // key: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            
        }).isRequired).isRequired
}

export default FriendList;