<!-- src/components/Home.vue -->

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
    <div class="page-section">
        <!-- Catchment selection section -->
        <div class="catchment-section">
            <label>Which type of catchment would you like to work with?</label>
            <select v-model="selectedCatchment">
                <option value="area1">地点一</option>
                <option value="area2">地点二</option>
                <option value="area3">地点三</option>
                <!-- Add more options as needed -->
            </select>
            <p>You selected: {{ selectedCatchment }}!</p>
            <button @click="changeSite">Change site!</button>
        </div>

        <!-- Location map placeholder -->
        <div class="map-section">
            <h2>Location map</h2>
            <div class="map-placeholder">Map here</div>
        </div>

        <!-- Model inputs section -->
        <div class="model-inputs-section">
            <h2>Model inputs</h2>
            <div>
                <label>Catchment characteristics:</label>
                <div>
                    <label>Population density [capita/km²]</label>
                    <!-- Slider placeholder -->
                    <div class="slider-placeholder">Input here</div>
                </div>
            </div>
        </div>

        <!-- Model results placeholder -->
        <div class="model-results-section">
            <h2>Model results</h2>
            <div class="chart-placeholder">Output here</div>
        </div>
    </div>
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
    width: 100%;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
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
    display: flex;
    flex-direction: column;
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
