<!-- src/components/Main.vue -->

<template>
    <div class="container">
        <h1>Catchment plastic modelling - INCA-Microplastics</h1>
        <p class="description">
            This is a demonstration page for the INCA-Microplastics model...
            <!-- ... 其他描述性文本 ... -->
        </p>
        <div class="username-input">
            <label
                >Please write in your username (no space nor special
                character):</label
            >
            <input v-model="username" />
        </div>
        <div v-if="username" class="session-message">
            <p>Session loaded</p>
        </div>
        <p class="description">
            Welcome to our INCA-microplastic demonstration tool,
            {{ username }}!
        </p>
        <!-- ... 其他内容 ... -->
    </div>
    <div class="page-section">124</div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            username: "",
            selectedCatchment: "Boreal - Norway",
        };
    },
    methods: {
        changeSite() {
            // Logic to change the site
        },
    },
};
</script>

<style scoped>

.container {
    display: flex;
    font-family: Arial, sans-serif;
    padding: 20px;
}

h1 {
    font-size: 24px;
    margin-bottom: 20px;
}

.description {
    margin-bottom: 20px;
}

.username-input {
    margin-bottom: 20px;
}

.username-input label {
    display: block;
    margin-bottom: 5px;
}

.username-input input {
    padding: 10px;
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.session-message {
    background-color: #f3f3f3;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 20px;
}

.session-message p {
    margin: 0;
}

.page-section {
    font-family: Arial, sans-serif;
    padding: 20px;
}

.catchment-section,
.map-section,
.model-inputs-section,
.model-results-section {
    margin-bottom: 20px;
}

.map-placeholder,
.slider-placeholder,
.chart-placeholder {
    background-color: #f3f3f3;
    height: 200px;
    border: 1px solid #ddd;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
