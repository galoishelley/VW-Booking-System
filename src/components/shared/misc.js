export const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

export const validatePhoneNumber = (input_str) => {
    // var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    const re = /^(?:\+?61|0)4(?:[01]\d{3}|(?:2[1-9]|3[0-57-9]|4[7-9]|5[0-15-9]|6[679]|7[3-8]|8[1478]|9[07-9])\d{2}|(?:20[2-9]|444|52[0-6]|68[3-9]|70[0-7]|79[01]|820|890|91[0-4])\d|(?:200[0-3]|201[01]|8984))\d{4}$/;

    return re.test(input_str);
};

export const formatDate = (date, format) => {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    if(format === "YYYYMMDD"){
        return [year, month, day].join('-');
    }else{
        return [month, day, year].join('-');
    }
};


export const getWeekDay = (dateStr) =>{
    //dateStr = "2008-08-08"
    const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const myDate = new Date(Date.parse(dateStr.replace(/-/g, "/")));
    const weekday = weekDay[myDate.getDay()];
    return weekday;
};

export const getMonthEn = (sdate) =>{
    const mEn = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
    // const mEn= ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Spt","Oct","Nov","Dec"];
    const monthen = mEn[new Date(new Date(sdate)).getMonth()];
    const day = new Date(new Date(sdate)).getDate();
    const year = new Date(new Date(sdate)).getFullYear();

    return monthen +' ' + day +','+ year;
}

export const cTime = ['10:00am', '10:30am', '11:00am', '11:30am', '12:00am', '12:30am', '1:00pm', '1:30pm', '2:00pm', '2:30pm', '3:00pm', '3:30pm', '4:00pm'];
