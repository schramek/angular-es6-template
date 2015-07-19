class RestService {
    constructor($http, $resource){
        this.$http = $http;
        this.$resource = $resource;
    }

    findById(id) {

    }

    getService() {
        return this.$resource('https://api.github.com/users');
    }
 
    getUsers(){
        return this.$http.get('https://api.github.com/users').then(r => r.data);
    }

    static factory($http, $resource){
    	return new RestService($http, $resource);
  	}
}
 
RestService.factory.$inject = ['$http', '$resource'];
 
export { RestService };