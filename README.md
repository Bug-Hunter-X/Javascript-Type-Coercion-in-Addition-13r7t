# Javascript Type Coercion Bug
This repository demonstrates a common Javascript bug related to type coercion during addition. The `+` operator behaves differently when used with numbers and strings.  The bug.js file contains the buggy code that showcases the unexpected behavior.  The bugSolution.js file illustrates the solution using explicit type conversion to ensure correct mathematical addition.

## Bug Description
Javascript's loose typing can lead to unexpected results. When adding a number and a string using the `+` operator, Javascript performs string concatenation instead of numerical addition. This results in unexpected output, which may be difficult to debug without understanding the underlying type coercion behavior.

## How to Run
1. Clone this repository.
2. Open `bug.js` to see the buggy code.
3. Open `bugSolution.js` to see the corrected code.
4. Run the files using a Javascript interpreter (like Node.js).