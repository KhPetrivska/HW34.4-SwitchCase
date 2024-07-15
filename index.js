'use strict';
/*let numOrStr = prompt('input number or string');
console.log(numOrStr)

if(numOrStr === null) {
	console.log('ви скасували')
} else if( numOrStr.trim() === '' ) {
	console.log('Empty String');
} else if ( isNaN( +numOrStr ) ) {
	console.log(' number is Ba_NaN')
} else {
	console.log('OK!')
}*/

let numOrStr = prompt('input number or string');
console.log(numOrStr);

switch (numOrStr) {
    case null:
        console.log('ви скасували');
        break;
    default: 
        numOrStr = numOrStr.trim();
        switch(numOrStr){
            case '':
                console.log('Empty String'); 
                break; 
            case (parseFloat(numOrStr)).toString():
                console.log('OK!');
                break;
            default:
                console.log('number is Ba_NaN');
        }
}