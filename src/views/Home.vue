<!-- src/components/Home.vue -->

<template>
    <div class="out">
        <div class="container">
            <h1 style="font-size: 36px;">Catchment plastic modelling</h1>
            <p class="description">
                Herein, we took S river catchment in China as the target study area,
                established an integrated socio-economic and topographic approach to
                modeling plastic transport from catchment to sea. S river catchment
                is located in S city, which is a world-renowned tourism city with
                tens of millions of tourists every year. By analyzing the seasonal
                fluctuation of the amount of tourists and combining with the
                features in each land use type, we summarized the seasonal variation
                characteristics of plastic emission flux into ocean. Meanwhile, the
                hot-spot plastic transportation areas were also found. By using a
                top to down method, the plastic waste flow in study area was also
                quantified. This model is helpful for local authorities to formulate
                more targeted plastic pollution mitigation policies. It also bridges
                a significant knowledge gap in the context of tourism cities,
                offering substantial practical value.
            </p>
            <!-- ... 其他内容 ... -->
        </div>
        <div class="page-section">
            <!-- Model inputs section -->
            <div class="model-inputs-section">
                <h2>Model inputs</h2>
                <!-- Slider placeholder -->
                <div class="slider-placeholder">
                    <div>
                        <div class="input-group">
                            <label for="waste-per-person">Waste Generation [kg/(person·day)]</label>
                            <input type="number" id="waste-per-person" v-model="perCapitaWaste" step="0.01" />
                        </div>

                        <div class="input-group">
                            <label for="yearround-residents">Year-round Residents (people)</label>
                            <input type="number" id="yearround-residents" v-model="yearroundresidents" />
                        </div>

                        <div class="input-group">
                            <label for="seasonal-residents">Seasonal Residents (people)</label>
                            <input type="number" id="seasonal-residents" v-model="seasonalresidents" />
                        </div>

                        <div class="input-group">
                            <label for="overnight-tourists">Overnight Tourists (people)</label>
                            <input type="number" id="overnight-tourists" v-model="overnighttourists" />
                        </div>

                        <div class="input-group">
                            <label for="recycling-rate">Proportion of Plastic Waste (%)</label>
                            <input type="number" id="recycling-rate" v-model="plasticWasteRatio" />
                        </div>

                        <div class="input-group">
                            <label for="landfill-rate">Mismanaged waste (%)</label>
                            <input type="number" id="landfill-rate" v-model="mismanagedRatio" step="0.01" />
                        </div>

                        <div class="input-group">
                            <label for="recycling-rate">Recycling rate (%)</label>
                            <input type="number" id="recycling-rate" v-model="recyclingRatio" step="0.01" />
                        </div>

                        <div class="input-group">
                            <label for="incineration-rate">Incineration rate (%)</label>
                            <input type="number" id="incineration-rate" v-model="incinerationRatio" step="0.01" />
                        </div>
                        <div class="button-container">
                            <button class="styled-button" @click="sendGetRequest">
                                Run Model
                            </button>
                        </div>
                    </div>
                </div>
                <div id="map-placeholder" class="map-placeholder">
                    <div class="scale-bar">
                        <div style="position: relative; 
                        width: 80px; 
                        height: 30px; 
                        background-color: transparent; 
                        border-style: none; 
                        border-width: 1px; 
                        margin-bottom: 6px;
                        ">

                            <span
                                style="position: absolute; top: 0px; left: 5px;font-size: 20px;">Value(unite:tons/yr)</span>
                        </div>
                        <div style="
                            width: 80px;
                            height: 27px;
                            background-color: #4575b5;
                            border-style: solid;
                            border-width: 1px;
                            margin-bottom: 6px;
                        ">
                            <span style="margin-left: 90px; white-space: pre">{{ 0 }} -
                                {{
                                    parseFloat(maxValue * (1 / 110)).toFixed(2)
                                }}</span>
                        </div>
                        <div style="
                            width: 80px;
                            height: 27px;
                            background-color: #7b98ba;
                            border-style: solid;
                            border-width: 1px;
                            margin-bottom: 6px;
                        ">
                            <span style="margin-left: 90px; white-space: pre">{{ parseFloat(maxValue * (1 /
                                110)).toFixed(2)
                                }} -
                                {{
                                    parseFloat(maxValue * (3 / 110)).toFixed(2)
                                }}</span>
                        </div>
                        <div style="
                            width: 80px;
                            height: 27px;
                            background-color: #aebdbc;
                            border-style: solid;
                            border-width: 1px;
                            margin-bottom: 6px;
                        ">
                            <span style="margin-left: 90px; white-space: pre">{{ parseFloat(maxValue * (3 /
                                110)).toFixed(2)
                                }} -
                                {{
                                    parseFloat(maxValue * (5 / 110)).toFixed(2)
                                }}</span>
                        </div>

                        <div style="
                            width: 80px;
                            height: 27px;
                            background-color: #e3e8be;
                            border-style: solid;
                            border-width: 1px;
                            margin-bottom: 6px;
                        ">
                            <span style="margin-left: 90px; white-space: pre">{{ parseFloat(maxValue * (5 /
                                110)).toFixed(2)
                                }} -
                                {{
                                    parseFloat(maxValue * (1 / 11)).toFixed(2)
                                }}</span>
                        </div>
                        <div style="
                            width: 80px;
                            height: 27px;
                            background-color: #ffe3a6;
                            border-style: solid;
                            border-width: 1px;
                            margin-bottom: 6px;
                        ">
                            <span style="margin-left: 90px; white-space: pre">{{ parseFloat(maxValue * (1 /
                                11)).toFixed(2)
                                }} -
                                {{
                                    parseFloat(maxValue * (2 / 11)).toFixed(2)
                                }}</span>
                        </div>
                        <div style="
                            width: 80px;
                            height: 27px;
                            background-color: #f7a474;
                            border-style: solid;
                            border-width: 1px;
                            margin-bottom: 6px;
                        ">
                            <span style="margin-left: 90px; white-space: pre">{{ parseFloat(maxValue * (2 /
                                11)).toFixed(2)
                                }} -
                                {{
                                    parseFloat(maxValue * (4 / 11)).toFixed(2)
                                }}</span>
                        </div>
                        <div style="
                            width: 80px;
                            height: 27px;
                            background-color: #d62f27;
                            border-style: solid;
                            border-width: 1px;
                            margin-bottom: 6px;
                        ">
                            <span style="margin-left: 90px; white-space: pre">{{ parseFloat(maxValue * (4 /
                                11)).toFixed(2)
                                }} -
                                {{ parseFloat(maxValue).toFixed(2) }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Model results placeholder -->
            <div class="model-results-section" v-if="showResult">
                <h2>Model results</h2>
                <div class="chart-placeholder">
                    <label>Total plastic emission flux: </label>
                    <span>{{ plasticOceanInflux }} tons</span>
                </div>
                <div class="sankey">
                    <div id="myDiv"></div>
                </div>
                <div class="sankey-enlarge">
                    <div id="enlarge"></div>
                </div>
                <div class="sankey-bar">
                    <div id="bar"></div>
                </div>
            </div>
            <!-- 
            <div class="model-results-section">
                <div class="sankey-bar">
                    <div id="bar"></div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
import Slider from "@vueform/slider";
import axios from "axios";
import Plotly from "plotly.js-dist";
import AMapLoader from "@amap/amap-jsapi-loader";
import { ElMessage } from "element-plus";

window._AMapSecurityConfig = {
    securityJsCode: "b4d5ff84d29387a34d126094cbf54ee3",
};

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
            populationDensity: 792758,
            yearroundresidents: 792758,
            seasonalresidents: 958146,
            overnighttourists: 6002341,
            plasticWasteRatio: 17.5,
            mismanagedRatio: 0.39,
            recyclingRatio: 1.85,
            incinerationRatio: 70.39,
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
            showResult: false,
            // 屏幕宽度
            screenWidth: document.body.clientWidth,
            // 屏幕高度
            screenHeight: document.body.clientHeight
        };
    },
    methods: {
        changeSite() {
            // Logic to change the site
        },
        sendGetRequest() {
            if (
                this.mismanagedRatio +
                this.recyclingRatio +
                this.incinerationRatio >
                100
            ) {
                ElMessage({
                    message: "Mismanaged waste, Recycling rate, and Incineration rate should sum up to less than 100.",
                    type: "error",
                });
                return;
            }
            this.showResult = true;
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
                                "Garbage incineration",
                                "Sanitary landfill site",
                                "Mismanaged plastic waste",
                                "Recycable waste",
                            ],
                            texttemplate: "%{percent:.0%}",
                            type: "pie",
                            hovertemplate:
                                "%{label}: %{value} tons (%{percent:.2%})<extra></extra>", // Custom hover text
                            textposition: "auto",
                        },
                    ];

                    var layout = {
                        title: "Plastic Waste Disposal",
                        width: this.screenWidth * 0.4,
                        height: this.screenHeight * 0.4,
                        font: {
                            size: 14,
                        },
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
                                "Terrestrial leakage & <br> Open-it burning & Dumpsites",
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
                            y: [0, 0.9, 0.1, 0.9, 1],
                            hoverinfo: "all",
                            hovertemplate:
                                "%{label}<br>Value: %{value} tons<extra></extra>", // Custom hover text for nodes
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
                            hoverinfo: "all", // or you can use 'none' to hide hover info
                            hovertemplate:
                                "Value: %{value} tons<extra></extra>", // Custom hover text for links
                        },
                    };

                    var dataZoom = [dataZoom];

                    var layoutZoom = {
                        title: "Mismanaged plastic waste flow",
                        width: this.screenWidth * 0.5,
                        height: this.screenHeight * 0.5,
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
                        name: "Year-round Residents",
                        type: "bar",
                        marker: {
                            color: "rgb(70,130,180,0.5)",
                        },
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
                        name: "Seasonal Residents",
                        type: "bar",
                        marker: {
                            color: "rgb(30,144,255,0.5)",
                        },
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
                        name: "Overnight Tourists",
                        type: "bar",
                        marker: {
                            color: "rgb(135,206,235,0.5)",
                        },
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
                        name: "Cultivated Land",
                        type: "bar",
                        marker: {
                            color: "rgb(255,250,205,0.5)",
                        },
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
                        name: "Forest",
                        type: "bar",
                        marker: {
                            color: "rgb(189,183,107,0.5)",
                        },
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
                        name: "Grass Land",
                        type: "bar",
                        marker: {
                            color: "rgb(128,128,0,0.5)",
                        },
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
                        name: "Bareland",
                        type: "bar",
                        marker: {
                            color: "rgba(139,69,19,0.5)",
                        },
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
                            title: "Contribution (%)",
                        },
                        yaxis2: {
                            title: "Emission flux (tons)",
                            overlaying: "y",
                            side: "right",
                        },
                        legend: {
                            x: 1.08,
                        },
                    };

                    Plotly.react("bar", barData, barLayout);
                })
                .catch((error) => {
                    // Handle errors if the request fails
                    console.error("There was an error!", error);
                });
        },
        initAMap() {
            AMapLoader.load({
                key: "86cec1246ee5b09a332bee19a24f5b23", // 申请好的Web端开发者Key，首次调用 load 时必填
                version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
                plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
            })
                .then((AMap) => {
                    var imageLayer = new AMap.ImageLayer({
                        url: "https://lucas-first-bucket-1300338483.cos.ap-nanjing.myqcloud.com/wc/sanya_0221.png",
                        bounds: new AMap.Bounds(
                            [109.35706727260788, 18.142955934558277],
                            [109.65200923279814, 18.54797726450876]
                        ),
                        zindex: 2,
                        zooms: [2, 30],
                        opacity: 0.7,
                    });
                    var SatelliteLayer = new AMap.TileLayer.Satellite();
                    this.map = new AMap.Map("map-placeholder", {
                        zoom: 14, // 初始化地图级别
                        center: [109.51, 18.255], // 初始化地图中心点位置
                        layers: [SatelliteLayer, imageLayer],
                    });
                })
                .catch((e) => {
                    console.log(e);
                });
        },
    },
    mounted() {
        this.initAMap();
    },
    // unmounted() {
    //     this.map?.destroy();
    // },
};
</script>

<style src="@vueform/slider/themes/default.css"></style>
<style scoped>
.out {
    max-width: 80%;
    margin: 0 auto;
}

.container {
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

.chart-placeholder {
    display: flex;
    justify-content: center;
    font-size: 20px;
}

.slider-placeholder {
    height: 700px;
    float: left;
}

.map-placeholder {
    height: 700px;
    padding-left: 83px;
    padding-top: 407px;
    /* background-image: url("../assets/map.jpg"); */
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
    align-items: center;
}

.sankey-enlarge {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid #ddd;
    border-width: 0 1px 0 1px;
}

.sankey-bar {
    align-items: center;
    border: solid #ddd;
    border-width: 0 1px 0 1px;
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

.scale-bar {
    z-index: 1;
}
</style>
