<template>
  <div>
    <v-container class="my-5">
      <h1 class="my-6 subheading blue--text text--darken-3 text-center">My Skills</h1>
      <v-row>
        <v-card
          class="ma-6 pa-5 grey lighten-3"
          width="330px"
        >
          <h2 class="text-center mb-10">Frontend/Backend</h2>
            <v-col
              v-for="skill in skills"
              :key="skill.id"
            >
              <h4 class="float-right mt-8">{{skill.name}}</h4>
              <v-img width="60px" class="ma-4" :src="skill.src"></v-img>
            </v-col>    
        </v-card>
            
        <v-card
          class="ma-6 pa-5 grey lighten-3"
          width="330px"
        >
          <h2 class="text-center mb-10">Tools/Methods</h2>
            <v-col
              v-for="tool in tools"
              :key="tool.id"
            >
              <h4 class="float-right mt-8">{{tool.name}}</h4>
              <v-img width="60px" class="ma-4" :src="tool.src"></v-img>
            </v-col> 
        </v-card>

        <v-card
          class="ma-6 pa-5 grey lighten-3"
          width="330px"
        >
          <h2 class="text-center mb-10">Personal skills</h2>
            <v-col
              v-for="quality in qualities"
              :key="quality.id"
            >
              <h4 class="float-right mt-8">{{quality.name}}</h4>
              <v-img width="60px" class="ma-4" :src="quality.src"></v-img>
            </v-col> 
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          id: 1,
          name: "HTML",
          src: require("../assets/images/html2.png"),
        },
        {
          id: 2,
          name: "React",
          src: require("../assets/images/react2.png"),
        },
        {
          id: 3,
          name: "JavaScript",
          src: require("../assets/images/js2.png"),
        },
        {
          id: 4,
          name: "Vue",
          src: require("../assets/images/vue2.png"),
        },
        {
          id: 5,
          name: "Bootstrap",
          src: require("../assets/images/bootstrap2.png"),
        },
        {
          id: 6,
          name: "jQuery",
          src: require("../assets/images/jQuery.png"),
        },
        {
          id: 7,
          name: "Node",
          src: require("../assets/images/node.png"),
        },
        {
          id: 8,
          name: "MongoDB",
          src: require("../assets/images/mongodb.png"),
        },
        {
          id: 9,
          name: "Express",
          src: require("../assets/images/express.png"),
        },
        {
          id: 10,
          name: "MaterialUI",
          src: require("../assets/images/materialui.png")
        }
      ],
      tools: [
        {
          id: 1,
          name: "Docker",
          src: require("../assets/images/docker.png"), 
        },
        {
          id: 2,
          name: "Jest",
          src: require("../assets/images/jest.png")
        },
        {
          id: 3,
          name: "Handlebars",
          src: require("../assets/images/handlebars2.png")
        },
        {
          id: 4,
          name: "Visual Studio Code",
          src: require("../assets/images/vscode.png")
        },
        {
          id: 5,
          name: "Git",
          src: require("../assets/images/git2.png")
        },
        {
          id: 6,
          name: "Firebase",
          src: require("../assets/images/firebase2.png")
        },
        {
          id: 7,
          name: "Agile",
          src: require("../assets/images/agile2.png")
        },
        {
          id: 8,
          name: "TDD",
          src: require("../assets/images/tdd.png")
        },                 
      ],
      qualities: [
        {
          id: 1,
          name: "Perseverance",
          src: require("../assets/images/perseverance.jpg")
        },
        {
          id: 2,
          name: "Friendliness",
          src: require("../assets/images/friendly.jpg")
        },
        {
          id: 3,
          name: "Resourcefulness",
          src: require("../assets/images/resourcefull.jpg")
        },
        {
          id: 4,
          name: "Open-mindedness",
          src: require("../assets/images/openmind.png")
        },
        {
          id: 5,
          name: "Flexibility",
          src: require("../assets/images/flexible2.png")
        }
      ]
    }
  }
}
</script>

