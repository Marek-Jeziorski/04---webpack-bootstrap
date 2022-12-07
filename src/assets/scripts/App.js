import "../styles/styles.scss";
import "../styles/styles.css";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

// import Alert from 'bootstrap/js/dist/alert'

// or, specify which plugins you need:

// import { Tooltip, Toast, Popover } from 'bootstrap'

let measure;

document.querySelector(".open-measure").addEventListener("click", (e) => {
  e.preventDefault();
  if (typeof measure == "undefined") {
    import("./Measure")
      .then((x) => {
        measure = new x.default();
        setTimeout(() => measure.openTheMeasure(), 20);
      })
      .catch(() => console.log("Jest jakiś problem"));
  } else {
    measure.openTheMeasure();
  }
});

if (module.hot) {
  module.hot.accept();
}
