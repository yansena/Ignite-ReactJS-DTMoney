import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from  'miragejs';

createServer({
  models: {
    transaction: Model,
  },
  
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance Website',
          type: 'deposit',
          category: 'Development',
          amount: 6000,
          createdAt: new Date('2022-04-12 20:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Home',
          amount: 1100,
          createdAt: new Date('2022-04-13 10:00:00'),
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('transactions', () => {
      return this.schema.all('transaction')
    })
    
    this.post('transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);