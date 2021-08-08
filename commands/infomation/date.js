module.exports = {
    name: "date",
    category: "infomation",
    aliases: ['date'],
    run: (client, message, args) => {
    function date(type,data) {
        var date = new Date();
        let day;
        switch (new Date().getDay()) {
            case 0:
              day = "Chủ nhật";
              break;
            case 1:
              day = "Thứ hai";
              break;
            case 2:
               day = "Thứ ba";
              break;
            case 3:
              day = "Thứ tư";
              break;
            case 4:
              day = "Thứ năm";
              break;
            case 5:
              day = "Thứ sáu";
              break;
            case 6:
              day = "Thứ bảy";
          }
          var dataa = '';
          dataa += "Hôm nay là " + day + "\n";
          dataa += "Ngày "  + date.getDate() +"/" + date.getMonth() + "/" + date.getFullYear() + "\n";
          dataa += "Giờ hiện tại: " + date.getHours() + ':' + date.getMinutes() + '\n';
          
          var currentTimeh = date.getHours();
          var currentTimem = date.getMinutes();
          var timeTominutes = currentTimem + currentTimeh*60;
          if (timeTominutes < 240 || timeTominutes > 1380) {
              dataa += "Thức khuya rất có hại cho sức khỏe nên bạn hãy đi ngủ sớm đi <3";
          }
          else if (timeTominutes >= 240 && timeTominutes < 660) {
            dataa += "Chúc bạn một buổi sáng tốt lành <3";
          }
          else if (timeTominutes > 720 && timeTominutes < 1079) {
            dataa += "Chúc bạn có một buổi chiều tốt lành <3";
          }
          else if (timeTominutes >= 1080 && timeTominutes <= 1320) {
            dataa += "Chúc bạn có một buổi tối tốt lành";
          }
          else if (timeTominutes >1320 && timeTominutes <=1380) {
            dataa += "Đây là thời điểm thích hợp để bạn đi ngủ nên hãy đi ngủ sớm đi nhé <3";
          }
          if (data = undefined) {
            return {
                handler: "internal",
                data: "Could not get the date\nPlease try again :("
            }
          }
          else {
            return {
                handler: "internal",
                data:`${dataa}`,
            }
        }
    }  
    message.channel.send(`${date().data}`);
}
}  

