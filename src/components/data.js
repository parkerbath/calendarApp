let dates = [];
for (let i = 1; i < 29; i++) {
  let d = new Date(2021, 2, i).toLocaleDateString("en-US").split("/");
  let day = { month: d[0], day: d[1], year: d[2] };
  dates.push(day);
}

let events = [];
events.push({
  day: "Mon, Wed, Fri",
  title: "Journalism Class",
  startTime: "11:00",
  endTime: "12:00",
  color: "#fff07c",
});
events.push({
  day: "Mon",
  title: "React Team Meeting",
  startTime: "13:00",
  endTime: "14:00",
  color: "#A27035",
});
events.push({
  day: "Mon, Wed",
  title: "Theology Class",
  startTime: "14:00",
  endTime: "15:30",
  color: "#87BBA2",
});
events.push({
  day: "Mon",
  title: "Production",
  startTime: "17:30",
  endTime: "19:30",
  color: "#00A0CC",
});

events.push({
  day: "Thurs",
  title: "Rhetorical Arts Class",
  startTime: "7:50",
  endTime: "9:20",
  color: "#B74F6F",
});

events.push({
  day: "Tue, Thu",
  title: "CMSI 186",
  startTime: "9:50",
  endTime: "11:05",
  color: "#034078",
});
events.push({
  day: "Tue",
  title: "IEEE Meeting",
  startTime: "20:00",
  endTime: "21:00",
  color: "#FFF185",
});

events.push({
  day: "Thurs",
  title: "React Class",
  startTime: "18:00",
  endTime: "19:30",
  color: "#A27035",
});

export const data = {
  datas: dates,
  events: events,
};
