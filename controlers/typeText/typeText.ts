export default function typeText(text: string, target: string) {
  let i = 0
  let textLength = text.length

  let div = document.getElementById(target) as HTMLDivElement

  //console.log({ text, div , textLength})
  function type() {
    if (i < textLength) {
      div.innerHTML += text.charAt(i)
      i++
      setTimeout(type, 70)
    }
  }

  type()
}
