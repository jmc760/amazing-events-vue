const { createApp } = Vue;
const url = "https://api-amazingevents.onrender.com/api/amazing-events?time=upcoming";

const app = createApp({
    data(){
        return{
            events: [],
            categories: [],
            checks: [],
            text: "",
            capturedData: []
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
                this.capturedData = this.events;
                response = response.events.map(event => event.category);
                response = [...new Set(response)];
                this.categories = response;
            } catch (error){
                console.log("Error");
            }
        },
        filterData(){
            this.capturedData = this.events.filter(event => {
                return (event.name.includes(this.text) ||
                    (event.name.toLowerCase()).includes(this.text.toLowerCase()))
                    && (this.checks.length === 0 || this.checks.includes(event.category))
            })
        }
    }
})

app.mount("#app")