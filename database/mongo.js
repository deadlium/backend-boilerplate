import mongoose from "mongoose";
const { connect, connection } = mongoose;

export const mongoConnection = async () => {
    try {
        connect(process.env.MONGO_URI);
        connection.on('connected', () => {
            console.log("");
            console.log("|||||||||||||||||||||||||||||||||||")
            console.log("||| MONGODB Connected : '27017' |||");
            console.log("|||||||||||||||||||||||||||||||||||")
        });
    } catch (err) {
        console.log("");
        console.error("|||||||||||||||||||||||||||||||||||")
        console.error("|||| MONGODB Connected : '500' ||||");
        console.error("|||||||||||||||||||||||||||||||||||")
    }
};