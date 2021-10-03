import "./Home.css";
import Image from "./sqcH2q7lkvo-unsplash.jpg";
import {useHistory} from "react-router-dom";

function Home() {
	const history=useHistory();
	function handleClick() {
		history.push("/menu");
	}
	return <div className="Home">
		<div className="container">
		  <div className="row rowHome">
			<div className="col">
				<div className="name">
					The Restro
				</div>
				<div className="features">
					Lip Smacking Taste
					<br />
					NO Compromise
				</div>
			</div>
			<div className="col">
				<div className="Image">
					<img className="image" src={Image} alt="Best cuisines in this Area" />
				</div>
				<div>
					<button className="Button" onClick={handleClick}>Order Now</button>
				</div>
			</div>
		  </div>
		</div>
	</div>
}

export default Home;