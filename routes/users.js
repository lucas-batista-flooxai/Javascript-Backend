module.exports = (app) => {
  app.get("/users", (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "aplication/json");
    res.json({
      users: [
        {
          name: "Lucas",
          email: "lucas@gmail.com",
          id: 1,
        },
      ],
    });
  });

  app.post("/users", (req, res) => {
    res.json(req.body)
  });
};
