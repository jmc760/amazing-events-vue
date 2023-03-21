const { createApp } = Vue;
const url = "https://api-amazingevents.onrender.com/api/amazing-events?time=upcoming";

const app = createApp({
    data(){
        return{
            events: [],
            categories: []
        }
    },
    created(){
        this.fetchOnlyOne();
    },
    methods:{
        async fetchOnlyOne(){
            try{
                let response = await fetch(url);
                response = await response.json();
                this.events = response.events;
                response = response.events.map(event => event.category);
                response = [...new Set(response)];
                this.categories = response;
            } catch (error){
                console.log("Error");
            }
        }
    }
})

app.mount("#app")