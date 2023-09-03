const day = prompt("Write your day!");

switch (day) {
    case 'monday'://day==='Monday'
        console.log('Weakup in the morning');
        console.log('Take preparation for JS');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write Code!');
        break;
    case 'friday':
    case 'saturday':
        console.log('Enjoy weekend')
        break;
    default:
        console.log('Not a valid Day!')
}