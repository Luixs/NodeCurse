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
        
       //USING FOR I
       
       console.time("Use for I->");
       for(let i in resut){
        const turnUser =  resut[i].name;
        names.push(turnUser);
       }
       console.timeEnd("Use for I->");
       
      //USING FOR X IN X'S
      console.time("For in->");
      for(user in resut){
        names.push(resut[user].name);
      }
      console.timeEnd("For in->");
    } catch (error) {
        console.log("Your error message-->", error.message);
    }
}

main();