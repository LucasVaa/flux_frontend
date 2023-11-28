<!-- src/components/Home.vue -->

<template>
    <div class="container">
        <h1>Catchment plastic modelling - INCA-Microplastics</h1>
        <p class="description">
            This is a demonstration page for the INCA-Microplastics model...
            <!-- ... 其他描述性文本 ... -->
        </p>
        <div class="username-input">
            <label>Please write in your username (no space nor special
                character):</label>
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
            <div class="map-placeholder">
                <img src="@/assets/map.jpg" class="map" />
            </div>
        </div>

        <!-- Model inputs section -->
        <div class="model-inputs-section">
            <h2>Model inputs</h2>
            <!-- Slider placeholder -->
            <div class="slider-placeholder">
                <div>
                    <h2>Characteristics:</h2>
                    <div class="input-group">
                        <label for="waste-per-person">人均垃圾产量 kg/person/day</label>
                        <input type="number" id="waste-per-person" v-model="perCapitaWaste" step="0.01">
                    </div>

                    <div class="input-group">
                        <label for="population">人口密度 people</label>
                        <input type="number" id="population" v-model="populationDensity">
                    </div>

                    <div class="input-group">
                        <label for="recycling-rate">塑料垃圾所占比例 %</label>
                        <input type="number" id="recycling-rate" v-model="plasticWasteRatio" step="0.01">
                    </div>

                    <div class="input-group">
                        <label for="landfill-rate">管理不当的比例 %</label>
                        <input type="number" id="landfill-rate" v-model="mismanagedRatio" step="0.01">
                    </div>
                </div>
            </div>
        </div>
        <div class="button-container">
            <button class="styled-button" @click="sendGetRequest">Run Model</button>
        </div>
        <!-- Model results placeholder -->
        <div class="model-results-section">
            <h2>Model results</h2>
            <div class="chart-placeholder">
                <label>塑料入海通量: </label>
                <span>{{ plasticOceanInflux }} tons</span>
            </div>
        </div>
    </div>
</template>

<script>
import Slider from "@vueform/slider";
import axios from 'axios';

export default {
    components: {
        Slider,
    },
    name: "Home",
    data() {
        return {
            username: "",
            selectedCatchment: "Boreal - Norway",
            perCapitaWaste: 0,
            populationDensity: 0,
            plasticWasteRatio: 0,
            mismanagedRatio: 0,
            marineEntryProbability: 35,
            plasticOceanInflux: 0,
            format: function (value) {
                return `${value}`;
            },
        };
    },
    methods: {
        changeSite() {
            // Logic to change the site
        },
        sendGetRequest() {
            axios.get('/api/run/', {
                params: {
                    P_input: this.populationDensity,
                    W_input: this.perCapitaWaste,
                    PRO_input: this.plasticWasteRatio,
                    M_input: this.mismanagedRatio,
                }
            })
                .then(response => {
                    // Handle the response from the server
                    console.log(response);
                    this.plasticOceanInflux = response.data.res
                })
                .catch(error => {
                    // Handle errors if the request fails
                    console.error('There was an error!', error);
                });
        }
    },
};
</script>

<style src="@vueform/slider/themes/default.css"></style>
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
    /* height: 200px; */
    border: 1px solid #ddd;
    border-radius: 4px;
    display: flex;
    padding: 20px 20px 20px 20px;
    align-items: center;
}

.input-group {
    margin-bottom: 1rem;
}

.input-group label {
    display: block;
    margin-bottom: 40px;
}

.map {
    width: 800px;
}

.button-container {
    text-align: center;
    /* centers button in the container */
    margin: 20px 0;
    /* adds space above and below the button */
}

.styled-button {
    background-color: #4CAF50;
    /* green color to match sliders */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
    /* adds a subtle shadow for depth */
    transition: background-color 0.3s ease;
}

.styled-button:hover {
    background-color: #45a049;
    /* a darker green color for hover state */
}

.input-group {
    margin-bottom: 10px;
}

.input-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
}

.input-group input {
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
    /* Light grey border */
    box-shadow: inset 0 1px 3px #ddd;
    /* Inner shadow for some depth */
}</style>
