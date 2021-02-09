console.log('Hi there! 🔥');

/* EXERCISE 1
      Write a function for changing the title of the document in something else.
      */

const title = document.querySelector('title');
title.addEventListener('DOMContentLoaded', changeTitle());
function changeTitle() {
  setTimeout(() => {
    title.textContent = 'some random title ☄️';
  }, 2000);
}

/* EXERCISE 2
      Write a function for changing the class of the title of the page in "myHeading".
      */

const heading = document.querySelector('h1');
heading.addEventListener('click', addClassToTitle);
function addClassToTitle() {
  heading.classList.toggle('myHeading');
}

/* EXERCISE 3
      Write a function for changing the text of only the p which are children of a div.
      */

function changePcontent() {
  const para = document.querySelector('div > p');
  para.textContent = 'Ciao sto facendo gli escercizi 😭';
}

/* EXERCISE 4
      Write a function for changing the destination of every link to https://www.google.com
      */

//helper
const setAttributes = (element, objAttributes) => {
  Object.entries(objAttributes).forEach(([attribute, value]) => {
    console.log(attribute, value);
    element.setAttribute(attribute, value);
  });
};

const link = document.querySelector('a');
link.addEventListener('click', changeUrls);

function changeUrls(e) {
  //link.removeAttribute('href');
  link.href = '#';
  console.log(link);
  console.log(e);
  // setAttributes(link, {
  //   href: 'https://www.google.com',
  //   target: '_blank',
  // });
  // link.click();
  link.classList.add('bomb-link-active');
  let i = 3;
  const img = `<img src="bomb.png" class="bomb animate__animated"></img>`;
  link.insertAdjacentHTML('beforebegin', img);
  let j = 6;
  const bombTimer = setInterval(() => {
    document.querySelector('#bomb-section').classList.toggle('bomb-active');
    j--;
    if (j === -1) clearInterval(bombTimer);
  }, 500);
  const timer = setInterval(() => {
    link.textContent = `${i !== 0 ? i : '💥'}`;
    i--;
    if (i === -1) clearInterval(timer);
  }, 1000);

  setTimeout(() => {
    window.location = 'https://www.google.com';
  }, 4000);
}

/* EXERCISE 5
       Write a function for adding a new item in the second list.
       */

const form = document.querySelector('.task-list');
form.addEventListener('submit', addToTheSecond);
function addToTheSecond(e) {
  const input = document.querySelector('.input-text');
  if (input.value === '') console.log('insert something');
  const text = input.value;
  const secondList = document.getElementById('secondList');
  const li = document.createElement('li');
  li.textContent = text;
  secondList.appendChild(li);
  input.value = '';
  e.preventDefault();
}

/* EXERCISE 6
      Write a function for adding a second paragraph to the div.
      */

function addParagraph(content) {
  const div = document.querySelector('a + div');
  const html = `<p>${content}</p>`;
  div.insertAdjacentHTML('beforeend', html);
}

/* EXERCISE 7
      Write a function for making the first UL disappear.
      */

function firstUlDisappear() {
  const firstUL = document.getElementById('firstList');
  if (firstUL.classList.contains('animate__zoomOut')) {
    firstUL.classList.add('animate__zoomIn');
    firstUL.classList.remove('animate__zoomOut');
  } else {
    firstUL.classList.add('animate__zoomOut');
    firstUL.classList.remove('animate__zoomIn');
  }
}

/* EXERCISE 8
      Write a function for making the background of every UL green.
      */

function paintItGreen() {
  const lists = document.querySelectorAll('ul');
  lists.forEach((list) => list.classList.add('greenify'));
}

/* EXERCISE 9
      Make the heading of the page change color every time the user clicks on it.
      */

function makeItClickable() {
  const heading = document.querySelector('h1');
  heading.style.cursor = 'pointer';
  heading.style.userSelect = 'none';
  heading.addEventListener('click', (e) => {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
      Math.random() * 256
    )},${Math.floor(Math.random() * 256)})`;
    e.target.style.color = randomColor;
  });
}

/* EXERCISE 10
      Change the footer text with something else when the user clicks on it.
      */
const footer = document.querySelector('footer > p');
footer.addEventListener('click', changeFooterText);
function changeFooterText(e) {
  const textArr = footer.textContent.split(' ');
  const shuffled = textArr.sort(() => 0.5 - Math.random());
  e.target.textContent = shuffled.join(' ');
  footer.classList.add('animate__shakeX');
  setTimeout(() => {
    footer.classList.remove('animate__shakeX');
  }, 1000);
}

/* EXERCISE 11
      Attach an event listener to the input field in the page for console logging its value just after any keystroke.
      */

const inputField = document.getElementById('input-field');
inputField.addEventListener('keyup', (e) => {
  const text = inputField.value;
  const h2 = document.querySelector('h2');
  h2.textContent = text;
});

/* EXERCISE 12
      Create a new welcome alert message when the page successfully loads.
      */

window.onload = function () {
  // alert('Welcome 🖖🏻');
};

/* EXERCISE 13
      Use HTML5 tags to divide the content of the page in a more semantic way.
      */
