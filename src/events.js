const express = require('express');
//const { pid } = require('process');


function createRouter(db) {
  const router = express.Router();

  router.use(express.urlencoded({extended: true}));
  router.use(express.json())

  
//  const owner = '';

  // the routes are defined here

  router.get('/event', function (req, res, next) {
    db.query(
      'SELECT * from seller ',
      
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });

  router.get('/products', function (req, res, next) {
    db.query(
      'SELECT * from product ',
      
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });




  router.get('/product', function (req, res, next) {
    var querypm = req.query;
    var pid=parseInt(querypm.product_id);
    db.query(
      "SELECT * from product Inner Join Seller on product.seller_id=seller.seller_id where Product_id =  '" + pid + "'",
      
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });



  router.get('/products', function (req, res, next) {
    var querypm = req.query;
    var cat= querypm.category;
    var dist=querypm.district;
    db.query(
      "SELECT * from product Inner Join Seller on product.seller_id=seller.seller_id where Product_category =  '" +cat+ "'",
      
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });

  router.post('/addproduct', function (req, res) {
    var querypm = JSON.parse(JSON.stringify(req.body));
    var name= querypm.name;
    var dist=querypm.district;
    db.query(
      "INSERT into test (name,descr)values ('"+name+"','"+name+"');  ",
      
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });

  router.post('/signin', function (req, res) {
    var querypm = JSON.parse(JSON.stringify(req.body));
    var username= querypm.username;
    var password=querypm.password;
    db.query(
      "select buyer_id from buyer where buyer_username='"+username+"' and buyer_password ='"+password+"';  ",
      
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });

  
  

  router.post('/test', function(req, res){
    var querypm = JSON.parse(JSON.stringify(req.body));
    var name= querypm.name;
    
    console.log(name);      // your JSON
    res.status(200).json(name);    // echo the result back
  });

  return router;
}



module.exports = createRouter;