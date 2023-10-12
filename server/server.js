import express from 'express'
import morgan from 'morgan'
import ViteExpress from 'vite-express'

//Creates an Express instance called "app"
const app = express()

//Set up Middleware
app.use(morgan("dev"))
app.use(express.urlencoded({extended: false}))
app.use(express.static("public"))
app.use(express.json())

//Import handler functions
import handlerFunctions from './controller.js'

//Routes/Endpoints
app.get("/invoices", handlerFunctions.getInvoices)
app.post("/addInvoice", handlerFunctions.addInvoice)
app.delete("/deleteInvoice/:id", handlerFunctions.deleteInvoice)
app.put("/editInvoice/:id", handlerFunctions.editInvoice)

//Opens a "door" to the server
ViteExpress.listen(app, 8000, () => console.log(`App has been initialized to http://localhost:8000`))

