const app = new Vue({
    el: "#root",
    data: {
        emails: [],

    },

    mounted() {
        for (let i = 0; i < 10; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then(myResp => {
                //console.log(myResp);
                this.emails.push(myResp.data.response)
                //console.log(this.emails);
            })

        }

    }
})