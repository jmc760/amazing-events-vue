const { createApp } = Vue;
const url = "https://api-amazingevents.onrender.com/api/amazing-events";

const app = createApp({
    data() {
        return {
            event: {}
        }
    },
    created() {
        this.captureId();
    },
    methods: {
        async captureId() {
            let params = new URLSearchParams(location.search);
            let id_query = params.get("id");
            try {
                let fetchResponse = await fetch(url + "/" + id_query);
                let responseApi = await fetchResponse.json();
                responseApi.response.date = responseApi.response.date.substring(0,10);
                this.event = responseApi;
            } catch (error) {
                console.log("Error")
            }
        }
    }
})

app.mount("#app")