const data1 = {
  name: "haha",
  app: () => {
    console.log("App This", this);
  },
};
const data2 = {
  name: "haha",
  app: function () {
    console.log("App This", this);
  },
};

data1.app();
data2.app();
