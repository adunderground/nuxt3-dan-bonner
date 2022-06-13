<template>
  <h1>Project Name : </h1>
  {{ $route.params.id }}
</template>


<script>
import { computed } from "vue";


export default {
  // props: ["id", "title", "thumbnail", "gridAreaName"],
  setup() {
    // console.log(this.route.params);
    // console.log(this.$route);
    return {}
  }

}

</script>