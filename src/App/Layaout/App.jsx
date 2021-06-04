import React,{Fragment} from 'react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';
import { Container } from 'semantic-ui-react';
export default function App() {
  return (
    /** <Container className='main'> the main is define from the css file */
    /**fragment is the nessesory one instead of this we can use <> empty earlier <div> is ennessery thing  */
    <Fragment>
   <NavBar/>
   <Container className='main'>
    <EventDashboard/>
   </Container>
    </Fragment>
  );
}

