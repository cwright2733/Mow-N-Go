import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

class Home extends Component {

    render() {
        return (
            <Container maxWidth="sm">
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <Card title="Mow-N-Go">
                            <h1 className="text-center">
                                <strong>Mow-N-Go</strong>
                            </h1>
                            <h2 className="text-center">Request landscape services from your neighbors!</h2>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        );
    }
};

export default Home;
