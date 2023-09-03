const markWeight = 78;
const johnWeight = 92;

const markHeight = 1.69;
const johnHeight = 1.95;


const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

console.log(markBMI, johnBMI);

if (markBMI > johnBMI) {
    console.log(`Marks BMI ${markBMI} is higher than John's BMI ${johnBMI}!🐸`)
} else {
    console.log(`Johns BMI ${johnBMI} is higher than Marks BMI ${markBMI}!😁`)
}

