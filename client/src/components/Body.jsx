import React from 'react';
import SearchBar from './SearchBar.jsx';
import RightMenu from './RightMenu.jsx';
import { Divider, Segment, } from 'semantic-ui-react';
import MailViewList from './MailViewList.jsx';
import { Link } from 'react-router-dom';
import axios from 'axios';

import parseMessages from './utils/messagesParser';

class Body extends React.Component {
  constructor(props) {
    console.log('Inside Body.jsx constructor: ', props.location);
    super(props);
    this.state = { 
      messages: [],
      visible: true
    };

  }

  componentWillMount() {
    const app = this;
    let now = Date.now();
    now = new Date(now);
    const today = now.getMonth() + '/' + now.getDate() + '/' + ('' + now.getFullYear()).substr(-2);

    axios.get('/api/messages/').then(response => {
      const retrievedMessages = parseMessages(response.data, today);
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
          message_id: message.id
        };
      });
      app.setState({
        messages: retrievedMessages
      });
    });
  }

  handleSearch(searchQuery) {
    let now = Date.now();
    now = new Date(now);
    const today = now.getMonth() + '/' + now.getDate() + '/' + ('' + now.getFullYear()).substr(-2);

    axios.post('api/search', searchQuery) 
      .then(response => {
        const searchedMessages = parseMessages(response.data, today);
        this.setState({messages: searchedMessages});
      })
      .catch(err => { console.log('Error searching emails ', err); });
  }

  render() {
    return (
      <div>
      <Divider hidden />
      <Divider hidden />
        <Segment.Group>
         <Segment>
           <SearchBar onSearch={this.handleSearch.bind(this)}/>
          </Segment>
            <MailViewList messages={this.state.messages}/>
        </Segment.Group>
      </div>
    );
  }
}

export default Body;