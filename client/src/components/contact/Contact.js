import React, { Component } from 'react';
import { Header, Grid, Form, Button, Segment, Container } from 'semantic-ui-react';

class Contact extends Component {
  state = { email: '', message: '' }
  
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push('/');
  }
  
  render() {
    const { email, message } = this.state;
    return(
      <Container>
        <br />
        <br />
        <center>
          <Header as='h1'>Contact Us</Header>
          <Header as='h4'>Shoot Us a Message or Drop By!</Header>
        </center>
        <br />
        <br />
        <Grid stackable columns={2}>
          <Grid.Row>
            <Grid.Column>
              <iframe title='slcc' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.116395185824!2d-111.9452490842516!3d40.67140427933635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f534b510eaa7%3A0xd379761087db0b12!2sSalt%20Lake%20Community%20College!5e0!3m2!1sen!2sus!4v1574472505444!5m2!1sen!2sus" width="500" height="350" frameborder="0"></iframe>
            </Grid.Column>
            <Grid.Column>
              <Form onSubmit={this.handleSubmit}>
                <Form.Input
                  label="Email"
                  autoFocus
                  required         
                  name='email'
                  value={email}
                  placeholder='Email'
                  onChange={this.handleChange}
                />
                <Form.TextArea
                  label="Message"
                  required
                  name='message'
                  value={message}
                  placeholder='Message'
                  onChange={this.handleChange}
                />
                <Segment textAlign='center' basic>
                  <Button className="btn btn-default" type='submit'>Submit</Button>
                </Segment>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <br />
        <br />
      </Container>
    )
  }
}

export default Contact;