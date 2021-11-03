<template>
  <div class="home">
  
    <ContainerComponent  />
  </div>
</template>

<script>
// @ is an alias to /src
import ContainerComponent from "@/components/ContainerComp.vue";

export default {
  name: "Home",
  components: {
    ContainerComponent,
  },
};
</script>
<style lang="scss">
.home{
  width: 100%;
  height: 100%;

}
</style>