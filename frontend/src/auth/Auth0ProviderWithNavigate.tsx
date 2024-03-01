import { AppState, Auth0Provider, User } from "@auth0/auth0-react"
import { useCreateUserMutation } from "@/slices/myUserSlice"


interface Auth0ProviderWithNavigateProps {
    children :React.ReactNode
}

const Auth0ProviderWithNavigate = ({children}:Auth0ProviderWithNavigateProps) => {
  const [createUser,{}] = useCreateUserMutation()

    const domain = import.meta.env.VITE_AUTH0_DOMAIN
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID
    const redirectUri= import.meta.env.VITE_AUTH0_CALLBACK_URL

   

    if(!domain || !clientId || !redirectUri) {
        throw new Error("unable to initialize auth")
    }
    const onRedirectCallback = (appState?: AppState, user? :User)=> {
       if(user?.sub, user?.email) {
        const auth0Id = user.sub || ""
        createUser({auth0Id,email: user.email })
       }
    }
  return (
    <Auth0Provider domain= {domain} clientId= {clientId} authorizationParams={{redirect_uri: redirectUri}} onRedirectCallback={onRedirectCallback}> 
    {children}</Auth0Provider>
  )
}

export default Auth0ProviderWithNavigate