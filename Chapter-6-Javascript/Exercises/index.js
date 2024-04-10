window.onload = () => {
  const calculateBtn = document.getElementById('calculateBtn');
  calculateBtn.addEventListener('click', calculate);
}

function calculate() {
  const petrolPrice = document.querySelector('#Petrol_Price').value;
  const liters = document.querySelector('#liters').value;

  if (!petrolPrice || !liters) return;

  const totalAmount = parseFloat(petrolPrice) * parseFloat(liters);
  document.querySelector('#totalAmount').innerText = totalAmount.toFixed(2);
}
  