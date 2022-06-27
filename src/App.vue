<template>
    <n-space vertical>
        <n-layout has-sider>
            <n-layout-sider
                class="h-screen"
                bordered
                collapse-mode="width"
                :collapsed-width="64"
                :width="200"
                :collapsed="collapsed"
                @collapse="collapsed = true"
                @expand="collapsed = false"
                ><img src="./assets/logo.png" class="p-3" alt="" />
                <n-menu :options="menuOptions" />
            </n-layout-sider>
            <n-layout>
                <n-layout-header class="h-16">
                    <div class="p-2 flex">
                        <n-button @click="collapsed = !collapsed"
                            ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </n-button>
                        <div class="w-full flex justify-end">
                            <ProfileMenu></ProfileMenu>
                        </div></div
                ></n-layout-header>
                <n-layout-content><router-view></router-view></n-layout-content>
            </n-layout>
        </n-layout>
    </n-space>
</template>

<script lang="ts">
import { defineComponent, h, ref, Component } from 'vue'
import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { RouterLink } from 'vue-router'
import { LaptopOutline as WorkIcon, HomeOutline as Home } from '@vicons/ionicons5'
import ProfileMenu from './components/Profile-menu.vue'

function renderIcon(icon: Component) {
    return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        name: 'home',
                    },
                },
                { default: () => 'Go Home' }
            ),
        key: 'go-back-home',
        icon: renderIcon(Home),
    },
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        path: '/contantpage',
                    },
                },
                { default: () => 'Go to work' }
            ),
        key: 'go-to-work',
        icon: renderIcon(WorkIcon),
    },
]

export default defineComponent({
    setup() {
        return {
            collapsed: ref(true),
            menuOptions,
            defaultExpandedKeys: ['fish', 'braise'],
        }
    },
    components: {
        ProfileMenu,
    },
})
</script>
