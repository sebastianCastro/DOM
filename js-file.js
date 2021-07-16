const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);


const redText = document.createElement('a'); 
redText.classList.add('redText');
redText.textContent = 'Hey I’m red!';
redText.style.color = 'red';

container.appendChild(redText);

const blueHeader = document.createElement('h3');
blueHeader.classList.add('h3');
blueHeader.textContent = ('I’m a blue h3!');
blueHeader.style.color = 'blue';


container.appendChild(blueHeader);


const sandBox = document.createElement('div');
sandBox.classList.add('sandBox');
sandBox.style.borderStyle = 'solid';
sandBox.style.borderColor = 'black';
sandBox.style.background = 'pink';


container.appendChild(sandBox);

const divHeader = document.createElement('h1');
divHeader.classList.add('h1');
divHeader.textContent = ('I’m in a div');


sandBox.appendChild(divHeader);


const divParagraph = document.createElement('p');
divParagraph.classList.add('p');
divParagraph.textContent = ('ME TOO!');


sandBox.appendChild(divParagraph);


const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");


const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  alert("Hello World2");
});