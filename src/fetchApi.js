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
    },

    getSingleProduct: function(id){
        return this.getData(`products/${id}`).then((res) =>{
            return res.json()
        }).then((data) => {
            return data
        })

    },

    userLoggedin: function (email, password){
        let userInfo = {
            email,
            password,
        }
        return this.getData('auth/login',userInfo, 'POST')
    }

}


export default API