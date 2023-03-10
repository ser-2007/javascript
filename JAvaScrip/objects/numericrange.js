// Demo : Numericrange

var num = {
    min: 0,
    max: 100,
    checkNumericRange : function(value){
        if (typeof value !== 'number'){
            return false;
        }else{
            return value>=this.min && value<this.max
        }
    }
}

console.log(num.checkNumericRange(29));
console.log(num.checkNumericRange(-29));

var num1 = {min : 50, max : 60};

console.log(num.checkNumericRange.call(num1,55));
console.log(num.checkNumericRange.call(num1,65));
console.log(num.checkNumericRange.apply(num1,[65]));

var checkNumber = num.checkNumericRange.bind(num1);
console.log(checkNumber(56));