class calender{
    #month;
    #day;
    #year;

    constructor(month , day, year){
        this.month = month;
        this.day = day;
        this.year = year;
    }

    toString(){
                return `${this.day}  ${this.month}  ${this.year} `
   }
}
let day = new calender(22,11,2004);
console.log(day.toString());