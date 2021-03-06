
test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One ollar should be 106.6 yen", function(){
    
    const { fromDollarToYen } = require('./app.js')

    const yen = fromDollarToYen(3)

    const expected = 3 * 106.6; 
    
     expect(fromDollarToYen(3)).toBe(319.79999999999995); 
})

test("One yen should be 0.063 pound", function(){
    
    const { fromYenToPound } = require('./app.js')

    const pound = fromYenToPound(2)

    const expected = 2 * 0.063; 
    
     expect(fromYenToPound(2)).toBe(0.126); 
})