const hotels = [
  {
    name: "Lakewood",
    rating: 3,
    regular: [110, 90],
    rewards: [80, 80],
  },
  {
    name: "Bridgewood",
    rating: 4,
    regular: [160, 60],
    rewards: [110, 50],
  },
  {
    name: "Ridgewood",
    rating: 5,
    regular: [220, 150],
    rewards: [100, 40],
  },
];

function getRates(weekDays, guestPlan) {
  return hotels.map((hotel) => {
    const sumRates = 
    hotel[guestPlan][0] * weekDays[0] + 
    hotel[guestPlan][1] * weekDays[1];
    return [hotel.name, sumRates, hotel.rating];
  });
}

function bestCheapestHotel(finalRates) {
  const minRate = finalRates.sort((a, b) => a[1] - b[1])[0][1];
  const cheapestHotels = finalRates.filter((hotel) => hotel[1] === minRate);
  return cheapestHotels.sort((a, b) => b[2] - a[2])[0][0];
}

function dayCount(weekDays) {
  const businessDays = ["mon", "tues", "wed", "thur", "fri"];
  const weekEnd = ["sat", "sun"];
  let dayTypeCounter = [0, 0];
  weekDays.map((str) => {
    businessDays.map((day) => {
      str.includes(day) ? (dayTypeCounter[0] += 1) : null;
    });
    weekEnd.map((day) => {
      str.includes(day) ? (dayTypeCounter[1] += 1) : null;
    });
  });
  return dayTypeCounter;
}

function splitDate(input) {
  return dayCount(input.split(":")[1].split(","));
}

function getCheapestHotel(input) {
  const guestPlan = input.split(":")[0].toLowerCase();
  /* getRates() takes guestPlan and splitDate(), splitDate() calls 
     dayCount, which returns array with a counter for business days and weekend
     days. getRates computes rates for each hotel and returns an array,
     which is sorted in bestCheapestHotel(). */
  return bestCheapestHotel(getRates(splitDate(input), guestPlan));
}

exports.getCheapestHotel = getCheapestHotel;
