import { useAuthContext } from "../Components/AuthContext"

export default function LoginPage() {
    const { state, loginWithpasword, logout } = useAuthContext()
    console.log(state)


    if (state === 1) {
        return (<>
            <h3>Estas logeado</h3>
            <button onClick={() => logout()} className='bg-red-500 text-white rounded-xl mt-2 p-2'>Cerrar Sesion
            </button>
        </>)
    }

    return (
        <>
            <h3>Bienvenido a la pagina</h3>
            <h3>Inicio de sesion</h3>
            
            <button onClick={() => loginWithpasword('anderson.com', '1234')} className='bg-blue-500 text-white rounded-xl mt-2 p-2'>Ingresar</button>
        </>
    )
}