import { QueryClientProvider } from '@tanstack/react-query';
import CharacterList from './components/CharacterList';
import { createQueryClient } from './lib/queryClient';
import './App.css';

const queryClient = createQueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <header className="app-header">
          <h1>Rick & Morty Characters</h1>
          <p className="subtitle">Explore the multiverse</p>
        </header>
        <main className="app-content">
          <CharacterList />
        </main>
      </div>
    </QueryClientProvider>
  );
}

export default App;

