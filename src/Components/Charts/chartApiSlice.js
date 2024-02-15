import { apiSlice } from "../App/api/apiSlice";

export const chartApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getTransactionsForChart: builder.query({
            query: (id) => `/api/v1/accounts/${id}/transactionsForChart`,
            providesTags: ['Chart']
        })
    })
})

export const {
    useGetTransactionsForChartQuery
} = chartApiSlice 