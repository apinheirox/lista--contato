import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import stores from './redux/stores';
import ContactList from './components/ContactList';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <Provider store={stores}>
      <Router>
        <GlobalStyles />
        <Route path="/" element={<ContactList />} />
      </Router>
    </Provider>
  );
};

export default App;