// Imports
import { binarySearch } from "./binary-search";
// Load scss
import "./scss/index.scss";

(() => {
  console.log(
    binarySearch(
      [
        2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21, 22, 31, 33,
        35, 55, 56, 57, 59,
      ],
      13,
    ),
  );
})();

if (module.hot) {
  module.hot.accept();
}
