import mongoose from "mongoose";
import config from "./config";

const params = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
};

mongoose
    .connect(config.MONGODB_URL, params)
    .then((db) => console.log('DB is connected'))
    .catch((err) => console.log(err));