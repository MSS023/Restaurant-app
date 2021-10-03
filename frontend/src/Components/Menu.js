import "./Menu.css";
import React,{useState,useEffect} from "react";
import Item from "./Item";

function Menu(props) {
	var [list,setList]=useState([]);
	useEffect(()=>{if(list.length===0 && localStorage.getItem("list")===null)
	{
		fetch("/loadmenu").then((response)=>{
			if(response.ok)
				return response.json()
		}).then(res => {
			var obj=res;
			localStorage.setItem("list",JSON.stringify(obj));
			if(localStorage.getItem("order")===null || JSON.parse(localStorage.getItem("order")).length!==obj.length)
			{
				var li=[];
				obj.forEach((item) => {li.push(0)})
				localStorage.setItem("order",JSON.stringify(li));
				localStorage.setItem("total",0);
			}
			return setList(obj);
		});
	}
		else {
			setList(JSON.parse(localStorage.getItem("list")));
		}
	});
	return <div className="Menu">
		<p className="menu"> Menu </p>
		{list.map((item,key) => <Item item={item} index={key} />)}
	</div>
}

export default Menu;