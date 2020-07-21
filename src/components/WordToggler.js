export default class WordToggler {
  constructor(wordEl) {
    this.currentIndex = null
    this.currentWord = null
    this.prevWord = null
    this.duration = 3500
    this.word = wordEl

    this.words = [
      'Hello',
      'Bonjour',
      'Hola',
      'Zdravstvuyte',
      'Nǐn hǎo',
      'Salve',
      'Konnichiwa',
      'Guten Tag',
      'Olá',
      'Asalaam alaikum',
      'Namaste',
      'Ahoy',
    ]

    this.toggleWord(this.duration)
  }

  getIndex(max, min) {
    this.currentIndex = Math.floor(Math.random() * (max - min + 1)) + min
    return this.currentIndex
  }

  getWord(index) {
    this.currentWord = this.words[index]
    return this.currentWord
  }

  clear() {
    setTimeout(() => {
      this.word.classList.remove('slide-in-word')
    }, this.duration / 4)
  }

  toggleWord(duration) {
    setInterval(() => {
      // Stores value of previous word
      this.prevWord = this.currentWord

      // Generate new current word
      this.currentWord = this.words[this.getIndex(this.words.length - 1, 0)]

      // Generate new word if prev matches current
      if (this.prevWord === this.currentWord) {
        this.currentWord = this.words[this.getIndex(this.words.length - 1, 0)]
      }

      // Swap new value
      this.word.innerHTML = this.currentWord

      // Clear class styles
      this.clear()

      // Fade in word
      this.word.classList.add('slide-in-word')
    }, duration)
  }
}
