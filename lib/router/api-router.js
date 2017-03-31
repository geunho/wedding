const fs = require('fs')
const r = require('rethinkdbdash')({ db: 'gmdb'})
const jsonParser = require('body-parser').json()
const router = require('express').Router()

router.get('/photos', jsonParser, (req, res) => {
  res.send(['IMG_PHOTO_01.jpeg','IMG_PHOTO_02.jpeg'])
  /*
  fs.readdir('../app/images/', (err, files) => {
    if(err) res.send(err)
    res.send(files)
  })
  */
})

router.post('/attendance', jsonParser, (req, res) => {
  const attendee = {
    'name': req.body.name,
    'where': req.body.where,
    'when': req.body.when,
    'regDate': new Date().toJSON()
  }
  r.table('attendance').insert(attendee).run().then(result => {
    res.send(result)
  }).catch(err => {
    res.send(err);
  })
})

router.get('/attendees', (req, res) => {
  r.table("attendance").orderBy(r.desc('regDate')).run().then(result => {
    res.send(result)
  }).catch(err => {
    res.send(err)
  })
})

module.exports = router