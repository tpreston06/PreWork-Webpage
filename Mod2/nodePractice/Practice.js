function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function compute(a, b, op) {
    return op(a, b);
  }
  
  let result1 = compute(10, 5, add);
  let result2 = compute(10, 5, subtract);