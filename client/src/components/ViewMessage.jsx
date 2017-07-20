import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import { Message, Divider, Table, Icon, Label } from 'semantic-ui-react';
import axios from 'axios';
import MailViewListEntry from './MailViewListEntry.jsx';

class ViewMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      threads: [],
      messageId: this.props.location.state.message_id,
      threadId: his.props.location.state.message_id,
      currentMessage: {}
    }
    console.log('props in the view message', this.props.location.state);
  }

  componentWillMount() {
    // getting one email data from DB
    var messageId = this.state.messageId;
    axios.get('/api/message/'+ this.state.messageId)
    .then (response => {
      this.setState({
        currentMessage: response.data
      })
    })
    .then (
      axios.get(`/api/thread/${this.state.threadId}`)
      .then (response => {
        this.setState({
          threads: response.data
        })
      })
    )

    // getting thread data from Nylas
    const app = this;
    const authString = 'Bearer ' + window.token;
    axios.get('https://api.nylas.com/messages', {
      headers: { Authorization: authString }
    }).then(response => {
      const retrievedMessages = response.data.slice(0, 21).map(message => {
        return {
          from: message.from,
          subject: message.subject,
          snippet: message.snippet,
          unread: message.unread,
          message_id: message.id,
          body: message.body,
          message_id: message.message_id,
          thread_id: message.thread_id
        }
      });
      app.setState({
        threads: retrievedMessages
      })
    });

  }

  handleMessageClick() {
    console.log("not yet built.");
  }

  render() {
    var display = null;

    // TODO: have condition if there is no thread
    // TODO: change the names according to the Nylas data structure & the circle
    if (this.state.threads.length > 1) {
      display = this.state.threads.map((message, index) => {
        return <MailViewListEntry key={index} message={message} messageId={message.message_id} onClick={this.handleMessageClick.bind(this)} />;
      })
    };

    return (
        <div>
          <Divider hidden />
          <Divider hidden />

          <Table compact singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan='3'>{this.state.currentMessage.subject}</Table.HeaderCell>
                <Table.HeaderCell colSpan='1' textAlign='right'> <Icon name="reply" /><Icon name="trash outline" /><Icon name="ellipsis vertical" /></Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
            <Table.Row>
            <Table.Cell colSpan='3'>
            {this.state.currentMessage.body}
            </Table.Cell>
            </Table.Row>
            {display}
            </Table.Body>
            </Table>
            </div>
          );
        };
      };

      export default ViewMessage;