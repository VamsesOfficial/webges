__path = process.cwd()

var express = require('express');

// MASUKKAN/GANTI APIKEY 
apikey = "pebrikaito"
// 

var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var router  = express.Router();
nottext: {message: 'MASUKKAN TEXT' }
notapikey: {message: 'APIKEY SALAH' }

var { pinterest } = require(__path + '/scrape.js')

router.get('/pinterest', async (req, res, next) => {  
var apikeyInput = req.query.apikey
var text = req.query.query
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
       pinterest(text)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
)}		
		
// WALLPAPER
router.get('/wallml', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/wallpaper/wallml`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/wallrandom', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/wallpaper/wallrandom`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/wallcode', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/wallpaper/wallcode`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/wallneon', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/wallpaper/wallneon`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})

router.get('/wallpubg', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.json({message: 'APIKEY SALAH' })
fetch(encodeURI(`https://myselfff.herokuapp.com/docs/wallpaper/wallpubg`))
.then(response => response.json())
.then(data => { var result = data;
res.json({ result })})})


module.exports = router
