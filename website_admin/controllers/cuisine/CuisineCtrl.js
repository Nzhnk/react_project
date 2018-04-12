const CuisineModel = require( '../../models/cuisine/Cuisine.js' );
require( '../../utils/date.format.js' );

const add = async ( req, res, next ) => {
	res.set('Content-Type', 'application/json; charset=utf8')
	console.log(req.body);
	let result = await CuisineModel.add( {
		...req.body,
		gourmetPic : req.fileName,
		uploadTime: new Date().Format('yyyy-MM-dd hh:mm')
	} );
	if( result ){
		res.render( 'cuisine/succ.ejs', {
			data : JSON.stringify( result )
		} );
	} else {
		res.render( 'cuisine/err.ejs', {
			err : "添加失败！"
		} );
	};
};

const area = async ( req, res, next ) => {
	res.set('Content-Type', 'application/json; charset=utf-8')
	const id = req.params.id;
	let type = '';
	console.log(id);
	switch(id){
		case '32':
			type = '江苏';
			break;
		case '33':
			type = '浙江';
			break;
		case '34':
			type = '安徽';
			break;
		case '35':
			type = '福建';
			break;
		case '37':
			type = '山东';
			break;
		case '43':
			type = '湖南	';
			break;
		case '44':
			type = '广东';
			break;
		case '51':
			type = '四川';
			break;
		default:
			type = '四川';
			break;
	}
	let result = await CuisineModel.findArea( type );
	if( result ){
		console.log(result);
		res.render( 'cuisine/succ.ejs', {
			data : JSON.stringify( result )
		} );
	} else {
		res.render( 'cuisine/err.ejs', {
			err : "获取数据失败！"
		} );
	};
};

async function remove( req, res, next ){
	res.set( 'Content-Type', 'application/json; charset=utf-8' );
	let id = req.params.cuisineID;
	console.log(id)
	let result = await CuisineModel.remove( id );
	console.log(result)
	if( result ){
		res.render( 'cuisine/succ.ejs', {
			data : true
		} );
	} else {
		res.render( 'cuisine/err.ejs', {
			err : "删除失败！~"
		} );
	};
};

/*edit*/
async function edit( req, res, next ){
 	res.set( 'Content-Type', 'application/json; charset=utf-8' );//这里要注意，utf-8后面不能加；号

	let id = req.params.cuisineID;
	// 查找
	let result = await CuisineModel.edit( {
		id,
		...req.body,
		gourmetPic : req.fileName,
		uploadTime : new Date().Format('yyyy-MM-dd hh:mm')
	} );
	if( result ){
		console.log(1)
		res.render( 'cuisine/succ.ejs', {
			data : true
		} );
	} else {
		res.render( 'cuisine/err.ejs', {
			err : "获取数据失败!"
		} );
	};
};

/* 查找单个 */
async function single ( req, res, next ){
	res.set( 'Content-Type', 'application/json; charset=utf-8' );
	let cuisineID = req.params.cuisineID;
	let result = await CuisineModel.single( cuisineID );
	if( result ){
		res.render( 'cuisine/succ.ejs', {
			data : JSON.stringify( result )
		} );
	};
};


/* search */
async function search( req, res, next ){
	res.set( 'Content-Type', 'application/json; charset=utf-8' );
	let keywords = req.body.keywords;
	let result = await CuisineModel.search( keywords );
	console.log(result);
	if( result ){
		res.render( 'cuisine/succ.ejs', {
			data: JSON.stringify( result )
		} );
	} else {
		res.render( 'cuisine/err.ejs', {
			err: "(＞人＜)，没有该数据~"
		} );
	};
};
module.exports = {
	add,
	area,
	remove,
	single,
	edit,
	search
};