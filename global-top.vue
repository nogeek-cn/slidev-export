<!-- global-top.vue -->
<template>
  <!--  <footer class="absolute bottom-0 left-0 right-0  p-2">不止极客</footer>-->

  <!--  <footer class="absolute top-0 right-0 p-2"-->
  <!--          style="padding-right: 3.5rem;-->
  <!--          padding-top: 2.5rem;-->
  <!--          font-size: 2.25rem;-->
  <!--  ">-->
  <!--    <div style="width: 2.5rem">-->
  <!--      <img alt="不止极客" src="assets/NoGeekAvatar.png"/>-->
  <!--    </div>-->
  <!--  </footer>-->

  <!--  <footer class="absolute top-0 right-0 p-2"-->
  <!--          style="padding-right: 7rem;-->
  <!--          padding-top: 2.5rem;-->
  <!--          font-size: 2.25rem;-->

  <!--          background-image: linear-gradient(to right, #F6AAF2, #8CC9F3, #00FBEF);-->
  <!--          background-clip: text;-->
  <!--          -webkit-background-clip: text;-->
  <!--          -webkit-text-fill-color: transparent;-->
  <!--">-->
  <!--        不止极客-->
  <!--  </footer>-->

  <!--  <footer class="absolute bottom-0px left-0 p-2"-->
  <!--          style="padding-left: 3.5rem;-->
  <!--          padding-bottom: 2.5rem;-->
  <!--          font-size: 2.25rem;">-->

  <!--&lt;!&ndash;    <div style="background-color: black">&ndash;&gt;-->
  <!--    <div style=" background-image: linear-gradient(to right, #F6AAF2, #8CC9F3, #00FBEF);-->
  <!--          background-clip: text;-->
  <!--          -webkit-background-clip: text;-->
  <!--          -webkit-text-fill-color: transparent;">-->
  <!--      不止极客-->
  <!--    </div>-->
  <!--&lt;!&ndash;    </div>&ndash;&gt;-->
  <!--  </footer>-->

  <!--  <footer class="absolute bottom-0 left-0 p-2"-->
  <!--          style="padding-left: 3.5rem;-->
  <!--          padding-bottom: 2.5rem;-->
  <!--          font-size: 2.25rem;-->
  <!--  ">-->
  <!--    <div style="width: 5rem">-->
  <!--      <img alt="不止极客" src="assets/NoGeekAvatar.png"/>-->
  <!--    </div>-->
  <!--  </footer>-->


  <!--  <footer-->
  <!--      v-if="$slidev.nav.currentPage !== 1 && $slidev.nav.currentPage !== $slidev.nav.total"-->
  <!--      class="absolute bottom-0px left-0  p-2"-->
  <!--          style="padding-left: 3.5rem;-->
  <!--          padding-bottom: 2.5rem;-->
  <!--" >-->
  <!--    <div>-->
  <!--      <img alt="随机图片"-->
  <!--           style="-->
  <!--           height: 10rem; width: 40rem;-->
  <!--"-->
  <!--           src="https://api.kdcc.cn"-->
  <!--      />-->
  <!--    </div>-->
  <!--  </footer>-->


  <footer
      v-if="$slidev.nav.currentPage !== 1 && $slidev.nav.currentPage !== $slidev.nav.total"
      class="absolute bottom-0px left-0  p-2"
      style="padding-left: 3.5rem;
          padding-bottom: 2.5rem;
          height: 10rem; width: 40rem;
">
    <div>
      <img alt="随机图片"
           style="
           position: absolute;
           clip: rect(5rem, 40rem, 15rem, 0);
           padding-left: 3.5rem;
           bottom: -5.5rem;
           left: 0;
           padding-bottom: 2.5rem;
"
           src="https://api.kdcc.cn"
      />
    </div>
  </footer>

  <footer
      v-if="$slidev.nav.currentPage !== $slidev.nav.total"
      class="absolute bottom-0px right-0  p-2"
      style="padding-right: 3.5rem;
          padding-bottom: 2.5rem">
    <div>
      <img alt="微信公众号" style="width: 10rem; height: 10rem" src="assets/wxpublic.png"/>
    </div>
  </footer>

</template>
<script setup>
</script>