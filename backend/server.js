const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Album = require("./albumModel");
require("dotenv").config();

const dbUrl = process.env.DATA_BASE_URL;
const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("mongoDB is Connect");
  } catch (error) {
    console.log(error);
  }
};
connectDB();

app.get("/api/albums", async (req, res) => {
  try {
    const albums = await Album.find(req.query);
    albums && res.json({ albums });
  } catch (error) {
    res.json(error);
  }
});

app.get("/api/albums/:id", async (req, res) => {
  try {
    const album = await Album.findOne({ _id: req.params.id });
    album && res.json({ album });
  } catch (error) {
    res.json(error);
  }
});

app.get("/api/albums_list", async (req, res) => {
  try {
    const albums = await Album.find({
      _id: {
        $in: req.query.list,
      },
    });
    albums && res.json({ albums });
  } catch (error) {
    res.json(error);
  }
});

app.post("/api/albums/add", async (req, res) => {
  try {
    await Album.create(req.body);
    res.json({
      message: "Add Successfully",
    });
  } catch (error) {
    res.json({ message: "Invalid User Data." });
  }
});

// app.put("/api/albums/:id", async (req, res) => {
//   try {
//     await Album.findByIdAndUpdate(req.params.id, { $set: req.body });
//     res.json({ message: "Update Successfully" });
//   } catch (error) {
//     res.send(error)
//     res.json({ message: "Something wrong Oh Noo" });
//   }
// });

// app.delete("/api/albums/:id", async (req, res) => {
//   try {
//     await Album.findByIdAndDelete(req.params.id);
//     res.json({ message: "Delete Successfully" });
//   } catch (error) {
//     res.send(error);
//     res.json({ message: "Something wrong Oh Noo" });
//   }
// });
