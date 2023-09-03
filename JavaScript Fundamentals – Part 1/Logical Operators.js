const driverHasLicense = true//A
const hasGoodVision = false//B

console.log(driverHasLicense && hasGoodVision);
console.log(driverHasLicense || hasGoodVision);
console.log(!hasGoodVision);

if (driverHasLicense && hasGoodVision) {
    console.log('sara able to drive')
} else {
    console.log('sara not able to drive😥')
}