// Get the form elements
const form = document.querySelector("form");
const clientName = document.querySelector("#clientName");
const mortgageAmount = document.querySelector("#mortgageAmount");
const downPayment = document.querySelector("#downPayment");
const interestRate = document.querySelector("#interestRate");
const loanDuration = document.querySelector("#loanDuration");

// Add a submit event listener to the form
form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent the form from submitting

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

  //Calculate the amortization schedule
  const amortization = [];
  let balance = principal;
  for (let i = 0; i < payments; i++) {
    const interestPaid = balance * interest;
    const principalPaid = monthly - interestPaid;
    balance -= principalPaid;
    amortization.push({
      interestPaid,
      principalPaid,
      balance,
    });
  }

  console.log("ran");

  console.log(document.querySelector("#results"));
  const resultsDiv = document.querySelector("#results");
  resultsDiv.innerHTML = `
                    <div class = "resultsdiv">
  <p>Client Name: ${name}</p>
                           <p>Mortgage Amount: ${amount}</p>
                           <p>Down Payment: ${downPay}</p>
                           <p>Interest Rate: ${rate}</p>
                           <p>Loan Duration: ${duration} years</p>
                           </div>
                           `;

  //loop for displaying amortization schedule

  // create table element
  let table = document.createElement("table");
  table.id = "amortization-table";

  // create table header
  let headerRow = document.createElement("tr");
  headerRow.innerHTML = `
  <th>Payment #</th>
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
      <td>${interestPaid}</td>
      <td>${principalPaid}</td>
      <td>${balance}</td>
    `;
    table.appendChild(row);
  }

  // add table to the results div
  resultsDiv.appendChild(table);
});

//Amortization formula

const compareButton = document.getElementById("compare-button");
compareButton.addEventListener("click", function () {
  // Get input values for second scenario
  const secondAmount = document.getElementById("second-amount").value;
  const secondDownPayment = document.getElementById(
    "second-down-payment"
  ).value;
  const secondInterestRate = document.getElementById(
    "second-interest-rate"
  ).value;
  const secondLoanDuration = document.getElementById(
    "second-loan-duration"
  ).value;

  // Calculate amortization and savings for second scenario
  const secondResults = calculateAmortizationAndSavings(
    secondAmount,
    secondDownPayment,
    secondInterestRate,
    secondLoanDuration
  );

  // Display results for second scenario in a table format
  displayResults(secondResults, "second-results");
});
