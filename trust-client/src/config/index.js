let host = "http://localhost:3000";
// eslint-disable-next-line
if (NODE_ENV !== "dev") {
  host = "http://localhost:3000";
}
export default {
  // eslint-disable-next-line
    serverHost: SERVER_HOST,
  host
};
