const DB_cnt = require( '../admin/connect.js' );

const Cuisine = DB_cnt.model( 'cuisine', {
	gourmetName : {
		type : String,
		reqiured : true
	},
	gourmetPic : {
		type : String,
		reqiured : true
	},
	gourmetArea : {
		type : String,
		reqiured : true
	},
	gourmetPrac : {
		type : String,
		reqiured : true
	},
	tasteDescri : {
		type : String,
		reqiured :true
	},
	mattersAtt : {
		type : String,
		reqiured : true
	},
	uploadTime : {
		type : String,
		reqiured : true
	}
} );

const add = ( { gourmetName, gourmetPic, gourmetArea, tasteDescri, gourmetPrac, mattersAtt, uploadTime } ) => {
	return new Cuisine( {
		gourmetName,
		gourmetPic,
		gourmetArea,
		tasteDescri,
		gourmetPrac,
		mattersAtt,
		uploadTime
	} )
	.save()
	.then( ( result ) => {
		return result;
	} )
	.catch( ( err ) => {
		console.log( err.message );
		return false;
	} );
};

const findArea = ( type ) => {
	return Cuisine.find({ gourmetArea: type }).sort({_id: -1})
	.then( ( result ) => {
		return result;
	} )
	.catch( ( err ) => {
		console.log( err );
		return false;
	} );
};

const remove = ( id ) => {
	return Cuisine.findByIdAndRemove( id )
	.then( ( result ) => {
		return result;
	} )
	.catch( ( err ) => {
		console.log( err.message );
		return false;
	} );
};

const single = ( id ) => {
	return Cuisine.findById( id )
	.then( ( result ) => {
		return result;
	} )
	.catch( ( err ) => {
		console.log( err.message );
		return false;
	} );
};

function edit( { id, gourmetName, gourmetPic, gourmetArea, tasteDescri, gourmetPrac, mattersAtt, uploadTime } ){
	let update = gourmetPic ? { gourmetName, gourmetPic, gourmetArea, tasteDescri, gourmetPrac, mattersAtt, uploadTime } : { gourmetName, gourmetArea, tasteDescri, gourmetPrac, mattersAtt, uploadTime };
	return Cuisine.findByIdAndUpdate( id, update )
	.then( ( result ) => {
		return true;
	} )
	.catch( ( err ) => {
		console.log( err.message );
		return false;
	} );
};

function search( keywords ){
	console.log(keywords);
	let reg = new RegExp( keywords, 'i' );
	return result = Cuisine.find( {
		'$or' : [
			{ 'gourmetName' : { $regex : reg } },
			{ 'gourmetArea' : { $regex : reg } },
			{ 'tasteDescri' : { $regex : reg } },
			{ 'gourmetPrac' : { $regex : reg } },
			{ 'mattersAtt' : { $regex : reg } }
		]
	} )
	.then( ( result ) => {
		return result;
	} )
	.catch( ( err ) => {
		console.log(err);
		return false;
	})
};

module.exports = {
	findArea,
	add,
	remove,
	single,
	edit,
	search
};