import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-key': 'f9e41bd216msh56379aa384599fep1d67c1jsn1e36b529b5ee',
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/coins')
        })
    })
})

export const {
    useGetCryptosQuery,
} = cryptoApi;