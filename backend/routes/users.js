const express = require('express');
const router = express.Router();
const db = require('../db/models')
const asyncHandler = require('express-async-handler');

const { User } = db;

router.get(
    '/:id',
    asyncHandler(async (req, res) => {
        const user = await User.findByPk(req.params.id);
        res.json(user)
    })
);

module.exports = router;
