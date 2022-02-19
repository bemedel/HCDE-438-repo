import './App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <header className="header">
        <span className="title">Why GlobalEd?</span>
        <span className="caption">
          With Website., it's easy to be a great teacher. Whether you use the Website. web app,
          or even print at home, Website. Resources and materials can always be there when you
          need them. Interactive modular training, 1,000+ Website. Tips, and the thinking behind 
          activities, are right at your fingertips!
        </span>
      </header>
      <div className="cards">
          <Card style={{ width: '18rem', margin:'.5rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem', margin:'.5rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem', margin:'.5rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
      </div>
      <footer>
        2022 All rights reserved
      </footer>
    </div>
  );
}

export default App;
