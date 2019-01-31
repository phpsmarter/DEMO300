import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
export default class ListExample extends Component {
  render() {
    return (
      <Container>
       
        <Content>
          <List>
            <ListItem>
              <Text>Page1</Text>
            </ListItem>
            <ListItem>
              <Text>Page2</Text>
            </ListItem>
            <ListItem>
              <Text>page3</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

