# JavaScript Bug: Loose Comparison of 0 and -0

This repository demonstrates a subtle bug in JavaScript related to the loose comparison of 0 and -0.  JavaScript's loose comparison (`==`) considers 0 and -0 to be equal, which can lead to unexpected results in functions that don't explicitly handle this edge case.

The `bug.js` file contains a function that demonstrates this issue. The `bugSolution.js` file shows a corrected version of the function that handles 0 and -0 correctly.

## How to Reproduce

1. Clone the repository.
2. Open `bug.js` and run the code in a JavaScript environment (e.g., Node.js, a browser's console).
3. Observe the unexpected output when 0 or -0 is used as an input.
4. Compare the results with the corrected version in `bugSolution.js`.

## Bug Explanation

The problem arises from JavaScript's loose equality comparison (`==`). While mathematically 0 and -0 are distinct, they are considered equal using loose comparison.  This can cause unexpected behavior when performing operations where the sign of zero is significant, like in certain calculations or when interacting with APIs expecting a precise representation of zero.

## Solution

The solution involves explicitly checking for both 0 and -0 in the function's conditional logic, ensuring that both values are treated correctly and preventing the unexpected results. This is usually accomplished by using strict equality (`===`) or by checking for `Object.is(a, 0)`