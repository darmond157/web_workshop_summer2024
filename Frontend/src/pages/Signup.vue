<template>
    <div class="text-white flex mt-20">
        <div class="w-1/2 text-8xl font-thin tracking-wider flex flex-col pl-32 leading-tight">
            <p><b>S</b>harif</p>
            <p><b>S</b>oftware</p>
            <p><b>S</b>eminar</p>
            <p><b>S</b>eries</p>
        </div>
        <div class="w-1/2 pr-48 text-right">
            <p class="text-6xl mb-10">ثبت نام</p>
    
            <label class="text-2xl">:نام کاربری</label>
            <input v-model="username" class="text-white bg-transparent border-2 border-white rounded-xl p-2.5 w-full mb-4" type="text" placeholder="please enter username ...">
            <label dir="rtl" class="text-2xl">رمز عبور:</label>
            <input v-model="password" class="text-white bg-transparent border-2 border-white rounded-xl p-2.5 w-full" type="password" placeholder="please enter password ...">
    
            <button @click="signup" class="button bg-white text-black w-full mt-4 p-1 rounded-xl text-2xl">ثبت نام</button>
    
            <div class="border-4 border-gray-600 w-full p-2.5 mb-7">
                <input type="file" @change="handleFileUpload" class="border-4 w-full border-dotted p-1">
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
    data() {
        return {
            username: "",
            password: "",
            selectedFile: ""
        }
    },
    methods: {
        async signup() {
            // const result = await axios.post("http://localhost:3000/signup", {
            //     username: this.username,
            //     password: this.password
            // })
            this.submitResume()
            // console.log(result.data);
        },
        handleFileUpload(event) {
            this.selectedFile = event.target.files[0];
        },
        async submitResume() {
            try {
                const formData = new FormData()
                formData.append('file', this.selectedFile)
                if (this.selectedFile.size / 1000 > 20000 || this.selectedFile.type !== "application/pdf") return;
                await axios.post(`http://localhost:3000/resume`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                })
            } catch (e) {
                this.isLoading = false
                this.error = true
                console.log(e);
            }
        },
    },
}
</script>