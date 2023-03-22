const { createApp } = Vue;
const url = "https://api-amazingevents.onrender.com/api/amazing-events";

const app = createApp({
    data() {
        return {
            highestAttendance: "",
            lowestAttendance: "",
            largestCapacity: "",
            categories2: [],
            revenue2: "",
            percentage2: "",
            categories3: [],
            revenue3: "",
            percentage3: ""
        }
    },
    created() {
        this.fetchOnlyOne()
    },
    methods: {
        async fetchOnlyOne() {
            /*Table 1*/
            let response = await fetch(url);
            response = await response.json();
            this.highestAttendance = (response.events.sort((a, b) =>
                ((b.assistance * 100) / b.capacity) - ((a.assistance * 100) / a.capacity)
            ))[0].name;
            this.lowestAttendance = (response.events.sort((a, b) =>
                ((a.assistance * 100) / a.capacity) - ((b.assistance * 100) / b.capacity)
            ))[0].name;
            this.largestCapacity = (response.events.sort((a, b) => b.capacity - a.capacity))[0].name;
            /*Table 2*/
            let response2 = await fetch(url + "?time=upcoming");
            response2 = await response2.json();
            response2 = response2.events.map(event => event.category);
            response2 = [... new Set(response2)];
            this.categories2 = response2;
/*             this.categories2 = this.categories2.filter((item, index) => 
                this.categories2.indexOf(item) === index).sort(); */
        }
    }
})

app.mount("#app")