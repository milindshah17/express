const express = require('express');
const { pid } = require('process');

function createRouter(db) {
  const router = express.Router();
  const owner = '';

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



  

  return router;
}

module.exports = createRouter;