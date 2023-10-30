<!-- src/components/Navbar.vue -->

<template>
    <nav class="navbar">
        <div class="logo-container">
            <img src="@/assets/logo.png" alt="NKU" class="logo" />
            NKU
        </div>
        <ul class="nav-links">
            <li><router-link to="/about-us">About Us</router-link></li>
            <li>
                <a href="https://env.nankai.edu.cn/" target="_blank"
                    >The College of Environmental Science and Engineering</a
                >
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "Navbar"
};
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background-image: linear-gradient(315deg, #781a68 0%, #781a68 74%);
    transition: background-color 0.3s ease;
    color: #ffffff;
}

.logo-container {
    display: flex;
    align-items: center;
}

.logo {
    width: 140px; /* 根据实际 logo 大小调整 */
    margin-right: 15px;
}

.nav-links {
    display: flex;
    gap: 40px;
    list-style-type: none;
}

.nav-links a {
    text-decoration: none;
    color: white;
    padding: 5px 10px;
}

.nav-links a:hover {
    background-color: #555;
    border-radius: 5px;
}
</style>
