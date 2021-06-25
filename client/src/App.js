import './App.css';
//import AuthorDetails from './components/AuthorDetails';
import AllAuthors from './components/AllAuthors';
import {Router} from '@reach/router';
import AddAuthor from './components/AddAuthor';
import EditAuthor from './components/EditAuthor';
import {Container} from 'react-bootstrap'


function App() {
  return (
    <Container>
     <h1>Favorate Author</h1>
     <Router>
       <AllAuthors path='/'/>
       <AddAuthor path='/new'/>
       <EditAuthor path='/:id/edit'/>
      </Router> 

    </Container>
  );
}

export default App;
