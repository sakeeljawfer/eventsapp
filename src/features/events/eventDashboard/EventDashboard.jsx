import React from 'react';
import { Grid } from 'semantic-ui-react';

export default function EventDashboard(){
    return(
        <Grid>
            <Grid.Column width={10}>
                <h1>Left Column</h1>
            </Grid.Column>
            <Grid.Column width={6}>
                <h1>Right Column</h1>
            </Grid.Column>
        </Grid>
    )
}