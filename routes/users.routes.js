const { Router } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = Router();
const auth = require('../middleware/auth.middleware.js');
const isAdmin = require('../middleware/isadmin.middleware.js');

// /api/users
router.get('/', auth, isAdmin, async (req, res) => {
  try {
    const users = await User.find();

    if (users) {
      return res.json({ users });
    }

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Щось трапилось не так, спробуйте знову' });
  }
});

// /api/users/:id
router.get('/:id', auth, isAdmin, async (req, res) => {
  try {
    const id = req.params.id;

    const user = await User.findById(id); 

    res.json(user);

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Щось трапилось не так, спробуйте знову' });
  }
});

// /api/users/:id
router.post('/update/:id', auth, isAdmin, async (req, res) => {
  try {
    const userId = req.params.id;
    const { name, surname, patronymic, email, phone, password } = req.body;

    if (password === '') {
      await User.updateOne({ _id: userId }, { $set: {
        name, surname, patronymic, email, phone
      }});

    } else {
      const hashedPassword = await bcrypt.hash(password, 12);
      await User.updateOne({ _id: userId }, { $set: {
        name, surname, patronymic, email, phone, password: hashedPassword
      }});
    }

    res.json({ message: 'Профіль оновлено' });

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Щось трапилось не так, спробуйте знову' });
  }
});

// /api/users/role/update/:id
router.post('/role/update/:id', auth, isAdmin, async (req, res) => {
  try {
    const userId = req.params.id;
    const { role } = req.body;

    await User.updateOne({ _id: userId }, { $set: { role }});

    res.json({ message: 'Роль оновлена' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Щось трапилось не так, спробуйте знову' });
  }
});

module.exports = router;
