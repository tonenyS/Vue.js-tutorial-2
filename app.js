new Vue ({
    el:"#vue-app",
    
    data:{
        name : "mahidon",
        lastname: "Thaipuvnart",
        age: 22,
        facebook : "https://www.facebook.com/toshiki.931/",
        count:0,
    },
    methods:{
        setName:function(n){
            return this.name = n
        },

        agePlus:function(){
            return this.age++
        },

        ageRub:function(){
            return this.age--
        },
        addCount:function(){
            this.count ++;
            
        }
    }
})