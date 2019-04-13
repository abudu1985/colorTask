const params = {
  lines: [
    {
      background: '#00F',
      updateTime: 2000,
      elements: [{
        background: '#3bf0ff',
        width: 25
      },
        {
          background: '#23ff4f',
          width: 50
        },
        {
          background: '#ff23c0',
          width: 25
        }
      ]
    },
    {
      background: '#44f2ff',
      updateTime: 1000,
      elements: [{
        background: '#fffa39',
        width: 10
      },
        {
          background: '#ff3139',
          width: 50
        },
        {
          background: '#3fff30',
          width: 40
        }
      ]
    },
    {
      background: '#ff23cc',
      updateTime: 3000,
      elements: [{
        background: '#e67300',
        width: 25
      },
        {
          background: '#a8a8a8',
          width: 25
        },
        {
          background: '#3bf0ff',
          width: 50
        }
      ]
    },
    {
      background: '#ffd32d',
      updateTime: 1000,
      elements: [{
        background: '#ff90f4',
        width: 35
      },
        {
          background: '#ff2d3f',
          width: 45
        },
        {
          background: '#6eff53',
          width: 20
        },
      ]
    }
  ]
};

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let htmlElement = document.querySelector("html");
let bodyElement = document.querySelector("body");
htmlElement.setAttribute("style", "height: 100%;");
bodyElement.setAttribute("style", "height: 100%;");

let container = document.createElement('div');
bodyElement.appendChild(container);
container.setAttribute("style", "display: flex; flex-direction: column; background-color: green; height: 100%");

for (let i = 0; i < params.lines.length; i++) {
  const linesArr = [];
   linesArr[i] = document.createElement('div');
  linesArr[i].setAttribute("style",
    `display: flex; flex-direction: row; flex: 1;
     background-color: ${params.lines[i].background}; padding: 5px:`
  );

  for (let j = 0; j < params.lines[i].elements.length; j++) {
    let id = `${i}_${j}`;

    (function(id) {
      setInterval(function() {
         getRandomColor();
        document.getElementById(id).style.backgroundColor = getRandomColor();
      }, params.lines[i].updateTime);
    })(id);

    let insideInnerDiv = document.createElement('div');
    insideInnerDiv.setAttribute("id", id);
    insideInnerDiv.setAttribute("style",
      `background-color: ${params.lines[i].elements[j].background};
       width: ${params.lines[i].elements[j].width}%;`
    );
    linesArr[i].appendChild(insideInnerDiv);
  }
  container.appendChild(linesArr[i]);
}
