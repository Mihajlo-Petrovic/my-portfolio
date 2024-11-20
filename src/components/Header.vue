<template>
    <div id="header">
        <div id="links-container">
            <router-link to="/" class="header-item">Home</router-link>
            <router-link to="/about-me" class="header-item">About Me</router-link>
            <router-link to="/projects" class="header-item">Projects</router-link>
            <router-link to="/contact-me" class="header-item">Contact Me</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderBar',
}
</script>

<style scoped>
#header {
    background-color: #462e9e;
    height: 70px;
    display: flex;
}

#links-container {
    display: flex;
    width: fit-content;
    margin-inline: auto;
    margin-top: 19px;
    gap: 40px;
}

.header-item {
    color: #f3f3fd;
    text-decoration: none;
    font-size: 20px;
    font-weight: 500;
    user-select: none;
}

.header-item:hover {
    color: #b7a7ff;
    cursor: pointer;
}

.router-link-active {
    color: #b7a7ff;
}
</style>