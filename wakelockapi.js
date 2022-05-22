let screenLock;
navigator.wakeLock.request("screen").then((lock) => {
  screenLock = lock;
});

async function getScreenLock() {
  if (isScreenLockSupported()) {
    let screenLock;
    try {
      screenLock = await navigator.wakeLock.request("screen");
    } catch (err) {
      console.log(err.name, err.message);
    }
    return screenLock;
  }
}
function release() {
  if (typeof screenLock !== "undefined" && screenLock != null) {
    screenLock.release().then(() => {
      console.log("Lock released 🎈");
      screenLock = null;
    });
  }
}
document.addEventListener("visibilitychange", async () => {
  if (screenLock !== null && document.visibilityState === "visible") {
    screenLock = await navigator.wakeLock.request("screen");
  }
});
screenLock.onrelease = () => {
  console.log("Lock released 🎈");
};
// You can also use addEventListener
screenLock.addEventListener("release", () => {
  console.log("Lock released 🎈");
});
