const schemas = require('../models/models.js');

const controller = {
  async login(req, res, next) {
    console.log('in login middleware');

    let result = await schemas.people.find({ ...req.body });
    // console.log(result);
    if (result.length === 0) {
      res.status(400).send('Username or password is incorrect');
    } else {
      res.locals.people = result;
      next();
    }
  },

  async signup(req, res, next) {
    console.log('in signup middleware');
    const data = await schemas.people.create({ ...req.body });
    console.log(data);
    next();
  },

  async isUnique(req, res, next) {
    console.log('in isUnique middleware');

    const result = await schemas.people.findOne({
      username: req.body.username,
    });
    if (result === null) {
      next();
    } else {
      res.status(400).send('Username already exists');
    }
  },

  async createList(req, res, next) {
    console.log('in createList middleware');
    const data = await schemas.list.create({ ...req.body });
    res.locals._id = data._id;
    console.log(data);
    next();
  },

  async createAndAddTask(req, res, next) {
    console.log('in createTask middleware');

    const { _id, task } = req.body;

    const data = await schemas.taskArr.create({task:"front End",id: `_id`});
    console.log(data);
    const data2 = await schemas.list.findOneAndUpdate(_id, { taskArr: [data] });
    console.log(data2)
    next();
  },

  // async addTask(req, res, next) {
  //   console.log('in addTask middleware');
  //   const data = await schemas.list.find({ ...req.body });

  //   console.log(data);
  //   next();
  // },
};

module.exports = controller;
