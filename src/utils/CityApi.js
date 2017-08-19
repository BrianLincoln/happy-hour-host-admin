import _ from 'lodash';

const cityApi = {
   getCities: function() {
    return fetch('http://localhost:9000/cities').then((response) => response.json())
    .then((cities) => {
        // do stuff with responseJSON here...
       return cities;
    });
   },
   postCity: function(name) {
    return fetch('http://localhost:9000/city', {      
        method: 'post',
        body: JSON.stringify({
            name: name
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }        
    })
    .then(function(res){ console.log(res) })
    .catch(function(res){ console.log(res) })
   },
   deleteCity: function(_id) {
    return fetch('http://localhost:9000/city', {      
        method: 'delete',
        body: JSON.stringify({
            _id: _id
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }        
    })
    .then(function(res){ console.log(res) })
    .catch(function(res){ console.log(res) })
   },

   getNeighborhoods: function(cityId) {
    return fetch('http://localhost:9000/city/' + cityId + '/neighborhood',).then((response) => response.json())
    .then((neighborhoods) => {
        console.log("fetched result: ", neighborhoods);
        // do stuff with responseJSON here...
       return neighborhoods;
    });
   },
   postNeighborhood: function(cityId, neighborhoodName) {
    return fetch('http://localhost:9000/city/' + cityId + '/neighborhood', {      
        method: 'post',
        body: JSON.stringify({
            name: neighborhoodName
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }        
    })
    .then(function(res){ console.log(res) })
    .catch(function(res){ console.log(res) })
   },

}


export default cityApi;