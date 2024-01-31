const print = async() =>{

    const print1 = new Promise((resolve,reject)=>{
        resolve('a');
    });

    const print2 = new Promise((resolve,reject)=>{
        resolve('b')
    });

    const print3 = new Promise((resolve,reject)=>{
        resolve('c');
    });

    const print4 = new Promise((resolve,reject)=>{
        resolve('d');
    })

    const print5 = new Promise((resolve,reject)=>{
        resolve('e');
    });

    const printA = await print1;
    console.log(`${printA}`);

    const printB = await print2;
    console.log(`${printB}`);

    const printC = await print3;
    console.log(`${printC}`);

    const printD = await print4;
    console.log(`${printD}`);

    const printE = await print5;
    console.log(`${printE}`);

}

print();