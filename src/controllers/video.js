const getVideos = (req, res) => {
  const name = req.params.get("name");

  if (name) {
    req.json({ message: `Your name is ${name}` });
  } else {
    return handleErr({ status: 400, message: "Please specify a name" })
  }
}

const controller = {
  getVideos,
};



module.exports = controller