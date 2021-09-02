import React from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import CardDetail from './CardDetail';

import './App.css';

function Layout({ menuData }) {

  return (
    <>
      <center><h1 className="topheading">What are you Shopping For Today</h1></center>
      <CardGroup>


        {menuData.map((curElement) => {
          return (
            <>

              <Card key={curElement.id} ClassName="Cardhead">

                <button onClick={CardDetail} >{curElement.name}</button>
                <button ><Card.Img variant="top" src={curElement.image} /> </button >
                {/* <Router>
           <Link to={`/${curElement.name}`}>
              <button >{curElement.name}</button>
              <button ><Card.Img variant="top" src={curElement.image} /> </button >
          </Link>


          <Route
                    path="/:id"
                    children={<CardDetail id={curElement.id} name={curElement.name} />}
                  />



         </Router> */}


              </Card>

            </>


          )
        })}
        {/* <Card.Title>{curElement.name}</Card.Title> */}
        {/* <Card.Title>{curElement.category}</Card.Title> */}
        {/* <CardGroup>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>

</CardGroup> */}


        {/* <Row xs={1} md={3} className="g-4">
  {Array.from({ length: 10 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row> */}



      </CardGroup>

    </>
  )
}

export default Layout;