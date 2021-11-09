const app = new Vue({
    el: "#root",
    data: {
        emails: [],
        error: "",

    },

    mounted() {
        for (let i = 0; i < 10; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then(myResp => {
                //console.log(myResp);
                //console.log(myResp.data.response);
                this.emails.push(myResp.data.response)
                // if (myResp.request.readyState === 4 && myResp.status === 200) {
                //     
                // }
                //console.log(this.emails);
            }).catch(e => {
                console.error(e, "OPS!");
                this.error = e
            })

        }

    }
})