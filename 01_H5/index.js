console.log("hello world");

const likeBox = document.querySelector(".like-nums");
const likeBtn = document.querySelector(".like-btn");

let likeNums = 0;

likeBtn.addEventListener("click", () => {
  likeNums++;
  likeBox.textContent = likeNums;
  console.log(likeNums);
});
