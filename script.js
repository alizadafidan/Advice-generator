const advice = document.querySelector(".advice");
const adviceNum = document.querySelector(".advice-header");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  getAdvice();
});

window.onload = () => {
  getAdvice();
};

async function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => {
      return res.json();
    })
    .then((adviceData) => {
      console.log(adviceData);
      const adviceObj = adviceData.slip;
      advice.innerText = adviceObj.advice;
      adviceNum.innerText = `Advice #${adviceObj.id}`;
      console.log(adviceObj.advice);
    });
}
