import Rotas from './routes';
import './style.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div className="app">
      <Rotas />
      <ToastContainer autoClose={2000}/>
    </div>
  );
}

export default App;