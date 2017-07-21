
import React from 'react';
import { Segment } from 'semantic-ui-react';
import MailViewListEntry from './MailViewListEntry.jsx';
import { Table, Grid } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import axios from 'axios';

const colors = [
  'red', 'orange', 'yellow', 'olive', 'green', 'teal',
  'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black'
]; 
var currentColor = -1;


class MailViewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'messages',
      messages: [],
      current: ''
    };
  }
  
<<<<<<< HEAD
  componentWillReceiveProps({ messages }) {
    this.setState({messages: messages});
=======
  componentWillMount() {
    axios.get('/api/message')
    .then (response => {
      this.setState({
        messages: response.data
      })
      console.log(this.state.messages);
    })
>>>>>>> mail read view pulls thread data from DB
  }

  handleMessageClick(e, messageId) {
    axios.put(`/api/messages/${messageId}/read/null`).then(response => {
      this.setState({
        view: 'read'
      });
    });
  }

  render() {
    const { messages, view } = this.state;
  
    return (
      <div>
        { view === 'read' && (
        <Redirect from={'/'} push to={{
          pathname: '/message'
        }}/>
        )}
        {messages.length === 0 ? (
          <span>Loading your messages, please wait.</span>
          ) : (
          <Table singleLine fixed>
            <Table.Body>
              {messages.map((message, index) => {
                currentColor++;
                if (currentColor > messages.length) { currentColor = -1; }
                return <MailViewListEntry key={index} message={message} messageId={message.message_id} 
                  onClick={this.handleMessageClick.bind(this)} />;
              })}
            </Table.Body> 
          </Table>
          )
        }
      </div>
    );

  }
}

export default MailViewList;