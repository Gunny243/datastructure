let obj = {
    head: {
      data: 10,
      next: {
        data: 20,
        next: {
          data: 30,
          next: {
            data: 40,
            next:{
              data: 50,
              next: null
            }
          }
        }
      }
    }
}

//  print all data 

let start = obj.head;

while(start){

  console.log(start.data);
  start = start.next 
}

//  delete the obj which has data:310 

let start = obj.head;
let prev = null;
  
  while(start){
    if(start.data == 310){
      prev.next = start.next;
      break;
    }
    else{
      prev = start;
      start = start.next
    }
    
  }
console.log(obj);

  