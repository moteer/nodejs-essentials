
let count = 0;

const inc = () => ++count; 
const dec = () => --count; 


const getCount = () => count;

module.exports = {
    anything :true,
    who: "Bob",
    count,
    inc, 
    dec,
    getCount
};