const getVideos = (req, res) => {
  const name = req.params.name;

  if (name) {
    return res.json({ message: `Your name is ${name}` });
  } else {
    return res.status(400).json({
      message: "Please specify a name",
    });
  }
};

const controller = {
  getVideos,
};

module.exports = controller;