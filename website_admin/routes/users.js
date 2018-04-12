var express = require( 'express' );
var router = express.Router();

const LoginController = require( '../controllers/admin/LoginController.js' );
const verifyToken = require( '../middlewares/verifyToken.js' );

/* GET users listing. */
router.route( '/islogin' )
	.get( verifyToken, LoginController.isLogin );//

router.route( '/isregister' )
	.post( LoginController.isRegister );

router.route( '/loginstate' )
	.post( LoginController.loginState );

module.exports = router;