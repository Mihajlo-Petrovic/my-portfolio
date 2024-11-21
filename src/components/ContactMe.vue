<template>
    <HeaderBar />
    <main>
        <h3 class="fw-bold mt-90 mb-5">Contact Me</h3>
        <form class="w-700 w-max-100 mx-auto text-start" @submit.prevent="submitForm">
            <div class="d-flex w-max-100 flex-wrap">
                <div id="name-container" class="w-max-100 mr-50">
                    <label for="name">Name:</label>
                    <input class="form-control w-300 w-max-100 mb-3" type="text" id="name" v-model="form.name" required />
                </div>

                <div id="email-container" class="w-max-100">
                    <label for="email">Email:</label>
                    <input class="form-control w-300 w-max-100" type="email" id="email" v-model="form.email" required />
                </div>
            </div>

            <div class="w-700 w-max-100 mt-4 h-5">
                <label for="message">Message:</label>
                <textarea class="form-control w-700 w-max-100 h-min-150 h-max-600 h-300" id="message" v-model="form.message" required></textarea>
            </div>

            <button class="mx-auto btn-purple mt-5 pt-0 border-0 mb-300" type="submit">Send</button>
        </form>

        <p class="w-700 w-max-100 mx-auto mt-120">You can also contact me trough my personal email directly: <span class="color-purple">petrovicmihajlo789@gmail.com</span>, or if you have business inquires about NovaKeys: <span class="color-purple">business@novakeys.net</span></p>
    </main>
    <FooterBar />
</template>

<script>
import HeaderBar from './Header.vue';
import FooterBar from './Footer.vue';

export default {
    name: 'ContactMe',
    components: {
        HeaderBar,
        FooterBar,
    },
    data() {
        return {
            form: {
                name: "",
                email: "",
                message: "",
            },
        };
    },
    methods: {
        async submitForm() {
            const url = "https://formspree.io/f/xqaklygw";

            try {
                const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(this.form),
                });

                if (response.ok) {
                    alert("Form submitted successfully!");
                } else {
                    alert("Failed to submit the form.");
                }
            } catch (error) {
                console.error("Error:", error);
                alert("An error occurred.");
            }
        },
    },
};
</script>

<style scoped>
@media (max-width: 875px) {
    #name-container {
        width: 700px;
    }

    #name {
        width: 700px;
    }

    #email-container {
        width: 700px;
    }

    #email {
        width: 700px;
    }
}
</style>