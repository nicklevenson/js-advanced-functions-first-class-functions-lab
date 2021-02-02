// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(drivers.length -2, drivers.length)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return function(fare){ return fare * int}
}

const fareDoubler = function(fare) {
  return createFareMultiplier(fare)(2)
}

const fareTripler = function(fare) {
  return createFareMultiplier(fare)(3)
}

function selectDifferentDrivers(drivers, func) {
  return func(drivers)
}