let dates = [];
let week = [];
for (let i = 1; i < 29; i++) {
  let d = new Date(2021, 3, i);
  let dArray = d.toLocaleDateString("en-US").split("/");
  dArray[1] = parseInt(dArray[1]) < 10 ? "0" + dArray[1] : dArray[1];
  let dow = d.getDay();
  let date = { month: dArray[0], day: dArray[1], year: dArray[2], dow };
  if (dow !== 0) {
    week.push(date);
  } else {
    dates.push(week);
    week = [];
    week.push(date);
  }
}
dates.push(week);

// let events = [];
// events.push({
//   id: 1,
//   day: "Mon, Wed, Fri",
//   title: "Journalism Class",
//   startTime: "11:00",
//   endTime: "12:00",
//   color: "#fff07c",
// });
// events.push({
//   id: 2,
//   day: "Mon",
//   title: "React Team Meeting",
//   startTime: "13:00",
//   endTime: "14:00",
//   color: "#A27035",
// });
// events.push({
//   id: 3,
//   day: "Mon, Wed",
//   title: "Theology Class",
//   startTime: "14:00",
//   endTime: "15:30",
//   color: "#87BBA2",
// });
// events.push({
//   id: 4,
//   day: "Mon",
//   title: "Production",
//   startTime: "17:30",
//   endTime: "19:30",
//   color: "#00A0CC",
// });

// events.push({
//   id: 5,
//   day: "Thurs",
//   title: "Rhetorical Arts Class",
//   startTime: "7:50",
//   endTime: "9:20",
//   color: "#B74F6F",
// });

// events.push({
//   id: 6,
//   day: "Tue, Thu",
//   title: "CMSI 186",
//   startTime: "9:50",
//   endTime: "11:05",
//   color: "#066088",
// });
// events.push({
//   id: 7,
//   day: "Tue",
//   title: "IEEE Meeting",
//   startTime: "20:00",
//   endTime: "21:00",
//   color: "#FFF185",
// });

// events.push({
//   id: 8,
//   day: "Thurs",
//   title: "React Class",
//   startTime: "18:00",
//   endTime: "19:30",
//   color: "#A27035",
// });

export const monthData = dates;
