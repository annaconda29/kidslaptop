const voices = window.speechSynthesis.getVoices()
const animations = ['bounce','rubberBand','shake','swing','tada','wobble','jello']

function speak(text) {
  const msg = new SpeechSynthesisUtterance()
  msg.text = text
  
  // Set the attributes.
  // msg.volume = 100
  // msg.rate = 1
  // msg.pitch = 150
  
  msg.voice = voices[5]
  window.speechSynthesis.speak(msg)
}

const letters = document.getElementsByTagName('li')
for (let i = 0; i < letters.length; i++) {
  letters[i].addEventListener('mousedown', function(e){
    // cancel existing speech in progress
    window.speechSynthesis.cancel()
    // read this
    speak(this.innerText)
		this.classList.remove(...animations)
		this.classList.add(
			animations[Math.floor(Math.random() * animations.length)],
			'animated'
		)
  })
}