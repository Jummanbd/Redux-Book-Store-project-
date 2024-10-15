import { apiSlice } from "../api/apiSlice";
import { userFeatured } from "./bookSlice";


export const booklistApi = apiSlice.injectEndpoints({
    endpoints:(builder) => ({
        getBookslist: builder.query({
            query:() => "/books",
            providesTags:["Books"]
        }),
        getBooklistId:builder.query({
          query: (id) => `/books/${id}`,
          providesTags: ["Books"],
         }),
        addNewBook:builder.mutation({
            query:(data) => ({
                url: "/books",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Books"],
           //optimistic 
    
            async onQueryStarted (arg, {queryFulfilled, dispatch}) {
              const pathResult = dispatch(
                apiSlice.util.updateQueryData("getBookslist", undefined, (draft) => {
                  draft.unshift({ id: crypto.randomUUID(), ...arg });
                 
                //  draft.push({...arg})
                   
                })
            )
            try {
             await queryFulfilled;
     
              } catch {
                pathResult.undo();
              }
                
            }
        }),

        bookUpdate:builder.mutation({
          query: ({ id,...data}) => ({
              url: `/books/${id}`,
              method: "PATCH",
              body: data,
          }),
    
          invalidatesTags: ["Books"],
          async onQueryStarted({id, ...data}, { queryFulfilled, dispatch }) {
              //optimistic cache update start   
       
              
           const pathResult = dispatch(
              
                  apiSlice.util.updateQueryData("getBooklistId", undefined, (draft) => {
                    
                      const taskIndex = draft.findIndex((el) => el.id === id);
                      draft[taskIndex] = { ...draft[taskIndex], ...data };
    

                  },
 
                )
            )
               
              try {
                 await queryFulfilled;
                 dispatch(
                  userFeatured(false)
                 )
 
                } catch {
                  pathResult.undo();
                }
    
              
              
              //optimistic cache update end
    
          },
        }),
        itemDelete:builder.mutation({
          query: ({ id,...data}) => ({
              url: `/books/${id}`,
              method: "DELETE",
              
          }),
          invalidatesTags: ["Books"],
          async onQueryStarted(arg, { queryFulfilled, dispatch }) {
              //optimistic cache update start
       
           const pathResult = dispatch(
            apiSlice.util.updateQueryData("getBookslist", undefined, (draft) => {
                
              
              
                //const draftConversation =  draft.find(c => c);
                
                const bookIndex = draft.find((el) => el.id === arg.id);
                draft.splice(bookIndex, 1);
                        
                              
                              
                  //draftConversation.status = arg.status;
                
            })
              )
              try {
                  await queryFulfilled;
                } catch {
                  pathResult.undo();
                }
    
              //optimistic cache update end
    
          },
        }),
    })
});

export const {useGetBookslistQuery, useAddNewBookMutation, useBookUpdateMutation, useGetBooklistIdQuery, useItemDeleteMutation} = booklistApi;