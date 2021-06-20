import GlobalStyle from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from './hooks/userContext';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <UserProvider>
          <Routes />
          <ToastContainer />
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
