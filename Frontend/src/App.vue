<template>
    {{ counter }}
    <button @click="increment">increase</button>
</template>

<script>
import axios from "axios"

export default {
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        // async signup() {
        //     const result = await axios.post("/user", {
        //         username: this.username
        //     })
        // },
        // async users() {
        //     const result = await axios.get("/users")
        //     console.log(result.data);
        // }
        increment(){
          this.counter++
        }
    },
}
</script>