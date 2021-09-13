import axios from "axios";

export class Api {
	static async search(query, genres, page) {
		return (await axios.post('http://127.0.0.1:8090/search', {
			query, genres, page
		})).data;
	}

	static async getGenres() {
		return (await axios.get('http://127.0.0.1:8090/genres')).data;
	}
}