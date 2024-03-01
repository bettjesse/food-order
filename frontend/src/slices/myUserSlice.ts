import { apiSlice } from "./apiSlice";

type CreateUserRequest ={
    auth0Id: string
    email: string
}
type CreateUserResponse = {
    auth0Id: string;
    email: string;
    
    name?: string; 
    phoneNumber?: string;
    address?: string;
    city?: string;
    country?: string;
}

const myUserApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
  createUser: builder.mutation< CreateUserResponse,CreateUserRequest>({

    query:(data)=>({
        url: '/api/my/user', 
          method: 'POST',
          body: data,
        
    })
  })
    })
})

export const { useCreateUserMutation}= myUserApiSlice