import { baseApi } from "../../base/baseApi";

const allApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getDashboardStats: builder.query({
            query: () => ({
                url: '/dashboard-stats',
                method: 'GET',
            }),
            transformResponse: (response: any) => response.result,
        }),

        getServices: builder.query({
            query: () => ({
                url: '/services',
                method: 'GET',
            }),
            providesTags: ['Services'],
            transformResponse: (response: any) => response.result,
        }),
        createService: builder.mutation({
            query: (data: any) => ({
                url: '/services',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Services'],
            transformResponse: (response: any) => response.result,
        }),
        deleteService: builder.mutation({
            query: (id: number) => ({
                url: `/services/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Services'],
            transformResponse: (response: any) => response.result,
        }),
        getServiceById: builder.query({
            query: (id: string) => ({
                url: `/services/${id}`,
                method: 'GET',
            }),
            providesTags: ['Services'],
            transformResponse: (response: any) => response.result,
        }),
        createBanner: builder.mutation({
            query: (data: any) => ({
                url: '/banners',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Banners'],
            transformResponse: (response: any) => response.result,
        }),
        deleteBanner: builder.mutation({
            query: (id: number) => ({
                url: `/banners/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Banners'],
            transformResponse: (response: any) => response.result,
        }),
        getBanners: builder.query({
            query: () => ({
                url: '/banners',
                method: 'GET',
            }),
            providesTags: ['Banners'],
            transformResponse: (response: any) => response.result,
        }),
        // gallary

        getGallery: builder.query({
            query: () => ({
                url: "/galleries",
                method: "GET",
            }),
            providesTags: ["Galleries"],
            transformResponse: (response: any) => response.result,
        }),
        createGallery: builder.mutation({
            query: (data: any) => ({
                url: "/galleries",
                method: "POST",
                body: data, // FormData with image file
            }),
            invalidatesTags: ["Galleries"],
            transformResponse: (response: any) => response.result,
        }),
        deleteGallery: builder.mutation({
            query: (id: number) => ({
                url: `/galleries/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Galleries"],
            transformResponse: (response: any) => response.result,
        }),
        // faq
        getFAQs: builder.query({
            query: () => ({
                url: "/faqs",
                method: "GET",
            }),
            providesTags: ["FAQs"],
            transformResponse: (response: any) => response.result,
        }),
        createFAQ: builder.mutation({
            query: (data: any) => ({
                url: "/faqs",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["FAQs"],
            transformResponse: (response: any) => response.result,
        }),
        deleteFAQ: builder.mutation({
            query: (id: string) => ({
                url: `/faqs/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["FAQs"],
            transformResponse: (response: any) => response.result,
        }),
        // theme
        getTheme: builder.query({
            query: () => ({
                url: "/themes",
                method: "GET",
            }),
           
            transformResponse: (response: any) => response.result,
        }),
        createTheme: builder.mutation({
            query: (data: any) => ({
                url: "/themes",
                method: "POST",
                body: data,
            }),
            transformResponse: (response: any) => response.result,
        }),


    })
})

export const { useGetDashboardStatsQuery,
    useCreateServiceMutation,
    useDeleteServiceMutation,
    useGetServicesQuery,
    useCreateBannerMutation,
    useGetBannersQuery,
    useGetServiceByIdQuery,
    useDeleteBannerMutation,
    useCreateGalleryMutation,
    useDeleteGalleryMutation,
    useGetGalleryQuery,
    // faq
    useGetFAQsQuery,
    useCreateFAQMutation,
    useDeleteFAQMutation,
    // theme
    useGetThemeQuery,
    useCreateThemeMutation,
     } = allApi