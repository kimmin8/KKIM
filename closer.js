// function createButtons() {
//   const buttons = [];

//   for (var i = 0; i < 3; i++) {
//     buttons.push(function() {
//       console.log(`버튼 ${i} 클릭됨`);
//     });
//   }

//   return buttons;
// }

// const buttonFunctions = createButtons();
// buttonFunctions[0]();
// buttonFunctions[1]();
// buttonFunctions[2]();


// function createButtonsFixed() {
//   const buttons = [];

//   for (var i = 0; i < 3; i++) {
//     buttons.push((function(index) {
//       return function() {
//         console.log(`버튼 ${index} 클릭됨`);
//       };
//     })(i));
//   }

//   return buttons;
// }

// const fixedButtons = createButtonsFixed();
// fixedButtons[0]();
// fixedButtons[1]();
// fixedButtons[2]();

const Calculator = (function() {
  let history = [];

  return {
    add: function(a, b) {
      const result = a + b;
      history.push(`${a} + ${b} = ${result}`);
      return result;
    },

    subtract: function(a, b) {
      const result = a - b;
      history.push(`${a} - ${b} = ${result}`);
      return result;
    },

    getHistory: function() {
      return history.slice();
    },

    clearHistory: function() {
      history = [];
      console.log("계산 기록이 삭제되었습니다");
    }
  };
})();

console.log(Calculator.add(5, 3));
console.log(Calculator.subtract(10, 4));
console.log(Calculator.getHistory());
Calculator.clearHistory();
console.log(Calculator.getHistory());