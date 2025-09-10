let value1 = document.getElementById('val1');
let value2 = document.getElementById('val2');
let answer = document.getElementById('ans')


    const sum = () =>{
         val1 = parseFloat(value1.value);
         val2 = parseFloat(value2.value);
        
        ans.value =  val1 + val2;
    }
    const sub = () =>{
         val1 = parseFloat(value1.value);
         val2 = parseFloat(value2.value);
        
        ans.value =  val1 - val2;
    }
    const multi = () =>{
         val1 = parseFloat(value1.value);
         val2 = parseFloat(value2.value);
        
        ans.value =  val1 * val2;
    }
    const div = () =>{
         val1 = parseFloat(value1.value);
         val2 = parseFloat(value2.value);
        
        ans.value =  val1 / val2;
    }
