let val = 10;

const main = () =>{
    let val = 20 ;

    const subMain = () =>{
        let val = 30;

        const childMain = () =>{
            let val = 40;
            console.log(`Value from childMain : ${val}`);
            
        }

        childMain();
        console.log(`Value from subMain : ${val}`);
        
    }
    subMain();
    console.log(`value from main : ${val}`);
    
}

console.log(`Value from out of the function : ${val}`);
main();
