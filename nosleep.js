var noSleep = new NoSleep();

function enableNoSleep() {
  noSleep.enable();
  document.removeEventListener("touchstart", enableNoSleep, false);
}

// Enable wake lock.
// (must be wrapped in a user input event handler e.g. a mouse or touch handler)
document.addEventListener("touchstart", enableNoSleep, false);
