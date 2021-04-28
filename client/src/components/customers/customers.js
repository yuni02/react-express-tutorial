  
import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: [],
      username:''
    };
  }

  componentDidMount() {
    fetch('/api/customers')
      .then(res => res.json())
      .then(customers => this.setState({customers}, () => console.log('Customers fetched...', customers)));

      fetch('/user')
      .then(res => res.json())
      .then(username => this.setState({username}, () => console.log('Customers fetched...', username)));
  }

  
 


  render() {
    return (
      <div>
        <h2>Customers</h2>
        <ul>
        {this.state.customers.map(customer => 
          <li key={customer.id}>{customer.firstName} {customer.lastName}</li>
        )}
        </ul>
        {this.state.username}
      </div>
    );
  }
}

export default Customers;