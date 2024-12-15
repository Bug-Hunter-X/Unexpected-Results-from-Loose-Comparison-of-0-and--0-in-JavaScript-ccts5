function myFunction(a, b) {
  if (Object.is(a, 0) || Object.is(b, 0)) {
    return 0; 
  }
  return a + b;
}

console.log(myFunction(10, 0)); //Output: 0
console.log(myFunction(10, -0));//Output: 0
console.log(myFunction(-0, 10));//Output: 0
console.log(myFunction(10, 10)); // Output: 20
console.log(myFunction(10,-10)); //Output: 0