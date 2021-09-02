import React from 'react';
import Container from '@material-ui/core/Container';
import './App.css';
import { Row, Col } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import Layout from './Layout';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import CustomerSupport from './CustomerSupport';
import About from './About';

import Main from './Main';

export default function App() {

  // const [menuData, setmenuData] = React.useState(MenuApi);
  // console.log(menuData);
  return (
    <div>
      <Container fixed>
        <Header />
        {/* <Layout menuData={menuData} /> */}
        <Main />
      </Container>
      <br></br><br></br><br></br>
      <Footer />
    </div>
  );
}