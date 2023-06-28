(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"EVN_app_main_v6_ani_atlas_", frames: [[0,0,1946,1102],[0,1104,1940,1092]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.bg = function() {
	this.spriteSheet = ss["EVN_app_main_v6_ani_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_white_180 = function() {
	this.spriteSheet = ss["EVN_app_main_v6_ani_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.telephone_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApeG4QhRg1gUhxQgQhaAZhGQATg3ApgnQAegcAmgSQAVgKAQgEQAOgDAOAHQANAHAFAOIARA2QAJAYAFAIIAAABQAHAPAPAJQAPAJATABIALABQAMgBALgEICVgwQAigLANgbQAKgUgHgVIgFgNIAAgBIgVg+IAAAAIgXhAQgFgOAGgNQAFgOANgHQBrg1B8gdIABAAIABAAQB7gdB4ABQAOABALAJQALAKABAOIAHA4IADAOIAGA4IAAABIAAABIADAWQACAVARAOQARAOAYACIAUgBICbgWQAdgEATgTQAUgSAAgZIAAgBIgDgiIgMhdQgEgWgcgTQg9gpiCgKQivgOjOAvIgDABQhsAZhoAmQhoAnhHApQgaAPgrAkQgnAhgIAQQgFAOgOAHQgPAHgPgFQgPgFgHgPQgGgOAFgPQALghA8gyQAtgmAigTQBLgsBugpQBtgpBzgaIACgBQDYgyC8APQCXAMBNA0QA4AmAJA3IAMBWIAAABIABAKQACAWAAAWQAAA0gmApQgmAog5AIIirAYIgVgBQg0gEgkghQglghgGgwIgDgcIAAgBIgBgJIAAgBIgEgnIgDgOIAAgBIgDgWQhdAChhAXIgCAAIgBAAQhhAXhWAnIAlBrQATAzgZAxQgNAbgYAVQgYAUgfAKIiVAwQgVAHgXABQgKABgKgBQgngDgggUQgggVgQggQgGgMgLgcIgGgTQgXAOgQAQQhCBBAWB2QAOBRA1AhQApAbAuACQAXABAPgFQAQgEAOAIQANAIAEAQQAEAPgIAOQgIAOgQADQgBACgFAAQgKACgaAAQhUAAg8gmg");
	this.shape.setTransform(71.4,47.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnZFjQgSAAgNgJQgPgJAAgRIAAp2QAAgRAPgOQAOgNARAAIOvAAQATAAAPAKQAQAKAAARIAAJ+QAAAQgRAJQgQAJgUAAgAmtEJINbAAIAAnmImuFbIlXj9QgOgLgDgRQgCgRAKgOQALgOARgDQAQgCAPAKIEiDYIFgkdIsKAAg");
	this.shape_1.setTransform(92.2,109.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144.2,144.6);


(lib.sandace_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJALIAAgVIATAAIAAAVg");
	this.shape.setTransform(260.8,169.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABDBeIgUg1IheAAIgVA1IgQAAIBMi7IARAAIBMC7gAApAbIgphoIgpBoIBSAAg");
	this.shape_1.setTransform(248.4,161.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AArBeIhbheIAABeIgRAAIAAi7IARAAIAABWIBUhWIAWAAIhaBYIBiBjg");
	this.shape_2.setTransform(233.1,161.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIBeIAAirIg2AAIAAgQIB9AAIAAAQIg3AAIAACrg");
	this.shape_3.setTransform(217.4,161.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgtBeIAAi7IBYAAIAAAQIhHAAIAABFIBDAAIAAANIhDAAIAABJIBKAAIAAAQg");
	this.shape_4.setTransform(204.8,161.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABOBeIAAirIhFCrIgRAAIhFirIAACrIgRAAIAAi7IAbAAIBDCoIBFioIAZAAIAAC7g");
	this.shape_5.setTransform(185.8,161.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXBUQgVgMgMgWQgMgVAAgdQAAgbAMgVQANgWAVgMQAWgNAcAAQAKAAALACQAKABAJAEIgBARQgJgFgLgCQgKgCgKAAQgYABgRAKQgRALgKASQgJASAAAWQAAAYAJASQAKASASAKQARAKAZABQAKAAAKgCQAJgCAKgEIABARQgJADgLABQgLACgKAAQgdAAgWgMg");
	this.shape_6.setTransform(165.9,161.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABDBeIgUg1IheAAIgVA1IgQAAIBMi7IARAAIBMC7gAApAbIgphoIgpBoIBSAAg");
	this.shape_7.setTransform(141.5,161.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgIBeIAAirIg2AAIAAgQIB9AAIAAAQIg3AAIAACrg");
	this.shape_8.setTransform(126.3,161.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABDBeIgUg1IheAAIgVA1IgQAAIBMi7IARAAIBMC7gAApAbIgphoIgpBoIBSAAg");
	this.shape_9.setTransform(111,161.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhsBeIAAi7IARAAIAACrIBUAAIAAirIAPAAIAACrIBUAAIAAirIARAAIAAC7g");
	this.shape_10.setTransform(89,161.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ABDBeIgUg1IheAAIgVA1IgQAAIBMi7IARAAIBMC7gAApAbIgphoIgpBoIBSAAg");
	this.shape_11.setTransform(67,161.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag0BeIAAi7IApAAQAPABAOAEQANAEAIAKQAJALAAARQAAARgJAKQgKAMgQADQALADAKAFQAJAFAGAKQAEAJABAMQAAAVgLAMQgLAMgQAEQgQAEgRABgAgjBOIAUAAQAMAAALgCQAMgEAIgHQAIgJAAgPQAAgPgIgJQgJgJgNgCQgLgDgOABIgQAAgAgjgKIAVAAQAMAAAJgDQAKgEAHgHQAGgIABgOQAAgLgHgIQgFgGgJgDQgJgDgKAAIgaAAg");
	this.shape_12.setTransform(51.4,161.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ABDBdIgUg0IheAAIgVA0IgQAAIBMi6IARAAIBMC6gAApAbIgphoIgpBoIBSAAg");
	this.shape_13.setTransform(265.4,125.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAwBdIAAhYIhfAAIAABYIgRAAIAAi6IARAAIAABUIBfAAIAAhUIARAAIAAC6g");
	this.shape_14.setTransform(247.8,125.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ABDBdIgUg0IheAAIgVA0IgQAAIBMi6IARAAIBMC6gAApAbIgphoIgpBoIBSAAg");
	this.shape_15.setTransform(222.9,125.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgHBdIAAiqIg3AAIAAgQIB9AAIAAAQIg3AAIAACqg");
	this.shape_16.setTransform(207.7,125.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ABDBdIgUg0IheAAIgVA0IgQAAIBMi6IARAAIBMC6gAApAbIgphoIgpBoIBSAAg");
	this.shape_17.setTransform(192.4,125.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag2BdIAAi6IBhAAIAAAQIhQAAIAAA9IAeAAQAdAAARAPQAQANAAAZQAAAPgGANQgGANgOAHQgOAIgXAAgAglBPIAeAAQAUAAAMgKQAMgJABgXQgBgUgMgJQgMgJgVAAIgdAAg");
	this.shape_18.setTransform(176.9,125.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgVBeQgFgBgEgBIACgPIAHACIAIAAQALAAAFgFQAGgEACgJQADgHAAgJIAAiLIARAAIAACKQAAAPgEALQgFALgJAHQgKAHgOAAIgKgBg");
	this.shape_19.setTransform(163.7,125.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgkBZQgPgIgKgOQgKgNgFgRQgFgRAAgUQAAgSAFgRQAFgRALgOQAKgNAPgIQAQgIATAAQAWAAAPAIQAPAHAKAOQAKANAFARQAFASAAASQAAATgFARQgFARgKAOQgKAOgQAHQgPAIgVAAQgUAAgQgHgAgchIQgMAGgIAMQgHAMgEAOQgEAOAAAOQAAAPAEAOQAEAOAIAMQAHALAMAHQAMAHAQABQARgBAMgGQAMgHAIgMQAIgLAEgPQADgOAAgPQAAgOgDgOQgEgPgIgLQgIgMgMgHQgMgGgRgBQgQABgMAHg");
	this.shape_20.setTransform(150.7,125.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgIBdIAAiqIg2AAIAAgQIB9AAIAAAQIg3AAIAACqg");
	this.shape_21.setTransform(134.5,125.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgXBUQgVgMgMgWQgMgVAAgdQAAgbAMgVQANgWAVgMQAWgNAcAAQAKAAALACQAKABAJAEIgBARQgJgFgLgCQgKgCgKAAQgYABgRAKQgRALgKASQgJASAAAWQAAAYAJASQAKASASAKQARAKAZABQAKAAAKgCQAJgCAKgEIABARQgJADgLABQgLACgKAAQgdAAgWgMg");
	this.shape_22.setTransform(119.9,125.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgkBZQgPgIgKgOQgKgNgFgRQgFgRAAgUQAAgSAFgRQAFgRALgOQAKgNAPgIQAQgIATAAQAWAAAPAIQAPAHAKAOQAKANAFARQAFASAAASQAAATgFARQgFARgKAOQgKAOgQAHQgPAIgVAAQgUAAgQgHgAgchIQgMAGgIAMQgHAMgEAOQgEAOAAAOQAAAPAEAOQAEAOAIAMQAHALAMAHQAMAHAQABQARgBAMgGQAMgHAIgMQAIgLAEgPQADgOAAgPQAAgOgDgOQgEgPgIgLQgIgMgMgHQgMgGgRgBQgQABgMAHg");
	this.shape_23.setTransform(101.7,125.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgXBUQgVgMgMgWQgMgVAAgdQAAgbAMgVQANgWAVgMQAWgNAcAAQAKAAALACQAKABAJAEIgBARQgJgFgLgCQgKgCgKAAQgYABgRAKQgRALgKASQgJASAAAWQAAAYAJASQAKASASAKQARAKAZABQAKAAAKgCQAJgCAKgEIABARQgJADgLABQgLACgKAAQgdAAgWgMg");
	this.shape_24.setTransform(84.1,125.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgkBZQgPgIgKgOQgKgNgFgRQgFgRAAgUQAAgSAFgRQAFgRALgOQAKgNAPgIQAQgIATAAQAWAAAPAIQAPAHAKAOQAKANAFARQAFASAAASQAAATgFARQgFARgKAOQgKAOgQAHQgPAIgVAAQgUAAgQgHgAgchIQgMAGgIAMQgHAMgEAOQgEAOAAAOQAAAPAEAOQAEAOAIAMQAHALAMAHQAMAHAQABQARgBAMgGQAMgHAIgMQAIgLAEgPQADgOAAgPQAAgOgDgOQgEgPgIgLQgIgMgMgHQgMgGgRgBQgQABgMAHg");
	this.shape_25.setTransform(58.5,125.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag0BdIAAi6IApAAQAPAAANAFQAOAEAJALQAIAJAAASQAAARgJALQgKAKgQAEQALACAKAFQAJAGAGAKQAEAJAAAMQABAVgLAMQgLAMgQAEQgQAFgSgBgAgkBPIAVAAQAMgBALgDQAMgCAIgJQAIgHAAgQQAAgPgIgJQgJgIgNgDQgLgDgOAAIgRAAgAgkgKIAWAAQAMAAAJgDQALgDAGgIQAGgIABgOQAAgMgHgGQgFgIgJgCQgJgDgKAAIgbAAg");
	this.shape_26.setTransform(41.9,125.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("ABJB2IAAgxIiRAAIAAAxIgQAAIAAhAIAPAAQARgWAHgeQAHgdAAgiIAAg4IBqAAIAACrIAZAAIAABAgAgagzQAAAfgGAaQgHAbgOAVIBkAAIAAibIhJAAg");
	this.shape_27.setTransform(267.5,92);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAxBdIAAiiIheCiIgUAAIAAi5IARAAIAACjIBfijIATAAIAAC5g");
	this.shape_28.setTransform(249.3,89.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ag0BdIAAi5IApAAQAPgBAOAFQANAEAIALQAJAKAAARQAAARgKALQgJAKgQAFQAMACAJAEQAJAGAFAJQAFAKABAMQAAAVgLAMQgLAMgQAEQgQAFgRgBgAgjBPIAUAAQAMAAALgEQAMgCAIgJQAIgHAAgPQAAgRgIgIQgJgJgNgCQgMgDgNAAIgQAAgAgjgKIAVAAQAMAAAJgDQAKgEAHgHQAGgIAAgOQABgMgHgGQgFgIgJgCQgKgDgJAAIgaAAg");
	this.shape_29.setTransform(233.3,89.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgvBeIgJgCIABgOIAHABIAIABQAHgBAFgEQAFgEAFgJIAKgTIhFiIIATAAIA6B2IA8h2IASAAIhICNIgMAYQgGAKgIAGQgHAGgLABIgJgBg");
	this.shape_30.setTransform(217.5,89.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgtBdIAAi5IBYAAIAAAPIhHAAIAABFIBDAAIAAANIhDAAIAABKIBKAAIAAAOg");
	this.shape_31.setTransform(196.2,89.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgIBdIAAiqIg2AAIAAgPIB9AAIAAAPIg3AAIAACqg");
	this.shape_32.setTransform(182.5,89.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("ABDBdIgUgzIheAAIgVAzIgQAAIBMi5IARAAIBMC5gAApAbIgphoIgpBoIBSAAg");
	this.shape_33.setTransform(167.3,89.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("ABOBdIAAiqIhGCqIgPAAIhGiqIAACqIgQAAIAAi5IAaAAIBECmIBDimIAaAAIAAC5g");
	this.shape_34.setTransform(146.7,89.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAxBdIAAiiIheCiIgTAAIAAi5IARAAIAACjIBdijIAUAAIAAC5g");
	this.shape_35.setTransform(125.8,89.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgtBdIAAi5IBYAAIAAAPIhHAAIAABFIBDAAIAAANIhDAAIAABKIBKAAIAAAOg");
	this.shape_36.setTransform(103.4,89.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("ABOBdIAAiqIhGCqIgQAAIhFiqIAACqIgQAAIAAi5IAaAAIBDCmIBFimIAaAAIAAC5g");
	this.shape_37.setTransform(84.4,89.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgtBdIAAi5IBYAAIAAAPIhHAAIAABFIBDAAIAAANIhDAAIAABKIBKAAIAAAOg");
	this.shape_38.setTransform(66.5,89.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgyBdIAAi5IArAAQAQAAANAFQAOAHAHALQAIAMAAARQAAASgJAMQgJALgNAGQgOAFgOAAIgZAAIAABRgAghgCIAOAAQAOAAALgDQANgCAHgIQAHgIABgRQAAgSgLgKQgLgJgQAAIgdAAg");
	this.shape_39.setTransform(53.5,89.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("Ag1BdIAAi5IAqAAQAPgBANAFQAOAEAJALQAIAKAAARQAAARgJALQgKAKgQAFQALACAKAEQAJAGAGAJQAEAKAAAMQAAAVgKAMQgKAMgRAEQgQAFgSgBgAgkBPIAUAAQANAAALgEQAMgCAIgJQAIgHAAgPQAAgRgJgIQgIgJgNgCQgLgDgOAAIgRAAgAgkgKIAWAAQAMAAAJgDQAKgEAHgHQAHgIAAgOQgBgMgGgGQgFgIgKgCQgJgDgJAAIgbAAg");
	this.shape_40.setTransform(39,89.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgtBeIAAi6IBYAAIAAAPIhHAAIAABEIBDAAIAAAOIhDAAIAABJIBKAAIAAAQg");
	this.shape_41.setTransform(269.7,53.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgkBZQgPgIgKgOQgKgNgFgRQgFgRAAgUQAAgSAFgRQAFgRALgOQAKgNAPgIQAQgIATAAQAWAAAPAIQAPAHAKAOQAKANAFARQAFASAAASQAAATgFARQgFARgKAOQgKAOgQAHQgPAIgVAAQgUAAgQgHgAgchIQgMAGgIAMQgHAMgEAOQgEAOAAAOQAAAPAEAOQAEAOAIAMQAHALAMAHQAMAHAQABQARgBAMgGQAMgHAIgMQAIgLAEgPQADgOAAgPQAAgOgDgOQgEgPgIgLQgIgMgMgHQgMgGgRgBQgQABgMAHg");
	this.shape_42.setTransform(252.9,53.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AArBeIhbheIAABeIgRAAIAAi6IARAAIAABVIBUhVIAWAAIhaBYIBiBig");
	this.shape_43.setTransform(236.5,53.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgtBeIAAi6IBYAAIAAAPIhHAAIAABEIBDAAIAAAOIhDAAIAABJIBKAAIAAAQg");
	this.shape_44.setTransform(221.5,53.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgXBUQgVgMgMgWQgMgVAAgdQAAgbAMgVQANgWAVgMQAWgNAcAAQAKAAALACQAKABAJAEIgBARQgJgFgLgCQgKgCgKAAQgYABgRAKQgRALgKASQgJASAAAWQAAAYAJASQAKASASAKQARAKAZABQAKAAAKgCQAJgCAKgEIABARQgJADgLABQgLACgKAAQgdAAgWgMg");
	this.shape_45.setTransform(206.4,53.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgkBZQgPgIgKgOQgKgNgFgRQgFgRAAgUQAAgSAFgRQAFgRALgOQAKgNAPgIQAQgIATAAQAWAAAPAIQAPAHAKAOQAKANAFARQAFASAAASQAAATgFARQgFARgKAOQgKAOgQAHQgPAIgVAAQgUAAgQgHgAgchIQgMAGgIAMQgHAMgEAOQgEAOAAAOQAAAPAEAOQAEAOAIAMQAHALAMAHQAMAHAQABQARgBAMgGQAMgHAIgMQAIgLAEgPQADgOAAgPQAAgOgDgOQgEgPgIgLQgIgMgMgHQgMgGgRgBQgQABgMAHg");
	this.shape_46.setTransform(180.9,53.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("Ag1BeIAAi6IArAAQAOAAAOAEQANAEAIAKQAJAKAAASQAAARgKAKQgJALgQAFQAMABAJAGQAJAFAFAJQAGAKAAAMQAAAVgLAMQgLALgQAFQgQAFgRAAgAgjBOIATAAQANAAALgCQAMgEAIgIQAIgHAAgPQAAgRgJgIQgIgIgNgDQgMgDgNABIgQAAgAgjgKIAVAAQAMAAAJgDQALgDAGgIQAHgIgBgOQAAgLgFgHQgGgHgKgDQgJgDgJAAIgaAAg");
	this.shape_47.setTransform(164.2,53.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgtBeIAAi6IBYAAIAAAPIhHAAIAABEIBDAAIAAAOIhDAAIAABJIBKAAIAAAQg");
	this.shape_48.setTransform(143,53.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAsBeIAAhSIgMADIgPACIgPABIgVgCQgLgBgJgGQgJgFgFgLQgGgKAAgUIAAg3IARAAIAAA3QgBAWALAKQALAJAYgBIAQgBIAPgCIAKgCIAAhaIAQAAIAAC6g");
	this.shape_49.setTransform(127.5,53.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("ABDBeIgUg0IheAAIgVA0IgQAAIBMi6IARAAIBMC6gAApAbIgphnIgpBnIBSAAg");
	this.shape_50.setTransform(111,53.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("ABJB2IAAgxIiRAAIAAAxIgQAAIAAhAIAPAAQARgWAHgeQAHgdAAgiIAAg4IBqAAIAACrIAZAAIAABAgAgagzQAAAfgGAaQgHAbgOAVIBkAAIAAibIhJAAg");
	this.shape_51.setTransform(93,56.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAwBeIAAhZIhfAAIAABZIgRAAIAAi6IARAAIAABSIBfAAIAAhSIARAAIAAC6g");
	this.shape_52.setTransform(74.9,53.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("ABDBeIgUg0IheAAIgVA0IgQAAIBMi6IARAAIBMC6gAApAbIgphnIgpBnIBSAAg");
	this.shape_53.setTransform(57.3,53.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgXBUQgVgMgMgWQgMgVAAgdQAAgbAMgVQANgWAVgMQAWgNAcAAQAKAAALACQAKABAJAEIgBARQgJgFgLgCQgKgCgKAAQgYABgRAKQgRALgKASQgJASAAAWQAAAYAJASQAKASASAKQARAKAZABQAKAAAKgCQAJgCAKgEIABARQgJADgLABQgLACgKAAQgdAAgWgMg");
	this.shape_54.setTransform(40.7,53.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgkBZQgPgIgKgOQgKgNgFgRQgFgRAAgUQAAgSAFgRQAFgRALgOQAKgNAPgIQAQgIATAAQAWAAAPAIQAPAHAKAOQAKANAFARQAFASAAASQAAATgFARQgFARgKAOQgKAOgQAHQgPAIgVAAQgUAAgQgHgAgchIQgMAGgIAMQgHAMgEAOQgEAOAAAOQAAAPAEAOQAEAOAIAMQAHALAMAHQAMAHAQABQARgBAMgGQAMgHAIgMQAIgLAEgPQADgOAAgPQAAgOgDgOQgEgPgIgLQgIgMgMgHQgMgGgRgBQgQABgMAHg");
	this.shape_55.setTransform(290.9,18);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAwBeIAAhZIhfAAIAABZIgRAAIAAi7IARAAIAABTIBfAAIAAhTIARAAIAAC7g");
	this.shape_56.setTransform(272.3,18);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgyBeIAAi7IArAAQAQAAAOAHQANAFAHAMQAIALAAASQAAATgJALQgIALgOAFQgOAGgOAAIgZAAIAABSgAghgCIAOAAQAOAAALgCQANgDAHgIQAHgIABgRQAAgSgLgJQgLgKgQAAIgdAAg");
	this.shape_57.setTransform(257.5,18);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgkBZQgPgIgKgOQgKgNgFgRQgFgRAAgUQAAgSAFgRQAFgRALgOQAKgNAPgIQAQgIATAAQAWAAAPAIQAPAHAKAOQAKANAFARQAFASAAASQAAATgFARQgFARgKAOQgKAOgQAHQgPAIgVAAQgUAAgQgHgAgchIQgMAGgIAMQgHAMgEAOQgEAOAAAOQAAAPAEAOQAEAOAIAMQAHALAMAHQAMAHAQABQARgBAMgGQAMgHAIgMQAIgLAEgPQADgOAAgPQAAgOgDgOQgEgPgIgLQgIgMgMgHQgMgGgRgBQgQABgMAHg");
	this.shape_58.setTransform(240.2,18);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("Ag0BeIAAi7IAqAAQAOABAOAEQANAEAIAKQAJAKAAASQAAARgKAKQgJAMgQADQALACAKAGQAJAFAFAKQAGAJAAAMQAAAVgLAMQgLAMgQAEQgQAEgRABgAgjBOIATAAQANAAALgCQAMgEAIgHQAIgJAAgPQAAgPgIgJQgJgJgNgCQgMgDgNABIgQAAgAgjgKIAVAAQAMAAAJgDQALgDAGgIQAGgIAAgOQAAgLgFgIQgGgGgJgDQgKgDgJAAIgaAAg");
	this.shape_59.setTransform(223.5,18);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgkBZQgPgIgKgOQgKgNgFgRQgFgRAAgUQAAgSAFgRQAFgRALgOQAKgNAPgIQAQgIATAAQAWAAAPAIQAPAHAKAOQAKANAFARQAFASAAASQAAATgFARQgFARgKAOQgKAOgQAHQgPAIgVAAQgUAAgQgHgAgchIQgMAGgIAMQgHAMgEAOQgEAOAAAOQAAAPAEAOQAEAOAIAMQAHALAMAHQAMAHAQABQARgBAMgGQAMgHAIgMQAIgLAEgPQADgOAAgPQAAgOgDgOQgEgPgIgLQgIgMgMgHQgMgGgRgBQgQABgMAHg");
	this.shape_60.setTransform(206,18);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AguBeIAAi7IBcAAIAAAQIhKAAIAACrg");
	this.shape_61.setTransform(191.4,18);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("ABDBeIgUg1IheAAIgVA1IgQAAIBMi7IARAAIBMC7gAApAbIgphnIgpBnIBSAAg");
	this.shape_62.setTransform(168.3,18);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgIBeIAAirIg2AAIAAgQIB9AAIAAAQIg3AAIAACrg");
	this.shape_63.setTransform(153.1,18);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("ABDBeIgUg1IheAAIgVA1IgQAAIBMi7IARAAIBMC7gAApAbIgphnIgpBnIBSAAg");
	this.shape_64.setTransform(137.8,18);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AguBeIAAi7IBdAAIAAAQIhMAAIAACrg");
	this.shape_65.setTransform(124.3,18);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgvBdIgKgBIADgPIAFACIAJAAQAHABAFgFQAFgEAFgIIALgVIhGiIIATAAIA7B3IA7h3IASAAIhICOIgMAYQgGAKgIAGQgIAHgKgBIgJgBg");
	this.shape_66.setTransform(109.2,18.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AhEBdQgFAAgEgCIABgOIAIACIAIAAQAPABAHgSQAIgRACgnQACglAAg/IBoAAIAAC7IgRAAIAAirIhGAAIgBBLQgCAggFAWQgEAVgKAMQgKALgSgBIgJgBg");
	this.shape_67.setTransform(91,18.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgXBUQgVgMgMgWQgMgVAAgdQAAgbAMgVQANgWAVgMQAWgNAcAAQAKAAALACQAKABAJAEIgBARQgJgFgLgCQgKgCgKAAQgYABgRAKQgRALgKASQgJASAAAWQAAAYAJASQAKASASAKQARAKAZABQAKAAAKgCQAJgCAKgEIABARQgJADgLABQgLACgKAAQgdAAgWgMg");
	this.shape_68.setTransform(74.9,18);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgvBdIgKgBIACgPIAGACIAJAAQAHABAFgFQAFgEAFgIIALgVIhGiIIATAAIA7B3IA7h3IASAAIhICOIgMAYQgGAKgIAGQgIAHgKgBIgJgBg");
	this.shape_69.setTransform(58.5,18.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgkBZQgPgIgKgOQgKgNgFgRQgFgRAAgUQAAgSAFgRQAFgRALgOQAKgNAPgIQAQgIATAAQAWAAAPAIQAPAHAKAOQAKANAFARQAFASAAASQAAATgFARQgFARgKAOQgKAOgQAHQgPAIgVAAQgUAAgQgHgAgchIQgMAGgIAMQgHAMgEAOQgEAOAAAOQAAAPAEAOQAEAOAIAMQAHALAMAHQAMAHAQABQARgBAMgGQAMgHAIgMQAIgLAEgPQADgOAAgPQAAgOgDgOQgEgPgIgLQgIgMgMgHQgMgGgRgBQgQABgMAHg");
	this.shape_70.setTransform(33.4,18);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgXBUQgVgMgMgWQgMgVAAgdQAAgbAMgVQANgWAVgMQAWgNAcAAQAKAAALACQAKABAJAEIgBARQgJgFgLgCQgKgCgKAAQgYABgRAKQgRALgKASQgJASAAAWQAAAYAJASQAKASASAKQARAKAZABQAKAAAKgCQAJgCAKgEIABARQgJADgLABQgLACgKAAQgdAAgWgMg");
	this.shape_71.setTransform(15.8,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,308.1,181);


(lib.mail_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmmMoIkIkJIEIkIQAQgQAXAAQAXAAAQAQQAQAQABAXQgBAXgQAQIiBCBIHgAAIAAm4In4AAQgWAAgLgMQgLgNgBgVIAAr7QABgXALgRQAMgUAVAAIR1AAQAUAAAMAPQAMAOAAAWIAAMEQAAAVgOANQgNAMgWAAIk3AAQgOABgPgGQgcgLAAghQAAghAcgMQAPgGAOABIEOAAIAApbIoJGlImjk0QgRgMgDgVQgCgVAMgRQAMgRAWgDQAUgDARAMIFeEFIGrldIu9AAIAAKUIISAAIAcAEQAbALABAfIACAHIAAIfQABAYgUATQgTAUgXAAIobAAICBB/QAQAQABAVQgBAVgQARQgQAQgXAAQgYAAgPgQg");
	this.shape.setTransform(68.8,82.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mail_mc, new cjs.Rectangle(0,0,137.5,164.8), null);


(lib.laptop_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZC6QgMgLAAgPIAAk/QAAgPAMgLQAKgLAPAAQAQAAAKALQAMALAAAPIAAE/QAAAPgMALQgKALgQAAQgPAAgKgLg");
	this.shape.setTransform(245.7,86.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWAsQgIgKgBgPIAAgmQABgOAIgKQAJgKANAAQAOAAAJAKQAIAKAAAOIAAAmQAAAPgIAKQgJAKgOAAQgNAAgJgKg");
	this.shape_1.setTransform(245.7,117.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhSCQQgpgTghghQgfgggRglQgRglAAgjQABg3ADg5IBAAAIgEBxQAAAXAMAZQAMAZAWAWQAZAYAdAOQAdANAcAAQAdAAAdgNQAdgNAYgZQAWgWANgZQAMgaAAgWIgEhxIBAAAIADBvQABAkgRAlQgRAkgfAgQgiAigpATQgpASgpAAQgpAAgpgSg");
	this.shape_2.setTransform(246.6,148.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ACYCTQgBAAAAgbIgBAAIgBgkQAAguglgiQgQgNgcgLQgYgKgTgCIg8AAQgOACgYAKQgVAIgTAQQgjAhgBAvIgBA/IhAAAIABhAQAChLA3gyQAcgZAggNQAjgNAUgCIACAAIAAgxIA+gCIAAAyIAGABQAcACAiANQApAQAXAWQAbAZAPAgQAPAgABAkIACBAg");
	this.shape_3.setTransform(246.5,112.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag6AkIAAhHIB1AAIAABHg");
	this.shape_4.setTransform(109.7,130.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag6AkIAAhHIB1AAIAABHg");
	this.shape_5.setTransform(179.1,130.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag6AkIAAhHIB1AAIAABHg");
	this.shape_6.setTransform(161.7,130.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag6AkIAAhHIB1AAIAABHg");
	this.shape_7.setTransform(144.4,130.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag6AkIAAhHIB1AAIAABHg");
	this.shape_8.setTransform(127,130.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag6AkIAAhHIB1AAIAABHg");
	this.shape_9.setTransform(40.3,130.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag6AkIAAhHIB1AAIAABHg");
	this.shape_10.setTransform(57.6,130.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag6AkIAAhHIB1AAIAABHg");
	this.shape_11.setTransform(75,130.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag6AkIAAhHIB1AAIAABHg");
	this.shape_12.setTransform(92.3,130.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag7AkIAAhHIB3AAIAABHg");
	this.shape_13.setTransform(118.8,116.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag7AkIAAhHIB3AAIAABHg");
	this.shape_14.setTransform(171.4,116.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag6AkIAAhHIB1AAIAABHg");
	this.shape_15.setTransform(153.8,116.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag6AkIAAhHIB1AAIAABHg");
	this.shape_16.setTransform(136.3,116.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag6AkIAAhHIB2AAIAABHg");
	this.shape_17.setTransform(48.8,116.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag7AkIAAhHIB2AAIAABHg");
	this.shape_18.setTransform(66.3,116.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag6AkIAAhHIB2AAIAABHg");
	this.shape_19.setTransform(83.8,116.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag7AkIAAhHIB2AAIAABHg");
	this.shape_20.setTransform(101.3,116.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ah9FHQgOgFgHgOQgGgPAGgOIDfpHQAGgPAOgGQAOgHAPAGQAOAFAHAPQAGAOgGAOIjfJIQgFALgJAGQgKAHgLAAQgGAAgIgDg");
	this.shape_21.setTransform(15,131.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ak4AmQgPAAgMgLQgLgLAAgQQAAgOALgMQAMgLAPAAIJxAAQAQAAALALQALAMAAAOQAAAQgLALQgMALgPAAg");
	this.shape_22.setTransform(106.1,147.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Av+AmQgQAAgLgMQgLgLAAgPQAAgOALgMQALgKAQgBIf9AAQAQABALAKQALAMAAAOQAAAPgLALQgLAMgQAAg");
	this.shape_23.setTransform(106.1,160.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AqzAmQgPAAgLgMQgLgLAAgPQAAgOALgMQALgKAPgBIVmAAQAQABALAKQALAMAAAOQAAAPgLALQgLAMgQAAg");
	this.shape_24.setTransform(114.4,102.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AglIFIAAwKIBLAAIAAQKg");
	this.shape_25.setTransform(183.5,51.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("As3AmIAAhLIZvAAIAABLg");
	this.shape_26.setTransform(104.9,3.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgaIHQgLgLABgQIAAvXQgBgQALgLQAMgLAOAAQAPAAALALQALALAAAQIAAPXQAAAQgLALQgKALgQAAQgOAAgMgLg");
	this.shape_27.setTransform(26.2,53);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.laptop_mc, new cjs.Rectangle(0,0,268.7,164.5), null);


(lib.hitArea_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A5nZUMAAAgyoMAzPAAAMAAAAyog");
	this.shape.setTransform(164,162.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hitArea_mc, new cjs.Rectangle(0,0,328.1,324.1), null);


(lib.hand_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACuDZQAUgUANgVQAuhIgIhWQgJhWg+g+QgbgagfgRIgGgDQg/gghHAIQhHAHg3AsQgNAJgJAKQgjAjgTAtQgSAtAAAwQAAAxASAtQATAtAjAjIgjAjQgqgqgWg2QgXg2AAg7QAAg6AXg2QAWg2AqgpQAPgPALgJQBDg0BVgJQBVgJBMAmIAHAEQApAWAdAeQAkAkAWAuQAWAuAFAxQAFAygMAxQgMAxgbAqQgSAbgVAWg");
	this.shape.setTransform(46.5,42.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AEmFqQAggfAYgmQAmg6AQhGQARhEgHhHQgHhGgfhBQgfhBgzgzQgsgsg2gdIgLgGQhrg1h4AMQh4ANheBKQgVARgQAQQh6B6AACrQAACtB6B5IgjAjQiIiIAAjBQAAjACIiIQAUgTAVgSQBqhTCGgNQCGgOB4A7IAMAGQA9AhAxAxQA5A5AiBJQAjBIAIBPQAIBPgTBNQgSBNgrBCQgbAqgjAjg");
	this.shape_1.setTransform(46.5,39.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(180));

	// Layer 8
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AFsIBQADgYAAgVIABl8QAAgjgPgQQgNgMgXAAQg1AAgEBDIAAAIIgwAAIAAgJQgBgpgRgRQgMgMgXAAQg1AAgDBCIAAANIgxAAIAAgNQgBgrgVgPQgMgIgUAAQgYAAgNAKQgNAKgDAWIAAAlIgxAAIAAgDQgDgSADgTIAAlOQAAgogSgQQgMgMgZAAQgZAAgMANQgQAPAAAnIAAIkIgxgBIAAgJQgBgsgLgdQgOgogcAAQgaAAgNANQgQAQABAlIAAABQAABIBDDgIgzAAQhCjcAAhMIAAAAQAAg5AegfQAcgcAuAAQAfAAAXATIAAmLQAAgeAHgWQgagiADgrQACgsAfgfIALgJQAagUAggEQAigDAeAOIADACQAOAIANAMQAcAdAFAoQAEApgWAiIAAAAQALAZAAAkIAAECQAXgLAeAAQAzAAAcAjQAdgjAzAAQArAAAbAaIAJAKQAeggAxAAQAsAAAbAZQAeAfAAA3IgBF8QAAATgEAagAinnPQgUACgOAMIgGAFQgPAPgEAUQgDATAIATQAagUAmAAQAiAAAZAQQAGgSgEgTQgEgSgNgOQgJgIgHgEIgCgBQgOgHgPAAIgHABg");
	this.shape_2.setTransform(62.7,86.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(13).to({scaleX:0.81,scaleY:0.81,x:58.1},0).wait(6).to({scaleX:1,scaleY:1,x:62.7},0).wait(161));

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.749)").s().p("ACuDZQAUgUANgVQAuhIgIhWQgJhWg+g+QgbgagfgRIgGgDQg/gghHAIQhHAHg3AsQgNAJgJAKQgjAjgTAtQgSAtAAAwQAAAxASAtQATAtAjAjIgjAjQgqgqgWg2QgXg2AAg7QAAg6AXg2QAWg2AqgpQAPgPALgJQBDg0BVgJQBVgJBMAmIAHAEQApAWAdAeQAkAkAWAuQAWAuAFAxQAFAygMAxQgMAxgbAqQgSAbgVAWg");
	this.shape_3.setTransform(46.5,42.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.749)").s().p("AEmFqQAggfAYgmQAmg6AQhGQARhEgHhHQgHhGgfhBQgfhBgzgzQgsgsg2gdIgLgGQhrg1h4AMQh4ANheBKQgVARgQAQQh6B6AACrQAACtB6B5IgjAjQiIiIAAjBQAAjACIiIQAUgTAVgSQBqhTCGgNQCGgOB4A7IAMAGQA9AhAxAxQA5A5AiBJQAjBIAIBPQAIBPgTBNQgSBNgrBCQgbAqgjAjg");
	this.shape_4.setTransform(46.5,39.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.749)").s().p("AEnFrQAggfAYgmQAmg7ARhFQAQhFgHhHQgHhGgfhCQgfhBgzgzQgsgsg3gdIgKgGQhsg1h4AMQh5AMheBLQgVARgQAQQh7B6AACsQAACtB7B6IgjAkQiJiJAAjCQAAjACJiJQAUgTAVgSQBqhTCHgOQCGgOB4A8IANAGQA9AgAxAyQA5A5AjBJQAiBJAIBPQAIBPgSBOQgTBNgqBCQgcAqgjAkgACuDyQAUgTANgVQAvhIgJhXQgIhWg/g+QgbgagfgRIgGgDQhAghhGAIQhIAIg3ArQgNAKgJAKQgjAjgTAtQgTAsAAAxQAAAyATAtQATAtAjAiIgjAkQgqgqgXg2QgWg2AAg8QAAg7AWg1QAXg2AqgqQAPgPALgIQBDg1BWgJQBUgJBNAmQAwAaAdAeQAkAkAWAuQAWAvAFAxQAFAygMAyQgLAxgbApQgSAcgWAWg");
	this.shape_5.setTransform(46.5,39.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.745)").s().p("AEqFvQAgggAZgmQAmg7ARhGQARhGgHhHQgHhHgghDQgfhCg0g0Qgtgsg2geIgLgFQhtg2h5AMQh7ANhfBLQgVARgQAQQh8B8AACuQAACvB8B7IgkAkQiKiKAAjEQAAjDCKiKQAUgTAWgSQBrhUCJgOQCHgOB6A8IAMAGQA+AhAxAyQA6A6AjBKQAjBJAIBQQAJBQgTBPQgTBOgrBDQgcAqgkAkgACwD1QAUgUANgVQAvhJgIhXQgJhXg/g/QgbgbgggRIgGgDQhAgghIAHQhIAIg4AsQgNAKgJAKQgkAjgSAuQgTAsAAAyQAAAyATAuQASAtAkAjIgkAkQgqgqgXg3QgWg3AAg8QAAg8AWg1QAXg3AqgqQAPgQAMgIQBEg1BWgJQBWgJBNAmQAxAaAdAfQAlAkAWAvQAWAvAFAyQAGAygNAyQgLAygcAqQgSAcgWAWg");
	this.shape_6.setTransform(46.5,39.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.737)").s().p("AEwF2QAgghAZgnQAng8ARhIQARhGgHhJQgHhIgghEQgghDg0g1Qgugtg4geIgLgGQhvg3h7ANQh8ANhiBMQgVASgRAQQh+B+AACxQAACyB+B+IgkAkQiMiNAAjHQAAjGCMiMQAVgVAWgSQBthVCLgOQCKgPB7A+IANAGQA/AhAyA0QA7A6AkBLQAjBLAJBSQAIBRgTBQQgTBPgsBEQgdAsgkAkgACzD5QAVgUANgWQAwhKgJhZQgJhYhAhAQgbgbghgSIgGgDQhBghhJAIQhJAIg6AsQgNAKgJALQgkAkgUAuQgTAuAAAyQAAAzATAuQAUAvAkAjIgkAkQgrgqgYg4QgXg4AAg9QAAg9AXg2QAYg4ArgrQAPgQAMgIQBFg2BYgJQBXgKBPAnQAxAbAeAfQAlAlAXAwQAXAvAFAzQAFA0gNAyQgLAzgcArQgTAcgWAWg");
	this.shape_7.setTransform(46.5,39.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.729)").s().p("AE3F/QAhgiAagnQAog+ARhKQAShIgIhKQgHhLghhFQgghFg2g1Qgvgug5ggIgLgFQhyg4h+AMQiAANhjBPQgWASgRARQiBCBAAC1QAAC2CBCBIglAlQiQiQAAjMQAAjLCQiQQAVgVAXgSQBvhYCPgOQCNgPB/A/IAMAGQBBAjA0A0QA8A8AkBNQAlBNAIBTQAJBTgUBSQgTBSgtBFQgdAtglAlgAC4D/QAUgUAOgWQAxhNgJhbQgJhahBhCQgdgcghgSIgGgDQhDgihLAIQhLAIg6AuQgOAKgKALQglAlgTAwQgUAuAAA0QAAA0AUAvQATAwAlAkIglAlQgsgrgXg6QgYg5AAg+QAAg+AYg5QAXg5AsgsQAQgPAMgJQBHg4BagJQBZgJBRAnQAzAcAeAfQAmAnAYAwQAXAxAFA0QAFA1gMA0QgMA0gdAsQgTAdgXAWg");
	this.shape_8.setTransform(46.5,39.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.718)").s().p("AFBGLQAigjAagoQAqhAARhMQAShLgHhMQgIhNgihHQghhHg3g3Qgxgwg7ggIgLgGQh1g6iDANQiDAOhmBRQgXASgSASQiECEAAC7QAAC8CECFIgmAmQiUiUAAjTQAAjRCUiUQAWgVAYgTQByhbCTgPQCSgPCCBBIANAHQBDAjA1A2QA+A9AmBQQAlBPAJBWQAJBWgUBUQgUBUgvBIQgeAugmAmgAC9EHQAWgVAOgXQAyhOgJheQgJhehEhDQgdgdgigSIgHgDQhFgjhMAIQhOAIg8AwQgOAKgKALQgmAmgVAxQgUAwAAA1QAAA2AUAxQAVAxAmAlIgmAnQgugugYg7QgZg6AAhBQAAhAAZg6QAYg7AugtQAQgQAMgJQBJg6BdgJQBcgKBTApQA0AdAgAgQAnAnAYAzQAYAyAGA2QAFA2gNA2QgNA1gdAtQgUAegXAYg");
	this.shape_9.setTransform(46.5,39.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.702)").s().p("AFMGZQAkgkAbgqQArhCAShOQAThOgIhPQgIhQgjhJQgjhKg5g5Qgygyg9ghIgMgGQh5g8iHAOQiIAOhqBTQgYAUgSASQiKCJAADCQAADDCKCJIgoAnQiZiZAAjaQAAjZCZiZQAXgWAYgUQB3heCYgPQCXgQCHBDIAOAHQBFAlA3A4QBBA/AnBTQAmBSAKBZQAJBZgVBXQgVBXgwBLQgfAvgoAngADEERQAWgWAPgYQA0hRgJhhQgKhhhGhGQgegegkgTIgHgDQhHgkhPAIQhRAIg+AyQgPAKgKAMQgoAngUAzQgVAyAAA3QAAA3AVAzQAUAzAoAnIgoAnQgugugag9QgZg9AAhDQAAhDAZg8QAag8AugvQARgRANgKQBLg7BhgKQBfgKBWAqQA2AeAhAiQApAoAZA0QAZA0AFA4QAGA5gOA3QgNA3geAvQgVAfgYAYg");
	this.shape_10.setTransform(46.5,39.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.686)").s().p("AFaGpQAlglAcgsQAthEAThSQAUhRgJhTQgIhSgkhNQglhMg7g8Qg0gzhAgjIgMgHQh/g+iMAOQiOAPhuBXQgZAUgTATQiPCPAADKQAADLCPCOIgpAqQigigAAjjQAAjiCgigQAYgXAZgUQB8hiCegQQCdgQCNBGIAOAHQBJAmA5A6QBDBDAoBVQApBWAJBdQAJBcgVBbQgWBbgyBNQggAxgpAqgADMEcQAXgXAQgZQA2hUgKhmQgKhlhJhJQgfgeglgUIgHgEQhLglhTAIQhTAJhBAzQgQAMgKALQgpApgWA1QgWA0AAA6QAAA5AWA1QAWA1ApApIgpApQgxgxgbg/QgahAAAhFQAAhFAag/QAbg/AxgxQARgSAOgKQBOg+BlgKQBjgKBZAsQA5AfAiAjQAqAqAaA2QAaA2AGA7QAGA6gOA6QgOA6ggAwQgVAhgZAZg");
	this.shape_11.setTransform(46.5,39);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.667)").s().p("AFqG9QAngmAdguQAvhIAUhWQAUhUgIhXQgJhWgmhQQgmhQg+g/Qg3g2hCgkIgNgHQiEhBiTAPQiVAPhzBbQgaAVgUAUQiWCWAADTQAADUCWCVIgrArQininAAjtQAAjsCninQAZgYAagWQCChmClgRQClgRCTBJIAPAIQBMAoA7A9QBGBFArBaQAqBZAKBhQAKBhgXBfQgXBfg0BRQgiAzgrArgADWEpQAYgYAQgaQA5hYgLhqQgKhqhMhMQghgggngVIgIgDQhNgohXAJQhXAKhEA1QgQAMgLAMQgrArgXA3QgXA3AAA8QAAA8AXA3QAXA4ArAqIgrArQgzgzgchCQgchDAAhIQAAhJAchBQAchCAzgzQASgTAOgKQBShBBpgKQBogLBdAuQA7AgAkAlQAsAsAbA4QAbA5AHA9QAGA+gPA8QgOA8ghAzQgWAigbAag");
	this.shape_12.setTransform(46.5,38.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.643)").s().p("AF8HTQAogpAfgwQAxhLAWhaQAVhZgJhaQgJhbgohVQgohThBhCQg6g4hFgmIgOgHQiLhFiaAQQibAQh6BfQgbAWgUAVQieCdAADeQAADeCeCdIguAtQivivAAj5QAAj4CviwQAagZAcgWQCIhsCugRQCsgSCbBNIAPAIQBQApA+BAQBKBJAsBeQAtBeAKBmQALBlgYBkQgYBkg3BVQgkA2gtAtgADgE4QAagaAQgbQA8hdgLhvQgLhvhQhQQgighgpgWIgIgEQhRgphbAJQhcAKhIA4QgQAMgMANQgtAtgYA6QgYA5AABAQAAA/AYA6QAYA6AtAtIgtAtQg2g2gdhFQgdhGAAhMQAAhMAdhFQAdhGA2g1QATgUAPgLQBWhDBugLQBtgMBjAwQA9AiAmAnQAuAuAdA8QAcA7AGBAQAHBBgQA/QgOA/gjA2QgXAjgcAcg");
	this.shape_13.setTransform(46.5,38.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.62)").s().p("AGQHsQArgrAggzQA0hQAWheQAXhdgKhgQgJhfgqhZQgrhYhEhGQg9g7hJgoIgOgHQiShIijAQQijARiABkQgdAYgVAVQimCmAADpQAADqCmCmIgwAvQi5i5AAkGQAAkFC5i5QAbgaAdgYQCQhxC2gSQC2gTCjBRIAQAIQBUAsBCBDQBNBNAvBjQAvBjALBrQALBrgaBpQgZBpg5BZQgmA6gvAvgADsFIQAbgbARgcQA/higLh1QgMh1hUhUQgkgjgrgYIgIgEQhWgrhgAKQhhAKhLA7QgSANgMAOQgvAvgZA+QgaA8AABCQAABDAaA9QAZA9AvAvIgvAvQg5g4gehJQgfhKAAhQQAAhQAfhIQAehKA5g4QAUgUAQgMQBahHB0gMQBzgMBnAzQBCAjAnApQAxAxAeA+QAeA/AGBDQAHBEgQBDQgQBCgkA5QgZAlgdAdg");
	this.shape_14.setTransform(46.5,38.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.592)").s().p("AGmIHQAtgtAjg2QA2hTAYhkQAXhigKhlQgKhlgsheQgthdhIhJQhAg/hNgqIgPgIQiahMisARQitASiGBqQgfAZgXAXQiuCvAAD2QAAD3CuCuIgyAyQjDjCAAkVQAAkUDDjDQAdgcAfgZQCXh3DBgTQDAgUCsBVIARAJQBYAuBFBHQBSBRAyBpQAxBoAMByQALBwgbBvQgaBvg9BeQgnA8gzAygAD5FbQAcgcATgeQBDhogNh7QgMh8hZhYQgmgmgugYIgIgEQhaguhmAKQhmALhPA/QgTANgNAPQgyAygaBAQgbBAAABGQAABGAbBBQAaBAAyAyIgyAyQg7g8ghhNQgghOAAhUQAAhVAghMQAhhNA7g8QAWgVAQgNQBfhLB7gMQB5gNBtA2QBFAlAqArQAzA0AgBCQAfBBAIBIQAHBIgRBGQgRBGgnA8QgZAngfAfg");
	this.shape_15.setTransform(46.5,38);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.561)").s().p("AG+IlQAwgwAkg5QA6hZAZhpQAZhogLhrQgLhqgvhkQgvhihMhNQhEhChRgtIgQgIQijhRi2ASQi3ATiOBwQggAagYAZQi5C4AAEFQAAEFC5C5Ig1A1QjOjPAAkkQAAkkDOjOQAegdAhgbQCgh+DLgUQDLgVC2BaIASAJQBeAxBJBLQBXBWA0BvQA0BtAMB5QAMB3gcB1QgcB1hABkQgqBAg1A1gAEHFuQAegeATggQBHhtgNiCQgNiDheheQgpgngvgaIgKgFQhfgwhrALQhsAMhUBCQgUAOgOAPQg1A1gcBEQgcBEAABKQAABKAcBEQAcBFA1A0Ig1A1Qg+g/gjhSQgihSAAhZQAAhaAihQQAjhSA+g/QAXgXASgNQBkhPCCgNQCBgOBzA5QBJAnArAuQA3A2AhBGQAiBGAHBLQAIBMgSBKQgSBLgpA/QgbApghAhg");
	this.shape_16.setTransform(46.6,37.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.529)").s().p("AHYJFQAzgyAmg8QA9heAbhwQAahugLhxQgLhxgyhpQgyhohRhSQhHhGhXgwIgRgIQishVjBATQjBAUiXB3QgiAbgaAaQjDDEAAEUQAAEUDDDDIg4A5QjajbAAk1QAAk1DajbQAggfAjgcQCpiFDYgWQDXgWDBBfIATAKQBjA0BOBPQBbBbA3B1QA4B1ANB/QANB+geB8QgeB8hEBqQgsBDg4A5gAEXGEQAfgfAVgiQBLh0gOiKQgOiKhjhkQgsgqgygbIgKgFQhlgzhyAMQhyAMhZBGQgVAPgOAQQg4A4geBJQgeBHAABPQAABOAeBIQAeBJA4A3Ig4A4QhDhCgkhXQgkhXAAheQAAhfAkhWQAkhXBDhCQAYgYASgOQBrhUCJgOQCIgOB7A8QBNAqAuAwQA6A6AjBJQAkBKAIBQQAIBRgUBOQgSBPgsBDQgcAsgjAig");
	this.shape_17.setTransform(46.6,37.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.494)").s().p("AH1JoQA1g1AphAQBBhkAch2QAch1gMh4QgMh4g1hvQg0hvhWhWQhMhLhcgyIgSgJQi3hajMAUQjNAVigB+QgkAdgbAcQjQDPAAElQAAElDQDPIg7A8QjojoAAlIQAAlIDojnQAhghAlgeQC0iNDlgXQDjgYDNBlIAUAKQBpA4BSBUQBhBgA7B8QA7B8AOCHQANCFgfCEQggCDhIBxQgvBHg8A8gAEoGbQAhghAWgkQBPh6gOiTQgPiThphpQgugtg2gdIgKgFQhrg2h5ANQh5AMheBKQgXARgPARQg7A7ggBNQgfBLAABUQAABTAfBNQAgBMA7A7Ig7A8QhHhHgmhcQgnhcAAhkQAAhlAnhbQAmhbBHhHQAZgaAUgOQBxhZCRgPQCRgPCBBAQBSAsAxAzQA+A9AlBPQAmBOAIBVQAJBVgVBTQgTBUgvBGQgeAvglAlg");
	this.shape_18.setTransform(46.6,37);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.455)").s().p("AITKOQA5g5ArhEQBFhpAeh+QAeh8gNh/QgNh/g3h3Qg4h1hchcQhQhPhig1IgSgKQjDhfjYAVQjaAXiqCFQgmAfgcAdQjdDcAAE3QAAE3DdDcIhAA/Qj1j2AAlcQAAlcD1j1QAkgjAnggQC/iWDzgYQDygaDYBsIAWALQBvA6BYBaQBnBmA+CEQA+CDAPCPQAOCOghCMQgiCLhMB3QgyBMg/A/gAE6G0QAjgjAXgmQBUiCgPibQgPichwhwQgxgvg5gfIgLgFQhyg6iAANQiAAOhkBOQgYARgQATQg/A/ghBRQgiBQAABZQAABYAiBRQAhBSA/A+Ig/A/QhLhLgphhQgohiAAhqQAAhrAohgQAphiBLhLQAbgbAVgPQB4hfCagPQCagQCJBDQBXAvA0A2QBBBBAoBTQAoBTAIBbQAKBagWBYQgVBZgxBLQggAxgnAng");
	this.shape_19.setTransform(46.6,36.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.416)").s().p("AI0K2QA8g8AuhIQBJhwAgiFQAfiEgNiHQgNiHg8h+Qg7h8hhhiQhVhThog5IgUgKQjOhmjmAXQjnAYi0COQgoAggfAfQjqDqAAFKQAAFKDqDpIhDBDQkFkEAAlyQAAlxEFkFQAmglApgiQDLifEBgaQEBgbDmByIAXAMQB2A+BdBfQBtBsBDCMQBCCLAPCZQAPCWgjCUQgkCUhRB/Qg1BQhDBDgAFNHPQAmglAYgpQBZiKgQikQgQimh3h3Qg0gyg8ggIgMgGQh4g9iIAOQiJAOhqBUQgZASgRATQhDBDgkBWQgjBWAABeQAABeAjBWQAkBWBDBCIhDBDQhQhPgrhoQgrhnAAhxQAAhyArhmQArhnBQhQQAdgdAWgQQB/hlCkgQQCjgRCSBHQBcAyA3A6QBFBFAqBYQArBYAJBgQAKBggXBeQgWBeg0BPQgjA1gpApg");
	this.shape_20.setTransform(46.6,36.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.373)").s().p("AJXLhQBAhAAxhNQBNh3AiiNQAhiMgOiPQgOiQg/iFQg/iEhnhoQhbhYhug8IgVgLQjbhsj0AYQj1AZi/CXQgrAjghAgQj4D4AAFfQAAFeD4D4IhHBHQkVkVAAmIQAAmIEVkVQApgoArgjQDXipESgcQERgcD0B5IAYAMQB9BCBjBlQB0BzBGCVQBGCTARCiQAQCggmCdQglCdhXCGQg4BWhHBHgAFiHrQAngnAbgrQBeiSgRivQgRiwh+h/Qg3g1hAgiIgNgGQiAhBiQAPQiRAPhxBZQgaATgTAUQhHBIglBbQgmBbAABkQAABjAmBcQAlBbBHBGIhHBIQhUhVguhtQguhuAAh4QAAh5AuhtQAuhtBUhVQAfgeAXgSQCIhqCtgSQCtgSCbBMQBiA1A7A9QBJBJAtBeQAtBeAKBlQAKBmgYBkQgYBkg3BUQgkA4gsAsg");
	this.shape_21.setTransform(46.6,35.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.329)").s().p("AJ7MOQBEhEA0hRQBSh+AkiWQAkiUgQiZQgPiYhCiNQhDiNhuhuQhgheh0hAIgXgMQjohykEAaQkEAbjLCgQguAlgiAiQkIEIAAFzQAAF1EIEGIhMBMQklkmAAmhQAAmgElkmQArgqAvglQDki0EigdQEigeEDCAIAaANQCFBGBpBrQB7B6BLCeQBKCdASCsQARCpgoCoQgoCmhcCPQg8BahLBMgAF3IKQAqgqAcguQBlibgTi6QgSi7iGiGQg6g4hEglIgNgGQiIhFiaAQQiZAQh4BeQgcAVgUAVQhLBMgoBhQgoBgAABqQAABqAoBhQAoBhBLBLIhLBMQhahagxh1Qgwh0AAiAQAAh/Awh0QAxh0BahaQAgghAZgSQCQhxC4gTQC4gTCkBRQBoA4A+BBQBOBOAwBjQAwBjAKBsQALBsgaBqQgZBqg6BaQgnA7gvAvg");
	this.shape_22.setTransform(46.6,35.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.278)").s().p("AKiM+QBJhIA3hWQBXiGAmifQAliegQihQgQiihHiWQhHiVh0h1Qhmhkh7hEIgYgMQj3h6kTAcQkVAcjXCqQgwAnglAlQkYEYAAGKQAAGLEYEXIhQBQQk4k3AAm7QAAm6E4k3QAugtAxgoQDyi/E0gfQE0gfETCIIAbAOQCNBKBwByQCCCBBPCoQBPCmATC2QASC0gqCyQgrCxhhCXQg/BghQBQgAGOIqQAtgtAegwQBqilgTjFQgUjHiOiOQg+g8hIgnIgOgGQiQhKijARQijASh/BjQgeAWgVAXQhQBQgqBoQgrBmAABwQAABwArBnQAqBoBQBPIhQBQQhfhfg0h8Qgzh8AAiHQAAiHAzh7QA0h8BfhfQAigjAbgTQCYh4DEgUQDDgUCvBVQBuA8BCBFQBTBTAyBpQAzBpALBzQAMBzgcBwQgaBwg+BgQgqA/gxAxg");
	this.shape_23.setTransform(46.6,34.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.227)").s().p("ALLNxQBNhNA6hbQBdiOAoipQAoingRisQgRirhLigQhLieh8h8QhshqiDhHIgZgOQkGiBkkAdQklAfjlC0QgzApgnAnQkpEpAAGjQAAGjEpEoIhVBVQlLlLAAnVQAAnVFLlLQAwgvA1grQEAjKFIghQFGghEkCQIAdAPQCWBPB2B4QCKCKBUCyQBUCwAUDBQATC/gtC9QgtC7hnChQhDBmhVBVgAGmJMQAwgwAfgzQByivgVjRQgVjTiXiXQhBg/hNgpIgOgIQiahNitASQisASiHBqQggAXgWAYQhVBVgtBuQgtBsAAB4QAAB3AtBtQAtBuBVBUIhVBVQhlhlg3iDQg2iEAAiPQAAiQA2iCQA3iDBlhmQAlgkAbgVQCih/DQgVQDPgWC5BbQB1BABGBIQBYBYA2BwQA1BwAMB6QAMB5gdB3QgcB4hCBlQgrBCg1A1g");
	this.shape_24.setTransform(46.6,34.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.176)").s().p("AL3OmQBRhRA+hhQBiiXArizQAqixgSi2QgSi2hQipQhQioiCiDQhzhwiLhNIgbgOQkWiIk1AeQk3AhjzC/Qg2AsgpApQk7E7AAG8QAAG8E7E6IhaBaQlflfAAnxQAAnyFfleQAzgyA4gtQEQjXFbgjQFagkE1CaIAfAPQCfBUB9CAQCTCRBZC9QBZC7AVDNQAUDLgwDHQgvDHhuCqQhHBthaBagAHAJvQAzgyAhg3QB4i5gWjeQgWjfigigQhFhEhSgrIgPgIQijhTi3AUQi3ATiQBwQghAZgXAaQhbBagvB0QgwBzAAB/QAAB+AwB0QAvB0BbBZIhbBaQhrhrg6iLQg6iLAAiYQAAiZA6iKQA6iLBrhsQAngmAegWQCriHDdgWQDbgXDFBgQB7BDBLBNQBdBeA5B2QA5B3AMCBQANCBgfB+QgdB/hGBrQgvBHg3A3g");
	this.shape_25.setTransform(46.6,33.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.122)").s().p("AMkPeQBWhWBChnQBoigAti+QAti7gTjBQgTjBhVizQhViyiKiLQh5h3iUhRIgdgPQkmiRlIAhQlJAikBDLQg6AugrAsQlOFNAAHXQAAHXFOFNIhgBfQl0lzAAoQQAAoPF0lzQA2g2A7gvQEhjjFvglQFvgmFICiIAhARQCoBYCFCIQCbCaBfDIQBeDGAWDaQAWDWgzDUQgyDSh0C1QhMBzhfBfgAHbKUQA1g1Akg6QB/jEgXjsQgYjsipiqQhKhHhWguIgQgIQithYjCAVQjCAUiYB3QgkAagYAbQhgBggyB7QgzB6AACGQAACGAzB7QAyB7BgBeIhgBgQhxhxg+iUQg9iUAAihQAAihA9iTQA+iTBxhyQApgpAggXQC2iQDpgXQDpgYDQBmQCDBHBPBSQBjBiA8B+QA8B+ANCJQAOCJghCFQgfCGhKByQgxBLg7A7g");
	this.shape_26.setTransform(46.6,33);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.063)").s().p("ANUQYQBbhbBFhtQBuipAwjJQAwjGgUjNQgVjMhZi+Qhai8iSiTQiBh+ichWIgfgPQk3ialcAjQlcAkkRDWQg8AygvAuQlhFhAAHyQAAHzFhFgIhlBlQmKmJAAovQAAouGKmJQA6g5A+gyQExjxGGgnQGEgoFbCsIAjASQCyBeCNCPQClCjBjDUQBkDSAYDmQAXDkg2DfQg1Dgh7C+QhQB6hlBlgAH3K7QA5g4Alg9QCHjQgZj5QgZj7izizQhOhMhbgxIgSgJQi2hcjOAVQjOAWigB+QgmAbgaAeQhlBlg2CCQg1CBAACOQAACOA1CCQA2CCBlBkIhlBmQh4h4hBidQhCicAAirQAAirBCibQBBicB4h5QArgrAhgZQDBiXD3gZQD3gaDcBsQCLBMBUBWQBoBpBACFQBACFAOCRQAOCRgjCOQghCNhOB5Qg0BPg+A/g");
	this.shape_27.setTransform(46.6,32.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0)").s().p("ACuDZQAUgUANgVQAuhIgIhWQgJhWg+g+QgbgagfgRIgGgDQg/gghHAIQhHAHg3AsQgNAJgJAKQgjAjgTAtQgSAtAAAwQAAAxASAtQATAtAjAjIgjAjQgqgqgWg2QgXg2AAg7QAAg6AXg2QAWg2AqgpQAPgPALgJQBDg0BVgJQBVgJBMAmIAHAEQApAWAdAeQAkAkAWAuQAWAuAFAxQAFAygMAxQgMAxgbAqQgSAbgVAWg");
	this.shape_28.setTransform(46.6,39.3,3.063,3.063);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0)").s().p("AEmFqQAggfAYgmQAmg6AQhGQARhEgHhHQgHhGgfhBQgfhBgzgzQgsgsg2gdIgLgGQhrg1h4AMQh4ANheBKQgVARgQAQQh6B6AACrQAACtB6B5IgjAjQiIiIAAjBQAAjACIiIQAUgTAVgSQBqhTCGgNQCGgOB4A7IAMAGQA9AhAxAxQA5A5AiBJQAjBIAIBPQAIBPgTBNQgSBNgrBCQgbAqgjAjg");
	this.shape_29.setTransform(46.6,31.7,3.063,3.063);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},19).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).wait(137));

	// Layer 4
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.749)").s().p("ACuDZQAUgUANgVQAuhIgIhWQgJhWg+g+QgbgagfgRIgGgDQg/gghHAIQhHAHg3AsQgNAJgJAKQgjAjgTAtQgSAtAAAwQAAAxASAtQATAtAjAjIgjAjQgqgqgWg2QgXg2AAg7QAAg6AXg2QAWg2AqgpQAPgPALgJQBDg0BVgJQBVgJBMAmIAHAEQApAWAdAeQAkAkAWAuQAWAuAFAxQAFAygMAxQgMAxgbAqQgSAbgVAWg");
	this.shape_30.setTransform(46.5,42.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.749)").s().p("AEmFqQAggfAYgmQAmg6AQhGQARhEgHhHQgHhGgfhBQgfhBgzgzQgsgsg2gdIgLgGQhrg1h4AMQh4ANheBKQgVARgQAQQh6B6AACrQAACtB6B5IgjAjQiIiIAAjBQAAjACIiIQAUgTAVgSQBqhTCGgNQCGgOB4A7IAMAGQA9AhAxAxQA5A5AiBJQAjBIAIBPQAIBPgTBNQgSBNgrBCQgbAqgjAjg");
	this.shape_31.setTransform(46.5,39.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.749)").s().p("AEoFtQAgggAYgmQAng7AQhGQARhFgHhHQgHhGgghCQgfhCgzgzQgsgsg3geIgKgFQhtg1h4AMQh5AMhfBLQgVARgQAQQh7B7AACtQAACtB7B7IgkAjQiJiJAAjCQAAjCCJiJQAVgTAVgSQBqhUCIgNQCGgOB5A8IAMAGQA+AgAxAyQA6A5AiBKQAjBJAIBPQAIBPgSBOQgTBOgrBCQgcArgjAjgACvDzQAUgTANgVQAvhJgJhXQgJhWg+g/QgbgagggRIgGgDQg/gghHAHQhIAIg4AsQgNAJgJAKQgjAkgTAtQgTAsAAAyQAAAxATAtQATAuAjAiIgjAkQgqgqgXg3QgWg2AAg7QAAg8AWg1QAXg3AqgpQAPgQALgIQBDg1BXgJQBVgJBMAmIAIAEQApAWAdAfQAkAkAWAuQAWAvAFAxQAFAzgMAxQgLAxgbAqQgTAcgVAWg");
	this.shape_32.setTransform(46.5,39.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,255,255,0.745)").s().p("AEvF1QAgghAZgmQAng9ARhHQARhHgHhIQgIhIgfhDQgghDg0g1Qgugtg4geIgKgGQhvg2h7AMQh8ANhhBMQgVASgRAQQh9B+AACwQAACyB9B9IgkAkQiMiMAAjHQAAjFCMiMQAVgUAWgSQBthWCKgOQCJgOB8A9IAMAGQA/AiAyAzQA7A6AjBLQAkBLAIBRQAIBRgTBPQgTBPgsBEQgcAsgkAkgACzD5QAUgUANgWQAwhKgJhZQgIhYhAhAQgcgbgggRIgHgDQhAghhJAIQhJAHg5AtQgNAKgKAKQgkAkgTAuQgTAuAAAyQAAAzATAuQATAuAkAkIgkAkQgqgrgYg4QgXg3AAg9QAAg9AXg2QAYg4AqgqQAQgQAMgIQBEg3BYgIQBXgKBOAnIAIAEQApAXAeAfQAlAlAXAvQAXAvAFAzQAFA0gNAyQgLAzgcAqQgTAdgWAWg");
	this.shape_33.setTransform(46.5,39.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,255,255,0.737)").s().p("AE5GBQAighAZgoQApg+ARhKQAShJgIhLQgHhLghhGQghhFg2g2Qgvgug6ggIgLgGQhyg4h/ANQiBANhkBPQgWASgRARQiCCCAAC2QAAC4CCCBIglAmQiRiRAAjOQAAjMCRiRQAVgVAXgSQBwhZCPgOQCOgPCABAIANAGQBBAiA0A1QA9A8AkBOQAlBNAJBUQAIBUgUBSQgTBSgtBHQgeAsglAmgAC5EBQAVgVAOgWQAxhNgJhbQgJhchChCQgdgbghgTIgHgDQhDgihLAIQhLAIg8AuQgNALgKAKQglAlgUAwQgUAvAAA0QAAA1AUAvQAUAwAlAlIglAlQgsgsgYg5QgYg6AAg/QAAg+AYg5QAYg5AsgtQAQgQAMgJQBHg3BbgJQBagKBRAoIAIAEQArAYAfAfQAmAnAXAxQAYAxAFA0QAGA2gNA0QgNA0gcAsQgTAdgXAXg");
	this.shape_34.setTransform(46.5,39.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,255,255,0.729)").s().p("AFIGUQAjgkAbgpQAqhCAThNQAShMgIhPQgIhOgihJQgjhJg4g4Qgygxg8ghIgLgGQh4g7iGANQiGAOhpBTQgXATgSASQiICIAAC/QAADACICIIgnAnQiYiYAAjXQAAjWCYiYQAWgWAYgTQB2hdCWgPQCVgPCGBCIANAHQBEAkA2A3QBAA/AmBRQAnBRAJBYQAJBYgVBWQgUBWgwBKQgeAvgoAngADCENQAVgVAPgYQA0hQgKhgQgJhghFhFQgegdgjgTIgHgDQhGgkhPAIQhPAJg+AwQgPALgKALQgnAngUAyQgVAxAAA3QAAA2AVAzQAUAyAnAmIgnAnQgugugZg8QgZg8AAhCQAAhCAZg7QAZg8AugvQARgQANgKQBKg6BfgKQBfgKBUAqIAJAEQAtAZAgAhQAoApAZAzQAYAzAGA3QAFA4gNA3QgNA2geAvQgUAegYAYg");
	this.shape_35.setTransform(46.5,39.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,255,255,0.718)").s().p("AFbGrQAlglAcgsQAthFAUhSQAThRgIhTQgIhTglhNQgkhNg8g8Qg0gzhAgjIgMgGQh/g/iNAOQiOAPhvBXQgZAUgTATQiQCQAADLQAADLCQCPIgpApQihigAAjjQAAjjChigQAXgXAagVQB8hiCfgQQCdgQCOBGIAOAHQBJAmA5A7QBDBCApBWQAoBWAKBdQAJBdgWBbQgVBbgzBOQggAxgpApgADNEdQAXgXAPgZQA3hVgKhlQgKhmhJhJQgggeglgUIgHgEQhKgmhUAJQhTAJhCAzQgPAMgLALQgpAqgWA1QgWA0AAA6QAAA5AWA1QAWA1ApApIgpApQgxgxgbg/QgahAAAhFQAAhGAag/QAbg/AxgxQASgSANgKQBPg+BkgKQBkgLBaAtIAJAEQAvAaAjAkQAqAqAaA2QAaA3AGA6QAGA7gOA6QgOA6ggAxQgVAggZAZg");
	this.shape_36.setTransform(46.5,39.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0.702)").s().p("AFyHHQAognAegwQAwhJAVhYQAUhWgIhYQgJhZgnhSQgnhShAhAQg4g3hEglIgNgHQiHhDiXAQQiXAPh2BdQgbAWgUAUQiZCZAADYQAADZCZCZIgsAsQirirAAjzQAAjxCrirQAZgZAbgWQCFhoCpgRQCogSCXBLIAPAHQBOApA9A/QBHBHAsBbQArBcAKBjQAKBjgXBhQgXBhg2BTQgiA1gsAsgADbEwQAYgZARgaQA6hbgLhsQgKhthOhOQgigggogWIgHgDQhQgphZAKQhZAJhGA3QgQAMgLAMQgsAtgYA4QgXA4AAA9QAAA+AXA5QAYA4AsAsIgsAsQg1g1gchDQgchEAAhLQAAhKAchDQAchEA1g0QASgTAPgKQBUhDBrgKQBrgMBfAwIAKAFQAzAbAkAmQAtAtAcA6QAcA6AGA/QAGA/gPA9QgOA+giA0QgXAjgbAbg");
	this.shape_37.setTransform(46.5,39.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(255,255,255,0.686)").s().p("AGOHpQAqgqAhgzQAzhPAWheQAXhdgKhfQgJhfgqhYQgqhYhEhFQg8g7hJgoIgPgHQiRhIiiARQiiAQh/BkQgdAXgVAWQilClAADoQAADpClCkIgwAvQi3i3AAkFQAAkEC3i4QAbgaAdgYQCPhwC2gSQC0gTCiBRIARAIQBTAsBBBCQBNBNAvBiQAvBiAKBrQALBqgZBpQgZBog5BZQglA5gwAvgADrFGQAagaASgcQA/higMh0QgLh0hUhUQglgjgqgXIgIgEQhVgshgALQhgAKhLA6QgRANgNAOQgvAvgZA9QgZA8AABCQAABCAZA9QAZA9AvAuIgvAwQg4g4gehJQgfhJAAhQQAAhQAfhIQAehJA4g4QAUgUAQgMQBahGBzgMQBzgMBmAzIALAFQA2AeAoAoQAwAxAeA+QAeA+AGBDQAHBEgQBCQgQBCgkA4QgYAmgdAdg");
	this.shape_38.setTransform(46.5,39);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,255,255,0.667)").s().p("AGtIQQAuguAjg3QA4hVAYhlQAYhkgKhnQgLhngthfQgthfhKhKQhBhAhOgrIgQgIQichNivARQiwATiJBrQgfAZgXAYQiyCyAAD6QAAD8CyCxIgzAzQjGjGAAkaQAAkYDGjHQAdgcAfgaQCah5DFgTQDDgVCvBXIARAJQBaAvBHBIQBTBTAyBqQAyBqAMB0QAMBygbBxQgbBwg+BhQgoA9gzAzgAD+FgQAcgcATgfQBEhpgNh9QgMh+hahbQgogmgugYIgIgFQhcguhoALQhnAKhRBAQgTAOgNAOQgzAzgbBCQgbBBAABHQAABIAbBBQAbBCAzAyIgzAzQg9g8ghhPQgghPAAhWQAAhWAghOQAhhOA9g9QAWgWAQgMQBhhNB9gMQB8gNBvA2IALAGQA7AgAqAsQA0A1AhBDQAgBDAHBIQAHBJgRBIQgRBHgnA9QgbAogfAfg");
	this.shape_39.setTransform(46.5,38.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(255,255,255,0.643)").s().p("AHRI8QAygyAmg7QA8hcAahuQAahsgLhwQgLhvgxhnQgxhnhQhRQhGhFhVguIgRgJQiqhUi9ATQi/AUiUB1QghAbgaAZQjBDBAAEQQAAEQDBDAIg3A4QjXjXAAkxQAAkwDXjXQAggfAhgcQCniDDVgVQDTgWC+BeIATAJQBhAzBNBPQBaBZA2BzQA3BzANB9QAMB8gdB7QgdB6hDBoQgsBCg3A4gAETF+QAfgfAUghQBKhygOiIQgNiIhihiQgrgpgygbIgJgFQhkgzhwAMQhwAMhYBFQgUAPgOAQQg4A3gdBHQgdBGAABOQAABNAdBHQAdBHA4A3Ig4A3QhBhBgkhWQgjhVAAhdQAAheAjhUQAkhVBBhCQAYgYASgNQBphTCHgNQCHgPB4A8IAMAGQBAAjAtAvQA5A5AjBJQAjBIAIBPQAIBPgTBOQgTBNgqBCQgdArgiAig");
	this.shape_40.setTransform(46.5,38.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(255,255,255,0.62)").s().p("AH5JtQA2g2AphAQBBhkAdh4QAch1gMh5QgMh5g1hxQg1hvhXhYQhMhKhdgzIgSgJQi5hbjOAUQjOAWiiB/QgkAdgbAbQjSDSAAEnQAAEoDSDQIg8A9QjqjqAAlLQAAlLDqjpQAighAlgfQC1iODngXQDmgYDOBmIAUAKQBqA4BTBVQBiBhA7B9QA7B9AOCIQAOCHggCFQggCEhJBxQgvBIg8A9gAEqGfQAigiAWgkQBQh8gPiTQgOiUhrhrQgugsg2geIgLgFQhsg3h6ANQh5ANhgBLQgWAQgPARQg9A8gfBNQggBNAABUQAABUAgBNQAfBNA9A8Ig9A8QhHhIgmhcQgnhdAAhlQAAhlAnhcQAmhdBHhHQAagaAUgOQByhbCTgOQCSgQCCBBIANAHQBFAlAyA0QA+A+AmBPQAmBPAIBVQAJBWgVBUQgUBUguBIQgfAvglAlg");
	this.shape_41.setTransform(46.6,38.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(255,255,255,0.592)").s().p("AIlKkQA7g7AthGQBHhtAfiCQAeiAgNiDQgNiEg6h6Qg6h5hehgQhThRhlg3IgTgKQjJhjjgAWQjhAXivCLQgoAfgdAeQjkDkAAFBQAAFCDkDjIhCBBQj+j9AAlpQAAlnD+j+QAmgkAoghQDFibD7gZQD6gbDgBwIAWALQBzA8BbBdQBqBpBACJQBBCHAPCUQAPCTgjCRQgiCPhQB8QgzBOhBBBgAFEHDQAlgkAYgoQBXiGgQihQgQihh0h0Qgygwg7ggIgLgGQh2g7iEAOQiFAOhnBRQgZASgRASQhBBCgiBUQgjBTAABbQAABcAjBUQAiBUBBBAIhBBBQhNhNgqhlQgqhlAAhuQAAhuAqhkQAqhlBNhNQAcgcAWgQQB8hiCfgQQCfgRCOBGIAOAIQBMApA2A4QBDBDApBWQApBWAJBdQAKBegXBbQgVBbgzBOQghAzgoAog");
	this.shape_42.setTransform(46.6,38);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(255,255,255,0.561)").s().p("AJWLgQBAhAAxhNQBNh2AhiOQAiiLgOiPQgPiPg/iFQg/iEhmhoQhbhYhtg8IgWgMQjahrj0AYQj1AZi/CXQgqAighAhQj4D4AAFdQAAFfD4D3IhHBHQkUkVAAmIQAAmHEUkUQApgoArgjQDXipERgbQEQgdD0B5IAYAMQB9BCBjBlQB0BzBGCUQBGCTAQCiQAQCfglCeQgmCchWCGQg4BWhHBHgAFhHrQAogoAagrQBfiSgSivQgRivh+h+Qg3g1hAgjIgMgGQiAhBiQAPQiRAQhwBYQgbATgSAVQhHBHgmBbQglBbAABjQAABkAlBbQAmBcBHBGIhHBHQhUhUguhuQguhuAAh4QAAh4AuhsQAuhuBUhUQAegfAYgRQCHhrCugRQCsgSCbBMIAPAIQBSAtA7A9QBJBJAtBdQAtBeAKBlQAKBmgYBjQgYBkg3BUQgkA4gsAsg");
	this.shape_43.setTransform(46.6,37.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(255,255,255,0.529)").s().p("AKLMgQBFhFA1hTQBUiBAliaQAkiYgPibQgQichEiRQhFiQhvhxQhjhgh3hBIgXgMQjuh1kJAaQkLAcjQCjQguAmgkAjQkNEOAAF9QAAF9ENEMIhNBOQktktAAmqQAAmqEtktQAsgrAwgnQDpi3EpgeQEpgfEJCEIAbANQCIBIBrBtQB+B9BMChQBMChASCwQASCtgpCrQgpCrheCSQg9BchNBOgAGAIWQArgrAdgvQBnifgTi+QgTi/iJiJQg8g6hFglIgNgHQiMhHidARQidAQh6BhQgdAVgUAWQhOBNgoBkQgpBiAABtQAABsApBjQAoBkBOBMIhOBNQhbhbgyh4Qgyh3AAiCQAAiDAyh2QAyh4BbhbQAigiAZgSQCTh1C9gSQC8gUCoBTIARAIQBZAxBBBDQBPBPAxBmQAwBlALBvQALBvgaBsQgaBsg7BcQgoA9gvAvg");
	this.shape_44.setTransform(46.6,37.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(255,255,255,0.494)").s().p("ALENnQBLhMA6haQBbiNAoinQAoilgRipQgRiqhKidQhLich5h7QhrhpiChHIgZgNQkDh/khAcQkhAejiCyQgzApgmAnQkmElAAGeQAAGfEmEkIhUBUQlIlHAAnQQAAnPFIlHQAwgvAzgqQD+jIFDggQFDgiEgCPIAdAPQCUBOB1B3QCJCIBSCvQBTCvAUC/QATC9gsC6QgtC5hmCfQhCBlhUBUgAGiJFQAvgvAfgyQBwitgVjPQgUjQiViVQhBg/hMgpIgOgHQiYhNirASQiqASiGBpQgfAXgWAYQhUBUgsBsQgtBrAAB2QAAB2AtBsQAsBsBUBTIhUBUQhkhkg2iBQg2iCAAiOQAAiOA2iBQA2iCBkhjQAkgkAcgVQCgh+DNgVQDNgVC3BaIASAKQBhA0BGBJQBWBWA1BvQA1BuAMB5QAMB4gdB2QgbB2hBBjQgrBDg0Azg");
	this.shape_45.setTransform(46.6,37);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(255,255,255,0.455)").s().p("AMBOyQBShSA/hiQBjiZAri2QAriygSi5QgSi4hRirQhRiqiEiFQh0hyiOhNIgbgOQkZiLk5AgQk7Agj2DCQg3AsgpAqQk/E/AAHBQAAHDE/E9IhcBbQljljAAn4QAAn3FjljQA0gzA4guQEUjZFfgjQFfglE5CcIAgAPQCgBVB/CCQCVCTBaC/QBaC9AVDQQAVDNgwDLQgxDJhvCsQhIBuhbBbgAHGJ3QAzgzAig3QB5i8gWjgQgWjjiiiiQhGhDhTgtIgPgIQilhTi6ATQi5AUiRByQgiAYgYAaQhbBcgwB2QgxB0AACAQAACAAxB2QAwB1BbBaIhbBcQhshtg7iNQg7iNAAiaQAAiaA7iMQA7iNBshsQAngoAegWQCuiJDfgWQDfgYDGBiIAUALQBpA5BMBPQBeBeA6B4QA5B4ANCDQANCCgfCAQgeCAhHBtQgvBIg4A4g");
	this.shape_46.setTransform(46.6,36.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(255,255,255,0.416)").s().p("ANCQCQBZhZBFhqQBrimAvjFQAvjCgUjIQgUjIhYi6QhYi4iPiRQh+h7iZhUIgegPQkwiXlVAiQlVAkkLDSQg7AwguAtQlZFaAAHoQAAHpFZFYIhjBjQmBmBAAojQAAoiGBmCQA5g3A9gyQErjrF9gmQF8goFUCpIAiARQCvBcCJCMQCiChBhDPQBiDNAXDiQAWDeg0DcQg0Dah5C7QhOB3hjBjgAHtKtQA3g4Alg7QCEjMgYj0QgYj2iwivQhNhKhZgwIgRgJQizhajJAVQjKAVidB7QglAbgZAdQhjBjg1CAQg0B+AACLQAACLA0B/QA1CABjBiIhjBjQh2h2hAiZQhAiZAAinQAAinBAiYQBAiZB2h2QAqgqAhgZQC8iUDzgZQDxgZDXBqIAWAMQByA+BTBVQBmBmA+CCQA+CDAOCOQAPCOgiCKQghCLhMB2Qg0BOg8A9g");
	this.shape_47.setTransform(46.6,36.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(255,255,255,0.373)").s().p("AOIRYQBhhhBJhzQB1i0AzjVQAyjSgVjZQgWjZhfjJQhfjIibicQiJiGimhbIgggQQlKijlxAlQlyAmkhDjQhAA1gxAxQl3F2AAIRQAAISF3F1IhsBrQmhmhAApRQAApQGhmhQA+g8BCg2QFEj/GdgpQGcgrFwC3IAlASQC9BkCVCYQCvCtBqDgQBqDfAYD1QAZDxg5DuQg5DsiCDLQhVCBhrBrgAIWLmQA8g8AohBQCPjdgbkIQgakKi+i+QhThQhhg0IgSgJQjChjjaAXQjaAXirCGQgnAdgcAfQhsBrg4CKQg5CJAACXQAACWA5CLQA4CKBsBqIhsBrQh/h/hFimQhFimAAi1QAAi1BFilQBFimB/h/QAuguAkgaQDMiiEHgaQEFgbDpBzIAXAMQB9BEBZBcQBuBuBECNQBECOAPCaQAPCZglCXQgjCWhTCAQg3BUhCBCg");
	this.shape_48.setTransform(46.6,35.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(255,255,255,0.329)").s().p("APRSzQBphpBQh8QB+jDA3jnQA3jjgYjqQgXjrhnjaQhnjXioiqQiTiQi0hiIgjgTQlliwmPAoQmQAqk4D1QhGA5g1A1QmVGVAAI8QAAI9GVGUIh1B0QnDnEAAqBQAAqAHDnDQBDhBBHg7QFfkTG+gtQG+gvGPDGIAoAUQDMBsChClQC9C7BzDzQByDwAbEJQAbEFg+EBQg9EAiNDbQhcCMh0B0gAJBMjQBBhBArhGQCbjvgdkeQgckgjOjOQhahWhog5IgUgJQjRhrjtAZQjsAZi4CQQgrAggeAhQh0B1g+CVQg9CUAACjQAACjA9CWQA+CVB0BzIh0B0QiKiKhLizQhLi0AAjEQAAjEBLiyQBLizCKiKQAxgyAngcQDdivEcgcQEbgeD8B9IAZANQCGBJBhBkQB3B3BJCZQBJCZARCnQARCmgoCiQgnCjhZCKQg8BbhHBIg");
	this.shape_49.setTransform(46.6,35.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(255,255,255,0.278)").s().p("AQfUTQBxhxBXiHQCIjSA7j5QA7j2gZj8QgZj+hvjrQhvjpi2i3QificjChqIglgUQmCi+mvArQmwAtlSEJQhLA+g5A5Qm2G2AAJpQAAJrG2G0Ih+B9QnonnAAq1QAAqzHonoQBIhGBNg/QF6kpHjgxQHhgyGvDWIArAVQDcB1CuCxQDNDLB7EGQB8EEAdEeQAcEZhCEWQhCEUiZDtQhiCXh+B9gAJvNjQBGhGAvhMQCnkCgfk1Qgek3jfjeQhhhdhwg9IgWgLQjihzj/AbQj/AbjHCcQgvAiggAkQh+B+hCChQhCCgAACwQAACwBCCiQBCChB+B8Ih+B9QiUiVhRjCQhRjBAAjUQAAjTBRjBQBRjCCUiUQA2g2ApgfQDvi8EzgfQExggERCGIAbAPQCRBPBoBsQCBCBBPCkQBPClASC1QASCzgrCwQgqCwhgCUQhBBjhNBNg");
	this.shape_50.setTransform(46.6,34.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(255,255,255,0.227)").s().p("ARyV4QB5h6BeiRQCSjiBAkNQBAkIgbkRQgbkRh4j+Qh4j7jDjFQisiojRhyIgogWQmgjNnRAvQnSAwlrEeQhRBCg+A+QnYHYAAKaQAAKaHYHWIiICHQoOoNAArqQAArqIOoOQBOhLBThEQGYlBIHg0QIIg2HPDmIAvAXQDuB+C7C/QDdDbCFEaQCFEYAfE1QAfEvhHEsQhIEqikD/QhrCiiHCHgAKgOmQBLhLAzhSQCzkWgglMQghlQjwjvQhohlh6hCIgYgLQjzh8kTAdQkTAdjWCoQgzAlgjAnQiHCHhHCuQhICtAAC+QAAC9BICuQBHCuCHCFIiHCIQigihhXjRQhXjQAAjkQAAjlBXjPQBXjRCgihQA6g6AtggQEBjMFKggQFKgjEmCRIAdAPQCcBVBxB0QCLCMBUCxQBWCyATDCQATDCguC9QgtC+hoCgQhGBqhSBUg");
	this.shape_51.setTransform(46.6,34.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(255,255,255,0.176)").s().p("ATIXiQCDiDBkicQCejzBFkhQBFkdgdklQgekniBkQQiBkPjSjUQi5i1jgh7IgsgWQm/jdn0AyQn2A0mHE0QhXBHhDBCQn7H8AALMQAALOH7H5IiRCSQo2o2AAsjQAAsiI2o1QBThRBZhJQG3laIwg4QIug6HzD4IAyAZQEACHDKDOQDtDrCPEvQCQEuAhFMQAiFGhNFDQhNFAixETQhzCuiRCSgALTPtQBRhRA2hYQDCkrgjlmQgklpkCkCQhwhsiDhHIgZgMQkGiFkpAfQknAfjnC1Qg2AogmApQiRCShNC7QhNC6AADMQAADMBNC7QBNC7CRCQIiRCSQitithdjhQhejgAAj2QAAj1BejgQBdjgCtitQA+g+AwgkQEVjaFkgkQFiglE8CcIAgAQQCoBcB5B9QCWCWBbC/QBbC/AVDRQAVDRgyDLQgwDMhwCtQhLByhZBag");
	this.shape_52.setTransform(46.6,33.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(255,255,255,0.122)").s().p("AUjZSQCNiNBrinQCqkGBKk2QBKkyggk7Qgfk9iLkkQiKkijijkQjHjDjxiEIgvgYQngjtoZA1QobA4mkFLQheBMhHBIQohIhAAMBQAAMDIhIfIidCcQpfpfAAtfQAAtdJfpgQBahXBghOQHXlzJZg8QJYg/IYEKIA2AbQETCRDYDdQD/D9CaFGQCaFEAkFkQAkFfhTFaQhSFYi+EnQh7C8idCcgAMJQ4QBXhYA6heQDQlBgmmAQgmmEkVkVQh5h0iNhMIgbgNQkZiQk+AiQk+Ahj4DDQg5AqgpAtQicCchTDJQhTDIAADbQAADbBTDKQBTDICcCbIicCcQi6i6hkjxQhljxAAkIQAAkHBljxQBkjxC6i5QBDhDAzgmQEpjrF+gmQF+goFTCnIAhASQC1BjCCCGQChChBiDNQBiDOAXDgQAWDgg2DbQgzDbh4C5QhRB7hgBgg");
	this.shape_53.setTransform(46.6,33);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(255,255,255,0.063)").s().p("AWCbGQCWiXB0izQC2kYBOlNQBQlIgilSQghlTiVk6QiUk3jyj1QjWjQkCiNIgygbQoEj+pAA6QpBA8nCFiQhlBShMBMQpJJJAAM5QAAM6JJJGIioCoQqMqLAAudQAAucKMqLQBghdBnhUQH5mOKEhAQKEhEI+EeIA6AcQEnCcDoDtQEREPClFdQClFcAnF+QAmF4hYFzQhZFxjME8QiDDJioCogANBSFQBdhdA+hlQDflZgpmcQgomfkpkqQiCh8iXhSIgdgOQktiZlWAkQlUAkkKDQQg+AugrAvQioCohYDYQhZDWAADrQAADrBZDYQBYDXCoClIioCoQjHjHhskDQhrkCAAkbQAAkaBrkCQBskDDHjHQBIhHA3gpQE/j8GZgpQGZgrFsC0IAkATQDCBqCLCPQCsCtBpDcQBqDcAYDxQAYDwg6DrQg3DriBDGQhWCEhnBng");
	this.shape_54.setTransform(46.7,32.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(255,255,255,0)").s().p("ACuDZQAUgUANgVQAuhIgIhWQgJhWg+g+QgbgagfgRIgGgDQg/gghHAIQhHAHg3AsQgNAJgJAKQgjAjgTAtQgSAtAAAwQAAAxASAtQATAtAjAjIgjAjQgqgqgWg2QgXg2AAg7QAAg6AXg2QAWg2AqgpQAPgPALgJQBDg0BVgJQBVgJBMAmIAHAEQApAWAdAeQAkAkAWAuQAWAuAFAxQAFAygMAxQgMAxgbAqQgSAbgVAWg");
	this.shape_55.setTransform(46.6,44.6,5.127,5.127);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(255,255,255,0)").s().p("AEmFqQAggfAYgmQAmg6AQhGQARhEgHhHQgHhGgfhBQgfhBgzgzQgsgsg2gdIgLgGQhrg1h4AMQh4ANheBKQgVARgQAQQh6B6AACrQAACtB6B5IgjAjQiIiIAAjBQAAjACIiIQAUgTAVgSQBqhTCGgNQCGgOB4A7IAMAGQA9AhAxAxQA5A5AiBJQAjBIAIBPQAIBPgTBNQgSBNgrBCQgbAqgjAjg");
	this.shape_56.setTransform(46.7,31.8,5.127,5.127);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_31},{t:this.shape_30}]},30).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).wait(126));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104.4,137.7);


(lib.epunkt_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJALIAAgVIATAAIAAAVg");
	this.shape.setTransform(272.3,241);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABDBeIgUg0IheAAIgVA0IgQAAIBMi6IARAAIBMC6gAApAbIgphnIgpBnIBSAAg");
	this.shape_1.setTransform(260,232.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVBeQgEAAgFgDIACgOIAHACIAJABQALgBAEgFQAGgFADgHQACgIAAgJIAAiLIARAAIAACKQAAAOgFAMQgDAMgKAGQgJAHgPAAIgKgBg");
	this.shape_2.setTransform(246.1,233);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAwBeIAAijIhdCjIgTAAIAAi6IAQAAIAACiIBeiiIATAAIAAC6g");
	this.shape_3.setTransform(233.9,232.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglBeQgJgBgHgDIABgSQAJAFAKACQALACAKAAQAMAAAKgEQALgEAIgJQAHgIAAgPQAAgNgFgHQgFgIgIgDQgIgEgJgBIgOgBIgGAAIgGAAIAAgOIAFAAIAGAAIAOgCQAHgCAIgEQAIgEAFgIQAFgHAAgMQAAgLgGgHQgGgHgJgDQgJgDgLAAQgJAAgLADQgKACgHAEIgDgQIAVgGQAMgCAJAAQAOAAANAFQANAEAIALQAIAKABARQAAAQgKAMQgKAMgSAEQANACAJAFQAJAGAFALQAFAKAAANQAAAQgIAMQgJAMgQAHQgPAGgUAAQgNAAgKgCg");
	this.shape_4.setTransform(217.8,232.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAxBeIAAijIheCjIgUAAIAAi6IASAAIAACiIBdiiIAUAAIAAC6g");
	this.shape_5.setTransform(202.3,232.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag0BeIAAi6IApAAQAPgBANAFQAOAEAJALQAIAKAAARQAAARgJAKQgKALgQAFQALABAKAGQAJAFAGAJQAEAKAAAMQABAVgLAMQgLALgQAFQgQAFgSAAgAgkBPIAVAAQAMAAALgDQAMgEAIgIQAIgHAAgPQAAgRgIgIQgJgIgNgDQgLgDgOABIgRAAgAgkgKIAWAAQAMAAAJgDQALgEAGgHQAGgIABgOQAAgLgHgHQgFgHgJgDQgJgDgKAAIgbAAg");
	this.shape_6.setTransform(186.3,232.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgkBZQgPgIgKgOQgKgNgFgRQgFgRAAgUQAAgSAFgRQAFgRALgOQAKgNAPgIQAQgIATAAQAWAAAPAIQAPAHAKAOQAKANAFARQAFASAAASQAAATgFARQgFARgKAOQgKAOgQAHQgPAIgVAAQgUAAgQgHgAgchIQgMAGgIAMQgHAMgEAOQgEAOAAAOQAAAPAEAOQAEAOAIAMQAHALAMAHQAMAHAQABQARgBAMgGQAMgHAIgMQAIgLAEgPQADgOAAgPQAAgOgDgOQgEgPgIgLQgIgMgMgHQgMgGgRgBQgQABgMAHg");
	this.shape_7.setTransform(168.8,232.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgyBeIAAi6IArAAQAQAAAOAFQANAHAHALQAIAMAAARQAAATgJALQgIALgOAGQgOAFgPAAIgYAAIAABSgAghgCIAOAAQAOAAALgCQAMgDAIgIQAHgIABgRQAAgSgLgJQgLgKgQAAIgdAAg");
	this.shape_8.setTransform(153.2,232.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAvBeIAAirIhdAAIAACrIgRAAIAAi6IB/AAIAAC6g");
	this.shape_9.setTransform(136.8,232.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AglBeQgJgBgHgDIABgSQAJAFAKACQALACAKAAQAMAAAKgEQALgEAIgJQAHgIAAgPQAAgNgFgHQgFgIgIgDQgIgEgJgBIgOgBIgGAAIgGAAIAAgOIAFAAIAGAAIAOgCQAHgCAIgEQAIgEAFgIQAFgHAAgMQAAgLgGgHQgGgHgJgDQgJgDgLAAQgJAAgLADQgKACgHAEIgDgQIAVgGQAMgCAJAAQAOAAANAFQANAEAIALQAIAKABARQAAAQgKAMQgKAMgSAEQANACAJAFQAJAGAFALQAFAKAAANQAAAQgIAMQgJAMgQAHQgPAGgUAAQgNAAgKgCg");
	this.shape_10.setTransform(113.5,232.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgtBeIAAi6IBYAAIAAAPIhHAAIAABEIBDAAIAAAOIhDAAIAABKIBKAAIAAAPg");
	this.shape_11.setTransform(101,232.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag2BeIAAi6IBhAAIAAAPIhQAAIAAA9IAeAAQAdAAARAPQAQANAAAYQAAAQgGANQgGANgOAIQgOAHgXABgAglBPIAeAAQAUAAAMgKQAMgJABgYQgBgTgMgJQgMgJgVAAIgdAAg");
	this.shape_12.setTransform(87,232.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAxBeIAAijIheCjIgTAAIAAi6IARAAIAACiIBdiiIATAAIAAC6g");
	this.shape_13.setTransform(62.7,232.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ABDBeIgUg1IheAAIgVA1IgQAAIBMi7IARAAIBMC7gAApAbIgphnIgpBnIBSAAg");
	this.shape_14.setTransform(280.1,197);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ABOBeIAAiqIhFCqIgQAAIhGiqIAACqIgRAAIAAi7IAbAAIBECoIBDioIAaAAIAAC7g");
	this.shape_15.setTransform(259.5,197);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgkBZQgPgIgKgOQgKgNgFgRQgFgRAAgUQAAgSAFgRQAFgRALgOQAKgNAPgIQAQgIATAAQAWAAAPAIQAPAHAKAOQAKANAFARQAFASAAASQAAATgFARQgFARgKAOQgKAOgQAHQgPAIgVAAQgUAAgQgHgAgchIQgMAGgIAMQgHAMgEAOQgEAOAAAOQAAAPAEAOQAEAOAIAMQAHALAMAHQAMAHAQABQARgBAMgGQAMgHAIgMQAIgLAEgPQADgOAAgPQAAgOgDgOQgEgPgIgLQgIgMgMgHQgMgGgRgBQgQABgMAHg");
	this.shape_16.setTransform(237.9,197);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ABJB2IAAgxIiRAAIAAAxIgQAAIAAhAIAPAAQARgWAHgeQAHgdAAgiIAAg4IBqAAIAACrIAZAAIAABAgAgagzQAAAfgGAaQgHAbgOAVIBkAAIAAibIhJAAg");
	this.shape_17.setTransform(218.8,199.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ABJB2IAAgxIiRAAIAAAxIgQAAIAAhAIAPAAQARgWAHgeQAHgdAAgiIAAg4IBqAAIAACrIAZAAIAABAgAgagzQAAAfgGAaQgHAbgOAVIBkAAIAAibIhJAAg");
	this.shape_18.setTransform(192.8,199.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgkBZQgPgIgKgOQgKgNgFgRQgFgRAAgUQAAgSAFgRQAFgRALgOQAKgNAPgIQAQgIATAAQAWAAAPAIQAPAHAKAOQAKANAFARQAFASAAASQAAATgFARQgFARgKAOQgKAOgQAHQgPAIgVAAQgUAAgQgHgAgchIQgMAGgIAMQgHAMgEAOQgEAOAAAOQAAAPAEAOQAEAOAIAMQAHALAMAHQAMAHAQABQARgBAMgGQAMgHAIgMQAIgLAEgPQADgOAAgPQAAgOgDgOQgEgPgIgLQgIgMgMgHQgMgGgRgBQgQABgMAHg");
	this.shape_19.setTransform(173.9,197);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgtBeIAAi7IBYAAIAAAQIhHAAIAABEIBDAAIAAAOIhDAAIAABJIBKAAIAAAQg");
	this.shape_20.setTransform(150.8,197);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgIBeIAAirIg2AAIAAgQIB9AAIAAAQIg3AAIAACrg");
	this.shape_21.setTransform(137.2,197);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgtBeIAAi7IBYAAIAAAQIhHAAIAABEIBDAAIAAAOIhDAAIAABJIBKAAIAAAQg");
	this.shape_22.setTransform(124.6,197);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AglBeQgJgBgHgDIABgSQAJAFAKACQALACAKAAQAMAAAKgEQALgEAIgJQAHgIAAgPQAAgNgFgHQgFgIgIgDQgIgEgJgBIgOgBIgGAAIgGAAIAAgOIAFAAIAGAAIAOgCQAHgCAIgEQAIgEAFgIQAFgHAAgMQAAgLgGgHQgGgHgJgDQgJgDgLAAQgJAAgLADQgKACgHAEIgDgQIAVgGQAMgCAJAAQAOAAANAFQANAEAIALQAIAKABARQAAAQgKAMQgKAMgSAEQANACAJAFQAJAGAFALQAFAKAAANQAAAQgIAMQgJAMgQAHQgPAGgUAAQgNAAgKgCg");
	this.shape_23.setTransform(110.4,197);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgtBeIAAi7IBYAAIAAAQIhHAAIAABEIBDAAIAAAOIhDAAIAABJIBKAAIAAAQg");
	this.shape_24.setTransform(98,197);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhEBeQgFgBgEgCIABgOIAIACIAIAAQAPABAHgSQAIgRACgnQACglAAg/IBoAAIAAC7IgRAAIAAirIhGAAIgBBLQgCAggFAWQgEAVgKAMQgKALgSAAIgJgBg");
	this.shape_25.setTransform(80.6,197.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AglBeQgJgBgHgDIABgSQAJAFAKACQALACAKAAQAMAAAKgEQALgEAIgJQAHgIAAgPQAAgNgFgHQgFgIgIgDQgIgEgJgBIgOgBIgGAAIgGAAIAAgOIAFAAIAGAAIAOgCQAHgCAIgEQAIgEAFgIQAFgHAAgMQAAgLgGgHQgGgHgJgDQgJgDgLAAQgJAAgLADQgKACgHAEIgDgQIAVgGQAMgCAJAAQAOAAANAFQANAEAIALQAIAKABARQAAAQgKAMQgKAMgSAEQANACAJAFQAJAGAFALQAFAKAAANQAAAQgIAMQgJAMgQAHQgPAGgUAAQgNAAgKgCg");
	this.shape_26.setTransform(65.5,197);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAwBeIAAijIhdCjIgTAAIAAi7IARAAIAACjIBdijIATAAIAAC7g");
	this.shape_27.setTransform(50,197);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("ABDBeIgUg1IheAAIgVA1IgQAAIBMi7IARAAIBMC7gAApAbIgphoIgpBoIBSAAg");
	this.shape_28.setTransform(307.5,161.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("ABJB2IAAgxIiRAAIAAAxIgQAAIAAhAIAPAAQARgWAHgeQAHgdAAgiIAAg4IBqAAIAACrIAZAAIAABAgAgagzQAAAfgGAaQgHAbgOAVIBkAAIAAibIhJAAg");
	this.shape_29.setTransform(289.5,163.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AglBeQgJgBgHgDIABgSQAJAFAKACQALACAKAAQAMAAAKgEQALgEAIgJQAHgIAAgPQAAgNgFgHQgFgIgIgDQgIgEgJgBIgOgBIgGAAIgGAAIAAgOIAFAAIAGAAIAOgCQAHgCAIgEQAIgEAFgIQAFgHAAgMQAAgLgGgHQgGgHgJgDQgJgDgLAAQgJAAgLADQgKACgHAEIgDgQIAVgGQAMgCAJAAQAOAAANAFQANAEAIALQAIAKABARQAAAQgKAMQgKAMgSAEQANACAJAFQAJAGAFALQAFAKAAANQAAAQgIAMQgJAMgQAHQgPAGgUAAQgNAAgKgCg");
	this.shape_30.setTransform(265.8,161.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgtBeIAAi7IBYAAIAAAQIhHAAIAABFIBDAAIAAANIhDAAIAABJIBKAAIAAAQg");
	this.shape_31.setTransform(253.4,161.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Ag2BeIAAi7IBhAAIAAAQIhQAAIAAA9IAeAAQAdAAARAOQAQAOAAAZQAAAPgGANQgGANgOAHQgOAIgXABgAglBOIAeAAQAUABAMgKQAMgKABgWQgBgUgMgKQgMgIgVAAIgdAAg");
	this.shape_32.setTransform(239.4,161.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgJALIAAgVIATAAIAAAVg");
	this.shape_33.setTransform(220.4,169.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgIBeIAAirIg2AAIAAgQIB9AAIAAAQIg3AAIAACrg");
	this.shape_34.setTransform(210.1,161.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgtBeIAAi7IBYAAIAAAQIhHAAIAABFIBDAAIAAANIhDAAIAABJIBKAAIAAAQg");
	this.shape_35.setTransform(197.5,161.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAwBeIAAhZIhfAAIAABZIgRAAIAAi7IARAAIAABTIBfAAIAAhTIARAAIAAC7g");
	this.shape_36.setTransform(181.5,161.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgyBeIAAi7IAsAAQAPAAANAHQANAFAIAMQAIALAAASQAAASgJAMQgJALgNAFQgOAGgOAAIgZAAIAABSgAghgCIAOAAQAOAAALgDQAMgCAIgIQAHgIAAgRQAAgSgKgKQgKgJgRAAIgdAAg");
	this.shape_37.setTransform(166.6,161.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgtBeIAAi7IBYAAIAAAQIhHAAIAABFIBDAAIAAANIhDAAIAABJIBKAAIAAAQg");
	this.shape_38.setTransform(153.1,161.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgIBeIAAirIg2AAIAAgQIB9AAIAAAQIg3AAIAACrg");
	this.shape_39.setTransform(139.4,161.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAwBeIAAhZIhfAAIAABZIgRAAIAAi7IARAAIAABTIBfAAIAAhTIARAAIAAC7g");
	this.shape_40.setTransform(123.9,161.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAwBeIAAijIhdCjIgUAAIAAi7IARAAIAACjIBfijIASAAIAAC7g");
	this.shape_41.setTransform(106,161.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgvBdIgKgBIACgPIAGACIAJABQAHAAAFgFQAFgEAFgIIALgVIhGiIIATAAIA7B3IA7h3IASAAIhICOIgMAYQgGAKgIAHQgHAFgLAAIgJgBg");
	this.shape_42.setTransform(81.6,161.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AArBeIhbheIAABeIgRAAIAAi7IARAAIAABWIBUhWIAWAAIhaBYIBiBjg");
	this.shape_43.setTransform(66.9,161.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgtBeIAAi7IBYAAIAAAQIhHAAIAABFIBDAAIAAANIhDAAIAABJIBKAAIAAAQg");
	this.shape_44.setTransform(51.8,161.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgyBeIAAi7IAsAAQAPAAANAHQANAFAIAMQAIALAAASQAAASgJAMQgJALgNAFQgOAGgOAAIgZAAIAABSgAghgCIAOAAQAOAAALgDQAMgCAIgIQAHgIAAgRQAAgSgKgKQgKgJgRAAIgdAAg");
	this.shape_45.setTransform(38.8,161.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAvBeIAAirIhdAAIAACrIgRAAIAAi7IB/AAIAAC7g");
	this.shape_46.setTransform(22.4,161.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("ABDBdIgUg0IheAAIgVA0IgQAAIBMi6IARAAIBMC6gAApAbIgphoIgpBoIBSAAg");
	this.shape_47.setTransform(294.7,125.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgVBeQgEgBgFgBIACgPIAHACIAIAAQAMAAAEgFQAGgEADgJQACgHAAgJIAAiLIARAAIAACKQAAAPgFALQgEALgJAHQgJAHgPAAIgKgBg");
	this.shape_48.setTransform(280.8,125.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAwBdIAAiiIhdCiIgTAAIAAi6IARAAIAACkIBdikIATAAIAAC6g");
	this.shape_49.setTransform(268.6,125.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AguBdIAAi6IBdAAIAAAQIhMAAIAACqg");
	this.shape_50.setTransform(254.7,125.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgyBdIAAi6IAsAAQAPABANAFQANAHAIALQAIALAAASQAAASgJAMQgJALgNAGQgOAFgPAAIgYAAIAABRgAghgCIAOAAQAOAAALgDQAMgCAIgIQAHgIAAgRQAAgSgKgKQgKgJgRAAIgdAAg");
	this.shape_51.setTransform(241.7,125.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgtBdIAAi6IBYAAIAAAQIhHAAIAABFIBDAAIAAANIhDAAIAABKIBKAAIAAAOg");
	this.shape_52.setTransform(228.1,125.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAwBdIAAhYIhfAAIAABYIgRAAIAAi6IARAAIAABUIBfAAIAAhUIARAAIAAC6g");
	this.shape_53.setTransform(212.1,125.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgtBdIAAi6IBYAAIAAAQIhHAAIAABFIBDAAIAAANIhDAAIAABKIBKAAIAAAOg");
	this.shape_54.setTransform(197.2,125.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("ABDBdIgUg0IheAAIgVA0IgQAAIBMi6IARAAIBMC6gAApAbIgphoIgpBoIBSAAg");
	this.shape_55.setTransform(174.1,125.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAwBdIAAhYIhfAAIAABYIgRAAIAAi6IARAAIAABUIBfAAIAAhUIARAAIAAC6g");
	this.shape_56.setTransform(156.6,125.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAsBdIAAhSIgMADIgPADIgPABIgVgBQgLgCgJgFQgJgGgFgKQgGgMAAgTIAAg4IARAAIAAA4QgBAXALAJQALAIAYAAIAQgBIAPgCIAKgCIAAhbIAQAAIAAC6g");
	this.shape_57.setTransform(139.2,125.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAwBdIAAiiIhdCiIgTAAIAAi6IARAAIAACkIBdikIATAAIAAC6g");
	this.shape_58.setTransform(122.4,125.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgyBdIAAi6IAsAAQAPABANAFQAOAHAHALQAIALAAASQAAASgJAMQgJALgNAGQgOAFgOAAIgZAAIAABRgAghgCIAOAAQAOAAALgDQANgCAHgIQAHgIABgRQAAgSgLgKQgLgJgQAAIgdAAg");
	this.shape_59.setTransform(107.4,125.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgHBdIAAiqIg3AAIAAgQIB9AAIAAAQIg3AAIAACqg");
	this.shape_60.setTransform(93.3,125.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AArBdIhbhdIAABdIgRAAIAAi6IARAAIAABWIBUhWIAWAAIhaBYIBiBig");
	this.shape_61.setTransform(79.9,125.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgtBdIAAi6IBYAAIAAAQIhHAAIAABFIBDAAIAAANIhDAAIAABKIBKAAIAAAOg");
	this.shape_62.setTransform(64.9,125.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AhEBdQgFAAgEgCIABgOIAIACIAIABQAPAAAHgSQAIgRACgnQACglAAg/IBoAAIAAC6IgRAAIAAiqIhGAAIgBBMQgCAfgFAWQgEAWgKAKQgKALgSAAIgJgBg");
	this.shape_63.setTransform(47.5,125.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgtBdIAAi6IBYAAIAAAQIhHAAIAABFIBDAAIAAANIhDAAIAABKIBKAAIAAAOg");
	this.shape_64.setTransform(33.5,125.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("ABDBdIgUgzIheAAIgVAzIgQAAIBMi5IARAAIBMC5gAApAbIgphoIgpBoIBSAAg");
	this.shape_65.setTransform(317.3,89.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AglBeQgJgBgHgDIABgSQAJAFAKACQALACAKAAQAMAAAKgEQALgEAIgJQAHgIAAgPQAAgNgFgHQgFgIgIgDQgIgEgJgBIgOgBIgGAAIgGAAIAAgOIAFAAIAGAAIAOgCQAHgCAIgEQAIgEAFgIQAFgHAAgMQAAgLgGgHQgGgHgJgDQgJgDgLAAQgJAAgLADQgKACgHAEIgDgQIAVgGQAMgCAJAAQAOAAANAFQANAEAIALQAIAKABARQAAAQgKAMQgKAMgSAEQANACAJAFQAJAGAFALQAFAKAAANQAAAQgIAMQgJAMgQAHQgPAGgUAAQgNAAgKgCg");
	this.shape_66.setTransform(301.6,89.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgtBdIAAi5IBYAAIAAAPIhHAAIAABFIBDAAIAAANIhDAAIAABKIBKAAIAAAOg");
	this.shape_67.setTransform(281.7,89.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgHBdIAAiqIg3AAIAAgPIB9AAIAAAPIg3AAIAACqg");
	this.shape_68.setTransform(268.1,89.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AAxBdIAAiiIheCiIgUAAIAAi5IARAAIAACjIBfijIATAAIAAC5g");
	this.shape_69.setTransform(252.5,89.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AArBdIhbhdIAABdIgRAAIAAi5IARAAIAABVIBVhVIAVAAIhaBXIBiBig");
	this.shape_70.setTransform(236.7,89.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgHBdIAAiqIg3AAIAAgPIB9AAIAAAPIg3AAIAACqg");
	this.shape_71.setTransform(221.1,89.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgtBdIAAi5IBYAAIAAAPIhHAAIAABFIBDAAIAAANIhDAAIAABKIBKAAIAAAOg");
	this.shape_72.setTransform(208.5,89.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("ABOBdIAAiqIhGCqIgPAAIhGiqIAACqIgQAAIAAi5IAaAAIBECmIBDimIAaAAIAAC5g");
	this.shape_73.setTransform(189.5,89.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgXBUQgVgMgMgWQgMgVAAgdQAAgbAMgVQANgWAVgMQAWgNAcAAQAKAAALACQAKABAJAEIgBARQgJgFgLgCQgKgCgKAAQgYABgRAKQgRALgKASQgJASAAAWQAAAYAJASQAKASASAKQARAKAZABQAKAAAKgCQAJgCAKgEIABARQgJADgLABQgLACgKAAQgdAAgWgMg");
	this.shape_74.setTransform(169.6,89.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgtBdIAAi5IBYAAIAAAPIhHAAIAABFIBDAAIAAANIhDAAIAABKIBKAAIAAAOg");
	this.shape_75.setTransform(147.8,89.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgHBdIAAiqIg3AAIAAgPIB9AAIAAAPIg3AAIAACqg");
	this.shape_76.setTransform(134.1,89.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("ABDBdIgUgzIheAAIgVAzIgQAAIBMi5IARAAIBMC5gAApAbIgphoIgpBoIBSAAg");
	this.shape_77.setTransform(118.9,89.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AArB4IhbheIAABeIgRAAIAAi5IARAAIAABUIBVhUIAVAAIhaBWIBiBjgAgQhRIATgmIATAAIgZAmg");
	this.shape_78.setTransform(103.5,86.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("ABDBdIgUgzIheAAIgVAzIgQAAIBMi5IARAAIBMC5gAApAbIgphoIgpBoIBSAAg");
	this.shape_79.setTransform(85.8,89.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AhEBeQgFgBgEgCIABgOIAIACIAIABQAPAAAHgSQAIgSACgmQACglAAg+IBoAAIAAC5IgRAAIAAiqIhGAAIgBBMQgCAfgFAWQgEAWgKAKQgKAMgSAAIgJgBg");
	this.shape_80.setTransform(66.9,89.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AAvBdIAAiqIhdAAIAACqIgRAAIAAi5IB/AAIAAC5g");
	this.shape_81.setTransform(50,89.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AAwBdIAAiiIhdCiIgTAAIAAi5IARAAIAACjIBdijIATAAIAAC5g");
	this.shape_82.setTransform(24.8,89.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AguBdIAAi5IBdAAIAAAPIhMAAIAACqg");
	this.shape_83.setTransform(10.9,89.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("ABDBeIgUg0IheAAIgVA0IgQAAIBMi6IARAAIBMC6gAApAbIgphnIgpBnIBSAAg");
	this.shape_84.setTransform(308.8,53.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("ABJB2IAAgxIiRAAIAAAxIgQAAIAAhAIAPAAQARgWAHgeQAHgdAAgiIAAg4IBqAAIAACrIAZAAIAABAgAgagzQAAAfgGAaQgHAbgOAVIBkAAIAAibIhJAAg");
	this.shape_85.setTransform(290.8,56.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgkBZQgPgIgKgOQgKgNgFgRQgFgRAAgUQAAgSAFgRQAFgRALgOQAKgNAPgIQAQgIATAAQAWAAAPAIQAPAHAKAOQAKANAFARQAFASAAASQAAATgFARQgFARgKAOQgKAOgQAHQgPAIgVAAQgUAAgQgHgAgchIQgMAGgIAMQgHAMgEAOQgEAOAAAOQAAAPAEAOQAEAOAIAMQAHALAMAHQAMAHAQABQARgBAMgGQAMgHAIgMQAIgLAEgPQADgOAAgPQAAgOgDgOQgEgPgIgLQgIgMgMgHQgMgGgRgBQgQABgMAHg");
	this.shape_86.setTransform(264.5,53.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AAwBeIAAhZIhfAAIAABZIgRAAIAAi6IARAAIAABSIBfAAIAAhSIARAAIAAC6g");
	this.shape_87.setTransform(245.9,53.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("Ag0BeIAAi6IApAAQAPAAANAEQAOAEAJAKQAIAKAAASQAAARgJAKQgKALgQAFQALABAKAGQAJAFAGAJQAEAKAAAMQABAVgLAMQgLALgQAFQgQAFgSAAgAgkBOIAVAAQAMAAALgCQAMgEAIgIQAIgHAAgPQAAgRgIgIQgJgIgNgDQgLgDgOABIgRAAgAgkgKIAWAAQAMAAAJgDQALgDAGgIQAGgIABgOQAAgLgHgHQgFgHgJgDQgJgDgKAAIgbAAg");
	this.shape_88.setTransform(230,53.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("ABDBeIgUg0IheAAIgVA0IgQAAIBMi6IARAAIBMC6gAApAbIgphnIgpBnIBSAAg");
	this.shape_89.setTransform(213.5,53.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgHBeIAAirIg3AAIAAgPIB9AAIAAAPIg3AAIAACrg");
	this.shape_90.setTransform(198.3,53.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgXBUQgVgMgMgWQgMgVAAgdQAAgbAMgVQANgWAVgMQAWgNAcAAQAKAAALACQAKABAJAEIgBARQgJgFgLgCQgKgCgKAAQgYABgRAKQgRALgKASQgJASAAAWQAAAYAJASQAKASASAKQARAKAZABQAKAAAKgCQAJgCAKgEIABARQgJADgLABQgLACgKAAQgdAAgWgMg");
	this.shape_91.setTransform(183.7,53.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgkBZQgPgIgKgOQgKgNgFgRQgFgRAAgUQAAgSAFgRQAFgRALgOQAKgNAPgIQAQgIATAAQAWAAAPAIQAPAHAKAOQAKANAFARQAFASAAASQAAATgFARQgFARgKAOQgKAOgQAHQgPAIgVAAQgUAAgQgHgAgchIQgMAGgIAMQgHAMgEAOQgEAOAAAOQAAAPAEAOQAEAOAIAMQAHALAMAHQAMAHAQABQARgBAMgGQAMgHAIgMQAIgLAEgPQADgOAAgPQAAgOgDgOQgEgPgIgLQgIgMgMgHQgMgGgRgBQgQABgMAHg");
	this.shape_92.setTransform(165.6,53.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AAwBeIAAhZIhfAAIAABZIgRAAIAAi6IARAAIAABSIBfAAIAAhSIARAAIAAC6g");
	this.shape_93.setTransform(147,53.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("ABJB2IAAgxIiRAAIAAAxIgQAAIAAhAIAPAAQARgWAHgeQAHgdAAgiIAAg4IBqAAIAACrIAZAAIAABAgAgagzQAAAfgGAaQgHAbgOAVIBkAAIAAibIhJAAg");
	this.shape_94.setTransform(128.6,56.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgtBeIAAi6IBYAAIAAAPIhHAAIAABEIBDAAIAAAOIhDAAIAABJIBKAAIAAAQg");
	this.shape_95.setTransform(113.5,53.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AAxBeIAAijIheCjIgUAAIAAi6IARAAIAACiIBfiiIATAAIAAC6g");
	this.shape_96.setTransform(90,53.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgkBZQgPgIgKgOQgKgNgFgRQgFgRAAgUQAAgSAFgRQAFgRALgOQAKgNAPgIQAQgIATAAQAWAAAPAIQAPAHAKAOQAKANAFARQAFASAAASQAAATgFARQgFARgKAOQgKAOgQAHQgPAIgVAAQgUAAgQgHgAgchIQgMAGgIAMQgHAMgEAOQgEAOAAAOQAAAPAEAOQAEAOAIAMQAHALAMAHQAMAHAQABQARgBAMgGQAMgHAIgMQAIgLAEgPQADgOAAgPQAAgOgDgOQgEgPgIgLQgIgMgMgHQgMgGgRgBQgQABgMAHg");
	this.shape_97.setTransform(63.9,53.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AglBeQgJgBgHgDIABgSQAJAFAKACQALACAKAAQAMAAAKgEQALgEAIgJQAHgIAAgPQAAgNgFgHQgFgIgIgDQgIgEgJgBIgOgBIgGAAIgGAAIAAgOIAFAAIAGAAIAOgCQAHgCAIgEQAIgEAFgIQAFgHAAgMQAAgLgGgHQgGgHgJgDQgJgDgLAAQgJAAgLADQgKACgHAEIgDgQIAVgGQAMgCAJAAQAOAAANAFQANAEAIALQAIAKABARQAAAQgKAMQgKAMgSAEQANACAJAFQAJAGAFALQAFAKAAANQAAAQgIAMQgJAMgQAHQgPAGgUAAQgNAAgKgCg");
	this.shape_98.setTransform(47.1,53.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgyBeIAAi6IArAAQAQgBAOAHQANAFAHAMQAIAMAAARQAAATgJALQgIALgOAGQgOAFgPAAIgYAAIAABSgAghgCIAOAAQAOAAALgCQANgDAHgIQAHgIABgRQAAgSgLgJQgLgKgQAAIgdAAg");
	this.shape_99.setTransform(34.7,53.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("Ag2BeIAAi6IBhAAIAAAPIhQAAIAAA9IAeAAQAdAAARAOQAQAOAAAYQAAAQgGANQgGANgOAIQgOAHgXABgAglBOIAeAAQAUABAMgKQAMgJABgYQgBgTgMgKQgMgIgVAAIgdAAg");
	this.shape_100.setTransform(20.2,53.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgtBeIAAi7IBYAAIAAAQIhHAAIAABEIBDAAIAAAOIhDAAIAABJIBKAAIAAAQg");
	this.shape_101.setTransform(307.5,18);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgIBeIAAirIg2AAIAAgQIB9AAIAAAQIg3AAIAACrg");
	this.shape_102.setTransform(293.8,18);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgtBeIAAi7IBYAAIAAAQIhHAAIAABEIBDAAIAAAOIhDAAIAABJIBKAAIAAAQg");
	this.shape_103.setTransform(281.2,18);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("ABfBeIhXhgIAABgIgQAAIAAhgIhVBgIgYAAIBbhiIhRhZIAWAAIBNBYIAAhYIAQAAIAABYIBPhYIAVAAIhRBZIBaBig");
	this.shape_104.setTransform(260.7,18);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgkBZQgPgIgKgOQgKgNgFgRQgFgRAAgUQAAgSAFgRQAFgRALgOQAKgNAPgIQAQgIATAAQAWAAAPAIQAPAHAKAOQAKANAFARQAFASAAASQAAATgFARQgFARgKAOQgKAOgQAHQgPAIgVAAQgUAAgQgHgAgchIQgMAGgIAMQgHAMgEAOQgEAOAAAOQAAAPAEAOQAEAOAIAMQAHALAMAHQAMAHAQABQARgBAMgGQAMgHAIgMQAIgLAEgPQADgOAAgPQAAgOgDgOQgEgPgIgLQgIgMgMgHQgMgGgRgBQgQABgMAHg");
	this.shape_105.setTransform(239.1,18);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("ABOBeIAAiqIhFCqIgQAAIhGiqIAACqIgRAAIAAi7IAbAAIBECoIBDioIAaAAIAAC7g");
	this.shape_106.setTransform(217.5,18);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgtBeIAAi7IBYAAIAAAQIhHAAIAABEIBDAAIAAAOIhDAAIAABJIBKAAIAAAQg");
	this.shape_107.setTransform(192.2,18);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AArB5IhbhfIAABfIgRAAIAAi7IARAAIAABVIBUhVIAWAAIhaBYIBiBjgAgRhSIATgmIAUAAIgYAmg");
	this.shape_108.setTransform(178.4,15.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgIBeIAAirIg2AAIAAgQIB9AAIAAAQIg3AAIAACrg");
	this.shape_109.setTransform(155.3,18);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AArBeIhbheIAABeIgRAAIAAi7IARAAIAABWIBVhWIAVAAIhaBZIBiBig");
	this.shape_110.setTransform(142,18);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AAwBeIAAhZIhfAAIAABZIgRAAIAAi7IARAAIAABTIBfAAIAAhTIARAAIAAC7g");
	this.shape_111.setTransform(124,18);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgvBdIgJgBIACgPIAFACIAJAAQAHABAFgFQAFgEAFgIIAKgVIhFiIIATAAIA6B3IA8h3IASAAIhICOIgMAYQgGAKgIAGQgHAHgLgBIgJgBg");
	this.shape_112.setTransform(107.1,18.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AAvBeIAAirIhdAAIAACrIgRAAIAAi7IB/AAIAAC7g");
	this.shape_113.setTransform(90.3,18);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AghAIIAAgPIBDAAIAAAPg");
	this.shape_114.setTransform(77,18.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgtBeIAAi7IBYAAIAAAQIhHAAIAABEIBDAAIAAAOIhDAAIAABJIBKAAIAAAQg");
	this.shape_115.setTransform(66.6,18);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgkBZQgPgIgKgOQgKgNgFgRQgFgRAAgUQAAgSAFgRQAFgRALgOQAKgNAPgIQAQgIATAAQAWAAAPAIQAPAHAKAOQAKANAFARQAFASAAASQAAATgFARQgFARgKAOQgKAOgQAHQgPAIgVAAQgUAAgQgHgAgchIQgMAGgIAMQgHAMgEAOQgEAOAAAOQAAAPAEAOQAEAOAIAMQAHALAMAHQAMAHAQABQARgBAMgGQAMgHAIgMQAIgLAEgPQADgOAAgPQAAgOgDgOQgEgPgIgLQgIgMgMgHQgMgGgRgBQgQABgMAHg");
	this.shape_116.setTransform(42.4,18);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgXBUQgVgMgMgWQgMgVAAgdQAAgbAMgVQANgWAVgMQAWgNAcAAQAKAAALACQAKABAJAEIgBARQgJgFgLgCQgKgCgKAAQgYABgRAKQgRALgKASQgJASAAAWQAAAYAJASQAKASASAKQARAKAZABQAKAAAKgCQAJgCAKgEIABARQgJADgLABQgLACgKAAQgdAAgWgMg");
	this.shape_117.setTransform(24.7,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,329.8,252.6);


(lib.efra_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJALIAAgVIATAAIAAAVg");
	this.shape.setTransform(303.1,241);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABDBeIgUg0IheAAIgVA0IgQAAIBMi6IARAAIBMC6gAApAbIgphnIgpBnIBSAAg");
	this.shape_1.setTransform(290.8,232.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIBeIAAirIg2AAIAAgPIB9AAIAAAPIg3AAIAACrg");
	this.shape_2.setTransform(275.6,232.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhsBeIAAi6IARAAIAACrIBUAAIAAirIAPAAIAACrIBUAAIAAirIARAAIAAC6g");
	this.shape_3.setTransform(255.6,232.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgkBZQgPgIgKgOQgKgNgFgRQgFgRAAgUQAAgSAFgRQAFgRALgOQAKgNAPgIQAQgIATAAQAWAAAPAIQAPAHAKAOQAKANAFARQAFASAAASQAAATgFARQgFARgKAOQgKAOgQAHQgPAIgVAAQgUAAgQgHgAgchIQgMAGgIAMQgHAMgEAOQgEAOAAAOQAAAPAEAOQAEAOAIAMQAHALAMAHQAMAHAQABQARgBAMgGQAMgHAIgMQAIgLAEgPQADgOAAgPQAAgOgDgOQgEgPgIgLQgIgMgMgHQgMgGgRgBQgQABgMAHg");
	this.shape_4.setTransform(232.5,232.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAvBeIAAirIhdAAIAACrIgRAAIAAi6IB/AAIAAC6g");
	this.shape_5.setTransform(214,232.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AggAIIAAgPIBBAAIAAAPg");
	this.shape_6.setTransform(200.7,233.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgtBeIAAi6IBYAAIAAAPIhHAAIAABEIBDAAIAAAOIhDAAIAABKIBKAAIAAAPg");
	this.shape_7.setTransform(190.3,232.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABDBeIgUg0IheAAIgVA0IgQAAIBMi6IARAAIBMC6gAApAbIgphnIgpBnIBSAAg");
	this.shape_8.setTransform(167.2,232.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHBeIAAirIg3AAIAAgPIB9AAIAAAPIg3AAIAACrg");
	this.shape_9.setTransform(152,232.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABDBeIgUg0IheAAIgVA0IgQAAIBMi6IARAAIBMC6gAApAbIgphnIgpBnIBSAAg");
	this.shape_10.setTransform(136.7,232.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhsBeIAAi6IARAAIAACrIBUAAIAAirIAPAAIAACrIBUAAIAAirIARAAIAAC6g");
	this.shape_11.setTransform(114.7,232.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ABDBeIgUg0IheAAIgVA0IgQAAIBMi6IARAAIBMC6gAApAbIgphnIgpBnIBSAAg");
	this.shape_12.setTransform(92.7,232.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag1BeIAAi6IArAAQAOgBANAFQAOAEAJALQAIAKAAARQAAARgKAKQgJALgQAFQAMABAJAGQAJAFAGAJQAEAKAAAMQAAAVgKAMQgKALgRAFQgQAFgSAAgAgkBPIAUAAQANAAALgDQAMgEAIgIQAIgHAAgPQAAgRgJgIQgIgIgNgDQgMgDgNABIgRAAgAgkgKIAWAAQAMAAAJgDQALgEAGgHQAHgIAAgOQgBgLgFgHQgGgHgKgDQgIgDgKAAIgbAAg");
	this.shape_13.setTransform(77.1,232.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ABDBeIgUg0IheAAIgVA0IgQAAIBMi6IARAAIBMC6gAApAbIgphnIgpBnIBSAAg");
	this.shape_14.setTransform(53.3,232.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAwBeIAAhZIhfAAIAABZIgRAAIAAi6IARAAIAABSIBfAAIAAhSIARAAIAAC6g");
	this.shape_15.setTransform(35.7,232.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgtBeIAAi7IBYAAIAAAQIhHAAIAABEIBDAAIAAAOIhDAAIAABJIBKAAIAAAQg");
	this.shape_16.setTransform(323.2,197);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgIBeIAAirIg2AAIAAgQIB9AAIAAAQIg3AAIAACrg");
	this.shape_17.setTransform(309.5,197);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ABDBeIgUg1IheAAIgVA1IgQAAIBMi7IARAAIBMC7gAApAbIgphnIgpBnIBSAAg");
	this.shape_18.setTransform(294.3,197);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag0BeIAAi7IApAAQAPABAOAEQANAEAJAKQAIAKAAASQAAARgJAKQgKAMgQAEQALABAKAGQAJAFAGAJQAEAKABAMQAAAVgLAMQgLALgQAFQgQAEgRABgAgjBOIAUAAQAMAAALgCQAMgDAIgIQAIgJAAgPQAAgQgIgIQgJgJgNgCQgLgDgOABIgQAAgAgjgKIAVAAQAMAAAJgDQAKgDAHgIQAGgIAAgOQABgLgHgIQgFgGgJgDQgJgDgKAAIgaAAg");
	this.shape_19.setTransform(278.7,197);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAwBeIAAijIhdCjIgTAAIAAi7IARAAIAACjIBdijIATAAIAAC7g");
	this.shape_20.setTransform(261.9,197);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag2BeIAAi7IBhAAIAAAQIhQAAIAAA9IAeAAQAdAAARAOQAQAOAAAYQAAAQgGANQgGANgOAIQgOAHgXABgAglBOIAeAAQAUABAMgKQAMgJABgYQgBgTgMgKQgMgIgVAAIgdAAg");
	this.shape_21.setTransform(245.9,197);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgkBZQgPgIgKgOQgKgNgFgRQgFgRAAgUQAAgSAFgRQAFgRALgOQAKgNAPgIQAQgIATAAQAWAAAPAIQAPAHAKAOQAKANAFARQAFASAAASQAAATgFARQgFARgKAOQgKAOgQAHQgPAIgVAAQgUAAgQgHgAgchIQgMAGgIAMQgHAMgEAOQgEAOAAAOQAAAPAEAOQAEAOAIAMQAHALAMAHQAMAHAQABQARgBAMgGQAMgHAIgMQAIgLAEgPQADgOAAgPQAAgOgDgOQgEgPgIgLQgIgMgMgHQgMgGgRgBQgQABgMAHg");
	this.shape_22.setTransform(228.3,197);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("ABJB2IAAgxIiRAAIAAAxIgQAAIAAhAIAPAAQARgWAHgeQAHgdAAgiIAAg4IBqAAIAACrIAZAAIAABAgAgagzQAAAfgGAaQgHAbgOAVIBkAAIAAibIhJAAg");
	this.shape_23.setTransform(209.2,199.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAxBeIAAijIheCjIgUAAIAAi7IARAAIAACjIBfijIATAAIAAC7g");
	this.shape_24.setTransform(183.6,197);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgtBeIAAi7IBbAAIAAAQIhKAAIAACrg");
	this.shape_25.setTransform(169.7,197);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgtBeIAAi7IBYAAIAAAQIhHAAIAABEIBDAAIAAAOIhDAAIAABJIBKAAIAAAQg");
	this.shape_26.setTransform(149.2,197);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AArB5IhbhfIAABfIgRAAIAAi7IARAAIAABVIBVhVIAVAAIhaBYIBiBjgAgRhSIATgmIAUAAIgYAmg");
	this.shape_27.setTransform(135.4,194.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAxBeIAAijIheCjIgTAAIAAi7IARAAIAACjIBdijIATAAIAAC7g");
	this.shape_28.setTransform(110,197);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgyBeIAAi7IArAAQAQAAAOAHQANAFAHAMQAIAMAAARQAAATgJALQgIALgOAFQgOAGgPAAIgYAAIAABSgAghgCIAOAAQAOAAALgCQANgDAHgIQAHgIABgRQAAgSgLgJQgLgKgQAAIgdAAg");
	this.shape_29.setTransform(95,197);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgvBeIgJgCIABgPIAHACIAIAAQAHABAFgFQAFgEAFgJIAKgUIhFiIIATAAIA6B3IA8h3IASAAIhICOIgMAYQgGAKgIAGQgHAHgLAAIgJgBg");
	this.shape_30.setTransform(79.5,197.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgHBeIAAirIg3AAIAAgQIB9AAIAAAQIg3AAIAACrg");
	this.shape_31.setTransform(64.9,197);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AArBeIhbheIAABeIgRAAIAAi7IARAAIAABWIBUhWIAWAAIhaBZIBiBig");
	this.shape_32.setTransform(51.6,197);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("ABDBeIgUg1IheAAIgVA1IgQAAIBMi7IARAAIBMC7gAApAbIgphnIgpBnIBSAAg");
	this.shape_33.setTransform(33.9,197);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgIBgIAAgWQgVAAgPgGQgQgGgLgLQgKgLgFgNQgFgOAAgPQAAgRAFgOQAFgNAKgLQALgKAQgGQAQgGAUAAIAAgQIAQAAIAAAQQAVAAAQAGQAPAGALAKQAKAKAFAOQAGAOAAARQAAAPgGAOQgFAOgKALQgLAKgPAGQgQAGgVAAIAAAWgAAIA8QAUAAAOgIQAPgHAJgOQAIgOAAgTQAAgUgIgOQgJgOgOgHQgPgIgUAAgAgqg5QgPAHgIAOQgIAOAAAUQAAATAIAOQAJAOAOAHQAPAIATAAIAAh9QgTAAgPAIg");
	this.shape_34.setTransform(14.8,197);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAwBeIAAijIhdCjIgTAAIAAi7IAQAAIAACjIBfijIASAAIAAC7g");
	this.shape_35.setTransform(305,161.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AhsBeIAAi7IARAAIAACrIBUAAIAAirIAPAAIAACrIBUAAIAAirIARAAIAAC7g");
	this.shape_36.setTransform(282.6,161.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("ABDBeIgUg1IheAAIgVA1IgQAAIBMi7IARAAIBMC7gAApAbIgphoIgpBoIBSAAg");
	this.shape_37.setTransform(260.6,161.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("Ag1BeIAAi7IArAAQAOABANAEQAOAEAJAKQAIALAAARQAAARgKAKQgJAMgQADQAMADAJAFQAJAFAGAKQAEAJAAAMQAAAVgKAMQgKAMgRAEQgQAEgSABgAgkBOIAUAAQANAAALgCQAMgEAIgHQAIgJAAgPQAAgPgJgJQgIgJgNgCQgMgDgNABIgRAAgAgkgKIAWAAQAMAAAJgDQALgEAGgHQAHgIAAgOQgBgLgFgIQgGgGgKgDQgIgDgKAAIgbAAg");
	this.shape_38.setTransform(245,161.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgtBeIAAi7IBYAAIAAAQIhHAAIAABFIBDAAIAAANIhDAAIAABJIBKAAIAAAQg");
	this.shape_39.setTransform(223.8,161.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgIBeIAAirIg2AAIAAgQIB9AAIAAAQIg3AAIAACrg");
	this.shape_40.setTransform(210.1,161.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAwBeIAAijIhdCjIgUAAIAAi7IARAAIAACjIBfijIATAAIAAC7g");
	this.shape_41.setTransform(194.5,161.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgXBUQgVgMgMgWQgMgVAAgdQAAgbAMgVQANgWAVgMQAWgNAcAAQAKAAALACQAKABAJAEIgBARQgJgFgLgCQgKgCgKAAQgYABgRAKQgRALgKASQgJASAAAWQAAAYAJASQAKASASAKQARAKAZABQAKAAAKgCQAJgCAKgEIABARQgJADgLABQgLACgKAAQgdAAgWgMg");
	this.shape_42.setTransform(177.5,161.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAxBeIAAijIheCjIgTAAIAAi7IARAAIAACjIBdijIATAAIAAC7g");
	this.shape_43.setTransform(152.7,161.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgtBeIAAi7IBYAAIAAAQIhHAAIAABFIBDAAIAAANIhDAAIAABJIBKAAIAAAQg");
	this.shape_44.setTransform(130.3,161.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAsBeIAAhSIgMACIgPADIgPABQgKAAgLgCQgLgBgJgFQgJgGgFgKQgGgLAAgVIAAg3IARAAIAAA4QgBAXALAJQALAIAYAAIAQgBIAPgCIAKgCIAAhbIAQAAIAAC7g");
	this.shape_45.setTransform(114.8,161.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("ABDBeIgUg1IheAAIgVA1IgQAAIBMi7IARAAIBMC7gAApAbIgphoIgpBoIBSAAg");
	this.shape_46.setTransform(98.3,161.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("ABJB2IAAgxIiRAAIAAAxIgQAAIAAhAIAPAAQARgWAHgeQAHgdAAgiIAAg4IBqAAIAACrIAZAAIAABAgAgagzQAAAfgGAaQgHAbgOAVIBkAAIAAibIhJAAg");
	this.shape_47.setTransform(80.3,163.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAwBeIAAhZIhfAAIAABZIgRAAIAAi7IARAAIAABTIBfAAIAAhTIARAAIAAC7g");
	this.shape_48.setTransform(62.2,161.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("ABDBeIgUg1IheAAIgVA1IgQAAIBMi7IARAAIBMC7gAApAbIgphoIgpBoIBSAAg");
	this.shape_49.setTransform(44.6,161.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgXBUQgVgMgMgWQgMgVAAgdQAAgbAMgVQANgWAVgMQAWgNAcAAQAKAAALACQAKABAJAEIgBARQgJgFgLgCQgKgCgKAAQgYABgRAKQgRALgKASQgJASAAAWQAAAYAJASQAKASASAKQARAKAZABQAKAAAKgCQAJgCAKgEIABARQgJADgLABQgLACgKAAQgdAAgWgMg");
	this.shape_50.setTransform(28,161.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgkBZQgPgIgKgOQgKgNgFgRQgFgRAAgUQAAgSAFgRQAFgRALgOQAKgNAPgIQAQgIATAAQAWAAAPAIQAPAHAKAOQAKANAFARQAFASAAASQAAATgFARQgFARgKAOQgKAOgQAHQgPAIgVAAQgUAAgQgHgAgchIQgMAGgIAMQgHAMgEAOQgEAOAAAOQAAAPAEAOQAEAOAIAMQAHALAMAHQAMAHAQABQARgBAMgGQAMgHAIgMQAIgLAEgPQADgOAAgPQAAgOgDgOQgEgPgIgLQgIgMgMgHQgMgGgRgBQgQABgMAHg");
	this.shape_51.setTransform(266.6,125.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AArBdIhbhdIAABdIgRAAIAAi6IARAAIAABWIBVhWIAVAAIhaBYIBiBig");
	this.shape_52.setTransform(250.2,125.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgXBUQgVgMgMgWQgMgVAAgdQAAgbAMgVQANgWAVgMQAWgNAcAAQAKAAALACQAKABAJAEIgBARQgJgFgLgCQgKgCgKAAQgYABgRAKQgRALgKASQgJASAAAWQAAAYAJASQAKASASAKQARAKAZABQAKAAAKgCQAJgCAKgEIABARQgJADgLABQgLACgKAAQgdAAgWgMg");
	this.shape_53.setTransform(233.1,125.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAwBdIAAhYIhfAAIAABYIgRAAIAAi6IARAAIAABUIBfAAIAAhUIARAAIAAC6g");
	this.shape_54.setTransform(215.8,125.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgkBZQgPgIgKgOQgKgNgFgRQgFgRAAgUQAAgSAFgRQAFgRALgOQAKgNAPgIQAQgIATAAQAWAAAPAIQAPAHAKAOQAKANAFARQAFASAAASQAAATgFARQgFARgKAOQgKAOgQAHQgPAIgVAAQgUAAgQgHgAgchIQgMAGgIAMQgHAMgEAOQgEAOAAAOQAAAPAEAOQAEAOAIAMQAHALAMAHQAMAHAQABQARgBAMgGQAMgHAIgMQAIgLAEgPQADgOAAgPQAAgOgDgOQgEgPgIgLQgIgMgMgHQgMgGgRgBQgQABgMAHg");
	this.shape_55.setTransform(197.1,125.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgyBdIAAi6IArAAQAQABAOAFQANAHAHALQAIALAAASQAAASgJAMQgIALgOAGQgOAFgPAAIgYAAIAABRgAghgCIAOAAQAOAAALgDQAMgCAIgIQAHgIABgRQAAgSgLgKQgLgJgQAAIgdAAg");
	this.shape_56.setTransform(181.5,125.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgIBdIAAiqIg2AAIAAgQIB9AAIAAAQIg3AAIAACqg");
	this.shape_57.setTransform(167.4,125.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AArBdIhbhdIAABdIgRAAIAAi6IARAAIAABWIBVhWIAVAAIhaBYIBiBig");
	this.shape_58.setTransform(154,125.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgtBdIAAi6IBYAAIAAAQIhHAAIAABFIBDAAIAAANIhDAAIAABKIBKAAIAAAOg");
	this.shape_59.setTransform(139,125.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AhEBdQgFAAgEgCIABgOIAIACIAIABQAPAAAHgSQAIgRACgnQACglAAg/IBoAAIAAC6IgRAAIAAiqIhGAAIgBBMQgCAfgFAWQgEAWgKAKQgKALgSAAIgJgBg");
	this.shape_60.setTransform(121.6,125.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgtBdIAAi6IBYAAIAAAQIhHAAIAABFIBDAAIAAANIhDAAIAABKIBKAAIAAAOg");
	this.shape_61.setTransform(107.6,125.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgkBZQgPgIgKgOQgKgNgFgRQgFgRAAgUQAAgSAFgRQAFgRALgOQAKgNAPgIQAQgIATAAQAWAAAPAIQAPAHAKAOQAKANAFARQAFASAAASQAAATgFARQgFARgKAOQgKAOgQAHQgPAIgVAAQgUAAgQgHgAgchIQgMAGgIAMQgHAMgEAOQgEAOAAAOQAAAPAEAOQAEAOAIAMQAHALAMAHQAMAHAQABQARgBAMgGQAMgHAIgMQAIgLAEgPQADgOAAgPQAAgOgDgOQgEgPgIgLQgIgMgMgHQgMgGgRgBQgQABgMAHg");
	this.shape_62.setTransform(83.4,125.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgXBUQgVgMgMgWQgMgVAAgdQAAgbAMgVQANgWAVgMQAWgNAcAAQAKAAALACQAKABAJAEIgBARQgJgFgLgCQgKgCgKAAQgYABgRAKQgRALgKASQgJASAAAWQAAAYAJASQAKASASAKQARAKAZABQAKAAAKgCQAJgCAKgEIABARQgJADgLABQgLACgKAAQgdAAgWgMg");
	this.shape_63.setTransform(65.7,125.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgkBZQgPgIgKgOQgKgNgFgRQgFgRAAgUQAAgSAFgRQAFgRALgOQAKgNAPgIQAQgIATAAQAWAAAPAIQAPAHAKAOQAKANAFARQAFASAAASQAAATgFARQgFARgKAOQgKAOgQAHQgPAIgVAAQgUAAgQgHgAgchIQgMAGgIAMQgHAMgEAOQgEAOAAAOQAAAPAEAOQAEAOAIAMQAHALAMAHQAMAHAQABQARgBAMgGQAMgHAIgMQAIgLAEgPQADgOAAgPQAAgOgDgOQgEgPgIgLQgIgMgMgHQgMgGgRgBQgQABgMAHg");
	this.shape_64.setTransform(321.7,89.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgIBdIAAiqIg2AAIAAgPIB9AAIAAAPIg3AAIAACqg");
	this.shape_65.setTransform(305.5,89.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgkBZQgPgIgKgOQgKgNgFgRQgFgRAAgUQAAgSAFgRQAFgRALgOQAKgNAPgIQAQgIATAAQAWAAAPAIQAPAHAKAOQAKANAFARQAFASAAASQAAATgFARQgFARgKAOQgKAOgQAHQgPAIgVAAQgUAAgQgHgAgchIQgMAGgIAMQgHAMgEAOQgEAOAAAOQAAAPAEAOQAEAOAIAMQAHALAMAHQAMAHAQABQARgBAMgGQAMgHAIgMQAIgLAEgPQADgOAAgPQAAgOgDgOQgEgPgIgLQgIgMgMgHQgMgGgRgBQgQABgMAHg");
	this.shape_66.setTransform(289.1,89.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AArBdIhbhdIAABdIgRAAIAAi5IARAAIAABVIBVhVIAVAAIhaBXIBiBig");
	this.shape_67.setTransform(272.7,89.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgXBUQgVgMgMgWQgMgVAAgdQAAgbAMgVQANgWAVgMQAWgNAcAAQAKAAALACQAKABAJAEIgBARQgJgFgLgCQgKgCgKAAQgYABgRAKQgRALgKASQgJASAAAWQAAAYAJASQAKASASAKQARAKAZABQAKAAAKgCQAJgCAKgEIABARQgJADgLABQgLACgKAAQgdAAgWgMg");
	this.shape_68.setTransform(255.7,89.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AAwBdIAAhYIhfAAIAABYIgRAAIAAi5IARAAIAABTIBfAAIAAhTIARAAIAAC5g");
	this.shape_69.setTransform(238.3,89.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgtBdIAAi5IBYAAIAAAPIhHAAIAABFIBDAAIAAANIhDAAIAABKIBKAAIAAAOg");
	this.shape_70.setTransform(223.4,89.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgIBdIAAiqIg2AAIAAgPIB9AAIAAAPIg3AAIAACqg");
	this.shape_71.setTransform(209.8,89.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AhsBdIAAi5IARAAIAACrIBUAAIAAirIAPAAIAACrIBUAAIAAirIARAAIAAC5g");
	this.shape_72.setTransform(189.8,89.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgkBZQgPgIgKgOQgKgNgFgRQgFgRAAgUQAAgSAFgRQAFgRALgOQAKgNAPgIQAQgIATAAQAWAAAPAIQAPAHAKAOQAKANAFARQAFASAAASQAAATgFARQgFARgKAOQgKAOgQAHQgPAIgVAAQgUAAgQgHgAgchIQgMAGgIAMQgHAMgEAOQgEAOAAAOQAAAPAEAOQAEAOAIAMQAHALAMAHQAMAHAQABQARgBAMgGQAMgHAIgMQAIgLAEgPQADgOAAgPQAAgOgDgOQgEgPgIgLQgIgMgMgHQgMgGgRgBQgQABgMAHg");
	this.shape_73.setTransform(166.7,89.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AAvBdIAAiqIhdAAIAACqIgRAAIAAi5IB/AAIAAC5g");
	this.shape_74.setTransform(148.2,89.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgtBdIAAi5IBYAAIAAAPIhHAAIAABFIBDAAIAAANIhDAAIAABKIBKAAIAAAOg");
	this.shape_75.setTransform(126,89.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgIBdIAAiqIg2AAIAAgPIB9AAIAAAPIg3AAIAACqg");
	this.shape_76.setTransform(112.3,89.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAwBdIAAiiIhdCiIgTAAIAAi5IARAAIAACjIBdijIATAAIAAC5g");
	this.shape_77.setTransform(96.7,89.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAwBdIAAhYIhfAAIAABYIgRAAIAAi5IARAAIAABTIBfAAIAAhTIARAAIAAC5g");
	this.shape_78.setTransform(78.8,89.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgtBdIAAi5IBYAAIAAAPIhHAAIAABFIBDAAIAAANIhDAAIAABKIBKAAIAAAOg");
	this.shape_79.setTransform(63.9,89.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("ABOBdIAAiqIhFCqIgQAAIhGiqIAACqIgRAAIAAi5IAbAAIBECmIBDimIAaAAIAAC5g");
	this.shape_80.setTransform(44.9,89.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("ABDBdIgUgzIheAAIgVAzIgQAAIBMi5IARAAIBMC5gAApAbIgphoIgpBoIBSAAg");
	this.shape_81.setTransform(24.3,89.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AglBeQgJgBgHgDIABgSQAJAFAKACQALACAKAAQAMAAAKgEQALgEAIgJQAHgIAAgPQAAgNgFgHQgFgIgIgDQgIgEgJgBIgOgBIgGAAIgGAAIAAgOIAFAAIAGAAIAOgCQAHgCAIgEQAIgEAFgIQAFgHAAgMQAAgLgGgHQgGgHgJgDQgJgDgLAAQgJAAgLADQgKACgHAEIgDgQIAVgGQAMgCAJAAQAOAAANAFQANAEAIALQAIAKABARQAAAQgKAMQgKAMgSAEQANACAJAFQAJAGAFALQAFAKAAANQAAAQgIAMQgJAMgQAHQgPAGgUAAQgNAAgKgCg");
	this.shape_82.setTransform(8.6,89.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgkBZQgPgIgKgOQgKgNgFgRQgFgRAAgUQAAgSAFgRQAFgRALgOQAKgNAPgIQAQgIATAAQAWAAAPAIQAPAHAKAOQAKANAFARQAFASAAASQAAATgFARQgFARgKAOQgKAOgQAHQgPAIgVAAQgUAAgQgHgAgchIQgMAGgIAMQgHAMgEAOQgEAOAAAOQAAAPAEAOQAEAOAIAMQAHALAMAHQAMAHAQABQARgBAMgGQAMgHAIgMQAIgLAEgPQADgOAAgPQAAgOgDgOQgEgPgIgLQgIgMgMgHQgMgGgRgBQgQABgMAHg");
	this.shape_83.setTransform(291.2,53.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgtBeIAAi6IBbAAIAAAPIhKAAIAACrg");
	this.shape_84.setTransform(276.6,53.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgtBeIAAi6IBYAAIAAAPIhHAAIAABEIBDAAIAAAOIhDAAIAABJIBKAAIAAAQg");
	this.shape_85.setTransform(256.1,53.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AArB5IhbhfIAABfIgRAAIAAi6IARAAIAABUIBVhUIAVAAIhaBXIBiBjgAgQhSIATglIATAAIgZAlg");
	this.shape_86.setTransform(242.3,51.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgkBZQgPgIgKgOQgKgNgFgRQgFgRAAgUQAAgSAFgRQAFgRALgOQAKgNAPgIQAQgIATAAQAWAAAPAIQAPAHAKAOQAKANAFARQAFASAAASQAAATgFARQgFARgKAOQgKAOgQAHQgPAIgVAAQgUAAgQgHgAgchIQgMAGgIAMQgHAMgEAOQgEAOAAAOQAAAPAEAOQAEAOAIAMQAHALAMAHQAMAHAQABQARgBAMgGQAMgHAIgMQAIgLAEgPQADgOAAgPQAAgOgDgOQgEgPgIgLQgIgMgMgHQgMgGgRgBQgQABgMAHg");
	this.shape_87.setTransform(216.1,53.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AAwBeIAAhZIhfAAIAABZIgRAAIAAi6IARAAIAABSIBfAAIAAhSIARAAIAAC6g");
	this.shape_88.setTransform(197.5,53.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("Ag1BeIAAi6IAqAAQAPAAANAEQAOAEAJAKQAIAKAAASQAAARgJAKQgKALgQAFQALABAKAGQAJAFAGAJQAEAKAAAMQAAAVgKAMQgKALgRAFQgQAFgSAAgAgkBOIAUAAQANAAALgCQAMgEAIgIQAIgHAAgPQAAgRgJgIQgIgIgNgDQgLgDgOABIgRAAgAgkgKIAWAAQAMAAAJgDQAKgDAHgIQAHgIAAgOQgBgLgFgHQgGgHgKgDQgJgDgJAAIgbAAg");
	this.shape_89.setTransform(181.6,53.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("ABDBeIgUg0IheAAIgVA0IgQAAIBMi6IARAAIBMC6gAApAbIgphnIgpBnIBSAAg");
	this.shape_90.setTransform(165.2,53.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgHBeIAAirIg3AAIAAgPIB9AAIAAAPIg3AAIAACrg");
	this.shape_91.setTransform(150,53.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgXBUQgVgMgMgWQgMgVAAgdQAAgbAMgVQANgWAVgMQAWgNAcAAQAKAAALACQAKABAJAEIgBARQgJgFgLgCQgKgCgKAAQgYABgRAKQgRALgKASQgJASAAAWQAAAYAJASQAKASASAKQARAKAZABQAKAAAKgCQAJgCAKgEIABARQgJADgLABQgLACgKAAQgdAAgWgMg");
	this.shape_92.setTransform(135.4,53.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgkBZQgPgIgKgOQgKgNgFgRQgFgRAAgUQAAgSAFgRQAFgRALgOQAKgNAPgIQAQgIATAAQAWAAAPAIQAPAHAKAOQAKANAFARQAFASAAASQAAATgFARQgFARgKAOQgKAOgQAHQgPAIgVAAQgUAAgQgHgAgchIQgMAGgIAMQgHAMgEAOQgEAOAAAOQAAAPAEAOQAEAOAIAMQAHALAMAHQAMAHAQABQARgBAMgGQAMgHAIgMQAIgLAEgPQADgOAAgPQAAgOgDgOQgEgPgIgLQgIgMgMgHQgMgGgRgBQgQABgMAHg");
	this.shape_93.setTransform(117.2,53.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AAwBeIAAhZIhfAAIAABZIgRAAIAAi6IARAAIAABSIBfAAIAAhSIARAAIAAC6g");
	this.shape_94.setTransform(98.6,53.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("ABJB2IAAgxIiRAAIAAAxIgQAAIAAhAIAPAAQARgWAHgeQAHgdAAgiIAAg4IBqAAIAACrIAZAAIAABAgAgagzQAAAfgGAaQgHAbgOAVIBkAAIAAibIhJAAg");
	this.shape_95.setTransform(80.3,56.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgtBeIAAi6IBYAAIAAAPIhHAAIAABEIBDAAIAAAOIhDAAIAABJIBKAAIAAAQg");
	this.shape_96.setTransform(65.1,53.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AAxBeIAAijIheCjIgUAAIAAi6IASAAIAACiIBdiiIAUAAIAAC6g");
	this.shape_97.setTransform(41.7,53.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgkBZQgPgIgKgOQgKgNgFgRQgFgRAAgUQAAgSAFgRQAFgRALgOQAKgNAPgIQAQgIATAAQAWAAAPAIQAPAHAKAOQAKANAFARQAFASAAASQAAATgFARQgFARgKAOQgKAOgQAHQgPAIgVAAQgUAAgQgHgAgchIQgMAGgIAMQgHAMgEAOQgEAOAAAOQAAAPAEAOQAEAOAIAMQAHALAMAHQAMAHAQABQARgBAMgGQAMgHAIgMQAIgLAEgPQADgOAAgPQAAgOgDgOQgEgPgIgLQgIgMgMgHQgMgGgRgBQgQABgMAHg");
	this.shape_98.setTransform(310.9,18);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AAwBeIAAhZIhfAAIAABZIgRAAIAAi7IARAAIAABTIBfAAIAAhTIARAAIAAC7g");
	this.shape_99.setTransform(292.3,18);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgXBUQgVgMgMgWQgMgVAAgdQAAgbAMgVQANgWAVgMQAWgNAcAAQAKAAALACQAKABAJAEIgBARQgJgFgLgCQgKgCgKAAQgYABgRAKQgRALgKASQgJASAAAWQAAAYAJASQAKASASAKQARAKAZABQAKAAAKgCQAJgCAKgEIABARQgJADgLABQgLACgKAAQgdAAgWgMg");
	this.shape_100.setTransform(275.4,18);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgtBeIAAi7IBYAAIAAAQIhHAAIAABEIBDAAIAAAOIhDAAIAABJIBKAAIAAAQg");
	this.shape_101.setTransform(261,18);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AhEBdQgFAAgEgCIABgOIAIACIAIAAQAPABAHgSQAIgRACgnQACglAAg/IBoAAIAAC7IgRAAIAAirIhGAAIgBBLQgCAggFAWQgEAVgKAMQgKALgSgBIgJgBg");
	this.shape_102.setTransform(243.6,18.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("ABDBeIgUg1IheAAIgVA1IgQAAIBMi7IARAAIBMC7gAApAbIgphnIgpBnIBSAAg");
	this.shape_103.setTransform(219.5,18);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AguBeIAAi7IBdAAIAAAQIhMAAIAACrg");
	this.shape_104.setTransform(206,18);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgvBdIgKgBIACgPIAGACIAJAAQAHABAFgFQAFgEAFgIIALgVIhGiIIATAAIA7B3IA7h3IASAAIhICOIgMAYQgGAKgIAGQgHAHgLgBIgJgBg");
	this.shape_105.setTransform(190.9,18.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AhEBdQgFAAgEgCIABgOIAIACIAIAAQAPABAHgSQAIgRACgnQACglAAg/IBoAAIAAC7IgRAAIAAirIhGAAIgBBLQgCAggFAWQgEAVgKAMQgKALgSgBIgJgBg");
	this.shape_106.setTransform(172.7,18.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgXBUQgVgMgMgWQgMgVAAgdQAAgbAMgVQANgWAVgMQAWgNAcAAQAKAAALACQAKABAJAEIgBARQgJgFgLgCQgKgCgKAAQgYABgRAKQgRALgKASQgJASAAAWQAAAYAJASQAKASASAKQARAKAZABQAKAAAKgCQAJgCAKgEIABARQgJADgLABQgLACgKAAQgdAAgWgMg");
	this.shape_107.setTransform(156.6,18);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgvBdIgJgBIABgPIAHACIAIAAQAHABAFgFQAFgEAFgIIAKgVIhFiIIATAAIA6B3IA8h3IASAAIhICOIgMAYQgGAKgIAGQgHAHgLgBIgJgBg");
	this.shape_108.setTransform(140.2,18.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("ABDBeIgUg1IheAAIgVA1IgQAAIBMi7IARAAIBMC7gAApAbIgphnIgpBnIBSAAg");
	this.shape_109.setTransform(116.2,18);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("ABDBeIgUg1IheAAIgVA1IgQAAIBMi7IARAAIBMC7gAApAbIgphnIgpBnIBSAAg");
	this.shape_110.setTransform(99,18);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("Ag0BeIAAi7IApAAQAPABAOAEQANAEAIAKQAJAKAAASQAAARgJAKQgKAMgQADQALACAKAGQAJAFAFAKQAFAJABAMQAAAVgLAMQgLAMgQAEQgQAEgRABgAgjBOIAUAAQAMAAALgCQAMgEAIgHQAIgJAAgPQAAgPgIgJQgJgJgNgCQgLgDgOABIgQAAgAgjgKIAVAAQAMAAAJgDQAKgDAHgIQAGgIABgOQAAgLgHgIQgFgGgJgDQgJgDgKAAIgaAAg");
	this.shape_111.setTransform(83.4,18);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgkBZQgPgIgKgOQgKgNgFgRQgFgRAAgUQAAgSAFgRQAFgRALgOQAKgNAPgIQAQgIATAAQAWAAAPAIQAPAHAKAOQAKANAFARQAFASAAASQAAATgFARQgFARgKAOQgKAOgQAHQgPAIgVAAQgUAAgQgHgAgchIQgMAGgIAMQgHAMgEAOQgEAOAAAOQAAAPAEAOQAEAOAIAMQAHALAMAHQAMAHAQABQARgBAMgGQAMgHAIgMQAIgLAEgPQADgOAAgPQAAgOgDgOQgEgPgIgLQgIgMgMgHQgMgGgRgBQgQABgMAHg");
	this.shape_112.setTransform(65.8,18);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgkBZQgPgIgKgOQgKgNgFgRQgFgRAAgUQAAgSAFgRQAFgRALgOQAKgNAPgIQAQgIATAAQAWAAAPAIQAPAHAKAOQAKANAFARQAFASAAASQAAATgFARQgFARgKAOQgKAOgQAHQgPAIgVAAQgUAAgQgHgAgchIQgMAGgIAMQgHAMgEAOQgEAOAAAOQAAAPAEAOQAEAOAIAMQAHALAMAHQAMAHAQABQARgBAMgGQAMgHAIgMQAIgLAEgPQADgOAAgPQAAgOgDgOQgEgPgIgLQgIgMgMgHQgMgGgRgBQgQABgMAHg");
	this.shape_113.setTransform(39,18);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgXBUQgVgMgMgWQgMgVAAgdQAAgbAMgVQANgWAVgMQAWgNAcAAQAKAAALACQAKABAJAEIgBARQgJgFgLgCQgKgCgKAAQgYABgRAKQgRALgKASQgJASAAAWQAAAYAJASQAKASASAKQARAKAZABQAKAAAKgCQAJgCAKgEIABARQgJADgLABQgLACgKAAQgdAAgWgMg");
	this.shape_114.setTransform(21.4,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,333.6,252.6);


(lib.circle_topmenu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#EC1C24").ss(5.7).p("ADBAAQAABQg4A5Qg5A4hQAAQhPAAg5g4Qg5g5AAhQQAAhPA5g5QA5g5BPAAQBQAAA5A5QA4A5AABPg");
	this.shape.setTransform(19.4,19.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#929497").s().p("Ag2A3QgXgXAAggQAAgfAXgXQAXgXAfAAQAhAAAWAXQAXAXAAAfQAAAggXAXQgWAXghAAQgfAAgXgXg");
	this.shape_1.setTransform(19.4,19.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.8,-2.8,44.3,44.3);


(lib.circle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA2127").s().p("AsTdKQlriakZkYQkYkZialrQifl4AAmcQAAmbCfl4QCalrEYkZQEZkYFriaQF4ifGbAAQGcAAF4CfQFsCaEYEYQEYEZCaFrQCfF4AAGbQAAGcifF4QiaFrkYEZQkYEYlsCaQl4CfmcAAQmbAAl4ifg");
	this.shape.setTransform(202.5,202.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.circle, new cjs.Rectangle(0,0,405,405), null);


(lib.animated_outline_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// Layer 8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_74 = new cjs.Graphics().p("AqNELQhuAAhOhOQhOhPAAhuQAAhuBOhOQBOhOBuAAIUbAAQBuAABOBOQBOBOAABuQAABuhOBPQhOBOhuAAg");
	var mask_graphics_75 = new cjs.Graphics().p("As0ELQiKAAhihOQhihPAAhuQAAhuBihOQBihOCKAAIZpAAQCKAABiBOQBiBOAABuQAABuhiBPQhiBOiKAAg");
	var mask_graphics_76 = new cjs.Graphics().p("AvbELQinAAh1hOQh3hPABhuQgBhuB3hOQB1hOCnAAIe3AAQCmAAB3BOQB1BOABBuQgBBuh1BPQh3BOimAAg");
	var mask_graphics_77 = new cjs.Graphics().p("AyCELQjDAAiKhOQiJhPAAhuQAAhuCJhOQCKhODDAAMAkFAAAQDDAACKBOQCKBOAABuQAABuiKBPQiKBOjDAAg");
	var mask_graphics_78 = new cjs.Graphics().p("A0pELQjfAAiehOQiehPABhuQgBhuCehOQCehODfAAMApTAAAQDfAACeBOQCeBOgBBuQABBuieBPQieBOjfAAg");
	var mask_graphics_79 = new cjs.Graphics().p("A3QELQj8AAixhOQiyhPAAhuQAAhuCyhOQCxhOD8AAMAuhAAAQD7AACyBOQCyBOAABuQAABuiyBPQiyBOj7AAg");
	var mask_graphics_80 = new cjs.Graphics().p("A53ELQkYAAjFhOQjGhPAAhuQAAhuDGhOQDFhOEYAAMAzvAAAQEYAADFBOQDGBOAABuQAABujGBPQjFBOkYAAg");
	var mask_graphics_81 = new cjs.Graphics().p("A8eELQk0AAjZhOQjahPAAhuQAAhuDahOQDZhOE0AAMA49AAAQE0AADZBOQDaBOAABuQAABujaBPQjZBOk0AAg");
	var mask_graphics_82 = new cjs.Graphics().p("A/FELQlRAAjshOQjuhPAAhuQAAhuDuhOQDshOFRAAMA+LAAAQFQAADtBOQDuBOAABuQAABujuBPQjtBOlQAAg");
	var mask_graphics_83 = new cjs.Graphics().p("EghsAELQltAAkAhOQkChPAAhuQAAhuEChOQEAhOFtAAMBDYAAAQFtAAEBBOQECBOAABuQAABukCBPQkBBOltAAg");
	var mask_graphics_84 = new cjs.Graphics().p("EgkTAELQmJAAkVhOQkVhPAAhuQAAhuEVhOQEVhOGJAAMBInAAAQGJAAEUBOQEWBOAABuQAABukWBPQkUBOmJAAg");
	var mask_graphics_85 = new cjs.Graphics().p("Egm6AELQmlAAkphOQkphPAAhuQAAhuEphOQEphOGlAAMBN1AAAQGlAAEpBOQEpBOAABuQAABukpBPQkpBOmlAAg");
	var mask_graphics_86 = new cjs.Graphics().p("EgphAELQnBAAk9hOQk9hPAAhuQAAhuE9hOQE9hOHBAAMBTDAAAQHBAAE9BOQE9BOAABuQAABuk9BPQk9BOnBAAg");
	var mask_graphics_87 = new cjs.Graphics().p("EgsIAELQndAAlRhOQlRhPAAhuQAAhuFRhOQFRhOHdAAMBYRAAAQHdAAFRBOQFRBOAABuQAABulRBPQlRBOndAAg");
	var mask_graphics_88 = new cjs.Graphics().p("EguvAELQn5AAllhOQllhPAAhuQAAhuFlhOQFlhOH5AAMBdfAAAQH5AAFlBOQFlBOAABuQAABullBPQllBOn5AAg");
	var mask_graphics_89 = new cjs.Graphics().p("EgxWAELQoWAAl4hOQl5hPAAhuQAAhuF5hOQF4hOIWAAMBitAAAQIWAAF4BOQF6BOAABuQAABul6BPQl4BOoWAAg");
	var mask_graphics_90 = new cjs.Graphics().p("Egz9AELQoyAAmNhOQmMhPAAhuQAAhuGMhOQGNhOIyAAMBn7AAAQIyAAGMBOQGNBOAABuQAABumNBPQmMBOoyAAg");
	var mask_graphics_91 = new cjs.Graphics().p("Eg2kAELQpOAAmhhOQmghPAAhuQAAhuGghOQGhhOJOAAMBtJAAAQJOAAGgBOQGhBOAABuQAABumhBPQmgBOpOAAg");
	var mask_graphics_92 = new cjs.Graphics().p("Eg5LAELQprAAm0hOQm1hPAAhuQAAhuG1hOQG0hOJrAAMByXAAAQJqAAG1BOQG1BOAABuQAABum1BPQm1BOpqAAg");
	var mask_graphics_93 = new cjs.Graphics().p("Eg7yAELQqHAAnIhOQnJhPAAhuQAAhuHJhOQHIhOKHAAMB3lAAAQKGAAHJBOQHJBOAABuQAABunJBPQnJBOqGAAg");
	var mask_graphics_94 = new cjs.Graphics().p("Eg+ZAELQqjAAnchOQndhPAAhuQAAhuHdhOQHchOKjAAMB8zAAAQKjAAHcBOQHdBOAABuQAABundBPQncBOqjAAg");
	var mask_graphics_95 = new cjs.Graphics().p("EhBAAELQrAAAnwhOQnwhPAAhuQAAhuHwhOQHwhOLAAAMCCAAAAQLAAAHwBOQHxBOAABuQAABunxBPQnwBOrAAAg");
	var mask_graphics_96 = new cjs.Graphics().p("EhDnAELQrcAAoEhOQoEhPAAhuQAAhuIEhOQIEhOLcAAMCHPAAAQLbAAIFBOQIEBOAABuQAABuoEBPQoFBOrbAAg");
	var mask_graphics_97 = new cjs.Graphics().p("EhGOAELQr3AAoZhOQoYhPAAhuQAAhuIYhOQIZhOL3AAMCMdAAAQL3AAIZBOQIYBOAABuQAABuoYBPQoZBOr3AAg");
	var mask_graphics_98 = new cjs.Graphics().p("EhI1AELQsUAAoshOQoshPAAhuQAAhuIshOQIshOMUAAMCRrAAAQMUAAIsBOQIsBOAABuQAABuosBPQosBOsUAAg");
	var mask_graphics_99 = new cjs.Graphics().p("EhLcAELQswAApAhOQpAhPAAhuQAAhuJAhOQJAhOMwAAMCW5AAAQMwAAJABOQJABOAABuQAABupABPQpABOswAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(74).to({graphics:mask_graphics_74,x:-64.8,y:-0.8}).wait(1).to({graphics:mask_graphics_75,x:-41.3,y:-0.8}).wait(1).to({graphics:mask_graphics_76,x:-17.7,y:-0.8}).wait(1).to({graphics:mask_graphics_77,x:5.8,y:-0.8}).wait(1).to({graphics:mask_graphics_78,x:29.3,y:-0.8}).wait(1).to({graphics:mask_graphics_79,x:52.8,y:-0.8}).wait(1).to({graphics:mask_graphics_80,x:76.3,y:-0.8}).wait(1).to({graphics:mask_graphics_81,x:99.8,y:-0.8}).wait(1).to({graphics:mask_graphics_82,x:123.3,y:-0.8}).wait(1).to({graphics:mask_graphics_83,x:146.8,y:-0.8}).wait(1).to({graphics:mask_graphics_84,x:170.3,y:-0.8}).wait(1).to({graphics:mask_graphics_85,x:193.8,y:-0.8}).wait(1).to({graphics:mask_graphics_86,x:217.3,y:-0.8}).wait(1).to({graphics:mask_graphics_87,x:240.8,y:-0.8}).wait(1).to({graphics:mask_graphics_88,x:264.3,y:-0.8}).wait(1).to({graphics:mask_graphics_89,x:287.9,y:-0.8}).wait(1).to({graphics:mask_graphics_90,x:311.4,y:-0.8}).wait(1).to({graphics:mask_graphics_91,x:334.9,y:-0.8}).wait(1).to({graphics:mask_graphics_92,x:358.4,y:-0.8}).wait(1).to({graphics:mask_graphics_93,x:381.9,y:-0.8}).wait(1).to({graphics:mask_graphics_94,x:405.4,y:-0.8}).wait(1).to({graphics:mask_graphics_95,x:428.9,y:-0.8}).wait(1).to({graphics:mask_graphics_96,x:452.4,y:-0.8}).wait(1).to({graphics:mask_graphics_97,x:475.9,y:-0.8}).wait(1).to({graphics:mask_graphics_98,x:499.4,y:-0.8}).wait(1).to({graphics:mask_graphics_99,x:522.9,y:-0.8}).wait(1));

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA2127").s().p("EgA0AvXMAAAheNQAAgNAPgKQAQgJAVAAQAWAAAQAJQAPAKAAANMAAABeNg");
	this.shape.setTransform(5.4,303.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EA2127").s().p("EhcTAA1QgXAAgQgPQgQgQAAgWQAAgVAQgQQAQgPAXAAMC4nAAAQAXAAAQAPQAQAQAAAVQAAAWgQAQQgQAPgXAAg");
	this.shape_1.setTransform(596.3,605.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EA2127").s().p("EgAlArGQgPgQAAgXMAAAhU9QAAgXAPgQQAQgQAVAAQAWAAAQAQQAPAQAAAXMAAABU9QAAAXgPAQQgQAQgWAAQgVAAgQgQg");
	this.shape_2.setTransform(1187.3,333.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EA2127").s().p("EhX+AA1QgXAAgQgQQgQgPAAgWQAAgVAQgQQAQgPAXAAMCv9AAAQAXAAAQAPQAQAQAAAVQAAAWgQAPQgQAQgXAAg");
	this.shape_3.setTransform(568.9,5.3);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},74).wait(26));

	// Layer 6 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_49 = new cjs.Graphics().p("AjTHLQhXhXgBh8IAAnvQABh8BXhYQBYhXB7AAQB8AABYBXQBXBYABB8IAAHvQgBB8hXBXQhYBYh8AAQh7AAhYhYg");
	var mask_1_graphics_50 = new cjs.Graphics().p("AjTIwQhXhqgBiYIAApbQABiXBXhsQBYhrB7AAQB8AABYBrQBXBsABCXIAAJbQgBCYhXBqQhYBsh8AAQh7AAhYhsg");
	var mask_1_graphics_51 = new cjs.Graphics().p("AjTKWQhXh/gBiyIAArJQABizBXh+QBYh+B7AAQB8AABYB+QBXB+ABCzIAALJQgBCyhXB/QhYB+h8AAQh7AAhYh+g");
	var mask_1_graphics_52 = new cjs.Graphics().p("AjTL7QhXiSgBjNIAAs3QABjNBXiTQBYiQB7gBQB8ABBYCQQBXCTABDNIAAM3QgBDNhXCSQhYCSh8gBQh7ABhYiSg");
	var mask_1_graphics_53 = new cjs.Graphics().p("AjTNfQhXikgBjpIAAujQABjpBXimQBYikB7AAQB8AABYCkQBXCmABDpIAAOjQgBDphXCkQhYCmh8AAQh7AAhYimg");
	var mask_1_graphics_54 = new cjs.Graphics().p("AjTPFQhXi4gBkFIAAwPQABkEBXi6QBYi4B7ABQB8gBBYC4QBXC6ABEEIAAQPQgBEFhXC4QhYC4h8AAQh7AAhYi4g");
	var mask_1_graphics_55 = new cjs.Graphics().p("AjTQqQhXjLgBkgIAAx9QABkgBXjMQBYjLB7AAQB8AABYDLQBXDMABEgIAAR9QgBEghXDLQhYDMh8AAQh7AAhYjMg");
	var mask_1_graphics_56 = new cjs.Graphics().p("AjTSPQhXjfgBk7IAAzpQABk7BXjgQBYjeB7AAQB8AABYDeQBXDgABE7IAATpQgBE7hXDfQhYDfh8AAQh7AAhYjfg");
	var mask_1_graphics_57 = new cjs.Graphics().p("AjTT0QhXjygBlWIAA1XQABlWBXjzQBYjyB7AAQB8AABYDyQBXDzABFWIAAVXQgBFWhXDyQhYDzh8AAQh7AAhYjzg");
	var mask_1_graphics_58 = new cjs.Graphics().p("AjTVZQhXkFgBlyIAA3EQABlxBXkHQBYkEB7AAQB8AABYEEQBXEHABFxIAAXEQgBFyhXEFQhYEGh8AAQh7AAhYkGg");
	var mask_1_graphics_59 = new cjs.Graphics().p("AjTW+QhXkYgBmNIAA4xQABmNBXkZQBYkZB7ABQB8gBBYEZQBXEZABGNIAAYxQgBGNhXEYQhYEZh8AAQh7AAhYkZg");
	var mask_1_graphics_60 = new cjs.Graphics().p("AjTYjQhXksgBmnIAA6fQABmoBXksQBYksB7AAQB8AABYEsQBXEsABGoIAAafQgBGnhXEsQhYEth8AAQh7AAhYktg");
	var mask_1_graphics_61 = new cjs.Graphics().p("AjTaIQhXk/gBnDIAA8LQABnEBXk/QBYlAB7AAQB8AABYFAQBXE/ABHEIAAcLQgBHDhXE/QhYFBh8gBQh7ABhYlBg");
	var mask_1_graphics_62 = new cjs.Graphics().p("AjTbtQhXlSgBneIAA94QABnfBXlUQBYlSB7AAQB8AABYFSQBXFUABHfIAAd4QgBHehXFSQhYFUh8AAQh7AAhYlUg");
	var mask_1_graphics_63 = new cjs.Graphics().p("AjTdSQhXllgBn6IAA/lQABn6BXlnQBYllB7AAQB8AABYFlQBXFnABH6IAAflQgBH6hXFlQhYFnh8AAQh7AAhYlng");
	var mask_1_graphics_64 = new cjs.Graphics().p("AjTe3QhXl4gBoVMAAAghSQABoWBXl6QBYl5B7AAQB8AABYF5QBXF6ABIWMAAAAhSQgBIVhXF4QhYF7h8AAQh7AAhYl7g");
	var mask_1_graphics_65 = new cjs.Graphics().p("EgDTAgcQhXmLgBoxMAAAgi/QABoxBXmNQBYmMB7AAQB8AABYGMQBXGNABIxMAAAAi/QgBIxhXGLQhYGOh8AAQh7AAhYmOg");
	var mask_1_graphics_66 = new cjs.Graphics().p("EgDTAiCQhXmfgBpNMAAAgksQABpLBXmhQBYmfB7AAQB8AABYGfQBXGhABJLMAAAAksQgBJNhXGfQhYGhh8gBQh7ABhYmhg");
	var mask_1_graphics_67 = new cjs.Graphics().p("EgDTAjmQhXmygBpmMAAAgmaQABpoBXm0QBYmyB7AAQB8AABYGyQBXG0ABJoMAAAAmaQgBJmhXGyQhYG1h8AAQh7AAhYm1g");
	var mask_1_graphics_68 = new cjs.Graphics().p("EgDTAlLQhXnFgBqCMAAAgoHQABqCBXnIQBYnGB7AAQB8AABYHGQBXHIABKCMAAAAoHQgBKChXHFQhYHIh8AAQh7AAhYnIg");
	var mask_1_graphics_69 = new cjs.Graphics().p("EgDTAmxQhXnZgBqeMAAAgpzQABqeBXnbQBYnZB7AAQB8AABYHZQBXHbABKeMAAAApzQgBKehXHZQhYHbh8AAQh7AAhYnbg");
	var mask_1_graphics_70 = new cjs.Graphics().p("EgDTAoWQhXnsgBq5MAAAgrgQABq6BXnuQBYnsB7AAQB8AABYHsQBXHuABK6MAAAArgQgBK5hXHsQhYHuh8AAQh7AAhYnug");
	var mask_1_graphics_71 = new cjs.Graphics().p("EgDTAp7QhXn/gBrVMAAAgtNQABrVBXoBQBYoAB7AAQB8AABYIAQBXIBABLVMAAAAtNQgBLVhXH/QhYICh8AAQh7AAhYoCg");
	var mask_1_graphics_72 = new cjs.Graphics().p("EgDTArgQhXoTgBrvMAAAgu6QABrwBXoWQBYoSB7AAQB8AABYISQBXIWABLwMAAAAu6QgBLvhXITQhYIVh8AAQh7AAhYoVg");
	var mask_1_graphics_73 = new cjs.Graphics().p("EgDTAtFQhXomgBsLMAAAgwnQABsLBXopQBYomB7AAQB8AABYImQBXIpABMLMAAAAwnQgBMLhXImQhYIoh8AAQh7AAhYoog");
	var mask_1_graphics_74 = new cjs.Graphics().p("EgDTAuqQhXo5gBsmMAAAgyVQABsmBXo8QBYo5B7AAQB8AABYI5QBXI8ABMmMAAAAyVQgBMmhXI5QhYI8h8AAQh7AAhYo8g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(49).to({graphics:mask_1_graphics_49,x:5.2,y:619.9}).wait(1).to({graphics:mask_1_graphics_50,x:5.2,y:607.9}).wait(1).to({graphics:mask_1_graphics_51,x:5.2,y:595.9}).wait(1).to({graphics:mask_1_graphics_52,x:5.2,y:583.8}).wait(1).to({graphics:mask_1_graphics_53,x:5.2,y:571.8}).wait(1).to({graphics:mask_1_graphics_54,x:5.2,y:559.7}).wait(1).to({graphics:mask_1_graphics_55,x:5.2,y:547.7}).wait(1).to({graphics:mask_1_graphics_56,x:5.2,y:535.6}).wait(1).to({graphics:mask_1_graphics_57,x:5.2,y:523.6}).wait(1).to({graphics:mask_1_graphics_58,x:5.2,y:511.6}).wait(1).to({graphics:mask_1_graphics_59,x:5.2,y:499.5}).wait(1).to({graphics:mask_1_graphics_60,x:5.2,y:487.5}).wait(1).to({graphics:mask_1_graphics_61,x:5.2,y:475.4}).wait(1).to({graphics:mask_1_graphics_62,x:5.2,y:463.4}).wait(1).to({graphics:mask_1_graphics_63,x:5.2,y:451.3}).wait(1).to({graphics:mask_1_graphics_64,x:5.2,y:439.3}).wait(1).to({graphics:mask_1_graphics_65,x:5.2,y:427.2}).wait(1).to({graphics:mask_1_graphics_66,x:5.2,y:415.2}).wait(1).to({graphics:mask_1_graphics_67,x:5.2,y:403.2}).wait(1).to({graphics:mask_1_graphics_68,x:5.2,y:391.1}).wait(1).to({graphics:mask_1_graphics_69,x:5.2,y:379.1}).wait(1).to({graphics:mask_1_graphics_70,x:5.2,y:367}).wait(1).to({graphics:mask_1_graphics_71,x:5.2,y:355}).wait(1).to({graphics:mask_1_graphics_72,x:5.2,y:342.9}).wait(1).to({graphics:mask_1_graphics_73,x:5.2,y:330.9}).wait(1).to({graphics:mask_1_graphics_74,x:5.2,y:318.9}).wait(26));

	// Layer 5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EA2127").s().p("EgA0AvXMAAAheNQAAgNAPgKQAQgJAVAAQAWAAAQAJQAPAKAAANMAAABeNg");
	this.shape_4.setTransform(5.4,303.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EA2127").s().p("EhcTAA1QgXAAgQgPQgQgQAAgWQAAgVAQgQQAQgPAXAAMC4nAAAQAXAAAQAPQAQAQAAAVQAAAWgQAQQgQAPgXAAg");
	this.shape_5.setTransform(596.3,605.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EA2127").s().p("EgAlArGQgPgQAAgXMAAAhU9QAAgXAPgQQAQgQAVAAQAWAAAQAQQAPAQAAAXMAAABU9QAAAXgPAQQgQAQgWAAQgVAAgQgQg");
	this.shape_6.setTransform(1187.3,333.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EA2127").s().p("EhX+AA1QgXAAgQgQQgQgPAAgWQAAgVAQgQQAQgPAXAAMCv9AAAQAXAAAQAPQAQAQAAAVQAAAWgQAPQgQAQgXAAg");
	this.shape_7.setTransform(568.9,5.3);

	var maskedShapeInstanceList = [this.shape_4,this.shape_5,this.shape_6,this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},49).wait(51));

	// Layer 4 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_25 = new cjs.Graphics().p("AAAIIQixAAh+h+Qh+h+AAiyIAAizQAAiyB+h+QB+h+CxAAIAAAAQCyAAB+B+QB+B+AACyIAACzQAACyh+B+Qh+B+iyAAg");
	var mask_2_graphics_26 = new cjs.Graphics().p("AAAIIQkcAAjKh+QjJh+AAiyIAAizQAAiyDJh+QDKh+EcAAIAAAAQEdAADKB+QDJB+AACyIAACzQAACyjJB+QjKB+kdAAg");
	var mask_2_graphics_27 = new cjs.Graphics().p("AAAIIQmHAAkVh+QkVh+AAiyIAAizQAAiyEVh+QEVh+GHAAIABAAQGHAAEVB+QEVB+AACyIAACzQAACykVB+QkVB+mHAAg");
	var mask_2_graphics_28 = new cjs.Graphics().p("AAAIIQnyAAlgh+Qlhh+AAiyIAAizQAAiyFhh+QFgh+HyAAIABAAQHyAAFhB+QFgB+AACyIAACzQAACylgB+QlhB+nyAAg");
	var mask_2_graphics_29 = new cjs.Graphics().p("AAAIIQpdAAmsh+Qmsh+AAiyIAAizQAAiyGsh+QGsh+JdAAIABAAQJdAAGsB+QGsB+AACyIAACzQAACymsB+QmsB+pdAAg");
	var mask_2_graphics_30 = new cjs.Graphics().p("AAAIIQrHAAn5h+Qn3h+AAiyIAAizQAAiyH3h+QH5h+LHAAIABAAQLHAAH5B+QH3B+AACyIAACzQAACyn3B+Qn5B+rHAAg");
	var mask_2_graphics_31 = new cjs.Graphics().p("AAAIIQsyAApEh+QpDh+AAiyIAAizQAAiyJDh+QJEh+MyAAIABAAQMyAAJEB+QJDB+AACyIAACzQAACypDB+QpEB+syAAg");
	var mask_2_graphics_32 = new cjs.Graphics().p("AAAIIQudAAqPh+QqPh+AAiyIAAizQAAiyKPh+QKPh+OdAAIACAAQOdAAKOB+QKPB+AACyIAACzQAACyqPB+QqOB+udAAg");
	var mask_2_graphics_33 = new cjs.Graphics().p("AgBIIQwHAArah+Qrbh+AAiyIAAizQAAiyLbh+QLah+QHAAIADAAQQHAALbB+QLaB+AACyIAACzQAACyraB+QrbB+wHAAg");
	var mask_2_graphics_34 = new cjs.Graphics().p("AAAIIQxzAAsmh+Qsmh+AAiyIAAizQAAiyMmh+QMmh+RzAAIABAAQRzAAMmB+QMmB+AACyIAACzQAACysmB+QsmB+xzAAg");
	var mask_2_graphics_35 = new cjs.Graphics().p("AgBIIQzdAAtxh+Qtyh+AAiyIAAizQAAiyNyh+QNxh+TdAAIADAAQTdAANyB+QNxB+AACyIAACzQAACytxB+QtyB+zdAAg");
	var mask_2_graphics_36 = new cjs.Graphics().p("AgBIIQ1IAAu9h+Qu9h+AAiyIAAizQAAiyO9h+QO9h+VIAAIADAAQVIAAO9B+QO9B+AACyIAACzQAACyu9B+Qu9B+1IAAg");
	var mask_2_graphics_37 = new cjs.Graphics().p("AgBIIQ2yAAwJh+QwJh+AAiyIAAizQAAiyQJh+QQJh+WyAAIADAAQWzAAQIB+QQJB+AACyIAACzQAACywJB+QwIB+2zAAg");
	var mask_2_graphics_38 = new cjs.Graphics().p("AgBIIQ4dAAxVh+QxUh+AAiyIAAizQAAiyRUh+QRVh+YdAAIAEAAQYdAARUB+QRUB+AACyIAACzQAACyxUB+QxUB+4dAAg");
	var mask_2_graphics_39 = new cjs.Graphics().p("AgBIIQ6JAAyfh+Qygh+AAiyIAAizQAAiySgh+QSfh+aJAAIAEAAQaIAASfB+QSgB+AACyIAACzQAACyygB+QyfB+6IAAg");
	var mask_2_graphics_40 = new cjs.Graphics().p("AgBIIQ70AAzrh+Qzrh+AAiyIAAizQAAiyTrh+QTrh+b0AAIAEAAQbzAATrB+QTrB+AACyIAACzQAACyzrB+QzrB+7zAAg");
	var mask_2_graphics_41 = new cjs.Graphics().p("AgCIIQ9dAA03h+Q03h+AAiyIAAizQAAiyU3h+QU3h+ddAAIAFAAQdeAAU2B+QU3B+AACyIAACzQAACy03B+Q02B+9eAAg");
	var mask_2_graphics_42 = new cjs.Graphics().p("AgCIIQ/IAA2Ch+Q2Dh+AAiyIAAizQAAiyWDh+QWCh+fIAAIAFAAQfIAAWDB+QWCB+AACyIAACzQAACy2CB+Q2DB+/IAAg");
	var mask_2_graphics_43 = new cjs.Graphics().p("AgCIIUggzAAAgXOgB+Q3Oh+AAiyIAAizQAAiyXOh+UAXOgB+AgzAAAIAFAAUAgzAAAAXOAB+QXOB+AACyIAACzQAACy3OB+UgXOAB+ggzAAAg");
	var mask_2_graphics_44 = new cjs.Graphics().p("AgCIIUgieAAAgYZgB+Q4ah+AAiyIAAizQAAiyYah+UAYZgB+AieAAAIAGAAUAieAAAAYYAB+QYaB+AACyIAACzQAACy4aB+UgYYAB+gieAAAg");
	var mask_2_graphics_45 = new cjs.Graphics().p("AgCIIUgkJAAAgZlgB+Q5lh+AAiyIAAizQAAiyZlh+UAZlgB+AkJAAAIAGAAUAkIAAAAZlAB+QZlB+AACyIAACzQAACy5lB+UgZlAB+gkIAAAg");
	var mask_2_graphics_46 = new cjs.Graphics().p("AgCIIUgl0AAAgawgB+Q6xh+AAiyIAAizQAAiyaxh+UAawgB+Al0AAAIAGAAUAlzAAAAawAB+QaxB+AACyIAACzQAACy6xB+UgawAB+glzAAAg");
	var mask_2_graphics_47 = new cjs.Graphics().p("AgDIIUgneAAAgb8gB+Q78h+AAiyIAAizQAAiyb8h+UAb8gB+AneAAAIAHAAUAneAAAAb8AB+Qb8B+AACyIAACzQAACy78B+Ugb8AB+gneAAAg");
	var mask_2_graphics_48 = new cjs.Graphics().p("AgDIIUgpIAAAgdIgB+Q9Ih+AAiyIAAizQAAiydIh+UAdIgB+ApIAAAIAHAAUApJAAAAdHAB+QdIB+AACyIAACzQAACy9IB+UgdHAB+gpJAAAg");
	var mask_2_graphics_49 = new cjs.Graphics().p("AgDIIUgqzAAAgeTgB+Q+Uh+AAiyIAAizQAAiyeUh+UAeTgB+AqzAAAIAHAAUAq0AAAAeTAB+QeTB+AACyIAACzQAACy+TB+UgeTAB+gq0AAAg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(25).to({graphics:mask_2_graphics_25,x:1200.5,y:598.6}).wait(1).to({graphics:mask_2_graphics_26,x:1174.7,y:598.6}).wait(1).to({graphics:mask_2_graphics_27,x:1148.9,y:598.6}).wait(1).to({graphics:mask_2_graphics_28,x:1123.1,y:598.6}).wait(1).to({graphics:mask_2_graphics_29,x:1097.3,y:598.6}).wait(1).to({graphics:mask_2_graphics_30,x:1071.6,y:598.6}).wait(1).to({graphics:mask_2_graphics_31,x:1045.8,y:598.6}).wait(1).to({graphics:mask_2_graphics_32,x:1019.9,y:598.6}).wait(1).to({graphics:mask_2_graphics_33,x:994.2,y:598.6}).wait(1).to({graphics:mask_2_graphics_34,x:968.4,y:598.6}).wait(1).to({graphics:mask_2_graphics_35,x:942.6,y:598.6}).wait(1).to({graphics:mask_2_graphics_36,x:916.8,y:598.6}).wait(1).to({graphics:mask_2_graphics_37,x:891,y:598.6}).wait(1).to({graphics:mask_2_graphics_38,x:865.2,y:598.6}).wait(1).to({graphics:mask_2_graphics_39,x:839.4,y:598.6}).wait(1).to({graphics:mask_2_graphics_40,x:813.6,y:598.6}).wait(1).to({graphics:mask_2_graphics_41,x:787.8,y:598.6}).wait(1).to({graphics:mask_2_graphics_42,x:762,y:598.6}).wait(1).to({graphics:mask_2_graphics_43,x:736.2,y:598.6}).wait(1).to({graphics:mask_2_graphics_44,x:710.4,y:598.6}).wait(1).to({graphics:mask_2_graphics_45,x:684.6,y:598.6}).wait(1).to({graphics:mask_2_graphics_46,x:658.8,y:598.6}).wait(1).to({graphics:mask_2_graphics_47,x:633,y:598.6}).wait(1).to({graphics:mask_2_graphics_48,x:607.2,y:598.6}).wait(1).to({graphics:mask_2_graphics_49,x:581.4,y:598.6}).wait(51));

	// Layer 3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EA2127").s().p("EgA0AvXMAAAheNQAAgNAPgKQAQgJAVAAQAWAAAQAJQAPAKAAANMAAABeNg");
	this.shape_8.setTransform(5.4,303.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EA2127").s().p("EhcTAA1QgXAAgQgPQgQgQAAgWQAAgVAQgQQAQgPAXAAMC4nAAAQAXAAAQAPQAQAQAAAVQAAAWgQAQQgQAPgXAAg");
	this.shape_9.setTransform(596.3,605.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EA2127").s().p("EgAlArGQgPgQAAgXMAAAhU9QAAgXAPgQQAQgQAVAAQAWAAAQAQQAPAQAAAXMAAABU9QAAAXgPAQQgQAQgWAAQgVAAgQgQg");
	this.shape_10.setTransform(1187.3,333.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EA2127").s().p("EhX+AA1QgXAAgQgQQgQgPAAgWQAAgVAQgQQAQgPAXAAMCv9AAAQAXAAAQAPQAQAQAAAVQAAAWgQAPQgQAQgXAAg");
	this.shape_11.setTransform(568.9,5.3);

	var maskedShapeInstanceList = [this.shape_8,this.shape_9,this.shape_10,this.shape_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},25).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},24).wait(51));

	// Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_0 = new cjs.Graphics().p("AAAG4QiIAAhhhhQhghgAAiJIAAjbQAAiJBghhQBhhgCIAAIAAAAQCJAABgBgQBhBhAACJIAADbQAACJhhBgQhgBhiJAAg");
	var mask_3_graphics_1 = new cjs.Graphics().p("AAAI7QiIAAhhh+Qhgh9AAixIAAkdQAAixBgh+QBhh9CIAAIAAAAQCJAABgB9QBhB+AACxIAAEdQAACxhhB9QhgB+iJAAg");
	var mask_3_graphics_2 = new cjs.Graphics().p("AAAK+QiIAAhhibQhgiaAAjaIAAleQAAjZBgibQBhiaCIAAIAAAAQCJAABgCaQBhCbAADZIAAFeQAADahhCaQhgCbiJAAg");
	var mask_3_graphics_3 = new cjs.Graphics().p("AAANBQiIAAhhi4Qhgi2AAkCIAAmgQAAkDBgi3QBhi3CIAAIAAAAQCJAABgC3QBhC3AAEDIAAGgQAAEChhC2QhgC4iJAAg");
	var mask_3_graphics_4 = new cjs.Graphics().p("AAAPEQiIAAhhjVQhgjTAAkrIAAnhQAAkrBgjVQBhjTCIAAIAAAAQCJAABgDTQBhDVAAErIAAHhQAAErhhDTQhgDViJAAg");
	var mask_3_graphics_5 = new cjs.Graphics().p("AAARGQiIAAhhjxQhgjvAAlUIAAojQAAlTBgjxQBhjxCIAAIAAAAQCJAABgDxQBhDxAAFTIAAIjQAAFUhhDvQhgDxiJAAg");
	var mask_3_graphics_6 = new cjs.Graphics().p("AAATJQiIAAhhkOQhgkNAAl7IAAplQAAl8BgkOQBhkNCIAAIAAAAQCJAABgENQBhEOAAF8IAAJlQAAF7hhENQhgEOiJAAg");
	var mask_3_graphics_7 = new cjs.Graphics().p("AAAVMQiIAAhhkrQhgkpAAmkIAAqnQAAmkBgkrQBhkpCIAAIAAAAQCJAABgEpQBhErAAGkIAAKnQAAGkhhEpQhgEriJAAg");
	var mask_3_graphics_8 = new cjs.Graphics().p("AAAXPQiIAAhhlHQhglHAAnNIAAroQAAnNBglHQBhlGCIAAIAAAAQCJAABgFGQBhFHAAHNIAALoQAAHNhhFHQhgFHiJAAg");
	var mask_3_graphics_9 = new cjs.Graphics().p("AAAZSQiIAAhhllQhgljAAn1IAAspQAAn2BglkQBhljCIAAIAAAAQCJAABgFjQBhFkAAH2IAAMpQAAH1hhFjQhgFliJAAg");
	var mask_3_graphics_10 = new cjs.Graphics().p("AAAbVQiIAAhhmBQhgmAAAoeIAAtrQAAoeBgmCQBhl/CIAAIAAAAQCJAABgF/QBhGCAAIeIAANrQAAIehhGAQhgGBiJAAg");
	var mask_3_graphics_11 = new cjs.Graphics().p("AAAdYQiIAAhhmfQhgmcAApGIAAutQAApHBgmeQBhmcCIAAIAAAAQCJAABgGcQBhGeAAJHIAAOtQAAJGhhGcQhgGfiJAAg");
	var mask_3_graphics_12 = new cjs.Graphics().p("AAAfbQiIgBhhm6Qhgm5AApwIAAvuQAApvBgm7QBhm4CIgBIAAAAQCJABBgG4QBhG7AAJvIAAPuQAAJwhhG5QhgG6iJABg");
	var mask_3_graphics_13 = new cjs.Graphics().p("EAAAAhdQiIAAhhnXQhgnVAAqZIAAwvQAAqYBgnYQBhnWCIAAIAAAAQCJAABgHWQBhHYAAKYIAAQvQAAKZhhHVQhgHXiJAAg");
	var mask_3_graphics_14 = new cjs.Graphics().p("EAAAAjgQiIAAhhn0QhgnyAArBIAAxxQAArBBgn0QBhnzCIAAIAAAAQCJAABgHzQBhH0AALBIAARxQAALBhhHyQhgH0iJAAg");
	var mask_3_graphics_15 = new cjs.Graphics().p("EAAAAljQiIAAhhoRQhgoPAArpIAAyyQAArqBgoRQBhoPCIAAIAAAAQCJAABgIPQBhIRAALqIAASyQAALphhIPQhgIRiJAAg");
	var mask_3_graphics_16 = new cjs.Graphics().p("EAAAAnmQiIAAhhouQhgosAAsRIAAz0QAAsSBgovQBhorCIAAIAAAAQCJAABgIrQBhIvAAMSIAAT0QAAMRhhIsQhgIuiJAAg");
	var mask_3_graphics_17 = new cjs.Graphics().p("EAAAAppQiIAAhhpLQhgpJAAs6IAA01QAAs7BgpKQBhpJCIAAIAAAAQCJAABgJJQBhJKAAM7IAAU1QAAM6hhJJQhgJLiJAAg");
	var mask_3_graphics_18 = new cjs.Graphics().p("EAAAArsQiIAAhhpoQhgplAAtjIAA13QAAtjBgpoQBhplCIAAIAAAAQCJAABgJlQBhJoAANjIAAV3QAANjhhJlQhgJoiJAAg");
	var mask_3_graphics_19 = new cjs.Graphics().p("EAAAAtvQiIAAhhqFQhgqCAAuLIAA25QAAuLBgqFQBhqCCIAAIAAAAQCJAABgKCQBhKFAAOLIAAW5QAAOLhhKCQhgKFiJAAg");
	var mask_3_graphics_20 = new cjs.Graphics().p("EAAAAvyQiIgBhhqhQhgqfAAuzIAA37QAAu0BgqhQBhqeCIgBIAAAAQCJABBgKeQBhKhAAO0IAAX7QAAOzhhKfQhgKhiJABg");
	var mask_3_graphics_21 = new cjs.Graphics().p("EAAAAx0QiIAAhhq+Qhgq7AAvdIAA47QAAvdBgq/QBhq7CIAAIAAAAQCJAABgK7QBhK/AAPdIAAY7QAAPdhhK7QhgK+iJAAg");
	var mask_3_graphics_22 = new cjs.Graphics().p("EAAAAz3QiIAAhhrbQhgrYAAwEIAA5+QAAwFBgrcQBhrXCIAAIAAAAQCJAABgLXQBhLcAAQFIAAZ+QAAQEhhLYQhgLbiJAAg");
	var mask_3_graphics_23 = new cjs.Graphics().p("EAAAA16QiIAAhhr4Qhgr0AAwuIAA6/QAAwuBgr4QBhr0CIAAIAAAAQCJAABgL0QBhL4AAQuIAAa/QAAQuhhL0QhgL4iJAAg");
	var mask_3_graphics_24 = new cjs.Graphics().p("EAAAA39QiIAAhhsVQhgsRAAxWIAA8BQAAxWBgsVQBhsRCIAAIAAAAQCJAABgMRQBhMVAARWIAAcBQAARWhhMRQhgMViJAAg");
	var mask_3_graphics_25 = new cjs.Graphics().p("EAAAA39QiIAAhhsVQhgsRAAxWIAA8BQAAxWBgsVQBhsRCIAAIAAAAQCJAABgMRQBhMVAARWIAAcBQAARWhhMRQhgMViJAAg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:mask_3_graphics_0,x:1182.5,y:-27.5}).wait(1).to({graphics:mask_3_graphics_1,x:1182.5,y:-14.4}).wait(1).to({graphics:mask_3_graphics_2,x:1182.5,y:-1.3}).wait(1).to({graphics:mask_3_graphics_3,x:1182.5,y:11.7}).wait(1).to({graphics:mask_3_graphics_4,x:1182.5,y:24.8}).wait(1).to({graphics:mask_3_graphics_5,x:1182.5,y:37.9}).wait(1).to({graphics:mask_3_graphics_6,x:1182.5,y:51}).wait(1).to({graphics:mask_3_graphics_7,x:1182.5,y:64.1}).wait(1).to({graphics:mask_3_graphics_8,x:1182.5,y:77.2}).wait(1).to({graphics:mask_3_graphics_9,x:1182.5,y:90.3}).wait(1).to({graphics:mask_3_graphics_10,x:1182.5,y:103.3}).wait(1).to({graphics:mask_3_graphics_11,x:1182.5,y:116.4}).wait(1).to({graphics:mask_3_graphics_12,x:1182.5,y:129.5}).wait(1).to({graphics:mask_3_graphics_13,x:1182.5,y:142.6}).wait(1).to({graphics:mask_3_graphics_14,x:1182.5,y:155.7}).wait(1).to({graphics:mask_3_graphics_15,x:1182.5,y:168.7}).wait(1).to({graphics:mask_3_graphics_16,x:1182.5,y:181.8}).wait(1).to({graphics:mask_3_graphics_17,x:1182.5,y:194.9}).wait(1).to({graphics:mask_3_graphics_18,x:1182.5,y:208}).wait(1).to({graphics:mask_3_graphics_19,x:1182.5,y:221.1}).wait(1).to({graphics:mask_3_graphics_20,x:1182.5,y:234.2}).wait(1).to({graphics:mask_3_graphics_21,x:1182.5,y:247.3}).wait(1).to({graphics:mask_3_graphics_22,x:1182.5,y:260.3}).wait(1).to({graphics:mask_3_graphics_23,x:1182.5,y:273.4}).wait(1).to({graphics:mask_3_graphics_24,x:1182.5,y:286.5}).wait(1).to({graphics:mask_3_graphics_25,x:1182.5,y:286.5}).wait(75));

	// Layer 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EA2127").s().p("EgA0AvXMAAAheNQAAgNAPgKQAQgJAVAAQAWAAAQAJQAPAKAAANMAAABeNg");
	this.shape_12.setTransform(5.4,303.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EA2127").s().p("EhcTAA1QgXAAgQgPQgQgQAAgWQAAgVAQgQQAQgPAXAAMC4nAAAQAXAAAQAPQAQAQAAAVQAAAWgQAQQgQAPgXAAg");
	this.shape_13.setTransform(596.3,605.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EA2127").s().p("EgAlArGQgPgQAAgXMAAAhU9QAAgXAPgQQAQgQAVAAQAWAAAQAQQAPAQAAAXMAAABU9QAAAXgPAQQgQAQgWAAQgVAAgQgQg");
	this.shape_14.setTransform(1187.3,333.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EA2127").s().p("EhX+AA1QgXAAgQgQQgQgPAAgWQAAgVAQgQQAQgPAXAAMCv9AAAQAXAAAQAPQAQAQAAAVQAAAWgQAPQgQAQgXAAg");
	this.shape_15.setTransform(568.9,5.3);

	var maskedShapeInstanceList = [this.shape_12,this.shape_13,this.shape_14,this.shape_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1149.5,0,43.2,16.5);


(lib.menu_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_20 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(20).call(this.frame_20).wait(1));

	// Layer 3
	this.instance = new lib.circle_topmenu("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(19.4,34.7,1,1,0,0,0,19.4,19.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:158.3},19,cjs.Ease.get(1)).wait(2));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#929497").s().p("AgTAeQgIgJAAgLIAAgTQAAgMAIgIQAJgIAKAAQALAAAJAIQAIAIAAAMIAAATQAAALgIAJQgJAIgLAAQgKAAgJgIg");
	this.shape.setTransform(19.4,3.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#929497").s().p("AgTBcQgIgIAAgMIAAiPQAAgMAIgIQAIgIALAAQAMAAAIAIQAIAIAAAMIAACPQAAAMgIAIQgIAIgMAAQgLAAgIgIg");
	this.shape_1.setTransform(19.4,10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#929497").s().p("AgTCXQgIgIAAgMIAAkFQAAgMAIgIQAIgIALAAQAMAAAIAIQAIAIAAAMIAAEFQAAAMgIAIQgIAIgMAAQgLAAgIgIg");
	this.shape_2.setTransform(19.4,15.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#929497").s().p("AgTDPQgIgJAAgLIAAl1QAAgLAIgJQAIgIALAAQAMAAAIAIQAIAJAAALIAAF1QAAALgIAJQgIAIgMAAQgLAAgIgIg");
	this.shape_3.setTransform(19.4,21.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#929497").s().p("AgTEDQgIgIAAgMIAAndQAAgLAIgJQAIgIALAAQAMAAAIAIQAIAJAAALIAAHdQAAAMgIAIQgIAIgMAAQgLAAgIgIg");
	this.shape_4.setTransform(19.4,26.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#929497").s().p("AgTE0QgIgIAAgMIAAo/QAAgLAIgJQAIgIALAAQAMAAAIAIQAIAJAAALIAAI/QAAAMgIAIQgIAIgMAAQgLAAgIgIg");
	this.shape_5.setTransform(19.4,31.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#929497").s().p("AgTFhQgIgIAAgMIAAqZQAAgMAIgIQAIgIALAAQAMAAAIAIQAIAIAAAMIAAKZQAAAMgIAIQgIAIgMAAQgLAAgIgIg");
	this.shape_6.setTransform(19.4,36.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#929497").s().p("AgTGMQgIgJAAgLIAArvQAAgLAIgIQAIgJALAAQAMAAAIAJQAIAIAAALIAALvQAAALgIAJQgIAHgMABQgLgBgIgHg");
	this.shape_7.setTransform(19.4,40.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#929497").s().p("AgTGyQgIgIAAgMIAAs7QAAgMAIgIQAIgIALAAQAMAAAIAIQAIAIAAAMIAAM7QAAAMgIAIQgIAIgMAAQgLAAgIgIg");
	this.shape_8.setTransform(19.4,44.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#929497").s().p("AgTHVQgIgIAAgMIAAuCQAAgLAIgIQAIgJALAAQAMAAAIAJQAIAIAAALIAAOCQAAAMgIAIQgIAJgMgBQgLABgIgJg");
	this.shape_9.setTransform(19.4,47.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#929497").s().p("AgTH1QgIgIAAgMIAAvCQAAgLAIgIQAIgJALAAQAMAAAIAJQAIAIAAALIAAPCQAAAMgIAIQgIAJgMgBQgLABgIgJg");
	this.shape_10.setTransform(19.4,51);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#929497").s().p("AgTISQgIgIAAgMIAAv7QAAgMAIgIQAIgIALAAQAMAAAIAIQAIAIAAAMIAAP7QAAAMgIAIQgIAIgMAAQgLAAgIgIg");
	this.shape_11.setTransform(19.4,53.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#929497").s().p("AgTIrQgIgIAAgMIAAwuQAAgLAIgIQAIgJALAAQAMAAAIAJQAIAIAAALIAAQuQAAAMgIAIQgIAJgMgBQgLABgIgJg");
	this.shape_12.setTransform(19.4,56.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#929497").s().p("AgTJBQgIgIAAgMIAAxZQAAgMAIgIQAIgIALAAQAMAAAIAIQAIAIAAAMIAARZQAAAMgIAIQgIAIgMAAQgLAAgIgIg");
	this.shape_13.setTransform(19.4,58.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#929497").s().p("AgTJUQgIgIAAgMIAAx/QAAgLAIgJQAIgIALAAQAMAAAIAIQAIAJAAALIAAR/QAAAMgIAIQgIAIgMAAQgLAAgIgIg");
	this.shape_14.setTransform(19.4,60.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#929497").s().p("AgTJjQgIgJAAgLIAAydQAAgLAIgJQAIgIALAAQAMAAAIAIQAIAJAAALIAASdQAAALgIAJQgIAIgMAAQgLAAgIgIg");
	this.shape_15.setTransform(19.4,61.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#929497").s().p("AgTJvQgIgJAAgLIAAy1QAAgLAIgJQAIgIALAAQAMAAAIAIQAIAJAAALIAAS1QAAALgIAJQgIAIgMAAQgLAAgIgIg");
	this.shape_16.setTransform(19.4,63.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#929497").s().p("AgTJ3QgIgIAAgMIAAzFQAAgMAIgIQAIgIALAAQAMAAAIAIQAIAIAAAMIAATFQAAAMgIAIQgIAIgMAAQgLAAgIgIg");
	this.shape_17.setTransform(19.4,63.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#929497").s().p("AgTJ8QgIgIAAgMIAAzPQAAgMAIgIQAIgIALAAQAMAAAIAIQAIAIAAAMIAATPQAAAMgIAIQgIAIgMAAQgLAAgIgIg");
	this.shape_18.setTransform(19.4,64.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#929497").s().p("AgTJ+QgIgIAAgMIAAzTQAAgMAIgIQAJgIAKAAQALAAAJAIQAIAIAAAMIAATTQAAAMgIAIQgJAIgLAAQgKAAgJgIg");
	this.shape_19.setTransform(19.4,64.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.8,0,44.3,56.8);


(lib.govSandace_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hitArea
	this.instance = new lib.hitArea_mc();
	this.instance.parent = this;
	this.instance.setTransform(233.4,112.9,1,1,0,0,0,164,162.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	// Layer 2
	this.instance_1 = new lib.telephone_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(214.2,72.3,1,1,0,0,0,72.1,72.3);
	this.instance_1._off = true;
	this.instance_1.filters = [new cjs.ColorFilter(0.69, 0.69, 0.69, 1, 72.54, 10.23, 12.09, 0)];
	this.instance_1.cache(-2,-2,148,149);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({regX:72.2,scaleX:0.87,scaleY:0.87,x:214.3},0).to({_off:true},1).wait(1));

	// Layer 1
	this.instance_2 = new lib.telephone_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(214.2,72.3,1,1,0,0,0,72.1,72.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhIBuIAAjbICOAAIAAAiIheAAIAAA5IBaAAIAAAhIhaAAIAAA+IBhAAIAAAhg");
	this.shape.setTransform(381.6,218);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAnBuIAAhVIgMACIgSADIgSACQgZAAgSgGQgRgGgJgQQgJgQAAgfIAAhCIAxAAIAAA/QAAAWAIAKQAJAKAVAAIAPgBIAOgDIAKgCIAAhjIAxAAIAADbg");
	this.shape_1.setTransform(360.8,218);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABBBuIgTg3IhdAAIgUA3IgwAAIBTjbIA/AAIBVDbgAAkAWIgkhkIglBkIBJAAg");
	this.shape_2.setTransform(338.8,218);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABKCJIAAg2IiTAAIAAA2IgsAAIAAhaIARAAQAQgUAHgdQAIgeAAgiIAAhGICgAAIAAC3IAbAAIAABagAgYg7QAAAfgGAcQgHAbgNAUIBcAAIAAiTIhCAAg");
	this.shape_3.setTransform(315,220.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAsBuIAAhdIhWAAIAABdIgyAAIAAjbIAyAAIAABYIBWAAIAAhYIAxAAIAADbg");
	this.shape_4.setTransform(291.4,218);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABBBuIgTg3IhdAAIgUA3IgwAAIBUjbIA/AAIBUDbgAAjAWIgjhkIgmBkIBJAAg");
	this.shape_5.setTransform(268.2,218);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdBkQgbgNgQgZQgPgaAAgkQAAgiAQgZQAQgZAbgOQAbgOAhAAQAOAAAOACQAPACAMADIgBAlQgLgEgMgCQgMgCgLAAQgXAAgRAKQgRAJgJASQgKARAAAWQAAAYAJARQAJASARAKQAQAJAYAAQAMAAAMgCQAMgCALgFIACAkQgNAEgOADQgPACgOAAQgigBgbgNg");
	this.shape_6.setTransform(246.9,218);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYBwQgMgDgKgDQgegNgQgbQgPgbAAgnQAAghANgZQAMgaAYgOQAYgOAiAAQAjAAAYAOQAYAOAMAZQANAZAAAiQAAAigNAaQgMAZgYAOQgYAPgjAAQgMAAgMgCgAgahHQgLAHgHAMQgGAMgDANQgDAPAAAMQAAAOADANQADAOAGAMQAHAMALAHQALAHAPAAQAQABALgIQALgHAHgMQAGgLADgOQADgOAAgOQAAgMgDgPQgDgNgGgNQgHgLgLgHQgLgHgQgBQgPABgLAHg");
	this.shape_7.setTransform(215,218);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAsBuIAAhdIhXAAIAABdIgwAAIAAjbIAwAAIAABYIBXAAIAAhYIAwAAIAADbg");
	this.shape_8.setTransform(191.2,218);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhSBuIAAjbIBOAAQAWAAAVAHQATAGAMAPQANAPAAAZQAAAZgNAQQgMAPgTAHQgUAHgWAAIgfAAIAABRgAgjgDIASAAQANAAALgCQAMgDAHgIQAIgJAAgQQAAgTgNgIQgNgIgWAAIgVAAg");
	this.shape_9.setTransform(170.4,217.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgYBwQgMgDgKgDQgegNgQgbQgPgbAAgnQAAghANgZQAMgaAYgOQAYgOAiAAQAjAAAYAOQAYAOAMAZQANAZAAAiQAAAigNAaQgMAZgYAOQgYAPgjAAQgMAAgMgCgAgahHQgLAHgHAMQgGAMgDANQgDAPAAAMQAAAOADANQADAOAGAMQAHAMALAHQALAHAPAAQAQABALgIQALgHAHgMQAGgLADgOQADgOAAgOQAAgMgDgPQgDgNgGgNQgHgLgLgHQgLgHgQgBQgPABgLAHg");
	this.shape_10.setTransform(147.5,218);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhTBuIAAjbIBZAAQASAAAQAFQARAFALAMQAKAMAAAVQAAAVgLANQgLAMgVAFQAOADALAFQALAHAGAKQAHALAAAPQAAAUgIAMQgHAMgMAHQgNAGgPADQgQACgQAAgAgkBQIAXAAQAMAAAJgCQALgDAIgIQAIgHgBgOQABgOgIgIQgIgIgLgCQgLgDgMAAIgVAAgAgkgQIAXAAQAMAAAIgCQAKgDAGgHQAHgIAAgMQAAgMgGgHQgGgGgIgDQgKgDgJAAIgbAAg");
	this.shape_11.setTransform(125.6,217.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYBwQgMgDgKgDQgegNgQgbQgPgbAAgnQAAghANgZQAMgaAYgOQAYgOAiAAQAjAAAYAOQAYAOAMAZQANAZAAAiQAAAigNAaQgMAZgYAOQgYAPgjAAQgMAAgMgCgAgahHQgLAHgHAMQgGAMgDANQgDAPAAAMQAAAOADANQADAOAGAMQAHAMALAHQALAHAPAAQAQABALgIQALgHAHgMQAGgLADgOQADgOAAgOQAAgMgDgPQgDgNgGgNQgHgLgLgHQgLgHgQgBQgPABgLAHg");
	this.shape_12.setTransform(102.6,218);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhEBuIAAjbICJAAIAAAmIhYAAIAAC1g");
	this.shape_13.setTransform(83.3,218);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F9BABC").s().p("AhIBuIAAjbICOAAIAAAiIheAAIAAA5IBaAAIAAAhIhaAAIAAA+IBhAAIAAAhg");
	this.shape_14.setTransform(381.6,218);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F9BABC").s().p("AAnBuIAAhVIgMACIgSADIgSACQgZAAgSgGQgRgGgJgQQgJgQAAgfIAAhCIAxAAIAAA/QAAAWAIAKQAJAKAVAAIAPgBIAOgDIAKgCIAAhjIAxAAIAADbg");
	this.shape_15.setTransform(360.8,218);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F9BABC").s().p("ABBBuIgTg3IhdAAIgUA3IgwAAIBTjbIA/AAIBVDbgAAkAWIgkhkIglBkIBJAAg");
	this.shape_16.setTransform(338.8,218);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F9BABC").s().p("ABKCJIAAg2IiTAAIAAA2IgsAAIAAhaIARAAQAQgUAHgdQAIgeAAgiIAAhGICgAAIAAC3IAbAAIAABagAgYg7QAAAfgGAcQgHAbgNAUIBcAAIAAiTIhCAAg");
	this.shape_17.setTransform(315,220.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F9BABC").s().p("AAsBuIAAhdIhWAAIAABdIgyAAIAAjbIAyAAIAABYIBWAAIAAhYIAxAAIAADbg");
	this.shape_18.setTransform(291.4,218);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F9BABC").s().p("ABBBuIgTg3IhdAAIgUA3IgwAAIBUjbIA/AAIBUDbgAAjAWIgjhkIgmBkIBJAAg");
	this.shape_19.setTransform(268.2,218);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F9BABC").s().p("AgdBkQgbgNgQgZQgPgaAAgkQAAgiAQgZQAQgZAbgOQAbgOAhAAQAOAAAOACQAPACAMADIgBAlQgLgEgMgCQgMgCgLAAQgXAAgRAKQgRAJgJASQgKARAAAWQAAAYAJARQAJASARAKQAQAJAYAAQAMAAAMgCQAMgCALgFIACAkQgNAEgOADQgPACgOAAQgigBgbgNg");
	this.shape_20.setTransform(246.9,218);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F9BABC").s().p("AgYBwQgMgDgKgDQgegNgQgbQgPgbAAgnQAAghANgZQAMgaAYgOQAYgOAiAAQAjAAAYAOQAYAOAMAZQANAZAAAiQAAAigNAaQgMAZgYAOQgYAPgjAAQgMAAgMgCgAgahHQgLAHgHAMQgGAMgDANQgDAPAAAMQAAAOADANQADAOAGAMQAHAMALAHQALAHAPAAQAQABALgIQALgHAHgMQAGgLADgOQADgOAAgOQAAgMgDgPQgDgNgGgNQgHgLgLgHQgLgHgQgBQgPABgLAHg");
	this.shape_21.setTransform(215,218);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F9BABC").s().p("AAsBuIAAhdIhXAAIAABdIgwAAIAAjbIAwAAIAABYIBXAAIAAhYIAwAAIAADbg");
	this.shape_22.setTransform(191.2,218);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F9BABC").s().p("AhSBuIAAjbIBOAAQAWAAAVAHQATAGAMAPQANAPAAAZQAAAZgNAQQgMAPgTAHQgUAHgWAAIgfAAIAABRgAgjgDIASAAQANAAALgCQAMgDAHgIQAIgJAAgQQAAgTgNgIQgNgIgWAAIgVAAg");
	this.shape_23.setTransform(170.4,217.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F9BABC").s().p("AgYBwQgMgDgKgDQgegNgQgbQgPgbAAgnQAAghANgZQAMgaAYgOQAYgOAiAAQAjAAAYAOQAYAOAMAZQANAZAAAiQAAAigNAaQgMAZgYAOQgYAPgjAAQgMAAgMgCgAgahHQgLAHgHAMQgGAMgDANQgDAPAAAMQAAAOADANQADAOAGAMQAHAMALAHQALAHAPAAQAQABALgIQALgHAHgMQAGgLADgOQADgOAAgOQAAgMgDgPQgDgNgGgNQgHgLgLgHQgLgHgQgBQgPABgLAHg");
	this.shape_24.setTransform(147.5,218);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F9BABC").s().p("AhTBuIAAjbIBZAAQASAAAQAFQARAFALAMQAKAMAAAVQAAAVgLANQgLAMgVAFQAOADALAFQALAHAGAKQAHALAAAPQAAAUgIAMQgHAMgMAHQgNAGgPADQgQACgQAAgAgkBQIAXAAQAMAAAJgCQALgDAIgIQAIgHgBgOQABgOgIgIQgIgIgLgCQgLgDgMAAIgVAAgAgkgQIAXAAQAMAAAIgCQAKgDAGgHQAHgIAAgMQAAgMgGgHQgGgGgIgDQgKgDgJAAIgbAAg");
	this.shape_25.setTransform(125.6,217.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F9BABC").s().p("AgYBwQgMgDgKgDQgegNgQgbQgPgbAAgnQAAghANgZQAMgaAYgOQAYgOAiAAQAjAAAYAOQAYAOAMAZQANAZAAAiQAAAigNAaQgMAZgYAOQgYAPgjAAQgMAAgMgCgAgahHQgLAHgHAMQgGAMgDANQgDAPAAAMQAAAOADANQADAOAGAMQAHAMALAHQALAHAPAAQAQABALgIQALgHAHgMQAGgLADgOQADgOAAgOQAAgMgDgPQgDgNgGgNQgHgLgLgHQgLgHgQgBQgPABgLAHg");
	this.shape_26.setTransform(102.6,218);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F9BABC").s().p("AhEBuIAAjbICJAAIAAAmIhYAAIAAC1g");
	this.shape_27.setTransform(83.3,218);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2}]}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,464.4,240.9);


(lib.ePunkt_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hitArea
	this.instance = new lib.hitArea_mc();
	this.instance.parent = this;
	this.instance.setTransform(233.4,112.9,1,1,0,0,0,164,162.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	// Layer 2
	this.instance_1 = new lib.laptop_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(257.3,82.2,1,1,0,0,0,134.3,82.2);
	this.instance_1._off = true;
	this.instance_1.filters = [new cjs.ColorFilter(0.69, 0.69, 0.69, 1, 72.54, 10.23, 12.09, 0)];
	this.instance_1.cache(-2,-2,273,169);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({scaleX:0.85,scaleY:0.85,y:82.3},0).to({_off:true},1).wait(1));

	// Layer 1
	this.instance_2 = new lib.laptop_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(257.3,82.2,1,1,0,0,0,134.3,82.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXBuIAAi0IhGAAIAAgnIC6AAIAAAnIhFAAIAAC0g");
	this.shape.setTransform(291.7,227.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAkBuIhThpIAABpIgxAAIAAjbIAxAAIAABfIBOhfIA7AAIhcBnIBjB0g");
	this.shape_1.setTransform(272.2,227.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAsBuIAAhdIhXAAIAABdIgwAAIAAjbIAwAAIAABXIBXAAIAAhXIAwAAIAADbg");
	this.shape_2.setTransform(248.5,227.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag7BuIgRgDIABgiIAKADIANABQAJgBAHgHQAFgHAHgOIhSifIA1AAIA2B3IA3h3IA0AAIhZCqQgGAMgHAMQgHALgLAJQgMAIgRABQgJgBgJgBg");
	this.shape_3.setTransform(226.1,228.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAqBuIAAi4IhTAAIAAC4IgyAAIAAjbIC3AAIAADbg");
	this.shape_4.setTransform(204,227.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgoARIAAghIBSAAIAAAhg");
	this.shape_5.setTransform(186.9,228.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhIBuIAAjbICOAAIAAAhIheAAIAAA7IBaAAIAAAfIhaAAIAAA+IBhAAIAAAig");
	this.shape_6.setTransform(172.7,227.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F9BABC").s().p("AgXBuIAAi0IhGAAIAAgnIC6AAIAAAnIhFAAIAAC0g");
	this.shape_7.setTransform(291.7,227.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F9BABC").s().p("AAkBuIhThpIAABpIgxAAIAAjbIAxAAIAABfIBOhfIA7AAIhcBnIBjB0g");
	this.shape_8.setTransform(272.2,227.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F9BABC").s().p("AAsBuIAAhdIhXAAIAABdIgwAAIAAjbIAwAAIAABXIBXAAIAAhXIAwAAIAADbg");
	this.shape_9.setTransform(248.5,227.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F9BABC").s().p("Ag7BuIgRgDIABgiIAKADIANABQAJgBAHgHQAFgHAHgOIhSifIA1AAIA2B3IA3h3IA0AAIhZCqQgGAMgHAMQgHALgLAJQgMAIgRABQgJgBgJgBg");
	this.shape_10.setTransform(226.1,228.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F9BABC").s().p("AAqBuIAAi4IhTAAIAAC4IgyAAIAAjbIC3AAIAADbg");
	this.shape_11.setTransform(204,227.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F9BABC").s().p("AgoARIAAghIBSAAIAAAhg");
	this.shape_12.setTransform(186.9,228.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F9BABC").s().p("AhIBuIAAjbICOAAIAAAhIheAAIAAA7IBaAAIAAAfIhaAAIAAA+IBhAAIAAAig");
	this.shape_13.setTransform(172.7,227.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2}]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,464.4,250.9);


(lib.eFaktura_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hitArea
	this.instance = new lib.hitArea_mc();
	this.instance.parent = this;
	this.instance.setTransform(225.4,112.9,1,1,0,0,0,164,162.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	// Layer 3
	this.instance_1 = new lib.mail_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(221.4,82.4,1,1,0,0,0,68.8,82.4);
	this.instance_1._off = true;
	this.instance_1.filters = [new cjs.ColorFilter(0.69, 0.69, 0.69, 1, 72.54, 10.23, 12.09, 0)];
	this.instance_1.cache(-2,-2,142,169);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer 1
	this.instance_2 = new lib.mail_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(221.4,82.4,1,1,0,0,0,68.8,82.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABBBuIgUg3IhcAAIgUA3IgwAAIBUjbIA/AAIBUDbgAAjAVIgjhjIglBjIBIAAg");
	this.shape.setTransform(313.8,227.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhSBuIAAjbIBOAAQAWAAAVAHQAUAGALAPQANAPAAAZQAAAZgNAQQgLAPgUAHQgUAHgXAAIgeAAIAABRgAgigDIARAAQANAAALgCQAMgDAIgIQAHgJAAgQQAAgTgNgIQgNgIgWAAIgUAAg");
	this.shape_1.setTransform(293.1,227.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag8BuIgQgDIABgiIAKADIANABQAJgBAHgHQAGgHAGgOIhSifIA1AAIA2B3IA3h3IA0AAIhZCqQgFAMgIAMQgHALgLAJQgMAIgRABQgKgBgJgBg");
	this.shape_2.setTransform(271.7,228.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXBuIAAi0IhFAAIAAgnIC6AAIAAAnIhFAAIAAC0g");
	this.shape_3.setTransform(251.4,227.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAkBuIhThpIAABpIgxAAIAAjbIAxAAIAABfIBOhfIA7AAIhdBnIBkB0g");
	this.shape_4.setTransform(231.9,227.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABBBuIgUg3IhcAAIgUA3IgwAAIBUjbIA/AAIBUDbgAAjAVIgjhjIgmBjIBJAAg");
	this.shape_5.setTransform(208.3,227.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYBxIAAgYQgaAAgSgGQgSgGgNgLQgOgMgJgSQgHgRgBgWQABgWAHgRQAJgRAOgMQANgKASgGQASgGAaAAIAAgTIAxAAIAAATQAZABATAFQATAGAMAKQAPALAHASQAIARAAAWQAAAVgIASQgHASgPAMQgMALgTAGQgTAGgZAAIAAAYgAAXA7QAcgBAPgRQAQgQAAgcQAAgSgHgNQgHgNgNgIQgNgHgTAAgAg2g3QgNAIgHANQgGANAAASQgBAcAPAQQAQARAbABIAAh5QgSAAgNAHg");
	this.shape_6.setTransform(182.6,227.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgoARIAAghIBRAAIAAAhg");
	this.shape_7.setTransform(162.9,228.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhIBuIAAjbICOAAIAAAhIheAAIAAA7IBaAAIAAAfIhaAAIAAA+IBhAAIAAAig");
	this.shape_8.setTransform(148.7,227.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F8B9BB").s().p("ABBBuIgUg3IhcAAIgUA3IgwAAIBUjbIA/AAIBUDbgAAjAVIgjhjIglBjIBIAAg");
	this.shape_9.setTransform(313.8,227.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F8B9BB").s().p("AhSBuIAAjbIBOAAQAWAAAVAHQAUAGALAPQANAPAAAZQAAAZgNAQQgLAPgUAHQgUAHgXAAIgeAAIAABRgAgigDIARAAQANAAALgCQAMgDAIgIQAHgJAAgQQAAgTgNgIQgNgIgWAAIgUAAg");
	this.shape_10.setTransform(293.1,227.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F8B9BB").s().p("Ag8BuIgQgDIABgiIAKADIANABQAJgBAHgHQAGgHAGgOIhSifIA1AAIA2B3IA3h3IA0AAIhZCqQgFAMgIAMQgHALgLAJQgMAIgRABQgKgBgJgBg");
	this.shape_11.setTransform(271.7,228.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F8B9BB").s().p("AgXBuIAAi0IhFAAIAAgnIC6AAIAAAnIhFAAIAAC0g");
	this.shape_12.setTransform(251.4,227.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F8B9BB").s().p("AAkBuIhThpIAABpIgxAAIAAjbIAxAAIAABfIBOhfIA7AAIhdBnIBkB0g");
	this.shape_13.setTransform(231.9,227.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F8B9BB").s().p("ABBBuIgUg3IhcAAIgUA3IgwAAIBUjbIA/AAIBUDbgAAjAVIgjhjIgmBjIBJAAg");
	this.shape_14.setTransform(208.3,227.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F8B9BB").s().p("AgYBxIAAgYQgaAAgSgGQgSgGgNgLQgOgMgJgSQgHgRgBgWQABgWAHgRQAJgRAOgMQANgKASgGQASgGAaAAIAAgTIAxAAIAAATQAZABATAFQATAGAMAKQAPALAHASQAIARAAAWQAAAVgIASQgHASgPAMQgMALgTAGQgTAGgZAAIAAAYgAAXA7QAcgBAPgRQAQgQAAgcQAAgSgHgNQgHgNgNgIQgNgHgTAAgAg2g3QgNAIgHANQgGANAAASQgBAcAPAQQAQARAbABIAAh5QgSAAgNAHg");
	this.shape_15.setTransform(182.6,227.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F8B9BB").s().p("AgoARIAAghIBRAAIAAAhg");
	this.shape_16.setTransform(162.9,228.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F8B9BB").s().p("AhIBuIAAjbICOAAIAAAhIheAAIAAA7IBaAAIAAAfIhaAAIAAA+IBhAAIAAAig");
	this.shape_17.setTransform(148.7,227.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2,p:{regY:82.4,scaleX:1,scaleY:1}}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2,p:{regY:82.3,scaleX:0.836,scaleY:0.836}}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2,p:{regY:82.4,scaleX:1,scaleY:1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,464.4,250.9);


(lib.back_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.hitArea_mc();
	this.instance.parent = this;
	this.instance.setTransform(35.1,21.5,0.189,0.189,0,0,0,164.1,162.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC1C24").s().p("AlBgLIEyjNQAHgEAFAAQAMAAAGAMQAFAIgCAKQgCAKgIAFIj0CkIDSCPIAAipIFFAAQAJAAAHAHQAHAHAAAKQAAAKgHAGQgHAHgJAAIkYAAIAADTg");
	this.shape.setTransform(32.2,22.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({scaleX:1.47,scaleY:1.47},0).wait(1).to({scaleX:0.81,scaleY:0.81},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64.4,44.2);


// stage content:
(lib.EVN_app_main_v6_ani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{home:0,govornoSandace:45,ePunkt:89,eFaktura:139});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.govSandace_btn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		this.ePunkt.addEventListener("click", fl_ClickToGoToAndPlayFromFrame2.bind(this));
		this.eFaktura_btn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame3.bind(this));
		this.back_btn.addEventListener("click", backHome.bind(this));
		
		
		this.govSandace_btn.cursor = "pointer";
		this.ePunkt.cursor = "pointer";
		this.eFaktura_btn.cursor = "pointer";
		this.back_btn.cursor = "pointer";
		
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay("govornoSandace");
		}
		
		function fl_ClickToGoToAndPlayFromFrame2()
		{
			this.gotoAndPlay("ePunkt");
		}
		
		function fl_ClickToGoToAndPlayFromFrame3()
		{
			this.gotoAndPlay("eFaktura");
		}
		function backHome(){
			this.gotoAndPlay("home");
		}
		/*govSandace_btn.addEventListener(MouseEvent.CLICK, clickGovSandace);
		govSandace_btn.addEventListener("onPress", pressHandler);
		govSandace_btn.addEventListener("onPress", pressHandler);
		
		function clickGovSandace(e:MouseEvent):void {
			this.gotoAndPlay("govornoSandace");
		}
		*/
	}
	this.frame_44 = function() {
		this.stop();
	}
	this.frame_88 = function() {
		this.stop();
	}
	this.frame_138 = function() {
		this.stop();
	}
	this.frame_189 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(44).call(this.frame_44).wait(44).call(this.frame_88).wait(50).call(this.frame_138).wait(51).call(this.frame_189).wait(1));

	// Layer 1
	this.instance = new lib.mail_mc();
	this.instance.parent = this;
	this.instance.setTransform(376.2,189.6,0.744,0.744,0,0,0,68.8,82.4);
	this.instance._off = true;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 234, 33, 39, 0)];
	this.instance.cache(-2,-2,142,169);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(139).to({_off:false},0).wait(51));

	// Layer 15
	this.instance_1 = new lib.sandace_txt("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(279.7,583.8,0.084,0.084,0,0,0,154.2,90.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.epunkt_text("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(282.9,581.6,0.129,0.129,0,0,0,164.8,126.3);
	this.instance_2._off = true;

	this.instance_3 = new lib.efra_txt("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(286.7,579.8,0.113,0.113,0,0,0,166.7,126.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45).to({_off:false},0).to({regX:154,scaleX:1,scaleY:1,x:279.6},11,cjs.Ease.get(-1)).to({_off:true},33).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(89).to({_off:false},0).to({scaleX:1,scaleY:1,x:282.8},11,cjs.Ease.get(-1)).to({_off:true},39).wait(51));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(139).to({_off:false},0).to({regX:166.8,scaleX:1,scaleY:1,y:579.7},11,cjs.Ease.get(-1)).wait(40));

	// Layer 1
	this.instance_4 = new lib.circle();
	this.instance_4.parent = this;
	this.instance_4.setTransform(285.7,574.1,0.407,0.407,0,0,0,202.5,202.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(45).to({_off:false},0).wait(1).to({scaleX:0.42,scaleY:0.42},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:285.6},0).wait(1).to({scaleX:0.49,scaleY:0.49},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:285.7},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:285.6},0).wait(1).to({scaleX:0.76,scaleY:0.76},0).wait(1).to({scaleX:0.86,scaleY:0.86},0).wait(1).to({scaleX:0.88,scaleY:0.88},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:1,scaleY:1,x:285.7},0).wait(33).to({scaleX:0.41,scaleY:0.41},0).wait(1).to({scaleX:0.42,scaleY:0.42},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:285.6},0).wait(1).to({scaleX:0.49,scaleY:0.49},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:285.7},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:285.6},0).wait(1).to({scaleX:0.76,scaleY:0.76},0).wait(1).to({scaleX:0.86,scaleY:0.86},0).wait(1).to({scaleX:0.88,scaleY:0.88},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:1,scaleY:1,x:285.7},0).wait(39).to({scaleX:0.41,scaleY:0.41},0).wait(1).to({scaleX:0.42,scaleY:0.42},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:285.6},0).wait(1).to({scaleX:0.49,scaleY:0.49},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:285.7},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:285.6},0).wait(1).to({scaleX:0.76,scaleY:0.76},0).wait(1).to({scaleX:0.86,scaleY:0.86},0).wait(1).to({scaleX:0.88,scaleY:0.88},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:1,scaleY:1,x:285.7},0).wait(40));

	// back_mc
	this.instance_5 = new lib.back_mc("single",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(660.7,538.3,0.556,0.556,0,0,180,32.1,22);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(45).to({_off:false},0).to({x:676.7,alpha:1},11,cjs.Ease.get(1)).wait(33).to({x:660.7,alpha:0},0).to({x:676.7,alpha:1},11,cjs.Ease.get(1)).wait(39).to({x:660.7,alpha:0},0).to({x:676.7,alpha:1},11,cjs.Ease.get(1)).wait(10).to({startPosition:0},0).wait(30));

	// back_mc
	this.instance_6 = new lib.back_mc("single",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(660.7,579.1,0.556,0.556,0,0,180,32.1,22);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(48).to({_off:false},0).to({x:676.7,alpha:1},11,cjs.Ease.get(1)).to({_off:true},30).wait(3).to({_off:false,x:660.7,alpha:0},0).to({x:676.7,alpha:1},11,cjs.Ease.get(1)).to({_off:true},36).wait(3).to({_off:false,x:660.7,alpha:0},0).to({x:676.7,alpha:1},11,cjs.Ease.get(1)).wait(7).to({startPosition:0},0).wait(30));

	// back_mc
	this.instance_7 = new lib.back_mc("single",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(660.7,623.7,0.556,0.556,0,0,180,32.1,22);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(51).to({_off:false},0).to({x:676.7,alpha:1},11,cjs.Ease.get(1)).to({_off:true},27).wait(6).to({_off:false,x:660.7,alpha:0},0).to({x:676.7,alpha:1},11,cjs.Ease.get(1)).to({_off:true},33).wait(6).to({_off:false,x:660.7,alpha:0},0).to({x:676.7,alpha:1},11,cjs.Ease.get(1)).wait(4).to({startPosition:0},0).wait(30));

	// Layer 8
	this.instance_8 = new lib.back_mc("single",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(660.7,663.7,0.556,0.556,0,0,180,32.1,22);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(98).to({_off:false},0).to({x:676.7,alpha:1},11,cjs.Ease.get(1)).to({_off:true},30).wait(9).to({_off:false,x:660.7,alpha:0},0).to({x:676.7,alpha:1},11,cjs.Ease.get(1)).wait(1).to({startPosition:0},0).wait(30));

	// Layer 9
	this.instance_9 = new lib.back_mc("single",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(660.7,706.9,0.556,0.556,0,0,180,32.1,22);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(102).to({_off:false},0).to({x:676.7,alpha:1},11,cjs.Ease.get(1)).to({_off:true},26).wait(51));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#58595B").s().p("AgLANIAAgaIAYAAIAAAag");
	this.shape.setTransform(1686.8,713.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#58595B").s().p("AAvBUIAAiPIhZCPIgXAAIAAioIATAAIAACQIBaiQIAWAAIAACog");
	this.shape_1.setTransform(1673.1,706.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#58595B").s().p("AA5BuIAAgzIiDAAIAAioIATAAIAACXIBYAAIAAiXIASAAIAACXIAYAAIAABEg");
	this.shape_2.setTransform(1655.9,709.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#58595B").s().p("AAvBUIAAiPIhZCPIgXAAIAAioIATAAIAACQIBaiQIAWAAIAACog");
	this.shape_3.setTransform(1636.7,706.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#58595B").s().p("AAuBUIAAhRIhbAAIAABRIgTAAIAAioIATAAIAABHIBbAAIAAhHIATAAIAACog");
	this.shape_4.setTransform(1618.5,706.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#58595B").s().p("AgVBLQgTgMgKgTQgKgUAAgYQAAgYAKgUQALgTATgMQATgLAYgBIATABQAJABAIAEIgBATQgHgEgJgCIgRgBQgVAAgOAJQgOAJgIAQQgIAPAAAUQAAASAIAQQAIAQAOALQAOAJAVABQAKAAAIgCQAHgCAJgDIACASIgTAFIgSABQgaAAgTgNg");
	this.shape_5.setTransform(1602.4,706.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#58595B").s().p("AAvBUIAAiPIhZCPIgXAAIAAioIATAAIAACQIBaiQIAWAAIAACog");
	this.shape_6.setTransform(1585.6,706.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#58595B").s().p("AhDB7IAAi2IgBgeIgBgeIARAAIACAfQAHgQAOgJQAPgJAQAAQAaABAPAMQAPAMAGAUQAGATAAAYQAAAQgDAPQgEAPgIANQgIAMgNAJQgNAHgTAAQgQAAgOgIQgOgIgHgPIAABlgAgWhiQgKAGgGALQgGAKgDAMQgDANAAAMQAAAMADAMQADALAGALQAGAKAJAHQAKAHANAAQAUgBALgLQALgKAEgQQAEgQAAgQQAAgSgEgQQgEgPgLgLQgLgKgUAAQgNAAgJAGg");
	this.shape_7.setTransform(1567.9,710.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#58595B").s().p("AgRBWQgJgBgHgEQgOgHgKgMQgKgNgEgPQgFgRAAgRQAAgXAJgUQAJgUARgMQARgLAYgBQAaABARALQARAMAIAUQAJATgBAYQABAYgJAUQgJATgQAMQgSANgZAAQgJAAgIgCgAggg7QgMAKgGAQQgGAPABASQAAANACAMQAEANAGAKQAIAKAKAGQALAHAOAAQAUgBAMgKQANgLAFgQQAHgQgBgRQABgSgGgQQgGgPgMgKQgNgKgUAAQgTAAgNAKg");
	this.shape_8.setTransform(1549.3,706.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#58595B").s().p("AAoBUIhWhVIAABVIgTAAIAAioIATAAIAABOIBOhOIAXAAIhPBPIBaBZg");
	this.shape_9.setTransform(1533.5,706.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#58595B").s().p("AgVBLQgTgMgKgTQgKgUAAgYQAAgYAKgUQALgTATgMQATgLAYgBIATABQAJABAIAEIgBATQgHgEgJgCIgRgBQgVAAgOAJQgOAJgIAQQgIAPAAAUQAAASAIAQQAIAQAOALQAOAJAVABQAKAAAIgCQAHgCAJgDIACASIgTAFIgSABQgaAAgTgNg");
	this.shape_10.setTransform(1508.3,706.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#58595B").s().p("AAvBUIAAiPIhZCPIgXAAIAAioIATAAIAACQIBaiQIAWAAIAACog");
	this.shape_11.setTransform(1491.5,706.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#58595B").s().p("AAuBUIAAhRIhbAAIAABRIgTAAIAAioIATAAIAABHIBbAAIAAhHIATAAIAACog");
	this.shape_12.setTransform(1473.3,706.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#58595B").s().p("AgkBWQgLgCgJgEIACgUQAHAEALAEQALACAPAAQAUAAANgJQAMgKABgOQAAgSgMgIQgNgJgVABIgIAAIgHAAIAAgQIAGAAIAIAAQATAAAMgIQAMgHAAgRQAAgKgGgFQgFgGgJgCQgIgCgIAAQgPAAgNAFQgNAFgGADIgCgSQAHgEANgEQAMgEASAAQAPAAANAEQANAEAHAJQAHAIABAPQgBAPgJALQgKALgRAEQASACALAKQALAKABATQgBASgJAMQgJALgPAGQgQAGgQAAQgQAAgLgCg");
	this.shape_13.setTransform(1456.8,706.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#58595B").s().p("AAvBUIAAiPIhZCPIgXAAIAAioIATAAIAACQIBaiQIAWAAIAACog");
	this.shape_14.setTransform(1440.7,706.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#58595B").s().p("AgrBxQgRgNgIgWQgHgWAAgZQAAgZACgYQABgXAHgUQAGgUAOgOQAKgIAKgFQALgFAMgDQALgCAMgBIAYgDQALAAALgEIgBAUQgKADgLABIgWADQgdACgRAJQgRAIgIAUQgIATgCAiQACgGAIgKQAHgIANgHQANgHARAAQAaAAARALQAQAMAIAUQAHASAAAZQAAAZgJAUQgJATgRALQgRALgXAAQgbAAgRgOgAgngKQgQASAAAiQAAAVAHAPQAIAPANAIQANAJAPAAQAagBAOgSQAPgTAAgfQAAghgOgSQgOgSgaAAQgZAAgQASg");
	this.shape_15.setTransform(1422.4,703);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#58595B").s().p("AggBLQgSgMgJgTQgIgUAAgYQAAgWAIgUQAIgTARgNQAPgMAXgBQAZABAOALQAOAMAGATQAFASAAAVIAAAIIhzAAQAAASAHAQQAGAPAOAKQAOAIAVABQALAAALgDQAKgCAJgFIABATQgKAEgLACQgLACgMAAQgbAAgSgNgAAwgNQgBgNgDgNQgEgNgJgJQgJgJgSAAQgQAAgLAJQgMAKgGANQgEANgCAMIBfAAIAAAAg");
	this.shape_16.setTransform(1396,706.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#58595B").s().p("AgIBUIAAiXIg5AAIAAgRICEAAIAAARIg6AAIAACXg");
	this.shape_17.setTransform(1380.9,706.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#58595B").s().p("AAvBUIAAiPIhZCPIgXAAIAAioIATAAIAACQIBaiQIAWAAIAACog");
	this.shape_18.setTransform(1364.8,706.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#58595B").s().p("AhEBVIgHgCIABgRIAHABIAHABQAOAAAIgPQAHgQADghQADghAAg4IBlAAIAACoIgSAAIAAiXIhBAAQAAAygDAiQgDAhgLASQgMATgXgBIgJAAg");
	this.shape_19.setTransform(1345.5,706.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#58595B").s().p("AgkBSQgMgGgHgLQgHgLAAgQQAAgWAMgMQAMgLAWgFQATgFAbAAIAMAAIAAgIQABgVgKgMQgJgMgXABQgKAAgMACQgMAEgKAFIgCgRQAKgFAMgEQANgDALAAQAgABAOAQQAOAPgBAfIAABJIABARIACASIgSAAIgBgdQgIAQgOAJQgPAIgRAAQgPAAgLgGgAAAABQgTADgLAIQgMAIAAARQAAASAJAIQAKAIAPAAQARAAAMgJQALgJAFgPQAFgOAAgRIAAgHIgGAAIgGgBQgQAAgOACg");
	this.shape_20.setTransform(1329.2,706.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#58595B").s().p("ABGBUIAAiTIg8CTIgUAAIg6iTIAACTIgUAAIAAioIAgAAIA4CVIA6iVIAfAAIAACog");
	this.shape_21.setTransform(1310.2,706.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#58595B").s().p("AAvBUIAAiPIhZCPIgXAAIAAioIATAAIAACQIBaiQIAWAAIAACog");
	this.shape_22.setTransform(1280.6,706.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#58595B").s().p("AgkBSQgMgGgHgLQgHgLAAgQQAAgWAMgMQAMgLAVgFQAUgFAbAAIAMAAIAAgIQAAgVgJgMQgJgMgXABQgLAAgLACQgMAEgLAFIgBgRQAKgFAMgEQANgDALAAQAgABAOAQQAOAPAAAfIAABJIAAARIACASIgSAAIgBgdQgIAQgOAJQgOAIgSAAQgPAAgLgGgAAAABQgSADgMAIQgMAIAAARQAAASAJAIQAKAIAOAAQASAAAMgJQALgJAFgPQAFgOAAgRIAAgHIgGAAIgGgBQgQAAgOACg");
	this.shape_23.setTransform(1253.8,706.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#58595B").s().p("AgIBUIAAiXIg6AAIAAgRICFAAIAAARIg6AAIAACXg");
	this.shape_24.setTransform(1239.3,706.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#58595B").s().p("AglBSQgLgGgHgLQgHgLAAgQQAAgWAMgMQANgLAUgFQAUgFAcAAIALAAIAAgIQAAgVgJgMQgJgMgXABQgLAAgLACQgMAEgLAFIgCgRQALgFAMgEQANgDALAAQAgABAOAQQAOAPAAAfIAABJIAAARIACASIgSAAIgCgdQgHAQgOAJQgOAIgSAAQgPAAgMgGgAgBABQgRADgMAIQgMAIAAARQAAASAJAIQAJAIAPAAQATAAALgJQALgJAFgPQAFgOAAgRIAAgHIgGAAIgGgBQgQAAgPACg");
	this.shape_25.setTransform(1223.7,706.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#58595B").s().p("Ag8BUIAAioIA5AAQAPABANAEQAMADAJAJQAHAJAAAPQAAAOgGAKQgFAKgNAEQAIABAHAEQAHAFAEAHQAFAJAAALQAAATgHAMQgJALgNAGQgOAEgQAAgAgpBDIApAAQAUAAAKgJQAKgJAAgPQAAgOgJgJQgKgHgVgBIgpAAgAgpgNIAnAAQARAAAIgGQAKgHAAgPQAAgNgKgHQgJgGgSAAIglAAg");
	this.shape_26.setTransform(1208.6,706.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#58595B").s().p("AgIBUIAAiXIg6AAIAAgRICEAAIAAARIg5AAIAACXg");
	this.shape_27.setTransform(1193.1,706.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#58595B").s().p("AgVBLQgTgMgKgTQgKgUAAgYQAAgYAKgUQALgTATgMQATgLAYgBIATABQAJABAIAEIgBATQgHgEgJgCIgRgBQgVAAgOAJQgOAJgIAQQgIAPAAAUQAAASAIAQQAIAQAOALQAOAJAVABQAKAAAIgCQAHgCAJgDIACASIgTAFIgSABQgaAAgTgNg");
	this.shape_28.setTransform(1179,706.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#58595B").s().p("AAuBUIAAhRIhbAAIAABRIgTAAIAAioIATAAIAABHIBbAAIAAhHIATAAIAACog");
	this.shape_29.setTransform(1162.3,706.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#58595B").s().p("AAvBUIAAiPIhZCPIgXAAIAAioIATAAIAACQIBaiQIAWAAIAACog");
	this.shape_30.setTransform(1144.1,706.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#58595B").s().p("AAoB6IhWhWIAABWIgTAAIAAioIATAAIAABNIBOhNIAXAAIhPBOIBZBagAgUhMIAXguIAXAAIgdAug");
	this.shape_31.setTransform(1128.4,703);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#58595B").s().p("AglBSQgMgGgGgLQgHgLAAgQQAAgWAMgMQAMgLAVgFQAVgFAbAAIALAAIAAgIQAAgVgJgMQgJgMgWABQgMAAgLACQgMAEgKAFIgDgRQALgFANgEQAMgDAMAAQAfABAOAQQANAPAAAfIAABJIABARIACASIgSAAIgCgdQgGAQgPAJQgPAIgRAAQgPAAgMgGgAgBABQgSADgLAIQgMAIAAARQAAASAKAIQAIAIAPAAQASAAAMgJQALgJAFgPQAFgOAAgRIAAgHIgGAAIgGgBQgQAAgPACg");
	this.shape_32.setTransform(1110.6,706.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#58595B").s().p("ABGBUIAAiTIg8CTIgTAAIg8iTIAACTIgTAAIAAioIAgAAIA4CVIA6iVIAfAAIAACog");
	this.shape_33.setTransform(1091.7,706.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#58595B").s().p("AgSBWQgIgBgHgEQgOgHgKgMQgKgNgEgPQgEgRAAgRQgBgXAJgUQAJgUARgMQARgLAYgBQAaABARALQARAMAIAUQAIATAAAYQAAAYgIAUQgJATgQAMQgSANgZAAQgJAAgJgCgAggg7QgMAKgGAQQgGAPABASQAAANACAMQAEANAGAKQAIAKAKAGQALAHAOAAQATgBANgKQAMgLAHgQQAFgQAAgRQABgSgGgQQgGgPgMgKQgNgKgUAAQgTAAgNAKg");
	this.shape_34.setTransform(1071.1,706.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#58595B").s().p("ABHBuIAAgzIiNAAIAAAzIgRAAIAAhEIASAAIANgVQAFgKACgLQADgLABgOQACgQAAgVIAAgvIBrAAIAACXIAYAAIAABEgAgZg4QAAAUgCARQgBARgFAPQgFAPgKAOIBdAAIAAiGIhGAAg");
	this.shape_35.setTransform(1052.5,709.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#58595B").s().p("AglBSQgLgGgHgLQgHgLAAgQQAAgWAMgMQAMgLAWgFQATgFAbAAIAMAAIAAgIQAAgVgJgMQgJgMgWABQgMAAgLACQgMAEgKAFIgDgRQALgFAMgEQANgDAMAAQAfABAOAQQANAPAAAfIAABJIABARIACASIgSAAIgCgdQgGAQgPAJQgPAIgRAAQgPAAgMgGgAgBABQgSADgLAIQgMAIAAARQAAASAKAIQAJAIAOAAQATAAALgJQALgJAFgPQAFgOAAgRIAAgHIgGAAIgGgBQgQAAgPACg");
	this.shape_36.setTransform(1025.7,706.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#58595B").s().p("AgkBWQgLgCgJgEIACgUQAHAEALAEQALACAPAAQAUAAANgJQAMgKABgOQAAgSgMgIQgNgJgVABIgIAAIgHAAIAAgQIAGAAIAIAAQATAAAMgIQAMgHAAgRQAAgKgGgFQgFgGgJgCQgIgCgIAAQgPAAgNAFQgNAFgGADIgCgSQAHgEANgEQAMgEASAAQAPAAANAEQANAEAHAJQAHAIABAPQgBAPgJALQgKALgRAEQASACALAKQALAKABATQgBASgJAMQgJALgPAGQgQAGgQAAQgQAAgLgCg");
	this.shape_37.setTransform(1010.6,706.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#58595B").s().p("AglBSQgLgGgHgLQgHgLAAgQQAAgWAMgMQAMgLAWgFQATgFAbAAIAMAAIAAgIQAAgVgJgMQgJgMgWABQgMAAgLACQgMAEgKAFIgDgRQALgFANgEQAMgDAMAAQAfABAOAQQANAPAAAfIAABJIABARIACASIgSAAIgCgdQgGAQgPAJQgPAIgRAAQgPAAgMgGgAgBABQgRADgMAIQgMAIAAARQAAASAKAIQAIAIAQAAQASAAALgJQALgJAFgPQAFgOAAgRIAAgHIgGAAIgGgBQgQAAgPACg");
	this.shape_38.setTransform(986.1,706.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#58595B").s().p("AAuBUIAAhRIhbAAIAABRIgTAAIAAioIATAAIAABHIBbAAIAAhHIATAAIAACog");
	this.shape_39.setTransform(969.4,706.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#58595B").s().p("AAtBUIAAiXIhZAAIAACXIgTAAIAAioIB/AAIAACog");
	this.shape_40.setTransform(951.4,706.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#58595B").s().p("AgkBSQgMgGgHgLQgHgLAAgQQAAgWAMgMQANgLAUgFQAVgFAaAAIAMAAIAAgIQAAgVgJgMQgJgMgXABQgLAAgLACQgMAEgLAFIgBgRQAKgFAMgEQANgDALAAQAgABAOAQQAOAPAAAfIAABJIAAARIACASIgSAAIgBgdQgIAQgOAJQgOAIgSAAQgPAAgLgGgAAAABQgSADgMAIQgMAIAAARQAAASAJAIQAKAIAOAAQASAAAMgJQALgJAFgPQAFgOAAgRIAAgHIgGAAIgGgBQgQAAgOACg");
	this.shape_41.setTransform(933.8,706.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#58595B").s().p("AgIBUIAAiXIg6AAIAAgRICFAAIAAARIg6AAIAACXg");
	this.shape_42.setTransform(919.4,706.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#58595B").s().p("AgVBLQgTgMgKgTQgKgUAAgYQAAgYAKgUQALgTATgMQATgLAYgBIATABQAJABAIAEIgBATQgHgEgJgCIgRgBQgVAAgOAJQgOAJgIAQQgIAPAAAUQAAASAIAQQAIAQAOALQAOAJAVABQAKAAAIgCQAHgCAJgDIACASIgTAFIgSABQgaAAgTgNg");
	this.shape_43.setTransform(905.3,706.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#58595B").s().p("AgSBWQgIgBgHgEQgOgHgKgMQgJgNgFgPQgFgRABgRQAAgXAIgUQAJgUARgMQARgLAYgBQAaABARALQARAMAIAUQAJATAAAYQAAAYgJAUQgIATgSAMQgQANgaAAQgJAAgJgCgAgfg7QgNAKgGAQQgFAPgBASQAAANADAMQAEANAGAKQAIAKAKAGQALAHAOAAQATgBANgKQAMgLAHgQQAFgQABgRQAAgSgGgQQgGgPgMgKQgNgKgUAAQgTAAgMAKg");
	this.shape_44.setTransform(888.6,706.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#58595B").s().p("ABHBuIAAgzIiNAAIAAAzIgRAAIAAhEIASAAIANgVQAFgKACgLQADgLABgOQACgQAAgVIAAgvIBrAAIAACXIAYAAIAABEgAgZg4QAAAUgCARQgBARgFAPQgFAPgKAOIBdAAIAAiGIhGAAg");
	this.shape_45.setTransform(870,709.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#58595B").s().p("AggBLQgSgMgJgTQgIgUAAgYQAAgWAIgUQAIgTAQgNQAQgMAXgBQAZABAOALQAOAMAFATQAGASAAAVIAAAIIhzAAQAAASAHAQQAGAPAPAKQAOAIAUABQALAAAKgDQALgCAJgFIABATQgLAEgKACQgLACgLAAQgcAAgSgNgAAwgNQAAgNgEgNQgEgNgJgJQgKgJgQAAQgSAAgLAJQgLAKgGANQgEANgBAMIBeAAIAAAAg");
	this.shape_46.setTransform(843.8,706.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#58595B").s().p("AgkBSQgNgGgGgLQgHgLAAgQQAAgWAMgMQAMgLAWgFQATgFAbAAIAMAAIAAgIQABgVgKgMQgJgMgWABQgLAAgMACQgMAEgKAFIgCgRQAKgFAMgEQANgDAMAAQAfABAOAQQANAPAAAfIAABJIABARIACASIgSAAIgBgdQgIAQgOAJQgPAIgRAAQgPAAgLgGgAAAABQgTADgLAIQgMAIAAARQAAASAKAIQAJAIAPAAQARAAAMgJQALgJAFgPQAFgOAAgRIAAgHIgGAAIgGgBQgQAAgOACg");
	this.shape_47.setTransform(817.9,706.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#58595B").s().p("AgwBUIAAioIBhAAIAAARIhPAAIAACXg");
	this.shape_48.setTransform(805.2,706.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#58595B").s().p("Ag1B6IgIgBIACgTIAHACIAHABQAHAAAGgEQAFgFAEgHIAHgNIADgMIAEgMIg6iuIAUAAIAvCVIAxiVIATAAIhEDIQgHAVgLAMQgKALgRABIgIgBg");
	this.shape_49.setTransform(790.5,710.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#58595B").s().p("AhEBVIgHgCIABgRIAHABIAHABQAOAAAIgPQAHgQADghQADghAAg4IBlAAIAACoIgSAAIAAiXIhBAAQAAAygDAiQgDAhgLASQgMATgXgBIgJAAg");
	this.shape_50.setTransform(773,706.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#58595B").s().p("AgVBLQgTgMgKgTQgKgUAAgYQAAgYAKgUQALgTATgMQATgLAYgBIATABQAJABAIAEIgBATQgHgEgJgCIgRgBQgVAAgOAJQgOAJgIAQQgIAPAAAUQAAASAIAQQAIAQAOALQAOAJAVABQAKAAAIgCQAHgCAJgDIACASIgTAFIgSABQgaAAgTgNg");
	this.shape_51.setTransform(758.3,706.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#58595B").s().p("Ag1B6IgIgBIACgTIAHACIAHABQAHAAAGgEQAFgFAEgHIAHgNIADgMIAEgMIg6iuIAUAAIAvCVIAxiVIATAAIhEDIQgHAVgLAMQgKALgRABIgIgBg");
	this.shape_52.setTransform(743.4,710.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#58595B").s().p("AglBSQgMgGgGgLQgHgLAAgQQAAgWAMgMQANgLAUgFQAVgFAbAAIALAAIAAgIQAAgVgJgMQgJgMgXABQgKAAgMACQgMAEgLAFIgCgRQALgFANgEQAMgDALAAQAgABAOAQQANAPAAAfIAABJIABARIACASIgSAAIgCgdQgGAQgPAJQgPAIgRAAQgPAAgMgGgAgBABQgRADgMAIQgMAIAAARQAAASAKAIQAIAIAPAAQATAAALgJQALgJAFgPQAFgOAAgRIAAgHIgGAAIgGgBQgQAAgPACg");
	this.shape_53.setTransform(718.5,706.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#58595B").s().p("AgkBSQgNgGgGgLQgHgLAAgQQAAgWAMgMQAMgLAWgFQATgFAbAAIAMAAIAAgIQABgVgKgMQgJgMgWABQgLAAgMACQgMAEgKAFIgCgRQAKgFAMgEQANgDAMAAQAfABAOAQQANAPAAAfIAABJIABARIACASIgSAAIgBgdQgIAQgOAJQgPAIgRAAQgPAAgLgGgAAAABQgTADgLAIQgMAIAAARQAAASAJAIQAKAIAPAAQARAAAMgJQALgJAFgPQAFgOAAgRIAAgHIgGAAIgGgBQgQAAgOACg");
	this.shape_54.setTransform(702.2,706.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#58595B").s().p("Ag7BUIAAioIA5AAQAOABANAEQANADAHAJQAIAJAAAPQAAAOgFAKQgHAKgMAEQAIABAGAEQAIAFAFAHQAEAJAAALQABATgJAMQgHALgOAGQgNAEgSAAgAgpBDIApAAQAUAAAKgJQALgJAAgPQAAgOgKgJQgKgHgWgBIgoAAgAgpgNIAnAAQAQAAAJgGQAKgHAAgPQAAgNgKgHQgJgGgRAAIgmAAg");
	this.shape_55.setTransform(687.1,706.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#58595B").s().p("AgsBsQgTgKgMgQQgMgQgGgVQgFgVAAgYQAAgWAGgVQAGgVAMgQQANgRASgJQATgKAYAAQAaAAATAKQASAJAMAQQANAQAFAVQAGAVAAAXQAAAXgGAVQgGAVgMAQQgNARgSAJQgTAKgZAAQgZAAgTgJgAgihYQgPAIgJAOQgKAOgEASQgFARAAARQAAASAFASQAEARAKAOQAJAOAPAIQAPAJATAAQAVAAAOgJQAPgIAKgOQAJgOAEgRQAFgSAAgSQAAgRgFgSQgEgRgJgOQgKgOgPgIQgOgJgVAAQgTAAgPAJg");
	this.shape_56.setTransform(666.7,703.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#58595B").s().p("AglBSQgMgFgGgMQgHgLAAgQQAAgVAMgMQAMgMAWgFQATgFAbAAIAMAAIAAgJQABgUgKgLQgJgNgWAAQgLAAgMAEQgMADgKAGIgDgRQALgHAMgCQANgEAMAAQAfABAOAPQANAQAAAfIAABKIABARIACASIgSAAIgCgeQgGAQgPAIQgPAJgRAAQgPAAgMgGgAgBABQgRACgMAJQgMAJAAAQQAAASAKAIQAJAIAPAAQASgBALgIQALgJAFgPQAFgOAAgRIAAgIIgGAAIgGAAQgQAAgPACg");
	this.shape_57.setTransform(1308.4,620.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#58595B").s().p("AhDB7IAAi3IgBgdIgBgdIARAAIACAdQAHgPAOgJQAPgIAQgBQAaAAAPANQAPAMAGAUQAGATAAAXQAAARgDAQQgEAOgIANQgIANgNAHQgNAIgTAAQgQAAgOgIQgOgIgHgPIAABlgAgWhiQgKAHgGAKQgGAKgDAMQgDAMAAAMQAAAMADANQADALAGALQAGAKAJAHQAKAGANAAQAUAAALgKQALgMAEgOQAEgRAAgRQAAgQgEgRQgEgQgLgJQgLgLgUAAQgNAAgJAGg");
	this.shape_58.setTransform(1292.2,624.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#58595B").s().p("Ag1B7IgIgDIACgSIAHADIAHABQAHgBAGgFQAFgEAEgHIAHgOIADgMIAEgLIg6iuIAUAAIAvCVIAxiVIATAAIhEDIQgHAVgLAMQgKAMgRAAIgIAAg");
	this.shape_59.setTransform(1275.6,624.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#58595B").s().p("AgIBVIAAiXIg5AAIAAgRICDAAIAAARIg5AAIAACXg");
	this.shape_60.setTransform(1261.4,620.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#58595B").s().p("AAoBVIhWhWIAABWIgSAAIAAioIASAAIAABNIBOhNIAXAAIhPBOIBZBag");
	this.shape_61.setTransform(1247.9,620.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#58595B").s().p("AglBSQgMgFgGgMQgHgLAAgQQAAgVAMgMQANgMAUgFQAVgFAbAAIALAAIAAgJQAAgUgJgLQgJgNgXAAQgLAAgLAEQgMADgLAGIgCgRQALgHANgCQAMgEALAAQAgABAOAPQANAQABAfIAABKIAAARIACASIgSAAIgCgeQgHAQgOAIQgPAJgRAAQgPAAgMgGgAgBABQgRACgMAJQgMAJAAAQQAAASAKAIQAIAIAPAAQATgBALgIQALgJAFgPQAFgOAAgRIAAgIIgGAAIgGAAQgQAAgPACg");
	this.shape_62.setTransform(1230.1,620.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#58595B").s().p("AgICfIAAhbQgHAKgKAGQgKAFgPAAQgUAAgOgLQgNgMgHgTQgHgUAAgaQAAgZAGgTQAHgUANgLQAOgLAVgBQALABAIADQAIAEAGAFQAFAFAEAFIAAhfIARAAIAABfQADgFAGgFQAGgFAIgEQAIgDAKgBQAWABANALQAOALAGAUQAHATAAAZQAAAagHAUQgHATgOAMQgNALgVAAQgOAAgKgFQgKgGgHgKIAABbgAAXg8QgJAIgFANIAABSQAFANAJAIQAJAIAPABQARgBAKgKQAKgLAEgRQAEgQAAgRQAAgQgEgQQgEgQgKgLQgKgLgRAAQgPAAgJAJgAhJg6QgKALgEAQQgFAQABAQQgBARAFAQQAEARAKALQAKAKARABQAOgBAJgIQAJgIAGgNIAAhSQgGgNgJgIQgJgJgOAAQgRAAgKALg");
	this.shape_63.setTransform(1209.8,620.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#58595B").s().p("AglBSQgMgFgGgMQgHgLAAgQQAAgVAMgMQANgMAUgFQAVgFAbAAIALAAIAAgJQAAgUgJgLQgJgNgWAAQgLAAgMAEQgMADgLAGIgCgRQALgHANgCQAMgEAMAAQAfABAOAPQANAQAAAfIAABKIABARIACASIgSAAIgCgeQgHAQgOAIQgPAJgRAAQgPAAgMgGgAgBABQgRACgMAJQgMAJAAAQQAAASAKAIQAIAIAPAAQATgBALgIQALgJAFgPQAFgOAAgRIAAgIIgGAAIgGAAQgQAAgPACg");
	this.shape_64.setTransform(1179.4,620.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#58595B").s().p("AgIBVIAAiXIg6AAIAAgRICEAAIAAARIg5AAIAACXg");
	this.shape_65.setTransform(1164.9,620.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#58595B").s().p("AglBSQgMgFgGgMQgHgLAAgQQAAgVAMgMQAMgMAWgFQATgFAcAAIALAAIAAgJQAAgUgJgLQgJgNgWAAQgMAAgLAEQgMADgLAGIgCgRQALgHANgCQAMgEAMAAQAfABAOAPQANAQAAAfIAABKIABARIACASIgSAAIgCgeQgHAQgOAIQgPAJgRAAQgPAAgMgGgAgBABQgSACgLAJQgMAJAAAQQAAASAKAIQAIAIAPAAQASgBAMgIQALgJAFgPQAFgOAAgRIAAgIIgGAAIgGAAQgQAAgPACg");
	this.shape_66.setTransform(1149.3,620.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#58595B").s().p("AAuBVIAAhSIhbAAIAABSIgTAAIAAioIATAAIAABGIBbAAIAAhGIATAAIAACog");
	this.shape_67.setTransform(1132.7,620.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#58595B").s().p("ABHBtIAAgxIiNAAIAAAxIgRAAIAAhCIASAAIANgWQAFgKACgLQADgKABgQQACgPAAgVIAAguIBrAAIAACXIAYAAIAABCgAgZg4QAAAUgCARQgBARgFAPQgFAQgKAOIBdAAIAAiGIhGAAg");
	this.shape_68.setTransform(1114.3,623.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#58595B").s().p("AggBMQgSgNgIgUQgJgTAAgYQAAgWAIgUQAIgTARgNQAQgNAWAAQAZABAOAMQAOALAFASQAGAUAAAUIAAAIIhzAAQAAASAHAPQAHAQANAJQAOAJAVABQALAAALgCQAKgDAJgFIABASQgLAFgKACQgLACgMAAQgbAAgSgMgAAwgMQgBgOgDgNQgEgOgJgIQgJgJgSAAQgQAAgLAJQgMAJgFAOQgFANgCANIBfAAIAAAAg");
	this.shape_69.setTransform(1097.1,620.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#58595B").s().p("AhEBVIgHgBIABgSIAHACIAHAAQAOAAAIgPQAHgQADghQADghAAg3IBlAAIAACoIgSAAIAAiXIhBAAQAAAxgDAhQgDAigLATQgMARgXABIgJgBg");
	this.shape_70.setTransform(1078.7,620.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#58595B").s().p("AgVBMQgTgNgKgUQgKgTAAgYQAAgYAKgUQALgUATgLQATgMAYAAIATABQAJACAIADIgBASQgHgDgJgBQgIgCgJAAQgVAAgOAJQgOAJgIAQQgIAQAAATQAAASAIAQQAIARAOAKQAOAJAVAAQAKAAAIgBQAHgCAJgEIACATIgTAFIgSABQgaAAgTgMg");
	this.shape_71.setTransform(1063.9,620.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#58595B").s().p("AgSBXQgIgCgHgEQgPgHgJgNQgKgMgEgPQgEgRgBgRQABgXAIgUQAJgUARgLQARgMAYgBQAaAAARAMQARAMAIATQAIAUAAAYQAAAYgIATQgJAUgRANQgQAMgaAAQgJAAgJgBgAgfg7QgNAKgGAQQgGAQAAARQAAANAEAMQADAMAHALQAGAKALAGQALAGAOAAQAUAAAMgKQANgKAFgRQAGgQABgRQgBgSgFgQQgGgPgNgKQgMgKgUAAQgTAAgMAKg");
	this.shape_72.setTransform(1047.2,620.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#58595B").s().p("AAtBVIAAiXIhZAAIAACXIgTAAIAAioIB/AAIAACog");
	this.shape_73.setTransform(1029,620.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#58595B").s().p("AgkBSQgNgFgGgMQgHgLAAgQQAAgVAMgMQAMgMAWgFQATgFAbAAIAMAAIAAgJQABgUgKgLQgJgNgWAAQgLAAgMAEQgMADgKAGIgCgRQAKgHAMgCQANgEAMAAQAfABAOAPQANAQAAAfIAABKIABARIACASIgSAAIgBgeQgIAQgOAIQgPAJgRAAQgPAAgLgGgAAAABQgTACgLAJQgMAJAAAQQAAASAKAIQAJAIAPAAQARgBAMgIQALgJAFgPQAFgOAAgRIAAgIIgGAAIgGAAQgQAAgOACg");
	this.shape_74.setTransform(1002.4,620.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#58595B").s().p("AAuBVIAAhSIhbAAIAABSIgTAAIAAioIATAAIAABGIBbAAIAAhGIATAAIAACog");
	this.shape_75.setTransform(985.7,620.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#58595B").s().p("AggBMQgSgNgIgUQgJgTAAgYQAAgWAIgUQAJgTAPgNQARgNAWAAQAZABAOAMQAOALAFASQAGAUAAAUIAAAIIhzAAQAAASAHAPQAHAQANAJQAPAJAUABQALAAAKgCQALgDAJgFIABASQgKAFgLACQgKACgMAAQgcAAgSgMgAAwgMQgBgOgDgNQgEgOgJgIQgKgJgQAAQgSAAgKAJQgMAJgFAOQgGANgBANIBfAAIAAAAg");
	this.shape_76.setTransform(959.7,620.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#58595B").s().p("AgGBVIAAhVIhWAAIAABVIgSAAIAAioIASAAIAABEIBWAAIAAhEIASAAIAABEIAsAAQAQAAAMAFQANAFAHAKQAHAKAAAQQAAAbgPANQgQAOgaAAgAAMBEIApAAQAVgBAJgJQAJgKgBgPQABgPgKgJQgJgIgWgBIgnAAg");
	this.shape_77.setTransform(939.3,620.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#58595B").s().p("AglBSQgMgFgGgMQgHgLAAgQQAAgVAMgMQANgMAUgFQAVgFAbAAIALAAIAAgJQAAgUgJgLQgJgNgXAAQgKAAgMAEQgMADgLAGIgCgRQALgHANgCQAMgEALAAQAgABAOAPQAOAQAAAfIAABKIAAARIACASIgSAAIgCgeQgGAQgPAIQgPAJgRAAQgPAAgMgGgAgBABQgRACgMAJQgMAJAAAQQAAASAKAIQAIAIAPAAQATgBALgIQALgJAFgPQAFgOAAgRIAAgIIgGAAIgGAAQgQAAgPACg");
	this.shape_78.setTransform(916.9,620.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#58595B").s().p("AAoB7IhWhXIAABXIgSAAIAAioIASAAIAABMIBOhMIAXAAIhPBNIBZBbgAgUhMIAXguIAXAAIgdAug");
	this.shape_79.setTransform(902.8,616.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#58595B").s().p("AglBSQgMgFgGgMQgHgLAAgQQAAgVAMgMQANgMAUgFQAVgFAbAAIALAAIAAgJQAAgUgJgLQgJgNgXAAQgKAAgMAEQgMADgLAGIgCgRQALgHANgCQAMgEALAAQAgABAOAPQANAQAAAfIAABKIABARIACASIgSAAIgCgeQgGAQgPAIQgPAJgRAAQgPAAgMgGgAgBABQgRACgMAJQgMAJAAAQQAAASAKAIQAIAIAPAAQATgBALgIQALgJAFgPQAFgOAAgRIAAgIIgGAAIgGAAQgQAAgPACg");
	this.shape_80.setTransform(885,620.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#58595B").s().p("AhEBVIgHgBIABgSIAHACIAHAAQAOAAAIgPQAHgQADghQADghAAg3IBlAAIAACoIgSAAIAAiXIhBAAQAAAxgDAhQgDAigLATQgMARgXABIgJgBg");
	this.shape_81.setTransform(867.2,620.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#58595B").s().p("AAtBVIAAiXIhZAAIAACXIgTAAIAAioIB/AAIAACog");
	this.shape_82.setTransform(850.6,620.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#58595B").s().p("AgkBSQgMgFgHgMQgHgLAAgQQAAgVAMgMQANgMAUgFQAVgFAaAAIAMAAIAAgJQAAgUgJgLQgJgNgXAAQgLAAgLAEQgMADgLAGIgBgRQAKgHAMgCQANgEALAAQAgABAOAPQAOAQAAAfIAABKIAAARIACASIgSAAIgBgeQgIAQgOAIQgOAJgSAAQgPAAgLgGgAAAABQgSACgMAJQgMAJAAAQQAAASAJAIQAKAIAOAAQASgBAMgIQALgJAFgPQAFgOAAgRIAAgIIgGAAIgGAAQgQAAgOACg");
	this.shape_83.setTransform(824,620.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#58595B").s().p("AgkBVQgLgCgJgDIACgUQAHAFALACQALADAPABQAUAAANgKQAMgKABgOQAAgTgMgHQgNgJgVABIgIAAIgHAAIAAgRIAGAAIAIAAQATAAAMgHQAMgIAAgQQAAgKgGgFQgFgGgJgCQgIgCgIAAQgPABgNAEQgNAEgGAEIgCgSQAHgEANgEQAMgDASgBQAPAAANAEQANAEAHAJQAHAJABAOQgBAPgJALQgKALgRAEQASADALAJQALALABASQgBARgJANQgJALgPAGQgQAGgQAAQgQAAgLgDg");
	this.shape_84.setTransform(809,620.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#58595B").s().p("AgIBVIAAiXIg5AAIAAgRICDAAIAAARIg5AAIAACXg");
	this.shape_85.setTransform(786.2,620.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#58595B").s().p("AgRBXQgJgCgHgEQgPgHgJgNQgJgMgFgPQgEgRgBgRQAAgXAJgUQAJgUARgLQARgMAYgBQAaAAARAMQARAMAIATQAIAUAAAYQAAAYgIATQgIAUgSANQgRAMgZAAQgJAAgIgBgAggg7QgMAKgGAQQgGAQAAARQABANADAMQADAMAHALQAHAKAKAGQALAGAOAAQAUAAAMgKQANgKAFgRQAHgQgBgRQAAgSgFgQQgGgPgNgKQgMgKgUAAQgTAAgNAKg");
	this.shape_86.setTransform(770.2,620.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#58595B").s().p("AAoBVIhWhWIAABWIgSAAIAAioIASAAIAABNIBOhNIAXAAIhPBOIBZBag");
	this.shape_87.setTransform(754.4,620.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#58595B").s().p("AgSBXQgIgCgHgEQgPgHgJgNQgJgMgFgPQgEgRAAgRQAAgXAIgUQAJgUARgLQARgMAYgBQAaAAARAMQARAMAIATQAJAUAAAYQAAAYgJATQgJAUgRANQgQAMgaAAQgJAAgJgBgAgfg7QgNAKgGAQQgFAQgBARQAAANADAMQAEAMAHALQAGAKALAGQALAGAOAAQAUAAAMgKQANgKAFgRQAGgQABgRQAAgSgGgQQgGgPgNgKQgMgKgUAAQgTAAgMAKg");
	this.shape_88.setTransform(736.1,620.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#58595B").s().p("AhDB7IAAi3IgBgdIgBgdIARAAIACAdQAHgPAOgJQAPgIAQgBQAaAAAPANQAPAMAGAUQAGATAAAXQAAARgDAQQgEAOgIANQgIANgNAHQgNAIgTAAQgQAAgOgIQgOgIgHgPIAABlgAgWhiQgKAHgGAKQgGAKgDAMQgDAMAAAMQAAAMADANQADALAGALQAGAKAJAHQAKAGANAAQAUAAALgKQALgMAEgOQAEgRAAgRQAAgQgEgRQgEgQgLgJQgLgLgUAAQgNAAgJAGg");
	this.shape_89.setTransform(718.3,624.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#58595B").s().p("AglBSQgMgGgGgLQgHgLAAgQQAAgWAMgMQANgLAUgFQAVgFAbAAIALAAIAAgIQAAgVgJgMQgJgMgXAAQgKAAgMADQgMAEgLAFIgCgRQALgFANgEQAMgDALAAQAgABAOAQQANAPAAAfIAABJIABARIACASIgSAAIgCgcQgGAPgPAJQgPAIgRAAQgPAAgMgGgAgBABQgRADgMAIQgMAIAAARQAAASAKAIQAIAIAPAAQATAAALgJQALgJAFgPQAFgOAAgRIAAgHIgGAAIgGgBQgQAAgPACg");
	this.shape_90.setTransform(1513.2,577.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#58595B").s().p("AgSCcIgIgBIACgSIAFABIAGABQALAAAEgFQAEgFACgHIABgQIAAjDIASAAIAADGQAAAOgDAKQgDALgIAGQgIAGgOAAIgJAAgAAJiAIAAgbIASAAIAAAbg");
	this.shape_91.setTransform(1500.3,578.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#58595B").s().p("AAvBUIAAiPIhZCPIgXAAIAAioIATAAIAACQIBaiQIAWAAIAACog");
	this.shape_92.setTransform(1489.2,577.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#58595B").s().p("AgwBUIAAioIBhAAIAAARIhPAAIAACXg");
	this.shape_93.setTransform(1475,577.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#58595B").s().p("AhDB7IAAi3IgBgdIgBgeIARAAIACAfQAHgQAOgJQAPgJAQAAQAaABAPAMQAPAMAGAUQAGATAAAYQAAAQgDAPQgEAPgIANQgIAMgNAJQgNAHgTAAQgQAAgOgIQgOgIgHgPIAABlgAgWhiQgKAHgGAKQgGAKgDAMQgDANAAAMQAAAMADAMQADALAGALQAGAKAJAHQAKAHANAAQAUgBALgLQALgKAEgQQAEgQAAgQQAAgRgEgRQgEgPgLgLQgLgKgUAAQgNAAgJAGg");
	this.shape_94.setTransform(1458.9,581.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#58595B").s().p("AggBLQgSgMgJgTQgIgUAAgYQAAgWAIgUQAIgTARgNQAQgMAWgBQAZABAOALQAOAMAFATQAGASAAAVIAAAIIhzAAQAAASAHAQQAHAPANAKQAOAIAVABQALAAALgDQAKgCAJgFIABATQgKAEgLACQgLACgMAAQgbAAgSgNgAAwgNQgBgNgDgNQgEgNgJgJQgKgJgRAAQgQAAgLAJQgMAKgGANQgFANgBAMIBfAAIAAAAg");
	this.shape_95.setTransform(1441.5,577.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#58595B").s().p("AAuBUIAAhRIhbAAIAABRIgTAAIAAioIATAAIAABHIBbAAIAAhHIATAAIAACog");
	this.shape_96.setTransform(1424.1,577.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#58595B").s().p("AggBLQgSgMgIgTQgJgUAAgYQAAgWAIgUQAJgTAPgNQARgMAWgBQAZABAOALQAOAMAFATQAGASAAAVIAAAIIhzAAQAAASAHAQQAHAPANAKQAOAIAVABQALAAAKgDQALgCAJgFIABATQgLAEgKACQgKACgMAAQgcAAgSgNgAAwgNQgBgNgDgNQgEgNgJgJQgJgJgRAAQgSAAgKAJQgMAKgFANQgGANgBAMIBfAAIAAAAg");
	this.shape_97.setTransform(1407.1,577.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#58595B").s().p("AgkBSQgMgGgHgLQgHgLAAgQQAAgWAMgMQAMgLAVgFQAVgFAaAAIAMAAIAAgIQAAgVgJgMQgJgMgXAAQgLAAgLADQgMAEgLAFIgBgRQAKgFAMgEQANgDALAAQAgABAOAQQAOAPAAAfIAABJIAAARIACASIgSAAIgBgcQgIAPgOAJQgOAIgSAAQgPAAgLgGgAAAABQgSADgMAIQgMAIAAARQAAASAJAIQAKAIAPAAQARAAAMgJQALgJAFgPQAFgOAAgRIAAgHIgGAAIgGgBQgQAAgOACg");
	this.shape_98.setTransform(1381.1,577.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#58595B").s().p("AAuBUIAAhRIhbAAIAABRIgTAAIAAioIATAAIAABHIBbAAIAAhHIATAAIAACog");
	this.shape_99.setTransform(1364.5,577.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#58595B").s().p("AAqBUIAAhGIgSAFQgMACgOAAQgdAAgOgNQgOgMAAgcIAAg0IASAAIAAAwQAAAQAFAJQAFAJAJADQAKAEANgBIAQgBIAPgDIAKgBIAAhTIASAAIAACog");
	this.shape_100.setTransform(1346.8,577.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#58595B").s().p("AAvBUIAAiPIhZCPIgXAAIAAioIATAAIAACQIBaiQIAWAAIAACog");
	this.shape_101.setTransform(1329.9,577.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#58595B").s().p("AhDB7IAAi3IgBgdIgBgeIARAAIACAfQAHgQAOgJQAPgJAQAAQAaABAPAMQAPAMAGAUQAGATAAAYQAAAQgDAPQgEAPgIANQgIAMgNAJQgNAHgTAAQgQAAgOgIQgOgIgHgPIAABlgAgWhiQgKAHgGAKQgGAKgDAMQgDANAAAMQAAAMADAMQADALAGALQAGAKAJAHQAKAHANAAQAUgBALgLQALgKAEgQQAEgQAAgQQAAgRgEgRQgEgPgLgLQgLgKgUAAQgNAAgJAGg");
	this.shape_102.setTransform(1312.2,581.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#58595B").s().p("AgIBUIAAiXIg6AAIAAgRICEAAIAAARIg5AAIAACXg");
	this.shape_103.setTransform(1295.9,577.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#58595B").s().p("AAoBUIhWhVIAABVIgSAAIAAioIASAAIAABOIBNhOIAYAAIhPBPIBZBZg");
	this.shape_104.setTransform(1282.4,577.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#58595B").s().p("AggBLQgSgMgIgTQgJgUAAgYQAAgWAIgUQAJgTAPgNQAQgMAXgBQAZABAOALQAOAMAFATQAGASAAAVIAAAIIhzAAQAAASAHAQQAHAPAOAKQAOAIAUABQALAAAKgDQALgCAJgFIABATQgKAEgLACQgKACgMAAQgcAAgSgNgAAwgNQgBgNgDgNQgEgNgJgJQgKgJgQAAQgSAAgKAJQgMAKgFANQgGANgBAMIBfAAIAAAAg");
	this.shape_105.setTransform(1265.2,577.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#58595B").s().p("AhEBVIgHgCIABgRIAHABIAHABQAOAAAIgPQAHgQADghQADghAAg4IBlAAIAACoIgSAAIAAiXIhBAAQAAAygDAiQgDAhgLASQgMATgXgBIgJAAg");
	this.shape_106.setTransform(1246.8,577.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#58595B").s().p("AggBLQgSgMgIgTQgJgUAAgYQAAgWAIgUQAJgTAPgNQARgMAWgBQAZABAOALQAOAMAFATQAGASAAAVIAAAIIhzAAQAAASAHAQQAHAPANAKQAOAIAVABQALAAAKgDQALgCAJgFIABATQgLAEgKACQgLACgLAAQgcAAgSgNgAAwgNQgBgNgDgNQgEgNgJgJQgJgJgRAAQgSAAgKAJQgMAKgFANQgGANgBAMIBfAAIAAAAg");
	this.shape_107.setTransform(1231.1,577.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#58595B").s().p("AgkBSQgMgGgHgLQgHgLAAgQQAAgWAMgMQANgLAUgFQAUgFAbAAIAMAAIAAgIQAAgVgJgMQgJgMgXAAQgLAAgLADQgMAEgLAFIgBgRQAKgFAMgEQANgDALAAQAgABAOAQQAOAPAAAfIAABJIAAARIACASIgSAAIgBgcQgIAPgOAJQgOAIgSAAQgPAAgLgGgAAAABQgSADgMAIQgMAIAAARQAAASAJAIQAKAIAOAAQASAAAMgJQALgJAFgPQAFgOAAgRIAAgHIgGAAIgGgBQgQAAgOACg");
	this.shape_108.setTransform(1205.2,577.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#58595B").s().p("AgkBWQgLgCgJgEIACgUQAHAEALAEQALACAPAAQAUAAANgJQAMgKABgOQAAgSgMgIQgNgJgVABIgIAAIgHAAIAAgQIAGAAIAIAAQATAAAMgIQAMgHAAgRQAAgKgGgFQgFgGgJgCQgIgCgIAAQgPAAgNAFQgNAFgGAEIgCgTQAHgEANgEQAMgEASAAQAPAAANAEQANAEAHAJQAHAIABAPQgBAPgJALQgKALgRAEQASACALAKQALAKABATQgBARgJANQgJALgPAGQgQAGgQAAQgQAAgLgCg");
	this.shape_109.setTransform(1190.1,577.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#58595B").s().p("AgkBSQgMgGgHgLQgHgLAAgQQAAgWAMgMQANgLAUgFQAVgFAaAAIAMAAIAAgIQAAgVgJgMQgJgMgXAAQgLAAgLADQgMAEgLAFIgBgRQAKgFAMgEQANgDALAAQAgABAOAQQAOAPAAAfIAABJIAAARIACASIgSAAIgBgcQgIAPgOAJQgOAIgSAAQgPAAgLgGgAAAABQgTADgLAIQgMAIAAARQAAASAJAIQAKAIAOAAQASAAAMgJQALgJAFgPQAFgOAAgRIAAgHIgGAAIgGgBQgQAAgOACg");
	this.shape_110.setTransform(1165.6,577.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#58595B").s().p("AhDB7IAAi3IgBgdIgBgeIARAAIACAfQAHgQAOgJQAPgJAQAAQAaABAPAMQAPAMAGAUQAGATAAAYQAAAQgDAPQgEAPgIANQgIAMgNAJQgNAHgTAAQgQAAgOgIQgOgIgHgPIAABlgAgWhiQgKAHgGAKQgGAKgDAMQgDANAAAMQAAAMADAMQADALAGALQAGAKAJAHQAKAHANAAQAUgBALgLQALgKAEgQQAEgQAAgQQAAgRgEgRQgEgPgLgLQgLgKgUAAQgNAAgJAGg");
	this.shape_111.setTransform(1149.4,581.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#58595B").s().p("Ag1B6IgIgCIACgRIAHABIAHABQAHAAAGgEQAFgFAEgHIAHgOIADgLIAEgMIg6iuIAUAAIAvCVIAxiVIATAAIhEDIQgHAVgLAMQgKAMgRAAIgIgBg");
	this.shape_112.setTransform(1132.8,581.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#58595B").s().p("AgIBUIAAiXIg6AAIAAgRICFAAIAAARIg6AAIAACXg");
	this.shape_113.setTransform(1118.6,577.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#58595B").s().p("AAoBUIhWhVIAABVIgTAAIAAioIATAAIAABOIBOhOIAXAAIhPBPIBaBZg");
	this.shape_114.setTransform(1105.1,577.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#58595B").s().p("AglBSQgLgGgHgLQgHgLAAgQQAAgWAMgMQAMgLAWgFQATgFAbAAIAMAAIAAgIQAAgVgJgMQgJgMgWAAQgLAAgMADQgMAEgKAFIgDgRQALgFAMgEQANgDAMAAQAfABAOAQQANAPAAAfIAABJIABARIACASIgSAAIgCgcQgGAPgPAJQgPAIgRAAQgPAAgMgGgAgBABQgSADgLAIQgMAIAAARQAAASAKAIQAJAIAOAAQATAAALgJQALgJAFgPQAFgOAAgRIAAgHIgGAAIgGgBQgQAAgPACg");
	this.shape_115.setTransform(1087.3,577.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#58595B").s().p("AgJCfIAAhbQgGAKgKAGQgKAFgPAAQgUAAgNgLQgOgMgIgTQgGgUAAgaQAAgZAGgTQAGgUAOgLQAOgLAVgBQALABAIADQAIAEAGAFQAFAFADAFIAAhfIASAAIAABfQADgFAGgFQAFgFAJgEQAIgDALgBQAVABAOALQANALAHAUQAGATAAAZQAAAagHAUQgHATgOAMQgOALgTAAQgOAAgLgFQgKgGgHgKIAABbgAAXg8QgJAIgFANIAABSQAFANAKAIQAIAIAPABQARgBAKgKQAKgLAEgRQAEgQAAgRQAAgQgEgQQgEgQgLgLQgJgLgRAAQgOAAgKAJgAhJg6QgKALgEAQQgFAQABAQQgBARAFAQQAEARAKALQAKAKARABQAOgBAJgIQAKgIAEgNIAAhSQgEgNgKgIQgJgJgOAAQgRAAgKALg");
	this.shape_116.setTransform(1067,577.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#58595B").s().p("AgkBSQgNgGgGgLQgHgLAAgQQAAgWAMgMQAMgLAWgFQATgFAbAAIAMAAIAAgIQABgVgKgMQgJgMgWAAQgLAAgMADQgMAEgKAFIgCgRQAKgFAMgEQANgDAMAAQAfABAOAQQANAPAAAfIAABJIABARIACASIgSAAIgBgcQgIAPgOAJQgPAIgRAAQgPAAgLgGgAAAABQgTADgLAIQgMAIAAARQAAASAJAIQAKAIAPAAQARAAAMgJQALgJAFgPQAFgOAAgRIAAgHIgGAAIgGgBQgQAAgOACg");
	this.shape_117.setTransform(1036.6,577.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#58595B").s().p("AgIBUIAAiXIg5AAIAAgRICEAAIAAARIg6AAIAACXg");
	this.shape_118.setTransform(1022.1,577.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#58595B").s().p("AgkBSQgMgGgHgLQgHgLAAgQQAAgWAMgMQAMgLAWgFQATgFAbAAIAMAAIAAgIQABgVgKgMQgJgMgWAAQgLAAgMADQgMAEgKAFIgCgRQAKgFAMgEQANgDAMAAQAfABAOAQQAOAPAAAfIAABJIAAARIACASIgSAAIgBgcQgIAPgOAJQgPAIgRAAQgPAAgLgGgAAAABQgTADgLAIQgMAIAAARQAAASAJAIQAKAIAPAAQARAAAMgJQALgJAFgPQAFgOAAgRIAAgHIgGAAIgGgBQgQAAgOACg");
	this.shape_119.setTransform(1006.5,577.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#58595B").s().p("AAuBUIAAhRIhbAAIAABRIgTAAIAAioIATAAIAABHIBbAAIAAhHIATAAIAACog");
	this.shape_120.setTransform(989.9,577.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#58595B").s().p("ABHBuIAAgzIiNAAIAAAzIgRAAIAAhEIASAAIANgVQAFgKACgLQADgLABgOQACgQAAgVIAAgvIBrAAIAACXIAYAAIAABEgAgZg4QAAAUgCARQgBARgFAPQgFAPgKAOIBdAAIAAiGIhGAAg");
	this.shape_121.setTransform(971.5,580.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#58595B").s().p("AggBLQgSgMgJgTQgIgUAAgYQAAgWAIgUQAIgTARgNQAPgMAXgBQAZABAOALQAOAMAGATQAFASAAAVIAAAIIhzAAQAAASAHAQQAGAPAPAKQANAIAVABQALAAALgDQAKgCAJgFIABATQgKAEgLACQgKACgNAAQgbAAgSgNgAAwgNQgBgNgDgNQgEgNgJgJQgJgJgSAAQgQAAgMAJQgLAKgGANQgEANgBAMIBeAAIAAAAg");
	this.shape_122.setTransform(954.3,577.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#58595B").s().p("AhEBVIgHgCIABgRIAHABIAHABQAOAAAIgPQAHgQADghQADghAAg4IBlAAIAACoIgSAAIAAiXIhBAAQAAAygDAiQgDAhgLASQgMATgXgBIgJAAg");
	this.shape_123.setTransform(935.9,577.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#58595B").s().p("AgVBLQgTgMgKgTQgKgUAAgYQAAgYAKgUQALgTATgMQATgLAYgBIATABQAJABAIAEIgBATQgHgEgJgCIgRgBQgVAAgOAJQgOAJgIAQQgIAPAAAUQAAASAIAQQAIAQAOALQAOAJAVABQAKAAAIgCQAHgCAJgDIACASIgTAFIgSABQgaAAgTgNg");
	this.shape_124.setTransform(921.1,577.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#58595B").s().p("AgRBWQgJgBgHgEQgPgHgJgMQgJgNgFgPQgFgRAAgRQAAgXAJgUQAJgUARgMQARgLAYgBQAaABARALQARAMAIAUQAJATgBAYQABAYgJAUQgJATgQAMQgSANgZAAQgJAAgIgCgAggg7QgMAKgGAQQgGAPABASQAAAMADANQADAMAGALQAIAKAKAGQALAHAOAAQAUgBAMgKQANgLAFgQQAHgQgBgRQAAgSgFgPQgGgQgNgKQgMgKgUAAQgTAAgNAKg");
	this.shape_125.setTransform(904.4,577.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#58595B").s().p("AAtBUIAAiXIhZAAIAACXIgTAAIAAioIB/AAIAACog");
	this.shape_126.setTransform(886.2,577.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#58595B").s().p("AgkBSQgMgGgHgLQgHgLAAgQQAAgWAMgMQANgLAUgFQAVgFAaAAIAMAAIAAgIQAAgVgJgMQgJgMgXAAQgLAAgLADQgMAEgLAFIgBgRQAKgFAMgEQANgDALAAQAgABAOAQQAOAPAAAfIAABJIAAARIACASIgSAAIgBgcQgIAPgOAJQgOAIgSAAQgPAAgLgGgAAAABQgSADgMAIQgMAIAAARQAAASAJAIQAKAIAOAAQASAAAMgJQALgJAFgPQAFgOAAgRIAAgHIgGAAIgGgBQgQAAgOACg");
	this.shape_127.setTransform(859.6,577.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#58595B").s().p("AAuBUIAAhRIhbAAIAABRIgTAAIAAioIATAAIAABHIBbAAIAAhHIATAAIAACog");
	this.shape_128.setTransform(842.9,577.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#58595B").s().p("AgIBUIAAiXIg6AAIAAgRICFAAIAAARIg6AAIAACXg");
	this.shape_129.setTransform(818,577.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#58595B").s().p("AgSBWQgIgBgHgEQgOgHgKgMQgKgNgEgPQgFgRABgRQgBgXAJgUQAJgUARgMQARgLAYgBQAaABARALQARAMAIAUQAJATAAAYQAAAYgJAUQgJATgQAMQgSANgZAAQgJAAgJgCgAggg7QgMAKgGAQQgGAPABASQAAAMACANQAEAMAGALQAIAKAKAGQALAHAOAAQATgBANgKQAMgLAHgQQAFgQAAgRQABgSgGgPQgGgQgMgKQgNgKgUAAQgTAAgNAKg");
	this.shape_130.setTransform(802,577.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#58595B").s().p("AgVBLQgTgMgKgTQgKgUAAgYQAAgYAKgUQALgTATgMQATgLAYgBIATABQAJABAIAEIgBATQgHgEgJgCIgRgBQgVAAgOAJQgOAJgIAQQgIAPAAAUQAAASAIAQQAIAQAOALQAOAJAVABQAKAAAIgCQAHgCAJgDIACASIgTAFIgSABQgaAAgTgNg");
	this.shape_131.setTransform(785.6,577.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#58595B").s().p("AgSBWQgIgBgHgEQgOgHgKgMQgJgNgFgPQgFgRABgRQAAgXAIgUQAJgUARgMQARgLAYgBQAaABARALQARAMAIAUQAJATAAAYQAAAYgJAUQgIATgSAMQgQANgaAAQgJAAgJgCgAgfg7QgNAKgGAQQgFAPAAASQgBAMADANQAEAMAGALQAHAKALAGQALAHAOAAQATgBANgKQAMgLAHgQQAFgQABgRQAAgSgGgPQgGgQgMgKQgNgKgUAAQgTAAgMAKg");
	this.shape_132.setTransform(768.9,577.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#58595B").s().p("AAuBUIAAhRIhbAAIAABRIgTAAIAAioIATAAIAABHIBbAAIAAhHIATAAIAACog");
	this.shape_133.setTransform(750.6,577.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#58595B").s().p("AgkBWQgLgCgJgEIACgUQAHAEALAEQALACAPAAQAUAAANgJQAMgKABgOQAAgSgMgIQgNgJgVABIgIAAIgHAAIAAgQIAGAAIAIAAQATAAAMgIQAMgHAAgRQAAgKgGgFQgFgGgJgCQgIgCgIAAQgPAAgNAFQgNAFgGAEIgCgTQAHgEANgEQAMgEASAAQAPAAANAEQANAEAHAJQAHAIABAPQgBAPgJALQgKALgRAEQASACALAKQALAKABATQgBARgJANQgJALgPAGQgQAGgQAAQgQAAgLgCg");
	this.shape_134.setTransform(734.1,577.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#58595B").s().p("AAvBUIAAiPIhZCPIgXAAIAAioIATAAIAACQIBaiQIAWAAIAACog");
	this.shape_135.setTransform(718,577.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#58595B").s().p("AglBTQgLgHgHgLQgHgLAAgQQAAgVAMgNQAMgLAWgFQATgFAbAAIAMAAIAAgIQAAgVgJgLQgJgMgWAAQgLAAgMACQgMAEgKAGIgDgSQALgFAMgEQANgDAMAAQAfAAAOARQANAQAAAeIAABJIABASIACASIgSAAIgCgdQgGAPgPAIQgPAJgRAAQgPAAgMgFgAgBABQgRADgMAIQgMAIAAASQAAARAKAIQAIAIAQAAQASgBALgIQALgJAFgOQAFgPAAgRIAAgIIgGAAIgGAAQgQAAgPACg");
	this.shape_136.setTransform(1302,534.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#58595B").s().p("AgSCcIgIgBIACgSIAFABIAGABQALAAAEgFQAEgFACgHIABgQIAAjDIASAAIAADGQAAAOgDAKQgDALgIAGQgIAGgOAAIgJAAgAAJiAIAAgbIASAAIAAAbg");
	this.shape_137.setTransform(1289.1,535.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#58595B").s().p("AAvBVIAAiPIhZCPIgXAAIAAipIATAAIAACQIBaiQIAWAAIAACpg");
	this.shape_138.setTransform(1278,534.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#58595B").s().p("AAuBVIAAhSIhbAAIAABSIgTAAIAAipIATAAIAABHIBbAAIAAhHIATAAIAACpg");
	this.shape_139.setTransform(1259.8,534.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#58595B").s().p("AgRBWQgJgCgHgDQgPgHgJgNQgKgMgEgQQgEgPgBgSQABgXAIgUQAJgTARgNQARgMAYAAQAaAAARAMQARAMAIAUQAIATAAAYQAAAYgIATQgIAVgSAMQgQAMgaAAQgJAAgIgCgAgfg7QgNAKgGAQQgGAPAAASQAAAMAEANQADANAHAKQAGAKALAGQALAHAOgBQATAAANgKQANgLAFgQQAHgQAAgRQgBgRgFgQQgGgQgNgKQgMgKgUAAQgTAAgMAKg");
	this.shape_140.setTransform(1241.7,534.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#58595B").s().p("ABHBtIAAgxIiNAAIAAAxIgRAAIAAhDIASAAIANgVQAFgKACgLQADgLABgPQACgPAAgWIAAguIBrAAIAACXIAYAAIAABDgAgZg4QAAATgCASQgBARgFAPQgFAPgKAOIBdAAIAAiGIhGAAg");
	this.shape_141.setTransform(1223.1,537.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#58595B").s().p("AggBMQgSgMgIgVQgJgTAAgYQAAgWAIgTQAJgVAPgMQARgNAWAAQAZAAAOAMQAOAMAFASQAGAUAAAUIAAAIIhzAAQAAASAHAQQAHAPANAJQAOAKAVAAQALAAAKgDQALgCAJgFIABASQgLAFgKACQgKACgMAAQgcAAgSgMgAAwgMQgBgOgDgNQgEgNgJgJQgJgJgRAAQgSAAgKAKQgMAIgFAOQgGAOgBAMIBfAAIAAAAg");
	this.shape_142.setTransform(1205.9,534.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#58595B").s().p("AAoBVIhWhWIAABWIgTAAIAAipIATAAIAABPIBOhPIAXAAIhPBPIBaBag");
	this.shape_143.setTransform(1191.1,534.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#58595B").s().p("AglBTQgMgHgGgLQgHgLAAgQQAAgVAMgNQAMgLAWgFQATgFAbAAIAMAAIAAgIQAAgVgJgLQgJgMgWAAQgMAAgLACQgMAEgKAGIgDgSQALgFANgEQAMgDAMAAQAfAAAOARQANAQAAAeIAABJIABASIACASIgSAAIgCgdQgGAPgPAIQgPAJgRAAQgPAAgMgFgAgBABQgSADgLAIQgMAIAAASQAAARAKAIQAIAIAQAAQASgBALgIQALgJAFgOQAFgPAAgRIAAgIIgGAAIgGAAQgQAAgPACg");
	this.shape_144.setTransform(1173.3,534.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#58595B").s().p("ABeByIAAjPIhUDPIgUAAIhUjPIAADPIgUAAIAAjiIAgAAIBSDKIBTjKIAgAAIAADig");
	this.shape_145.setTransform(1151.2,531.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#58595B").s().p("AA6ByIAAhsIhzAAIAABsIgVAAIAAjiIAVAAIAABlIBzAAIAAhlIAVAAIAADig");
	this.shape_146.setTransform(1117,531.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#58595B").s().p("AhAByIAAjiIAzAAQARAAARAEQARAGAKAMQAJANABAVQAAAVgLANQgMAMgUAGQAPACALAGQALAHAGAMQAHALAAAPQgBAZgMAOQgNAOgTAGQgUAFgWABgAgrBfIAXAAQAQAAAOgDQAOgEAJgKQAKgKAAgRQAAgUgKgKQgKgKgQgEQgOgEgQABIgUAAgAgrgMIAZAAQAPAAAMgFQAMgDAIgJQAIgKAAgRQAAgOgHgJQgIgIgKgEQgMgDgMAAIgfAAg");
	this.shape_147.setTransform(1097.7,531.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#58595B").s().p("Ag3ByIAAjiIBrAAIAAASIhXAAIAABTIBTAAIAAARIhTAAIAABZIBbAAIAAATg");
	this.shape_148.setTransform(1080.9,531.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#58595B").s().p("AAuBVIAAhSIhbAAIAABSIgTAAIAAipIATAAIAABHIBbAAIAAhHIATAAIAACpg");
	this.shape_149.setTransform(1054.2,534.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#58595B").s().p("AgSBWQgIgCgHgDQgOgHgKgNQgJgMgFgQQgFgPABgSQgBgXAJgUQAJgTARgNQARgMAYAAQAaAAARAMQARAMAIAUQAJATAAAYQAAAYgJATQgIAVgRAMQgRAMgaAAQgJAAgJgCgAgfg7QgNAKgGAQQgFAPAAASQAAAMACANQAEANAGAKQAIAKAKAGQALAHAOgBQATAAANgKQAMgLAHgQQAFgQAAgRQABgRgGgQQgGgQgMgKQgNgKgUAAQgTAAgMAKg");
	this.shape_150.setTransform(1036.1,534.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#58595B").s().p("AAoBVIhWhWIAABWIgTAAIAAipIATAAIAABPIBNhPIAYAAIhPBPIBaBag");
	this.shape_151.setTransform(1020.3,534.6);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#58595B").s().p("AgwBVIAAipIBhAAIAAARIhOAAIAACYg");
	this.shape_152.setTransform(997,534.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#58595B").s().p("AhEBVIgHgBIABgSIAHABIAHABQAOAAAIgPQAHgQADghQADghAAg4IBlAAIAACpIgSAAIAAiYIhBAAQAAAygDAhQgDAjgLARQgMASgXAAIgJAAg");
	this.shape_153.setTransform(979.4,534.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#58595B").s().p("AgSBWQgIgCgHgDQgOgHgKgNQgKgMgEgQQgFgPABgSQgBgXAJgUQAJgTARgNQARgMAYAAQAaAAARAMQARAMAIAUQAJATAAAYQAAAYgJATQgJAVgQAMQgSAMgZAAQgJAAgJgCgAggg7QgMAKgGAQQgGAPABASQAAAMACANQAEANAGAKQAIAKAKAGQALAHAOgBQATAAANgKQAMgLAHgQQAFgQAAgRQABgRgGgQQgGgQgMgKQgNgKgUAAQgTAAgNAKg");
	this.shape_154.setTransform(962.6,534.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#58595B").s().p("ABHBtIAAgxIiNAAIAAAxIgRAAIAAhDIASAAIANgVQAFgKACgLQADgLABgPQACgPAAgWIAAguIBrAAIAACXIAYAAIAABDgAgZg4QAAATgCASQgBARgFAPQgFAPgKAOIBdAAIAAiGIhGAAg");
	this.shape_155.setTransform(944,537.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#58595B").s().p("AAuBVIAAhSIhbAAIAABSIgTAAIAAipIATAAIAABHIBbAAIAAhHIATAAIAACpg");
	this.shape_156.setTransform(916.8,534.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#58595B").s().p("AggBMQgSgMgJgVQgIgTAAgYQAAgWAIgTQAIgVARgMQAPgNAXAAQAZAAAOAMQAOAMAGASQAFAUAAAUIAAAIIhzAAQAAASAHAQQAGAPAOAJQAOAKAVAAQALAAALgDQAKgCAJgFIABASQgKAFgLACQgLACgMAAQgbAAgSgMgAAwgMQgBgOgDgNQgEgNgJgJQgKgJgRAAQgQAAgMAKQgLAIgGAOQgFAOgBAMIBfAAIAAAAg");
	this.shape_157.setTransform(899.8,534.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#58595B").s().p("AAtBVIAAiYIhZAAIAACYIgTAAIAAipIB/AAIAACpg");
	this.shape_158.setTransform(882.5,534.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#58595B").s().p("Ag1B7IgIgCIACgSIAHACIAHAAQAHABAGgGQAFgEAEgHIAHgNIADgNIAEgLIg6iuIAUAAIAvCVIAxiVIATAAIhEDIQgHAVgLAMQgKALgRABIgIAAg");
	this.shape_159.setTransform(866.4,538.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#58595B").s().p("AAoBVIhWhWIAABWIgTAAIAAipIATAAIAABPIBNhPIAYAAIhPBPIBZBag");
	this.shape_160.setTransform(852.5,534.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#58595B").s().p("Ag8BVIAAipIA6AAQAOAAANAFQANADAHAJQAIAJAAAPQAAAOgGAKQgGAKgNAEQAIABAHAEQAIAFAEAIQAGAIAAALQAAATgJALQgIAMgNAFQgOAGgRAAgAgpBDIApAAQAUAAAKgJQALgJAAgQQAAgOgKgHQgKgJgWAAIgoAAgAgpgNIAnAAQARABAJgIQAJgGAAgOQAAgOgKgHQgJgGgRAAIgmAAg");
	this.shape_161.setTransform(835.8,534.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#58595B").s().p("AgIBVIAAiYIg5AAIAAgRICDAAIAAARIg5AAIAACYg");
	this.shape_162.setTransform(811.3,534.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#58595B").s().p("AgRBWQgJgCgHgDQgPgHgJgNQgKgMgEgQQgEgPgBgSQAAgXAJgUQAJgTARgNQARgMAYAAQAaAAARAMQARAMAIAUQAIATAAAYQAAAYgIATQgIAVgSAMQgQAMgaAAQgJAAgIgCgAggg7QgMAKgGAQQgGAPAAASQAAAMAEANQADANAHAKQAGAKALAGQALAHAOgBQAUAAAMgKQANgLAFgQQAHgQAAgRQgBgRgFgQQgGgQgNgKQgMgKgUAAQgTAAgNAKg");
	this.shape_163.setTransform(795.3,534.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#58595B").s().p("AAvBVIAAiPIhZCPIgXAAIAAipIATAAIAACQIBaiQIAWAAIAACpg");
	this.shape_164.setTransform(776.9,534.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#58595B").s().p("AhpBVIAAipIASAAIAACXIBPAAIAAiXIARAAIAACXIBPAAIAAiXIASAAIAACpg");
	this.shape_165.setTransform(754.6,534.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#58595B").s().p("AgkBTQgMgHgHgLQgHgLAAgQQAAgVAMgNQANgLAUgFQAVgFAaAAIAMAAIAAgIQAAgVgJgLQgJgMgXAAQgLAAgLACQgMAEgLAGIgBgSQAKgFAMgEQANgDALAAQAgAAAOARQAOAQAAAeIAABJIAAASIACASIgSAAIgBgdQgIAPgOAIQgOAJgSAAQgPAAgLgFgAAAABQgSADgMAIQgMAIAAASQAAARAJAIQAKAIAPAAQARgBAMgIQALgJAFgOQAFgPAAgRIAAgIIgGAAIgGAAQgQAAgOACg");
	this.shape_166.setTransform(732.7,534.6);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#58595B").s().p("Ag7BVIAAipIA4AAQAPAAANAFQAMADAJAJQAHAJAAAPQAAAOgFAKQgGAKgNAEQAHABAIAEQAHAFAFAIQAEAIAAALQAAATgHALQgIAMgOAFQgNAGgRAAgAgpBDIApAAQAUAAAKgJQAKgJAAgQQAAgOgJgHQgKgJgVAAIgpAAgAgpgNIAnAAQARABAIgIQAKgGAAgOQAAgOgKgHQgJgGgSAAIglAAg");
	this.shape_167.setTransform(717.5,534.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#58595B").s().p("AgWBVIAAgpIAtAAIAAApgAgWgsIAAgoIAtAAIAAAog");
	this.shape_168.setTransform(1705.9,448.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#58595B").s().p("Ag2BBQgZgXAAgqQAAgZALgUQAKgUATgLQATgMAYAAQAcAAAQAMQARALAIATQAHAUAAAaIAAAKIhxAAQABAWAOANQAOANAaAAQANAAAMgDQAMgDAKgFIACAgQgLAEgOADQgPADgOAAQgvAAgYgYgAgQg1QgIAGgEALQgFAKAAALIBGAAQABgLgDgKQgDgKgHgHQgHgGgNgBQgMABgJAGg");
	this.shape_169.setTransform(1691.9,448.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#58595B").s().p("AgWBVIAAiKIg1AAIAAgfICXAAIAAAfIg0AAIAACKg");
	this.shape_170.setTransform(1674.8,448.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#58595B").s().p("AAkBVIAAhzIhEBzIgvAAIAAipIAsAAIAAByIBEhyIAvAAIAACpg");
	this.shape_171.setTransform(1656.8,448.4);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#58595B").s().p("AhTB8IAAjCIgBgbIgBgWIAsAAIABAdQAIgQAPgIQAPgJARAAQAZABAQAMQAPAMAIAUQAGAUAAAXQAAAXgGAUQgIAUgQANQgQANgaAAQgPAAgOgIQgOgIgGgPIAABlgAgXhRQgJAJgCANQgDAMAAAMIABATQACAKAEAIQAEAIAHAFQAIAGALAAQAOAAAHgJQAIgJAEgMQACgNAAgNQAAgMgCgNQgEgMgHgJQgIgIgOgBQgPABgIAIg");
	this.shape_172.setTransform(1637.1,451.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#58595B").s().p("Ag2BBQgYgXgBgqQAAgZALgUQAKgUAUgLQASgMAZAAQAbAAARAMQAQALAHATQAIAUAAAaIAAAKIhxAAQABAWANANQAPANAaAAQANAAAMgDQANgDAJgFIACAgQgLAEgPADQgOADgPAAQguAAgYgYgAgQg1QgIAGgEALQgEAKgBALIBGAAQABgLgDgKQgDgKgHgHQgHgGgNgBQgMABgJAGg");
	this.shape_173.setTransform(1617.5,448.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#58595B").s().p("AhLBVIAAipIBaAAQAOgBANAEQANAEAIAJQAIAKAAAQQAAAQgJAKQgIAKgQAEQAQACALAKQAKAKABARQgBAUgKALQgJAKgQAEQgPADgRAAgAgdA5IAdAAQAOAAAIgHQAIgGAAgLQAAgMgIgFQgIgFgPAAIgcAAgAgdgQIAbAAQAMAAAHgFQAHgEABgMQgBgLgIgFQgIgEgMAAIgZAAg");
	this.shape_174.setTransform(1599.4,448.4);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#58595B").s().p("AgkBTQgagKgNgVQgNgWgBgeQABgcALgTQALgUAUgKQAUgLAaAAQAqAAAXAXQAYAXAAAqQABAbgLAUQgLAUgUALQgUALgcAAQgUAAgQgGgAgWgvQgJAJgEAMQgDANAAANQAAAKACAKQACAKAFAJQAEAIAHAFQAIAFAKAAQAPAAAJgJQAIgIADgNQAEgNAAgOQAAgNgDgNQgEgNgIgIQgJgIgPgBQgOABgIAIg");
	this.shape_175.setTransform(1579.7,448.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#58595B").s().p("AhTB8IAAjCIgBgbIgBgWIAsAAIABAdQAJgQAOgIQAPgJAQAAQAaABAQAMQAQAMAGAUQAIAUgBAXQABAXgIAUQgHAUgPANQgQANgbAAQgPAAgOgIQgNgIgHgPIAABlgAgXhRQgJAJgCANQgDAMgBAMIACATQACAKAEAIQAEAIAHAFQAIAGALAAQAOAAAHgJQAJgJACgMQADgNAAgNQAAgMgDgNQgDgMgHgJQgIgIgOgBQgPABgIAIg");
	this.shape_176.setTransform(1559.9,451.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#58595B").s().p("AAfBVIAAiKIg9AAIAACKIgvAAIAAipICbAAIAACpg");
	this.shape_177.setTransform(1539.5,448.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#58595B").s().p("AgkBTQgagKgNgVQgNgWAAgeQAAgcALgTQALgUAUgKQAUgLAaAAQAqAAAXAXQAYAXABAqQAAAbgMAUQgKAUgUALQgUALgcAAQgUAAgQgGgAgXgvQgIAJgDAMQgEANAAANQAAAKACAKQACAKAEAJQAFAIAIAFQAHAFAKAAQAPAAAIgJQAJgIAEgNQAEgNgBgOQAAgNgDgNQgEgNgIgIQgJgIgPgBQgOABgJAIg");
	this.shape_178.setTransform(1509.5,448.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#58595B").s().p("Ag7BVIAAipIB3AAIAAAfIhIAAIAACKg");
	this.shape_179.setTransform(1493.1,448.4);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#58595B").s().p("AgxBTQgNgGgIgMQgIgLAAgRQAAgXANgMQANgMAUgFQAVgFAXAAIAKAAIALABIAAgGQgBgSgKgIQgKgHgTAAQgMAAgMADQgOADgMAHIgCgfQAOgGAPgDQAPgDAPAAQAWAAASAGQASAHAJAOQALAPAAAZIAABCIAAAWIABASIgsAAIgBgZQgJAOgNAHQgNAIgTAAQgQAAgNgGgAgDAGQgNADgIAGQgJAHAAANQAAAMAHAGQAHAHALAAQANAAAJgHQAKgHAEgLQAFgLAAgNIAAgHIgKAAIgEAAQgMAAgKACg");
	this.shape_180.setTransform(1465.3,448.4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#58595B").s().p("AA6BtIAAgvIhzAAIAAAvIgqAAIAAhPIAUAAQAHgLAFgNQAEgLACgQQACgQAAgVIAAgyICHAAIAACKIAXAAIAABPgAgSg0QAAAYgDAVQgEAUgKARIBAAAIAAhsIgvAAg");
	this.shape_181.setTransform(1446.1,450.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#58595B").s().p("Ag2BBQgZgXAAgqQAAgZALgUQAKgUATgLQATgMAZAAQAbAAARAMQAQALAHATQAIAUAAAaIAAAKIhxAAQABAWANANQAPANAaAAQANAAANgDQAMgDAJgFIACAgQgKAEgQADQgOADgPAAQgtAAgZgYgAgPg1QgJAGgEALQgFAKAAALIBGAAQABgLgDgKQgDgKgHgHQgHgGgNgBQgMABgIAGg");
	this.shape_182.setTransform(1417,448.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#58595B").s().p("AgXBVIAAiKIg0AAIAAgfICXAAIAAAfIg0AAIAACKg");
	this.shape_183.setTransform(1399.9,448.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#58595B").s().p("Ag2BBQgZgXAAgqQABgZAKgUQALgUASgLQAUgMAXAAQAcAAAQAMQARALAIATQAHAUAAAaIAAAKIhxAAQABAWANANQAPANAaAAQANAAANgDQALgDAKgFIACAgQgLAEgOADQgPADgPAAQgtAAgZgYgAgPg1QgJAGgEALQgEAKgBALIBHAAQAAgLgDgKQgDgKgHgHQgHgGgNgBQgMABgIAGg");
	this.shape_184.setTransform(1383,448.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#58595B").s().p("ABXBVIhAhWIAABWIgtAAIAAhWIhABWIg4AAIBJhaIhChPIA1AAIA8BPIAAhPIAtAAIAABPIA8hPIA1AAIhCBPIBJBag");
	this.shape_185.setTransform(1359.5,448.4);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#58595B").s().p("AglBTQgZgKgNgVQgNgWgBgeQABgcALgTQAMgUATgKQAVgLAZAAQAqAAAYAXQAXAXAAAqQAAAbgLAUQgKAUgUALQgUALgcAAQgUAAgRgGgAgWgvQgJAJgEAMQgDANAAANQAAAKACAKQACAKAEAJQAFAIAHAFQAIAFAKAAQAPAAAIgJQAJgIADgNQAFgNgBgOQAAgNgDgNQgEgNgIgIQgJgIgPgBQgOABgIAIg");
	this.shape_186.setTransform(1335.2,448.4);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#58595B").s().p("AA/BVIAAiKIgrCKIgpAAIgqiKIAACKIgqAAIAAipIBFAAIAkCAIAliAIBFAAIAACpg");
	this.shape_187.setTransform(1312.4,448.4);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#58595B").s().p("AgfAqIAUhTIArAAIggBTg");
	this.shape_188.setTransform(1283.9,457.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#58595B").s().p("AgwBzIgZgEIACgiQALAEALABQALACAMAAQAXAAANgLQAOgKAIgRQAHgRABgTQgKAMgOAFQgOAGgOAAQgXAAgQgJQgQgJgKgPQgJgQAAgWQAAgaALgRQAMgRAUgJQATgJAYAAQAoAAAYAbQAWAbABA0QAAAlgMAdQgNAcgZAQQgZARgjAAIgZgCgAgfhHQgJAMAAAUQAAAIACAJQACAHAFAGQAFAGAHADQAIACAJAAQATgBALgJQAJgKABgTQgBgMgEgLQgFgKgIgGQgKgHgMAAQgTAAgKAMg");
	this.shape_189.setTransform(1269.6,445.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#58595B").s().p("AgeByQgQgEgNgHQgNgIgIgLQgIgMAAgSQAAgMADgKQAEgJAGgHQAHgHAJgFQAJgEAMgDQgUgHgMgNQgLgMAAgVQAAgQAIgLQAHgMANgHQAMgHAPgEQAOgDAMAAQANAAAPADQAPADAMAHQAMAGAIAMQAIALAAARQAAAOgGAKQgGALgKAHQgKAHgNAFQAYAFANAOQAOAOAAAYQAAASgIAMQgJAMgNAHQgNAHgQAEQgPADgPAAQgOAAgQgDgAgTARQgJAFgHAIQgFAJAAALQAAARAMAKQALAJARAAQASAAALgKQAMgJABgSQgBgMgHgJQgIgJgLgFIgHgDIgIgDQgKADgJAGgAgRhTQgIAEgFAHQgFAHgBAKQABALAGAIQAHAIAJAFIAHADIAGACQAJgCAIgFQAJgFAFgIQAFgHAAgKQAAgKgFgHQgFgHgIgEQgJgDgJAAQgJAAgIADg");
	this.shape_190.setTransform(1249.7,445.6);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#58595B").s().p("AgXByQgKgCgJgFQgRgKgKgRQgKgQgEgVQgEgUAAgXQAAgVAEgVQAFgUAKgRQAKgRARgKQARgKAYAAQAZAAARAKQARAKAKARQAKARAFAVQAEAUAAAVQAAAWgEAVQgFAUgKARQgKARgRAKQgRAKgZAAQgMAAgLgDgAgUhLQgIAHgEAMQgEAMgBAPQgBAPAAAOQAAAOABAPQABAPAEAMQADAMAIAIQAIAIANAAQANAAAIgIQAIgIAEgMQAEgMABgPQABgPAAgOQAAgOgBgPQgBgPgEgMQgEgMgIgHQgIgIgNAAQgMAAgIAIg");
	this.shape_191.setTransform(1229.7,445.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#58595B").s().p("AgwBzIgZgEIACgiQAKAEAMABQALACAMAAQAWAAAOgLQAPgKAHgRQAHgRAAgTQgJAMgOAFQgOAGgOAAQgWAAgRgJQgRgJgJgPQgJgQAAgWQAAgaALgRQAMgRAUgJQATgJAYAAQAoAAAYAbQAXAbAAA0QAAAlgNAdQgMAcgZAQQgYARglAAIgYgCgAgfhHQgKAMAAAUQABAIACAJQACAHAFAGQAFAGAIADQAHACAKAAQASgBALgJQAKgKgBgTQAAgMgEgLQgEgKgJgGQgKgHgLAAQgUAAgKAMg");
	this.shape_192.setTransform(1199.6,445.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#58595B").s().p("AgeByQgPgEgNgHQgOgIgIgLQgIgMAAgSQAAgMADgKQADgJAHgHQAHgHAJgFQAJgEAMgDQgUgHgMgNQgLgMgBgVQABgQAIgLQAIgMAMgHQANgHAOgEQAOgDAMAAQANAAAPADQAPADAMAHQAMAGAIAMQAIALAAARQAAAOgGAKQgGALgKAHQgKAHgMAFQAWAFAOAOQAOAOAAAYQAAASgJAMQgHAMgOAHQgNAHgPAEQgQADgPAAQgOAAgQgDgAgTARQgKAFgGAIQgFAJAAALQAAARAMAKQALAJARAAQASAAAMgKQALgJABgSQgBgMgIgJQgHgJgLgFIgIgDIgHgDQgKADgJAGgAgRhTQgIAEgFAHQgFAHgBAKQABALAGAIQAHAIAKAFIAGADIAGACQAKgCAHgFQAJgFAFgIQAFgHAAgKQAAgKgFgHQgFgHgIgEQgJgDgJAAQgJAAgIADg");
	this.shape_193.setTransform(1179.7,445.6);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#58595B").s().p("AgXByQgKgCgJgFQgRgKgKgRQgKgQgEgVQgEgUAAgXQAAgVAEgVQAFgUAKgRQAKgRARgKQARgKAYAAQAZAAARAKQARAKAKARQAKARAFAVQAEAUAAAVQAAAWgEAVQgFAUgKARQgKARgRAKQgRAKgZAAQgMAAgLgDgAgUhLQgIAHgEAMQgEAMgBAPQgBAPAAAOQAAAOABAPQABAPAEAMQADAMAIAIQAIAIANAAQANAAAIgIQAIgIAEgMQAEgMABgPQABgPAAgOQAAgOgBgPQgBgPgEgMQgEgMgIgHQgIgIgNAAQgMAAgIAIg");
	this.shape_194.setTransform(1159.7,445.6);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#58595B").s().p("AgwBzIgZgEIACgiQAKAEAMABQALACAMAAQAXAAANgLQAPgKAHgRQAHgRAAgTQgJAMgOAFQgOAGgOAAQgXAAgQgJQgQgJgKgPQgJgQAAgWQAAgaAMgRQALgRATgJQAUgJAYAAQAoAAAXAbQAYAbAAA0QAAAlgNAdQgMAcgZAQQgYARglAAIgYgCgAgfhHQgKAMAAAUQAAAIADAJQACAHAFAGQAFAGAIADQAHACAKAAQASgBAKgJQALgKgBgTQABgMgFgLQgEgKgKgGQgIgHgMAAQgUAAgKAMg");
	this.shape_195.setTransform(1129.6,445.7);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#58595B").s().p("AgeByQgQgEgMgHQgOgIgIgLQgIgMAAgSQAAgMADgKQAEgJAGgHQAHgHAJgFQAJgEALgDQgTgHgLgNQgMgMgBgVQABgQAHgLQAJgMAMgHQANgHAOgEQAOgDAMAAQAOAAAPADQAOADAMAHQANAGAHAMQAIALAAARQAAAOgGAKQgGALgKAHQgKAHgMAFQAWAFAOAOQAOAOAAAYQAAASgJAMQgHAMgOAHQgNAHgPAEQgQADgPAAQgOAAgQgDgAgUARQgIAFgGAIQgGAJAAALQAAARALAKQAMAJARAAQASAAAMgKQALgJAAgSQAAgMgIgJQgHgJgMgFIgHgDIgHgDQgKADgKAGgAgRhTQgIAEgGAHQgEAHgBAKQABALAGAIQAGAIAKAFIAHADIAHACQAIgCAIgFQAJgFAFgIQAFgHAAgKQAAgKgFgHQgFgHgIgEQgJgDgJAAQgIAAgJADg");
	this.shape_196.setTransform(1109.7,445.6);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#58595B").s().p("AgXByQgKgCgJgFQgRgKgKgRQgKgQgEgVQgEgUAAgXQAAgVAEgVQAFgUAKgRQAKgRARgKQARgKAYAAQAZAAARAKQARAKAKARQAKARAFAVQAEAUAAAVQAAAWgEAVQgFAUgKARQgKARgRAKQgRAKgZAAQgMAAgLgDgAgUhLQgIAHgEAMQgEAMgBAPQgBAPAAAOQAAAOABAPQABAPAEAMQADAMAIAIQAIAIANAAQANAAAIgIQAIgIAEgMQAEgMABgPQABgPAAgOQAAgOgBgPQgBgPgEgMQgEgMgIgHQgIgIgNAAQgMAAgIAIg");
	this.shape_197.setTransform(1089.7,445.6);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#58595B").s().p("AgWBVIAAiKIg1AAIAAgfICXAAIAAAfIg0AAIAACKg");
	this.shape_198.setTransform(1061.8,448.4);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#58595B").s().p("AgkBTQgagKgNgVQgNgWAAgeQAAgcALgTQALgUAVgKQATgLAaAAQAqAAAXAXQAYAXABAqQgBAbgLAUQgKAUgUALQgUALgcAAQgUAAgQgGgAgXgvQgIAJgDAMQgEANAAANQAAAKACAKQACAKAEAJQAFAIAIAFQAHAFAKAAQAPAAAIgJQAJgIAEgNQADgNAAgOQABgNgEgNQgDgNgJgIQgJgIgPgBQgOABgJAIg");
	this.shape_199.setTransform(1043.9,448.4);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#58595B").s().p("AgYCeIgQgDIACggQAGACAGAAQANgBAEgIQAEgIAAgLIAAi5IAuAAIAAC9QAAARgFANQgFANgKAHQgLAIgRAAIgRgBgAgFh4IAAglIAuAAIAAAlg");
	this.shape_200.setTransform(1027.6,448.8);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#58595B").s().p("AgkBTQgagKgNgVQgNgWAAgeQAAgcALgTQALgUAVgKQATgLAaAAQAqAAAXAXQAYAXABAqQgBAbgKAUQgLAUgUALQgUALgcAAQgUAAgQgGgAgXgvQgIAJgDAMQgEANAAANQAAAKACAKQACAKAEAJQAFAIAIAFQAHAFAKAAQAPAAAIgJQAJgIAEgNQADgNAAgOQABgNgEgNQgDgNgJgIQgJgIgPgBQgOABgJAIg");
	this.shape_201.setTransform(1014.6,448.4);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#58595B").s().p("AhTB8IAAjCIgBgbIAAgWIAsAAIABAdQAHgQAPgIQAPgJAQAAQAbABAPAMQAQAMAGAUQAIAUAAAXQAAAXgIAUQgHAUgPANQgRANgZAAQgQAAgOgIQgOgIgGgPIAABlgAgXhRQgIAJgEANQgDAMAAAMIACATQACAKAEAIQAEAIAHAFQAHAGALAAQAOAAAJgJQAHgJADgMQADgNAAgNQAAgMgDgNQgCgMgIgJQgIgIgPgBQgOABgIAIg");
	this.shape_202.setTransform(994.9,451.9);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#58595B").s().p("AABCAQgeAAgTgNQgUgNgKgWQgJgXAAgeQgBgbADgYQADgYAIgTQAIgTAPgNQAOgMATgFQASgEAVgBIAdgCQAOgBAMgDIgDApIgSACIgTACIgRABQgYABgQAGQgQAGgJAPQgIAPgCAcQAEgJAJgIQAJgIAMgFQANgGAPAAQApAAAVAWQAVAWAAAqQAAApgXAXQgWAXgrABgAgUgIQgJAHgEAMQgFAMAAARQAAAcAMAOQALANAQAAQATAAAJgPQAKgPAAgZQAAgdgKgNQgJgOgSAAQgNAAgJAIg");
	this.shape_203.setTransform(974.3,444.6);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#58595B").s().p("AgxBTQgNgGgIgMQgIgLAAgRQAAgXANgMQANgMAUgFQAVgFAXAAIAKAAIALABIAAgGQgBgSgKgIQgKgHgTAAQgMAAgMADQgOADgMAHIgCgfQAOgGAPgDQAPgDAPAAQAWAAASAGQASAHAJAOQALAPAAAZIAABCIAAAWIABASIgsAAIgBgZQgJAOgNAHQgNAIgTAAQgQAAgNgGgAgDAGQgNADgIAGQgJAHAAANQAAAMAHAGQAHAHALAAQANAAAJgHQAKgHAEgLQAFgLAAgNIAAgHIgKAAIgEAAQgMAAgKACg");
	this.shape_204.setTransform(944.2,448.4);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#58595B").s().p("AAhBVIAAhJIhBAAIAABJIgvAAIAAipIAvAAIAABBIBBAAIAAhBIAvAAIAACpg");
	this.shape_205.setTransform(925.3,448.4);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#58595B").s().p("Ag2BBQgZgXAAgqQAAgZALgUQAKgUATgLQAUgMAXAAQAcAAAQAMQARALAIATQAHAUAAAaIAAAKIhxAAQABAWAOANQAOANAaAAQANAAAMgDQAMgDAKgFIACAgQgLAEgOADQgPADgOAAQgvAAgYgYgAgPg1QgJAGgEALQgEAKgBALIBHAAQAAgLgDgKQgDgKgHgHQgHgGgNgBQgMABgIAGg");
	this.shape_206.setTransform(896.2,448.4);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#58595B").s().p("AgVBVIAAhPIg9AAIAABPIgvAAIAAipIAvAAIAAA+IA9AAIAAg+IAuAAIAAA+IAsAAQAQAAAOAFQAOAGAIALQAJALAAATQAAAUgJAMQgIAMgOAGQgPAFgRAAgAAZA4IAfAAQAOAAAIgGQAHgHAAgNQAAgMgIgGQgHgGgQAAIgdAAg");
	this.shape_207.setTransform(873.2,448.4);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#58595B").s().p("AgxBTQgNgGgIgMQgIgLAAgRQAAgXANgMQANgMAUgFQAVgFAXAAIAKAAIALABIAAgGQgBgSgKgIQgKgHgTAAQgMAAgMADQgOADgMAHIgCgfQAOgGAPgDQAPgDAPAAQAWAAASAGQASAHAJAOQALAPAAAZIAABCIAAAWIABASIgsAAIgBgZQgJAOgNAHQgNAIgTAAQgQAAgNgGgAgDAGQgNADgIAGQgJAHAAANQAAAMAHAGQAHAHALAAQANAAAJgHQAKgHAEgLQAFgLAAgNIAAgHIgKAAIgEAAQgMAAgKACg");
	this.shape_208.setTransform(848.4,448.4);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#58595B").s().p("AhLBVIAAipIBaAAQAOgBANAEQANAEAIAJQAIAKAAAQQAAAQgJAKQgIAKgQAEQAQACALAKQAKAKABARQgBAUgKALQgJAKgQAEQgPADgRAAgAgdA5IAdAAQAOAAAIgHQAIgGAAgLQAAgMgIgFQgIgFgPAAIgcAAgAgdgQIAbAAQAMAAAHgFQAHgEABgMQgBgLgIgFQgIgEgMAAIgZAAg");
	this.shape_209.setTransform(830.6,448.4);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#58595B").s().p("Ag7B7IgQgDIADghIAJADIAJABQAMAAAHgHQAGgGAEgLIAEgOIg+iwIAyAAIAjCBIAkiBIAuAAIg/C9QgGASgJANQgHANgMAHQgLAHgSAAIgRgBg");
	this.shape_210.setTransform(812.4,452.3);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#58595B").s().p("AAeBVIhFhVIAABVIguAAIAAipIAuAAIAABNIA/hNIA3AAIhGBQIBOBZg");
	this.shape_211.setTransform(795.1,448.4);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#58595B").s().p("AAkBVIAAhzIhEBzIgvAAIAAipIAsAAIAAByIBEhyIAvAAIAACpg");
	this.shape_212.setTransform(774.2,448.4);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#58595B").s().p("AhLBVIAAipIBaAAQAOgBANAEQANAEAIAJQAIAKAAAQQAAAQgJAKQgIAKgQAEQAQACALAKQAKAKABARQgBAUgKALQgJAKgQAEQgPADgRAAgAgdA5IAdAAQAOAAAIgHQAIgGAAgLQAAgMgIgFQgIgFgPAAIgcAAgAgdgQIAbAAQAMAAAHgFQAHgEABgMQgBgLgIgFQgIgEgMAAIgZAAg");
	this.shape_213.setTransform(755.2,448.4);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#58595B").s().p("AgkBTQgagKgNgVQgNgWgBgeQABgcALgTQAMgUATgKQAUgLAaAAQAqAAAXAXQAYAXAAAqQABAbgLAUQgLAUgUALQgUALgcAAQgUAAgQgGgAgWgvQgJAJgEAMQgDANAAANQAAAKACAKQACAKAFAJQAEAIAHAFQAIAFAKAAQAPAAAJgJQAIgIADgNQAEgNAAgOQAAgNgDgNQgEgNgIgIQgJgIgPgBQgOABgIAIg");
	this.shape_214.setTransform(735.5,448.4);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#58595B").s().p("AAfBVIAAiKIg9AAIAACKIgvAAIAAipICbAAIAACpg");
	this.shape_215.setTransform(715.5,448.4);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#58595B").s().p("AglBTQgZgKgNgVQgNgWgBgeQABgcALgTQALgUAUgKQAUgLAaAAQAqAAAXAXQAYAXAAAqQABAbgLAUQgLAUgUALQgUALgcAAQgUAAgRgGgAgWgvQgJAJgEAMQgDANAAANQAAAKACAKQACAKAFAJQAEAIAHAFQAIAFAKAAQAPAAAJgJQAIgIADgNQAEgNAAgOQAAgNgDgNQgEgNgIgIQgJgIgPgBQgOABgIAIg");
	this.shape_216.setTransform(685.5,448.4);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#58595B").s().p("AgeBnQgcgNgQgaQgPgagBgmQABgiAQgbQAQgaAcgOQAcgPAiAAQAOAAAPACQAPACANAEIgCAmQgKgEgNgDQgMgCgMAAQgYAAgRAKQgRAKgKASQgKASAAAXQAAAYAJASQAKASARAKQAQAKAZAAQANAAAMgCQAMgCAMgFIACAkQgNAFgPADQgPACgPAAQgjAAgcgOg");
	this.shape_217.setTransform(665.3,445.6);

	this.instance_10 = new lib.animated_outline_mc();
	this.instance_10.parent = this;
	this.instance_10.setTransform(1197.3,597.2,1,1,0,0,0,596.3,305.6);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#58595B").s().p("AggBMQgSgNgIgTQgJgVAAgXQAAgWAIgUQAIgTAQgNQARgNAWAAQAZABAOAMQAOALAFASQAGATAAAVIAAAIIhzAAQAAASAHAPQAHAQANAKQAOAJAVAAQALAAALgCQAKgDAJgFIABASQgKAFgLACQgLACgMAAQgbAAgSgMgAAwgMQgBgOgDgNQgEgOgJgIQgJgJgSAAQgQAAgLAJQgMAJgFAOQgFANgCANIBfAAIAAAAg");
	this.shape_218.setTransform(1118.3,749.9);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#58595B").s().p("ABHBtIAAgxIiNAAIAAAxIgRAAIAAhCIASAAIANgWQAFgKACgLQADgKABgPQACgQAAgVIAAguIBrAAIAACXIAYAAIAABCgAgZg4QAAAUgCARQgBARgFAPQgFAQgKAOIBdAAIAAiGIhGAAg");
	this.shape_219.setTransform(1100.6,752.4);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#58595B").s().p("AglBSQgLgFgHgMQgHgLAAgQQAAgWAMgLQAMgMAWgFQATgFAbAAIAMAAIAAgJQAAgUgJgLQgJgNgWAAQgLAAgMAEQgMADgKAGIgDgRQALgHAMgCQANgEAMAAQAfABAOAPQANARAAAeIAABKIABARIACASIgSAAIgCgeQgGAQgPAIQgPAJgRAAQgPAAgMgGgAgBABQgSACgLAJQgMAJAAAQQAAASAKAIQAJAIAOAAQATAAALgJQALgJAFgPQAFgOAAgRIAAgHIgGAAIgGgBQgQAAgPACg");
	this.shape_220.setTransform(1073.8,749.9);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#58595B").s().p("AgkBSQgMgFgHgMQgHgLAAgQQAAgWAMgLQAMgMAVgFQAVgFAaAAIAMAAIAAgJQAAgUgJgLQgJgNgXAAQgLAAgLAEQgMADgLAGIgBgRQAKgHAMgCQANgEALAAQAgABAOAPQAOARAAAeIAABKIAAARIACASIgSAAIgBgeQgIAQgOAIQgOAJgSAAQgPAAgLgGgAAAABQgTACgLAJQgMAJAAAQQAAASAJAIQAKAIAPAAQARAAAMgJQALgJAFgPQAFgOAAgRIAAgHIgGAAIgGgBQgQAAgOACg");
	this.shape_221.setTransform(1030.5,749.9);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#58595B").s().p("AgVBMQgTgNgKgTQgKgVAAgXQAAgYAKgUQALgUATgLQATgMAYAAIATABQAJACAIACIgBATQgHgDgJgBQgIgCgJAAQgVAAgOAJQgOAJgIAQQgIAQAAATQAAASAIAQQAIARAOAKQAOAJAVAAQAKAAAIgBQAHgBAJgFIACATIgTAFIgSABQgaAAgTgMg");
	this.shape_222.setTransform(1015.8,749.9);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#58595B").s().p("AglBSQgMgFgGgMQgHgLAAgQQAAgWAMgLQAMgMAWgFQATgFAcAAIALAAIAAgJQAAgUgJgLQgJgNgWAAQgMAAgLAEQgMADgKAGIgDgRQALgHANgCQAMgEAMAAQAfABAOAPQANARAAAeIAABKIABARIACASIgSAAIgCgeQgGAQgPAIQgPAJgRAAQgPAAgMgGgAgBABQgSACgLAJQgMAJAAAQQAAASAKAIQAIAIAPAAQASAAAMgJQALgJAFgPQAFgOAAgRIAAgHIgGAAIgGgBQgQAAgPACg");
	this.shape_223.setTransform(999.5,749.9);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#58595B").s().p("AAqBVIAAhHIgSAEQgMADgOAAQgdAAgOgNQgOgMAAgbIAAg0IASAAIAAAvQAAAQAFAJQAFAJAJADQAKAEANAAIAQgCIAPgDIAKgBIAAhSIASAAIAACog");
	this.shape_224.setTransform(983.3,749.9);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#58595B").s().p("AAcByIAAg1IhsAAIAAgUIBmiaIAbAAIAACcIAgAAIAAASIggAAIAAA1gAg8ArIBYAAIAAiGg");
	this.shape_225.setTransform(957.5,747);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#58595B").s().p("AhCBzIAAgSIA1g6IAagfQANgPAGgPQAIgQAAgRQAAgUgMgKQgMgKgTAAQgOAAgNAEQgNAEgMAHIgDgUQANgGAOgEQAOgEAPAAQARAAAPAGQAPAGAIANQAJANAAAUQgBAUgHARQgJASgOAQQgNARgRATIgqAuIBsAAIAAASg");
	this.shape_226.setTransform(939,746.8);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#58595B").s().p("AgVAjIAUhFIAXAAIgbBFg");
	this.shape_227.setTransform(916.1,759.1);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#58595B").s().p("AgRBXQgJgCgHgEQgPgHgJgMQgJgNgFgPQgEgRgBgRQAAgXAJgUQAJgUARgLQARgMAYgBQAaAAARAMQARAMAIATQAIAUAAAYQAAAYgIAUQgIATgSANQgRAMgZAAQgJAAgIgBgAggg7QgMAKgGAQQgGAQAAARQABAMADANQADAMAHALQAHAKAKAGQALAGAOAAQAUAAAMgKQANgKAFgRQAHgQgBgRQAAgRgFgRQgGgPgNgKQgMgKgUAAQgTAAgNAKg");
	this.shape_228.setTransform(903.4,749.9);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#58595B").s().p("AhEBVIgHgBIABgSIAHACIAHAAQAOAAAIgPQAHgPADgiQADghAAg3IBlAAIAACoIgSAAIAAiXIhBAAQAAAxgDAhQgDAigLATQgMARgXABIgJgBg");
	this.shape_229.setTransform(884,750);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#58595B").s().p("AAvBVIAAiPIhZCPIgXAAIAAioIATAAIAACPIBaiPIAWAAIAACog");
	this.shape_230.setTransform(867.2,749.9);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#58595B").s().p("AgrBxQgRgOgIgVQgHgWAAgZQAAgaACgXQABgXAHgTQAGgVAOgNQAKgJAKgGQALgEAMgDQALgCAMgBIAYgCQALgBALgEIgBAUQgKADgLABIgWACQgdADgRAJQgRAJgIATQgIATgCAjQACgIAIgIQAHgKANgGQANgHARAAQAaABARALQAQALAIATQAHATAAAZQAAAagJATQgJATgRALQgRALgXAAQgbgBgRgNgAgngKQgQARAAAiQAAAWAHAPQAIAPANAJQANAIAPAAQAagBAOgSQAPgSAAggQAAgigOgRQgOgTgaAAQgZAAgQATg");
	this.shape_231.setTransform(848.9,746);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#58595B").s().p("AggBMQgSgNgJgTQgIgVAAgXQAAgWAIgUQAIgTARgNQAPgNAXAAQAZABAOAMQAOALAGASQAFATAAAVIAAAIIhzAAQAAASAHAPQAGAQAPAKQANAJAVAAQALAAALgCQAKgDAJgFIABASQgLAFgKACQgKACgNAAQgbAAgSgMgAAwgMQgBgOgDgNQgEgOgJgIQgJgJgSAAQgQAAgMAJQgLAJgGAOQgEANgBANIBeAAIAAAAg");
	this.shape_232.setTransform(822.5,749.9);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#58595B").s().p("ABHBtIAAgxIiNAAIAAAxIgRAAIAAhCIASAAIANgWQAFgKACgLQADgKABgPQACgQAAgVIAAguIBrAAIAACXIAYAAIAABCgAgZg4QAAAUgCARQgBARgFAPQgFAQgKAOIBdAAIAAiGIhGAAg");
	this.shape_233.setTransform(804.8,752.4);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#58595B").s().p("AgkBSQgMgFgHgMQgHgLAAgQQAAgWAMgLQAMgMAVgFQAVgFAaAAIAMAAIAAgJQABgUgKgLQgJgNgXAAQgLAAgLAEQgMADgLAGIgBgRQAKgHAMgCQANgEALAAQAgABAOAPQAOARAAAeIAABKIAAARIACASIgSAAIgBgeQgIAQgOAIQgOAJgSAAQgPAAgLgGgAAAABQgTACgLAJQgMAJAAAQQAAASAJAIQAKAIAPAAQARAAAMgJQALgJAFgPQAFgOAAgRIAAgHIgGAAIgGgBQgQAAgOACg");
	this.shape_234.setTransform(787,749.9);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#58595B").s().p("AAoBVIhWhWIAABWIgTAAIAAioIATAAIAABNIBNhNIAYAAIhPBOIBZBag");
	this.shape_235.setTransform(772.9,749.9);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#58595B").s().p("ABHBtIAAgxIiNAAIAAAxIgRAAIAAhCIASAAIANgWQAFgKACgLQADgKABgPQACgQAAgVIAAguIBrAAIAACXIAYAAIAABCgAgZg4QAAAUgCARQgBARgFAPQgFAQgKAOIBdAAIAAiGIhGAAg");
	this.shape_236.setTransform(745.4,752.4);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#58595B").s().p("AgSBXQgIgCgHgEQgPgHgJgMQgJgNgFgPQgEgRAAgRQAAgXAIgUQAJgUARgLQARgMAYgBQAaAAARAMQARAMAIATQAJAUAAAYQAAAYgJAUQgJATgRANQgQAMgaAAQgJAAgJgBgAgfg7QgNAKgGAQQgFAQgBARQAAAMADANQAEAMAHALQAGAKALAGQALAGAOAAQAUAAAMgKQANgKAFgRQAGgQABgRQAAgRgGgRQgGgPgNgKQgMgKgUAAQgTAAgMAKg");
	this.shape_237.setTransform(727.1,749.9);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#58595B").s().p("AgVAjIAUhFIAXAAIgaBFg");
	this.shape_238.setTransform(1513.6,716.1);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#58595B").s().p("AglBSQgLgGgHgLQgHgLAAgQQAAgWAMgMQANgLAUgFQAUgFAcAAIALAAIAAgIQAAgVgJgMQgJgMgXABQgLAAgLACQgMAEgLAFIgCgRQALgFANgEQAMgDALAAQAgABAOAQQAOAPAAAfIAABJIAAARIACASIgSAAIgCgdQgHAQgOAJQgOAIgSAAQgPAAgMgGgAgBABQgRADgMAIQgMAIAAARQAAASAJAIQAKAIAOAAQASAAAMgJQALgJAFgPQAFgOAAgRIAAgHIgGAAIgGgBQgQAAgPACg");
	this.shape_239.setTransform(1501.4,706.8);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#58595B").s().p("AAoBUIhWhVIAABVIgSAAIAAioIASAAIAABOIBOhOIAXAAIhPBPIBZBZg");
	this.shape_240.setTransform(1388.8,706.8);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#58595B").s().p("AglBSQgMgGgGgLQgHgLAAgQQAAgWAMgMQANgLAUgFQAVgFAbAAIALAAIAAgIQAAgVgJgMQgJgMgXABQgKAAgMACQgMAEgLAFIgCgRQALgFANgEQAMgDALAAQAgABAOAQQANAPAAAfIAABJIABARIACASIgSAAIgCgdQgGAQgPAJQgOAIgSAAQgPAAgMgGgAgBABQgRADgMAIQgMAIAAARQAAASAJAIQAJAIAPAAQATAAALgJQALgJAFgPQAFgOAAgRIAAgHIgGAAIgGgBQgQAAgPACg");
	this.shape_241.setTransform(1362,706.8);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#58595B").s().p("AggBLQgSgMgJgTQgIgUAAgYQAAgWAIgUQAIgTARgNQAQgMAWgBQAZABAOALQAOAMAGATQAFASAAAVIAAAIIhzAAQAAASAHAQQAGAPAOAKQAOAIAVABQALAAALgDQAKgCAJgFIABATQgKAEgLACQgLACgMAAQgbAAgSgNgAAwgNQgBgNgDgNQgEgNgJgJQgKgJgRAAQgQAAgLAJQgMAKgGANQgEANgCAMIBfAAIAAAAg");
	this.shape_242.setTransform(1277.7,706.8);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#58595B").s().p("AhDB7IAAi2IgBgeIgBgeIARAAIACAfQAHgQAOgJQAPgJAQAAQAaABAPAMQAPAMAGAUQAGATAAAYQAAAQgDAPQgEAPgIANQgIAMgNAJQgNAHgTAAQgQAAgOgIQgOgIgHgPIAABlgAgWhiQgKAGgGALQgGAKgDAMQgDANAAAMQAAAMADAMQADALAGALQAGAKAJAHQAKAHANAAQAUgBALgLQALgKAEgQQAEgQAAgQQAAgSgEgQQgEgPgLgLQgLgKgUAAQgNAAgJAGg");
	this.shape_243.setTransform(1260.8,710.3);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#58595B").s().p("AAoBUIhWhVIAABVIgTAAIAAioIATAAIAABOIBNhOIAYAAIhPBPIBaBZg");
	this.shape_244.setTransform(1244.8,706.8);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#58595B").s().p("AglBSQgMgGgGgLQgHgLAAgQQAAgWAMgMQANgLAUgFQAVgFAbAAIALAAIAAgIQAAgVgJgMQgJgMgWABQgLAAgMACQgMAEgLAFIgCgRQALgFANgEQAMgDAMAAQAfABAOAQQANAPAAAfIAABJIABARIACASIgSAAIgCgdQgHAQgOAJQgPAIgRAAQgPAAgMgGgAgBABQgRADgMAIQgMAIAAARQAAASAKAIQAIAIAPAAQATAAALgJQALgJAFgPQAFgOAAgRIAAgHIgGAAIgGgBQgQAAgPACg");
	this.shape_245.setTransform(1154.6,706.8);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#58595B").s().p("AggBLQgSgMgIgTQgJgUAAgYQAAgWAIgUQAJgTAPgNQAQgMAXgBQAZABAOALQAOAMAFATQAGASAAAVIAAAIIhzAAQAAASAHAQQAHAPAOAKQAOAIAUABQALAAAKgDQALgCAJgFIABATQgLAEgKACQgKACgMAAQgcAAgSgNgAAwgNQAAgNgEgNQgEgNgJgJQgKgJgQAAQgSAAgLAJQgLAKgGANQgFANAAAMIBeAAIAAAAg");
	this.shape_246.setTransform(1070.3,706.8);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#58595B").s().p("AgSBWQgIgBgHgEQgOgHgKgMQgJgNgFgPQgFgRABgRQAAgXAIgUQAJgUARgMQARgLAYgBQAaABARALQARAMAIAUQAJATAAAYQAAAYgJAUQgIATgSAMQgQANgaAAQgJAAgJgCgAgfg7QgNAKgGAQQgFAPAAASQgBANADAMQAEANAGAKQAHAKALAGQALAHAOAAQATgBANgKQAMgLAHgQQAFgQABgRQAAgSgGgQQgGgPgMgKQgNgKgUAAQgTAAgMAKg");
	this.shape_247.setTransform(1025.4,706.8);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#58595B").s().p("AgrBxQgRgNgIgWQgHgWAAgZQAAgZACgYQABgXAHgUQAGgUAOgOQAKgIAKgFQALgFAMgDQALgCAMgBIAYgDQALAAALgEIgBAUQgKADgLABIgWADQgdACgRAJQgRAIgIAUQgIATgCAiQACgGAIgKQAHgIANgHQANgHARAAQAaAAARALQAQAMAIAUQAHASAAAZQAAAZgJAUQgJATgRALQgRALgXAAQgbAAgRgOgAgngKQgQASAAAiQAAAVAHAPQAIAPANAIQANAJAPAAQAagBAOgSQAPgTAAgfQAAghgOgSQgOgSgaAAQgZAAgQASg");
	this.shape_248.setTransform(970.9,703);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#58595B").s().p("AglBSQgLgGgHgLQgHgLAAgQQAAgWAMgMQANgLAUgFQAVgFAbAAIALAAIAAgIQAAgVgJgMQgJgMgXABQgLAAgLACQgMAEgLAFIgCgRQALgFANgEQAMgDALAAQAgABAOAQQAOAPAAAfIAABJIAAARIACASIgSAAIgCgdQgHAQgOAJQgOAIgSAAQgPAAgMgGgAgBABQgRADgMAIQgMAIAAARQAAASAJAIQAKAIAOAAQASAAAMgJQALgJAFgPQAFgOAAgRIAAgHIgGAAIgGgBQgQAAgPACg");
	this.shape_249.setTransform(943.8,706.8);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#58595B").s().p("AgRBWQgJgBgHgEQgPgHgJgMQgKgNgEgPQgEgRgBgRQAAgXAJgUQAJgUARgMQARgLAYgBQAaABARALQARAMAIAUQAIATAAAYQAAAYgIAUQgIATgSAMQgQANgaAAQgJAAgIgCgAggg7QgMAKgGAQQgGAPAAASQAAANAEAMQADANAHAKQAGAKALAGQALAHAOAAQAUgBAMgKQANgLAFgQQAHgQAAgRQgBgSgFgQQgGgPgNgKQgMgKgUAAQgTAAgNAKg");
	this.shape_250.setTransform(919.9,706.8);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#58595B").s().p("AAoBUIhWhVIAABVIgSAAIAAioIASAAIAABOIBOhOIAXAAIhPBPIBZBZg");
	this.shape_251.setTransform(904.1,706.8);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#58595B").s().p("AgSBWQgIgBgHgEQgOgHgKgMQgJgNgFgPQgFgRABgRQAAgXAIgUQAJgUARgMQARgLAYgBQAaABARALQARAMAIAUQAJATAAAYQAAAYgJAUQgIATgSAMQgQANgaAAQgJAAgJgCgAgfg7QgNAKgGAQQgFAPAAASQgBANADAMQAEANAGAKQAHAKALAGQALAHAOAAQATgBANgKQAMgLAHgQQAFgQABgRQAAgSgGgQQgGgPgMgKQgNgKgUAAQgTAAgMAKg");
	this.shape_252.setTransform(876.9,706.8);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#58595B").s().p("AggBLQgSgMgJgTQgIgUAAgYQAAgWAIgUQAJgTAQgNQAPgMAXgBQAZABAOALQAOAMAGATQAFASAAAVIAAAIIhzAAQAAASAHAQQAGAPAOAKQAOAIAVABQALAAALgDQAKgCAJgFIABATQgKAEgLACQgLACgMAAQgbAAgSgNgAAwgNQgBgNgDgNQgEgNgJgJQgKgJgRAAQgQAAgMAJQgLAKgGANQgEANgCAMIBfAAIAAAAg");
	this.shape_253.setTransform(835.9,706.8);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#58595B").s().p("AgGBUIAAhTIhWAAIAABTIgSAAIAAioIASAAIAABFIBWAAIAAhFIASAAIAABFIAsAAQAQAAAMAFQANAFAHAJQAHALAAAQQAAAbgPANQgQANgaAAgAAMBDIApAAQAVAAAJgKQAJgJgBgQQABgOgKgIQgJgKgWABIgnAAg");
	this.shape_254.setTransform(815.5,706.8);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#58595B").s().p("AAoB6IhWhWIAABWIgTAAIAAioIATAAIAABNIBNhNIAYAAIhPBOIBaBagAgVhMIAYguIAXAAIgeAug");
	this.shape_255.setTransform(779,703);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#58595B").s().p("AggBMQgSgMgIgVQgJgTAAgYQAAgWAIgTQAJgVAPgMQAQgNAXAAQAZAAAOAMQAOAMAFASQAGAUAAAUIAAAIIhzAAQAAASAHAQQAHAPAOAJQAOAKAUAAQALAAAKgDQALgCAJgFIABASQgLAFgKACQgKACgMAAQgcAAgSgMgAAwgNQAAgNgEgNQgEgNgJgJQgKgJgQAAQgSAAgLAKQgLAIgGAOQgFAOAAALIBeAAIAAAAg");
	this.shape_256.setTransform(1506.8,663.8);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#58595B").s().p("ABGBVIAAiVIg7CVIgUAAIg8iVIAACVIgTAAIAAipIAfAAIA5CWIA6iWIAfAAIAACpg");
	this.shape_257.setTransform(1487.1,663.8);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#58595B").s().p("AggBMQgSgMgJgVQgIgTAAgYQAAgWAIgTQAIgVARgMQAPgNAXAAQAZAAAOAMQAOAMAGASQAFAUAAAUIAAAIIhzAAQAAASAHAQQAGAPAPAJQANAKAVAAQALAAALgDQAKgCAJgFIABASQgLAFgKACQgLACgMAAQgbAAgSgMgAAwgNQgBgNgDgNQgEgNgJgJQgJgJgSAAQgQAAgMAKQgLAIgGAOQgEAOgBALIBeAAIAAAAg");
	this.shape_258.setTransform(1440.3,663.8);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#58595B").s().p("AhpBVIAAipIASAAIAACYIBPAAIAAiYIASAAIAACYIBOAAIAAiYIASAAIAACpg");
	this.shape_259.setTransform(1418.9,663.8);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#58595B").s().p("AglBTQgLgHgHgLQgHgLAAgQQAAgVAMgMQANgMAUgFQAUgFAcAAIALAAIAAgIQAAgVgJgMQgJgLgXAAQgLAAgLACQgMAEgLAFIgCgRQALgFAMgEQANgDALAAQAgAAAOARQAOAQAAAeIAABKIAAARIACASIgSAAIgCgdQgHAPgOAIQgOAJgSAAQgPAAgMgFgAgBABQgRADgMAIQgMAIAAASQAAARAJAIQAJAIAPAAQATgBALgIQALgJAFgOQAFgPAAgRIAAgIIgGAAIgGAAQgQAAgPACg");
	this.shape_260.setTransform(1397,663.8);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#58595B").s().p("Ag8BVIAAipIA5AAQAPAAANAFQAMADAJAJQAHAJAAAPQAAAOgGAKQgFAKgNAEQAIABAHAEQAHAEAEAJQAFAIAAALQAAATgHALQgJAMgNAFQgOAGgQAAgAgpBEIApAAQAUgBAKgJQAKgJAAgQQAAgOgJgHQgKgJgVAAIgpAAgAgpgNIAnAAQARAAAIgHQAKgGAAgOQAAgOgKgHQgJgGgSAAIglAAg");
	this.shape_261.setTransform(1381.8,663.8);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#58595B").s().p("AglBTQgMgHgGgLQgHgLAAgQQAAgVAMgMQAMgMAWgFQATgFAbAAIAMAAIAAgIQAAgVgJgMQgJgLgWAAQgMAAgLACQgMAEgKAFIgDgRQALgFANgEQAMgDAMAAQAfAAAOARQANAQAAAeIAABKIABARIACASIgSAAIgCgdQgGAPgPAIQgPAJgRAAQgPAAgMgFgAgBABQgSADgLAIQgMAIAAASQAAARAKAIQAIAIAQAAQASgBALgIQALgJAFgOQAFgPAAgRIAAgIIgGAAIgGAAQgQAAgPACg");
	this.shape_262.setTransform(1355.5,663.8);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#58595B").s().p("AgkBTQgMgHgHgLQgHgLAAgQQAAgVAMgMQAMgMAWgFQAUgFAaAAIAMAAIAAgIQABgVgKgMQgJgLgXAAQgLAAgLACQgMAEgLAFIgBgRQAKgFAMgEQANgDALAAQAgAAAOARQAOAQAAAeIAABKIAAARIACASIgSAAIgBgdQgIAPgOAIQgOAJgSAAQgPAAgLgFgAAAABQgTADgLAIQgMAIAAASQAAARAJAIQAKAIAPAAQARgBAMgIQALgJAFgOQAFgPAAgRIAAgIIgGAAIgGAAQgQAAgOACg");
	this.shape_263.setTransform(1312.2,663.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#58595B").s().p("AhEBVIgHgBIABgSIAHABIAHABQAOAAAIgPQAHgQADghQADghAAg4IBlAAIAACpIgSAAIAAiXIhBAAQAAAxgDAhQgDAjgLARQgMASgXAAIgJAAg");
	this.shape_264.setTransform(1294.4,663.9);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#58595B").s().p("AgSBWQgIgCgHgDQgOgHgKgNQgJgMgFgQQgFgPABgSQAAgXAIgUQAJgTARgNQARgMAYAAQAaAAARAMQARAMAIAUQAJATAAAYQAAAYgJATQgIAVgSAMQgQAMgaAAQgJAAgJgCgAgfg7QgNAKgGAQQgFAPgBASQABAMACANQAEANAGAKQAIAKAKAGQALAHAOgBQATAAANgKQAMgLAHgQQAFgQABgRQAAgRgGgQQgGgQgMgKQgNgKgUAAQgTAAgMAKg");
	this.shape_265.setTransform(1259.4,663.8);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#58595B").s().p("AhDB7IAAi2IgBgeIgBgeIARAAIACAeQAHgPAOgIQAPgKAQAAQAaAAAPANQAPAMAGAUQAGAUAAAWQAAARgDAPQgEAPgIANQgIANgNAHQgNAIgTAAQgQAAgOgIQgOgIgHgPIAABlgAgWhiQgKAGgGALQgGAKgDANQgDAMAAALQAAAMADANQADALAGALQAGALAJAGQAKAHANgBQAUAAALgLQALgLAEgPQAEgPAAgSQAAgRgEgPQgEgQgLgKQgLgLgUAAQgNAAgJAGg");
	this.shape_266.setTransform(1241.6,667.3);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#58595B").s().p("AgrBxQgRgOgIgVQgHgWAAgZQAAgaACgWQABgYAHgTQAGgVAOgOQAKgJAKgEQALgGAMgBQALgDAMgBIAYgDQALgBALgDIgBAUQgKADgLABIgWADQgdACgRAJQgRAJgIATQgIATgCAjQACgIAIgJQAHgJANgGQANgHARAAQAaAAARAMQAQALAIATQAHATAAAYQAAAagJAUQgJATgRALQgRALgXAAQgbgBgRgNgAgngKQgQARAAAiQAAAWAHAOQAIAQANAIQANAJAPAAQAaAAAOgTQAPgSAAghQAAghgOgRQgOgSgagBQgZABgQASg");
	this.shape_267.setTransform(1223,659.9);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#58595B").s().p("AggBMQgSgMgIgVQgJgTAAgYQAAgWAIgTQAIgVARgMQAQgNAWAAQAZAAAOAMQAOAMAFASQAGAUAAAUIAAAIIhzAAQAAASAHAQQAHAPANAJQAOAKAVAAQALAAAKgDQALgCAJgFIABASQgKAFgLACQgLACgLAAQgcAAgSgMgAAwgNQgBgNgDgNQgEgNgJgJQgJgJgRAAQgRAAgLAKQgMAIgFAOQgGAOgBALIBfAAIAAAAg");
	this.shape_268.setTransform(1196.6,663.8);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#58595B").s().p("AgIBVIAAiYIg5AAIAAgRICEAAIAAARIg6AAIAACYg");
	this.shape_269.setTransform(1181.4,663.8);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#58595B").s().p("AAvBVIAAiPIhZCPIgXAAIAAipIATAAIAACQIBaiQIAWAAIAACpg");
	this.shape_270.setTransform(1165.3,663.8);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#58595B").s().p("AgVBMQgTgMgKgVQgKgTAAgYQAAgYAKgUQALgUATgLQATgMAYAAIATABQAJABAIADIgBATQgHgDgJgBIgRgCQgVAAgOAJQgOAJgIAQQgIAQAAATQAAASAIAQQAIAQAOAKQAOAKAVAAQAKAAAIgBQAHgBAJgEIACATIgTAEIgSABQgaAAgTgMg");
	this.shape_271.setTransform(1149.1,663.8);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#58595B").s().p("AglBTQgMgHgGgLQgHgLAAgQQAAgVAMgMQAMgMAWgFQATgFAbAAIAMAAIAAgIQAAgVgJgMQgJgLgWAAQgMAAgLACQgMAEgKAFIgDgRQALgFANgEQAMgDAMAAQAfAAAOARQANAQAAAeIAABKIABARIACASIgSAAIgCgdQgGAPgPAIQgPAJgRAAQgPAAgMgFgAgBABQgSADgLAIQgMAIAAASQAAARAKAIQAIAIAQAAQASgBALgIQALgJAFgOQAFgPAAgRIAAgIIgGAAIgGAAQgQAAgPACg");
	this.shape_272.setTransform(1123.8,663.8);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#58595B").s().p("AgkBWQgLgDgJgDIACgTQAHADALAEQALADAPAAQAUAAANgKQAMgJABgPQAAgTgMgIQgNgIgVAAIgIAAIgHAAIAAgQIAGAAIAIAAQATABAMgIQAMgHAAgRQAAgKgGgGQgFgFgJgCQgIgCgIAAQgPABgNAEQgNAEgGAFIgCgTQAHgEANgEQAMgDASgBQAPAAANAEQANAEAHAJQAHAIABAPQgBAPgJALQgKALgRAEQASACALAKQALALABASQgBASgJALQgJAMgPAGQgQAGgQAAQgQAAgLgCg");
	this.shape_273.setTransform(1108.7,663.8);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#58595B").s().p("AhEBVIgHgBIABgSIAHABIAHABQAOAAAIgPQAHgQADghQADghAAg4IBlAAIAACpIgSAAIAAiXIhBAAQAAAxgDAhQgDAjgLARQgMASgXAAIgJAAg");
	this.shape_274.setTransform(1082.7,663.9);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#58595B").s().p("AAvBVIAAiPIhZCPIgXAAIAAipIATAAIAACQIBaiQIAWAAIAACpg");
	this.shape_275.setTransform(1065.9,663.8);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#58595B").s().p("AgJCfIAAhbQgFAKgLAGQgLAFgOAAQgUAAgOgLQgNgMgHgTQgHgUAAgaQAAgZAGgTQAHgUANgLQAOgLAWgBQAKABAIADQAIAEAFAFQAHAFACAFIAAhfIASAAIAABfIAJgKQAFgFAJgEQAIgDAKgBQAWABANALQAOALAGAUQAHATAAAZQAAAagHAUQgHATgNAMQgOALgVAAQgNAAgLgFQgLgGgGgKIAABbgAAXg8QgJAIgFANIAABSQAFANAJAIQAKAIAOABQARgBAKgKQAKgLAEgRQAEgQAAgRQAAgQgEgQQgFgQgJgLQgKgLgRAAQgPAAgJAJgAhJg6QgKALgEAQQgEAQAAAQQAAARAEAQQAEARAKALQAJAKASABQAOgBAKgIQAJgIAEgNIAAhSQgEgNgJgIQgKgJgOAAQgRAAgKALg");
	this.shape_276.setTransform(1044,663.6);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#58595B").s().p("AgSBWQgIgCgHgDQgOgHgKgNQgJgMgFgQQgFgPABgSQgBgXAJgUQAJgTARgNQARgMAYAAQAaAAARAMQARAMAIAUQAJATAAAYQAAAYgJATQgIAVgRAMQgRAMgaAAQgJAAgJgCgAgfg7QgNAKgGAQQgFAPAAASQAAAMACANQAEANAGAKQAIAKAKAGQALAHAOgBQATAAANgKQAMgLAHgQQAFgQAAgRQAAgRgFgQQgGgQgMgKQgNgKgUAAQgTAAgMAKg");
	this.shape_277.setTransform(1022.1,663.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#58595B").s().p("AhDB7IAAi2IgBgeIgBgeIARAAIACAeQAHgPAOgIQAPgKAQAAQAaAAAPANQAPAMAGAUQAGAUAAAWQAAARgDAPQgEAPgIANQgIANgNAHQgNAIgTAAQgQAAgOgIQgOgIgHgPIAABlgAgWhiQgKAGgGALQgGAKgDANQgDAMAAALQAAAMADANQADALAGALQAGALAJAGQAKAHANgBQAUAAALgLQALgLAEgPQAEgPAAgSQAAgRgEgPQgEgQgLgKQgLgLgUAAQgNAAgJAGg");
	this.shape_278.setTransform(1004.3,667.3);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#58595B").s().p("AAvBVIAAiPIhZCPIgXAAIAAipIATAAIAACQIBaiQIAWAAIAACpg");
	this.shape_279.setTransform(958.8,663.8);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#58595B").s().p("AAqBVIAAhHIgSAFQgMACgOAAQgdAAgOgNQgOgMAAgbIAAg1IASAAIAAAwQAAAQAFAJQAFAJAJADQAKADANABIAQgCIAPgDIAKgCIAAhSIASAAIAACpg");
	this.shape_280.setTransform(925.4,663.8);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#58595B").s().p("AAvBVIAAiPIhZCPIgXAAIAAipIATAAIAACQIBaiQIAWAAIAACpg");
	this.shape_281.setTransform(908.4,663.8);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#58595B").s().p("AgVBMQgTgMgKgVQgKgTAAgYQAAgYAKgUQALgUATgLQATgMAYAAIATABQAJABAIADIgBATQgHgDgJgBIgRgCQgVAAgOAJQgOAJgIAQQgIAQAAATQAAASAIAQQAIAQAOAKQAOAKAVAAQAKAAAIgBQAHgBAJgEIACATIgTAEIgSABQgaAAgTgMg");
	this.shape_282.setTransform(874.1,663.8);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#58595B").s().p("AAvBVIAAiPIhZCPIgXAAIAAipIATAAIAACQIBaiQIAWAAIAACpg");
	this.shape_283.setTransform(857.3,663.8);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#58595B").s().p("AhDB7IAAi2IgBgeIgBgeIARAAIACAeQAHgPAOgIQAPgKAQAAQAaAAAPANQAPAMAGAUQAGAUAAAWQAAARgDAPQgEAPgIANQgIANgNAHQgNAIgTAAQgQAAgOgIQgOgIgHgPIAABlgAgWhiQgKAGgGALQgGAKgDANQgDAMAAALQAAAMADANQADALAGALQAGALAJAGQAKAHANgBQAUAAALgLQALgLAEgPQAEgPAAgSQAAgRgEgPQgEgQgLgKQgLgLgUAAQgNAAgJAGg");
	this.shape_284.setTransform(839.6,667.3);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#58595B").s().p("AgRBWQgJgCgHgDQgPgHgJgNQgJgMgFgQQgFgPAAgSQAAgXAJgUQAJgTARgNQARgMAYAAQAaAAARAMQARAMAIAUQAIATAAAYQAAAYgIATQgIAVgSAMQgRAMgZAAQgJAAgIgCgAggg7QgMAKgGAQQgGAPAAASQABAMADANQADANAHAKQAHAKAKAGQALAHAOgBQAUAAAMgKQANgLAFgQQAHgQgBgRQAAgRgFgQQgGgQgNgKQgMgKgUAAQgTAAgNAKg");
	this.shape_285.setTransform(821,663.8);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#58595B").s().p("AAoBVIhWhWIAABWIgSAAIAAipIASAAIAABPIBOhPIAXAAIhPBPIBZBag");
	this.shape_286.setTransform(805.2,663.8);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#58595B").s().p("AggBMQgSgMgIgVQgJgTAAgYQAAgWAIgTQAIgVARgMQAQgNAWAAQAZAAAOAMQAOAMAFASQAGAUAAAUIAAAIIhzAAQAAASAHAQQAHAPANAJQAOAKAVAAQALAAALgDQAKgCAJgFIABASQgKAFgLACQgLACgMAAQgbAAgSgMgAAwgNQgBgNgDgNQgEgNgJgJQgJgJgSAAQgQAAgLAKQgMAIgFAOQgFAOgCALIBfAAIAAAAg");
	this.shape_287.setTransform(761,663.8);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#58595B").s().p("ABHBtIAAgxIiNAAIAAAxIgRAAIAAhCIASAAIANgWQAFgKACgLQADgLABgPQACgPAAgWIAAguIBrAAIAACYIAYAAIAABCgAgZg4QAAATgCASQgBASgFAOQgFAPgKAPIBdAAIAAiHIhGAAg");
	this.shape_288.setTransform(743.3,666.3);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#58595B").s().p("AggBMQgSgMgJgVQgIgTAAgYQAAgWAIgTQAIgVARgMQAPgNAXAAQAZAAAOAMQAOAMAGASQAFAUAAAUIAAAIIhzAAQAAASAHAQQAHAPAOAJQANAKAVAAQALAAALgDQAKgCAJgFIABASQgLAFgKACQgKACgNAAQgbAAgSgMgAAwgNQgBgNgDgNQgEgNgJgJQgJgJgSAAQgQAAgMAKQgLAIgGAOQgEAOgBALIBeAAIAAAAg");
	this.shape_289.setTransform(726.2,663.8);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#58595B").s().p("AAvBVIAAiPIhZCPIgXAAIAAioIATAAIAACPIBaiPIAWAAIAACog");
	this.shape_290.setTransform(1242.3,620.7);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#58595B").s().p("AA5BtIAAgxIiDAAIAAioIATAAIAACXIBYAAIAAiXIASAAIAACXIAYAAIAABCg");
	this.shape_291.setTransform(1225.2,623.2);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#58595B").s().p("AgSBXQgIgCgHgEQgPgHgJgNQgKgMgEgPQgEgRgBgRQABgXAIgUQAJgUARgLQARgMAYgBQAaAAARAMQARAMAIATQAIAUABAYQgBAYgIATQgJAUgRANQgQAMgaAAQgJAAgJgBgAgfg7QgNAKgGAQQgGAQAAARQAAANAEAMQADAMAHALQAGAKALAGQALAGAOAAQAUAAAMgKQAMgKAGgRQAGgQABgRQgBgSgFgQQgGgPgNgKQgMgKgUAAQgTAAgMAKg");
	this.shape_292.setTransform(1206,620.7);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#58595B").s().p("AhpBVIAAioIASAAIAACXIBPAAIAAiXIASAAIAACXIBOAAIAAiXIASAAIAACog");
	this.shape_293.setTransform(1183.6,620.7);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#58595B").s().p("AgSBXQgIgCgHgEQgOgHgKgNQgJgMgFgPQgFgRABgRQAAgXAIgUQAJgUARgLQARgMAYgBQAaAAARAMQARAMAIATQAJAUAAAYQAAAYgJATQgIAUgRANQgRAMgaAAQgJAAgJgBgAgfg7QgNAKgGAQQgFAQgBARQAAANADAMQAEAMAGALQAIAKAKAGQALAGAOAAQATAAANgKQAMgKAHgRQAFgQABgRQAAgSgGgQQgGgPgMgKQgNgKgUAAQgTAAgMAKg");
	this.shape_294.setTransform(1161.3,620.7);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#58595B").s().p("AgIBVIAAiXIg6AAIAAgRICFAAIAAARIg6AAIAACXg");
	this.shape_295.setTransform(1127.2,620.7);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#58595B").s().p("AggBMQgSgNgIgUQgJgTAAgYQAAgWAIgUQAJgTAPgNQAQgNAXAAQAZABAOAMQAOALAFASQAGAUAAAUIAAAIIhzAAQAAASAHAPQAHAQAOAJQAOAJAUABQALAAAKgCQALgDAJgFIABASQgKAFgLACQgKACgMAAQgcAAgSgMgAAwgMQgBgOgDgNQgEgOgJgIQgKgJgQAAQgSAAgKAJQgMAJgFAOQgGANgBANIBfAAIAAAAg");
	this.shape_296.setTransform(1103.2,620.7);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#58595B").s().p("AAvBVIAAiPIhZCPIgXAAIAAioIATAAIAACPIBaiPIAWAAIAACog");
	this.shape_297.setTransform(1072,620.7);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#58595B").s().p("AglBSQgMgFgGgMQgHgLAAgQQAAgVAMgMQANgMAUgFQAVgFAbAAIALAAIAAgJQABgUgKgLQgJgNgWAAQgMAAgLAEQgMADgLAGIgCgRQALgHANgCQAMgEAMAAQAfABAOAPQANAQAAAfIAABKIABARIACASIgSAAIgCgeQgGAQgPAIQgPAJgRAAQgPAAgMgGgAgBABQgRACgMAJQgMAJAAAQQAAASAKAIQAIAIAPAAQATgBALgIQALgJAFgPQAFgOAAgRIAAgIIgGAAIgGAAQgQAAgPACg");
	this.shape_298.setTransform(1030.4,620.7);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#58595B").s().p("AAuBVIAAhSIhbAAIAABSIgTAAIAAioIATAAIAABGIBbAAIAAhGIATAAIAACog");
	this.shape_299.setTransform(1013.8,620.7);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#58595B").s().p("AAoBVIhWhWIAABWIgTAAIAAioIATAAIAABNIBNhNIAYAAIhPBOIBaBag");
	this.shape_300.setTransform(972.9,620.7);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#58595B").s().p("AggBMQgSgNgJgUQgIgTAAgYQAAgWAIgUQAIgTARgNQAQgNAWAAQAZABAOAMQAOALAGASQAFAUAAAUIAAAIIhzAAQAAASAHAPQAGAQAOAJQAOAJAVABQALAAALgCQAKgDAJgFIABASQgKAFgLACQgLACgMAAQgbAAgSgMgAAwgMQgBgOgDgNQgEgOgJgIQgKgJgRAAQgQAAgLAJQgMAJgGAOQgEANgCANIBfAAIAAAAg");
	this.shape_301.setTransform(942,620.7);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#58595B").s().p("ABGBVIAAiVIg8CVIgUAAIg6iVIAACVIgUAAIAAioIAgAAIA4CUIA6iUIAfAAIAACog");
	this.shape_302.setTransform(922.3,620.7);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#58595B").s().p("AgVBMQgTgNgKgUQgKgTAAgYQAAgYAKgUQALgUATgLQATgMAYAAIATABQAJACAIADIgBASQgHgDgJgBQgIgCgJAAQgVAAgOAJQgOAJgIAQQgIAQAAATQAAASAIAQQAIARAOAKQAOAJAVAAQAKAAAIgBQAHgCAJgEIACATIgTAFIgSABQgaAAgTgMg");
	this.shape_303.setTransform(903.7,620.7);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#58595B").s().p("AggBMQgSgNgJgUQgIgTAAgYQAAgWAIgUQAJgTAQgNQAPgNAXAAQAZABAOAMQAOALAGASQAFAUAAAUIAAAIIhzAAQAAASAHAPQAGAQAOAJQAOAJAVABQALAAALgCQAKgDAJgFIABASQgKAFgLACQgLACgMAAQgbAAgSgMgAAwgMQgBgOgDgNQgEgOgJgIQgKgJgRAAQgQAAgMAJQgLAJgGAOQgFANgBANIBfAAIAAAAg");
	this.shape_304.setTransform(888.1,620.7);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#58595B").s().p("AglBSQgMgFgGgMQgHgLAAgQQAAgVAMgMQAMgMAWgFQATgFAcAAIALAAIAAgJQAAgUgJgLQgJgNgWAAQgMAAgLAEQgMADgKAGIgDgRQALgHANgCQAMgEAMAAQAfABAOAPQANAQAAAfIAABKIABARIACASIgSAAIgCgeQgGAQgPAIQgPAJgRAAQgPAAgMgGgAgBABQgSACgLAJQgMAJAAAQQAAASAKAIQAIAIAPAAQASgBAMgIQALgJAFgPQAFgOAAgRIAAgIIgGAAIgGAAQgQAAgPACg");
	this.shape_305.setTransform(826.2,620.7);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#58595B").s().p("AAuBVIAAhSIhbAAIAABSIgTAAIAAioIATAAIAABGIBbAAIAAhGIATAAIAACog");
	this.shape_306.setTransform(809.6,620.7);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#58595B").s().p("AgIBVIAAiXIg6AAIAAgRICFAAIAAARIg6AAIAACXg");
	this.shape_307.setTransform(759.6,620.7);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#58595B").s().p("AggBMQgSgNgIgUQgJgTAAgYQAAgWAIgUQAJgTAPgNQARgNAWAAQAZABAOAMQAOALAFASQAGAUAAAUIAAAIIhzAAQAAASAHAPQAHAQANAJQAOAJAVABQALAAAKgCQALgDAJgFIABASQgLAFgKACQgLACgLAAQgcAAgSgMgAAwgMQgBgOgDgNQgEgOgJgIQgJgJgRAAQgSAAgKAJQgMAJgFAOQgGANgBANIBfAAIAAAAg");
	this.shape_308.setTransform(744.7,620.7);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#58595B").s().p("AglBSQgMgGgGgLQgHgLAAgQQAAgWAMgMQAMgLAWgFQATgFAbAAIAMAAIAAgIQAAgVgJgMQgJgMgWAAQgMAAgLADQgMAEgKAFIgDgRQALgFANgEQAMgDAMAAQAfABAOAQQANAPAAAfIAABJIABARIACASIgSAAIgCgcQgGAPgPAJQgPAIgRAAQgPAAgMgGgAgBABQgSADgLAIQgMAIAAARQAAASAKAIQAIAIAQAAQASAAALgJQALgJAFgPQAFgOAAgRIAAgHIgGAAIgGgBQgQAAgPACg");
	this.shape_309.setTransform(1047.3,577.7);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#58595B").s().p("Ag8BUIAAioIA6AAQAOABANAEQANADAHAJQAIAJAAAPQAAAOgGAKQgGAKgNAEQAIABAHAEQAIAFAEAHQAGAJAAALQAAATgIAMQgJALgNAGQgOAEgRAAgAgpBDIApAAQAUAAAKgJQALgJAAgPQAAgPgKgIQgKgIgWAAIgoAAgAgpgNIAnAAQARAAAJgGQAJgHAAgPQAAgNgKgHQgKgGgQAAIgmAAg");
	this.shape_310.setTransform(974,577.7);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#58595B").s().p("AgRBWQgJgBgHgEQgOgHgKgMQgJgNgFgPQgFgRAAgRQAAgXAJgUQAJgUARgMQARgLAYgBQAaABARALQARAMAIAUQAJATgBAYQABAYgJAUQgJATgQAMQgSANgZAAQgJAAgIgCgAggg7QgMAKgGAQQgGAPABASQAAAMACANQAEAMAGALQAIAKAKAGQALAHAOAAQAUgBAMgKQAMgLAHgQQAFgQAAgRQABgSgGgPQgGgQgMgKQgNgKgUAAQgTAAgNAKg");
	this.shape_311.setTransform(956.2,577.7);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#58595B").s().p("AggBLQgSgMgJgTQgIgUAAgYQAAgWAIgUQAIgTAQgNQAQgMAXgBQAZABAOALQAOAMAGATQAFASAAAVIAAAIIhzAAQAAASAHAQQAGAPAPAKQANAIAVABQALAAAKgDQALgCAJgFIABATQgLAEgKACQgKACgNAAQgbAAgSgNgAAwgNQAAgNgEgNQgEgNgJgJQgJgJgSAAQgQAAgMAJQgLAKgGANQgEANgBAMIBeAAIAAAAg");
	this.shape_312.setTransform(879.7,577.7);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#58595B").s().p("AgrBxQgRgNgIgWQgHgWAAgZQAAgZACgXQABgYAHgUQAGgUAOgOQAKgIAKgFQALgGAMgCQALgCAMgBIAYgDQALAAALgEIgBAUQgKADgLABIgWADQgdACgRAJQgRAIgIAUQgIATgCAiQACgGAIgKQAHgIANgHQANgHARAAQAaAAARALQAQAMAIAUQAHASAAAZQAAAZgJAUQgJATgRALQgRALgXAAQgbAAgRgOgAgngKQgQASAAAiQAAAUAHAQQAIAPANAIQANAJAPAAQAaAAAOgTQAPgTAAgfQAAghgOgSQgOgSgaAAQgZAAgQASg");
	this.shape_313.setTransform(862.3,573.8);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#58595B").s().p("AggBLQgSgMgJgTQgIgUAAgYQAAgWAIgUQAJgTAQgNQAPgMAXgBQAZABAOALQAOAMAGATQAFASAAAVIAAAIIhzAAQAAASAHAQQAGAPAOAKQAOAIAVABQALAAALgDQAKgCAJgFIABATQgKAEgLACQgLACgMAAQgbAAgSgNgAAwgNQgBgNgDgNQgEgNgJgJQgKgJgRAAQgQAAgMAJQgLAKgGANQgEANgCAMIBfAAIAAAAg");
	this.shape_314.setTransform(835.9,577.7);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#58595B").s().p("AgGBUIAAhTIhWAAIAABTIgSAAIAAioIASAAIAABFIBWAAIAAhFIASAAIAABFIAsAAQAQAAAMAFQANAFAHAJQAHALAAAQQAAAbgPANQgQANgaAAgAAMBDIApAAQAVAAAJgKQAJgJgBgQQABgOgKgIQgJgKgWABIgnAAg");
	this.shape_315.setTransform(815.5,577.7);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#58595B").s().p("AgkBSQgNgGgGgLQgHgLAAgQQAAgWAMgMQAMgLAWgFQATgFAbAAIAMAAIAAgIQABgVgKgMQgJgMgWAAQgLAAgMADQgMAEgKAFIgCgRQAKgFAMgEQANgDAMAAQAfABAOAQQANAPAAAfIAABJIABARIACASIgSAAIgBgcQgIAPgOAJQgPAIgRAAQgPAAgLgGgAAAABQgTADgLAIQgMAIAAARQAAASAKAIQAJAIAPAAQARAAAMgJQALgJAFgPQAFgOAAgRIAAgHIgGAAIgGgBQgQAAgOACg");
	this.shape_316.setTransform(793.1,577.7);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#58595B").s().p("AAoB6IhWhWIAABWIgTAAIAAioIATAAIAABNIBNhNIAYAAIhPBOIBaBagAgVhMIAYguIAXAAIgeAug");
	this.shape_317.setTransform(779,573.9);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#58595B").s().p("AAtBUIAAiXIhZAAIAACXIgTAAIAAioIB/AAIAACog");
	this.shape_318.setTransform(726.8,577.7);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#58595B").s().p("AggBMQgSgMgJgVQgIgTAAgYQAAgWAIgTQAJgVAQgMQAPgNAXAAQAZAAAOAMQAOAMAGASQAFAUAAAUIAAAIIhzAAQAAASAHAQQAGAPAOAJQAOAKAVAAQALAAALgDQAKgCAJgFIABASQgKAFgLACQgLACgMAAQgbAAgSgMgAAwgMQgBgOgDgNQgEgNgJgJQgKgJgRAAQgQAAgMAKQgLAIgGAOQgFAOgBAMIBfAAIAAAAg");
	this.shape_319.setTransform(1192.7,534.6);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#58595B").s().p("AgGBVIAAhUIhWAAIAABUIgSAAIAAipIASAAIAABFIBWAAIAAhFIASAAIAABFIAsAAQAQAAAMAFQANAFAHAJQAHALAAAQQAAAbgPANQgQAOgaAAgAAMBDIApAAQAVAAAJgJQAJgKgBgQQABgOgKgIQgJgJgWAAIgnAAg");
	this.shape_320.setTransform(1172.3,534.6);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#58595B").s().p("AglBTQgMgHgGgLQgHgLAAgQQAAgVAMgNQAMgLAWgFQATgFAbAAIAMAAIAAgIQABgVgKgLQgJgMgWAAQgLAAgMACQgMAEgKAGIgCgSQAKgFAMgEQANgDAMAAQAfAAAOARQANAQAAAeIAABJIABASIACASIgSAAIgBgdQgIAPgOAIQgPAJgRAAQgPAAgMgFgAAAABQgTADgLAIQgMAIAAASQAAARAJAIQAKAIAPAAQARgBAMgIQALgJAFgOQAFgPAAgRIAAgIIgGAAIgGAAQgQAAgOACg");
	this.shape_321.setTransform(1150,534.6);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#58595B").s().p("AAoB7IhWhXIAABXIgTAAIAAipIATAAIAABOIBNhOIAYAAIhPBOIBaBbgAgVhLIAYguIAXAAIgeAug");
	this.shape_322.setTransform(1135.8,530.8);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#58595B").s().p("AgkBTQgNgHgGgLQgHgLAAgQQAAgVAMgNQAMgLAWgFQATgFAbAAIAMAAIAAgIQABgVgKgLQgJgMgWAAQgLAAgMACQgMAEgKAGIgDgSQALgFAMgEQANgDAMAAQAfAAAOARQANAQAAAeIAABJIABASIACASIgSAAIgCgdQgGAPgPAIQgPAJgRAAQgPAAgLgFgAgBABQgRADgMAIQgMAIAAASQAAARAKAIQAJAIAPAAQASgBALgIQALgJAFgOQAFgPAAgRIAAgIIgGAAIgGAAQgQAAgPACg");
	this.shape_323.setTransform(1118,534.6);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#58595B").s().p("AAtBVIAAiYIhZAAIAACYIgTAAIAAipIB/AAIAACpg");
	this.shape_324.setTransform(1083.7,534.6);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#58595B").s().p("AgSBWQgIgCgHgDQgPgHgJgNQgKgMgEgQQgEgPgBgSQABgXAIgUQAJgTARgNQARgMAYAAQAaAAARAMQARAMAIAUQAIATABAYQgBAYgIATQgJAVgRAMQgQAMgaAAQgJAAgJgCgAgfg7QgNAKgGAQQgFAPgBASQAAAMAEANQADANAHAKQAGAKALAGQALAHAOgBQATAAANgKQAMgLAGgQQAHgQAAgRQgBgRgFgQQgGgQgNgKQgMgKgUAAQgTAAgMAKg");
	this.shape_325.setTransform(1056.6,534.6);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#58595B").s().p("AAuBVIAAhSIhbAAIAABSIgTAAIAAipIATAAIAABHIBbAAIAAhHIATAAIAACpg");
	this.shape_326.setTransform(1038.3,534.6);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#58595B").s().p("AggBMQgSgMgIgVQgJgTAAgYQAAgWAIgTQAJgVAPgMQAQgNAXAAQAZAAAOAMQAOAMAFASQAGAUAAAUIAAAIIhzAAQAAASAHAQQAHAPAOAJQAOAKAUAAQALAAAKgDQALgCAJgFIABASQgLAFgKACQgLACgLAAQgcAAgSgMgAAwgMQAAgOgEgNQgEgNgJgJQgKgJgQAAQgSAAgLAKQgLAIgFAOQgGAOAAAMIBeAAIAAAAg");
	this.shape_327.setTransform(1002.8,534.6);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#58595B").s().p("AgrBxQgRgOgIgVQgHgWAAgZQAAgaACgWQABgYAHgTQAGgVAOgOQAKgJAKgEQALgGAMgBQALgDAMgBIAYgDQALgBALgDIgBAUQgKADgLABIgWADQgdACgRAJQgRAJgIATQgIATgCAjQACgIAIgJQAHgJANgGQANgHARAAQAaAAARAMQAQALAIATQAHATAAAYQAAAagJAUQgJATgRALQgRALgXAAQgbgBgRgNgAgngKQgQARAAAiQAAAWAHAOQAIAQANAIQANAJAPAAQAaAAAOgTQAPgSAAghQAAghgOgRQgOgSgagBQgZABgQASg");
	this.shape_328.setTransform(985.3,530.8);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#58595B").s().p("AgkBWQgLgDgJgDIACgTQAHADALAEQALADAPAAQAUAAANgKQAMgJABgPQAAgTgMgIQgNgIgVAAIgIAAIgHAAIAAgQIAGAAIAIAAQATABAMgIQAMgHAAgRQAAgKgGgGQgFgFgJgCQgIgCgIAAQgPABgNAEQgNAFgGAEIgCgTQAHgEANgEQAMgDASgBQAPAAANAEQANAEAHAJQAHAIABAPQgBAPgJALQgKALgRAEQASACALAKQALALABASQgBASgJALQgJAMgPAGQgQAGgQAAQgQAAgLgCg");
	this.shape_329.setTransform(968.5,534.7);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#58595B").s().p("AggBMQgSgMgIgVQgJgTAAgYQAAgWAIgTQAIgVARgMQAQgNAWAAQAZAAAOAMQAOAMAFASQAGAUAAAUIAAAIIhzAAQAAASAHAQQAHAPANAJQAOAKAVAAQALAAALgDQAKgCAJgFIABASQgKAFgLACQgLACgMAAQgbAAgSgMgAAwgMQgBgOgDgNQgEgNgJgJQgJgJgRAAQgRAAgLAKQgMAIgFAOQgGAOgBAMIBfAAIAAAAg");
	this.shape_330.setTransform(953.6,534.6);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#58595B").s().p("AgrBxQgRgOgIgVQgHgWAAgZQAAgaACgWQABgYAHgTQAGgVAOgOQAKgJAKgEQALgGAMgBQALgDAMgBIAYgDQALgBALgDIgBAUQgKADgLABIgWADQgdACgRAJQgRAJgIATQgIATgCAjQACgIAIgJQAHgJANgGQANgHARAAQAaAAARAMQAQALAIATQAHATAAAYQAAAagJAUQgJATgRALQgRALgXAAQgbgBgRgNgAgngKQgQARAAAiQAAAWAHAOQAIAQANAIQANAJAPAAQAaAAAOgTQAPgSAAghQAAghgOgRQgOgSgagBQgZABgQASg");
	this.shape_331.setTransform(936.1,530.8);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#58595B").s().p("AAvBVIAAiPIhZCPIgXAAIAAipIATAAIAACQIBaiQIAWAAIAACpg");
	this.shape_332.setTransform(908.6,534.6);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#58595B").s().p("AgRBWQgJgCgHgDQgPgHgJgNQgKgMgEgQQgEgPgBgSQAAgXAJgUQAJgTARgNQARgMAYAAQAaAAARAMQARAMAIAUQAIATAAAYQAAAYgIATQgIAVgSAMQgRAMgZAAQgJAAgIgCgAggg7QgMAKgGAQQgGAPAAASQABAMADANQADANAHAKQAHAKAKAGQALAHAOgBQAUAAAMgKQANgLAFgQQAHgQAAgRQgBgRgFgQQgGgQgNgKQgMgKgUAAQgTAAgNAKg");
	this.shape_333.setTransform(881.3,534.6);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#58595B").s().p("AAuBVIAAhSIhbAAIAABSIgTAAIAAipIATAAIAABHIBbAAIAAhHIATAAIAACpg");
	this.shape_334.setTransform(863,534.6);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#58595B").s().p("AgVBMQgTgMgKgVQgKgTAAgYQAAgYAKgUQALgUATgLQATgMAYAAIATABQAJABAIADIgBATQgHgDgJgBIgRgCQgVAAgOAJQgOAJgIAQQgIAQAAATQAAASAIAQQAIAQAOAKQAOAKAVAAQAKAAAIgBQAHgBAJgEIACATIgTAEIgSABQgaAAgTgMg");
	this.shape_335.setTransform(846.9,534.6);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#58595B").s().p("AggBMQgSgMgJgVQgIgTAAgYQAAgWAIgTQAIgVAQgMQAQgNAXAAQAZAAAOAMQAOAMAGASQAFAUAAAUIAAAIIhzAAQAAASAHAQQAGAPAPAJQAOAKAUAAQALAAAKgDQALgCAJgFIABASQgLAFgKACQgLACgLAAQgcAAgSgMgAAwgMQAAgOgEgNQgEgNgJgJQgKgJgQAAQgSAAgLAKQgLAIgGAOQgEAOgBAMIBeAAIAAAAg");
	this.shape_336.setTransform(831.2,534.6);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#58595B").s().p("AhEBVIgHgBIABgSIAHABIAHABQAOAAAIgPQAHgQADghQADghAAg4IBlAAIAACpIgSAAIAAiYIhBAAQAAAygDAhQgDAjgLARQgMASgXAAIgJAAg");
	this.shape_337.setTransform(812.8,534.7);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#58595B").s().p("AgVAjIAUhFIAXAAIgbBFg");
	this.shape_338.setTransform(790.7,543.9);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#58595B").s().p("AgRBWQgJgCgHgDQgOgHgKgNQgJgMgFgQQgFgPAAgSQAAgXAJgUQAJgTARgNQARgMAYAAQAaAAARAMQARAMAIAUQAJATgBAYQABAYgJATQgJAVgQAMQgSAMgZAAQgJAAgIgCgAggg7QgMAKgGAQQgGAPABASQAAAMACANQAEANAGAKQAIAKAKAGQALAHAOgBQAUAAAMgKQAMgLAHgQQAFgQAAgRQABgRgGgQQgGgQgMgKQgNgKgUAAQgTAAgNAKg");
	this.shape_339.setTransform(778,534.6);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#58595B").s().p("AgkBWQgLgDgJgDIACgTQAHADALAEQALADAPAAQAUAAANgKQAMgJABgPQAAgTgMgIQgNgIgVAAIgIAAIgHAAIAAgQIAGAAIAIAAQATABAMgIQAMgHAAgRQAAgKgGgGQgFgFgJgCQgIgCgIAAQgPABgNAEQgNAFgGAEIgCgTQAHgEANgEQAMgDASgBQAPAAANAEQANAEAHAJQAHAIABAPQgBAPgJALQgKALgRAEQASACALAKQALALABASQgBASgJALQgJAMgPAGQgQAGgQAAQgQAAgLgCg");
	this.shape_340.setTransform(761.3,534.7);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#58595B").s().p("AhDB7IAAi2IgBgeIgBgeIARAAIACAeQAHgPAOgIQAPgKAQAAQAaAAAPANQAPAMAGAUQAGAUAAAWQAAARgDAQQgEAOgIANQgIANgNAHQgNAIgTAAQgQAAgOgIQgOgIgHgPIAABlgAgWhiQgKAGgGALQgGAKgDANQgDAMAAALQAAAMADANQADALAGALQAGALAJAGQAKAHANgBQAUAAALgLQALgLAEgPQAEgPAAgSQAAgRgEgPQgEgQgLgKQgLgLgUAAQgNAAgJAGg");
	this.shape_341.setTransform(745.9,538.1);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#58595B").s().p("AgrBxQgRgOgIgVQgHgWAAgZQAAgaACgWQABgYAHgTQAGgVAOgOQAKgJAKgEQALgGAMgBQALgDAMgBIAYgDQALgBALgDIgBAUQgKADgLABIgWADQgdACgRAJQgRAJgIATQgIATgCAjQACgIAIgJQAHgJANgGQANgHARAAQAaAAARAMQAQALAIATQAHATAAAYQAAAagJAUQgJATgRALQgRALgXAAQgbgBgRgNgAgngKQgQARAAAiQAAAWAHAOQAIAQANAIQANAJAPAAQAaAAAOgTQAPgSAAghQAAghgOgRQgOgSgagBQgZABgQASg");
	this.shape_342.setTransform(727.3,530.8);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#58595B").s().p("AgYBxIAAi5IhHAAIAAgpIC/AAIAAApIhHAAIAAC5g");
	this.shape_343.setTransform(1021.2,445.6);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#58595B").s().p("AAlBxIhWhsIAABsIgyAAIAAjiIAyAAIAABjIBRhjIA8AAIhfBrIBnB3g");
	this.shape_344.setTransform(1001.2,445.6);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#58595B").s().p("AAtBxIAAhfIhZAAIAABfIgyAAIAAjiIAyAAIAABbIBZAAIAAhbIAyAAIAADig");
	this.shape_345.setTransform(976.7,445.6);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#58595B").s().p("Ag+ByIgRgDIACgjIAKACIANABQAKAAAGgIQAHgHAHgOIhWikIA3AAIA4B6IA5h6IA1AAIhbCvIgOAZQgHAMgLAIQgMAJgSAAQgKAAgKgBg");
	this.shape_346.setTransform(953.6,445.8);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#58595B").s().p("AAsBxIAAi9IhXAAIAAC9IgyAAIAAjiIC7AAIAADig");
	this.shape_347.setTransform(930.8,445.6);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#58595B").s().p("AgqASIAAgjIBVAAIAAAjg");
	this.shape_348.setTransform(913.3,446.4);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#58595B").s().p("AhLBxIAAjiICUAAIAAAkIhiAAIAAA7IBdAAIAAAhIhdAAIAABAIBlAAIAAAig");
	this.shape_349.setTransform(898.7,445.6);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#58595B").s().p("AgZBOQgUgLgMgUQgMgUgBgbQABgbAMgUQAMgUAWgKQAWgLAZAAQAOAAALACIAVAEIgCAiQgIgEgJgCQgIgCgJAAQgRAAgMAIQgLAHgHAMQgGANAAAQQAAAPAGANQAGANALAHQAMAIASAAQAJAAAIgCQAJgBAJgEIABAhQgLAEgLACIgYABQgbAAgWgLg");
	this.shape_350.setTransform(786,448.4);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#58595B").s().p("AglBTQgZgKgNgVQgNgWAAgeQAAgcALgTQAMgUATgKQAVgLAZAAQAqAAAYAXQAXAXAAAqQAAAbgLAUQgKAUgUALQgUALgcAAQgUAAgRgGgAgWgvQgJAJgDAMQgEANAAANQAAAKACAKQACAKAEAJQAFAIAHAFQAIAFAKAAQAPAAAIgJQAJgIADgNQAFgNgBgOQAAgNgDgNQgEgNgIgIQgJgIgPgBQgOABgIAIg");
	this.shape_351.setTransform(767.7,448.4);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#58595B").s().p("AAgBVIAAhJIhAAAIAABJIguAAIAAipIAuAAIAABBIBAAAIAAhBIAvAAIAACpg");
	this.shape_352.setTransform(747.6,448.4);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#58595B").s().p("AA6BtIAAgvIhzAAIAAAvIgpAAIAAhPIATAAQAHgLAEgNQAFgLACgQQACgQAAgVIAAgyICHAAIAACKIAXAAIAABPgAgSg0QAAAYgEAVQgDAUgKARIBAAAIAAhsIgvAAg");
	this.shape_353.setTransform(727.2,450.8);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#58595B").s().p("Ag2BBQgYgXgBgqQAAgZALgUQAKgUAUgLQASgMAZAAQAbAAARAMQAQALAHATQAIAUAAAaIAAAKIhxAAQABAWANANQAPANAaAAQANAAAMgDQANgDAJgFIACAgQgLAEgPADQgOADgPAAQguAAgYgYgAgQg1QgIAGgEALQgFAKAAALIBGAAQABgLgDgKQgDgKgHgHQgHgGgNgBQgMABgJAGg");
	this.shape_354.setTransform(708,448.4);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#58595B").s().p("AhTB8IAAjCIAAgbIgBgWIAsAAIABAdQAHgQAPgIQAPgJARAAQAaABAPAMQAPAMAHAUQAHAUABAXQgBAXgHAUQgHAUgQANQgPANgaAAQgQAAgOgIQgOgIgGgPIAABlgAgXhRQgIAJgEANQgDAMAAAMIACATQACAKAEAIQAEAIAHAFQAHAGALAAQAOAAAJgJQAHgJAEgMQACgNAAgNQAAgMgCgNQgDgMgIgJQgIgIgPgBQgOABgIAIg");
	this.shape_355.setTransform(689.2,451.9);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#58595B").s().p("AArBxIAAi9IhWAAIAAC9IgyAAIAAjiIC7AAIAADig");
	this.shape_356.setTransform(666.8,445.6);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#58595B").s().p("AggBMQgSgMgJgVQgIgTAAgYQAAgWAIgTQAJgVAQgMQAPgNAXAAQAZAAAOAMQAOAMAGASQAFAUAAAUIAAAIIhzAAQAAASAHAQQAGAPAOAJQAOAKAVAAQALAAALgDQAKgCAJgFIABASQgKAFgLACQgLACgMAAQgbAAgSgMgAAwgNQgBgNgDgNQgEgNgJgJQgKgJgRAAQgQAAgMAKQgLAIgGAOQgFAOgBALIBfAAIAAAAg");
	this.shape_357.setTransform(1284.5,663.8);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#58595B").s().p("AgIBVIAAiYIg6AAIAAgRICFAAIAAARIg6AAIAACYg");
	this.shape_358.setTransform(1269.4,663.8);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#58595B").s().p("AgIBVIAAiYIg6AAIAAgRICFAAIAAARIg6AAIAACYg");
	this.shape_359.setTransform(1204.8,663.8);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#58595B").s().p("AgkBTQgMgHgHgLQgHgLAAgQQAAgVAMgMQAMgMAWgFQATgFAbAAIAMAAIAAgIQABgVgKgMQgJgLgXAAQgKAAgMACQgMAEgKAFIgCgRQAKgFAMgEQANgDALAAQAgAAAOARQAOAQAAAeIAABKIAAARIACASIgSAAIgBgdQgIAPgOAIQgPAJgRAAQgPAAgLgFgAAAABQgTADgLAIQgMAIAAASQAAARAJAIQAKAIAPAAQARgBAMgIQALgJAFgOQAFgPAAgRIAAgIIgGAAIgGAAQgQAAgOACg");
	this.shape_360.setTransform(1173.5,663.8);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#58595B").s().p("AgJCfIAAhbQgFAKgLAGQgLAFgOAAQgUAAgNgLQgOgMgIgTQgGgUAAgaQAAgZAGgTQAGgUAPgLQANgLAWgBQAKABAIADQAIAEAFAFQAHAFACAFIAAhfIASAAIAABfQADgFAGgFQAGgFAIgEQAIgDALgBQAVABAOALQANALAGAUQAHATAAAZQAAAagHAUQgHATgNAMQgPALgTAAQgPAAgKgFQgLgGgGgKIAABbgAAXg8QgJAIgFANIAABSQAFANAKAIQAIAIAPABQARgBAKgKQAKgLAEgRQAEgQAAgRQAAgQgEgQQgFgQgKgLQgJgLgRAAQgOAAgKAJgAhJg6QgKALgEAQQgFAQABAQQgBARAFAQQAEARAKALQAJAKASABQAOgBAKgIQAIgIAFgNIAAhSQgFgNgIgIQgJgJgPAAQgRAAgKALg");
	this.shape_361.setTransform(1153.2,663.6);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#58595B").s().p("AgkBTQgMgHgHgLQgHgLAAgQQAAgVAMgMQAMgMAVgFQAUgFAbAAIAMAAIAAgIQAAgVgJgMQgJgLgXAAQgLAAgLACQgMAEgLAFIgBgRQAKgFAMgEQANgDALAAQAgAAAOARQAOAQAAAeIAABKIAAARIACASIgSAAIgBgdQgIAPgOAIQgOAJgSAAQgPAAgLgFgAAAABQgTADgLAIQgMAIAAASQAAARAJAIQAKAIAPAAQARgBAMgIQALgJAFgOQAFgPAAgRIAAgIIgGAAIgGAAQgQAAgOACg");
	this.shape_362.setTransform(1122.7,663.8);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#58595B").s().p("AggBMQgSgMgIgVQgJgTAAgYQAAgWAIgTQAIgVAQgMQARgNAWAAQAZAAAOAMQAOAMAFASQAGAUAAAUIAAAIIhzAAQAAASAHAQQAHAPANAJQAOAKAVAAQALAAALgDQAKgCAJgFIABASQgKAFgLACQgLACgMAAQgbAAgSgMgAAwgNQgBgNgDgNQgEgNgJgJQgJgJgSAAQgQAAgLAKQgMAIgFAOQgFAOgCALIBfAAIAAAAg");
	this.shape_363.setTransform(1080,663.8);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#58595B").s().p("AgGBVIAAhUIhWAAIAABUIgSAAIAAipIASAAIAABFIBWAAIAAhFIASAAIAABFIAsAAQAQAAAMAFQANAFAHAKQAHAKAAAQQAAAbgPANQgQAOgaAAgAAMBEIApAAQAVgBAJgJQAJgKgBgQQABgOgKgIQgJgJgWAAIgnAAg");
	this.shape_364.setTransform(1059.6,663.8);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#58595B").s().p("AglBTQgMgHgGgLQgHgLAAgQQAAgVAMgMQAMgMAWgFQATgFAcAAIALAAIAAgIQAAgVgJgMQgJgLgWAAQgMAAgLACQgMAEgKAFIgDgRQALgFANgEQAMgDAMAAQAfAAAOARQANAQAAAeIAABKIABARIACASIgSAAIgCgdQgHAPgOAIQgPAJgRAAQgPAAgMgFgAgBABQgSADgLAIQgMAIAAASQAAARAKAIQAIAIAPAAQASgBAMgIQALgJAFgOQAFgPAAgRIAAgIIgGAAIgGAAQgQAAgPACg");
	this.shape_365.setTransform(1037.3,663.8);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#58595B").s().p("Ag8BVIAAipIA5AAQAPAAANAFQAMADAJAJQAHAJAAAPQAAAOgGAKQgFAKgOAEQAJABAHAEQAHAEAEAJQAFAIABALQgBATgHALQgJAMgNAFQgOAGgQAAgAgpBEIApAAQAUgBAKgJQAKgJAAgQQAAgOgJgHQgKgJgVAAIgpAAgAgpgNIAnAAQARAAAIgHQAKgGAAgOQAAgOgKgHQgJgGgSAAIglAAg");
	this.shape_366.setTransform(985.8,663.8);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#58595B").s().p("AAtBVIgthLIguBLIgVAAIA6hYIg1hRIAXAAIAoBCIAphCIAVAAIg0BRIA5BYg");
	this.shape_367.setTransform(951.6,663.8);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#58595B").s().p("AgkBTQgMgHgHgLQgHgLAAgQQAAgVAMgMQANgMAUgFQAVgFAaAAIAMAAIAAgIQAAgVgJgMQgJgLgXAAQgLAAgLACQgMAEgLAFIgBgRQAKgFAMgEQANgDALAAQAgAAAOARQAOAQAAAeIAABKIAAARIACASIgSAAIgBgdQgIAPgOAIQgOAJgSAAQgPAAgLgFgAAAABQgSADgMAIQgMAIAAASQAAARAJAIQAKAIAOAAQASgBAMgIQALgJAFgOQAFgPAAgRIAAgIIgGAAIgGAAQgQAAgOACg");
	this.shape_368.setTransform(917.6,663.8);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#58595B").s().p("AgSBWQgIgCgHgDQgPgHgJgNQgKgMgEgQQgEgPAAgSQAAgXAIgUQAJgTARgNQARgMAYAAQAaAAARAMQARAMAIAUQAIATAAAYQAAAYgIATQgJAVgRAMQgQAMgaAAQgJAAgJgCgAgfg7QgNAKgGAQQgFAPgBASQAAAMAEANQADANAHAKQAGAKALAGQALAHAOgBQATAAANgKQAMgLAGgQQAHgQAAgRQgBgRgFgQQgGgQgNgKQgMgKgUAAQgTAAgMAKg");
	this.shape_369.setTransform(891.9,663.8);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#58595B").s().p("AAoBVIhWhWIAABWIgSAAIAAipIASAAIAABPIBNhPIAYAAIhPBPIBZBag");
	this.shape_370.setTransform(876.1,663.8);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#58595B").s().p("AgSBWQgIgCgHgDQgOgHgKgNQgKgMgEgQQgFgPABgSQgBgXAJgUQAJgTARgNQARgMAYAAQAaAAARAMQARAMAIAUQAJATAAAYQAAAYgJATQgIAVgRAMQgRAMgaAAQgJAAgJgCgAgfg7QgNAKgGAQQgFAPAAASQAAAMACANQAEANAGAKQAIAKAKAGQALAHAOgBQATAAANgKQAMgLAHgQQAFgQAAgRQABgRgGgQQgGgQgMgKQgNgKgUAAQgTAAgMAKg");
	this.shape_371.setTransform(825,663.8);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#58595B").s().p("AhDB7IAAi2IgBgeIgBgeIARAAIACAeQAHgPAOgIQAPgKAQAAQAaAAAPANQAPAMAGAUQAGAUAAAWQAAARgDAPQgEAPgIANQgIANgNAHQgNAIgTAAQgQAAgOgIQgOgIgHgPIAABlgAgWhiQgKAGgGALQgGAKgDANQgDAMAAALQAAAMADANQADALAGALQAGALAJAGQAKAHANgBQAUAAALgLQALgLAEgPQAEgPAAgSQAAgRgEgPQgEgQgLgKQgLgLgUAAQgNAAgJAGg");
	this.shape_372.setTransform(807.2,667.3);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#58595B").s().p("AggBMQgSgMgJgVQgIgTAAgYQAAgWAIgTQAIgVARgMQAPgNAXAAQAZAAAOAMQAOAMAGASQAFAUAAAUIAAAIIhzAAQAAASAHAQQAGAPAOAJQAOAKAVAAQALAAALgDQAKgCAJgFIABASQgKAFgLACQgLACgMAAQgbAAgSgMgAAwgNQgBgNgDgNQgEgNgJgJQgKgJgRAAQgQAAgMAKQgLAIgGAOQgFAOgBALIBfAAIAAAAg");
	this.shape_373.setTransform(760.3,663.8);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#58595B").s().p("AglBSQgMgFgGgMQgHgLAAgQQAAgVAMgMQANgMAUgFQAVgFAbAAIALAAIAAgJQAAgUgJgLQgJgNgXAAQgKAAgMAEQgMADgLAGIgCgRQALgHANgCQAMgEALAAQAgABAOAPQANAQAAAfIAABKIABARIACASIgSAAIgCgeQgGAQgPAIQgOAJgSAAQgPAAgMgGgAgBABQgRACgMAJQgMAJAAAQQAAASAJAIQAJAIAPAAQATgBALgIQALgJAFgPQAFgOAAgRIAAgIIgGAAIgGAAQgQAAgPACg");
	this.shape_374.setTransform(1562.2,620.7);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#58595B").s().p("AglBSQgMgFgGgMQgHgLAAgQQAAgVAMgMQANgMAUgFQAVgFAbAAIALAAIAAgJQABgUgKgLQgJgNgWAAQgLAAgMAEQgMADgLAGIgCgRQALgHANgCQAMgEAMAAQAfABAOAPQANAQAAAfIAABKIABARIACASIgSAAIgCgeQgGAQgPAIQgPAJgRAAQgPAAgMgGgAgBABQgRACgMAJQgMAJAAAQQAAASAKAIQAIAIAPAAQATgBALgIQALgJAFgPQAFgOAAgRIAAgIIgGAAIgGAAQgQAAgPACg");
	this.shape_375.setTransform(1532.2,620.7);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#58595B").s().p("ABGBVIAAiVIg7CVIgUAAIg8iVIAACVIgTAAIAAioIAfAAIA5CUIA6iUIAfAAIAACog");
	this.shape_376.setTransform(1513.2,620.7);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#58595B").s().p("AgkBSQgMgFgHgMQgHgLAAgQQAAgVAMgMQAMgMAVgFQAUgFAbAAIAMAAIAAgJQABgUgKgLQgJgNgXAAQgKAAgMAEQgMADgLAGIgBgRQAKgHAMgCQANgEALAAQAgABAOAPQAOAQAAAfIAABKIAAARIACASIgSAAIgBgeQgIAQgOAIQgOAJgSAAQgPAAgLgGgAAAABQgTACgLAJQgMAJAAAQQAAASAJAIQAKAIAPAAQARgBAMgIQALgJAFgPQAFgOAAgRIAAgIIgGAAIgGAAQgQAAgOACg");
	this.shape_377.setTransform(1493.1,620.7);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#58595B").s().p("AgkBSQgMgFgHgMQgHgLAAgQQAAgVAMgMQAMgMAVgFQAVgFAaAAIAMAAIAAgJQAAgUgJgLQgJgNgXAAQgLAAgLAEQgMADgKAGIgCgRQAKgHAMgCQANgEALAAQAgABAOAPQAOAQAAAfIAABKIAAARIACASIgSAAIgBgeQgIAQgOAIQgPAJgRAAQgPAAgLgGgAAAABQgTACgLAJQgMAJAAAQQAAASAJAIQAKAIAPAAQARgBAMgIQALgJAFgPQAFgOAAgRIAAgIIgGAAIgGAAQgQAAgOACg");
	this.shape_378.setTransform(1452.1,620.7);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#58595B").s().p("AgrBxQgRgOgIgVQgHgWAAgZQAAgaACgXQABgXAHgTQAGgVAOgNQAKgJAKgGQALgEAMgDQALgCAMgBIAYgCQALgBALgEIgBAUQgKADgLABIgWACQgdADgRAJQgRAJgIATQgIATgCAjQACgIAIgIQAHgKANgGQANgHARAAQAaABARALQAQALAIAUQAHASAAAZQAAAagJATQgJATgRALQgRALgXAAQgbgBgRgNgAgngKQgQARAAAjQAAAVAHAOQAIAQANAJQANAIAPAAQAagBAOgSQAPgSAAggQAAgigOgRQgOgTgaAAQgZAAgQATg");
	this.shape_379.setTransform(1417.3,616.9);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#58595B").s().p("AgRBXQgJgCgHgEQgPgHgJgNQgJgMgFgPQgFgRAAgRQAAgXAJgUQAJgUARgLQARgMAYgBQAaAAARAMQARAMAIATQAIAUAAAYQAAAYgIATQgIAUgSANQgRAMgZAAQgJAAgIgBgAggg7QgMAKgGAQQgGAQAAARQAAANAEAMQADAMAHALQAGAKALAGQALAGAOAAQAUAAAMgKQANgKAFgRQAHgQgBgRQAAgSgFgQQgGgPgNgKQgMgKgUAAQgTAAgNAKg");
	this.shape_380.setTransform(1350.7,620.7);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#58595B").s().p("AggBMQgSgNgIgUQgJgTAAgYQAAgWAIgUQAJgTAPgNQAQgNAXAAQAZABAOAMQAOALAFASQAGAUAAAUIAAAIIhzAAQAAASAHAPQAHAQAOAJQAOAJAUABQALAAAKgCQALgDAJgFIABASQgLAFgKACQgKACgMAAQgcAAgSgMgAAwgMQAAgOgEgNQgEgOgJgIQgKgJgQAAQgSAAgLAJQgLAJgGAOQgFANAAANIBeAAIAAAAg");
	this.shape_381.setTransform(1315.5,620.7);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#58595B").s().p("AggBMQgSgNgJgUQgIgTAAgYQAAgWAIgUQAIgTAQgNQAQgNAXAAQAZABAOAMQAOALAGASQAFAUAAAUIAAAIIhzAAQAAASAHAPQAGAQAPAJQANAJAVABQALAAALgCQAKgDAJgFIABASQgLAFgKACQgKACgNAAQgbAAgSgMgAAwgMQgBgOgDgNQgEgOgJgIQgJgJgSAAQgQAAgMAJQgLAJgGAOQgEANgBANIBeAAIAAAAg");
	this.shape_382.setTransform(1272.1,620.7);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#58595B").s().p("AgIBVIAAiXIg6AAIAAgRICEAAIAAARIg5AAIAACXg");
	this.shape_383.setTransform(1257,620.7);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#58595B").s().p("AggBMQgSgNgIgUQgJgTAAgYQAAgWAIgUQAIgTAQgNQARgNAWAAQAZABAOAMQAOALAFASQAGAUAAAUIAAAIIhzAAQAAASAHAPQAHAQANAJQAOAJAVABQALAAALgCQAKgDAJgFIABASQgKAFgLACQgLACgMAAQgbAAgSgMgAAwgMQgBgOgDgNQgEgOgJgIQgJgJgSAAQgQAAgLAJQgMAJgFAOQgFANgCANIBfAAIAAAAg");
	this.shape_384.setTransform(1242,620.7);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#58595B").s().p("AgwBVIAAioIBhAAIAAARIhPAAIAACXg");
	this.shape_385.setTransform(1210.5,620.7);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#58595B").s().p("AgrBxQgRgOgIgVQgHgWAAgZQAAgaACgXQABgXAHgTQAGgVAOgNQAKgJAKgGQALgEAMgDQALgCAMgBIAYgCQALgBALgEIgBAUQgKADgLABIgWACQgdADgRAJQgRAJgIATQgIATgCAjQACgIAIgIQAHgKANgGQANgHARAAQAaABARALQAQALAIAUQAHASAAAZQAAAagJATQgJATgRALQgRALgXAAQgbgBgRgNgAgngKQgQARAAAjQAAAVAHAOQAIAQANAJQANAIAPAAQAagBAOgSQAPgSAAggQAAgigOgRQgOgTgaAAQgZAAgQATg");
	this.shape_386.setTransform(1177.6,616.9);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#58595B").s().p("AggBMQgSgNgIgUQgJgTAAgYQAAgWAIgUQAJgTAPgNQARgNAWAAQAZABAOAMQAOALAFASQAGAUAAAUIAAAIIhzAAQAAASAHAPQAHAQANAJQAPAJAUABQALAAAKgCQALgDAJgFIABASQgKAFgLACQgKACgMAAQgcAAgSgMgAAwgMQgBgOgDgNQgEgOgJgIQgKgJgQAAQgSAAgKAJQgMAJgFAOQgGANgBANIBfAAIAAAAg");
	this.shape_387.setTransform(1118.5,620.7);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#58595B").s().p("AAoB7IhWhXIAABXIgTAAIAAioIATAAIAABMIBOhMIAXAAIhPBNIBZBbgAgUhMIAXguIAXAAIgdAug");
	this.shape_388.setTransform(1103.7,616.9);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#58595B").s().p("AggBMQgSgNgJgUQgIgTAAgYQAAgWAIgUQAIgTARgNQAPgNAXAAQAZABAOAMQAOALAGASQAFAUAAAUIAAAIIhzAAQAAASAHAPQAGAQAOAJQAOAJAVABQALAAALgCQAKgDAJgFIABASQgKAFgLACQgLACgMAAQgbAAgSgMgAAwgMQgBgOgDgNQgEgOgJgIQgKgJgRAAQgQAAgMAJQgLAJgGAOQgFANgBANIBfAAIAAAAg");
	this.shape_389.setTransform(1077.5,620.7);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#58595B").s().p("AAoB7IhWhXIAABXIgTAAIAAioIATAAIAABMIBNhMIAYAAIhPBNIBaBbgAgVhMIAYguIAXAAIgdAug");
	this.shape_390.setTransform(1020.6,616.9);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#58595B").s().p("AgkBSQgNgFgGgMQgHgLAAgQQAAgVAMgMQAMgMAWgFQATgFAbAAIAMAAIAAgJQABgUgKgLQgJgNgWAAQgLAAgMAEQgMADgKAGIgCgRQAKgHAMgCQANgEAMAAQAfABAOAPQANAQAAAfIAABKIABARIACASIgSAAIgBgeQgIAQgOAIQgPAJgRAAQgPAAgLgGgAAAABQgTACgLAJQgMAJAAAQQAAASAKAIQAJAIAPAAQARgBAMgIQALgJAFgPQAFgOAAgRIAAgIIgGAAIgGAAQgQAAgOACg");
	this.shape_391.setTransform(1002.8,620.7);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#58595B").s().p("AgSBXQgIgCgHgEQgPgHgJgNQgKgMgEgPQgEgRAAgRQAAgXAIgUQAJgUARgLQARgMAYgBQAaAAARAMQARAMAIATQAIAUAAAYQAAAYgIATQgJAUgRANQgQAMgaAAQgJAAgJgBgAgfg7QgNAKgGAQQgFAQgBARQAAANAEAMQADAMAHALQAGAKALAGQALAGAOAAQATAAANgKQAMgKAGgRQAHgQAAgRQgBgSgFgQQgGgPgNgKQgMgKgUAAQgTAAgMAKg");
	this.shape_392.setTransform(941.4,620.7);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#58595B").s().p("AggBMQgSgNgIgUQgJgTAAgYQAAgWAIgUQAIgTARgNQAQgNAWAAQAZABAOAMQAOALAFASQAGAUAAAUIAAAIIhzAAQAAASAHAPQAHAQANAJQAOAJAVABQALAAALgCQAKgDAJgFIABASQgKAFgLACQgLACgLAAQgcAAgSgMgAAwgMQgBgOgDgNQgEgOgJgIQgJgJgSAAQgQAAgLAJQgMAJgFAOQgGANgBANIBfAAIAAAAg");
	this.shape_393.setTransform(910.4,620.7);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#58595B").s().p("AggBMQgSgNgIgUQgJgTAAgYQAAgWAIgUQAJgTAPgNQARgNAWAAQAZABAOAMQAOALAFASQAGAUAAAUIAAAIIhzAAQAAASAHAPQAHAQANAJQAPAJAUABQALAAAKgCQALgDAJgFIABASQgKAFgLACQgKACgMAAQgcAAgSgMgAAwgMQgBgOgDgNQgEgOgJgIQgJgJgRAAQgSAAgKAJQgMAJgFAOQgGANAAANIBeAAIAAAAg");
	this.shape_394.setTransform(876,620.7);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#58595B").s().p("ABGBVIAAiVIg8CVIgTAAIg8iVIAACVIgTAAIAAioIAgAAIA4CUIA6iUIAfAAIAACog");
	this.shape_395.setTransform(856.3,620.7);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#58595B").s().p("Ag8BVIAAioIA6AAQAOAAANADQANAEAHAJQAIAJAAAPQAAAOgGAKQgGAKgNAEQAIABAHAEQAIAEAEAJQAGAIAAALQAAATgIALQgJAMgNAFQgOAFgRABgAgpBEIApAAQAUAAAKgKQALgJAAgPQAAgOgKgJQgKgHgWgBIgoAAgAgpgNIAnAAQARAAAJgGQAJgHAAgOQAAgPgKgGQgKgGgQAAIgmAAg");
	this.shape_396.setTransform(803,620.7);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#58595B").s().p("AgkBSQgMgFgHgMQgHgLAAgQQAAgVAMgMQAMgMAVgFQAVgFAaAAIAMAAIAAgJQABgUgKgLQgJgNgXAAQgLAAgLAEQgMADgKAGIgCgRQAKgHAMgCQANgEALAAQAgABAOAPQAOAQAAAfIAABKIAAARIACASIgSAAIgBgeQgIAQgOAIQgOAJgSAAQgPAAgLgGgAAAABQgTACgLAJQgMAJAAAQQAAASAJAIQAKAIAPAAQARgBAMgIQALgJAFgPQAFgOAAgRIAAgIIgGAAIgGAAQgQAAgOACg");
	this.shape_397.setTransform(785.7,620.7);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#58595B").s().p("AAuBVIAAhSIhbAAIAABSIgTAAIAAioIATAAIAABGIBbAAIAAhGIATAAIAACog");
	this.shape_398.setTransform(769,620.7);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#58595B").s().p("AgSBXQgIgCgHgEQgOgHgKgNQgJgMgFgPQgFgRABgRQAAgXAIgUQAJgUARgLQARgMAYgBQAaAAARAMQARAMAIATQAJAUAAAYQAAAYgJATQgIAUgSANQgQAMgaAAQgJAAgJgBgAgfg7QgNAKgGAQQgFAQAAARQgBANADAMQAEAMAGALQAHAKALAGQALAGAOAAQATAAANgKQAMgKAHgRQAFgQABgRQAAgSgGgQQgGgPgMgKQgNgKgUAAQgTAAgMAKg");
	this.shape_399.setTransform(741.9,620.7);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#58595B").s().p("AgIBUIAAiXIg5AAIAAgRICDAAIAAARIg5AAIAACXg");
	this.shape_400.setTransform(1706.8,577.7);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#58595B").s().p("AgkBSQgMgGgHgLQgHgLAAgQQAAgWAMgMQAMgLAVgFQAVgFAaAAIAMAAIAAgIQAAgVgJgMQgJgMgXAAQgLAAgLADQgMAEgKAFIgCgRQAKgFAMgEQANgDALAAQAgABAOAQQAOAPAAAfIAABJIAAARIACASIgSAAIgBgcQgIAPgOAJQgPAIgRAAQgPAAgLgGgAAAABQgTADgLAIQgMAIAAARQAAASAJAIQAKAIAPAAQARAAAMgJQALgJAFgPQAFgOAAgRIAAgHIgGAAIgGgBQgQAAgOACg");
	this.shape_401.setTransform(1659.1,577.7);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#58595B").s().p("AgkBSQgMgGgHgLQgHgLAAgQQAAgWAMgMQAMgLAWgFQATgFAbAAIAMAAIAAgIQABgVgKgMQgJgMgWAAQgLAAgMADQgMAEgKAFIgCgRQAKgFAMgEQANgDAMAAQAfABAOAQQANAPAAAfIAABJIABARIACASIgSAAIgBgcQgHAPgPAJQgPAIgRAAQgPAAgLgGgAAAABQgTADgLAIQgMAIAAARQAAASAJAIQAJAIAQAAQARAAAMgJQALgJAFgPQAFgOAAgRIAAgHIgGAAIgGgBQgQAAgOACg");
	this.shape_402.setTransform(1598.2,577.7);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#58595B").s().p("AglBSQgLgGgHgLQgHgLAAgQQAAgWAMgMQANgLAUgFQAUgFAcAAIALAAIAAgIQAAgVgJgMQgJgMgXAAQgLAAgLADQgMAEgLAFIgCgRQALgFAMgEQANgDALAAQAgABAOAQQAOAPAAAfIAABJIAAARIACASIgSAAIgCgcQgHAPgOAJQgOAIgSAAQgPAAgMgGgAgBABQgRADgMAIQgMAIAAARQAAASAJAIQAJAIAPAAQATAAALgJQALgJAFgPQAFgOAAgRIAAgHIgGAAIgGgBQgQAAgPACg");
	this.shape_403.setTransform(1565.7,577.7);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#58595B").s().p("AgkBSQgMgGgHgLQgHgLAAgQQAAgWAMgMQAMgLAVgFQAUgFAbAAIAMAAIAAgIQABgVgKgMQgJgMgXAAQgLAAgLADQgMAEgLAFIgBgRQAKgFAMgEQANgDALAAQAgABAOAQQAOAPAAAfIAABJIAAARIACASIgSAAIgBgcQgIAPgOAJQgOAIgSAAQgPAAgLgGgAAAABQgTADgLAIQgMAIAAARQAAASAJAIQAKAIAOAAQASAAAMgJQALgJAFgPQAFgOAAgRIAAgHIgGAAIgGgBQgQAAgOACg");
	this.shape_404.setTransform(1522,577.7);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#58595B").s().p("AhqBUIAAioIATAAIAACXIBPAAIAAiXIARAAIAACXIBQAAIAAiXIARAAIAACog");
	this.shape_405.setTransform(1447.8,577.7);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#58595B").s().p("AgRBWQgJgBgHgEQgPgHgJgMQgJgNgFgPQgFgRAAgRQAAgXAJgUQAJgUARgMQARgLAYgBQAaABARALQARAMAIAUQAIATAAAYQAAAYgIAUQgIATgSAMQgRANgZAAQgJAAgIgCgAggg7QgMAKgGAQQgGAPABASQAAAMADANQADAMAGALQAHAKALAGQALAHAOAAQAUgBAMgKQANgLAFgQQAHgQgBgRQAAgSgFgPQgGgQgNgKQgMgKgUAAQgTAAgNAKg");
	this.shape_406.setTransform(1425.5,577.7);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#58595B").s().p("AgSBWQgIgBgHgEQgOgHgKgMQgKgNgEgPQgFgRABgRQgBgXAJgUQAJgUARgMQARgLAYgBQAaABARALQARAMAIAUQAIATAAAYQAAAYgIAUQgJATgQAMQgSANgZAAQgJAAgJgCgAggg7QgMAKgGAQQgGAPABASQAAAMACANQAEAMAGALQAIAKAKAGQALAHAOAAQAUgBAMgKQAMgLAHgQQAFgQAAgRQABgSgGgPQgGgQgMgKQgNgKgUAAQgTAAgNAKg");
	this.shape_407.setTransform(1380.2,577.7);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#58595B").s().p("AggBLQgSgMgIgTQgJgUAAgYQAAgWAIgUQAIgTARgNQAQgMAWgBQAZABAOALQAOAMAFATQAGASAAAVIAAAIIhzAAQAAASAHAQQAHAPANAKQAOAIAVABQALAAAKgDQALgCAJgFIABATQgKAEgLACQgLACgLAAQgcAAgSgNgAAwgNQgBgNgDgNQgEgNgJgJQgJgJgRAAQgRAAgLAJQgMAKgFANQgGANgBAMIBfAAIAAAAg");
	this.shape_408.setTransform(1336.1,577.7);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#58595B").s().p("AAtBUIAAiXIhZAAIAACXIgTAAIAAioIB/AAIAACog");
	this.shape_409.setTransform(1205,577.7);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#58595B").s().p("AglBSQgMgGgGgLQgHgLAAgQQAAgWAMgMQANgLAUgFQAVgFAbAAIALAAIAAgIQAAgVgJgMQgJgMgXAAQgLAAgLADQgMAEgLAFIgCgRQALgFANgEQAMgDALAAQAgABAOAQQANAPABAfIAABJIAAARIACASIgSAAIgCgcQgHAPgOAJQgPAIgRAAQgPAAgMgGgAgBABQgRADgMAIQgMAIAAARQAAASAKAIQAIAIAPAAQATAAALgJQALgJAFgPQAFgOAAgRIAAgHIgGAAIgGgBQgQAAgPACg");
	this.shape_410.setTransform(1178.4,577.7);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#58595B").s().p("AglBSQgLgGgHgLQgHgLAAgQQAAgWAMgMQANgLAUgFQAUgFAcAAIALAAIAAgIQAAgVgJgMQgJgMgXAAQgLAAgLADQgMAEgLAFIgCgRQALgFANgEQAMgDALAAQAgABAOAQQAOAPAAAfIAABJIAAARIACASIgSAAIgCgcQgHAPgOAJQgOAIgSAAQgPAAgMgGgAgBABQgRADgMAIQgMAIAAARQAAASAJAIQAKAIAOAAQASAAAMgJQALgJAFgPQAFgOAAgRIAAgHIgGAAIgGgBQgQAAgPACg");
	this.shape_411.setTransform(1134.6,577.7);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#58595B").s().p("AglBSQgMgGgGgLQgHgLAAgQQAAgWAMgMQANgLAUgFQAVgFAbAAIALAAIAAgIQAAgVgJgMQgJgMgXAAQgKAAgMADQgMAEgLAFIgCgRQALgFANgEQAMgDALAAQAgABAOAQQAOAPgBAfIAABJIABARIACASIgSAAIgCgcQgGAPgPAJQgOAIgSAAQgPAAgMgGgAgBABQgRADgMAIQgMAIAAARQAAASAJAIQAJAIAPAAQATAAALgJQALgJAFgPQAFgOAAgRIAAgHIgGAAIgGgBQgQAAgPACg");
	this.shape_412.setTransform(1104.6,577.7);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#58595B").s().p("AgkBSQgMgGgHgLQgHgLAAgQQAAgWAMgMQAMgLAWgFQATgFAbAAIAMAAIAAgIQABgVgKgMQgJgMgXAAQgKAAgMADQgMAEgKAFIgCgRQAKgFAMgEQANgDALAAQAgABAOAQQAOAPAAAfIAABJIAAARIACASIgSAAIgBgcQgIAPgOAJQgPAIgRAAQgPAAgLgGgAAAABQgTADgLAIQgMAIAAARQAAASAJAIQAKAIAPAAQARAAAMgJQALgJAFgPQAFgOAAgRIAAgHIgGAAIgGgBQgQAAgOACg");
	this.shape_413.setTransform(1026.3,577.7);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#58595B").s().p("AgJCfIAAhbQgFAKgLAGQgLAFgOAAQgUAAgNgLQgOgMgHgTQgHgUAAgaQAAgZAGgTQAGgUAPgLQANgLAWgBQAKABAIADQAIAEAFAFQAHAFACAFIAAhfIASAAIAABfIAJgKQAGgFAIgEQAIgDALgBQAVABAOALQANALAGAUQAHATAAAZQAAAagHAUQgHATgNAMQgPALgTAAQgPAAgKgFQgLgGgGgKIAABbgAAXg8QgJAIgFANIAABSQAFANAKAIQAJAIAOABQARgBAKgKQAKgLAEgRQAEgQAAgRQAAgQgEgQQgFgQgKgLQgJgLgRAAQgOAAgKAJgAhJg6QgKALgEAQQgFAQABAQQgBARAFAQQAEARAKALQAJAKASABQAOgBAKgIQAIgIAFgNIAAhSQgFgNgIgIQgJgJgPAAQgRAAgKALg");
	this.shape_414.setTransform(1006,577.5);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#58595B").s().p("AggBLQgSgMgIgTQgJgUAAgYQAAgWAIgUQAJgTAPgNQAQgMAXgBQAZABAOALQAOAMAFATQAGASAAAVIAAAIIhzAAQAAASAHAQQAHAPAOAKQAOAIAUABQALAAAKgDQALgCAJgFIABATQgLAEgKACQgKACgMAAQgcAAgSgNgAAwgNQAAgNgEgNQgEgNgJgJQgKgJgQAAQgSAAgLAJQgLAKgFANQgGANAAAMIBeAAIAAAAg");
	this.shape_415.setTransform(976.2,577.7);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#58595B").s().p("AgIBUIAAiXIg6AAIAAgRICEAAIAAARIg5AAIAACXg");
	this.shape_416.setTransform(961.1,577.7);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#58595B").s().p("AglBSQgMgGgGgLQgHgLAAgQQAAgWAMgMQAMgLAWgFQATgFAcAAIALAAIAAgIQAAgVgJgMQgJgMgWAAQgMAAgLADQgMAEgKAFIgDgRQALgFANgEQAMgDAMAAQAfABAOAQQANAPAAAfIAABJIABARIACASIgSAAIgCgcQgGAPgPAJQgPAIgRAAQgPAAgMgGgAgBABQgSADgLAIQgMAIAAARQAAASAKAIQAIAIAPAAQASAAAMgJQALgJAFgPQAFgOAAgRIAAgHIgGAAIgGgBQgQAAgPACg");
	this.shape_417.setTransform(945.5,577.7);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#58595B").s().p("AAoBUIhWhVIAABVIgSAAIAAioIASAAIAABOIBOhOIAXAAIhPBPIBaBZg");
	this.shape_418.setTransform(931.3,577.7);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#58595B").s().p("AggBLQgSgMgJgTQgIgUAAgYQAAgWAIgUQAIgTARgNQAPgMAXgBQAZABAOALQAOAMAGATQAFASAAAVIAAAIIhzAAQAAASAHAQQAGAPAOAKQAOAIAVABQALAAALgDQAKgCAJgFIABATQgKAEgLACQgLACgMAAQgbAAgSgNgAAwgNQAAgNgEgNQgEgNgJgJQgKgJgRAAQgQAAgLAJQgMAKgGANQgEANgCAMIBfAAIAAAAg");
	this.shape_419.setTransform(914.2,577.7);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#58595B").s().p("AglBSQgLgGgHgLQgHgLAAgQQAAgWAMgMQANgLAUgFQAVgFAbAAIALAAIAAgIQAAgVgJgMQgJgMgXAAQgLAAgLADQgMAEgLAFIgCgRQALgFANgEQAMgDALAAQAgABAOAQQAOAPAAAfIAABJIAAARIACASIgSAAIgCgcQgHAPgOAJQgOAIgSAAQgPAAgMgGgAgBABQgRADgMAIQgMAIAAARQAAASAJAIQAKAIAOAAQASAAAMgJQALgJAFgPQAFgOAAgRIAAgHIgGAAIgGgBQgQAAgPACg");
	this.shape_420.setTransform(871.8,577.7);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#58595B").s().p("AgSBWQgIgBgHgEQgPgHgJgMQgKgNgEgPQgEgRAAgRQAAgXAIgUQAJgUARgMQARgLAYgBQAaABARALQARAMAIAUQAIATAAAYQAAAYgIAUQgJATgRAMQgQANgaAAQgJAAgJgCgAgfg7QgNAKgGAQQgGAPAAASQAAAMAEANQADAMAHALQAGAKALAGQALAHAOAAQATgBANgKQAMgLAGgQQAHgQAAgRQgBgSgFgPQgGgQgNgKQgMgKgUAAQgTAAgMAKg");
	this.shape_421.setTransform(793.4,577.7);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#58595B").s().p("ABGBUIAAiTIg7CTIgVAAIg6iTIAACTIgUAAIAAioIAfAAIA5CVIA6iVIAfAAIAACog");
	this.shape_422.setTransform(772.8,577.7);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#58595B").s().p("AggBLQgSgMgJgTQgIgUAAgYQAAgWAIgUQAIgTARgNQAPgMAXgBQAZABAOALQAOAMAGATQAFASAAAVIAAAIIhzAAQAAASAHAQQAGAPAPAKQANAIAVABQALAAAKgDQALgCAJgFIABATQgLAEgKACQgKACgNAAQgbAAgSgNgAAwgNQAAgNgEgNQgEgNgJgJQgJgJgSAAQgQAAgMAJQgLAKgGANQgEANgBAMIBeAAIAAAAg");
	this.shape_423.setTransform(744.3,577.7);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#58595B").s().p("AggBMQgSgMgJgVQgIgTAAgYQAAgWAIgTQAIgVARgMQAPgNAXAAQAZAAAOAMQAOAMAGASQAFAUAAAUIAAAIIhzAAQAAASAHAQQAGAPAOAJQAPAKAUAAQALAAALgDQAKgCAJgFIABASQgLAFgKACQgKACgNAAQgbAAgSgMgAAwgMQgBgOgDgNQgEgNgJgJQgKgJgRAAQgQAAgMAKQgLAIgGAOQgEAOgBAMIBeAAIAAAAg");
	this.shape_424.setTransform(1221.2,534.6);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#58595B").s().p("ABGBVIAAiVIg7CVIgVAAIg6iVIAACVIgUAAIAAipIAfAAIA5CWIA6iWIAfAAIAACpg");
	this.shape_425.setTransform(1201.5,534.6);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#58595B").s().p("AggBMQgSgMgJgVQgIgTAAgYQAAgWAIgTQAIgVARgMQAPgNAXAAQAZAAAOAMQAOAMAGASQAFAUAAAUIAAAIIhzAAQAAASAHAQQAGAPAOAJQAPAKAUAAQALAAALgDQAKgCAJgFIABASQgKAFgLACQgKACgNAAQgbAAgSgMgAAwgMQgBgOgDgNQgEgNgJgJQgJgJgSAAQgQAAgMAKQgLAIgGAOQgEAOgBAMIBeAAIAAAAg");
	this.shape_426.setTransform(1182,534.6);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#58595B").s().p("Ag8BVIAAipIA5AAQAPAAANAFQAMADAJAJQAHAJAAAPQAAAOgFAKQgGAKgNAEQAHABAIAEQAHAFAFAIQAEAIAAALQAAATgHALQgIAMgOAFQgOAGgQAAgAgpBDIApAAQAUAAAKgJQAKgJAAgQQAAgOgJgHQgKgJgVAAIgpAAgAgpgNIAnAAQARABAIgIQAKgGAAgOQAAgOgKgHQgJgGgSAAIglAAg");
	this.shape_427.setTransform(1148.2,534.6);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#58595B").s().p("AglBTQgMgHgGgLQgHgLAAgQQAAgVAMgNQAMgLAVgFQAVgFAbAAIALAAIAAgIQAAgVgJgLQgJgMgWAAQgMAAgLACQgMAEgKAGIgDgSQALgFANgEQAMgDAMAAQAfAAAOARQANAQAAAeIAABJIABASIACASIgSAAIgCgdQgGAPgPAIQgPAJgRAAQgPAAgMgFgAgBABQgSADgLAIQgMAIAAASQAAARAKAIQAIAIAPAAQASgBAMgIQALgJAFgOQAFgPAAgRIAAgIIgGAAIgGAAQgQAAgPACg");
	this.shape_428.setTransform(1130.9,534.6);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#58595B").s().p("AggBMQgSgMgJgVQgIgTAAgYQAAgWAIgTQAIgVAQgMQAQgNAXAAQAZAAAOAMQAOAMAGASQAFAUAAAUIAAAIIhzAAQAAASAHAQQAGAPAPAJQAOAKAUAAQALAAAKgDQALgCAJgFIABASQgLAFgKACQgLACgLAAQgcAAgSgMgAAwgMQAAgOgEgNQgEgNgJgJQgJgJgSAAQgRAAgLAKQgLAIgGAOQgEAOgBAMIBeAAIAAAAg");
	this.shape_429.setTransform(1088.2,534.6);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#58595B").s().p("AgIBVIAAiYIg6AAIAAgRICEAAIAAARIg5AAIAACYg");
	this.shape_430.setTransform(1073,534.6);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#58595B").s().p("AglBTQgMgHgGgLQgHgLAAgQQAAgVAMgNQANgLAUgFQAVgFAbAAIALAAIAAgIQABgVgKgLQgJgMgWAAQgMAAgLACQgMAEgLAGIgCgSQALgFANgEQAMgDAMAAQAfAAAOARQANAQAAAeIAABJIABASIACASIgSAAIgCgdQgGAPgPAIQgPAJgRAAQgPAAgMgFgAgBABQgRADgMAIQgMAIAAASQAAARAKAIQAIAIAPAAQATgBALgIQALgJAFgOQAFgPAAgRIAAgIIgGAAIgGAAQgQAAgPACg");
	this.shape_431.setTransform(1057.4,534.6);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#58595B").s().p("Ag8BVIAAipIA6AAQAOAAANAFQANADAHAJQAIAJAAAPQAAAOgGAKQgFAKgOAEQAIABAIAEQAHAFAEAIQAGAIAAALQgBATgHALQgJAMgNAFQgOAGgRAAgAgpBDIApAAQAUAAAKgJQALgJAAgQQAAgOgKgHQgKgJgVAAIgpAAgAgpgNIAnAAQARABAJgIQAJgGAAgOQAAgOgKgHQgKgGgQAAIgmAAg");
	this.shape_432.setTransform(1042.3,534.6);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#58595B").s().p("AgSBWQgIgCgHgDQgPgHgJgNQgJgMgFgQQgEgPAAgSQAAgXAIgUQAJgTARgNQARgMAYAAQAaAAARAMQARAMAIAUQAJATAAAYQAAAYgJATQgIAVgSAMQgQAMgaAAQgJAAgJgCgAgfg7QgNAKgGAQQgFAPgBASQAAAMADANQAEANAHAKQAGAKALAGQALAHAOgBQATAAANgKQANgLAGgQQAFgQABgRQAAgRgGgQQgGgQgNgKQgMgKgUAAQgTAAgMAKg");
	this.shape_433.setTransform(987.7,534.6);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#58595B").s().p("AggBMQgSgMgJgVQgIgTAAgYQAAgWAIgTQAIgVARgMQAPgNAXAAQAZAAAOAMQAOAMAGASQAFAUAAAUIAAAIIhzAAQAAASAHAQQAGAPAPAJQANAKAVAAQALAAALgDQAKgCAJgFIABASQgLAFgKACQgKACgNAAQgbAAgSgMgAAwgMQgBgOgDgNQgEgNgJgJQgJgJgSAAQgQAAgMAKQgLAIgGAOQgEAOgBAMIBeAAIAAAAg");
	this.shape_434.setTransform(903,534.6);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#58595B").s().p("AAoB7IhWhXIAABXIgSAAIAAipIASAAIAABOIBNhOIAYAAIhPBOIBZBbgAgVhLIAYguIAYAAIgfAug");
	this.shape_435.setTransform(888.2,530.8);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#58595B").s().p("AggBMQgSgMgIgVQgJgTAAgYQAAgWAIgTQAJgVAPgMQAQgNAXAAQAZAAAOAMQAOAMAFASQAGAUAAAUIAAAIIhzAAQAAASAHAQQAHAPAOAJQAOAKAUAAQALAAAKgDQALgCAJgFIABASQgKAFgLACQgKACgMAAQgcAAgSgMgAAwgMQgBgOgDgNQgEgNgJgJQgJgJgRAAQgSAAgKAKQgMAIgFAOQgGAOgBAMIBfAAIAAAAg");
	this.shape_436.setTransform(862,534.6);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#58595B").s().p("AhDB7IAAi2IgBgeIgBgeIARAAIACAeQAHgPAOgIQAPgKAQAAQAaAAAPANQAPAMAGAUQAGAUAAAWQAAARgDAQQgEAOgIANQgIANgNAHQgNAIgTAAQgQAAgOgIQgOgIgHgPIAABlgAgWhiQgKAGgGALQgGAKgDANQgDAMAAALQAAAMADANQADALAGALQAGALAJAGQAKAHANgBQAUAAALgLQALgLAEgPQAEgPAAgSQAAgRgEgPQgEgQgLgKQgLgLgUAAQgNAAgJAGg");
	this.shape_437.setTransform(813.1,538.1);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#58595B").s().p("Ag1B7IgIgCIACgSIAHACIAHAAQAHABAGgGQAFgEAEgHIAHgNIADgNIAEgLIg6iuIAUAAIAvCVIAxiVIATAAIhEDIQgHAVgLAMQgKALgRABIgIAAg");
	this.shape_438.setTransform(796.4,538.5);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#58595B").s().p("AgIBVIAAiYIg5AAIAAgRICEAAIAAARIg6AAIAACYg");
	this.shape_439.setTransform(782.3,534.6);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#58595B").s().p("AglBTQgMgHgGgLQgHgLAAgQQAAgVAMgNQANgLAUgFQAVgFAbAAIALAAIAAgIQAAgVgJgLQgJgMgWAAQgMAAgLACQgMAEgLAGIgCgSQALgFANgEQAMgDAMAAQAfAAAOARQANAQAAAeIAABJIABASIACASIgSAAIgCgdQgGAPgPAIQgPAJgRAAQgPAAgMgFgAgBABQgRADgMAIQgMAIAAASQAAARAKAIQAIAIAPAAQATgBALgIQALgJAFgOQAFgPAAgRIAAgIIgGAAIgGAAQgQAAgPACg");
	this.shape_440.setTransform(751,534.6);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#58595B").s().p("AgICfIAAhbQgHAKgKAGQgKAFgPAAQgUAAgOgLQgNgMgIgTQgGgUAAgaQAAgZAGgTQAGgUAOgLQAOgLAVgBQALABAIADQAIAEAGAFQAGAFADAFIAAhfIARAAIAABfIAJgKQAGgFAIgEQAIgDAKgBQAWABANALQAOALAHAUQAGATAAAZQAAAagHAUQgHATgOAMQgNALgVAAQgOAAgKgFQgLgGgGgKIAABbgAAXg8QgJAIgFANIAABSQAFANAJAIQAJAIAPABQARgBAKgKQAKgLAEgRQAEgQAAgRQAAgQgEgQQgEgQgLgLQgJgLgRAAQgPAAgJAJgAhJg6QgKALgEAQQgFAQABAQQgBARAFAQQAEARAKALQAKAKARABQAOgBAJgIQAJgIAGgNIAAhSQgGgNgJgIQgIgJgPAAQgRAAgKALg");
	this.shape_441.setTransform(730.7,534.5);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#58595B").s().p("ABDBxIgUg4IhgAAIgUA4IgxAAIBVjiIBBAAIBXDigAAkAWIgkhmIgmBmIBKAAg");
	this.shape_442.setTransform(1068.7,445.6);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#58595B").s().p("AhVBxIAAjiIBRAAQAXAAAVAIQAUAGANAPQAMAQABAaQgBAagMAQQgNAPgUAHQgVAIgXAAIgfAAIAABTgAgkgDIASAAQAOAAALgCQAMgDAIgJQAIgIAAgRQAAgUgNgIQgOgJgXABIgVAAg");
	this.shape_443.setTransform(1047.3,445.6);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#58595B").s().p("AAlBxIhWhsIAABsIgyAAIAAjiIAyAAIAABjIBRhjIA7AAIheBrIBnB3g");
	this.shape_444.setTransform(984.3,445.6);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#58595B").s().p("ABDBxIgUg4IhgAAIgUA4IgyAAIBXjiIBAAAIBYDigAAlAWIglhmIgnBmIBMAAg");
	this.shape_445.setTransform(960,445.6);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#58595B").s().p("AgYB1IAAgZQgbgBgTgGQgTgGgNgLQgPgNgIgSQgIgSAAgWQAAgXAIgSQAIgRAPgMQANgLATgGQATgGAbAAIAAgUIAxAAIAAAUQAbAAATAGQATAGANAKQAPAMAIASQAIASAAAXQAAAWgIASQgIASgPANQgNALgTAGQgTAHgbAAIAAAZgAAYA8QAdgBAQgRQAPgRABgcQAAgTgIgNQgHgOgNgIQgNgHgUgBgAg4g5QgNAIgHAOQgHANAAATQAAAcAQARQAPARAdABIAAh9QgTABgOAHg");
	this.shape_446.setTransform(933.5,445.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205,p:{x:925.3}},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183,p:{x:1399.9}},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180,p:{x:1465.3}},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171,p:{x:1656.8}},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168,p:{x:1705.9}},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164,p:{x:776.9,y:534.6}},{t:this.shape_163},{t:this.shape_162,p:{x:811.3}},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159,p:{x:866.4,y:538.5}},{t:this.shape_158,p:{x:882.5,y:534.6}},{t:this.shape_157},{t:this.shape_156,p:{x:916.8,y:534.6}},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153,p:{x:979.4}},{t:this.shape_152,p:{x:997}},{t:this.shape_151,p:{x:1020.3,y:534.6}},{t:this.shape_150},{t:this.shape_149,p:{x:1054.2,y:534.6}},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143,p:{x:1191.1,y:534.6}},{t:this.shape_142},{t:this.shape_141,p:{x:1223.1}},{t:this.shape_140},{t:this.shape_139,p:{x:1259.8,y:534.6}},{t:this.shape_138,p:{x:1278,y:534.6}},{t:this.shape_137,p:{x:1289.1,y:535.1}},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134,p:{x:734.1}},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127,p:{x:859.6}},{t:this.shape_126,p:{x:886.2}},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123,p:{x:935.9}},{t:this.shape_122},{t:this.shape_121,p:{x:971.5}},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117,p:{x:1036.6}},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112,p:{x:1132.8}},{t:this.shape_111,p:{x:1149.4}},{t:this.shape_110},{t:this.shape_109,p:{x:1190.1}},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106,p:{x:1246.8,y:577.8}},{t:this.shape_105,p:{x:1265.2}},{t:this.shape_104,p:{x:1282.4,y:577.7}},{t:this.shape_103,p:{x:1295.9,y:577.7}},{t:this.shape_102,p:{x:1312.2}},{t:this.shape_101},{t:this.shape_100,p:{x:1346.8,y:577.7}},{t:this.shape_99},{t:this.shape_98,p:{x:1381.1}},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94,p:{x:1458.9}},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91,p:{x:1500.3,y:578.2}},{t:this.shape_90},{t:this.shape_89,p:{x:718.3}},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84,p:{x:809}},{t:this.shape_83,p:{x:824}},{t:this.shape_82,p:{x:850.6}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77,p:{x:939.3}},{t:this.shape_76,p:{x:959.7}},{t:this.shape_75,p:{x:985.7,y:620.7}},{t:this.shape_74,p:{x:1002.4}},{t:this.shape_73,p:{x:1029}},{t:this.shape_72},{t:this.shape_71,p:{x:1063.9}},{t:this.shape_70,p:{x:1078.7}},{t:this.shape_69},{t:this.shape_68,p:{x:1114.3}},{t:this.shape_67,p:{x:1132.7,y:620.7}},{t:this.shape_66},{t:this.shape_65,p:{x:1164.9}},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60,p:{x:1261.4}},{t:this.shape_59},{t:this.shape_58,p:{x:1292.2}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54,p:{x:702.2}},{t:this.shape_53,p:{x:718.5}},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50,p:{x:773}},{t:this.shape_49},{t:this.shape_48,p:{x:805.2,y:706.8}},{t:this.shape_47,p:{x:817.9}},{t:this.shape_46},{t:this.shape_45,p:{x:870,y:709.3}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42,p:{x:919.4,y:706.8}},{t:this.shape_41},{t:this.shape_40,p:{x:951.4,y:706.8}},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:1052.5,y:709.3}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30,p:{x:1144.1,y:706.8}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27,p:{x:1193.1,y:706.8}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24,p:{x:1239.3,y:706.8}},{t:this.shape_23},{t:this.shape_22,p:{x:1280.6,y:706.8}},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19,p:{x:1345.5,y:706.9}},{t:this.shape_18,p:{x:1364.8}},{t:this.shape_17,p:{x:1380.9,y:706.8}},{t:this.shape_16},{t:this.shape_15,p:{x:1422.4}},{t:this.shape_14,p:{x:1440.7}},{t:this.shape_13},{t:this.shape_12,p:{x:1473.3,y:706.8}},{t:this.shape_11,p:{x:1491.5}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:1567.9}},{t:this.shape_6,p:{x:1585.6,y:706.8}},{t:this.shape_5,p:{x:1602.4,y:706.8}},{t:this.shape_4,p:{x:1618.5,y:706.8}},{t:this.shape_3,p:{x:1636.7,y:706.8}},{t:this.shape_2},{t:this.shape_1,p:{x:1673.1,y:706.8}},{t:this.shape}]},45).to({state:[{t:this.instance_10},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_183,p:{x:801.9}},{t:this.shape_171,p:{x:819.9}},{t:this.shape_205,p:{x:850}},{t:this.shape_180,p:{x:868.9}},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346,p:{x:953.6}},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343,p:{x:1021.2}},{t:this.shape_168,p:{x:1036.1}},{t:this.shape_342},{t:this.shape_341,p:{x:745.9}},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_141,p:{x:1019.9}},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_153,p:{x:1100.3}},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318,p:{x:726.8}},{t:this.shape_123,p:{x:743.4}},{t:this.shape_117,p:{x:761.2}},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_134,p:{x:894.6}},{t:this.shape_126,p:{x:920}},{t:this.shape_94,p:{x:938.4}},{t:this.shape_311},{t:this.shape_310},{t:this.shape_30,p:{x:990.7,y:577.7}},{t:this.shape_109,p:{x:1006.7}},{t:this.shape_22,p:{x:1023.3,y:577.7}},{t:this.shape_137,p:{x:1034.4,y:578.2}},{t:this.shape_309},{t:this.shape_68,p:{x:727}},{t:this.shape_308,p:{x:744.7}},{t:this.shape_307},{t:this.shape_83,p:{x:774.1}},{t:this.shape_70,p:{x:790.4}},{t:this.shape_306,p:{x:809.6}},{t:this.shape_305},{t:this.shape_73,p:{x:852.8}},{t:this.shape_89,p:{x:871.2}},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_65,p:{x:956.9}},{t:this.shape_300},{t:this.shape_74,p:{x:987.1}},{t:this.shape_299,p:{x:1013.8}},{t:this.shape_298},{t:this.shape_71,p:{x:1055.7}},{t:this.shape_297},{t:this.shape_60,p:{x:1088.1}},{t:this.shape_296,p:{x:1103.2}},{t:this.shape_295,p:{x:1127.2}},{t:this.shape_58,p:{x:1143.5}},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_156,p:{x:778,y:663.8}},{t:this.shape_286,p:{x:805.2,y:663.8}},{t:this.shape_285},{t:this.shape_284,p:{x:839.6}},{t:this.shape_283},{t:this.shape_282},{t:this.shape_149,p:{x:890.2,y:663.8}},{t:this.shape_281,p:{x:908.4,y:663.8}},{t:this.shape_280},{t:this.shape_143,p:{x:943.1,y:663.8}},{t:this.shape_279,p:{x:958.8,y:663.8}},{t:this.shape_158,p:{x:985.9,y:663.8}},{t:this.shape_278,p:{x:1004.3}},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275,p:{x:1065.9,y:663.8}},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271,p:{x:1149.1}},{t:this.shape_270,p:{x:1165.3}},{t:this.shape_269,p:{x:1181.4}},{t:this.shape_268},{t:this.shape_267,p:{x:1223,y:659.9}},{t:this.shape_266,p:{x:1241.6}},{t:this.shape_265},{t:this.shape_164,p:{x:1277.6,y:663.8}},{t:this.shape_264,p:{x:1294.4}},{t:this.shape_263},{t:this.shape_139,p:{x:1338.9,y:663.8}},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_138,p:{x:1466.5,y:663.8}},{t:this.shape_257},{t:this.shape_256},{t:this.shape_40,p:{x:726.8,y:706.8}},{t:this.shape_106,p:{x:743.4,y:706.9}},{t:this.shape_54,p:{x:761.2}},{t:this.shape_255},{t:this.shape_47,p:{x:793.1}},{t:this.shape_254},{t:this.shape_253},{t:this.shape_5,p:{x:860.5,y:706.8}},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_91,p:{x:931,y:707.3}},{t:this.shape_249},{t:this.shape_248},{t:this.shape_18,p:{x:989.2}},{t:this.shape_50,p:{x:1006}},{t:this.shape_247},{t:this.shape_45,p:{x:1052.6,y:709.3}},{t:this.shape_246},{t:this.shape_15,p:{x:1087.7}},{t:this.shape_14,p:{x:1106}},{t:this.shape_103,p:{x:1122.1,y:706.8}},{t:this.shape_12,p:{x:1138,y:706.8}},{t:this.shape_245},{t:this.shape_11,p:{x:1181.4}},{t:this.shape_19,p:{x:1198.2,y:706.9}},{t:this.shape_6,p:{x:1217.5,y:706.8}},{t:this.shape_244,p:{x:1244.8,y:706.8}},{t:this.shape_243},{t:this.shape_242},{t:this.shape_35,p:{x:1294.8,y:709.3}},{t:this.shape_3,p:{x:1313.3,y:706.8}},{t:this.shape_27,p:{x:1329.4,y:706.8}},{t:this.shape_4,p:{x:1345.3,y:706.8}},{t:this.shape_241},{t:this.shape_240},{t:this.shape_53,p:{x:1402.9}},{t:this.shape_7,p:{x:1421}},{t:this.shape_24,p:{x:1436.5,y:706.8}},{t:this.shape_1,p:{x:1452.5,y:706.8}},{t:this.shape_100,p:{x:1469.5,y:706.8}},{t:this.shape_104,p:{x:1487.2,y:706.8}},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235,p:{x:772.9,y:749.9}},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230,p:{x:867.2,y:749.9}},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_75,p:{x:1057.2,y:749.9}},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_67,p:{x:1135.3,y:749.9}}]},44).to({state:[{t:this.instance_10},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_183,p:{x:801.9}},{t:this.shape_171,p:{x:819.9}},{t:this.shape_205,p:{x:850}},{t:this.shape_180,p:{x:868.9}},{t:this.shape_349},{t:this.shape_348},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_343,p:{x:1004.3}},{t:this.shape_346,p:{x:1025.3}},{t:this.shape_443},{t:this.shape_442},{t:this.shape_168,p:{x:1085.5}},{t:this.shape_441},{t:this.shape_440},{t:this.shape_286,p:{x:768.8,y:534.6}},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_281,p:{x:830.8,y:534.6}},{t:this.shape_162,p:{x:846.9}},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_152,p:{x:927.5}},{t:this.shape_279,p:{x:941.8,y:534.6}},{t:this.shape_141,p:{x:969.1}},{t:this.shape_433},{t:this.shape_267,p:{x:1006.2,y:530.8}},{t:this.shape_275,p:{x:1024.5,y:534.6}},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_156,p:{x:1114.2,y:534.6}},{t:this.shape_428},{t:this.shape_427},{t:this.shape_341,p:{x:1165.2}},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_12,p:{x:726.9,y:577.7}},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_111,p:{x:811.9}},{t:this.shape_127,p:{x:828.1}},{t:this.shape_121,p:{x:854.9}},{t:this.shape_420},{t:this.shape_100,p:{x:897.3,y:577.7}},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_244,p:{x:1044.1,y:577.7}},{t:this.shape_42,p:{x:1057.6,y:577.7}},{t:this.shape_112,p:{x:1071.8}},{t:this.shape_102,p:{x:1088.4}},{t:this.shape_412},{t:this.shape_103,p:{x:1120.2,y:577.7}},{t:this.shape_411},{t:this.shape_45,p:{x:1161.4,y:580.2}},{t:this.shape_410},{t:this.shape_409},{t:this.shape_94,p:{x:1223.4}},{t:this.shape_6,p:{x:1241.1,y:577.7}},{t:this.shape_5,p:{x:1257.9,y:577.7}},{t:this.shape_27,p:{x:1271.9,y:577.7}},{t:this.shape_3,p:{x:1287.9,y:577.7}},{t:this.shape_48,p:{x:1304.6,y:577.7}},{t:this.shape_4,p:{x:1318.7,y:577.7}},{t:this.shape_408},{t:this.shape_318,p:{x:1362}},{t:this.shape_407},{t:this.shape_126,p:{x:1407.3}},{t:this.shape_406},{t:this.shape_405},{t:this.shape_24,p:{x:1467.9,y:577.7}},{t:this.shape_98,p:{x:1482.4}},{t:this.shape_109,p:{x:1506.9}},{t:this.shape_404},{t:this.shape_35,p:{x:1548.8,y:580.2}},{t:this.shape_403},{t:this.shape_91,p:{x:1585.3,y:578.2}},{t:this.shape_402},{t:this.shape_40,p:{x:1624.8,y:577.7}},{t:this.shape_19,p:{x:1641.4,y:577.8}},{t:this.shape_401},{t:this.shape_17,p:{x:1674.7,y:577.7}},{t:this.shape_1,p:{x:1690.7,y:577.7}},{t:this.shape_400},{t:this.shape_105,p:{x:1722}},{t:this.shape_71,p:{x:725.5}},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_89,p:{x:820}},{t:this.shape_296,p:{x:836.8}},{t:this.shape_395},{t:this.shape_394},{t:this.shape_306,p:{x:893}},{t:this.shape_393},{t:this.shape_295,p:{x:925.3}},{t:this.shape_392},{t:this.shape_82,p:{x:968.5}},{t:this.shape_70,p:{x:985.1}},{t:this.shape_391},{t:this.shape_390},{t:this.shape_74,p:{x:1034.8}},{t:this.shape_77,p:{x:1057.1}},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_230,p:{x:1144.7,y:620.7}},{t:this.shape_84,p:{x:1160.7}},{t:this.shape_386},{t:this.shape_76,p:{x:1195}},{t:this.shape_385},{t:this.shape_299,p:{x:1224.7}},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_75,p:{x:1298.2,y:620.7}},{t:this.shape_381},{t:this.shape_73,p:{x:1332.5}},{t:this.shape_380},{t:this.shape_60,p:{x:1366.7}},{t:this.shape_58,p:{x:1383}},{t:this.shape_308,p:{x:1399.9}},{t:this.shape_379},{t:this.shape_67,p:{x:1435.5,y:620.7}},{t:this.shape_378},{t:this.shape_235,p:{x:1478.9,y:620.7}},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_65,p:{x:1547.8}},{t:this.shape_374},{t:this.shape_289},{t:this.shape_264,p:{x:741.8}},{t:this.shape_373},{t:this.shape_143,p:{x:777.4,y:663.8}},{t:this.shape_269,p:{x:790.9}},{t:this.shape_372},{t:this.shape_371},{t:this.shape_149,p:{x:843.2,y:663.8}},{t:this.shape_271,p:{x:859.9}},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_284,p:{x:935.7}},{t:this.shape_367},{t:this.shape_270,p:{x:968}},{t:this.shape_366},{t:this.shape_164,p:{x:1002.5,y:663.8}},{t:this.shape_278,p:{x:1021.1}},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_139,p:{x:1106.1,y:663.8}},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_151,p:{x:1191.3,y:663.8}},{t:this.shape_359},{t:this.shape_159,p:{x:1218.9,y:667.6}},{t:this.shape_266,p:{x:1235.6}},{t:this.shape_138,p:{x:1253.3,y:663.8}},{t:this.shape_358},{t:this.shape_357}]},50).wait(51));

	// Back BTN
	this.back_btn = new lib.back_mc();
	this.back_btn.parent = this;
	this.back_btn.setTransform(131,995.3,1,1,0,0,0,32.1,22.1);
	this.back_btn._off = true;
	new cjs.ButtonHelper(this.back_btn, 0, 1, 2, false, new lib.back_mc(), 3);

	this.timeline.addTween(cjs.Tween.get(this.back_btn).wait(45).to({_off:false},0).wait(145));

	// menu_btn
	this.instance_11 = new lib.menu_btn();
	this.instance_11.parent = this;
	this.instance_11.setTransform(118.3,122.4,1,1,0,0,0,19.4,90.2);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(45).to({_off:false},0).wait(145));

	// Hedaing and Icon
	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#EC1C24").s().p("AgpByIBZjQIhzAAIAAgSICHAAIAAASIhXDQg");
	this.shape_447.setTransform(1689.5,813.4);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#EC1C24").s().p("Ag2ByIBYjiIAUAAIhXDig");
	this.shape_448.setTransform(1676.1,813.4);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#EC1C24").s().p("AAcByIAAg1IhsAAIAAgUIBliZIAbAAIAACbIAhAAIAAASIghAAIAAA1gAg9AqIBZAAIAAiFg");
	this.shape_449.setTransform(1662.3,813.4);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#EC1C24").s().p("AhCBzIAAgSIA1g6IAbgfQALgOAIgQQAHgQAAgRQAAgUgNgKQgMgKgRAAQgQAAgMAEQgNAEgNAHIgBgUQANgHAOgDQANgEAPAAQASAAAOAGQAOAGAJAOQAIANAAATQABAUgJARQgHASgOAQQgOARgSASIgpAuIBsAAIAAATg");
	this.shape_450.setTransform(1643.8,813.3);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#EC1C24").s().p("AgKCpIAAlRIAVAAIAAFRg");
	this.shape_451.setTransform(1622.5,815.3);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#EC1C24").s().p("AgqB0QgKgBgJgDIACgUQAIADAJABIATACQATAAAOgJQAOgKAJgPQAJgOAFgSQAEgSABgQQgIANgPAIQgQAJgRAAQghAAgRgSQgSgRAAggQAAgXAJgRQAIgRAQgKQAQgKAWAAQAVAAAPAJQAPAJAIAPQAIAPAEASQADASAAATQAAAXgFAXQgFAYgMASQgMATgSALQgTAMgaAAIgSgBgAgchZQgLAHgGANQgGAMAAAQQAAALADAJQADAKAGAHQAGAGAJADQAJAEAMAAQAOAAAMgHQAMgFAHgLQAHgLAAgOQAAgQgGgNQgFgMgMgJQgLgIgQAAQgQAAgLAIg");
	this.shape_452.setTransform(1600.6,813.4);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#EC1C24").s().p("AgkBuQgSgGgKgNQgLgOAAgVQAAgSAJgNQAJgNAOgHIALgFIAKgEQgNgGgKgHQgKgHgGgKQgFgJAAgPQAAgUALgNQAKgNAPgGQAPgGAPAAQARAAAPAGQAPAFAKAMQAJANABATQgBAPgHAMQgHALgKAHQgLAIgLADQAPAFANAHQAMAHAIAMQAHALABARQgBAVgLAOQgLAOgRAHQgRAHgTAAQgTAAgRgHgAgaAOQgNAHgHAJQgHAKgBAOQABAQAHAKQAIAJANAEQAMAFANAAQAOAAAMgEQAMgEAIgKQAIgKAAgSQAAgPgKgKQgKgKgPgGIgKgEIgJgEQgOAEgMAHgAgWhdQgLAFgGAIQgGAIAAANQAAAPAIAJQAHAKANAGIAJAEIAIADQAMgEAKgGQAKgGAHgJQAHgJAAgNQAAgNgHgIQgGgJgKgEQgLgEgMAAQgMAAgKAEg");
	this.shape_453.setTransform(1582.9,813.4);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#EC1C24").s().p("AgVByQgJgDgIgFQgOgLgIgSQgIgRgCgVQgDgUAAgTQAAgSADgUQADgUAIgSQAIgRAOgLQAPgMAWAAQAXAAAOAMQAPALAIASQAIARADAVQADAUAAARQAAATgDAUQgDAUgIASQgIARgPALQgOAMgXAAQgLAAgKgDgAgchWQgKAKgFAPQgGAQgBAQIgCAdIACAeQABARAFAPQAFAQALAKQALAJARABQASgBAKgKQALgKAFgPQAFgPACgRIABgeIgBgdQgCgRgFgPQgFgPgLgKQgKgKgSgBQgRABgLAKg");
	this.shape_454.setTransform(1564.9,813.4);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#EC1C24").s().p("AgqB0QgKgBgJgDIACgUQAIADAJABIATACQATAAAOgJQAOgKAJgPQAJgOAFgSQAEgSABgQQgIANgPAIQgQAJgRAAQghAAgRgSQgSgRAAggQAAgXAJgRQAIgRAQgKQAQgKAWAAQAVAAAPAJQAPAJAIAPQAIAPAEASQADASAAATQAAAXgFAXQgFAYgMASQgMATgSALQgTAMgaAAIgSgBgAgchZQgLAHgGANQgGAMAAAQQAAALADAJQADAKAGAHQAGAGAJADQAJAEAMAAQAOAAAMgHQAMgFAHgLQAHgLAAgOQAAgQgGgNQgFgMgMgJQgLgIgQAAQgQAAgLAIg");
	this.shape_455.setTransform(1537.6,813.4);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#EC1C24").s().p("AgkBuQgSgGgKgNQgLgOAAgVQAAgSAJgNQAJgNAOgHIALgFIAKgEQgNgGgKgHQgKgHgGgKQgFgJAAgPQAAgUALgNQAKgNAPgGQAPgGAPAAQARAAAPAGQAPAFAKAMQAJANABATQgBAPgHAMQgHALgKAHQgLAIgLADQAPAFANAHQAMAHAIAMQAHALABARQgBAVgLAOQgLAOgRAHQgRAHgTAAQgTAAgRgHgAgaAOQgNAHgHAJQgHAKgBAOQABAQAHAKQAIAJANAEQAMAFANAAQAOAAAMgEQAMgEAIgKQAIgKAAgSQAAgPgKgKQgKgKgPgGIgKgEIgJgEQgOAEgMAHgAgWhdQgLAFgGAIQgGAIAAANQAAAPAIAJQAHAKANAGIAJAEIAIADQAMgEAKgGQAKgGAHgJQAHgJAAgNQAAgNgHgIQgGgJgKgEQgLgEgMAAQgMAAgKAEg");
	this.shape_456.setTransform(1519.9,813.4);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#EC1C24").s().p("AgVByQgJgDgIgFQgOgLgIgSQgIgRgCgVQgDgUAAgTQAAgSADgUQADgUAIgSQAIgRAOgLQAPgMAWAAQAXAAAOAMQAPALAIASQAIARADAVQADAUAAARQAAATgDAUQgDAUgIASQgIARgPALQgOAMgXAAQgLAAgKgDgAgchWQgKAKgFAPQgGAQgBAQIgCAdIACAeQABARAFAPQAFAQALAKQALAJARABQASgBAKgKQALgKAFgPQAFgPACgRIABgeIgBgdQgCgRgFgPQgFgPgLgKQgKgKgSgBQgRABgLAKg");
	this.shape_457.setTransform(1501.9,813.4);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#EC1C24").s().p("AgqB0QgKgBgJgDIACgUQAIADAJABIATACQATAAAOgJQAOgKAJgPQAJgOAFgSQAEgSABgQQgIANgPAIQgQAJgRAAQghAAgRgSQgSgRAAggQAAgXAJgRQAIgRAQgKQAQgKAWAAQAVAAAPAJQAPAJAIAPQAIAPAEASQADASAAATQAAAXgFAXQgFAYgMASQgMATgSALQgTAMgaAAIgSgBgAgchZQgLAHgGANQgGAMAAAQQAAALADAJQADAKAGAHQAGAGAJADQAJAEAMAAQAOAAAMgHQAMgFAHgLQAHgLAAgOQAAgQgGgNQgFgMgMgJQgLgIgQAAQgQAAgLAIg");
	this.shape_458.setTransform(1474.6,813.4);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#EC1C24").s().p("AgkBuQgSgGgKgNQgLgOAAgVQAAgSAJgNQAJgNAOgHIALgFIAKgEQgNgGgKgHQgKgHgGgKQgFgJAAgPQAAgUALgNQAKgNAPgGQAPgGAPAAQARAAAPAGQAPAFAKAMQAJANABATQgBAPgHAMQgHALgKAHQgLAIgLADQAPAFANAHQAMAHAIAMQAHALABARQgBAVgLAOQgLAOgRAHQgRAHgTAAQgTAAgRgHgAgaAOQgNAHgHAJQgHAKgBAOQABAQAHAKQAIAJANAEQAMAFANAAQAOAAAMgEQAMgEAIgKQAIgKAAgSQAAgPgKgKQgKgKgPgGIgKgEIgJgEQgOAEgMAHgAgWhdQgLAFgGAIQgGAIAAANQAAAPAIAJQAHAKANAGIAJAEIAIADQAMgEAKgGQAKgGAHgJQAHgJAAgNQAAgNgHgIQgGgJgKgEQgLgEgMAAQgMAAgKAEg");
	this.shape_459.setTransform(1456.9,813.4);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#EC1C24").s().p("AgVByQgJgDgIgFQgOgLgIgSQgIgRgCgVQgDgUAAgTQAAgSADgUQADgUAIgSQAIgRAOgLQAPgMAWAAQAXAAAOAMQAPALAIASQAIARADAVQADAUAAARQAAATgDAUQgDAUgIASQgIARgPALQgOAMgXAAQgLAAgKgDgAgchWQgKAKgFAPQgGAQgBAQIgCAdIACAeQABARAFAPQAFAQALAKQALAJARABQASgBAKgKQALgKAFgPQAFgPACgRIABgeIgBgdQgCgRgFgPQgFgPgLgKQgKgKgSgBQgRABgLAKg");
	this.shape_460.setTransform(1438.9,813.4);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#58595B").s().p("AhYCFIAAkJICtAAIAAAoIhzAAIAABGIBuAAIAAAoIhuAAIAABLIB3AAIAAAog");
	this.shape_461.setTransform(978,182.4);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#58595B").s().p("AAwCFIAAhnIgPADIgXAEIgVABQgeABgVgIQgWgGgLgVQgLgTAAglIAAhQIA8AAIAABMQgBAbALAMQAKAMAaAAIASgBIASgDIAMgDIAAh4IA7AAIAAEJg");
	this.shape_462.setTransform(952.7,182.4);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#58595B").s().p("ABPCFIgYhCIhwAAIgYBCIg7AAIBmkJIBNAAIBmEJgAArAbIgrh5IgtB5IBYAAg");
	this.shape_463.setTransform(926,182.4);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#58595B").s().p("ABZCmIAAhBIixAAIAABBIg2AAIAAhsIAVAAQASgZAKgkQAJgjAAgqIAAhVIDCAAIAADfIAhAAIAABsgAgehHQAAAmgHAhQgIAhgPAZIBvAAIAAi0IhRAAg");
	this.shape_464.setTransform(897.2,185.6);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#58595B").s().p("AA1CFIAAhwIhpAAIAABwIg7AAIAAkJIA7AAIAABqIBpAAIAAhqIA7AAIAAEJg");
	this.shape_465.setTransform(868.6,182.4);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#58595B").s().p("ABPCFIgYhCIhwAAIgYBCIg7AAIBmkJIBNAAIBmEJgAArAbIgrh5IgtB5IBYAAg");
	this.shape_466.setTransform(840.4,182.4);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#58595B").s().p("AgkB6QghgRgSgeQgSgfgBgsQABgpATgfQATgfAhgQQAhgRAoAAQAQgBASADQARADAQAEIgCAsQgNgFgOgDQgPgCgOAAQgcAAgUALQgVAMgLAWQgMAVAAAbQAAAcALAWQALAUAVAMQATAMAdAAQAPAAAOgDQAPgCANgGIADArQgQAGgRADQgSACgRAAQgqAAghgPg");
	this.shape_467.setTransform(814.6,182.4);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#58595B").s().p("AgdCHQgPgDgMgFQgkgPgTghQgTggAAgvQAAgoAPgfQAPgfAegRQAdgRApAAQAqAAAdARQAdAQAPAfQAQAfAAApQAAApgQAfQgPAfgdARQgdARgqAAQgPAAgOgCgAgghXQgOAKgHANQgIAPgDAQQgEARAAAQQAAAQAEARQADARAIAOQAIAPAOAIQAMAJATAAQAUAAANgIQANgKAIgOQAIgOADgQQAEgRAAgRQAAgQgEgRQgDgRgIgOQgIgOgNgJQgNgIgUgBQgTABgNAIg");
	this.shape_468.setTransform(776,182.4);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#58595B").s().p("AA1CFIAAhwIhpAAIAABwIg7AAIAAkJIA7AAIAABqIBpAAIAAhqIA7AAIAAEJg");
	this.shape_469.setTransform(747.2,182.4);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#58595B").s().p("AhkCFIAAkJIBfAAQAcgBAYAJQAYAHAOATQAPASABAeQgBAegPATQgOATgYAJQgYAIgcAAIglAAIAABigAgqgEIAVAAQAQAAAOgDQAOgDAJgKQAJgKAAgUQAAgYgQgJQgPgKgcAAIgYAAg");
	this.shape_470.setTransform(721.9,182.4);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#58595B").s().p("AgeCHQgOgDgMgFQglgPgSghQgTggAAgvQAAgoAPgfQAPgfAegRQAdgRApAAQArAAAdARQAdAQAPAfQAPAfAAApQAAApgPAfQgPAfgdARQgeARgqAAQgPAAgPgCgAgghXQgNAKgIANQgIAPgDAQQgEARAAAQQgBAQAFARQADARAIAOQAIAPANAIQANAJATAAQATAAAOgIQAOgKAHgOQAIgOADgQQAEgRAAgRQAAgQgEgRQgDgRgIgOQgHgOgOgJQgOgIgTgBQgTABgNAIg");
	this.shape_471.setTransform(694.2,182.4);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#58595B").s().p("AhlCFIAAkJIBsAAQAWAAAUAFQAUAHANAOQANAOAAAZQAAAagOAQQgOAPgZAGQASADANAHQANAIAIANQAHANABASQAAAYgKAPQgJAOgPAJQgPAHgSADQgUADgSAAgAgsBhIAcAAQAOABANgEQANgEAIgIQAKgJAAgRQAAgSgKgJQgIgJgOgEQgNgDgPAAIgaAAgAgsgUIAdAAQAMABAMgDQAMgEAIgJQAHgIAAgQQAAgOgHgIQgHgJgKgDQgMgDgLAAIghAAg");
	this.shape_472.setTransform(667.6,182.4);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#58595B").s().p("AgeCHQgOgDgMgFQglgPgSghQgTggAAgvQAAgoAQgfQAOgfAegRQAdgRApAAQArAAAdARQAdAQAPAfQAPAfAAApQAAApgPAfQgPAfgdARQgeARgqAAQgPAAgPgCgAgghXQgNAKgIANQgIAPgDAQQgEARAAAQQgBAQAFARQADARAIAOQAIAPANAIQANAJATAAQATAAAOgIQAOgKAHgOQAIgOADgQQAEgRAAgRQAAgQgEgRQgDgRgIgOQgHgOgOgJQgOgIgTgBQgTABgNAIg");
	this.shape_473.setTransform(639.8,182.4);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#58595B").s().p("AhTCFIAAkJICnAAIAAAuIhsAAIAADbg");
	this.shape_474.setTransform(616.4,182.4);

	this.instance_12 = new lib.telephone_mc();
	this.instance_12.parent = this;
	this.instance_12.setTransform(373.1,167.6,1,1,0,0,0,72.1,72.3);
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 236, 28, 36, 0)];
	this.instance_12.cache(-2,-2,148,149);

	this.instance_13 = new lib.laptop_mc();
	this.instance_13.parent = this;
	this.instance_13.setTransform(400.8,171,0.743,0.743,0,0,0,134.3,82.2);
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 234, 33, 39, 0)];
	this.instance_13.cache(-2,-2,273,169);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#EC1C24").s().p("AAmB7IhShaIAABaIgSAAIAAj0IASAAIAACRIBKhGIAYAAIhPBKIBZBfg");
	this.shape_475.setTransform(1714.7,812.5);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#EC1C24").s().p("ABbBWIAAhvQABgSgJgMQgIgMgTAAQgRAAgKAJQgKAJgEAPQgFAPAAAQIAABZIgRAAIAAhvQAAgSgIgMQgIgMgUAAQgQAAgKAJQgKAJgFAPQgFAPAAAQIAABZIgSAAIAAiAIAAgUIgCgUIARAAIABAeQAJgRAMgIQANgIAQAAQAOAAAKAFQAKAGAHAIQAFAIACAJQAGgQAOgKQAOgKARAAQAQAAAMAHQALAIAGAMQAHANAAAQIAABzg");
	this.shape_476.setTransform(1692.2,816.1);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#EC1C24").s().p("AgMAOIAAgaIAZAAIAAAag");
	this.shape_477.setTransform(1674.4,823.4);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#EC1C24").s().p("AAuBWIAAhjQAAgPgCgMQgEgMgJgIQgIgHgSAAQgRAAgLAJQgLAJgFAPQgEAOAAARIAABZIgTAAIAAiAIAAgUIgBgUIAQAAIABAeQAKgQAMgJQAOgIASAAQAWAAAMAJQANAJAEAQQAGAPAAAUIAABmg");
	this.shape_478.setTransform(1660.8,816.1);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#EC1C24").s().p("AgKBVIg6ipIAWAAIAuCXIAwiXIAVAAIg7Cpg");
	this.shape_479.setTransform(1644.7,816.3);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#EC1C24").s().p("AggBMQgSgMgJgVQgIgTAAgYQAAgWAIgTQAIgVAQgMQAQgNAXAAQAZAAAOAMQAOAMAGASQAFAUAAAUIAAAIIhzAAQAAASAHAQQAGAPAPAJQANAKAVAAQALAAAKgDQALgCAJgFIABASQgLAFgKACQgKACgNAAQgbAAgSgMgAAwgMQAAgOgEgNQgEgNgJgJQgJgJgSAAQgRAAgLAKQgLAIgGAOQgEAOgBAMIBeAAIAAAAg");
	this.shape_480.setTransform(1629.4,816.3);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#EC1C24").s().p("AgLAOIAAgaIAYAAIAAAag");
	this.shape_481.setTransform(1616.7,823.4);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#EC1C24").s().p("AAvBVIguiVIguCVIgWAAIg2ipIAUAAIAuCVIAuiVIAWAAIAuCVIAtiVIASAAIg2Cpg");
	this.shape_482.setTransform(1599.4,816.3);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#EC1C24").s().p("AAuBVIguiVIgtCVIgVAAIg3ipIAUAAIAuCVIAuiVIAWAAIAuCVIAuiVIASAAIg2Cpg");
	this.shape_483.setTransform(1573.9,816.3);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#EC1C24").s().p("AAuBVIguiVIgsCVIgXAAIg3ipIAVAAIAuCVIAviVIAUAAIAvCVIAtiVIATAAIg2Cpg");
	this.shape_484.setTransform(1548.4,816.3);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#EC1C24").s().p("AglBTQgLgHgHgLQgHgLAAgQQAAgVAMgMQAMgMAWgFQATgFAbAAIAMAAIAAgIQAAgVgJgLQgJgMgWAAQgLAAgMACQgMAEgKAGIgDgSQALgFAMgEQANgDAMAAQAfAAAOARQANAQAAAeIAABKIABARIACASIgSAAIgCgdQgGAPgPAIQgPAJgRAAQgPAAgMgFgAgBABQgRADgMAIQgMAIAAASQAAARAKAIQAIAIAQAAQASgBALgIQALgJAFgOQAFgPAAgRIAAgIIgGAAIgGAAQgQAAgPACg");
	this.shape_485.setTransform(1518,816.3);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#EC1C24").s().p("AAuBVIAAhSIhbAAIAABSIgTAAIAAipIATAAIAABHIBbAAIAAhHIATAAIAACpg");
	this.shape_486.setTransform(1501.3,816.3);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#EC1C24").s().p("AggBMQgSgMgIgVQgJgTAAgYQAAgWAIgTQAJgVAPgMQAQgNAXAAQAZAAAOAMQAOAMAFASQAGAUAAAUIAAAIIhzAAQAAASAHAQQAHAPAOAJQAOAKAUAAQALAAAKgDQALgCAJgFIABASQgLAFgKACQgKACgMAAQgcAAgSgMgAAwgMQAAgOgEgNQgEgNgJgJQgKgJgQAAQgSAAgLAKQgLAIgGAOQgFAOAAAMIBeAAIAAAAg");
	this.shape_487.setTransform(1475.3,816.3);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#EC1C24").s().p("AgVBMQgTgMgKgVQgKgTAAgYQAAgYAKgUQALgUATgLQATgMAYAAIATABQAJABAIADIgBATQgHgDgJgBIgRgCQgVAAgOAJQgOAJgIAQQgIAQAAATQAAASAIAQQAIAQAOAKQAOAKAVAAQAKAAAIgBQAHgBAJgEIACATIgTAEIgSABQgaAAgTgMg");
	this.shape_488.setTransform(1459.9,816.3);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#EC1C24").s().p("AggBMQgSgMgIgVQgJgTAAgYQAAgWAIgTQAJgVAPgMQAQgNAXAAQAZAAAOAMQAOAMAFASQAGAUAAAUIAAAIIhzAAQAAASAHAQQAHAPAOAJQAOAKAUAAQALAAAKgDQALgCAJgFIABASQgLAFgKACQgLACgLAAQgcAAgSgMgAAwgMQAAgOgEgNQgEgNgJgJQgKgJgQAAQgSAAgLAKQgLAIgFAOQgGAOAAAMIBeAAIAAAAg");
	this.shape_489.setTransform(1435.2,816.3);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#EC1C24").s().p("AgIBVIAAiYIg6AAIAAgRICEAAIAAARIg5AAIAACYg");
	this.shape_490.setTransform(1420.1,816.3);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#EC1C24").s().p("AgSCcIgIgBIACgSIAFABIAGABQALAAAEgFQAEgFACgHIABgQIAAjDIASAAIAADGQAAAOgDAKQgDALgIAGQgIAGgOAAIgJAAgAAJiAIAAgbIASAAIAAAbg");
	this.shape_491.setTransform(1407.9,816.8);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#EC1C24").s().p("AglBTQgMgHgGgLQgHgLAAgQQAAgVAMgMQAMgMAWgFQATgFAcAAIALAAIAAgIQAAgVgJgLQgJgMgWAAQgMAAgLACQgMAEgKAGIgDgSQALgFANgEQAMgDAMAAQAfAAAOARQANAQAAAeIAABKIABARIACASIgSAAIgCgdQgHAPgOAIQgPAJgRAAQgPAAgMgFgAgBABQgSADgLAIQgMAIAAASQAAARAKAIQAIAIAPAAQASgBAMgIQALgJAFgOQAFgPAAgRIAAgIIgGAAIgGAAQgQAAgPACg");
	this.shape_492.setTransform(1397.3,816.3);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#EC1C24").s().p("AhDB7IAAi2IgBgeIgBgeIARAAIACAeQAHgPAOgIQAPgKAQAAQAaAAAPANQAPAMAGAUQAGAUAAAWQAAARgDAQQgEAOgIANQgIANgNAHQgNAIgTAAQgQAAgOgIQgOgIgHgPIAABlgAgWhiQgKAGgGALQgGAKgDANQgDAMAAALQAAAMADANQADALAGALQAGALAJAGQAKAHANgBQAUAAALgLQALgLAEgPQAEgPAAgSQAAgRgEgPQgEgQgLgKQgLgLgUAAQgNAAgJAGg");
	this.shape_493.setTransform(1381.1,819.8);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#EC1C24").s().p("AAvBVIAAiPIhZCPIgXAAIAAipIATAAIAACQIBaiQIAWAAIAACpg");
	this.shape_494.setTransform(1362.5,816.3);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#EC1C24").s().p("AhDB7IAAi2IgBgeIgBgeIARAAIACAeQAHgPAOgIQAPgKAQAAQAaAAAPANQAPAMAGAUQAGAUAAAWQAAARgDAQQgEAOgIANQgIANgNAHQgNAIgTAAQgQAAgOgIQgOgIgHgPIAABlgAgWhiQgKAGgGALQgGAKgDANQgDAMAAALQAAAMADANQADALAGALQAGALAJAGQAKAHANgBQAUAAALgLQALgLAEgPQAEgPAAgSQAAgRgEgPQgEgQgLgKQgLgLgUAAQgNAAgJAGg");
	this.shape_495.setTransform(1344.8,819.8);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#EC1C24").s().p("AgIBVIAAiYIg6AAIAAgRICFAAIAAARIg6AAIAACYg");
	this.shape_496.setTransform(1328.5,816.3);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#EC1C24").s().p("AgVBMQgTgMgKgVQgKgTAAgYQAAgYAKgUQALgUATgLQATgMAYAAIATABQAJABAIADIgBATQgHgDgJgBIgRgCQgVAAgOAJQgOAJgIAQQgIAQAAATQAAASAIAQQAIAQAOAKQAOAKAVAAQAKAAAIgBQAHgBAJgEIACATIgTAEIgSABQgaAAgTgMg");
	this.shape_497.setTransform(1314.5,816.3);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#EC1C24").s().p("AAvBVIAAiPIhZCPIgXAAIAAipIATAAIAACQIBaiQIAWAAIAACpg");
	this.shape_498.setTransform(1297.7,816.3);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#EC1C24").s().p("AgwBVIAAipIBhAAIAAARIhPAAIAACYg");
	this.shape_499.setTransform(1283.4,816.3);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#EC1C24").s().p("AggBMQgSgMgIgVQgJgTAAgYQAAgWAIgTQAJgVAPgMQARgNAWAAQAZAAAOAMQAOAMAFASQAGAUAAAUIAAAIIhzAAQAAASAHAQQAHAPANAJQAPAKAUAAQALAAAKgDQALgCAJgFIABASQgLAFgKACQgKACgMAAQgcAAgSgMgAAwgMQgBgOgDgNQgEgNgJgJQgJgJgRAAQgSAAgLAKQgLAIgFAOQgGAOAAAMIBeAAIAAAAg");
	this.shape_500.setTransform(1267.9,816.3);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#EC1C24").s().p("Ag9ByIAAjiIA1AAQATAAAQAGQAQAIAJAOQAKAOAAAVQAAAXgLAOQgKANgRAGQgRAIgSAAIgdAAIAABjgAgogDIAQAAQASAAANgCQAPgEAJgKQAJgKABgTQgBgXgMgLQgNgMgUAAIgjAAg");
	this.shape_501.setTransform(1252.4,813.4);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#58595B").s().p("AgdCFIAAjaIhUAAIAAgvIDjAAIAAAvIhUAAIAADag");
	this.shape_502.setTransform(758.7,182.4);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#58595B").s().p("AArCFIhkh/IAAB/Ig8AAIAAkJIA8AAIAABzIBfhzIBGAAIhvB9IB4CMg");
	this.shape_503.setTransform(735.1,182.4);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#58595B").s().p("AhJCGIgUgEIACgpIAMADIAQABQAMAAAHgJQAHgJAIgQIhkjBIBAAAIBDCQIBCiQIA+AAIhrDOQgGAOgKAOQgIAPgNAKQgOAKgWAAQgMAAgLgBg");
	this.shape_504.setTransform(679.2,182.5);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#58595B").s().p("AAzCFIAAjeIhmAAIAADeIg7AAIAAkJIDdAAIAAEJg");
	this.shape_505.setTransform(652.3,182.4);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#58595B").s().p("AgxAVIAAgpIBjAAIAAApg");
	this.shape_506.setTransform(631.7,183.3);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#58595B").s().p("AhICGIgVgEIACgpIAMADIAQABQAMAAAHgJQAHgJAIgQIhkjBIBAAAIBDCQIBCiQIA+AAIhrDOQgHAOgIAOQgJAPgOAKQgNAKgWAAQgMAAgKgBg");
	this.shape_507.setTransform(763.4,182.5);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#58595B").s().p("AgdCFIAAjaIhTAAIAAgvIDhAAIAAAvIhTAAIAADag");
	this.shape_508.setTransform(738.8,182.4);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#58595B").s().p("AAsCFIhmh/IAAB/Ig6AAIAAkJIA6AAIAABzIBghzIBGAAIhwB9IB6CMg");
	this.shape_509.setTransform(715.3,182.4);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#58595B").s().p("AgdCJIAAgdQgfgBgXgHQgWgHgPgNQgSgPgJgWQgKgVAAgaQAAgbAKgVQAJgUASgOQAPgNAWgHQAXgHAfAAIAAgXIA7AAIAAAXQAfAAAXAHQAWAHAPAMQASAOAKAVQAJAVAAAbQAAAagJAWQgKAVgSAPQgPANgWAHQgXAIgfAAIAAAdgAAcBHQAigBASgUQATgUAAgiQAAgWgIgQQgIgQgQgJQgQgJgXAAgAhChDQgQAJgIAQQgIAQAAAWQAAAiASAUQATAUAhABIAAiTQgWAAgQAJg");
	this.shape_510.setTransform(655.5,182.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470,p:{x:721.9}},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466,p:{x:840.4}},{t:this.shape_465,p:{x:868.6}},{t:this.shape_464},{t:this.shape_463,p:{x:926}},{t:this.shape_462},{t:this.shape_461,p:{x:978}},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447}]},45).to({state:[{t:this.shape_461,p:{x:614.5}},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_465,p:{x:706.3}},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.instance_13}]},44).to({state:[{t:this.shape_461,p:{x:614.5}},{t:this.shape_506},{t:this.shape_510},{t:this.shape_466,p:{x:686.6}},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_470,p:{x:789.4}},{t:this.shape_463,p:{x:814.5}},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475}]},50).wait(51));

	// BG WHITE
	this.instance_14 = new lib.bg_white_180();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-10,-6);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(45).to({_off:false},0).wait(145));

	// Layer 1
	this.eFaktura_btn = new lib.eFaktura_btn();
	this.eFaktura_btn.parent = this;
	this.eFaktura_btn.setTransform(1582.9,898.4,1,1,0,0,0,232.2,125.4);
	new cjs.ButtonHelper(this.eFaktura_btn, 0, 1, 2, false, new lib.eFaktura_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.eFaktura_btn).to({_off:true},45).wait(145));

	// Layer 1
	this.ePunkt = new lib.ePunkt_btn();
	this.ePunkt.parent = this;
	this.ePunkt.setTransform(934.9,898.4,1,1,0,0,0,232.2,125.4);
	new cjs.ButtonHelper(this.ePunkt, 0, 1, 2, false, new lib.ePunkt_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ePunkt).to({_off:true},45).wait(145));

	// Layer 1
	this.govSandace_btn = new lib.govSandace_btn();
	this.govSandace_btn.parent = this;
	this.govSandace_btn.setTransform(360,903.4,1,1,0,0,0,232.2,120.5);
	new cjs.ButtonHelper(this.govSandace_btn, 0, 1, 2, false, new lib.govSandace_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.govSandace_btn).to({_off:true},45).wait(145));

	// Layer 4
	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#FFFFFF").s().p("AgvBhIAAjBIBcAAIAAAQIhKAAIAABHIBGAAIAAAOIhGAAIAABMIBNAAIAAAQg");
	this.shape_511.setTransform(1350.7,280.3);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#FFFFFF").s().p("AgIBhIAAixIg4AAIAAgQICBAAIAAAQIg4AAIAACxg");
	this.shape_512.setTransform(1336.6,280.3);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#FFFFFF").s().p("AAyBhIAAipIhhCpIgUAAIAAjBIASAAIAACpIBhipIAUAAIAADBg");
	this.shape_513.setTransform(1320.5,280.3);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#FFFFFF").s().p("AAxBhIAAhcIhiAAIAABcIgRAAIAAjBIARAAIAABWIBiAAIAAhWIASAAIAADBg");
	this.shape_514.setTransform(1301.9,280.3);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#FFFFFF").s().p("AglBcQgQgIgKgOQgLgOgFgSQgFgRAAgVQAAgTAGgRQAFgSAKgOQALgOAQgIQAQgIAUgBQAWABAQAIQAQAHALAOQAKAOAFASQAFASAAATQAAAUgFASQgGASgKAOQgLAOgPAIQgQAIgWAAQgVAAgQgIgAgdhLQgMAHgIAMQgIAMgEAPQgEAPAAAOQAAAQAEAOQAEAPAIAMQAIAMAMAHQANAHAQABQASgBAMgHQANgHAIgMQAIgMAEgOQAEgPAAgQQAAgOgEgPQgEgPgIgMQgIgMgNgHQgMgHgSAAQgQAAgNAHg");
	this.shape_515.setTransform(1282.6,280.3);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#FFFFFF").s().p("AAsBhIhehhIAABhIgRAAIAAjBIARAAIAABZIBYhZIAWAAIhdBbIBlBmg");
	this.shape_516.setTransform(1265.6,280.3);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#FFFFFF").s().p("AAyBhIAAipIhhCpIgUAAIAAjBIASAAIAACpIBhipIAUAAIAADBg");
	this.shape_517.setTransform(1246.9,280.3);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#FFFFFF").s().p("ABMB6IAAgyIiXAAIAAAyIgQAAIAAhCIAQAAQARgXAHgfQAHgeAAgjIAAg6IBuAAIAACxIAaAAIAABCgAgbg1QAAAggHAbQgHAcgOAWIBoAAIAAihIhMAAg");
	this.shape_518.setTransform(1220.2,282.8);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#FFFFFF").s().p("AglBcQgQgIgKgOQgLgOgFgSQgFgRAAgVQAAgTAGgRQAFgSAKgOQALgOAQgIQAQgIAUgBQAWABAQAIQAQAHALAOQAKAOAFASQAFASAAATQAAAUgFASQgGASgKAOQgLAOgPAIQgQAIgWAAQgVAAgQgIgAgdhLQgMAHgIAMQgIAMgEAPQgEAPAAAOQAAAQAEAOQAEAPAIAMQAIAMAMAHQANAHAQABQASgBAMgHQANgHAIgMQAIgMAEgOQAEgPAAgQQAAgOgEgPQgEgPgIgMQgIgMgNgHQgMgHgSAAQgQAAgNAHg");
	this.shape_519.setTransform(1200.6,280.3);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#FFFFFF").s().p("ABGBhIgVg2IhhAAIgWA2IgRAAIBOjBIASAAIBPDBgAArAcIgrhrIgqBrIBVAAg");
	this.shape_520.setTransform(1174,280.3);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#FFFFFF").s().p("AgVBiIgKgDIACgPIAIACIAJAAQAKAAAGgFQAFgFADgIQACgIABgJIAAiQIARAAIAACPQAAAOgFAMQgEAMgJAHQgLAHgPAAIgJAAg");
	this.shape_521.setTransform(1159.6,280.4);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#FFFFFF").s().p("AglBcQgQgIgKgOQgLgOgFgSQgFgRAAgVQAAgTAGgRQAFgSAKgOQALgOAQgIQAQgIAUgBQAWABAQAIQAQAHALAOQAKAOAFASQAFASAAATQAAAUgFASQgGASgKAOQgLAOgPAIQgQAIgWAAQgVAAgQgIgAgdhLQgMAHgIAMQgIAMgEAPQgEAPAAAOQAAAQAEAOQAEAPAIAMQAIAMAMAHQANAHAQABQASgBAMgHQANgHAIgMQAIgMAEgOQAEgPAAgQQAAgOgEgPQgEgPgIgMQgIgMgNgHQgMgHgSAAQgQAAgNAHg");
	this.shape_522.setTransform(1146.2,280.3);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#FFFFFF").s().p("AAsBhIhehhIAABhIgRAAIAAjBIARAAIAABZIBYhZIAWAAIhdBbIBlBmg");
	this.shape_523.setTransform(1129.2,280.3);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#FFFFFF").s().p("AgvBhIAAjBIBcAAIAAAQIhKAAIAABHIBGAAIAAAOIhGAAIAABMIBNAAIAAAQg");
	this.shape_524.setTransform(1113.6,280.3);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#FFFFFF").s().p("AAxBhIAAhcIhiAAIAABcIgRAAIAAjBIARAAIAABWIBiAAIAAhWIASAAIAADBg");
	this.shape_525.setTransform(1097.1,280.3);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#FFFFFF").s().p("ABGBhIgVg2IhhAAIgWA2IgRAAIBOjBIASAAIBPDBgAArAcIgrhrIgqBrIBVAAg");
	this.shape_526.setTransform(1071.2,280.3);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#FFFFFF").s().p("AAxBhIAAhcIhiAAIAABcIgRAAIAAjBIARAAIAABWIBiAAIAAhWIASAAIAADBg");
	this.shape_527.setTransform(1053,280.3);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#FFFFFF").s().p("AgvBhIAAjBIBcAAIAAAQIhKAAIAABHIBGAAIAAAOIhGAAIAABMIBNAAIAAAQg");
	this.shape_528.setTransform(1029.9,280.3);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#FFFFFF").s().p("AgIBhIAAixIg4AAIAAgQICBAAIAAAQIg4AAIAACxg");
	this.shape_529.setTransform(1015.7,280.3);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#FFFFFF").s().p("AgvBhIAAjBIBcAAIAAAQIhKAAIAABHIBGAAIAAAOIhGAAIAABMIBNAAIAAAQg");
	this.shape_530.setTransform(1002.7,280.3);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#FFFFFF").s().p("AAxBhIAAhcIhiAAIAABcIgRAAIAAjBIARAAIAABWIBiAAIAAhWIASAAIAADBg");
	this.shape_531.setTransform(986.2,280.3);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#FFFFFF").s().p("AAsBhIhehhIAABhIgRAAIAAjBIARAAIAABZIBYhZIAWAAIhdBbIBlBmg");
	this.shape_532.setTransform(969.9,280.3);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#FFFFFF").s().p("AAyBhIAAipIhhCpIgUAAIAAjBIASAAIAACpIBhipIAUAAIAADBg");
	this.shape_533.setTransform(951.2,280.3);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#FFFFFF").s().p("AhGBhQgGgBgEgCIABgPQAEACAFABIAIAAQAPABAIgTQAHgSADgoQADgmAAhBIBrAAIAADBIgRAAIAAixIhJAAIgCBOQgBAhgFAXQgFAWgLALQgKAMgSAAIgJgBg");
	this.shape_534.setTransform(931.3,280.4);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#FFFFFF").s().p("AAsBhIhehhIAABhIgRAAIAAjBIARAAIAABZIBYhZIAWAAIhdBbIBlBmg");
	this.shape_535.setTransform(915.9,280.3);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#FFFFFF").s().p("AAyBhIAAipIhhCpIgUAAIAAjBIASAAIAACpIBhipIAUAAIAADBg");
	this.shape_536.setTransform(889.5,280.3);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#FFFFFF").s().p("AAyBhIAAipIhhCpIgUAAIAAjBIASAAIAACpIBhipIAUAAIAADBg");
	this.shape_537.setTransform(870.9,280.3);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#FFFFFF").s().p("AA/B6IAAgyIiNAAIAAjBIASAAIAACxIBgAAIAAixIARAAIAACxIAaAAIAABCg");
	this.shape_538.setTransform(853.2,282.8);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#FFFFFF").s().p("ABGBhIgVg2IhhAAIgWA2IgRAAIBOjBIASAAIBPDBgAArAcIgrhrIgqBrIBVAAg");
	this.shape_539.setTransform(833.8,280.3);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#FFFFFF").s().p("ABRBhIAAiwIhICwIgRAAIhIiwIAACwIgRAAIAAjBIAcAAIBFCtIBHitIAbAAIAADBg");
	this.shape_540.setTransform(812.6,280.3);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#FFFFFF").s().p("Ag0BhIAAjBIAtAAQAQAAAOAGQAOAGAIAMQAIAMAAASQAAAUgJAMQgJALgPAGQgOAFgPAAIgZAAIAABVgAgigCIAOAAQAPAAALgDQANgCAIgJQAHgIABgRQgBgTgKgKQgLgKgRAAIgeAAg");
	this.shape_541.setTransform(794,280.3);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#FFFFFF").s().p("AglBcQgQgIgKgOQgLgOgFgSQgFgRAAgVQAAgTAGgRQAFgSAKgOQALgOAQgIQAQgIAUgBQAWABAQAIQAQAHALAOQAKAOAFASQAFASAAATQAAAUgFASQgGASgKAOQgLAOgPAIQgQAIgWAAQgVAAgQgIgAgdhLQgMAHgIAMQgIAMgEAPQgEAPAAAOQAAAQAEAOQAEAPAIAMQAIAMAMAHQANAHAQABQASgBAMgHQANgHAIgMQAIgMAEgOQAEgPAAgQQAAgOgEgPQgEgPgIgMQgIgMgNgHQgMgHgSAAQgQAAgNAHg");
	this.shape_542.setTransform(776.2,280.3);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#FFFFFF").s().p("AgIBjIAAgWQgVgBgRgFQgQgHgLgLQgLgMgFgOQgFgOAAgPQAAgSAFgOQAGgOAKgLQALgLAQgGQARgGAVAAIAAgQIARAAIAAAQQAVAAAQAGQARAGAKAKQALALAGAOQAFAPAAASQAAAPgFAPQgGAPgKALQgLAKgRAHQgQAFgVABIAAAWgAAJA+QAUAAAPgIQAPgHAJgQQAJgOAAgTQAAgVgJgOQgIgOgQgJQgPgHgUAAgAgrg8QgQAJgIAOQgJAOAAAVQAAATAJAOQAJAQAPAHQAPAIAUAAIAAiBQgUAAgPAHg");
	this.shape_543.setTransform(755.3,280.3);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#FFFFFF").s().p("AAyBhIAAhcIhjAAIAABcIgRAAIAAjBIARAAIAABWIBjAAIAAhWIARAAIAADBg");
	this.shape_544.setTransform(735.3,280.3);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#FFFFFF").s().p("AAyBhIAAipIhhCpIgUAAIAAjBIASAAIAACpIBhipIAUAAIAADBg");
	this.shape_545.setTransform(716.8,280.3);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#FFFFFF").s().p("AgvBhIAAjBIBcAAIAAAQIhKAAIAABHIBGAAIAAAOIhGAAIAABMIBNAAIAAAQg");
	this.shape_546.setTransform(693.6,280.3);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#FFFFFF").s().p("AAsB9IhehiIAABiIgRAAIAAjBIARAAIAABYIBYhYIAWAAIhdBaIBlBngAgRhUIAUgoIAUAAIgaAog");
	this.shape_547.setTransform(679.2,277.5);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#FFFFFF").s().p("AgvBhIAAjBIBcAAIAAAQIhKAAIAABHIBGAAIAAAOIhGAAIAABMIBNAAIAAAQg");
	this.shape_548.setTransform(663.7,280.3);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#FFFFFF").s().p("Ag3BhIAAjBIAsAAQAPAAAOAFQAOAEAJALQAIAKABASQgBASgJALQgKALgRAEQAMACAKAFQAJAGAGAKQAFAKAAANQAAAVgLAMQgLAMgRAFQgQAFgTAAgAglBRIAUAAQANAAAMgDQANgDAHgIQAJgIAAgQQAAgRgJgIQgJgJgNgDQgMgDgOAAIgRAAgAglgLIAWAAQANAAAJgDQALgDAHgIQAGgIABgPQAAgMgHgHQgFgHgKgDQgKgDgKAAIgbAAg");
	this.shape_549.setTransform(649.2,280.3);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#FFFFFF").s().p("AglBcQgQgIgKgOQgLgOgFgSQgFgRAAgVQAAgTAGgRQAFgSAKgOQALgOAQgIQAQgIAUgBQAWABAQAIQAQAHALAOQAKAOAFASQAFASAAATQAAAUgFASQgGASgKAOQgLAOgPAIQgQAIgWAAQgVAAgQgIgAgdhLQgMAHgIAMQgIAMgEAPQgEAPAAAOQAAAQAEAOQAEAPAIAMQAIAMAMAHQANAHAQABQASgBAMgHQANgHAIgMQAIgMAEgOQAEgPAAgQQAAgOgEgPQgEgPgIgMQgIgMgNgHQgMgHgSAAQgQAAgNAHg");
	this.shape_550.setTransform(631,280.3);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#FFFFFF").s().p("AAxBhIAAixIhgAAIAACxIgSAAIAAjBICDAAIAADBg");
	this.shape_551.setTransform(611.9,280.3);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#FFFFFF").s().p("ABGBhIgVg2IhhAAIgWA2IgRAAIBOjBIASAAIBPDBgAArAcIgrhrIgqBrIBVAAg");
	this.shape_552.setTransform(586.1,280.3);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#FFFFFF").s().p("AgmBiQgKgCgHgDIABgTQAJAGALACQALACAKAAQAMAAALgEQAMgEAHgJQAIgJABgPQgBgOgFgHQgGgIgIgEQgIgEgJgBIgOgBIgHAAIgGABIAAgQIAFABIAGAAQAHAAAIgCQAIgCAHgEQAIgFAFgIQAGgIAAgMQAAgLgGgHQgGgHgKgEQgKgDgKAAQgKAAgLADIgSAGIgDgQQAKgEAMgCQAMgCAKgBQAOAAAOAFQANAFAJALQAIALAAARQAAARgKAMQgKAMgTAFQANACAKAFQAJAHAGALQAFAKAAANQAAASgJAMQgJANgQAGQgQAHgUAAQgOAAgKgCg");
	this.shape_553.setTransform(569.9,280.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511}]}).to({state:[]},45).wait(145));

	// Layer 1
	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#FFFFFF").s().p("ABIC0IAAiYIiOAAIAACYIhQAAIAAlnIBQAAIAACQICOAAIAAiQIBPAAIAAFng");
	this.shape_554.setTransform(1391.6,571.9);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#FFFFFF").s().p("AgFC0IiDAAIAAlnICRAAQAegBAbAIQAbAIARAUQASATAAAjQAAAigTAVQgTAVghAIQAYAEARAKQASALALARQAKASAAAYQAAAggMAUQgMAUgVALQgUALgaAEQgWAEgYAAIgFAAgAg8CDIAmAAQASAAASgFQASgFAMgMQAMgMAAgWQAAgYgNgMQgLgNgUgEQgRgEgVAAIgiAAgAg8gbIAmAAQASAAAQgFQAQgEAKgMQALgMAAgVQAAgTgKgKQgKgLgOgFQgPgFgPABIgtAAg");
	this.shape_555.setTransform(1356.5,571.9);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#FFFFFF").s().p("Ah3C0IAAlnIDqAAIAAA3IicAAIAABfICVAAIAAA1IiVAAIAABlIChAAIAAA3g");
	this.shape_556.setTransform(1324.5,571.9);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#FFFFFF").s().p("ABrC0IgghaIiZAAIggBaIhPAAICJlnIBoAAICKFngAA6AjIg6ijIg9CjIB3AAg");
	this.shape_557.setTransform(1273.8,571.9);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#FFFFFF").s().p("ABIC0IAAiYIiOAAIAACYIhQAAIAAlnIBQAAIAACQICOAAIAAiQIBPAAIAAFng");
	this.shape_558.setTransform(1235.9,571.9);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#FFFFFF").s().p("ABOC0IAAkJIiREJIhVAAIAAlnIBLAAIAAEKICPkKIBXAAIAAFng");
	this.shape_559.setTransform(1181.7,571.9);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#FFFFFF").s().p("AhwC0IAAlnIDhAAIAAA/IiRAAIAAEog");
	this.shape_560.setTransform(1150.8,571.9);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#FFFFFF").s().p("AhiC0QgPgBgMgDIACg4IAQADQALACAKAAQAQAAAKgMQAKgMALgWIiIkEIBYAAIBZDCIBajCIBUAAIiREWQgJATgMATQgMAUgSAOQgTANgcAAQgRAAgOgCg");
	this.shape_561.setTransform(1118,572.1);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#FFFFFF").s().p("AisCuIADg5QAGADAIABIAQABQAZABAMgeQAMgeAEhCQAEhDAAhvID/AAIAAFnIhQAAIAAktIhjAAQAABJgEA4QgDA5gLAnQgLAngWAVQgVAUglAAQgjAAgWgIg");
	this.shape_562.setTransform(1079,572.1);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#FFFFFF").s().p("AgxCkQgsgWgZgpQgZgpAAg8QAAg3AbgqQAZgqAtgWQAsgXA3gBQAWAAAXAEQAYADAVAGIgDA8QgRgHgUgDQgTgEgTAAQgmAAgbAQQgcAQgQAcQgPAdgBAlQAAAnAPAcQAPAdAcAPQAaAQAoAAQATAAAUgDQATgEATgIIADA7QgVAHgXAEQgYAEgXAAQg6gBgsgVg");
	this.shape_563.setTransform(1045.7,571.9);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#FFFFFF").s().p("AhiC0QgPgBgMgDIACg4IAQADQALACAKAAQAQAAAKgMQAKgMALgWIiIkEIBYAAIBZDCIBajCIBUAAIiREWQgJATgMATQgMAUgSAOQgTANgcAAQgRAAgOgCg");
	this.shape_564.setTransform(1011.6,572.1);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#FFFFFF").s().p("Ah3C0IAAlnIDqAAIAAA3IicAAIAABfICVAAIAAA1IiVAAIAABlIChAAIAAA3g");
	this.shape_565.setTransform(964,571.9);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#FFFFFF").s().p("AgnC0IAAknIhxAAIAAhAIExAAIAABAIhxAAIAAEng");
	this.shape_566.setTransform(932.3,571.9);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#FFFFFF").s().p("ABOC0IAAkJIiREJIhVAAIAAlnIBLAAIAAEKICPkKIBXAAIAAFng");
	this.shape_567.setTransform(897.1,571.9);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#FFFFFF").s().p("ABIC0IAAiYIiOAAIAACYIhQAAIAAlnIBQAAIAACQICOAAIAAiQIBPAAIAAFng");
	this.shape_568.setTransform(858.9,571.9);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#FFFFFF").s().p("AgnC0IAAknIhxAAIAAhAIExAAIAABAIhwAAIAAEng");
	this.shape_569.setTransform(824,571.9);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#FFFFFF").s().p("ABrC0IgghaIiZAAIggBaIhPAAICJlnIBoAAICKFngAA6AjIg6ijIg9CjIB3AAg");
	this.shape_570.setTransform(789.3,571.9);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#FFFFFF").s().p("AisCuIADg5QAGADAIABIAQABQAZABAMgeQAMgeAEhCQAEhDAAhvID/AAIAAFnIhQAAIAAktIhjAAQAABJgEA4QgDA5gLAnQgLAngWAVQgVAUglAAQgjAAgWgIg");
	this.shape_571.setTransform(748.9,572.1);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#FFFFFF").s().p("ABFC0IAAktIiKAAIAAEtIhQAAIAAlnIEqAAIAAFng");
	this.shape_572.setTransform(712.7,571.9);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#FFFFFF").s().p("AgxCkQgsgWgZgpQgZgpAAg8QAAg3AbgqQAZgqAtgWQAsgXA3gBQAWAAAXAEQAYADAVAGIgDA8QgRgHgUgDQgTgEgTAAQgmAAgbAQQgcAQgQAcQgPAdgBAlQAAAnAPAcQAPAdAcAPQAaAQAoAAQATAAAUgDQATgEATgIIADA7QgVAHgXAEQgYAEgXAAQg6gBgsgVg");
	this.shape_573.setTransform(677.8,571.9);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#FFFFFF").s().p("Ah3C0IAAlnIDqAAIAAA3IicAAIAABfICVAAIAAA1IiVAAIAABlIChAAIAAA3g");
	this.shape_574.setTransform(647,571.9);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#FFFFFF").s().p("AAFC0IiNAAIAAlnIDyAAIAAA3IilAAIAABXIA9AAQApAAAeALQAfALAQAXQARAYAAAnQAAA5gjAaQghAag+AAIgCAAgAg7CDIAwAAQAhAAASgPQASgOABghQgBgfgUgOQgUgNgfAAIguAAg");
	this.shape_575.setTransform(615.1,571.9);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#FFFFFF").s().p("AgoC2QgTgDgRgGQgxgVgZgsQgZgsgBhAQABg2AUgqQAVgqAngXQAngXA4gBQA5ABAoAXQAnAWAUAqQAVAqAAA3QAAA4gVApQgUAqgnAXQgoAXg5ABQgVAAgTgEgAgsh1QgRAMgLATQgLATgFAXQgEAXAAAVQAAAWAEAXQAFAWALAUQALATASAMQASAMAZAAQAbAAASgMQASgMAKgTQALgTAFgWQAEgXAAgXQAAgWgEgXQgFgWgLgUQgKgTgSgLQgSgMgbAAQgaAAgSAMg");
	this.shape_576.setTransform(561.7,571.9);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#FFFFFF").s().p("AgxCkQgsgWgZgpQgZgpAAg8QAAg3AbgqQAZgqAtgWQAsgXA3gBQAWAAAXAEQAYADAVAGIgDA8QgRgHgUgDQgTgEgTAAQgmAAgbAQQgcAQgQAcQgPAdgBAlQAAAnAPAcQAPAdAcAPQAaAQAoAAQATAAAUgDQATgEATgIIADA7QgVAHgXAEQgYAEgXAAQg6gBgsgVg");
	this.shape_577.setTransform(525.9,571.9);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#FFFFFF").s().p("Ah3C0IAAlnIDqAAIAAA3IicAAIAABfICVAAIAAA1IiVAAIAABlIChAAIAAA3g");
	this.shape_578.setTransform(1516.1,504.7);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#FFFFFF").s().p("AgnC0IAAkoIhxAAIAAg/IExAAIAAA/IhxAAIAAEog");
	this.shape_579.setTransform(1484.3,504.7);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#FFFFFF").s().p("ABOC0IAAkIIiREIIhVAAIAAlnIBLAAIAAEKICPkKIBXAAIAAFng");
	this.shape_580.setTransform(1449.2,504.7);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#FFFFFF").s().p("AiHC0IAAlnICAAAQAlAAAhALQAhAKATAZQAUAYABApQgBApgUAaQgTAZghAMQggAMgmgBIgyAAIAACFgAg5gGIAcAAQAWABASgFQAUgEAMgOQAMgNAAgbQAAgfgVgNQgVgOglABIghAAg");
	this.shape_581.setTransform(1415,504.7);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#FFFFFF").s().p("AhiC0QgPgBgMgDIACg4IAQADQALACAKAAQAQAAAKgMQAKgMALgWIiIkEIBYAAIBZDCIBajCIBUAAIiREWQgJATgMATQgMAUgSAOQgTANgcAAQgRAAgOgCg");
	this.shape_582.setTransform(1379.9,504.9);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#FFFFFF").s().p("AgnC0IAAkoIhxAAIAAg/IExAAIAAA/IhwAAIAAEog");
	this.shape_583.setTransform(1346.7,504.7);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#FFFFFF").s().p("AA7C0IiJisIAACsIhQAAIAAlnIBQAAIAACcICBicIBfAAIiXCoICkC/g");
	this.shape_584.setTransform(1314.8,504.7);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#FFFFFF").s().p("ABrC0IgghaIiZAAIggBaIhPAAICJlnIBoAAICKFngAA6AjIg6ijIg9CjIB3AAg");
	this.shape_585.setTransform(1276.1,504.7);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#FFFFFF").s().p("AgoC6IAAgpQgqAAgegKQgegJgUgSQgYgVgNgcQgOgdABgjQgBglAOgcQANgcAYgTQAUgRAegKQAegIAqgBIAAgfIBQAAIAAAfQArABAeAIQAeAKAVAQQAYATANAcQAMAcAAAmQAAAigMAeQgNAdgYAUQgVASgfAJQgdAKgrAAIAAApgAAmBgQAugCAZgaQAZgcAAgtQAAgegLgVQgLgWgVgNQgWgMgfAAgAhZhbQgVANgMAWQgLAVABAeQAAAtAZAcQAYAaAtACIAAjHQgeAAgVAMg");
	this.shape_586.setTransform(1234.1,504.7);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#FFFFFF").s().p("ABrC0IgghaIiZAAIggBaIhPAAICJlnIBoAAICKFngAA6AjIg6ijIg9CjIB3AAg");
	this.shape_587.setTransform(1176.2,504.7);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#FFFFFF").s().p("ABIC0IAAiYIiOAAIAACYIhQAAIAAlnIBQAAIAACPICOAAIAAiPIBPAAIAAFng");
	this.shape_588.setTransform(1138.3,504.7);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#FFFFFF").s().p("AgoC2QgTgDgRgGQgxgVgZgsQgZgsgBhAQABg2AUgqQAVgqAngXQAngXA4gBQA5ABAoAXQAnAWAUAqQAVAqAAA3QAAA4gVApQgUAqgnAXQgoAXg5ABQgVAAgTgEgAgsh1QgRAMgLATQgLATgFAXQgEAXAAAVQAAAWAEAXQAFAWALAUQALATASAMQASAMAZAAQAbAAASgMQASgMAKgTQALgTAFgWQAEgXAAgXQAAgWgEgXQgFgWgLgUQgKgTgSgLQgSgMgbAAQgaAAgSAMg");
	this.shape_589.setTransform(1083.4,504.7);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#FFFFFF").s().p("AgnC0IAAkoIhxAAIAAg/IExAAIAAA/IhwAAIAAEog");
	this.shape_590.setTransform(1047.8,504.7);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#FFFFFF").s().p("Ah3C0IAAlnIDqAAIAAA3IicAAIAABfICVAAIAAA1IiVAAIAABlIChAAIAAA3g");
	this.shape_591.setTransform(1017.7,504.7);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#FFFFFF").s().p("AgcC0IAAikIiHAAIAACkIhQAAIAAlnIBQAAIAACOICHAAIAAiOIBPAAIAACOIBHAAQAiAAAbALQAcAMAQAXQAQAYABAmQAAAngQAYQgQAYgaALQgbALgjAAgAAxB+IA1AAQAdAAAQgOQARgOAAgdQAAgYgLgLQgKgLgSgEQgSgDgVAAIglAAg");
	this.shape_592.setTransform(975.8,504.7);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#FFFFFF").s().p("ABrC0IgghaIiZAAIggBaIhPAAICJlnIBoAAICKFngAA6AjIg6ijIg9CjIB3AAg");
	this.shape_593.setTransform(928.6,504.7);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#FFFFFF").s().p("AA7DoIiJirIAACrIhQAAIAAlnIBQAAIAACbICBibIBfAAIiXCoICkC/gAgwieIAnhJIBKAAIg8BJg");
	this.shape_594.setTransform(893.8,499.5);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#FFFFFF").s().p("ABrC0IgghaIiZAAIggBaIhPAAICJlnIBoAAICKFngAA6AjIg6ijIg9CjIB3AAg");
	this.shape_595.setTransform(855.1,504.7);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#FFFFFF").s().p("AisCuIADg5QAGADAIABIAQABQAZABAMgeQAMgeAEhCQAEhDAAhvID/AAIAAFnIhQAAIAAktIhjAAQAABJgEA4QgDA5gLAnQgLAngWAVQgVAUglAAQgjAAgWgIg");
	this.shape_596.setTransform(814.7,504.9);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#FFFFFF").s().p("ABFC0IAAktIiKAAIAAEtIhQAAIAAlnIErAAIAAFng");
	this.shape_597.setTransform(778.5,504.7);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#FFFFFF").s().p("AgoC2QgTgDgRgGQgxgVgZgsQgZgsgBhAQABg2AUgqQAVgqAngXQAngXA4gBQA5ABAoAXQAnAWAUAqQAVAqAAA3QAAA4gVApQgUAqgnAXQgoAXg5ABQgVAAgTgEgAgsh1QgRAMgLATQgLATgFAXQgEAXAAAVQAAAWAEAXQAFAWALAUQALATASAMQASAMAZAAQAbAAASgMQASgMAKgTQALgTAFgWQAEgXAAgXQAAgWgEgXQgFgWgLgUQgKgTgSgLQgSgMgbAAQgaAAgSAMg");
	this.shape_598.setTransform(723.8,504.7);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#FFFFFF").s().p("AhwC0IAAlnIDhAAIAAA/IiRAAIAAEog");
	this.shape_599.setTransform(692.2,504.7);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#FFFFFF").s().p("Ah3C0IAAlnIDqAAIAAA3IicAAIAABfICVAAIAAA1IiVAAIAABlIChAAIAAA3g");
	this.shape_600.setTransform(646.8,504.7);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#FFFFFF").s().p("AgnC0IAAkoIhxAAIAAg/IExAAIAAA/IhwAAIAAEog");
	this.shape_601.setTransform(615.1,504.7);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#FFFFFF").s().p("Ah3C0IAAlnIDqAAIAAA3IicAAIAABfICVAAIAAA1IiVAAIAABlIChAAIAAA3g");
	this.shape_602.setTransform(585,504.7);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#FFFFFF").s().p("ABIC0IAAiYIiOAAIAACYIhQAAIAAlnIBQAAIAACPICOAAIAAiPIBPAAIAAFng");
	this.shape_603.setTransform(550,504.7);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#FFFFFF").s().p("AgxCkQgsgWgZgpQgZgpAAg8QAAg3AbgqQAZgqAtgWQAsgXA3gBQAWAAAXAEQAYADAVAGIgDA8QgRgHgUgDQgTgEgTAAQgmAAgbAQQgcAQgQAcQgPAdgBAlQAAAnAPAcQAPAdAcAPQAaAQAoAAQATAAAUgDQATgEATgIIADA7QgVAHgXAEQgYAEgXAAQg6gBgsgVg");
	this.shape_604.setTransform(515,504.7);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#FFFFFF").s().p("Ah3C0IAAlnIDqAAIAAA3IicAAIAABfICVAAIAAA1IiVAAIAABlIChAAIAAA3g");
	this.shape_605.setTransform(484.2,504.7);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#FFFFFF").s().p("AisCuIADg5QAGADAIABIAQABQAZABAMgeQAMgeAEhCQAEhDAAhvID/AAIAAFnIhQAAIAAktIhjAAQAABJgEA4QgDA5gLAnQgLAngWAVQgVAUglAAQgjAAgWgIg");
	this.shape_606.setTransform(446.7,504.9);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#FFFFFF").s().p("AgoC2QgTgDgRgGQgxgVgZgsQgZgsgBhAQABg2AUgqQAVgqAngXQAngXA4gBQA5ABAoAXQAnAWAUAqQAVAqAAA3QAAA4gVApQgUAqgnAXQgoAXg5ABQgVAAgTgEgAgsh1QgRAMgLATQgLATgFAXQgEAXAAAVQAAAWAEAXQAFAWALAUQALATASAMQASAMAZAAQAbAAASgMQASgMAKgTQALgTAFgWQAEgXAAgXQAAgWgEgXQgFgWgLgUQgKgTgSgLQgSgMgbAAQgaAAgSAMg");
	this.shape_607.setTransform(409.5,504.7);

	this.instance_15 = new lib.hand_mc();
	this.instance_15.parent = this;
	this.instance_15.setTransform(474.9,281.2,1,1,0,0,0,52.2,68.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554}]}).to({state:[]},45).wait(145));

	// BG
	this.instance_16 = new lib.bg();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-13,-11);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({_off:true},45).wait(145));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(947,529,1946,1102);
// library properties:
lib.properties = {
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/EVN_app_main_v6_ani_atlas_.png", id:"EVN_app_main_v6_ani_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;