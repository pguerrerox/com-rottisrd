<template>
  <section class="equipo">
    <h1>{{ departamento }}</h1>
    <div class="container">
      <div class="container-pic" :class="{tres: tres}" v-for="pic in pics" :key="pic.id">
        <img
          :src="require('~/assets/images/team/' + departamento +'/'+ pic +'-0.png')"
          class="fir-img"
        />
        <img
          :src="require('~/assets/images/team/' + departamento +'/'+ pic +'-1.png')"
          class="sec-img"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    departamento: String,
    pics: Array,
    tres: Boolean,
    xbreak: Boolean
  }
};
</script>

<style scoped>
.equipo {
  background: #ffffff;
}
.tres {
  margin: 0 calc(75% - (3 * 300px))
}
h1 {
  font-size: 6em;
  text-transform: capitalize;
  margin: 0;
  padding: 25px 0 0 0;
  text-align: center;
}
.container {
  width: 100%;
  padding: 0 0 25px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.container-pic {
    display: flex;
    width: 300px;
    height: auto;
    position: relative;
    -webkit-box-pack: center;
    justify-content: center;
}
.fir-img {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  transition: opacity 0.25s;
}
.sec-img {
  width: 100%;
  height: 100%;
  z-index: 1;
}
.container-pic:hover .fir-img {
  opacity: 0;
}

/* media query tablet */
@media screen and (max-width: 1024px) {
  .container-pic {
    width: 33vw;
    margin: 0;
  }
}
/* media query mobile */
@media screen and (max-width: 425px) {
  h1 {
    font-size: 4em;
  }
  .container-pic {
    width: 50vw;
  }
}
@media screen and (max-width: 375px) {
  .container-pic {
    width: 90vw;
  }
}
</style>