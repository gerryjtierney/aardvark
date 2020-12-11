const express = require("express");
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const path = require("path");

//set up our express app
const app = express();



//bodyparser middleware
app.use(express.json());


//db config
const db = require("./config/keys").mongoURI;

//use routes

app.use("/api/starters", require("./routes/api/starters"));
app.use("/api/mains", require("./routes/api/mains"));
app.use("/api/desserts", require("./routes/api/desserts"));
app.use("/api/bookings", require("./routes/api/bookings"));
app.use("/api/lunchBookings", require("./routes/api/lunchBookings"));




// serve static assets if in production
if (process.env.NODE_ENV == "production") {
    //set static folder
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
}


//connect to mongo
mongoose
    .connect(db, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Mongo connected"))
    .catch(err => console.log(err));




app.listen(port, () => console.log(`listening on port: ${port}`));

