import "./Menu.css";
import React,{useState} from "react";
import Item from "./Item";
import axios from "axios";

function Menu(props) {
	var [list,setList]=useState([0]);
	axios.get("/loadmenu").then((res) => {
		var l=res.data;
		if(localStorage.getItem("order")===null || JSON.parse(localStorage.getItem("order")).length!==l.length)
		{
			var li=[]
			list.forEach((item) => {li.push(0)})
			localStorage.setItem("order",JSON.stringify(li));
			localStorage.setItem("total",0);
		}
		localStorage.setItem("list",JSON.stringify(l));
		setList(l);
	})
	
	return <div className="Menu">
		<p className="menu"> Menu </p>
		{list.map((item,key) => <Item item={item} index={key} />)}
	</div>
}

export default Menu;