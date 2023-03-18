const protectCardNumber = (cardNumber) => {
  return '****-****-****-' + cardNumber.slice(15,19);
}

module.exports = {protectCardNumber}