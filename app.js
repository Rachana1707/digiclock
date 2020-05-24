var date= new Date;
    var hours=date.getHours();
    var minutes=date.getMinutes();
    var wishes=  (hours<12)?"Good morning":((hours<=18&&hours>=12)?"Good afternoon":"Good eveng");
    var ampm=hours>=12?"pm":"am";
    hours=hours%12;
    var printtime= wishes+ hours+':'+ minutes+' '+ampm;
    console.log(printtime);