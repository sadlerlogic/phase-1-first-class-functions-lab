const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const fareDoubler = function(integer){return integer * 2;}
const fareTripler = function(integer){return integer * 3;}
const fareMultiplier = function(integer){return 5 * integer};
const createFareMultiplier = function(integer){return fareMultiplier;}

const selectDifferentDrivers = function(drivers, selectingDrivers){
    return selectingDrivers(drivers);
     }
