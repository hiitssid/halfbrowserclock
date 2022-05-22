import NoSleep from "NoSleep.min.js";

var noSleep = new NoSleep();
// Enable wake lock.
// (must be wrapped in a user input event handler e.g. a mouse or touch handler)
document.addEventListener(
  "click",
  function enableNoSleep() {
    document.removeEventListener("click", enableNoSleep, false);
    noSleep.enable();
  },
  false
);

// Disable wake lock at some point in the future.
// (does not need to be wrapped in any user input event handler)
noSleep.disable();
