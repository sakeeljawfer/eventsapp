import React from 'react';
import { Segment,Item, Icon, List,Button } from 'semantic-ui-react';
import EventListAttende from './EventListAttande'
export default function EventListItem(){
    return(
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src='/assets/user.png'/>
                        <Item.Content>
                            <Item.Header content='Event Title'/>
                                <Item.Description>
                                    Hosted by Bob
                                </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock'/>date
                    <Icon name='marker'/>Venue 
                </span>
            </Segment >
            <Segment secondary>
                <List horizontal>
                    <EventListAttende/>
                    <EventListAttende/>
                    <EventListAttende/>
                    <EventListAttende/>
                </List>
            </Segment>
            <Segment clearing>
                <span>
                    Description of event
                </span>
                <Button color='teal' floated='right' content='View'/>
            </Segment>
        </Segment.Group>
       
    )
}