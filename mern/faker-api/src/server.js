const express = require('express');
const { fake } = require('faker');
var faker = require('faker');
const app = express()

class User {
    constructor() {
        this._id = faker.datatype.number(999999);
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this._id = faker.datatype.number(999999);
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetName(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        };

    }
}
  app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
  })
  
  app.get('/api/users/new', (request, response) => {
    response.json(new User())
  })

  app.get('/api/companies/new', (request, response) => {
    response.json(new Company())
  })
  app.get('/api/user/company', (request, response) => {
    response.json([new User(), new Company()])
  })
  
const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)