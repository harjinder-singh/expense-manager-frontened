import { useState} from 'react';

import AddUser from './AddUser';
import UsersList from './UsersList';
import { useGetUsersQuery, useAddUserMutation } from './usersApiSlice';

const Register = () => {

	const [loading, setLoading] = useState(true);
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
	const {data: users, isLoading} = useGetUsersQuery(usere)
	const [addUser] = useAddUserMutation()

	const onAddUserSubmit = async () => {
		setLoading(true);
		try {
			await addUser({ firstName, lastName, email, password: "Test123"}).unwrap()
			setLoading(false);
            setFirstName('');
            setLastName('');
            setEmail('');
        }
        catch(error) {
            alert("Something Went Wrong!");
        };
	}

	return (
		<>
			<AddUser 
				onAddUserSubmit={onAddUserSubmit}
				firstName={firstName}
				lastName={lastName}
				email={email}
				loading={loading}
				setFirstName={setFirstName}
				setLastName={setLastName}
				setEmail={setEmail}
				setLoading={setLoading}
			>
			</AddUser>
			{!isLoading && <UsersList users={users}></UsersList>}
			
		</>
	);
	
}

export default Register;