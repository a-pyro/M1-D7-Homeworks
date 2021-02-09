console.log('Hi there! 🔥');

/* EXERCISE 1
      Write a function for changing the title of the document in something else.
      */

function changeTitle(newTitle) {
  const title = document.querySelector('title');
  title.textContent = newTitle;
}

/* EXERCISE 2
      Write a function for changing the class of the title of the page in "myHeading".
      */

function addClassToTitle() {
  const title = document.querySelector('h1');
  title.className = 'myHeading';
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

function changeUrls() {
  const setAttributes = (element, objAttributes) => {
    Object.entries(objAttributes).forEach(([attribute, value]) => {
      console.log(attribute, value);
      element.setAttribute(attribute, value);
    });
  };
  const links = document.links;
  Array.from(links).forEach((link) => {
    setAttributes(link, {
      href: 'https://www.google.com',
      target: '_blank',
    });
    link.textContent = 'This now goes to Google!';
  });
}

/* EXERCISE 5
       Write a function for adding a new item in the second list.
       */

function addToTheSecond(content) {
  const secondList = document.getElementById('secondList');
  const li = document.createElement('li');
  li.textContent = content;
  secondList.appendChild(li);
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
  const sel = function (element) {
    if (element.charAt(0) === '#') {
      // If passed an ID...
      return document.querySelector(element); // ... returns single element
    }
    return document.querySelectorAll(element); // Otherwise, returns a nodelist
  };
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

function changeFooterText() {}

/* EXERCISE 11
      Attach an event listener to the input field in the page for console logging its value just after any keystroke.
      */

const inputField = document.getElementById('input-field');

/* EXERCISE 12
      Create a new welcome alert message when the page successfully loads.
      */

window.onload = function () {
  console.log('Loaded 🚀');
};

/* EXERCISE 13
      Use HTML5 tags to divide the content of the page in a more semantic way.
      */
