import { AuthProvider } from './Components/AuthContext';
import LoginPage from "./Components/LoginPage";
import Calculatora from './Components/Calculadora';


function App() {
  return (
    <AuthProvider>
       <div className='flex flex-col items-center h-svh'>
        <h3> Bievenidos </h3>
        
        <LoginPage />
        <Calculatora />
        
      </div>
    </AuthProvider>
  )
}

export default App

