import React, { useState, useEffect } from "react";
import './displayFoodish.css'
import RefreshButton from "../../atoms/refreshButton/refreshButton";
import Loader from "../../atoms/loader/loader";

function DisplayFoodish() {
	const [isLoading, setIsLoading] = useState(false)
	const [data, setData] = useState("https://foodish-api.com/images/burger/burger48.jpg")
	const [error, setError] = useState("")

	const url = "https://foodish-api.com/images/burger"
	const randomBurger = Math.floor(Math.random() * 10)
	const listOfBurger = [
		"burger87.jpg",
		"burger13.jpg",
		"burger29.jpg",
		"burger48.jpg",
		"burger33.jpg",
		"burger79.jpg",
		"burger77.jpg",
		"burger45.jpg",
		"burger86.jpg",
		"burger61.jpg",
	];


	const handleClick = () => {
		setIsLoading((prev) => !prev)
		console.log('hello world')
		fetch(url)
			.then((response) => {
				setIsLoading(prev => !prev)
				console.log(response)
				console.log(`${response.url}${listOfBurger[randomBurger]}`)
				setData(`${response.url}${listOfBurger[randomBurger]}`)

			})
			.catch((error) => {
				setError(error)
			})
	}

	return (
		<div>
			<h1>Burger Foodish</h1>
			{isLoading ? <Loader/> : <img className="foodish-image" alt="foodish image" src={data} />}
			<p>{error}</p>
			<RefreshButton onClick={() => handleClick()} />
		</div>
	)
}
export default DisplayFoodish