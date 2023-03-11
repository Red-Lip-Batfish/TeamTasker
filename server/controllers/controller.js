const schemas = require('../models/models.js');

const controller = {
  async login(req, res, next) {
    console.log('in login middleware');

    //   try {
    //     //   const { username, password } = req.body;
    //    let result =  await schemas.people.find({ ...req.body });
    //     console.log(result)
    //     next();
    //   } catch (err) {
    //     console.log('testerr');
    //     next(err);
    //   }

    let result = await schemas.people.findOne({ ...req.body });
    // console.log(result);
    if (result === null) {
      res.status(400).json('Username or password is incorrect');
    } else {
      res.locals.people = result;
      next();
    }
  },

  async signup(req, res, next) {
    console.log('in signup middleware');
    // try {
    //   const data = await schemas.people.create({ ...req.body });
    //   console.log(data);
    //   next();
    // } catch (err) {
    //   next(err);
    // }
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
      res.status(400).json('Username already exists');
    }
  },

  
  async createList(req, res, next) {
    console.log('in createList middleware');
    const data = await schemas.list.create({ ...req.body });
    console.log(data);
    next();
  },
};

module.exports = controller;
