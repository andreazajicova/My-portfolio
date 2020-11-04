<template>
  <div> 
    <v-container>
      <v-row class="mt-16 justify-center">
        <v-card flat class="d-flex child-flex flex-column pb-16" height="500px" width="670px">
          <video controls src="../assets/images/Andrea.MOV (1).mp4" type="video/mp4"
            height="360">
          </video>
          <h1 class="text-center">
            <vue-typer erase-style='clear' :text='["Welcome to my portfolio!", "I hope you enjoy it as much as I did creating it!", "🙃"]'>
            </vue-typer>
          </h1>        
        </v-card> 
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
.vue-typer .custom.char.typed {
  color: #1565C0;
}

</style>