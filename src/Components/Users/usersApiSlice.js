import { apiSlice } from "../App/api/apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUser: builder.query({
            query: (email) => `/api/v1/users/${email}`
        }),
        addUser: builder.mutation({
            query: userData => ({
                url: '/api/v1/auth/register',
                method: 'POST',
                body: { ...userData }
            })
        }),
    })
})

export const {
    useGetUserQuery,
    useAddUserMutation
} = usersApiSlice 