import { QueryClient, QueryClientProvider } from 'react-query';
import Users from './components/Users';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>ユーザー情報</h1>
      <Users />
    </QueryClientProvider>
  );
};

export default App;
