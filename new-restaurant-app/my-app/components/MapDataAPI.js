const api =  'https://api.foursquare.com/v2'
const proxyurl = ''

let token = localStorage.token
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(8)

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const getLocationsAll = () =>
    fetch('${api}/venues/search?ll=45.5122308,-122.6587185&intent=browse&radius=10000&query=restaurants&client_id=DQRJIJMNVX5GBIN1C4F5FJOREDG2TKEJTF5IXVYJSV41EQTW&client_secret=BZPWNB5SJMCO0XYUFI3WDBC0F5AUP11VCLINDFWJFXPJBMSC&v=20180708')
        .then(handleErrors)
        .then(res => res.json())
        .then(data => data.response.venues)

export const getVenueDetails = (venueId) => {
let VenueDetailsUrl = [ '/venues/${venueId}?',
                        'client_id=DQRJIJMNVX5GBIN1C4F5FJOREDG2TKEJTF5IXVYJSV41EQTW&',
                        'client_secret=BZPWNB5SJMCO0XYUFI3WDBC0F5AUP11VCLINDFWJFXPJBMSC'].join("")

return fetch('${api}${venueDetailsUrl}')
        .then(res => res.json())
        .then(data => data.response.venue)
}

