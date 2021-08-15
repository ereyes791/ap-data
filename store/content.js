import axios from "axios";

const local = {
  getTopicInfoWrapper(topics) {
    let topicsArray = [];
    topics.forEach(topic => {
      let topicInfo = this.getTopicInfo(topic);
      topicsArray.push(topicInfo);
    });
    return topicsArray;
  },
  getTopicInfo(topic) {
    const infoTopic = {};
    infoTopic["title"] = topic.title;
    infoTopic["week"] = topic.week;
    infoTopic["description"] = topic.description;
    infoTopic["link"] = `/content/${topic.tag}`;
    infoTopic["content"] = topic.content;
    infoTopic["video"] = this.getReadableContentForTopic(
      [topic.videos[0]],
      topic.tag,
      "video"
    );
    infoTopic["algorithm"] = this.getReadableContentForTopic(
      [topic.algorithms[0]],
      topic.tag,
      "code-builder"
    );
    infoTopic["paper"] = this.getReadableContentForTopic(
      [topic.papers[0]],
      topic.tag,
      "paper"
    );
    console.log(infoTopic);
    return infoTopic;
  },
  getReadableContentForTopic(content, tag, nameContent) {
    if (!content[0]) return;
    const resultArray = [];
    console.log(content);
    content.forEach(element => {
      const contentMapped = {};
      contentMapped["title"] = element.name;
      contentMapped["description"] = element.description;
      contentMapped["linkText"] = element.link_text;
      let idX = "";
      if (nameContent === "video") {
        idX = element.YT_video_url;
        contentMapped["keyTerms"] = element.key_terns;
      } else {
        idX = element.id;
      }
      contentMapped["id"] = idX;
      contentMapped["link"] = `/content/${tag}/${nameContent}/${idX}`;
      contentMapped["data"] = element;
      resultArray.push(contentMapped);
    });
    return resultArray;
  },
  hashingTopics(topicArray) {
    console.log("hashing topics");
    const hashTopic = topicArray.reduce((map, value) => {
      value.videos = this.getReadableContentForTopic(
        value.videos,
        value.tag,
        "video"
      );
      value.algorithms = this.getReadableContentForTopic(
        value.algorithms,
        value.tag,
        "code-builder"
      );
      value.papers = this.getReadableContentForTopic(
        value.papers,
        value.tag,
        "paper"
      );
      map[value.tag] = value;
      return map;
    }, {});
    return hashTopic;
  }
};
const state = {
  subject: "",
  description: "",
  topicsSummary: [],
  topics: {}
};
const mutations = {
  fillSubjectData(state, subject) {
    state.subject = subject.subject;
    state.description = subject.description;
    state.topicsSummary = local.getTopicInfoWrapper(subject.topics);
    state.topics = local.hashingTopics(subject.topics);
  }
};

const actions = {
  getSubjectData({ commit }) {
    axios.get("http://127.0.0.1:8000/api/user").then(response => {
      console.log(response);
      commit("fillSubjectData", response.data);
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
