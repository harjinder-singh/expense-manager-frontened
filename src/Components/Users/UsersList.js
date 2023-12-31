import UserCard from './UserCard';

const UsersList = ({users}) => {

    let displayCards = () => {
		return users.map((user) => {
			return (
				<UserCard key={user.id} user={user}></UserCard>
			)
		});
	}

    return (
		<div className='cards'>
			{ users.length > 0 && displayCards()}
		</div>
    )
}

export default UsersList;