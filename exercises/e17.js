export function minBy(array, cb) {
  let min = array[0]
  array.map(person => {
    if (cb(person) < cb(min)){
      min = person
    }
  })
  return min
}

export function maxBy(array, cb) {
  let max = array[0]
  array.map(person => {
    if (cb(person) > cb(max)){
      max = person
    }
  })
  return max
}