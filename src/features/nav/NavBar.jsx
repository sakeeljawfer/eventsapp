import React from 'react';
import { Menu,Button,Container } from 'semantic-ui-react';

export default function NavBar(){
return(
    <Menu inverted fixed='top'>
        <Container>
            <Menu.Item header>
                <img src="/assets/logo.png" alt="logo" style={{marginLeft:'5em'}}/>   
                Re-events
            </Menu.Item>
            <Menu.Item>
                <Menu name='Events'/>
            </Menu.Item>
            <Menu.Item>
             <Button positive inverted content='Create Event'/>
            </Menu.Item>
            <Menu.Item position='right'>
                <Button basic inverted content='Login'/>
                <Button basic inverted content='Register'style={{marginLeft:'0.5em'}} />
            </Menu.Item>
            <Menu.Item>

            </Menu.Item>
      </Container>
    </Menu>
   
    
)
}