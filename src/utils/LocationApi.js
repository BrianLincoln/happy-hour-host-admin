import _ from 'lodash';

const locationApi = {
   getLocations: function(bounds) {
    return fetch('https://api.myjson.com/bins/1axonz').then(function(response) {
        return response.json();
    }).then(function(response) {
        let results = [];
        if (bounds) {
            results = _.remove(response.businesses, function(n) {
                return positionIsInBounds(n.position, bounds);
            });
            return results;
        }
        return results;
    });
   }
}

function positionIsInBounds(position, bounds) {
    if (position.latitude < bounds.ne.lat() && 
        position.latitude > bounds.sw.lat() &&
        position.longitude > bounds.sw.lng() &&
        position.longitude < bounds.ne.lng()) {
            return true;
        }
    return false;    
}

export default locationApi;