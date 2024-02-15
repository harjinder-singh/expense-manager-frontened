import { apiSlice } from "../App/api/apiSlice";

export const accountsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAccounts: builder.query({
            query: (id) => `/api/v1/users/${id}/accounts`,
            providesTags: ['Account']
        }),
        addAccount: builder.mutation({
            query: ({id, ...details}) => ({
                url: `/api/v1/users/${id}/accounts`,
                method: 'POST',
                body: details
            }),
            invalidatesTags: ['Account']
        })
    })
})

export const {
    useGetAccountsQuery,
    useAddAccountMutation
} = accountsApiSlice 