const { Router } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = Router();
const auth = require('../middleware/auth.middleware.js');

// /api/profile/
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    if (user) {
      return res.json({ user });
    }

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Щось трапилось не так, спробуйте знову' });
  }
});

// /api/profile/update/
router.post('/update', auth, async (req, res) => {
  try {
    const { name, surname, patronymic, email, phone, password } = req.body;

    if (password === '') {

    } else {
      const hashedPassword = await bcrypt.hash(password, 12);
      
    }

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Щось трапилось не так, спробуйте знову' });
  }
});

module.exports = router;
