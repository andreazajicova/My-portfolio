<template>
  <div>
    <v-container class="my-5 text-center">
      <h1 class="my-6 subheading blue--text text--darken-3 text-center">My Projects</h1>
      <!-- <p>Here are some of my projects together at one place. You can find more on <a href="https://github.com/andreazajicova" target="_blank">My Github</a>
      </p> -->
    <p class="my-9"> Here are some of my projects. You can find more on:
    <v-btn href="https://github.com/andreazajicova"
      target="_blank"        
      text
    >
      
      My GitHub <v-icon right>favorite</v-icon>
    </v-btn>
    </p>
    <NewProject />
      <!-- <v-row>
        <v-col
          v-for="project in projects"
          :key="project.id"
        > -->
          <!-- class="d-flex child-flex"
          xs12 sm12 md6 lg6 -->

          <!-- <v-card
          class="mx-3 pa-5 grey lighten-3"
          width="500px"
          height="560px"
          > -->
        
        <!-- <video v-if="project.id === 7" class="d-flex align-content-center" controls src="../assets/images//Cheer99 Product demo_lowRes.mp4" type="video/mp4"
            width="">
          </video> -->

            <!-- <v-img
              :src="project.src"
              aspect-ratio="1"
              height="265px"
              width="100%"
            ></v-img>
          
            <v-card-title class="justify-center">
            {{project.name}}
            </v-card-title>

            <v-card-subtitle>
              {{project.description}}
            </v-card-subtitle>

            <v-btn :href="project.link"
              target="_blank"        
              text
            ><v-img max-width="18" class="mx-2" color="orange lighten-2" src="../assets/images/githubIcon.png"></v-img>
              Check the source code.
            </v-btn>

            <v-spacer></v-spacer>

            <v-card-text>
              {{project.pitch}}   
            </v-card-text>      
          
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="mx-3 pa-5 grey lighten-3 d-flex child-flex flex-column"
            height= "560px"
            width="500px"
          >
            <video
              src="../assets/images/Cheer99 Product demo_lowRes.mp4"
              aspect-ratio="1"
              controls
              height="245px"
            ></video>
          
            <v-card-title class="justify-center">
              Cheer-App-demo
            </v-card-title>

            <v-card-subtitle>
              Cheer App demo of our mob: 99pbttao.
            </v-card-subtitle>

            <v-spacer></v-spacer>

            <v-card-text>
              🌱 Enjoy! 🌱
            </v-card-text>      
          </v-card>
        </v-col>
      </v-row> -->
    </v-container>
  </div>
</template>

<script>
import NewProject from '@/components/NewProject';

