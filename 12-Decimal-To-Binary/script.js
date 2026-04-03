const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const animationContainer = document.getElementById("animation-container");

const decimalToBinary = (input) => {
  if (input === 0 || input === 1) {
    return String(input);
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
};

const getAnimationData = (input) => {
  const callStack = [];
  let current = input;

  while (true) {
    callStack.push(current);

    if (current === 0 || current === 1) {
      break;
    }

    current = Math.floor(current / 2);
  }

  const frameStep = 700;
  const msgStep = 1500;
  const removeStep = 2200;

  return callStack.map((inputVal, index) => {
    const addElDelay = (index + 1) * frameStep;

    if (inputVal === 0 || inputVal === 1) {
      return {
        inputVal,
        addElDelay,
        msg: `decimalToBinary(${inputVal}) returns '${inputVal}' (base case).`,
        showMsgDelay: addElDelay + msgStep,
        removeElDelay: addElDelay + removeStep,
      };
    }

    const half = Math.floor(inputVal / 2);
    const remainder = inputVal % 2;

    return {
      inputVal,
      addElDelay,
      msg: `decimalToBinary(${inputVal}) returns "${decimalToBinary(half)}" + ${remainder} (${inputVal} % 2).`,
      showMsgDelay: addElDelay + msgStep,
      removeElDelay: addElDelay + removeStep,
    };
  });
};

const showAnimation = (input) => {
  const animationData = getAnimationData(input);

  result.innerText = "Call Stack Animation";
  animationContainer.innerHTML = "";

  animationData.forEach((obj) => {
    setTimeout(() => {
      animationContainer.innerHTML += `
        <p id="frame-${obj.inputVal}" class="animation-frame">
          decimalToBinary(${obj.inputVal})
        </p>
      `;
    }, obj.addElDelay);

    setTimeout(() => {
      const frame = document.getElementById(`frame-${obj.inputVal}`);

      if (frame) {
        frame.textContent = obj.msg;
      }
    }, obj.showMsgDelay);

    setTimeout(() => {
      const frame = document.getElementById(`frame-${obj.inputVal}`);

      if (frame) {
        frame.remove();
      }
    }, obj.removeElDelay);
  });

  setTimeout(
    () => {
      result.textContent = decimalToBinary(input);
      numberInput.value = "";
    },
    animationData[animationData.length - 1].removeElDelay + 300,
  );
};

const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);

  if (!numberInput.value || isNaN(inputInt) || inputInt < 0) {
    alert("Please provide a decimal number greater than or equal to 0");
    return;
  }

  showAnimation(inputInt);
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
