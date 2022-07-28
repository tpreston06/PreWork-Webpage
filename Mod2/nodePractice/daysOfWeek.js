module.exports = 'MOD2';
console.log(module);

module.exports.weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

module.exports.getWeekDay = function(dayNo){
    if(dayNo < 0 || dayNo > 6) dayNo = 0;
    return this.weekdays[dayNo];
};

console.log(module)