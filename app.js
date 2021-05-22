var key_q = document.querySelector(".key_q")

  document.addEventListener('keydown', function (event) {
    if (event.key === 'q') {
        key_q.style.background = "red"
    }
  });

  document.addEventListener('keyup', function (event) {
    if (event.key === 'q') {
        key_q.style.background = "white"
    }

  });
  
  
  
  
  var key_w = document.querySelector(".key_w")

  document.addEventListener('keydown', function (event) {
    if (event.key === 'w') {
        key_w.style.background = "blue"
    }
  });

  document.addEventListener('keyup', function (event) {
    if (event.key === 'w') {
        key_w.style.background = "white"
    }
  });




  var key_e = document.querySelector(".key_e")

  document.addEventListener('keydown', function (event) {
    if (event.key === 'e') {
        key_e.style.background = "pink"
    }
  });

  document.addEventListener('keyup', function (event) {
    if (event.key === 'e') {
        key_e.style.background = "white"
    }
  });



  var key_r = document.querySelector(".key_r")

  document.addEventListener('keydown', function (event) {
    if (event.key === 'r') {
        key_r.style.background = "black"
    }
  });

  document.addEventListener('keyup', function (event) {
    if (event.key === 'r') {
        key_r.style.background = "white"
    }
  });




  var key_t = document.querySelector(".key_t")

  document.addEventListener('keydown', function (event) {
    if (event.key === 't') {
        key_t.style.background = "green"
    }
  });

  document.addEventListener('keyup', function (event) {
    if (event.key === 't') {
        key_t.style.background = "white"
    }
  });




  var key_y = document.querySelector(".key_y")

  document.addEventListener('keydown', function (event) {
    if (event.key === 'y') {
        key_y.style.background = "yellow"
    }
  });

  document.addEventListener('keyup', function (event) {
    if (event.key === 'y') {
        key_y.style.background = "white"
    }
  });



  var key_u = document.querySelector(".key_u")

  document.addEventListener('keydown', function (event) {
    if (event.key === 'u') {
        key_u.style.background = "orange"
    }
  });

  document.addEventListener('keyup', function (event) {
    if (event.key === 'u') {
        key_u.style.background = "white"
    }
  });

const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']

const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown', e => {
  if (e.repeat) return
  const key = e.key
  const whiteKeyIndex = WHITE_KEYS.indexOf(key)
  const blackKeyIndex = BLACK_KEYS.indexOf(key)

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})
function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play() 
  key.classList.add('active')
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
  })
}