require("dotenv").config();
const express=require("express");
const app=express();
const cors=require("cors");
const Port=process.env.PORT || 3001;
const mongoose=require("mongoose");
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.CLIENTID);
const menuSchema={logo: String,
	name: String,
	description: String,
	price: String,
	category: String};
const Menu=mongoose.model("Menu",menuSchema);
const invoiceSchema={list: [{key: Number, name: String, price: String, qty: Number}], name: String, number: String, email: String, total: Number};
const Invoice=mongoose.model("Invoice",invoiceSchema);

app.post('/print',(req,res) => {
	var obj=new Invoice(req.body);
	obj.save();
})

app.get('/menu',function (req,res){
	Menu.find().then((item) => {
		return res.json(item)})
});

if(process.env.NODE_ENV === 'production') {
	app.use(express.static('frontend/build'));
	app.get("*",(req,res) => {
		res.sendFile(path.resolve(__dirname, "frontend","build","index.html"))
	})
}

app.listen(Port,() => {
	console.log("App is running on port "+Port);
});