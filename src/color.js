export default function(text) {
  let hash = text.split('').map(s => s.codePointAt(0))
                   .reduce((a, b) => a + b)
  return "rgb(" + hash % 256 + "," +
                  hash * 13 % 256 + "," +
                  hash * 13 * 13 % 256 + ")"
}
