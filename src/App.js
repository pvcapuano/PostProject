import Layout from './components/Layout';
import GlobalStyles from './styles/GlobalStyles';
import { PostContextProvider } from './contexts/PostContext';

function App() {
  return (
    <>
    <PostContextProvider>
    <Layout />
    </PostContextProvider>
    <GlobalStyles />

   </>
  );
}

export default App;
