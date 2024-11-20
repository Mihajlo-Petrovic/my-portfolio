<template>
    <HeaderBar />
    <div id="content">
        <div id="section">
            <!--Education-->
            <h3 class="display-6 fw-bold mt-70 mb-4">Education</h3>

            <p class="mb-1 fs-5">High School of Electrical Engineering "Rade Končar" (2020-2024)</p>
            <p class="mt-1 fs-6 fw-normal color-purple">Electrotechnician of Information Technologies</p>

            <p class="mt-4 mb-1 fs-5">MEF University (2024-now)</p>
            <p class="mt-1 fs-6 fw-normal color-purple">Applied Information Technologies</p>

            <!--Skills-->
            <h3 class="display-6 fw-bold mt-90 mb-4">Skills</h3>

            <p><span class="color-purple fw-normal">Frontend:</span> &nbsp; HTML, CSS, JavaScript, Vue.js</p>
            <p><span class="color-purple fw-normal">Backend:</span> &nbsp; PHP, Laravel, C#</p>
            <p><span class="color-purple fw-normal">Databases:</span> &nbsp; MySQL, MariaDB</p>
            <p><span class="color-purple fw-normal">Tools:</span> &nbsp; Postman, Git, Owasp ZAP, Microsoft Azure</p>

            <!--More About Me-->
            <h3 class="display-6 fw-bold mt-90 mb-4">More About Me</h3>

            <p class="fs-6 mb-5 w-800 mx-auto fw-normal">
                I am a backend developer with experience in building web applications. Currently, I’m working on launching 
                NovaKeys, my first platform for purchasing digital goods, which will feature localized 
                payment options and aim to solve key challenges in the local digital marketplace.
            </p>
        </div>
    </div>
    <FooterBar />
</template>

<script>
import HeaderBar from './Header.vue';
import FooterBar from './Footer.vue';

export default {
    name: 'AboutMe',
    components: {
        HeaderBar,
        FooterBar,
    },
};
</script>