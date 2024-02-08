// // problem-1
calculateMoney(10)
function calculateMoney(ticketSale){
    if(ticketSale < 1) {
        return 'Enter validation number';
    }  
    else{
        const perPieceTicketSale = 120;
        const guardCost = 500;
        const lunchFee = 50*8;
    
        let totalRecievedAmount = parseInt(perPieceTicketSale) * parseInt(ticketSale);
        totalCost = parseInt(guardCost) + parseInt(lunchFee);
    
        totalProfit = parseInt(totalRecievedAmount) - parseInt(totalCost);
        console.log(totalProfit);
        return totalProfit ;
    }
}
// // problem-2
function checkName(name) {
    if (!name || name.trim() === "") {
      return "invalid";
    }
    let lastChar = name.charAt(name.length - 1).toLowerCase();
    let disallowedLetters = ["a", "y", "i", "e", "o", "u", "w"];
    if (disallowedLetters.includes(lastChar)) {
      return "Good Name";
    }
   if (name.includes(" ") || name.includes(",")) {
      return "invalid";
    } 
    return "Bad Name";
  }
  console.log(checkName("Salman"));
  console.log(checkName("Tonoy"));
  console.log(checkName("Salma"));
  console.log(checkName("Invalid name,"));
// problem-3
function deleteInvalids(Array) {
    function checkArray(value) {
        return typeof value === 'number' && !isNaN(value);
    }
    const result = [];
    for (let i = 0; i < Array.length; i++) {
        if (checkArray(Array[i])) {
            result.push(Array[i]);
        }
    }
    return result;
}
const userArray = [NaN, 1, 12, 0, -1, undefined];
const arrayResult = deleteInvalids(userArray);
console.log(arrayResult); 
// problem- 4
function password(object) {
    const password = object.siteName + object.name + object.birthYear;
    return password;     
}
const Info = { 
    name: "kolimuddin@", 
    birthYear: 1999,
     siteName: "Google#" 
    };
const makingPass = password(Info); 
console.log(makingPass)
// problem-5
function monthlySavings(payments, livingCost) {
    if (!Array.isArray(payments) || typeof livingCost !== 'number') {
        return "Invalid input";
    }
    let totalEarning = 0;
    for (let payment of payments) {
        if (payment >= 3000) {
            totalEarning += payment * 20 / 100; 
        } else {
            totalEarning += payment;
        }
    }
    let savingsAmount = totalEarning - livingCost;
    if (savingsAmount <= 0) {
        return "earn more";
    } else {
        return savingsAmount; 
    }
}
console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000)); 
