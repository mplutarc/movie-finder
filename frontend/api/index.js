import axios from "axios";

export class Api {
	static async search(query, genres, page) {
		return (await axios.post('http://127.0.0.1:8080/search', {
			query, genres, page
		})).data;
	}

	static async genres() {
		return (await axios.get('http://127.0.0.1:8080/genres')).data;
	}
}