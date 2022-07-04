<template>
    <div style="height: 75vh; width: 50vw">
        <LMap v-model="zoom" :center="[47.41322, -1.219482]" @move="log('move')">
            <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></LTileLayer>
            <LControlLayers />

            <LMarker :lat-lng="[13.668, 100.503]" draggable @moveend="log('moveend')">
                <LPopup> lolddd </LPopup>
            </LMarker>
        </LMap>
        <button @click="changeIcon">New kitten icon</button>
    </div>
</template>
<script>
import { LMap, LTileLayer, LMarker, LControlLayers, LPopup } from '@vue-leaflet/vue-leaflet'
import 'leaflet/dist/leaflet.css'

export default {
    components: {
        LMap,
        LTileLayer,
        LMarker,
        LControlLayers,
        LPopup,
    },
    data() {
        return {
            zoom: 2,
            iconWidth: 25,
            iconHeight: 40,
        }
    },
    computed: {
        iconUrl() {
            return `https://placekitten.com/${this.iconWidth}/${this.iconHeight}`
        },
        iconSize() {
            return [this.iconWidth, this.iconHeight]
        },
    },
    methods: {
        log(a) {
            console.log(a)
        },
        changeIcon() {
            this.iconWidth += 2
            if (this.iconWidth > this.iconHeight) {
                this.iconWidth = Math.floor(this.iconHeight / 2)
            }
        },
    },
}
</script>
