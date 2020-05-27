<template>
  <div id="map" ref="map">
  </div>
</template>
<script>
  export default{
    data:() => ({
      map:null
    }),
    mounted(){
      this.map = new window.google.maps.Map(this.$refs["map"],{
        //center:{lat:-25.344,lng:134.06},
        center:{lat:this.$route.params.lat,lng:this.$route.params.lng},
        zoom:10
      })
      new window.google.maps.Marker({
        //position:{lat:-25.344,lng:134.06},
        position:{lat:this.$route.params.lat,lng:this.$route.params.lng},
        map:this.map
      })
    }
  }
 </script>
<style>
#map{
  width: 100%;
  height: 500px;
  background-color: azure;
}
</style>