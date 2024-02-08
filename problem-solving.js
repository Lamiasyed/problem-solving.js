// problem-1
// function calculateMoney(ticketSale){

//     if(ticketSale < 1) {
//         return 'Book your ticket now';
//     }  
 
//   else{
//     const perPieceTicketSale = 120;
//     const darowanCost = 500;
//     const lunchFee = 50*8;

//     let totalRecievedAmount = perPieceTicketSale * parseInt(ticketSale);
//     const totalCost = darowanCost + lunchFee

//     const totalProfit = totalRecievedAmount - totalCost;
//     return totalProfit ;
//   }
//    console.log(totalProfit)
// }






// // problem-2
// function checkName(name){

//     if(typeof(name) !== 'string') return "Invalid"

//     const validCharList = ['A', 'Y', 'I' , 'E' , 'O' , 'U', 'W'] 
//     const lastCharOfName = name.charAt(name.length -1)

//     const charExist = validCharList.filter(item => item.toLowerCase() === lastCharOfName.toLowerCase())

//     if(charExist.length > 0) return 'Good Name'
//     return 'Bad Name'
 
// }


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


// // problem- 4
// function password(object) {
//     const password = object.siteName + object.name + object.birthYear;
//     return password;     
// }

// const Info = { 
//     name: "kolimuddin", 
//     birthYear: 1999,
//      siteName: "google" 
//     };
// const makingPass = password(Info); 
// console.log(makingPass)
