const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Track } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { restoreUser } = require('../../../frontend/src/store/session');
const router = express.Router();

// potential trackRouter

const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors,
];

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const users = await User.findAll();
    res.json(users)
  })
);

router.post(
  '/',
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  }),
);

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const id = req.params.id
    const user = await User.findByPk(id);
    res.json(user)
  })
);

router.put(
  '/:id',
  restoreUser, 
  requireAuth,
  asyncHandler(async (req, res) => {
    const id = req.params.id
    const user = await User.findByPk(id)

    const {username, bio, artistName}  = req.body;

    const currUser = await user.update({
        username,
        bio,
        artistName
    })

    res.json(currUser)
  })
)

router.get(
  '/:id/tracks',
  asyncHandler(async (req, res) => {
    const id = req.params.id
    const allTracks = await Track.findAll(
    {
        where: {
      'userId' : id
      }
    });
    res.json(allTracks)
  })
);

router.get(
  '/:id/tracks/:trackId',
  asyncHandler(async (req, res) => {
    const { trackId } = req.params;
    const currTrack = await Track.findByPk(trackId);
    res.json(currTrack)
  })
);

router.put(
  '/:id/tracks/:trackId',
  restoreUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const { trackId } = req.params;
    const track = await Track.findByPk(trackId);

    ///singleMulterUpload, url and image

    ///
    res.json(currTrack)
  })
);

router.post(
  '/:id/upload',
  restoreUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const user = User.findByPk(id);

    const { albumTitle, title } = req.body;
    //singleMulterUpload, url and image
    res.json(user)
  })
  );

router.delete(
  '/:id/tracks/:trackId',
  restoreUser,
  requireAuth,
  asyncHandler(async (req, res) => {
    const { trackId } = req.params;
    const parsed = parseInt(trackId)
    const track = await Track.findByPk(parsed);
    await track.destroy()
    res.send(200)
  })
)


module.exports = router;
