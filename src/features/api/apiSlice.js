import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500" }),
  endpoints: (builder) => ({
    getfoods: builder.query({
      query: () => "/foods",
      transformResponse: (res) => res.reverse(),
      providesTags: ["Foods"],
    }),
    addFoods: builder.mutation({
      query: (food) => ({
        url: "/foods",
        method: "POST",
        body: food,
      }),
      invalidatesTags: ["Foods"],
    }),

    updateFoods: builder.mutation({
      query: (food) => ({
        url: `/foods/${food.id}`,
        method: "PATCH",
        body: food,
      }),
      invalidatesTags: ["Foods"],
    }),

    deleteFoods: builder.mutation({
      query: (body) => ({
        url: `/foods/${body.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Foods"],
    }),
  }),
});

export const {
  useGetfoodsQuery,
  useDeleteFoodsMutation,
  useAddFoodsMutation,
  useUpdateFoodsMutation,
} = apiSlice;