export default {
  components: { NewProject },
    // data: () => ({
    //   // show: false,
    //   projects: [
    //     {
    //       id: 1,
    //       name: "Fire-gallery-app",
    //       description: "Firebase Authentication and Firestore, ReactJS",
    //       link: "https://github.com/andreazajicova/Fire-gallery-app",
    //       src: require("../assets/images/FIreGallery.gif"),
    //       pitch: "Upload, view and delete your photos in your personal gallery that is password protected."
    //     },
    //     {
    //       id: 2,
    //       name: "Motivational-weather-app",
    //       description: "ReactNative app",
    //       link: "https://github.com/andreazajicova/Motivational-Weather-App",
    //       src: require("../assets/images/weather_app.png"),
    //       pitch: "Wake up, check the weather. Not good? Read the motivational quote. That will get you on your feet."
    //     },
    //     {
    //       id: 3,
    //       name: "FullStack-quiz-app",
    //       description: "ReactJS app",
    //       link: "https://github.com/andreazajicova/Fullstack-quiz-app",
    //       src: require("../assets/images/fullstackQuiz.gif"),
    //       pitch: "Check your JavaScript FullStack knowledge with these questions. If you are stuck, simply flip the card and read the correct answer."
    //     },
    //     {
    //       id: 4,
    //       name: "Organize-yourself-app",
    //       description: "ReactJS app",
    //       link: "https://github.com/andreazajicova/Organize-Yourself-App",
    //       src: require("../assets/images/todoApp.gif"),
    //       pitch: "Don't ever forget anything anymore with this app. Write it all down, move it around, cross it out when done."
    //     },
    //     {
    //       id: 5,
    //       name: "Covid19-statistics-app",
    //       description: "ReactJS app",
    //       link: "https://github.com/andreazajicova/covid19-statistics-app",
    //       src: require("../assets/images/covid19app.gif"),
    //       pitch: "A covid19 tracking app created by our amazing and strong mob 99pbttao = Andrea, Njål, Filip and Michal."
    //     },
    //     {
    //       id: 6,
    //       name: "Cheer-app",
    //       description: "React, MaterialUI, webRTC, socket.io, Node, MongoDB",
    //       link: "https://github.com/andreazajicova/99pbttao-cheer",
    //       src: require("../assets/images/cheer-app.png"),
    //       pitch: "Video chat app connecting volunteers with Oslo nursing homes inhabitants. Final project, one that improves society, of our fantastic </salt> mob 99pbttao"
    //     },
    //     {
    //       id: 7,
    //       name: "Bank-loan-calculator",
    //       description: "ReactJS app",
    //       link: "https://github.com/andreazajicova/bank_loan_calculator",
    //       src: require("../assets/images/Screen-Recording-2020-10-28-at-1 (1).gif"),
    //       pitch: "Check this calculator out before you buy that house, car, cat, ..."
    //     }
    //     // {
    //     //   id: 7,
    //     //   name: "Cheer-app demo",
    //     //   description: "React, MaterialUI, webRTC, socket.io, Node, MongoDB",
    //     //   link: "https://github.com/andreazajicova/99pbttao-cheer",
    //     //   src: require("../assets/images/Cheer99 Product demo_lowRes.mp4"),
    //     //   pitch: "Demo"
    //     // }
    //   ]
    // })
    data: () => ({
      // show: false,
      projects: [
        {
          id: 1,
          name: "Fire-gallery-app",
          description: "Firebase Authentication and Firestore, ReactJS",
          link: "https://github.com/andreazajicova/Fire-gallery-app",
          src: require("../assets/images/FIreGallery.gif"),
          pitch: "Upload, view and delete your photos in your personal gallery that is password protected."
        },
        {
          id: 2,
          name: "Motivational-weather-app",
          description: "ReactNative app",
          link: "https://github.com/andreazajicova/Motivational-Weather-App",
          src: require("../assets/images/weather_app.png"),
          pitch: "Wake up, check the weather. Not good? Read the motivational quote. That will get you on your feet."
        },
        {
          id: 3,
          name: "FullStack-quiz-app",
          description: "ReactJS app",
          link: "https://github.com/andreazajicova/Fullstack-quiz-app",
          src: require("../assets/images/fullstackQuiz.gif"),
          pitch: "Check your JavaScript FullStack knowledge with these questions. If you are stuck, simply flip the card and read the correct answer."
        },
        {
          id: 4,
          name: "Organize-yourself-app",
          description: "ReactJS app",
          link: "https://github.com/andreazajicova/Organize-Yourself-App",
          src: require("../assets/images/todoApp.gif"),
          pitch: "Don't ever forget anything anymore with this app. Write it all down, move it around, cross it out when done."
        },
        {
          id: 5,
          name: "Covid19-statistics-app",
          description: "ReactJS app",
          link: "https://github.com/andreazajicova/covid19-statistics-app",
          src: require("../assets/images/covid19app.gif"),
          pitch: "A covid19 tracking app created by our amazing and strong mob 99pbttao = Andrea, Njål, Filip and Michal."
        },
        {
          id: 6,
          name: "Cheer-app",
          description: "React, MaterialUI, webRTC, socket.io, Node, MongoDB",
          link: "https://github.com/andreazajicova/99pbttao-cheer",
          src: require("../assets/images/cheer-app.png"),
          pitch: "Video chat app connecting volunteers with Oslo nursing homes inhabitants. Final project, one that improves society, of our fantastic </salt> mob 99pbttao"
        },
        {
          id: 7,
          name: "Bank-loan-calculator",
          description: "ReactJS app",
          link: "https://github.com/andreazajicova/bank_loan_calculator",
          src: require("../assets/images/Screen-Recording-2020-10-28-at-1 (1).gif"),
          pitch: "Check this calculator out before you buy that house, car, cat, ..."
        }
        // {
        //   id: 7,
        //   name: "Cheer-app demo",
        //   description: "React, MaterialUI, webRTC, socket.io, Node, MongoDB",
        //   link: "https://github.com/andreazajicova/99pbttao-cheer",
        //   src: require("../assets/images/Cheer99 Product demo_lowRes.mp4"),
        //   pitch: "Demo"
        // }
      ]
    })
}
</script>
