import mongoose from "mongoose";
export default async function connectMGDB(dbURL) {
    try {
        await mongoose.connect(process.env.MONGODB_COONECT_URI)
        console.log("Connect thành công")
    } catch(err) {
        console.log("lỗi" + err)
    }
}