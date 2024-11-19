const express = require('express') 

const router = (express.Router())
const {getDataSets , postDataSets , deleteDataSets} = require('./controller') ;

router.get('/:id?' , getDataSets) ;
router.post('/post' , postDataSets);
router.delete('/delete/:id' , deleteDataSets);


module.exports = router ;