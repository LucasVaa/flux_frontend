<!-- src/components/Home.vue -->

<template>
    <div class="container">
        <h1>Catchment plastic modelling - INCA-Microplastics</h1>
        <p class="description">
            With the annual increase of plastic production, a growing number of
            plastic products are being used in people’s daily life. Therefore, a
            great number of global plastic waste production are estimated by
            statistics. However, these plastic wastes emit into rivers and
            subsequently into oceans through the effect of downpour or wind,
            which will pose a threat to marine environmental protection. What’s
            more, due to the large influx of tourists, tourism cities may
            encounter more serious problems. S city is a worldwide well-known
            tourism city with over ten million tourists every year. Here, taking
            S river catchment as our study area, we found the obvious
            tourism-driven seasonal variation of land-based emissions of
            plastic. Plastic emission contribution of different population type
            was also analyzed. Besides, the hot-spot regions that are likely to
            emit plastic into ocean were also found by conducting geographically
            analysis with population distribution and the probability for
            plastic waste to reach the nearest river for every cell, which is
            crucial for formulating mitigation strategies.
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

        <!-- Model inputs section -->
        <div class="model-inputs-section">
            <h2>Model inputs</h2>
            <!-- Slider placeholder -->
            <div class="slider-placeholder">
                <div>
                    <div class="input-group">
                        <label for="waste-per-person"
                            >人均垃圾产量 kg/person/day</label
                        >
                        <input
                            type="number"
                            id="waste-per-person"
                            v-model="perCapitaWaste"
                            step="0.01"
                        />
                    </div>

                    <div class="input-group">
                        <label for="yearround-residents"
                            >常住人口数量 people</label
                        >
                        <input
                            type="number"
                            id="yearround-residents"
                            v-model="yearroundresidents"
                        />
                    </div>

                    <div class="input-group">
                        <label for="seasonal-residents"
                            >候鸟游客数量 people</label
                        >
                        <input
                            type="number"
                            id="seasonal-residents"
                            v-model="seasonalresidents"
                        />
                    </div>

                    <div class="input-group">
                        <label for="overnight-tourists"
                            >过夜游客数量 people</label
                        >
                        <input
                            type="number"
                            id="overnight-tourists"
                            v-model="overnighttourists"
                        />
                    </div>

                    <div class="input-group">
                        <label for="recycling-rate">塑料垃圾所占比例 %</label>
                        <input
                            type="number"
                            id="recycling-rate"
                            v-model="plasticWasteRatio"
                        />
                    </div>

                    <div class="input-group">
                        <label for="landfill-rate">管理不当的比例 %</label>
                        <input
                            type="number"
                            id="landfill-rate"
                            v-model="mismanagedRatio"
                            step="0.01"
                        />
                    </div>

                    <div class="input-group">
                        <label for="recycling-rate">回收率 %</label>
                        <input
                            type="number"
                            id="recycling-rate"
                            v-model="recyclingRatio"
                            step="0.01"
                        />
                    </div>

                    <div class="input-group">
                        <label for="incineration-rate">焚烧率 %</label>
                        <input
                            type="number"
                            id="incineration-rate"
                            v-model="incinerationRatio"
                            step="0.01"
                        />
                    </div>
                    <div class="button-container">
                        <button class="styled-button" @click="sendGetRequest">
                            Run Model
                        </button>
                    </div>
                </div>
            </div>
            <div class="map-placeholder">
                <span
                    >{{ 0 }} -
                    {{ parseFloat(maxValue * (1 / 110)).toFixed(2) }}</span
                >
                <span
                    >{{ parseFloat(maxValue * (1 / 110)).toFixed(2) }}
                    -
                    {{ parseFloat(maxValue * (3 / 110)).toFixed(2) }}</span
                >
                <span
                    >{{ parseFloat(maxValue * (3 / 110)).toFixed(2) }}
                    -
                    {{ parseFloat(maxValue * (5 / 110)).toFixed(2) }}</span
                >
                <span
                    >{{ parseFloat(maxValue * (5 / 110)).toFixed(2) }}
                    -
                    {{ parseFloat(maxValue * (1 / 11)).toFixed(2) }}</span
                >
                <span
                    >{{ parseFloat(maxValue * (1 / 11)).toFixed(2) }}
                    -
                    {{ parseFloat(maxValue * (2 / 11)).toFixed(2) }}</span
                >
                <span
                    >{{ parseFloat(maxValue * (2 / 11)).toFixed(2) }}
                    -
                    {{ parseFloat(maxValue * (4 / 11)).toFixed(2) }}</span
                >
                <span
                    >{{ parseFloat(maxValue * (4 / 11)).toFixed(2) }} -
                    {{ parseFloat(maxValue).toFixed(2) }}</span
                >
            </div>
        </div>

        <!-- Model results placeholder -->
        <div class="model-results-section">
            <h2>Model results</h2>
            <div class="chart-placeholder">
                <label>塑料入海通量: </label>
                <span>{{ plasticOceanInflux }} tons</span>
            </div>
            <div class="sankey">
                <div
                    id="myDiv"
                    style="width: 500px; height: 250px; float: left"
                ></div>
            </div>
            <div class="sankey-enlarge">
                <div
                    id="enlarge"
                    style="width: 600px; height: 250px; float: left"
                ></div>
            </div>
        </div>

        <div class="model-results-section">
            <div class="sankey-bar">
                <div id="bar"></div>
            </div>
        </div>
    </div>
    <div class="container">
        <p class="description">
            This is a demonstration page for the INCA-Microplastics model...With
            the annual increase of plastic production, a growing number of
            plastic products are being used in people’s daily life. Therefore, a
            great number of global plastic waste production are estimated by
            statistics. However, these plastic wastes emit into rivers and
            subsequently into oceans through the effect of downpour or wind,
            which will pose a threat to marine environmental protection. What’s
            more, due to the large influx of tourists, tourism cities may
            encounter more serious problems. S city is a worldwide well-known
            tourism city with over ten million tourists every year. Here, taking
            S river catchment as our study area, we found the obvious
            tourism-driven seasonal variation of land-based emissions of
            plastic. Plastic emission contribution of different population type
            was also analyzed. Besides, the hot-spot regions that are likely to
            emit plastic into ocean were also found by conducting geographically
            analysis with population distribution and the probability for
            plastic waste to reach the nearest river for every cell, which is
            crucial for formulating mitigation strategies.
            <!-- ... 其他描述性文本 ... -->
        </p>
        <!-- ... 其他内容 ... -->
    </div>
