const service = require('./service');

async function main(){
    try {
        const resut = await service.getUser('');
        const names = [];
        
        //USING FOR
        console.time("Use for->")
        for(let i = 0; i<= resut.length -1 ; i++ ){
            const turnUser =  resut[i].name;
            names.push(turnUser);
        }
        console.timeEnd("Use for->")


    } catch (error) {
        console.log("Your error message-->", error.message);
    }
}

main();