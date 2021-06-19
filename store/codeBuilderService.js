import keys from "~/assets/env.js";
import axios from "axios";

const local = () => ({
  runURL: "http://api.hackerearth.com/code/run/"
});

const state = () => ({
  env: keys["ENV_KEYS"]
});

const mutation = () => ({});

const actions = () => ({
  requestRunCode({ state }, code) {
    const source = "print('hello word!')";
    const data = {
      client_secret: state.env.client_secret,
      async: 0,
      source: source,
      lang: "PYTHON",
      time_limit: 5,
      memory_limit: 262144
    };
    axios
      .post(local.runURL, data)
      .then(response => {
        console.log(response);
      })
      .catch(e => {
        console.log(e);
      });
  }
});

export default { namespaced: true, state, mutation, actions };
