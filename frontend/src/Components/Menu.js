import "./Menu.css";
import React,{useState} from "react";
import Item from "./Item";
import axios from "axios";

function Menu(props) {
	var [list,setList]=useState([0]);
	axios.get("/loadmenu").then((res) => {
		var l=res.data;
		localStorage.setItem("list",JSON.stringify(l));
		setList(l);
	})
	return <div className="Menu">
		<p className="menu"> Menu </p>
		{list.map((item,key) => <Item item={item} index={key} />)}
	</div>
}

export default Menu;