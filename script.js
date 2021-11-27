const input = document.querySelector("input");
const btn = document.querySelector("button");
const outputContainer = document.querySelector('.output-container');

// Employee Sallery Info
const sallery = 40000;
var hra = 0;
var ta = 0;
var da = 0;
var grossSallery = 0;

btn.addEventListener("click", () => {
  findGrossSallery();

  if (findGrossSallery() === true) {
    showOutpt();
    input.value = '';
  }
});

function showOutpt() {
  outputContainer.style.display = 'block';

  let salleryBox = document.querySelector('.sallery');
  salleryBox.innerHTML = `Sallery = ${sallery}Rs`;

  let benefits = document.querySelector('.benefits');
  benefits.innerHTML = `HRA  =  ${hra}Rs  <br>  TA  =  ${ta}Rs  <br>  DA  =  ${da}Rs`;

  let grossSal = document.querySelector('.gross-sallery');
  grossSal.innerHTML = `Gross Sallery = ${grossSallery}Rs`;
}

/// Getting Gross Sallery of employee
function findGrossSallery() {
  let gen = String(input.value).toLowerCase();

  if (gen === 'male' || gen === 'female') {
    if (gen === 'male') {
      let exp = askExp();
      if (exp >= 5) {
        hra = (sallery * 15) / 100;
        ta = sallery / 5;
        da = sallery / 10;
      }
    }
    else {
      let exp = askExp();
      if (exp >= 3) {
        hra = sallery / 10;
        ta = (sallery * 15) / 100;
        da = sallery / 10;
      }
    }
  }
  else {
    alert('Please enter valid gender!!');
    return false;
  }





  grossSallery = sallery + hra + ta + da;

  return true;
}

function askExp() {
  let exp = 0;
    exp = Number(prompt("What is your work experience ?"));
    if(exp >= 0 && exp <= 60){
      return exp;
    }
      alert('Please Enter valid number. eg: 1, 2, 3..');
      return askExp();
  }