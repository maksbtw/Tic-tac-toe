const cells = document.querySelectorAll('.field div')
const resultSection = document.querySelector('.result')
const winCombs = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
]
let steps = {
  o: [],
  x: []
}
let isO = true

function isEnd() {
  winCombs.forEach(item => {
    if (item.every(item2 => steps.o.includes(item2))) {
      resultSection.innerText = 'Winner: O'
    }
    else if (item.every(item2 => steps.x.includes(item2))) {
      resultSection.innerText = 'Winner: X'
    }
    else if(steps.o.length + steps.x.length === 9) {
      resultSection.innerText = 'Tie'
    }
  })
}

cells.forEach(item => {
  item.addEventListener('click', function step(e) {
    if (isO) {
      isO = !isO
      steps.o.push(+e.target.getAttribute('data'))
      let elem = document.createElement('img')
      elem.setAttribute('src', 'img/o.png')
      e.target.appendChild(elem)
      resultSection.innerText = 'Turn: X'
      isEnd()
    }
    else {
      isO = !isO
      steps.x.push(+e.target.getAttribute('data'))
      let elem = document.createElement('img')
      elem.setAttribute('src', 'img/x.png')
      e.target.appendChild(elem)
      resultSection.innerText = 'Turn: O'
      isEnd()
    }
    item.removeEventListener('click', step)
    console.log(steps.o, steps.x)
  })
})