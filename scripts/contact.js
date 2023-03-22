const { createApp } = Vue;
const url = "https://api-amazingevents.onrender.com/api/amazing-events";

const app = createApp({
    data() {
        return {
            name: "",
            email: "",
            message: ""
        }
    },
    created() {

    },
    methods: {
        captureData() {
            console.log({
                name: this.name,
                email: this.email,
                message: this.message
            })
        }
    }
})

app.mount("#app")