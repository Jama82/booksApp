import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBooks, deleteBook } from ".././api/api";
import "./Books.css";

const Books = () => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		getBooksDetails();
	}, []);

	const getBooksDetails = async () => {
		let { data } = await getBooks();
		setBooks(data);
	};

	const deleteBookData = async (id) => {
		await deleteBook(id);
		getBooksDetails();
	};

	return (
		<div className="books">
			<table className="table">
				<tbody className="header">
					<tr>
						<th>Book's Title:</th>
						<th>Book's Author:</th>
					</tr>
				</tbody>
				<tbody>
					{books.map((book) => (
						<tbody>
							<th>{book.title}</th>
							<th>{book.author}</th>
							<th>
								<button onClick={() => deleteBookData(book.id)}>Delete</button>
							</th>
							<th>
								<button>
									<Link to={`/edit/${book.id}`}>Edit</Link>
								</button>
							</th>
						</tbody>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Books;
