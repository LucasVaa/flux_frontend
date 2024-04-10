<!-- src/components/Footer.vue -->

<template>
    <footer class="footer">
        <div class="copyright">© NKU</div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
};
</script>

<style scoped>
.footer {
    background-color: #f7f7f7;
    padding: 40px 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%; /* 确保宽度为 100% */
    box-sizing: border-box; /* 使宽度包括内边距和边框 */
    margin: 0; /* 移除外边距 */
}

.footer-section {
    flex: 1;
    margin: 20px;
}

.address,
.about-links,
.legal-links {
    line-height: 1.6;
}

.partner-logos img {
    margin: 0 20px;
    max-height: 40px;
}

.social-icons img {
    margin: 0 10px;
    max-height: 25px;
}

.copyright {
    text-align: center;
    margin-top: 20px;
    width: 100%;
    font-size: 14px;
}
</style>
