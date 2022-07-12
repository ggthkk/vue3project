<template>
    <div><slot :list="slots"></slot></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {},
    data() {
        return {
            slots: [
                {
                    name_slot: '#defualt',
                    label: 'test1 #defualt',
                    widget: {
                        layout: [
                            {
                                x: 0,
                                y: 0,
                                w: 3,
                                h: 3,
                                i: '0',
                                setting: {
                                    name: 'widget1',
                                    fullscreen: true,
                                    refresh: true,
                                    collapse: true,
                                },
                                component: {
                                    name: 'CardStatus',
                                    status: 'AllStation',
                                    label: 'All Station',
                                    count: '10',
                                    css: 'background-color: white;',
                                },
                                moved: false,
                            },
                            {
                                x: 3,
                                y: 0,
                                w: 3,
                                h: 3,
                                i: '1',
                                setting: {
                                    name: 'widget1',
                                    fullscreen: true,
                                    refresh: true,
                                    collapse: true,
                                },
                                component: {
                                    name: 'CardStatus',
                                    status: 'OnlineStation',
                                    label: 'Online Station',
                                    count: '10',
                                    css: '',
                                },
                                moved: false,
                            },
                            {
                                x: 6,
                                y: 0,
                                w: 3,
                                h: 3,
                                i: '2',
                                setting: {
                                    name: 'widget1',
                                    fullscreen: true,
                                    refresh: true,
                                    collapse: true,
                                },
                                component: {
                                    name: 'CardStatus',
                                    status: 'OfflineStation',
                                    label: 'Offline Station',
                                    count: '10',
                                    css: '',
                                },
                                moved: false,
                            },
                            {
                                x: 9,
                                y: 0,
                                w: 3,
                                h: 3,
                                i: '3',
                                setting: {
                                    name: 'widget1',
                                    fullscreen: true,
                                    refresh: true,
                                    collapse: true,
                                },
                                component: {
                                    name: 'CardStatus',
                                    status: 'WarningStation',
                                    label: 'Warning Station',
                                    count: '10',
                                    css: '',
                                },
                                moved: false,
                            },
                            {
                                x: 0,
                                y: 3,
                                w: 7,
                                h: 11,
                                i: '4',
                                setting: {
                                    name: 'widget1',
                                    fullscreen: true,
                                    refresh: true,
                                    collapse: true,
                                },
                                component: 'MapGlobal',
                                moved: false,
                            },
                            {
                                x: 7,
                                y: 3,
                                w: 5,
                                h: 11,
                                i: '5',
                                setting: {
                                    name: 'widget1',
                                    fullscreen: true,
                                    refresh: true,
                                    collapse: true,
                                },
                                component: 'TableDashboard',
                                moved: false,
                            },
                            {
                                x: 7,
                                y: 3,
                                w: 12,
                                h: 11,
                                i: '6',
                                setting: {
                                    name: 'widget1',
                                    fullscreen: true,
                                    refresh: true,
                                    collapse: true,
                                },
                                component: 'TableStation',
                                moved: false,
                            },
                        ],
                    },
                },
                {
                    name_slot: '#test1',
                    label: 'test1 #new',
                    widget: {
                        layout: [
                            {
                                x: 0,
                                y: 0,
                                w: 4,
                                h: 8,
                                i: '0',
                                setting: {
                                    name: 'widget1',
                                    fullscreen: true,
                                    refresh: true,
                                    collapse: true,
                                },
                                component: 'test',
                            },
                            {
                                x: 4,
                                y: 0,
                                w: 5,
                                h: 4,
                                i: '1',
                                setting: {
                                    name: 'widget2',
                                    fullscreen: false,
                                    refresh: false,
                                    collapse: true,
                                },
                                component: 'test',
                            },
                        ],
                    },
                },
                {
                    name_slot: '#test2',
                    label: 'test1 #new',
                    widget: {
                        layout: [],
                    },
                },
            ],
        }
    },
})
</script>
