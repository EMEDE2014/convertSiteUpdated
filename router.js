const express = require('express');
const router = express.Router();
const homePageOcr = require('./src/controllers/homePageAndOcr');
const termsPage = require('./src/controllers/termsPage');





router.get('/', homePageOcr.homePageOcr);
router.post('/upload', homePageOcr.receiveFileHomeOcr);
router.get('/privacy-policy', termsPage.policy);
router.get('/terms-conditions', termsPage.terms);
router.get('/contacts', termsPage.contacts);


module.exports = router;