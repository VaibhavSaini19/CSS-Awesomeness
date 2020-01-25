let text = document.querySelector('.text').textContent;

let letters = text.split('');
// console.log(letters);
let llen = letters.length;

let newText = '';
let textFontSize = parseFloat(window.getComputedStyle(document.querySelector('.text')).getPropertyValue('font-size'));
let minWidth = textFontSize*1+'px';
let delay = 0;
for(let i=0; i<llen; i++){
    let letter = letters[i]
    if(letter == " ")
        newText += '<span style="min-width:'+minWidth+';">&nbsp;</span>';
    else
        newText += '<span style="min-width:'+minWidth+';">' + letter + '</span>';
    delay += 0.05;
    delay = Math.round(delay * 100) / 100;
}
document.querySelector('.text').innerHTML = newText;


setTimeout(() => {
    for(let i=0; i<llen; i++){
        let prev = letters[i];
        if (prev != " ")
            setDeceleratingTimeout(cycleLetter, i, prev, llen/4, i);
        // console.log("done");
    }
}, 1000);

function cycleLetter(i){
    let newChar = String.fromCharCode(65+Math.floor(Math.random() * 26));
    document.querySelector('span:nth-child('+(i+1)+')').innerHTML = newChar;
}



// Cycling function------------------------------------------------------------------

function setDeceleratingTimeout(myAsyncFunc, i, prev, factor, times)
{
    var internalCallback = function(tick, counter) {
        return function() {
            if (--tick >= 0) {
                window.setTimeout(internalCallback, ++counter * factor);
                myAsyncFunc(i);
            }else{
                document.querySelector('span:nth-child('+(i+1)+')').innerHTML = prev;
            }
        }
    }(times, 0);

    window.setTimeout(internalCallback, factor);
};

// console.log() requires firebug    
// setDeceleratingTimeout(function(){ console.log('hi'); }, 10, 20);
// setDeceleratingTimeout(function(){ console.log('bye'); }, 100, 10);
