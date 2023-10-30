
<div class="page-section">
    <!-- Catchment selection section -->
    <div class="catchment-section">
        <label>Which type of catchment would you like to work with?</label>
        <select v-model="selectedCatchment">
            <option value="Boreal - Norway">Boreal - Norway</option>
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
                <div class="slider-placeholder">Slider here</div>
            </div>
            <div>
                <label
                    >Plastic waste generation rate (non-textile)
                    [kg/day/capita]</label
                >
                <!-- Slider placeholder -->
                <div class="slider-placeholder">Slider here</div>
            </div>
        </div>
    </div>

    <!-- Model results placeholder -->
    <div class="model-results-section">
        <h2>Model results</h2>
        <div class="chart-placeholder">Chart here</div>
    </div>
</div>