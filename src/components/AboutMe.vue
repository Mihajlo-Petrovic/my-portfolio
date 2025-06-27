<template>
    <HeaderBar />
    <div id="content">
        <main>
            <section class="mb-140">
                <h3 class="fw-bold mt-90 mb-5">Education</h3>

                <p class="mb-1 fs-5">High School of Electrical Engineering "Rade Končar" (2020-2024)</p>
                <p class="mt-1 fs-6 color-purple">Electrotechnician of Information Technologies</p>

                <p class="mt-4 mb-1 fs-5">MEF University (2024-Now)</p>
                <p class="mt-1 fs-6 color-purple">Applied Information Technologies</p>
            </section>

            <section class="mb-140">
                <h3 class="fw-bold mb-5">Skills</h3>

                <p><span class="color-purple">Frontend:</span> &nbsp; HTML, CSS, JavaScript, Vue.js, Bootstrap, Tailwind CSS</p>
                <p><span class="color-purple">Backend:</span> &nbsp; PHP, Laravel, C#, .NET, Python</p>
                <p><span class="color-purple">Databases:</span> &nbsp; MySQL, MariaDB, Microsoft SQL Server, Redis</p>
                <p><span class="color-purple">Tools:</span> &nbsp; Postman, Git, Docker</p>
            </section>

            <section class="mb-140">
                <h3 class="fw-bold mb-5">Experience</h3>

                <p class="mb-1 fs-5">Wargaming Group Limited (2.5 Months)</p>
                <p class="mt-1 fs-6 color-purple">Backend Engineering Early Careers Program</p>
            </section>

            <section class="mb-140">
                <h3 class="fw-bold mb-5">More About Me</h3>

                <p class="fs-6 w-800 w-max-100 mx-auto">
                    I am a passionate and driven full-stack developer currently pursuing a degree in Applied Information Technologies at MEF 
                    University. I began my journey into software development at a young age, learning through personal projects and academic 
                    coursework. When I was in middle school, I started making games in Unity with C#. These games sparked my interest in 
                    programming, and over the years, I’ve developed a wide range of web and desktop applications. My education at the High 
                    School of Electrical Engineering "Rade Končar" laid a solid foundation for my knowledge of software development, and since 
                    then, I’ve been continuously expanding my skill set. With my recent projects, I’ve gained experience working with backend 
                    and frontend applications, databases, deployment, maintenance, and CI/CD pipelines. As I continue to work on NovaKeys, 
                    sklopi, and other projects, my goal is to keep growing as a developer and to create innovative apps that meet real user 
                    needs. I'm always looking for opportunities where I can contribute my skills, learn from experienced developers, and take 
                    on new challenges.
                </p>
            </section>
        </main>
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

<style scoped>
    @media (max-width: 300px) {
        h3 {
            font-size: 32px;
        }
    }
</style>
