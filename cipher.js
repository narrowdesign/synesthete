export class Cipher {
  constructor() {
    this.colors = {
      a: '#d1000d',
      b: '#1f497b',
      c: '#fdcc43',
      d: '#3f304f',
      e: '#027f24',
      f: '#604977',
      g: '#013133',
      h: '#68320e',
      i: '#fdffd0',
      j: '#003463',
      k: '#f9932f',
      l: '#ffff54',
      m: '#db9691',
      n: '#2e023f',
      o: '#ffe9d9',
      p: '#d36d54',
      q: '#624772',
      r: '#890006',
      s: '#fd1822',
      t: '#ffcc73',
      u: '#fdfd5f',
      v: '#ff643c',
      w: '#ffe2b0',
      x: '#09233c',
      y: '#fed152',
      z: '#6a0263',
      1: '#fdffd0',
      2: '#00a932',
      3: '#e14751',
      4: '#6a0261',
      5: '#3336ab',
      6: '#f1dc4b',
      7: '#ffb93f',
      8: '#1b075e',
      9: '#850006',
      0: '#ffffff',
    }
  }

  getColor(letter) {
    return this.colors[letter] || '#000';
  }
}