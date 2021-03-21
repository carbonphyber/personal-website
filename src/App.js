/* eslint-env browser */
import { Route, Switch } from 'react-router';
import { HashRouter } from 'react-router-dom';

import { DogsJacquesPage } from './DogsJacquesPage';
import { HomePage } from './HomePage';
import { DogsRescueFostersPage } from './DogsRescueFostersPage';
import { ProgrammingWebdevPage } from './ProgrammingWebdevPage';

import './App.css';

function ResourcesPage() {
  return (
    <div>
      <h1>Resources</h1>
    </div>
  );
}

function App() {
  return (
    <HashRouter hashType="slash">
      <Switch>
        <Route exact path="/dogs/rescue-foster/">
          <DogsRescueFostersPage />
        </Route>
        <Route exact path="/dogs/jacques/">
          <DogsJacquesPage />
        </Route>
        <Route exact path="/dogs/">
          <HomePage />
        </Route>
        <Route exact path="/resources/">
          <ResourcesPage />
        </Route>
        <Route exact path="/resources/cybersecurity/">
          <ResourcesPage />
        </Route>
        <Route exact path="/resources/cybersecurity/everyone/">
          <ResourcesPage />
        </Route>
        <Route exact path="/resources/cybersecurity/developers/">
          <ResourcesPage />
        </Route>
        <Route exact path="/resources/cybersecurity/businesses/">
          <ResourcesPage />
        </Route>
        <Route exact path="/resources/programming/">
          <ResourcesPage />
        </Route>
        <Route exact path="/resources/programming/webdev/">
          <ProgrammingWebdevPage />
        </Route>
        <Route exact path="/resources/economics/">
          <ResourcesPage />
        </Route>
        <Route exact path="/resources/nonprofits/">
          <ResourcesPage />
        </Route>
        <Route exact path="/resources/charities/">
          <ResourcesPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="*">
          <div>
            <h1>404 Not Found</h1>
          </div>
        </Route>
      </Switch>
    </HashRouter>
  )
}

export default App;
