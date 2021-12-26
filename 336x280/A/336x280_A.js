(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,71);


(lib.Sonicare_oral_a_cut1_copy1_336x280px = function() {
	this.initialize(img.Sonicare_oral_a_cut1_copy1_336x280px);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.Sonicare_oral_a_cut1_pic_336x280px = function() {
	this.initialize(img.Sonicare_oral_a_cut1_pic_336x280px);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.Sonicare_oral_a_cut2_copy1_336x280px = function() {
	this.initialize(img.Sonicare_oral_a_cut2_copy1_336x280px);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.Sonicare_oral_a_cut2_pic1_336x280px = function() {
	this.initialize(img.Sonicare_oral_a_cut2_pic1_336x280px);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.Sonicare_oral_a_cut3_copy1_336x280px = function() {
	this.initialize(img.Sonicare_oral_a_cut3_copy1_336x280px);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.Sonicare_oral_a_cut3_pic1_336x280px = function() {
	this.initialize(img.Sonicare_oral_a_cut3_pic1_336x280px);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.Sonicare_oral_a_cut4_copy1_336x280px = function() {
	this.initialize(img.Sonicare_oral_a_cut4_copy1_336x280px);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.Sonicare_oral_a_cut4_pic1_336x280px = function() {
	this.initialize(img.Sonicare_oral_a_cut4_pic1_336x280px);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.logo_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.logo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(0,0,81,71), null);


(lib.cut4_text = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Sonicare_oral_a_cut4_copy1_336x280px();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cut4_text, new cjs.Rectangle(0,0,336,280), null);


(lib.cut4_bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Sonicare_oral_a_cut4_pic1_336x280px();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cut4_bg, new cjs.Rectangle(0,0,336,280), null);


(lib.cut3_text = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Sonicare_oral_a_cut3_copy1_336x280px();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cut3_text, new cjs.Rectangle(0,0,336,280), null);


(lib.cut3_bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Sonicare_oral_a_cut3_pic1_336x280px();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cut3_bg, new cjs.Rectangle(0,0,336,280), null);


(lib.cut2_text = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Sonicare_oral_a_cut2_copy1_336x280px();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cut2_text, new cjs.Rectangle(0,0,336,280), null);


(lib.cut2_bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Sonicare_oral_a_cut2_pic1_336x280px();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cut2_bg, new cjs.Rectangle(0,0,336,280), null);


(lib.cut1_text = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Sonicare_oral_a_cut1_copy1_336x280px();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cut1_text, new cjs.Rectangle(0,0,336,280), null);


(lib.cut1_bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Sonicare_oral_a_cut1_pic_336x280px();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cut1_bg, new cjs.Rectangle(0,0,336,280), null);


// stage content:
(lib._336x280_A = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [359];
	// timeline functions:
	this.frame_359 = function() {
		this.stop();Ï
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(359).call(this.frame_359).wait(1));

	// logo
	this.instance = new lib.logo_1();
	this.instance.setTransform(54,32.5,1,1,0,0,0,40.5,35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(360));

	// cut4_text
	this.instance_1 = new lib.cut4_text();
	this.instance_1.setTransform(249.65,125.5,1,1,0,0,0,150.5,125.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(125).to({_off:false},0).to({x:150.5,alpha:1},4,cjs.Ease.get(1)).to({_off:true},51).wait(125).to({_off:false,x:249.65,alpha:0},0).to({x:150.5,alpha:1},4,cjs.Ease.get(1)).wait(51));

	// cut3_text
	this.instance_2 = new lib.cut3_text();
	this.instance_2.setTransform(150.5,124.5,1,1,0,0,0,150.5,125.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(80).to({_off:false},0).to({alpha:1},3).wait(40).to({alpha:0},3).to({_off:true},1).wait(133).to({_off:false},0).to({alpha:1},3).wait(40).to({alpha:0},3).to({_off:true},1).wait(53));

	// cut2_text
	this.instance_3 = new lib.cut2_text();
	this.instance_3.setTransform(150.5,125.5,1,1,0,0,0,150.5,125.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({_off:false},0).to({alpha:1},5,cjs.Ease.get(-1)).wait(35).to({alpha:0},3).to({_off:true},1).wait(136).to({_off:false},0).to({alpha:1},5,cjs.Ease.get(-1)).wait(35).to({alpha:0},3).to({_off:true},1).wait(97));

	// cut1_text
	this.instance_4 = new lib.cut1_text();
	this.instance_4.setTransform(150.55,125.5,0.614,0.614,0,0,0,150.5,125.5);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:0.8163,scaleY:0.8163,x:150.5,y:125.55,alpha:1},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:125.5},35).to({scaleX:1.2956,scaleY:1.2956,x:150.55,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(135).to({_off:false,scaleX:0.614,scaleY:0.614},0).to({scaleX:0.8163,scaleY:0.8163,x:150.5,y:125.55,alpha:1},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:125.5},35).to({scaleX:1.2956,scaleY:1.2956,x:150.55,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(135));

	// cut3_bg
	this.instance_5 = new lib.cut3_bg();
	this.instance_5.setTransform(150.65,125.45,0.9131,0.9131,0,0,0,150.6,125.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(81).to({_off:false},0).to({scaleX:0.9993,scaleY:0.9993,x:150.7,y:125.5,alpha:1},3,cjs.Ease.get(1)).to({regX:150.5,scaleX:1.1195,scaleY:1.1195,x:150.55},39).to({regY:125.4,scaleX:1.6069,scaleY:1.6069,x:150.6,y:125.45,alpha:0},6,cjs.Ease.get(-1)).to({_off:true},1).wait(131).to({_off:false,regX:150.6,regY:125.5,scaleX:0.9131,scaleY:0.9131,x:150.65},0).to({scaleX:0.9993,scaleY:0.9993,x:150.7,y:125.5,alpha:1},3,cjs.Ease.get(1)).to({regX:150.5,scaleX:1.1195,scaleY:1.1195,x:150.55},39).to({regY:125.4,scaleX:1.6069,scaleY:1.6069,x:150.6,y:125.45,alpha:0},6,cjs.Ease.get(-1)).to({_off:true},1).wait(50));

	// cut4_bg
	this.instance_6 = new lib.cut4_bg();
	this.instance_6.setTransform(150.55,125.4,1.2554,1.2554,0,0,0,150.5,125.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(126).to({_off:false},0).to({regY:125.5,scaleX:1,scaleY:1,x:150.5,y:125.5},6,cjs.Ease.get(1)).to({_off:true},48).wait(126).to({_off:false,regY:125.4,scaleX:1.2554,scaleY:1.2554,x:150.55,y:125.4},0).to({regY:125.5,scaleX:1,scaleY:1,x:150.5,y:125.5},6,cjs.Ease.get(1)).wait(48));

	// cut2_bg
	this.instance_7 = new lib.cut2_bg();
	this.instance_7.setTransform(150.5,125.55,1.2927,1.2927,0,0,0,150.5,125.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(39).to({_off:false},0).to({scaleX:1.1405,scaleY:1.1405,x:150.55,y:125.65,alpha:1},5,cjs.Ease.get(1)).to({regY:125.4,scaleX:1.001,scaleY:1.001,x:150.6,y:125.45},35).to({regY:125.5,scaleX:1,scaleY:1,x:150.5,y:125.5,alpha:0},5,cjs.Ease.get(-1)).to({_off:true},1).wait(134).to({_off:false,scaleX:1.2927,scaleY:1.2927,y:125.55},0).to({scaleX:1.1405,scaleY:1.1405,x:150.55,y:125.65,alpha:1},5,cjs.Ease.get(1)).to({regY:125.4,scaleX:1.001,scaleY:1.001,x:150.6,y:125.45},35).to({regY:125.5,scaleX:1,scaleY:1,x:150.5,y:125.5,alpha:0},5,cjs.Ease.get(-1)).to({_off:true},1).wait(95));

	// cut1_bg
	this.instance_8 = new lib.cut1_bg();
	this.instance_8.setTransform(150.5,125.5,1,1,0,0,0,150.5,125.5);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({alpha:1},3).to({_off:true},82).wait(95).to({_off:false,alpha:0},0).to({alpha:1},3).to({_off:true},82).wait(95));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(76.8,64,371.9,309.9);
// library properties:
lib.properties = {
	id: '09D59F23DD554ED1A85B484CCBFAD1F0',
	width: 336,
	height: 280,
	fps: 18,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/logo.png?1640361679592", id:"logo"},
		{src:"images/Sonicare_oral_a_cut1_copy1_336x280px.png?1640361679592", id:"Sonicare_oral_a_cut1_copy1_336x280px"},
		{src:"images/Sonicare_oral_a_cut1_pic_336x280px.png?1640361679592", id:"Sonicare_oral_a_cut1_pic_336x280px"},
		{src:"images/Sonicare_oral_a_cut2_copy1_336x280px.png?1640361679592", id:"Sonicare_oral_a_cut2_copy1_336x280px"},
		{src:"images/Sonicare_oral_a_cut2_pic1_336x280px.png?1640361679592", id:"Sonicare_oral_a_cut2_pic1_336x280px"},
		{src:"images/Sonicare_oral_a_cut3_copy1_336x280px.png?1640361679592", id:"Sonicare_oral_a_cut3_copy1_336x280px"},
		{src:"images/Sonicare_oral_a_cut3_pic1_336x280px.png?1640361679592", id:"Sonicare_oral_a_cut3_pic1_336x280px"},
		{src:"images/Sonicare_oral_a_cut4_copy1_336x280px.png?1640361679592", id:"Sonicare_oral_a_cut4_copy1_336x280px"},
		{src:"images/Sonicare_oral_a_cut4_pic1_336x280px.png?1640361679592", id:"Sonicare_oral_a_cut4_pic1_336x280px"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['09D59F23DD554ED1A85B484CCBFAD1F0'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;