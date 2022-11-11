// vue

const {createApp} = Vue;

createApp({

    data(){
        return{
            mailList: [],
            apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
            count: 0,
            isLoad: false
        }
    },

    methods: {
        getApi(){
            this.mailList = [];
            if(this.count < 10){
                axios.get(this.apiUrl)
                .then( result => {
                    this.mailList.push(result.data.response);
                })
                return this.getApi(++this.count)
            }
            this.isLoad = true;
            this.count = 0;
        },

        checkLoading(){
            return this.mailList.length === 10;
        }
    },

    mounted(){
        this.getApi();
    }
}).mount('#app')