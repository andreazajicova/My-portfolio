<template>
  <div>
    <v-container class="my-5">
    <h1 class="my-6 subheading blue--text text--darken-3 text-center">Hello, World!</h1>
    <div class="avatar">
    <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-avatar size="110" color="orange">
      <v-img src="../assets/images/resizedRobby.gif" max-width="120" v-bind="attrs" v-on="on"></v-img></v-avatar>
      </template>
      <span>HELLO, INTERESTING HUMAN!</span>
      </v-tooltip>
      </div>
    <v-container class="my-5">
      <p>I am a language enthusiast and lifelong learner, who enjoys creating things that are useful and make life easier. I believe that programming can make a sustainable future. Challenges that make me grow and develop myself are the best. 
      </p>
      <p>Teaching and learning have been my profession for the past 12 years, both in Europe and America. In 2018 I decided to challenge myself and learn another language: JavaScript, and got accepted into a career change programme at School of Applied Technology in 2019. My hobby turned into my passion and a new exciting career path.
      </p>
      <p>
      I believe that 'programming isn't about what you know. It's about what you can figure out.'
      I am a global citizen who through technology tries to make this world a better place and believes that programming can make future sustainable.
      </p>
      <p>
        I speak/type 5 languages: Czech, English, Norwegian, Spanish, JavaScript.
      </p>
    </v-container>
      
      <v-container class="mb-5">
        <h3 class="blue--text mb-5 text--darken-3 mb-5">My conding journey:</h3>
        <p><v-icon left>trending_up</v-icon><strong>2018</strong> Bitcamp Start Up Lab course on Web development basics (HTML, CSS, JavaScript and Ruby on Rails)</p>
        <p><v-icon left>trending_up</v-icon><strong>2019</strong> Self-study and bringing my ideas and dreams alive through code</p>
        <p><v-icon left>trending_up</v-icon><strong>2020</strong> School of Applied Technology three months intensive training for JavaScript FullStack developers</p>
        <p><v-icon left>trending_up</v-icon><strong>2020 onwards... 🚀</strong> FullStack JavaScript developer</p>

      </v-container>

      <v-container class="mt-5">
      <h3 class="blue--text mb-5 text--darken-3 mb-2">Some not code related things I enjoy:</h3>
      <p>Nature, good laugh, drawing, skiing, cycling, yoga, qigong.</p>
      </v-container>
  <!-- <v-container
    class="fill-height"
    fluid
    style="min-height: 434px"
  >
    <v-fade-transition mode="out-in">
      <v-row>
        <v-col cols="4">
          <v-card>
            <v-img
              src="../assets/IMG_20200912_175909.jpg"
              height="320"
              width="350"
              class="grey darken-4"
            ></v-img>
            <v-card-title class="title">
              I enjoy nature.
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="4">
          <v-card>
            <v-img
              src="../assets/sleeping-meme.jpg"
              height="320"
              width="350"
              class="grey darken-4"
            ></v-img>
            <v-card-title class="title">
              I like good jokes.
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="4">
          <v-card>
            <v-img
              src="../assets/circle-cropped (1).png"
              height="320"
              width="350"
              class="grey darken-4"
            ></v-img>
            <v-card-title class="title">
              I always smile.
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="4">
          <v-card>
            <v-img
              src="../assets/dancer.gif"
             height="350"
              width="450"
              class="grey darken-4"
            ></v-img>
            <v-card-title class="title">
              Drawing is my hobby.
            </v-card-title>
          </v-card>
        </v-col>

      </v-row>
    </v-fade-transition>
  </v-container> -->
  <v-container>
  <v-row>
    <v-col
      v-for="image in images"
      :key="image.id"
      class="d-flex child-flex"
      cols="2"
    >
    <v-card>
      <v-img
        :src="image.src"
        aspect-ratio="1"
        class="grey lighten-2"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
        <!-- <span class="imageText">{{image.desc}}</span> -->
      </v-img>
      <!-- <v-card-title>{{image.desc}}</v-card-title> -->
      </v-card>
    </v-col>
  </v-row>
  </v-container>
  
</v-container>

  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          id: 1,
          src: require("../assets/images/forest.jpg"),
          desc: "I love nature and outdoors."
        },
        {
          id: 2,
          src: require("../assets/images/sleeping-meme.jpg"),
          desc: "I like a good laugh."
        },
        {
          id: 3,
          src: require("../assets/images/peacockDancing.gif"),
          desc: "Drawing is my hobby."
        },
        {
          id: 4,
          src: require("../assets/images/skiing.jpeg"),
          desc: "I like skiing and smiling."
        },
        {
          id: 4,
          src: require("../assets/images/yoga.jpeg"),
          desc: "I practise qigong and yoga."
        }
      ]
    }
  }
}
</script>

<style>
  .imageText {
    color: lightgreen;
    font-weight: bolder;
    font-size: 25px;
    float: right;
  }

  .avatar {
    display: flex;
    align-items: center;
    justify-content: center;;
  }

</style>