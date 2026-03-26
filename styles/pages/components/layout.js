import { navbar } from "./navbar.js";

export function loadLayout() {
  document.body.insertAdjacentHTML("afterbegin", navbar());
}
