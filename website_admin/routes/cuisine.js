var express = require( 'express' );
var router = express.Router();

const CuisineCtrl = require( '../controllers/cuisine/CuisineCtrl.js' );
const ImgUploads = require( '../middlewares/imgUploads' );

router.route( '/area/:id' )
	.get( CuisineCtrl.area );

/* add */
router.route( '/add' )
	.post( ImgUploads( 'gourmetPic' ), CuisineCtrl.add );

/* edit */
router.route( '/edit/:cuisineID' )
	.post( ImgUploads( 'gourmetPic' ), CuisineCtrl.edit );

/* single */
router.route( '/single/:cuisineID' )
	.get( CuisineCtrl.single );

router.route( '/remove/:cuisineID' )
	.get( CuisineCtrl.remove );

router.route( '/search' )
	.post( CuisineCtrl.search );

module.exports = router;