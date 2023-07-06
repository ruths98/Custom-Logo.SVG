let ns = "http://www.link.com/svg"//ns is name space
let svg = document.createElementNS(ns, "svg");

function createLetters(answers) {
    const { letters, textColor } = answers;
  
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <path d="${path}" fill="${textColor}"/>
      </svg>
    `;
  
    saveLogoToFile(letters, svg);
  }
  