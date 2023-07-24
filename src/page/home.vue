<template>
    <div class="img-box">
        <LazyImg v-for="(item, index) in showImages" :key="index" :src="item" :immediately="index === 0 ? true : false" />
    </div>
</template>

<script lang="ts" setup>

import page1 from '../../src/lib/img/1.jpg'
import page2 from '../../src/lib/img/2.jpg'
import page3 from '../../src/lib/img/3.jpg'
import page4 from '../../src/lib/img/4.jpg'
import page5 from '../../src/lib/img/5.jpg'
import page6 from '../../src/lib/img/6.jpg'
import page7 from '../../src/lib/img/7.jpg'
import page8 from '../../src/lib/img/8.jpg'

const showImages = [page1, page2, page3, page4, page5, page6, page7, page8]


</script>

<style>
.img-box {
    overflow: hidden;
    max-width: 960px;
    margin: 0 auto;

    img {
        width: 100%;
        min-height: 600px;
        transform-origin: center top;
        pointer-events: none;
        margin-bottom: 20%;
        object-fit: fill;
    }
}
</style>
