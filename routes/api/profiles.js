const express = require('express');
const router = express.Router();

// @route  GET api/profile/test
// @desc Tests profile route
// @access Public
router.get('/test', (req, res) => res.json({
    msg: 'Profile Works'
}));

// @route  GET api/profile/login
// @desc Login profile route
// @access Public
router.post('/login', (req, res) => {
    const profiles = [{
            id: 1,
            email: 'user@user.com',
            password: '1234'
        },
        {
            id: 1,
            email: 'admin@admin.com',
            password: '1234'
        }
    ]
    let userExists = false;
    let loggedUser = {
        email: '',
        role: ''
    }
    for (profile of profiles) {
        if (req.body.email === profile.email && req.body.password === profile.password) {
            if (profile.email.indexOf('@admin.com') !== -1) {
                loggedUser.role = 'admin';
            } else {
                loggedUser.role = 'user';
            }
            userExists = true;
            loggedUser.email = profile.email;
            res.json(loggedUser);
            return
        }
    }

    if (!userExists) {
        res.json('Wrong email or password');
    }

})

module.exports = router;