const API = {
    baseUrl: "https://fakestoreapi.com/",
    getData: function (productUrl, data, method = "GET") {
        return fetch(this.baseUrl + productUrl, {
            method: method, // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json"
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
    },
    getAllData: function (param){
        return this.getData(param).then((res) =>{
            return res.json()

        }).then((data) =>{
            return data
        })
    }
}


export default API