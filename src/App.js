/* eslint-env browser */
import { Route, Routes } from 'react-router';
import { HashRouter } from 'react-router-dom';

import { CharitiesPage } from './CharitiesPage';
import { DogsJacquesPage } from './DogsJacquesPage';
import { DogsRescueFostersPage } from './DogsRescueFostersPage';
import { HomePage } from './HomePage';
import { ProgrammingWebdevPage } from './ProgrammingWebdevPage';

import './App.css';

function ResourcesPage() {
  return (
    <div class="container">
      <h1>Resources</h1>
    </div>
  );
}

function App() {
  return (
    <HashRouter hashType="slash">
      <Routes>
        <Route exact path="/dogs/rescue-foster/" element={<DogsRescueFostersPage />} />
        <Route exact path="/dogs/jacques/" element={<DogsJacquesPage />} />
        <Route exact path="/dogs/" element={<HomePage />} />
        <Route exact path="/resources/" element={<ResourcesPage />} />
        <Route exact path="/resources/cybersecurity/" element={<ResourcesPage />} />
        <Route exact path="/resources/cybersecurity/everyone/" element={<ResourcesPage />} />
        <Route exact path="/resources/cybersecurity/developers/" element={<ResourcesPage />} />
        <Route exact path="/resources/cybersecurity/businesses/" element={<ResourcesPage />} />
        <Route exact path="/resources/programming/" element={<ResourcesPage />} />
        <Route exact path="/resources/programming/webdev/" element={<ProgrammingWebdevPage />} />
        <Route exact path="/resources/economics/" element={<ResourcesPage />} />
        <Route exact path="/resources/nonprofits/" element={<ResourcesPage />} />
        <Route exact path="/resources/charities/" element={<CharitiesPage />} />
        <Route exact path="/" element={<HomePage />} />
        <Route path="*" element={(
          <div>
            <h1>404 Not Found</h1>
          </div>
        )} />
      </Routes>
    </HashRouter>
  )
}

export default App;
