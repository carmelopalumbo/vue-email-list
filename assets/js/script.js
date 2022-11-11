// vue

const {createApp} = Vue;

createApp({

    data(){
        return{
            mailList: [],
            apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
            count: 0
        }
    },

    methods: {
        getApi(){
            if(this.count < 10){
                axios.get(this.apiUrl)
                .then( result => {
                    this.mailList.push(result.data.response);
                })
                return this.getApi(++this.count)
            }
            console.log(this.isLoad);
        }
    },

    mounted(){
        this.getApi();
    }
}).mount('#app')