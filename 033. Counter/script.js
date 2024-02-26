const count = document.querySelector(".count");
const incrementBtn = document.querySelector(".increment-btn");
const saveBtn = document.querySelector(".save-btn");
const entryField = document.querySelector(".entries-field");

let countText = 0;

incrementBtn.addEventListener('click', () => {
  countText++;
  count.textContent =  countText
})

saveBtn.addEventListener('click', () => {
  let entriesText = countText + ", ";
  entryField.textContent += entriesText;
  count.textContent = 0;
  countText = 0;
})
