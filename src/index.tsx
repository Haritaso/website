import { h, render } from "preact"
import App from "./App"

if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js")
  })
}

render(<App />, document.getElementById("root") as Element)
