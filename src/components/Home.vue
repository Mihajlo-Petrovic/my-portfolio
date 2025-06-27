<template>
  <div class="w-fc w-max-85 mx-auto mt-90">
    <h1 class="display-2 text-start fw-normal"><span class="color-purple fw-bold">Hello,</span><br>I am <span class="fw-bold">Mihajlo Petrović.</span></h1>
    <h3 class="fs-3 text-start fw-bold color-purple">Full-Stack Web Developer</h3>
    <p class="text-start fw-bold mt-90 w-600 w-max-85">
      I enjoy designing normalized relational database schemas that are flexible and scalable for potential changes down the road. I enjoy designing the 
      architecture of an application, thinking about how its components will interact with each other, what is the best and most widely used, and thus, 
      the most easily understandable approach, how to keep coupling low and cohesion high, how would I design this to allow for easier changes later. 
      Really, to put it simply, I enjoy solving real-world problems, while thinking about how the users and fellow developers will interact with the 
      application.
    </p>

    <div id="page-links-container" class="mt-200 d-flex gap-4 mx-auto w-fc w-max-100 flex-wrap mb-90">
      <router-link to="/about-me" class="btn-purple">About Me</router-link>
      <router-link to="/projects" class="btn-purple">Projects</router-link>
      <router-link to="/contact-me" class="btn-purple">Contact Me</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  mounted() {
    document.body.style.backgroundColor = '#e6e6ff';
    document.body.style.fontFamily = 'Inter';
    document.body.style.fontWeight = '800';
    document.body.style.color = '#1e1738';
  },
};
</script>

<style scoped>
@media (max-width: 660px) {
  #page-links-container {
    display: block !important;
  }

  .btn-purple {
    margin-block: 20px;
  }
}
</style>