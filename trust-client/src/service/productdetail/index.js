// 测试接口-示例
const test = {
  url: `/test/test`,
  method: "get"
};
const projBaseInfo = ({ pid }) => {
  return {
    url: `/project/${pid}`,
    method: "get"
  };
};
const projDetailInfo = ({ pid }) => {
  return {
    url: `/setProjDetailInfo/${pid}`,
    method: "get"
  };
};
const projComment = ({ pid }) => {
  return {
    url: `/projectcomment/${pid}`,
    method: "get"
  };
};
const projData = ({ pid }) => {
  return {
    url: `/projectdata/${pid}`,
    method: "get"
  };
};
const projContent = ({ pid }) => {
  return {
    url: `/projectcontent/${pid}`,
    method: "get"
  };
};
const projLike = ({ pid }) => {
  return {
    url: `/projectmaylike/${pid}`,
    method: "get"
  };
};

export default {
  test,
  projBaseInfo,
  projDetailInfo,
  projComment,
  projData,
  projContent,
  projLike
};
