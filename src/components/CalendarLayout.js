import React, { useState } from "react";
import { Grid, Typography, makeStyles, Button, Modal } from "@material-ui/core";
import { data } from "./data";

const useStyles = makeStyles(() => ({
  items: {
    marginTop: 40,
    border: "1px solid #eee",
  },
  calendar: {
    marginTop: 20,
    paddingRight: 10,
  },
  reminders: {
    marginTop: 40,
    marginLeft: 40,
  },
  title: {
    textDecoration: "underline",
    marginBottom: 10,
  },
  event: {
    marginBottom: 5,
    padding: 5,
    borderRadius: "10px",
  },
  modal: {
    display: "flex",
    align: "center",
    justify: "center",
    width: 400,
  },
}));

const mockData = {
  days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  reminders: [
    "Call with React team",
    "Data Structures Lab time",
    "Production Time",
    "Check Assignments",
    "IEEE Meeting",
  ],
};

export default function CalendarLayout() {
  const classes = useStyles();
  const [display, setDisplay] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [eventId, setEventId] = useState("");

  function handleEventModalOpen(event, id) {
    event.preventDefault();
    setEventId(id);
    setModalOpen(true);
  }

  function handleEventModalClose() {
    setEventId("");
    setModalOpen(false);
  }

  return (
    <Grid
      container
      direction='row'
      justify='start'
      style={{ backgroundColor: "#fff" }}
    >
      <Grid
        item
        xs={12}
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: 20,
          marginRight: 20,
        }}
      >
        <Button
          variant='contained'
          onClick={() => setDisplay((prevState) => !prevState)}
        >
          {display ? "Side by Side" : "Full Screen"}
        </Button>
      </Grid>
      {!display ? (
        <Grid item xs={3}>
          <Grid container className={classes.reminders} direction='column'>
            <Typography variant='h4' className={classes.title}>
              REMINDERS
            </Typography>
            {mockData.reminders.map((item) => (
              <li>{item}</li>
            ))}
          </Grid>
        </Grid>
      ) : null}
      <Grid item xs={display ? 12 : 9} className={classes.calendar}>
        <Grid container>
          <Grid item xs={12} align='center'>
            <Typography variant='h4' className={classes.title}>
              CALENDAR
            </Typography>
          </Grid>
          {data.datas.map((date) => (
            <Grid item xs={2} className={classes.items}>
              <Grid container direction='column' alignItems='center'>
                <Grid item style={{ textAlign: "center" }}>
                  <Typography variant='body'>
                    {mockData.days[data.datas.indexOf(date) % 7]}
                  </Typography>
                  <Typography variant='h6'>{date.day}</Typography>
                </Grid>
                <Grid item style={{ marginLeft: 5, marginTop: 10 }}>
                  <Grid container>
                    {data.events
                      .filter((event) =>
                        event.day.includes(
                          mockData.days[data.datas.indexOf(date) % 7]
                        )
                      )
                      .map((item) => (
                        <>
                          <Grid
                            item
                            style={{ backgroundColor: item.color }}
                            className={classes.event}
                            onClick={(event) =>
                              handleEventModalOpen(event, item.id)
                            }
                          >
                            <Typography style={{ fontSize: 12 }}>
                              {item.title}
                            </Typography>
                            <Typography style={{ fontSize: 12 }}>
                              {item.startTime} - {item.endTime}
                            </Typography>
                          </Grid>
                          <Modal
                            open={modalOpen}
                            onClose={handleEventModalClose}
                            className={classes.modal}
                            style={{ backgroundColor: item.color }}
                          >
                            <Typography style={{ backgroundColor: "white" }}>
                              HELLO
                            </Typography>
                          </Modal>
                        </>
                      ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
