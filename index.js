'use strict';

var loyalty = require('./data/transaction.json');
var order = require('./data/order.json');
var totalAmountTransactions = 0;
var totalPoints = 0;
var totalItems = 0;
var points = 0;

for(var i=0; i<loyalty.length; i++){

    totalAmountTransactions = totalAmountTransactions+loyalty[i].total_amount_transaction;

    if (loyalty[i].total_amount_transaction > 40000000) {
        points = (loyalty[i].total_amount_transaction / 10000) * 1.4;
    } else if (loyalty[i].total_amount_transaction > 30000000) {
        points = (loyalty[i].total_amount_transaction / 10000) * 1.3;
    } else if (loyalty[i].total_amount_transaction > 20000000) {
        points = (loyalty[i].total_amount_transaction / 10000) * 1.2;
    } else if (loyalty[i].total_amount_transaction > 10000000) {
        points = (loyalty[i].total_amount_transaction / 10000) * 1.1;
    } else if (loyalty[i].total_amount_transaction > 1000000) {
        points = (loyalty[i].total_amount_transaction / 10000) * 1.05;
    } else {
        points = (loyalty[i].total_amount_transaction / 10000) * 1;
    }

    totalPoints = totalPoints+points;
}

for(var h=0; h<order.length; h++){
    for(var k=0; k<order[h].products.length; k++){
        totalItems = totalItems+order[h].products[k].qty;
    }
}

const result = '{'
       +'"totalAmountTransactions" : '+ totalAmountTransactions + ' , '
       +'"totalPoints"  : '+ totalPoints + ' , '
       +'"totalItems" : '+ totalItems
       +'}';

console.log(JSON.parse(result));
