var should = chai.should();


describe('Diner\'s Club', function() {
  it('has a prefix of 38 and a length of 14', function() {
    detectNetwork('38345678901234').should.equal('Diner\'s Club');
  });

  it('has a prefix of 39 and a length of 14', function() {
    detectNetwork('39345678901234').should.equal('Diner\'s Club');
  });
});

describe('American Express', function() {
  it('has a prefix of 34 and a length of 15', function() {
    detectNetwork('343456789012345').should.equal('American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    detectNetwork('373456789012345').should.equal('American Express');
  });
});

describe('Visa', function() {
  it('has a prefix of 4 and a length of 13', function() {
    detectNetwork('4123456789012').should.equal('Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    detectNetwork('4123456789012345').should.equal('Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    detectNetwork('4123456789012345678').should.equal('Visa');
  });
});

describe('MasterCard', function() {
 
  it('has prefix of 51 and length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it('has prefix of 52 and length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it('has prefix of 53 and length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });

  it('has prefix of 54 and length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });

  it('has prefix of 55 and length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  });

  for(var prefix = 51; prefix <= 55; prefix++) {
    (function(prefix) {
      var netWork = prefix + '00000000000000000';
      console.log(netWork);
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        detectNetwork(netWork).should.equal('MasterCard');
      });
    })(prefix);
  }
 
});

describe('Discover', function() {
  for(var prefix = 644; prefix <= 649; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        var netWork = prefix + '0000000000000';
        detectNetwork(netWork).should.equal('Discover');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function () {
        var netWork = prefix + '0000000000000000';
        detectNetwork(netWork).should.equal('Discover');
      });
    })(prefix);
  }
  it('has a prefix of 6011 and a length of 16', function() {
    detectNetwork('6011000000000000').should.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function() {
    detectNetwork('6011000000000000999').should.equal('Discover');
  });
  it('has a prefix of 65 and a length of 16', function() {
    detectNetwork('6511000000000000').should.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19', function() {
    detectNetwork('6511000000000000999').should.equal('Discover');
  });
});

describe('Maestro', function() {
  var cardNumber = '501800000000';
  for(var len=12; len<=19; len++) {
    (function(cardNumber) {
      it('has a prefix of 5018 and a length of ' + len , function() {
        detectNetwork(cardNumber).should.equal('Maestro');
      });
    })(cardNumber);
    cardNumber += '0';
  }

  var cardNumber = '502000000000';
  for(var len=12; len<=19; len++) {
    (function(cardNumber) {
      it('has a prefix of 5020 and a length of ' + len , function() {
        detectNetwork(cardNumber).should.equal('Maestro');
      });
    })(cardNumber);
    cardNumber += '0';
  }

  var cardNumber = '503800000000';
  for(var len=12; len<=19; len++) {
    (function(cardNumber) {
      it('has a prefix of 5038 and a length of ' + len , function() {
        detectNetwork(cardNumber).should.equal('Maestro');
      });
    })(cardNumber);
    cardNumber += '0';
  }

  var cardNumber = '630400000000';
  for(var len=12; len<=19; len++) {
    (function(cardNumber) {
      it('has a prefix of 6304 and a length of ' + len , function() {
        detectNetwork(cardNumber).should.equal('Maestro');
      });
    })(cardNumber);
    cardNumber += '0';
  }
});

describe('should support China UnionPay', function() {
  var lastDigits = '0000000000';
  for(var len = 16; len<=19; len++) {
    (function(lastDigits) {
      for(var prefix = 622126; prefix<=622925; prefix++) {
        (function(prefix, lastDigits, len) {
          it('has a prefix of ' + prefix + ' and a length of ' + len , function() {
            var cardNumber = prefix + lastDigits;
            detectNetwork(cardNumber).should.equal('China UnionPay');
          });
        })(prefix, lastDigits,len);
      }
    })(lastDigits);
    lastDigits += '0';
  }

  var lastDigits = '0000000000000';
  for(var len = 16; len<=19; len++) {
    (function(lastDigits) {
      for(var prefix = 624; prefix<=626; prefix++) {
        (function(prefix, lastDigits, len) {
          it('has a prefix of ' + prefix + ' and a length of ' + len , function() {
            var cardNumber = prefix + lastDigits;
            detectNetwork(cardNumber).should.equal('China UnionPay');
          });
        })(prefix, lastDigits,len);
      }
    })(lastDigits);
    lastDigits += '0';
  }

  var lastDigits = '000000000000';
  for(var len = 16; len<=19; len++) {
    (function(lastDigits) {
      for(var prefix = 6282; prefix<=6288; prefix++) {
        (function(prefix, lastDigits, len) {
          it('has a prefix of ' + prefix + ' and a length of ' + len , function() {
            var cardNumber = prefix + lastDigits;
            detectNetwork(cardNumber).should.equal('China UnionPay');
          });
        })(prefix, lastDigits,len);
      }
    })(lastDigits);
    lastDigits += '0';
  }
});

describe('should support Switch', function() {
  var lastDigitsFor4Digits = '000000000000';
  var prefix1 = 4903;
  var prefix2 = 4905;
  var prefix3 = 4911;
  var prefix4 = 4936;
  var prefix5 = 6333;
  var prefix6 = 6759;
  var prefix7 = 564182;
  var prefix8 = 633110;
  for(var len=16; len<=19; len++) {
    (function(prefix1, prefix2, prefix2, prefix4, prefix5, prefix6, len, lastDigitsFor4Digits) {
      if(len !== 17) {
        it('has a prefix of ' + prefix1 + ' and a length of ' + len, function() {
          var cardNumber = prefix1 + lastDigitsFor4Digits;
          detectNetwork(cardNumber).should.equal('Switch');
        });
        it('has a prefix of ' + prefix2 + ' and a length of ' + len, function() {
          var cardNumber = prefix2 + lastDigitsFor4Digits;
          detectNetwork(cardNumber).should.equal('Switch');
        });
        it('has a prefix of ' + prefix3 + ' and a length of ' + len, function() {
          var cardNumber = prefix3 + lastDigitsFor4Digits;
          detectNetwork(cardNumber).should.equal('Switch');
        });
        it('has a prefix of ' + prefix4 + ' and a length of ' + len, function() {
          var cardNumber = prefix4 + lastDigitsFor4Digits;
          detectNetwork(cardNumber).should.equal('Switch');
        });
        it('has a prefix of ' + prefix5 + ' and a length of ' + len, function() {
          var cardNumber = prefix5 + lastDigitsFor4Digits;
          detectNetwork(cardNumber).should.equal('Switch');
        });
        it('has a prefix of ' + prefix7 + ' and a length of ' + len, function() {
          var cardNumber = prefix6 + lastDigitsFor4Digits;
          detectNetwork(cardNumber).should.equal('Switch');
        });
      }
    })(prefix1, prefix2, prefix2, prefix4, prefix5, prefix6, len, lastDigitsFor4Digits);
    lastDigitsFor4Digits += '0';
  }

  var lastDigitsFor6Digits = '0000000000';
  for(var len=16; len<=19; len++) {
    (function(prefix7, prefix8, len, lastDigitsFor6Digits) {
      if(len !== 17) {
        it('has a prefix of ' + prefix7 + ' and a length of ' + len, function() {
          var cardNumber = prefix7 + lastDigitsFor6Digits;
          detectNetwork(cardNumber).should.equal('Switch');
        });
        it('has a prefix of ' + prefix8 + ' and a length of ' + len, function() {
          var cardNumber = prefix8 + lastDigitsFor6Digits;
          detectNetwork(cardNumber).should.equal('Switch');
        });
      
      }
    })(prefix7, prefix8, len, lastDigitsFor6Digits);
    lastDigitsFor6Digits += '0';
  }
});
