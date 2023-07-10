const app = require("./server");
const env = require("./constants/env");

const PORT = env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running at port:${PORT}`);
});
