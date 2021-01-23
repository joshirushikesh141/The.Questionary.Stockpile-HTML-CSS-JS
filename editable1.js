// DOM Elements
const focus = document.getElementById('focusdata');


// Get Focus
function getFocus() {
  if (localStorage.getItem('focusdata') === null) {
    focus.textContent = '[Enter Focusdata]';
  } else {
    focus.textContent = localStorage.getItem('focusdata');
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focusdata', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focusdata', e.target.innerText);
  }
}

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
getFocus();
