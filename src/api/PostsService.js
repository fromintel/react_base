import axios from 'axios';

export default class PostsService {
    static async getAll(limit = 15, page = 1) {
        return await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        });
    }
}