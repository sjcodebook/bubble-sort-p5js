let values,
  i = 0,
  j = 0

function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
  values = Array.from({ length: width })
  for (let i = 0; i < values.length; i++) {
    values[i] = Math.floor(random(height))
  }
}

function draw() {
  background(0)
  if (i < values.length) {
    while (j < values.length - i - 1) {
      let a = values[j]
      let b = values[j + 1]
      if (a > b) {
        swap(values, j, j + 1)
      }
      j++
    }
  }
  j = 0
  i++
  for (let i = 0; i < values.length; i++) {
    stroke(255)
    line(i, height, i, height - values[i])
  }
}

function swap(arr, a, b) {
  let temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}
