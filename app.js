console.log('Hi there! 🔥');

/* EXERCISE 1
      Write a function for changing the title of the document in something else.
      */

function changeTitle(newTitle) {
  const title = document.querySelector('h1');
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
  Array.from(links).forEach((link) =>
    setAttributes(link, { href: 'https://www.google.com', target: '_blank' })
  );
}

/* EXERCISE 5
       Write a function for adding a new item in the second list.
       */

function addToTheSecond(content) {}

/* EXERCISE 6
      Write a function for adding a second paragraph to the div.
      */

function addParagraph(content) {}

/* EXERCISE 7
      Write a function for making the first UL disappear.
      */

function firstUlDisappear() {}

/* EXERCISE 8
      Write a function for making the background of every UL green.
      */

function paintItGreen() {}

/* EXERCISE 9
      Make the heading of the page change color every time the user clicks on it.
      */

function makeItClickable() {}

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
