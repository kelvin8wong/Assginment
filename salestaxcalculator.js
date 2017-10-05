var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


function calculateSalesTax(salesData, taxRates) {
  var results = {};

  for (var i = 0; i < salesData.length; i++) {
    var business = salesData[i];

    var companyName = business.name;

    var taxRate = taxRates[business.province];

    var totalSales = business.sales.reduce(function(a, b) { return a + b}, 0);


    var totalTax = taxRate * totalSales;

    if(results[companyName]) {
      // console.log(results[companyName])
      results[companyName].totalTaxes += totalTax;
      results[companyName].totalSales += totalSales;
      // modify existing record
    } else {
      results[companyName] = {
        totalSales: totalSales,
        totalTaxes: totalTax
      }
    }


  }


 return results;
}

console.log(calculateSalesTax(companySalesData, salesTaxRates))