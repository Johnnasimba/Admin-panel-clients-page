import './App.css';

import Header from './components/header/header.component';
import ClientList from './components/clients-list/client-list.component';
import ClientSection from './components/client-section/client-section.component';

function App() {
  return (
    <div className="admin-panel-client-page">
      <Header />
      <div className="client-container">
            <ClientList className="client-list" />
            <ClientSection className="client-section" />
      </div>
    </div>
  );
}

export default App;
