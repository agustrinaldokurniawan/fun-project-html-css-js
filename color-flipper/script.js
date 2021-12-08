function getRandomColorHex() {
  const hex = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ];
  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    hexColor += hex[Math.floor(Math.random() * hex.length)];
  }
  return hexColor;
}

function changeColor() {
  document.getElementById('hero').style.backgroundColor = getRandomColorHex();
  document.getElementById('color-hex').innerHTML = getRandomColorHex();
}
