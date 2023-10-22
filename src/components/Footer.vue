<!-- src/components/Footer.vue -->

<template>
    <footer class="footer">
        <div class="footer-section">
            <div class="address">
                <h4>Address</h4>
                Økernveien 94, 0579 Oslo, Norway <br />
                info@ikhapp.org
            </div>
            <div class="social-icons">
                <!-- 这里可以添加社交图标链接，例如 Twitter, YouTube, LinkedIn -->
                <a href="#"
                    ><img src="@/assets/twitter-icon.png" alt="Twitter"
                /></a>
                <a href="#"
                    ><img src="@/assets/youtube-icon.png" alt="YouTube"
                /></a>
                <a href="#"
                    ><img src="@/assets/linkedin-icon.png" alt="LinkedIn"
                /></a>
            </div>
        </div>

        <div class="footer-section">
            <div class="partner-logos">
                <!-- 合作伙伴的图标 -->
                <img src="@/assets/partner1.png" alt="Partner 1" />
                <img src="@/assets/partner2.png" alt="Partner 2" />
                <!-- ... 其他合作伙伴图标 ... -->
            </div>
        </div>

        <div class="footer-section">
            <div class="about-links">
                <h4>About</h4>
                Library <br />
                Stories and Research Briefs <br />
                Updates and Events
            </div>
            <div class="legal-links">
                <h4>Legal</h4>
                Privacy Policy <br />
                Sitemap
            </div>
        </div>

        <div class="copyright">© IKHAPP Website by WebCastle</div>
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
    min-width: 1240px;
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
