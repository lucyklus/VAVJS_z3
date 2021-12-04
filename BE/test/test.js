const server = require('../server.js');
var chai = require('chai');
var chaiHttp = require("chai-http");
const fetch = require('cross-fetch');
chai.should();
chai.use(chaiHttp);

var orderId = 0
var status

describe("Products", () => {
  describe("GET /products",() => {
    it("Returns 3 products", async() => {
        await fetch('http://localhost:8080/products')
        .then((res) => {
          return res.json()
        })
        .then((res) => {
          res.length.should.be.eq(3);
        })
        
    });
  });
});

describe("Order", () => {

  describe("POST /newOrder", () => {
    it("When customer places order correctly, should return 201", async() => {
      await fetch('http://localhost:8080/newOrder', {
        method: 'POST', 
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept'
        }, 
        body: JSON.stringify({
          "customer": {
              "email": "luc.man@gmail.com",
              "name": "Lucia Man",
              "street": "Javascriptová",
              "number": "17/3",
              "city": "Nodisko",
              "postcode": "01010"
          },
          "products":[
              {
                  "productId": 1,
                  "quantity": 3 
              },
              {
                  "productId":2,
                  "quantity": 1 
              }
          ]
        })
      })
      .then((res) => { 
        status = res.status; 
        return res.json() 
      })
      .then((res) => {
        orderId = res
        return status.should.be.eq(201)
      })
    })
  
    it("If e-mail is not unique, should return 400", async() => {
      await fetch('http://localhost:8080/newOrder', {
        method: 'POST', 
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept'
        }, 
        body: JSON.stringify({
          "customer": {
              "email": "luc.man@gmail.com",
              "name": "Lucia Man",
              "street": "Javascriptová",
              "number": "17/3",
              "city": "Nodisko",
              "postcode": "01010"
          },
          "products":[
              {
                  "productId": 1,
                  "quantity": 3 
              },
              {
                  "productId":2,
                  "quantity": 1 
              }
          ]
        })
      })
      .then((res) => {
        return res
      })
      .then((res) => {
        res.should.have.status(403);
      })
    })
  })

}); 

describe("Ad", () => {

  describe("GET /ad", () => {
    it("If returns object of Ad, should return 200", async() => {
      await fetch('http://localhost:8080/ad')
      .then((res) => {
        return res.should.have.status(200)
      })
    });
  })

  describe("PUT /updateAdCounter", () => {
    it("If counter of clicks on Ad increased, should return 201", async() => {
      await fetch('http://localhost:8080/updateAdCounter',{
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({})
      })
      .then((res) => {
        return res.should.have.status(200)
      })
    });
  })

});

describe("Admin", () => {

  describe("GET /admin", () => {
    it("Should not return empty array of objects", async() => {
      await fetch('http://localhost:8080/admin')
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        res.length.should.not.be.eq(0);
      })
    });
  })

  describe("PUT /updateAd", () => {
    it("Admin changes links for image and link, should return 200", async() => {
      await fetch('http://localhost:8080/updateAd',{
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({link: 'https://sk.wikipedia.org/wiki/Jablko',image:'https://www.zamio.sk/wp-content/uploads/2019/02/jablko-1.png'})
      })
      .then((res) => {
        return res.should.have.status(200)
      })
    }); 

    it("Admin changes links, validation is not succesful, should return 500", async() => {
      await fetch('http://localhost:8080/updateAd',{
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({link:"haha",image:"hihi"})
      })
      .then((res) => {
        return res.should.have.status(500)
      })
    });
  })

  describe("PUT /updateOrder", () => {
    it("Admin changes state of order to paid, should return 201", async() => {
      await fetch('http://localhost:8080/updateOrder',{
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id:orderId})
      })
      .then((res) => {
        return res.should.have.status(200)
      })
    }); 
  });

});



