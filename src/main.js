var product=new Vue({
    el:'#product',
    data: {
        shoes: [
            {
                id: 1,
                name: "White sneakers",
                price: 500000,
                discount: 900000,
                img: "src/img/white.png"
            },
            {
                id: 2,
                name: "Red sneakers",
                price: 3000000,
                discount: 5000000,
                img: "src/img/red.png"
            },
            {
                id: 3,
                name: "Blue sneakers",
                price: 1500000,
                discount: 2000000,
                img: "src/img/blue.png"
            },
            {
                id: 4,
                name: "Green sneakers",
                price: 2000000,
                discount: 3000000,
                img: "src/img/green.png"
            }
        ]
    },
    methods: {
        hello(){
            alert("hello")
        },
    }
})