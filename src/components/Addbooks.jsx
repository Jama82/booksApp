import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addBook } from "../api/api";
import "./Addbooks.css";

const initialValues = {
	title: "",
	author: "",
};

const AddBooks = () => {
	const navigate = useNavigate();

	const [book, setBook] = useState(initialValues);
	const onValueChange = (e) => {
		setBook({ ...book, [e.target.name]: e.target.value });
		console.log(book);
	};

	const addBookDetails = async () => {
		await addBook(book);
		navigate("/all");
	};

	return (
		<div className="add">
			<form>
				<input type="text" className="item" value="Title:" />
				<input
					className="chose"
					onChange={(e) => onValueChange(e)}
					name="title"
				/>
			</form>
			<form>
				<input type="text" className="item" value="Author:" />
				<input
					className="chose"
					type="text"
					onChange={(e) => onValueChange(e)}
					name="author"
				/>
			</form>

			<button className="addbtn" onClick={() => addBookDetails()}>
				Add{" "}
			</button>
		</div>
	);
};

export default AddBooks;
