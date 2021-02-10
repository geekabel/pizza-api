'use strict';

const Api  = require('claudia-api-builder');
const AWS = require('aws-sdk');

const api  =  new Api();



  api.get('/pizzas', () => {
    return [
      'Capricciosa',
      'Quattro Formaggi',
      'Napoletana',
      'Margherita'
    ]
  })
  
module.exports = api
