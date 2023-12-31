import { useState, useEffect } from 'react';
import axios from 'axios';

import AddUser from './AddUser';
import UsersList from './UsersList';

const Users = () => {

	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

	useEffect(() => {
		getUsers();
	}, []);

	const getUsers = () => {
		axios.get('http://localhost:8080/api/v1/users')
		.then((response) => {
			setUsers(response.data);
		})
		.catch((error) => {
			console.log(error);
		});
	}

	const onAddUserSubmit = () => {
		setLoading(true);
        axios.post(`http://localhost:8080/api/v1/users`, {
            firstName,  
            lastName,
            email
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            setLoading(false);
            setFirstName('');
            setLastName('');
            setEmail('');
			getUsers();
        })
        .catch((error) => {
            alert("Something Went Wrong!");
        });
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
			<UsersList users={users}></UsersList>
		</>
	);
	
}

export default Users;