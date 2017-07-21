<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom'; 
import { Message, Divider, Table, Icon } from 'semantic-ui-react';
import axios from 'axios';
import MailViewListEntry from './MailViewListEntry.jsx';

class ViewMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      threads: [],
      messageId: 'abcde12345',
      threadId: 'placeholder',
      currentMessage: {}
    }
  }

  componentWillMount() {
    var messageId = this.state.messageId;
    axios.get('/api/messages/'+ this.state.messageId)
    .then (response => {
      this.setState({
        currentMessage: response.data
      })
    })
  }

  render() {



    return (
        <div>
          <Divider hidden />
          <Divider hidden />

          <Table size='small' compact singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan='3'>{this.state.currentMessage.subject}</Table.HeaderCell>
                <Table.HeaderCell colSpan='1' textAlign='right'> <Icon name="reply" /><Icon name="trash outline" /><Icon name="ellipsis vertical" /></Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
            <Table.Row>
            <Table.Cell colSpan='4'>
            {this.state.currentMessage.body}
            </Table.Cell>
            </Table.Row>
            </Table.Body>
            </Table>
            </div>
          );
        };
      };
      
export default ViewMessage;
=======
=======
>>>>>>> merge conflict resolved
=======
>>>>>>> 1a3d5d53f04c3dac5e3fd66892c52d7df66ebdf3
import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import { Message, Divider, Table, Icon, Label } from 'semantic-ui-react';
<<<<<<< HEAD
=======
import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom'; 
import { Message, Divider, Table, Icon } from 'semantic-ui-react';
>>>>>>> new routes implemented
=======
>>>>>>> 1a3d5d53f04c3dac5e3fd66892c52d7df66ebdf3
import axios from 'axios';
import MailViewListEntry from './MailViewListEntry.jsx';

class ViewMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      threads: [],
      messageId: 'abcde12345',
      threadId: 'placeholder',
      currentMessage: {}
    }
  }

  componentWillMount() {
    var messageId = this.state.messageId;
<<<<<<< HEAD
<<<<<<< HEAD
    axios.get('/api/message/'+ this.state.messageId)
=======
    axios.get('/api/messages/'+ this.state.messageId)
>>>>>>> new routes implemented
=======
    axios.get('/api/message/'+ this.state.messageId)
>>>>>>> 1a3d5d53f04c3dac5e3fd66892c52d7df66ebdf3
    .then (response => {
      this.setState({
        currentMessage: response.data
      })
    })
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 1a3d5d53f04c3dac5e3fd66892c52d7df66ebdf3
    .then (
      axios.get(`/api/thread/${this.state.threadId}`)
      .then (response => {
        // var thread;
        // if (Array.isArray(response.data)) {
        //   thread = response.data;
        // } else {
        //   thread = [response.data];
        // }
        this.setState({
          threads: response.data
        })
      })
    )
  }

  handleMessageClick() {
    console.log("not yet built.");
  }

  render() {
    var display = null;
    console.log('thread in view', this.state.threads);

    // TODO: have condition if there is no thread
    // TODO: change the names according to the Nylas data structure & the circle
    if (this.state.threads.length > 1) {
      display = this.state.threads.map((message, index) => {
        return <MailViewListEntry key={index} message={message} messageId={message.message_id} onClick={this.handleMessageClick.bind(this)} />;
      })
    };
<<<<<<< HEAD
=======
  }

  render() {


>>>>>>> new routes implemented
=======
>>>>>>> 1a3d5d53f04c3dac5e3fd66892c52d7df66ebdf3

    return (
        <div>
          <Divider hidden />
          <Divider hidden />

<<<<<<< HEAD
<<<<<<< HEAD
          <Table compact singleLine>
=======
          <Table size='small' compact singleLine>
>>>>>>> new routes implemented
=======
          <Table compact singleLine>
>>>>>>> 1a3d5d53f04c3dac5e3fd66892c52d7df66ebdf3
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan='3'>{this.state.currentMessage.subject}</Table.HeaderCell>
                <Table.HeaderCell colSpan='1' textAlign='right'> <Icon name="reply" /><Icon name="trash outline" /><Icon name="ellipsis vertical" /></Table.HeaderCell>
              </Table.Row>
            </Table.Header>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> new routes implemented
=======
>>>>>>> 1a3d5d53f04c3dac5e3fd66892c52d7df66ebdf3
            <Table.Body>
            <Table.Row>
            <Table.Cell colSpan='4'>
            {this.state.currentMessage.body}
            </Table.Cell>
            </Table.Row>
<<<<<<< HEAD
<<<<<<< HEAD
            {display}
=======
>>>>>>> new routes implemented
=======
            {display}
>>>>>>> 1a3d5d53f04c3dac5e3fd66892c52d7df66ebdf3
            </Table.Body>
            </Table>
            </div>
          );
        };
      };
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 1a3d5d53f04c3dac5e3fd66892c52d7df66ebdf3

      export default ViewMessage;

      // <Table.Row>
      // <Table.Cell width="1">
      //   <Label circular >a</Label>
      //   </Table.Cell>
      //   <Table.Cell width="3">{'     ' + this.state.currentMessage.from}</Table.Cell>
      // <Table.Cell style={{fontWeight: 'bold'}}>{this.state.currentMessage.subject}</Table.Cell>
      // <Table.Cell>{this.state.currentMessage.snippet}</Table.Cell>
      // </Table.Row>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> mail read view pulls thread data from DB
=======
>>>>>>> merge conflict resolved
=======
      
export default ViewMessage;
>>>>>>> new routes implemented
=======
>>>>>>> 1a3d5d53f04c3dac5e3fd66892c52d7df66ebdf3
