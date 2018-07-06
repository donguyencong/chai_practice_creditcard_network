var detectNetwork = function(cardNumber) {
  var firstDigit = parseInt(cardNumber[0]);
  var firstTwoDigits = parseInt(cardNumber[0] + cardNumber[1]);
  var firstThreeDigits = parseInt(cardNumber[0] + cardNumber[1] + cardNumber[2]);
  var firstFourDigits = parseInt(cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3]);
  var firstSixDigits = parseInt(cardNumber.substring(0,6));

  if((firstSixDigits === 564182 || firstSixDigits === 633110) && (cardNumber.length >= 16 && cardNumber.length <= 19)) return 'Switch';
  if((firstFourDigits === 4903 || firstFourDigits === 4905 || firstFourDigits === 4911 || firstFourDigits === 4936 || firstFourDigits === 6333 || firstFourDigits === 6759 ) && (cardNumber.length >= 16 && cardNumber.length <= 19)) return 'Switch';
  if((firstSixDigits >= 622126 && firstSixDigits <= 622925) && (cardNumber.length >= 16 && cardNumber.length <= 19)) return 'China UnionPay';
  if((firstThreeDigits >= 624 && firstThreeDigits <= 626) && (cardNumber.length >= 16 && cardNumber.length <= 19)) return 'China UnionPay';
  if((firstFourDigits >= 6282 && firstFourDigits <= 6288) && (cardNumber.length >= 16 && cardNumber.length <= 19)) return 'China UnionPay';
  if((firstTwoDigits === 38 || firstTwoDigits === 39) && cardNumber.length === 14) return 'Diner\'s Club';
  if((firstTwoDigits === 34 || firstTwoDigits === 37) && cardNumber.length === 15 ) return 'American Express';
  if((firstDigit === 4) && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)) return 'Visa';
  if(((firstTwoDigits >= 51 && firstTwoDigits <= 55) && (cardNumber.length === 16 || cardNumber.length === 19))) return 'MasterCard';
  if((firstFourDigits === 6011 || firstTwoDigits === 65) && (cardNumber.length === 16 || cardNumber.length === 19)) return 'Discover';
  if((firstThreeDigits >= 644 && firstThreeDigits <= 649) && (cardNumber.length === 16 || cardNumber.length === 19)) return 'Discover';
  if((firstFourDigits === 5018 || firstFourDigits === 5020 || firstFourDigits === 5038 || firstFourDigits === 6304) && (cardNumber.length >= 12 && cardNumber.length <=19)) return 'Maestro';
};


