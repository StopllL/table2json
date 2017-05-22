/** tr   行类名标签名或id名
  * td   单元格标签名类名或id名
  * trB  从第几行开始
  * trC  到第几行结束
  * tdB  从第几列开始
  * tdC  到第几列结束
  * jsonKeys  json的键名，数组类型
  */

function T2j(opt){
	for(var i in opt){
		this[i] = opt[i];
	}

	this.valueArr = [];
	this.init();
};
T2j.prototype.init = function(){
	this.setDefaultJsonKey();
};
T2j.prototype.setDefaultJsonKey = function(){
	var tr = document.querySelectorAll(this.tr),
		trl = this.trC || tr.length,
		maxl = 0,
		i = this.trB || 0,
		o = [];
	for(;i<trl;i++){
		var td = tr[i].querySelectorAll(this.td),
			tdmaxl = td.length;
		this.getData(td);
		if( tdmaxl > maxl){
			maxl = tdmaxl;
		};
	};
	for(var j = 0;j<maxl;j++){
		o.push('key' + j);
	}
	this.jsonKeys = this.jsonKeys || o;
};
T2j.prototype.getData = function(doms){
	var arr = [],
		i = this.tdB || 0,
		l = this.tdC || doms.length,
		n = 0;
	for(;i<l;i++){
		arr[n] = doms[i].innerHTML;
		n++;
	}
	this.valueArr.push(arr);
}
T2j.prototype.getJson = function(){
	var arr = [],
		i = 0,
		il = this.valueArr.length,
		jl = this.jsonKeys.length;
	for(;i<il;i++){
		var o = {};
		for(var j = 0;j<jl;j++){
			o[this.jsonKeys[j]] = this.valueArr[i][j];
		}
		console.log(o);
		arr.push(o);
	}

	return arr;
}