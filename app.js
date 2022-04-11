
for (let i = 0; i < 100; i++) {
    console.log(i)
 }


let i = 0;
while (i<50) {
    console.log(i)
    i++;   
}

i = 0;
do {
    console.log(i)
    i++;
} while (i<150)


const currentDate = new Date();
const currentDay = currentDate.getDay()

switch (currentDay) {
    	case 0:
    		console.log("Sunday");
    		break;
    	case 1:
    		console.log("Monday");
    		break;
    	case 2:
    		console.log("Tuesday");
    		break;
        case 3:
    		console.log("Wednesday");
    		break;
        case 4:
    		console.log("Thursday");
    		break;
        case 5:
    		console.log("friday");
    		break;
        case 6:
    		console.log("Saturday");
    		break;
    }


  let myArr = [];
  for (let i = 1; i < 1000; i++) {
      console.log(i)
      myArr.push(i*i)
  }

  console.log(myArr)




















































