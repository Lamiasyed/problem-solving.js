// problems1
function calculateMoney(ticketSale){

    if(ticketSale < 1) {
        return 'Please your validition numbers'
    }  
 
  else{
    const perPiceTicketSale = 120;
    const darawanCost = 500;
    const lunchFee = 50*8;

    let totalRecievedAmount = perPiceTicketSale * parseInt(ticketSale);
    const totalCost = darawanCost + lunchFee

    const totalProfit = totalRecievedAmount - totalCost;
    return totalProfit 
  }
   
   
}