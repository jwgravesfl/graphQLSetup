import React, { Component } from "react"
import { Accounts } from "meteor/accounts-base"
import { withApollo } from "react-apollo"

const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = 'AIXvlOR6ng3V0LTUhKkA5nvkZy4nSatDiEndKnanIcmLz2GuRcF5rsjXfEx6e43C3y8EJGugr1TSTBR0Nl-PLXfxM1IW-BtWAkf-h9NjUKLIt7RuOxl0ms5qSBR3WnYx';

const searchRequest = {
  term:'Wal-mart',
  location: 'Tampa'
};

const client = yelp.client(apiKey);

client.search(searchRequest).then(response => {
  const firstResult = response.jsonBody.businesses[0];
  const prettyJson = JSON.stringify(firstResult, null, 4);
 
  console.log(prettyJson);
}).catch(e => {
  console.log(e);
});

export default class Yelp extends Component {
  login = e => {
    e.preventDefault()
    Meteor.loginWithPassword(this.email.value, this.password.value, error => {
      console.log(error)
      if (!error) {
        this.props.client.resetStore()
      }
    })
  }

  render() {
    return (
      <div>Yelp</div>
      
    )
  }
}
