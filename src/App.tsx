import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';

import { queryClient, persister } from './services';
import { ProductsPage } from './pages';
import { Layout } from './components';

function App() {
  return (
    <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
      <Layout>
        <ProductsPage />
      </Layout>
    </PersistQueryClientProvider>
  );
}

export default App;
