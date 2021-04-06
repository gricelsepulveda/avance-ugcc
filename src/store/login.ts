import Vue from "vue";
import axios from "axios";

const loginStore = new Vue({
  name: "loginStore",
  data() {
    return {
      userStore: "",
      passStore: "",
      userType: "",
    };
  },
  computed: {},
  methods: {
    async login() {
      const usersData = await axios.get("/users.json");
      const usersDB = usersData.data;

      console.log(usersData.data);
    },
  },
});

export default loginStore;
