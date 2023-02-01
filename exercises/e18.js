import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  let years = {}

  data.asteroids.map(obj => {
    if (obj.discoveryYear in years) {
      years[obj.discoveryYear] += 1
    }  else {
      years[obj.discoveryYear] = 1
    }
  })

  const yearsKeys = Object.keys(years)
  let highestYear = yearsKeys[0]
  yearsKeys.map(year => {
    if (years[year] > years[highestYear]){
      highestYear = year}
  })
  return parseInt(highestYear)
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
