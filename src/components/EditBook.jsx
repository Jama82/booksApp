import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBook, editBook } from "../api/api";
import "./EditBook.css";

const initialValues = {
	title: "",
	author: "",
};

const EditBook = () => {
	const navigate = useNavigate();
	const { id } = useParams();

	//hook
	const [book, setBook] = useState(initialValues);

	useEffect(() => {
		getBookData();
	}, []);

	const getBookData = async () => {
		let res = await getBook(id);
		console.log(res);
		setBook(res.data);
	};

	const onValueChange = (e) => {
		// console.log(e.target.name, e.target.value);
		setBook({ ...book, [e.target.name]: e.target.value });
		console.log(book);
	};

	const addBookDetails = async () => {
		await editBook(book, id);
		navigate("/all");
	};

	return (
		<div className="edit">
			<form>
				<input className="item" type="text" value="Title " />

				<input
					className="chose"
					type="text"
					onChange={(e) => onValueChange(e)}
					name="title"
					value={book.title}
				/>
			</form>
			<form>
				<input className="item" type="text" value="Author" />

				<input
					className="chose"
					onChange={(e) => onValueChange(e)}
					name="author"
					value={book.author}
				/>
			</form>
			<form>
				<button className="addbtn" onClick={() => addBookDetails()}>
					Edit{""}
				</button>
			</form>
		</div>
	);
};

export default EditBook;
