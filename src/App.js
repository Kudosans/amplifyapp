import logo from './logo.svg';
import './App.css';

import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';

import awsconfig from './aws-exports';

import "@aws-amplify/ui-react/styles.css";
import { NavBar, SideBar, studioTheme } from "./ui-components";

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
    </div>
  );
}

export default App;
