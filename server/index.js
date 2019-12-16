const express = require("express");
const app = express();
//controller functions
const {
    addFutureEvent, getFutureEvents, getCompletedEvents, addCompletedEvent, 
    deleteFutureEvent, deleteCompletedEvent, editComplete

} = require("./controller")

app.use(express.json());

app.post('/api/events', addFutureEvent)
app.post('/api/completed', addCompletedEvent)
app.get('/api/events', getFutureEvents)
app.get('/api/completed', getCompletedEvents)
app.delete('/api/events/:id', deleteFutureEvent)
app.delete('/api/completed/:id', deleteCompletedEvent)
app.put('/api/completed/:id', editComplete)


app.listen(5050, ()=> console.log("Listening on port 5050"))