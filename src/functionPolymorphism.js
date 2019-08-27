/** Convert to an array by using spread operatorn */
const someFunction = function(...args) {
  console.log(args);
  console.log(args.shift());
};

someFunction(1, "hello", "hi"); // [1, 'hello', 'hi']

let applyFilter = function(filter, value, options) {
  const args = [].slice.call(arguments, 0);
  console.log(args.length); // 2
};
applyFilter("some", "100%");

/** With spread */
const applyFilters = (...args) => {
  console.log(args.length); // 1
};

applyFilters("grayscale", "100%");

/** Arguments execution */

const applyFilterToImage = image => {
  return (applyFilter = (...args) => {
    let options;
    let filters = {};
    let callback;

    const args1 = args[0];
    // THE CALLER WANTS TO APPLY MULTIPLE FILTERS
    if (args.length === 1) {
      if (args1 && typeof args1 === "object") {
        filters = { ...args1 };
        // find out of the caller wants the new image with applied filters back by checking if a callbacl was passed in
        const args2 = args[1];
        if (args2 && typeof args2 === "function") {
          callback = args2;
        }
      } else {
        throw new Error(
          "You must supply an object if you are only providing the first argument"
        );
      }
    } else {
      if (args.length > 2) {
        // The caller passed in options as the third argument
        if (typeof args[3] === "object") {
          options = args[3];
        } else if (typeof args[3] === "function") {
          callback = args[3];
        }
      }
      // THE CALLER WANTS TO APPLY ONE FILTER
      if (typeof args1 === "string") {
        const filter = args1;
        const value = args[1];
        filters[filter] = value; // or filters = { [filter]: value }
      } else {
        if (callback) callback(new Error("Filter is not a string"));
      }
    }
    const newImg = api.filterImage(filters, options);
    if (callback) {
      return callback(null, newImg);
    }
  });
};

const img = "../bob_the_builder.jpg";
applyFilter = applyFilterToImage(img);
const callback = newImg => {
  console.log(newImg);
};

applyFilter(
  {
    grayscale: "100%",
    rotate: 100,
    scale: 1.5
  },
  callback
);
