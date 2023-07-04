import { SessionProvider } from "next-auth/react";

const GetSesionProvider = ({children}:{children:React.ReactNode}) => {
    return ( 
        <SessionProvider>
            {children}
        </SessionProvider>
     );
}
 
export default GetSesionProvider;