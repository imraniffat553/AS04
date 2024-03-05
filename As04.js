function calculateMoney(numTickets) {
    // Constants
    const ticketPrice = 120;  
    const janitorSalary = 500;  
    const staffLunchCostPerPerson = 50;  
    const numStaff = 8; 

    
    const totalRevenue = numTickets * ticketPrice;

   
    const totalExpenses = janitorSalary + (numStaff * staffLunchCostPerPerson);

    
    const amountLeft = totalRevenue - totalExpenses;

    return amountLeft;
}

//
const numTicketsSold = 100;  
const moneyLeft = calculateMoney(numTicketsSold);
console.log("Total money left after deducting expenses: Tk", moneyLeft);


function calculateMoney (ticketSale){
    const everyday_ticketPrice=120; 
    const everyday_day_gateman=500;
    const everyday_lunch_bill=50;

    const total_lunch_bill= everyday_lunch_bill * 8; 
    const gateman_lucnch_total_payment= everyday_day_gateman + total_lunch_bill;
    const total_ticket_bill= everyday_ticketPrice * ticketSale;
    const everyday_day_taka= total_ticket_bill - gateman_lucnch_total_payment;
    if(ticketSale < 0){
        return "“Invalid Number”";
    }else{
        return "MR Baker per day income:"+everyday_day_taka;

    }
    
}
const day1=calculateMoney(-50);
console.log(day1);