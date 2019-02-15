
function calculateTip(checkAmount, percent) {
  
  var tipAmount = (checkAmount * (percent/100));
  return (tipAmount + checkAmount).toFixed(2);
};

function displayResults(amount) {
  var totalSpan = document.getElementById('total');
  totalSpan.innerHTML = `${amount}`;
};

(function() {
  var button = document.getElementById('button');
  button.addEventListener('click', function(e) {
    var check_amount_element = 1*document.getElementById('check-amount').value;
    if (isNaN(check_amount_element)) {
      displayResults("Error, enter a number");
      return;
    }
    var e = document.getElementById("select-box");
    var percent = 1*e.options[e.selectedIndex].value;
    var totalAmount = calculateTip(check_amount_element, percent);

    displayResults("$" + totalAmount)
  }, false);
})();