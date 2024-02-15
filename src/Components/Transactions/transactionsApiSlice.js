import { apiSlice } from "../App/api/apiSlice";

export const transactionsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getTransactions: builder.query({
            query: (id) => `/api/v1/accounts/${id}/transactions`,
            providesTags: ['Transaction']
        }),
        addTransaction: builder.mutation({
            query: ({id, ...details}) => ({
                url: `/api/v1/accounts/${id}/transactions`,
                method: 'POST',
                body: details
            }),
            invalidatesTags: ['Transaction', 'Account']
        }),
        addTransactionsfromFile: builder.mutation({
            query: ({id, bodyFormData}) => {
                return{
                    url: `/api/v1/accounts/${id}/uploadCSV`,
                    method: 'POST',
                    body: bodyFormData,
                    formData:true
                }
            },
            invalidatesTags: ['Transaction']
        }),
    })
})

export const {
    useGetTransactionsQuery,
    useAddTransactionMutation,
    useAddTransactionsfromFileMutation
} = transactionsApiSlice 