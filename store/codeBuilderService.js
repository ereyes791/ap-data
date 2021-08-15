import keys from "~/assets/env.js";
import axios from "axios";
import qs from 'qs';

const local = {
  runURL: "http://api.hackerearth.com/code/run/",
  buildingTests(state,info){
    let linesArray = [];
    const mainline = "def main (script): \n  print('---------------------') \n  return script"
    linesArray.push(state.code,mainline);
    const testsInputs = JSON.parse(info.tests_input);
    const functionName = info.initial_code.split(' ')[1];
    testsInputs.forEach(test =>{
      const params = Object.values(test); 
      let paramsArray = [];
      params.forEach((param)=>{
        Array.isArray(param)?paramsArray.push(`[${param}]`):paramsArray.push(param);
      });
      const line = `print(main(${functionName}(${paramsArray.join(',')})))`;
      linesArray.push(line);
    });
    return linesArray.join('\n');
  }
};

const state = {
  env: keys["ENV_KEYS"],
  code:'',
  response:'',
  rawOutput:'',
  customOutput:'',  
};

const mutations ={
  codeUpdate(state,code){
    state.code = code;
  },
  responseHandler(state,response){
    // validate when it is an error
    state.response = response;
    const output = response.data.run_status.output;
    const arrayOutput = output.split('\n');
    let customOutput = [];
    let rawOutput = ['----------Test 1-----------'];
    let switchBoolean = false;
    let testCounter = 2;
    arrayOutput.forEach((output,index)=>{
      console.log(index,arrayOutput.length);
      if(index + 1 >= arrayOutput.length) return;
      if(switchBoolean){
        customOutput.push(output);
        switchBoolean = false; 
      }else if(output === '---------------------'){
        switchBoolean = true;
        rawOutput.push(`----------Test ${testCounter}-----------`);
        testCounter++;
      }else{
        rawOutput.push(output);
        switchBoolean = false; 
      }
    });
    state.rawOutput = rawOutput;
    state.customOutput = customOutput;
  }
};

const actions ={
  requestRunCode({ state,commit },info) {
      const sourceCode =local.buildingTests(state,info);
      console.log(sourceCode);
      let data = qs.stringify({
        'client_secret': '79dabab812bee8d13da1718b7b9b7993503fd7ea',
        'source': sourceCode,
        'lang': 'PYTHON'
        });
      const config = {
        method: 'post',
        url: 'https://api.hackerearth.com:443/code/run',
        data : data
      };
      axios(config)
        .then(function (response) {
          commit('responseHandler',response); 
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
  },
};

export default { namespaced: true, state, mutations, actions };
