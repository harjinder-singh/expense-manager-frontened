import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

import { useGetUserQuery } from './usersApiSlice';
import { selectCurrentUserEmail } from '../Auth/authSlice'
import { useEffect } from 'react';

const Users = () => {
	const email = useSelector(selectCurrentUserEmail)
	const {data: user, isLoading} = useGetUserQuery(email)
	const navigate = useNavigate()
	
	useEffect(() => {
		!isLoading &&
			navigate(`/users/${user.id}/accounts`)
	}, [isLoading, navigate, user])
	

	return (
		<>
			<h1>Loading...</h1>
		</>
	);
	
}

export default Users;