// https://github.com/Nishat009/Assignment-3


// Converter of kilometer to Meter.
function kilometerToMeter(kilometer){
    if(kilometer < 0){
        console.log('invalid input');
        return -1 ;
    }
    else{
        var meter = kilometer * 1000;
        return meter;
    }
}

// var result = kilometerToMeter(35);
// console.log(result);



// Budget Calculator of Watch, Phone, Laptop.

function budgetCalculator(watch, phone, laptop){
    var totalbudget = 0;
    if(watch < 0 || phone < 0 || laptop <0){
        console.log('invalid input');
        return -1;
    }
    else{
        var watchPrice = watch * 50;
        var phonePrice = phone * 100;
        var laptopPrice = laptop * 500;
        var totalbudget = watchPrice + phonePrice + laptopPrice;
        return totalbudget;
    }
}

// var budgetCalculation = budgetCalculator(3,2,4);
// console.log(budgetCalculation);



// Calculator of Hotel cost.

function hotelCost(day){
    var totalCost = 0;
    if(day < 0){
        console.log('invalid input');
        return -1;
    }
    else if(day <= 10){
        totalCost = day * 100;
        return totalCost;
    }
    else if(day <= 20){
        var firstTenDays = 10 * 100;
        var remainingDays = day - 10;
        var secondTenDays = remainingDays * 80;
        totalCost = firstTenDays + secondTenDays;
        return totalCost;
    }
    else{
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remainingDays = day - 20;
        var restOfDays = remainingDays * 50;
        totalCost = firstTenDays + secondTenDays + restOfDays;
        return totalCost;
    }
}

// var totalHoltelCost = hotelCost(23);
// console.log(totalHoltelCost);



// Finder of the largest name from Array.
function megaFriend(friends) {
    var large = friends[0];
    var check = 0;
    for (var i = 0; i < friends.length; i++) {
        var name = typeof (friends[i]);
        var compare = typeof ("pran");
        var emptyString = '';
        var blank = ' ';
        if (friends.length < 1 || name != compare || friends[i] == emptyString || friends[i] == blank) {
            check = "Your input is invalid";
        }
    }
    if(check != 0){
        console.log("Your input is invalid");
        return -1;
    }
    for (var i = 0; i < friends.length; i++) {
        if (large.length < friends[i].length) {
            large = friends[i];
        }
    }
    return large;
}

//var friendsName = ['Rishad', 'Zayed', 'Ratri', 'Delu', 'Sumu'];
//var result = megaFriend(friendsName);
//console.log(result);
