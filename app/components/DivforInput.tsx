import InputForm from "./InputForm";
import GetSesionProvider from "./SessionProvider";

const DivForInput = () => {
    return ( 
        <>
        <GetSesionProvider>
            <InputForm/>
        </GetSesionProvider>
        </>
     );
}
 
export default DivForInput;