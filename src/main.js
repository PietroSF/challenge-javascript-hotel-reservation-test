/* eslint-disable no-unused-expressions */
const hotelList = {
  lakewood: {
    name: "Lakewood",
    rating: 3,
    regular: [110, 90],
    reward: [80, 80],
  },
  bridgewood: {
    name: "Bridgewood",
    rating: 4,
    regular: [160, 60],
    reward: [110, 50],
  },
  ridgewood: {
    name: "Ridgewood",
    rating: 5,
    regular: [220, 150],
    reward: [100, 40],
  },
};

function computeRates(bDay, wkndDay) {
  // pass values/call from parseDates()
  // must get client type to choose correct key/value pair
  // then iterate hotels, calculate rate and return in an ary of objects

  /* Hotel {
      name: "name",
      totalRate: rate,
      rating: rating
  },
    etc. */

  // sort by highest rating, then by cheapest total rate
  // then return name of first obj in ary, done
}

function parseDates(weekDays) {
  // iterate through dates array
  // can use includes to check whether dates are a business day or weekend day

  // increment counter for each type of day
  // call next function from within here or return the counter and call
}

function getCheapestHotel(input) {
  return "Cheapest hotel name";
  // split input at colon to get client type and dates
  // split dates at commas to get an array

  // call parseDates() with the array of dates as parameter

  /* 
  GET input ()

  PARSE client type, date string ~~> can be done in main function

  PARSE day of the week in date string ~~> needs to be parsed into
  business days and weekend days, might need its own function

  READ client type, FLAG client type ~~> can probably be done succintly
  and included in another function

  READ day type, FLAG day type ~~> this and the last instruction are
  a good fit to share a function

  DETERMINE cost
  SETTLE ties with rating ~~> as before these two probably are a good fit
  for a single function

  RETURN best cheapest hotel ~~> tests require this be done in the main 
  function
  */
}

// exports.getCheapestHotel = getCheapestHotel;
