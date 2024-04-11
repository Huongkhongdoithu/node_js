import productRouter from "./productRoutes.js";
import authRouter from "./authRoutes.js";
import categoryRouter from "./categoryRoutes.js";
export default function routes(app){
    app.get("/", (req,res) => {
        res.send({message: "server đang chạy"})
    })
    app.use('/products', productRouter)
    app.use('/auth', authRouter)
    app.use('/categories', categoryRouter)
}