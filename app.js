new Vue ({
    el:"#vue-app",
    
    data:{
        name : "",
        lastname: "",
        age: 22,
        facebook : "https://www.facebook.com/toshiki.931/",
        count:0,
        Hobby:[],
        gender:""
    },
    methods:{
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