</template>

<script>
import Slider from "@vueform/slider";
import axios from "axios";
import Plotly from "plotly.js-dist";

export default {
    components: {
        Slider,
    },
    name: "Home",
    data() {
        return {
            username: "",
            selectedCatchment: "Boreal - Norway",
            perCapitaWaste: 1.69,
            populationDensity: 749325,
            yearroundresidents: 749325,
            seasonalresidents: 836071,
            overnighttourists: 8642009,
            plasticWasteRatio: 17.5,
            mismanagedRatio: 0.39,
            recyclingRatio: 1.85,
            incinerationRatio: 72,
            marineEntryProbability: 35,
            plasticOceanInflux: 0,
            maxValue: 0,
            sankey: {
                PWG: 0,
                MPW: 0,
                ER: 0,
                TOD: 0,
                ES: 0,
                S: 0,
                GCSIN: 0,
                WTS: 0,
                GIGP: 0,
                SLS: 0,
                RW: 0,
            },
            bar: 0,
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
            axios
                .get("/api/run/", {
                    params: {
                        P1_1_input: this.yearroundresidents,
                        P1_2_input: this.seasonalresidents,
                        P1_3_input: this.overnighttourists,
                        W_input: this.perCapitaWaste,
                        PRO_input: this.plasticWasteRatio,
                        M_input: this.mismanagedRatio,
                        Re_input: this.recyclingRatio,
                        I_input: this.incinerationRatio,
                    },
                })
                .then((response) => {
                    // Handle the response from the server
                    console.log(response);
                    this.plasticOceanInflux = response.data.res;
                    this.maxValue = response.data.max;
                    this.sankey = response.data.sankey;
                    this.bar = response.data.bar;

                    var data = [
                        {
                            values: [
                                this.sankey.GIGP,
                                this.sankey.SLS,
                                this.sankey.MPW,
                                this.sankey.RW,
                            ],
                            labels: [
                                "Garbage incineration generation plant",
                                "Sanitary landfill site",
                                "Mismanaged plastic waste",
                                "Recycable waste",
                            ],
                            texttemplate: "%{percent:.4f}",
                            type: "pie",
                            textinfo: "percent", // 只顯示百分比
                            hoverinfo: "label+percent", // 懸停時顯示標籤和百分比
                            hovertemplate:
                                "%{label}: %{percent:.2f}<extra></extra>", // 格式化懸停信息
                        },
                    ];

                    var layout = {
                        title: "Plastic waste flow(tons)",
                        height: 300,
                        width: 500,
                        template: ".2f",
                    };

                    Plotly.react("myDiv", data, layout);

                    var dataZoom = {
                        type: "sankey",
                        orientation: "h",
                        node: {
                            pad: 15,
                            thickness: 30,
                            line: {
                                color: "black",
                                width: 0.5,
                            },
                            label: [
                                "Mismanaged plastic waste",
                                "Enter into river",
                                "Terrestrial leakage & Open-it burning & Dumpsites",
                                "Enter into sea",
                                "Sink",
                            ],
                            color: [
                                "#AADCE0",
                                "#528FAD",
                                "#72BCD5",
                                "#1E466A",
                                "#00008B",
                            ],
                            x: [0, 0.3, 1, 1, 1],
                            y: [0, 0.9, 0, 0.9, 1],
                        },

                        link: {
                            source: [0, 0, 1, 1],
                            target: [1, 2, 3, 4],
                            value: [
                                this.sankey.ER,
                                this.sankey.TOD,
                                this.sankey.ES,
                                this.sankey.S,
                            ],
                            color: [
                                "rgba(135, 206, 235, 0.3)",
                                "rgba(135, 206, 235, 0.3)",
                                "rgba(70, 130, 180, 0.3)",
                                "rgba(70, 130, 180, 0.3)",
                            ],
                        },
                    };

                    var dataZoom = [dataZoom];

                    var layoutZoom = {
                        title: "Mismanaged plastic waste flow(tons)",
                        width: 600,
                        height: 300,
                        font: {
                            size: 14,
                        },
                    };
                    Plotly.react("enlarge", dataZoom, layoutZoom);

                    var xAis = [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December",
                    ];

                    var YR = {
                        x: xAis,
                        y: [
                            this.bar.JAN.JAN_YR,
                            this.bar.FEB.FEB_YR,
                            this.bar.MAR.MAR_YR,
                            this.bar.APR.APR_YR,
                            this.bar.MAY.MAY_YR,
                            this.bar.JUN.JUN_YR,
                            this.bar.JUL.JUL_YR,
                            this.bar.AUG.AUG_YR,
                            this.bar.SEPT.SEPT_YR,
                            this.bar.OCT.OCT_YR,
                            this.bar.NOV.NOV_YR,
                            this.bar.DEC.DEC_YR,
                        ],
                        name: "YR",
                        type: "bar",
                    };

                    var SR = {
                        x: xAis,
                        y: [
                            this.bar.JAN.JAN_SR,
                            this.bar.FEB.FEB_SR,
                            this.bar.MAR.MAR_SR,
                            this.bar.APR.APR_SR,
                            this.bar.MAY.MAY_SR,
                            this.bar.JUN.JUN_SR,
                            this.bar.JUL.JUL_SR,
                            this.bar.AUG.AUG_SR,
                            this.bar.SEPT.SEPT_SR,
                            this.bar.OCT.OCT_SR,
                            this.bar.NOV.NOV_SR,
                            this.bar.DEC.DEC_SR,
                        ],
                        name: "SR",
                        type: "bar",
                    };

                    var OT = {
                        x: xAis,
                        y: [
                            this.bar.JAN.JAN_OT,
                            this.bar.FEB.FEB_OT,
                            this.bar.MAR.MAR_OT,
                            this.bar.APR.APR_OT,
                            this.bar.MAY.MAY_OT,
                            this.bar.JUN.JUN_OT,
                            this.bar.JUL.JUL_OT,
                            this.bar.AUG.AUG_OT,
                            this.bar.SEPT.SEPT_OT,
                            this.bar.OCT.OCT_OT,
                            this.bar.NOV.NOV_OT,
                            this.bar.DEC.DEC_OT,
                        ],
                        name: "OT",
                        type: "bar",
                    };

                    var CL = {
                        x: xAis,
                        y: [
                            this.bar.JAN.JAN_CL,
                            this.bar.FEB.FEB_CL,
                            this.bar.MAR.MAR_CL,
                            this.bar.APR.APR_CL,
                            this.bar.MAY.MAY_CL,
                            this.bar.JUN.JUN_CL,
                            this.bar.JUL.JUL_CL,
                            this.bar.AUG.AUG_CL,
                            this.bar.SEPT.SEPT_CL,
                            this.bar.OCT.OCT_CL,
                            this.bar.NOV.NOV_CL,
                            this.bar.DEC.DEC_CL,
                        ],
                        name: "CL",
                        type: "bar",
                    };

                    var F = {
                        x: xAis,
                        y: [
                            this.bar.JAN.JAN_F,
                            this.bar.FEB.FEB_F,
                            this.bar.MAR.MAR_F,
                            this.bar.APR.APR_F,
                            this.bar.MAY.MAY_F,
                            this.bar.JUN.JUN_F,
                            this.bar.JUL.JUL_F,
                            this.bar.AUG.AUG_F,
                            this.bar.SEPT.SEPT_F,
                            this.bar.OCT.OCT_F,
                            this.bar.NOV.NOV_F,
                            this.bar.DEC.DEC_F,
                        ],
                        name: "F",
                        type: "bar",
                    };

                    var GL = {
                        x: xAis,
                        y: [
                            this.bar.JAN.JAN_GL,
                            this.bar.FEB.FEB_GL,
                            this.bar.MAR.MAR_GL,
                            this.bar.APR.APR_GL,
                            this.bar.MAY.MAY_GL,
                            this.bar.JUN.JUN_GL,
                            this.bar.JUL.JUL_GL,
                            this.bar.AUG.AUG_GL,
                            this.bar.SEPT.SEPT_GL,
                            this.bar.OCT.OCT_GL,
                            this.bar.NOV.NOV_GL,
                            this.bar.DEC.DEC_GL,
                        ],
                        name: "GL",
                        type: "bar",
                    };

                    var BL = {
                        x: xAis,
                        y: [
                            this.bar.JAN.JAN_BL,
                            this.bar.FEB.FEB_BL,
                            this.bar.MAR.MAR_BL,
                            this.bar.APR.APR_BL,
                            this.bar.MAY.MAY_BL,
                            this.bar.JUN.JUN_BL,
                            this.bar.JUL.JUL_BL,
                            this.bar.AUG.AUG_BL,
                            this.bar.SEPT.SEPT_BL,
                            this.bar.OCT.OCT_BL,
                            this.bar.NOV.NOV_BL,
                            this.bar.DEC.DEC_BL,
                        ],
                        name: "BL",
                        type: "bar",
                    };

                    var sum = {
                        x: xAis,
                        y: [
                            this.bar.JAN.JAN_SUM,
                            this.bar.FEB.FEB_SUM,
                            this.bar.MAR.MAR_SUM,
                            this.bar.APR.APR_SUM,
                            this.bar.MAY.MAY_SUM,
                            this.bar.JUN.JUN_SUM,
                            this.bar.JUL.JUL_SUM,
                            this.bar.AUG.AUG_SUM,
                            this.bar.SEPT.SEPT_SUM,
                            this.bar.OCT.OCT_SUM,
                            this.bar.NOV.NOV_SUM,
                            this.bar.DEC.DEC_SUM,
                        ],
                        marker: {
                            color: "rgb(219, 64, 82)",
                        },
                        name: "sum",
                        type: "scatter",
                        yaxis: "y2",
                    };

                    var barData = [YR, SR, OT, CL, F, GL, BL, sum];

                    var barLayout = {
                        title: "The contribution of plastic emission flux of different population types and the total monthly plastic emission flux",
                        font: {
                            size: 14,
                        },
                        barmode: "stack",
                        yaxis1: {
                            title: "Contribution (%)"
                        },
                        yaxis2: {
                            title: "Emission flux (tons)",
                            overlaying: "y",
                            side: "right",
                        },
                        legend: {
                            x: 1.05
                        },
                    };

                    Plotly.react("bar", barData, barLayout);
                })
                .catch((error) => {
                    // Handle errors if the request fails
                    console.error("There was an error!", error);
                });
        },
    },
    mounted() {},
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
.chart-placeholder,
.sankey,
.sankey-enlarge .sankey-bar {
    /* background-color: #f3f3f3; */
    /* height: 200px; */
    border: solid #ddd;
    border-width: 0 1px 0 1px;
    border-radius: 4px;
    display: flex;
    padding: 20px 20px 20px 20px;
    align-items: center;
}

.slider-placeholder {
    height: 700px;
    float: left;
}

.map-placeholder {
    height: 700px;
    padding-left: 83px;
    padding-top: 437px;
    background-image: url("../assets/map.jpg");
    background-size: 950px;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.sankey {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    float: left;
}

.sankey-enlarge {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.map-placeholder span {
    font-family: "Times New Roman";
    margin-bottom: -2.8px;
    color: #ffffff;
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
    background-color: #4caf50;
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
}
</style>
