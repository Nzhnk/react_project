const mongoose = require( 'mongoose' );

mongoose.connect( 'mongodb://localhost:27017/Chowhound', function(){
	console.log("管理员集合OK！")
} );

module.exports = mongoose;