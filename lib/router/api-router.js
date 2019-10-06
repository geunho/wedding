const fs = require('fs')
const r = require('rethinkdbdash')({ 
  db: 'gmdb',
  servers: [
    {host: 'datasource', port: 28015},
  ]
})
const jsonParser = require('body-parser').json()
const router = require('express').Router()

router.get('/photos', jsonParser, (req, res) => {

  res.send([
    'IMG_PHOTO_ETHER_01.jpg','IMG_PHOTO_ETHER_02.jpg','IMG_PHOTO_ETHER_03.jpg',
    'IMG_PHOTO_ETHER_04.jpg','IMG_PHOTO_ETHER_05.jpg','IMG_PHOTO_ETHER_06.jpg',
    'IMG_PHOTO_ETHER_07.jpg','IMG_PHOTO_ETHER_08.jpg','IMG_PHOTO_ETHER_09.jpg','IMG_PHOTO_ETHER_10.jpg'
  ])
/*
  fs.readdir('../app/images/original/', (err, files) => {
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