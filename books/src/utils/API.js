import axios from 'axios';

export default {
  googleBooks: function(query) {
    return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + query + '&key=AIzaSyCzHytF8Z77YQzQnlBpHQ3lktqNwz8M2Mc&maxResults=20');
  }
};
