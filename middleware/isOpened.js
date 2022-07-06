const isOpened = (req, res, next) => {
  const date = new Date();

  let day = date.getDay();
  let hour = date.getHours();

  let dayRight = day > 0 && day < 7;
  let hourRight = hour > 8 && hour < 18;

  let opened = dayRight && hourRight;

  if (!opened) {
    res.status(401).send("Ooups ! It's Closed Now !");
  } else {
    next();
  }
};

module.exports = isOpened;
