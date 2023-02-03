// Get the form elements
const form1 = document.querySelector(".first__form");
const clientName = document.querySelector("#clientName");
const mortgageAmount = document.querySelector("#mortgageAmount");
const downPayment = document.querySelector("#downPayment");
const interestRate = document.querySelector("#interestRate");
const loanDuration = document.querySelector("#loanDuration");

// Add a submit event listener to the form

function calculation() {
  // Get the user input
  const name = clientName.value;
  const amount = mortgageAmount.value;
  const downPay = downPayment.value;
  const rate = interestRate.value;
  const duration = loanDuration.value;

  // Perform the mortgage calculations
  // Amortization formula and calculation code goes here

  // Display the results to the user
  // You can use innerHTML or create an element to append the result

  const interest = rate / 12 / 100;
  const payments = duration * 12;
  const principal = amount - downPay;

  const x = Math.pow(1 + interest, payments);
  const monthly = (principal * x * interest) / (x - 1);

  const amortization = [];
  let balance = principal;
  for (let i = 0; i < payments; i++) {
    const interestPaid = balance * interest;
    const principalPaid = monthly - interestPaid;
    balance -= principalPaid;
    amortization.push({
      interestPaid: interestPaid,
      principalPaid: principalPaid,
      balance: balance,
    });
  }

  const resultsDiv = document.querySelector("#results");
  resultsDiv.innerHTML = `
                  <div class = "resultsdiv">
                  <div class = "container">
                  <p>Client Name: ${name}</p>
                  <p>Mortgage Amount: ${parseFloat(amount).toFixed(2)}</p>
                  <p>Down Payment: ${parseFloat(downPay).toFixed(2)}</p>
                  <p>Interest Rate: ${parseFloat(rate).toFixed(2)}</p>
                  <p>Loan Duration: ${parseFloat(duration)} years</p>
                  </div>
                  </div>
                         `;

  //loop for displaying amortization schedule

  // create table element
  let table = document.createElement("table");
  table.id = "amortization-table";
  table.classList = "container";

  // create table header
  let headerRow = document.createElement("tr");
  headerRow.innerHTML = `
  <th>Payment </th>
  <th>Interest Paid</th>
  <th>Principal Paid</th>
  <th>Balance</th>
`;
  table.appendChild(headerRow);

  // loop through amortization array to add rows to the table
  for (let i = 0; i < payments; i++) {
    let { interestPaid, principalPaid, balance } = amortization[i];
    let row = document.createElement("tr");
    row.innerHTML = `
      <td>${i + 1}</td>
      <td>${parseFloat(interestPaid).toFixed(3)}</td>
      <td>${parseFloat(principalPaid).toFixed(3)}</td>
      <td>${parseFloat(balance).toFixed(3)}</td>
    `;
    table.appendChild(row);

    resultsDiv.appendChild(table);
  }
}

form1.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent the form from submitting
  // add table to the results div
  calculation();
});

//secondform
const form2 = document.querySelector(".secondform");
const clientName_secondform = document.querySelector("#clientName_secondform");
const mortgageAmount_secondform = document.querySelector(
  "#mortgageAmount_secondform"
);
const downPayment_secondform = document.querySelector(
  "#downPayment_secondform"
);
const interestRate_secondform = document.querySelector(
  "#interestRate_secondform"
);
const loanDuration_secondform = document.querySelector(
  "#loanDuration_secondform"
);

// Add a submit event listener to the form

function calculation2() {
  // Get the user input
  const name2 = clientName_secondform.value;
  const amount2 = mortgageAmount_secondform.value;
  const downPay2 = downPayment_secondform.value;
  const rate2 = interestRate_secondform.value;
  const duration2 = loanDuration_secondform.value;

  // Perform the mortgage calculations
  // Amortization formula and calculation code goes here

  // Display the results to the user
  // You can use innerHTML or create an element to append the result

  const interest2 = rate2 / 12 / 100;
  const payments2 = duration2 * 12;
  const principal2 = amount2 - downPay2;
  const x2 = Math.pow(1 + interest2, payments2);
  const monthly2 = (principal2 * x2 * interest2) / (x2 - 1);

  //Calculate the amortization schedule
  const amortization2 = [];
  let balance2 = principal2;
  for (let j = 0; j < payments2; j++) {
    const interestPaid2 = balance2 * interest2;
    const principalPaid2 = monthly2 - interestPaid2;
    balance2 -= principalPaid2;
    amortization2.push({
      interestPaid2,
      principalPaid2,
      balance2,
    });
  }

  console.log("ran");

  console.log(document.querySelector("#second-results"));
  const resultsDiv2 = document.querySelector("#second-results");
  resultsDiv2.innerHTML = `
                    <div class = "resultsdiv2">
                    <div class = "container">
                    <p>Client Name: ${name2}</p>
                    <p>Mortgage Amount: ${parseFloat(amount2).toFixed(2)}</p>
                  <p>Down Payment: ${parseFloat(downPay2).toFixed(2)}</p>
                  <p>Interest Rate: ${parseFloat(rate2).toFixed(2)}</p>
                  <p>Loan Duration: ${duration2} years</p>
                    </div>
                    </div>
                           `;

  //loop for displaying amortization schedule

  // create table element
  let table2 = document.createElement("table");
  table2.id = "amortization-table";
  table2.classList = "container";

  // create table header
  let headerRow2 = document.createElement("tr");
  headerRow2.innerHTML = `
  <th>Payment #</th>
  <th>Interest Paid</th>
  <th>Principal Paid</th>
  <th>Balance</th>
`;
  table2.appendChild(headerRow2);

  // loop through amortization array to add rows to the table
  for (let j = 0; j < payments2; j++) {
    let { interestPaid2, principalPaid2, balance2 } = amortization2[j];
    let row2 = document.createElement("tr");
    row2.innerHTML = `
      <td>${j + 1}</td>
      <td>${parseFloat(interestPaid2).toFixed(3)}</td>
      <td>${parseFloat(principalPaid2).toFixed(3)}</td>
      <td>${parseFloat(balance2).toFixed(3)}</td>
    `;
    table2.appendChild(row2);

    resultsDiv2.appendChild(table2);
  }
}

document
  .querySelector(".compare__button")
  .addEventListener("click", function () {
    if (document.querySelector(".secondform").classList.contains("none")) {
      document.querySelector(".first__form").style.display = "block";
      document.querySelector("#second-results").style.display = "none";
    }
    document.querySelector(".secondform").classList.toggle("none");
  });

document.querySelector(".secondform").addEventListener("submit", function (e) {
  e.preventDefault();
  document.querySelector(".secondform").style.display = "none";
  document.querySelector(".first__form").style.display = "none";
});
