const r = require('rethinkdbdash')()
const _ = require('lodash')
const jsonParser = require('body-parser').json()
const router = require('express').Router()

router.get('/projects', (req, res) => {
  r.table("projects").orderBy('createdAt').run().then(result => {
    res.send(result)
  }).catch(err => {
    console.log("Error:", err)
  })
})

router.post('/projects', jsonParser, (req, res) => {
  const project = {
    'title': req.body.title,
    'content': req.body.content,
    'createdAt': new Date().toJSON()
  }
  r.table('projects').insert(project).run().then(result => {
    res.send(result)
  }).catch(err => {
    console.log('Error:', err)
  })
})

router.get('/projects/:id', (req, res) => {
  r.table('projects').get(req.params.id).run().then(result => {
    res.send(result)
  }).catch(err => {
    console.log('Error:', err)
  })
})

router.get('/projects/:id/feeds', (req, res) => {
  r.table('feeds').filter({projectId: req.params.id}).orderBy('createdAt').run().then(result => {
    res.send(result)
  }).catch(err => {
    console.log('Error:', err)
  })
})

router.get('/feeds', (req, res) => {
  r.table("feeds").orderBy('createdAt').run().then(result => {
    res.send(result)
  }).catch(err => {
    console.log("Error:", err)
    res.send(result)
  })
})

router.post('/feeds', jsonParser, (req, res) => {
  const feed = {
    'content': req.body.content,
    'createdAt': new Date().toJSON(),
    'projectId': req.body.projectId
  }
  r.table('feeds').insert(feed).run().then(result => {
    res.send(result)
  }).catch(err => {
    console.log('Error:', err)
  })
})

module.exports = router