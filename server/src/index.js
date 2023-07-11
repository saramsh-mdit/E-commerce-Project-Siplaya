const app = require("./server");
const env = require("./constants/env");
const mongoDB = require("./config/mongDB");

const PORT = env.PORT;

mongoDB();

app.listen(PORT, () => {
  console.log(`Server is running at port:${PORT}`);
});
