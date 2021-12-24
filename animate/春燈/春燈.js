(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"春燈_atlas_1", frames: [[0,0,333,315],[413,0,82,229],[335,0,76,428]]}
];


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



(lib.CachedBmp_3 = function() {
	this.initialize(ss["春燈_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["春燈_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["春燈_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.燈本體 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 燈本體
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.燈本體, new cjs.Rectangle(0,0,166.5,157.5), null);


(lib.燈下線 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 燈下線
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.燈下線, new cjs.Rectangle(0,0,41,114.5), null);


(lib.春 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 遮色片1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgVA0IAAhnIArAAIAABng");
	var mask_graphics_1 = new cjs.Graphics().p("AglA0IAAhnIBLAAIAABng");
	var mask_graphics_2 = new cjs.Graphics().p("Ag0A0IAAhnIBpAAIAABng");
	var mask_graphics_3 = new cjs.Graphics().p("AhEA0IAAhnICJAAIAABng");
	var mask_graphics_4 = new cjs.Graphics().p("AhUA0IAAhnICpAAIAABng");
	var mask_graphics_5 = new cjs.Graphics().p("AhkA0IAAhnIDJAAIAABng");
	var mask_graphics_6 = new cjs.Graphics().p("Ah0A0IAAhnIDoAAIAABng");
	var mask_graphics_7 = new cjs.Graphics().p("AiEA0IAAhnIEJAAIAABng");
	var mask_graphics_8 = new cjs.Graphics().p("AiUA0IAAhnIEoAAIAABng");
	var mask_graphics_9 = new cjs.Graphics().p("AijA0IAAhnIFHAAIAABng");
	var mask_graphics_10 = new cjs.Graphics().p("AizA0IAAhnIFnAAIAABng");
	var mask_graphics_11 = new cjs.Graphics().p("AjDA0IAAhnIGHAAIAABng");
	var mask_graphics_12 = new cjs.Graphics().p("AjTA0IAAhnIGnAAIAABng");
	var mask_graphics_13 = new cjs.Graphics().p("AjiA0IAAhnIHFAAIAABng");
	var mask_graphics_14 = new cjs.Graphics().p("AjyA0IAAhnIHlAAIAABng");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:8.525,y:10.875}).wait(1).to({graphics:mask_graphics_1,x:10.125,y:10.725}).wait(1).to({graphics:mask_graphics_2,x:11.725,y:10.525}).wait(1).to({graphics:mask_graphics_3,x:13.325,y:10.375}).wait(1).to({graphics:mask_graphics_4,x:14.95,y:10.175}).wait(1).to({graphics:mask_graphics_5,x:16.55,y:10.025}).wait(1).to({graphics:mask_graphics_6,x:18.15,y:9.825}).wait(1).to({graphics:mask_graphics_7,x:19.75,y:9.675}).wait(1).to({graphics:mask_graphics_8,x:21.35,y:9.525}).wait(1).to({graphics:mask_graphics_9,x:22.95,y:9.325}).wait(1).to({graphics:mask_graphics_10,x:24.55,y:9.175}).wait(1).to({graphics:mask_graphics_11,x:26.175,y:8.975}).wait(1).to({graphics:mask_graphics_12,x:27.775,y:8.825}).wait(1).to({graphics:mask_graphics_13,x:29.375,y:8.625}).wait(1).to({graphics:mask_graphics_14,x:30.975,y:8.475}).wait(87));

	// 一
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231916").s().p("AiRAZQgKgHAAgGQAAgFAbgBQA+gFBPgLQA1gIAigJQALgDAFAAQAKAAASAJQAMAFAAAIQAAAGgTADQgWAGhMAKQhxAOgiAAQgaAAgLgGg");
	this.shape.setTransform(31,10.575);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(101));

	// 遮色片2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_14 = new cjs.Graphics().p("AgYA0IAAhnIAxAAIAABng");
	var mask_1_graphics_15 = new cjs.Graphics().p("AgoA0IAAhnIBRAAIAABng");
	var mask_1_graphics_16 = new cjs.Graphics().p("Ag4A0IAAhnIByAAIAABng");
	var mask_1_graphics_17 = new cjs.Graphics().p("AhIA0IAAhnICRAAIAABng");
	var mask_1_graphics_18 = new cjs.Graphics().p("AhYA0IAAhnICxAAIAABng");
	var mask_1_graphics_19 = new cjs.Graphics().p("AhoA0IAAhnIDRAAIAABng");
	var mask_1_graphics_20 = new cjs.Graphics().p("Ah5A0IAAhnIDyAAIAABng");
	var mask_1_graphics_21 = new cjs.Graphics().p("AiJA0IAAhnIESAAIAABng");
	var mask_1_graphics_22 = new cjs.Graphics().p("AiYA0IAAhnIExAAIAABng");
	var mask_1_graphics_23 = new cjs.Graphics().p("AioA0IAAhnIFRAAIAABng");
	var mask_1_graphics_24 = new cjs.Graphics().p("Ai5A0IAAhnIFyAAIAABng");
	var mask_1_graphics_25 = new cjs.Graphics().p("AjJA0IAAhnIGTAAIAABng");
	var mask_1_graphics_26 = new cjs.Graphics().p("AjYA0IAAhnIGxAAIAABng");
	var mask_1_graphics_27 = new cjs.Graphics().p("AjoA0IAAhnIHRAAIAABng");
	var mask_1_graphics_28 = new cjs.Graphics().p("Aj4A0IAAhnIHxAAIAABng");
	var mask_1_graphics_29 = new cjs.Graphics().p("AkIA0IAAhnIISAAIAABng");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_1_graphics_14,x:9.175,y:18.85}).wait(1).to({graphics:mask_1_graphics_15,x:10.325,y:18.8}).wait(1).to({graphics:mask_1_graphics_16,x:11.5,y:18.75}).wait(1).to({graphics:mask_1_graphics_17,x:12.675,y:18.7}).wait(1).to({graphics:mask_1_graphics_18,x:13.825,y:18.6}).wait(1).to({graphics:mask_1_graphics_19,x:14.975,y:18.55}).wait(1).to({graphics:mask_1_graphics_20,x:16.15,y:18.5}).wait(1).to({graphics:mask_1_graphics_21,x:17.3,y:18.45}).wait(1).to({graphics:mask_1_graphics_22,x:18.475,y:18.4}).wait(1).to({graphics:mask_1_graphics_23,x:19.625,y:18.35}).wait(1).to({graphics:mask_1_graphics_24,x:20.8,y:18.3}).wait(1).to({graphics:mask_1_graphics_25,x:21.95,y:18.25}).wait(1).to({graphics:mask_1_graphics_26,x:23.1,y:18.15}).wait(1).to({graphics:mask_1_graphics_27,x:24.275,y:18.1}).wait(1).to({graphics:mask_1_graphics_28,x:25.45,y:18.05}).wait(1).to({graphics:mask_1_graphics_29,x:26.6,y:18}).wait(72));

	// 二
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231916").s().p("AiEAZQgPgEAAgGQAAgJAXgBQBhgJBigTIAegFQAIAAAUAFQATAHAAAEQAAAIgXAEIilAWQgtAHgXAAQgOAAgKgEg");
	this.shape_1.setTransform(30.425,19.35);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(14).to({_off:false},0).wait(87));

	// 遮色片3 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_29 = new cjs.Graphics().p("AgWA6IAAhzIAtAAIAABzg");
	var mask_2_graphics_30 = new cjs.Graphics().p("AgoA6IAAhzIBRAAIAABzg");
	var mask_2_graphics_31 = new cjs.Graphics().p("Ag7A6IAAhzIB2AAIAABzg");
	var mask_2_graphics_32 = new cjs.Graphics().p("AhMA6IAAhzICZAAIAABzg");
	var mask_2_graphics_33 = new cjs.Graphics().p("AheA6IAAhzIC9AAIAABzg");
	var mask_2_graphics_34 = new cjs.Graphics().p("AhwA6IAAhzIDiAAIAABzg");
	var mask_2_graphics_35 = new cjs.Graphics().p("AiCA6IAAhzIEFAAIAABzg");
	var mask_2_graphics_36 = new cjs.Graphics().p("AiVA6IAAhzIEqAAIAABzg");
	var mask_2_graphics_37 = new cjs.Graphics().p("AinA6IAAhzIFOAAIAABzg");
	var mask_2_graphics_38 = new cjs.Graphics().p("Ai5A6IAAhzIFzAAIAABzg");
	var mask_2_graphics_39 = new cjs.Graphics().p("AjKA6IAAhzIGVAAIAABzg");
	var mask_2_graphics_40 = new cjs.Graphics().p("AjdA6IAAhzIG7AAIAABzg");
	var mask_2_graphics_41 = new cjs.Graphics().p("AjvA6IAAhzIHfAAIAABzg");
	var mask_2_graphics_42 = new cjs.Graphics().p("AkBA6IAAhzIIDAAIAABzg");
	var mask_2_graphics_43 = new cjs.Graphics().p("AkTA6IAAhzIInAAIAABzg");
	var mask_2_graphics_44 = new cjs.Graphics().p("AklA6IAAhzIJLAAIAABzg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(29).to({graphics:mask_2_graphics_29,x:-2.325,y:31.225}).wait(1).to({graphics:mask_2_graphics_30,x:-0.225,y:31.075}).wait(1).to({graphics:mask_2_graphics_31,x:1.9,y:30.925}).wait(1).to({graphics:mask_2_graphics_32,x:4.025,y:30.775}).wait(1).to({graphics:mask_2_graphics_33,x:6.125,y:30.625}).wait(1).to({graphics:mask_2_graphics_34,x:8.25,y:30.475}).wait(1).to({graphics:mask_2_graphics_35,x:10.35,y:30.325}).wait(1).to({graphics:mask_2_graphics_36,x:12.45,y:30.175}).wait(1).to({graphics:mask_2_graphics_37,x:14.6,y:30.075}).wait(1).to({graphics:mask_2_graphics_38,x:16.7,y:29.925}).wait(1).to({graphics:mask_2_graphics_39,x:18.8,y:29.775}).wait(1).to({graphics:mask_2_graphics_40,x:20.925,y:29.625}).wait(1).to({graphics:mask_2_graphics_41,x:23.025,y:29.475}).wait(1).to({graphics:mask_2_graphics_42,x:25.15,y:29.325}).wait(1).to({graphics:mask_2_graphics_43,x:27.275,y:29.175}).wait(1).to({graphics:mask_2_graphics_44,x:29.375,y:29.025}).wait(57));

	// 三
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231916").s().p("AjgAjQgZgLAAgHQAAgIAQgCQBUgBAigIQBBgKBbgIQBOgIAugMIAWgEQAFAAAgAMQAaAOAAAMQAAAKgkAAQgugCg0AAQg5AAhWAKQg/AEhJAWQgTAHgGAAQgMAAgYgKg");
	this.shape_2.setTransform(31.675,27.725);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(29).to({_off:false},0).wait(72));

	// 遮色片4 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_44 = new cjs.Graphics().p("AgBA7QgSAAgPgLQgUgOgEgZQgEgXAPgUQAKgOASgGQARgHAQAEQARAEANAOQAMANADASQADAQgIARQgIARgPAJQgNAIgRAAIgCAAg");
	var mask_3_graphics_45 = new cjs.Graphics().p("AgjBhQgPgKgHgSQgHgSAFgSQAFgSAQgNIAEgCIgGgGQgNgOgDgSQgCgRAIgRQAIgRAPgJQAQgJARABQATABAOALQAOALAGASQAGASgFARQgGAVgVALQAQAMAEARQAGASgHASQgGASgOALQgPALgSAAQgTAAgPgKg");
	var mask_3_graphics_46 = new cjs.Graphics().p("Ag6CzQgTgJgJgWQgIgVAHgUQAEgNAJgJQAGgGAGgDQgHgQADgQQACgRANgOQAHgHAIgEIgEgMQgEgYAPgUQAKgOASgGIABgBIAAgBQgPgJgHgRQgHgQADgRQACgRANgOQALgNARgEQARgEARAGQARAFALAOQAKAOACASQABASgIAQQgLAUgXAHQAHAEAFAGQAMANADASQADARgIAQQgIARgPAJIgCABQADAIABAJQABASgIAQQgIANgMAIQACAHABAHQACAQgHAPQgGAQgOAJQgMAKgRABIgEABQgOAAgNgHg");
	var mask_3_graphics_47 = new cjs.Graphics().p("AhGDlQgSAAgOgLQgUgOgEgZQgEgYAOgUQALgOARgGQAMgFALABQgGgKgCgMQgDgSAIgRQAIgQAQgJQAKgGAMgCIgDgFQgHgRAFgSQAFgSAQgNIACgCQgJgLgDgPQgGgeARgXQAHgKAKgGQgDgLAAgMQACgXAOgPQARgTAYgBQAagBASASQASATAAAZQAAARgJAPQgIANgNAIIACAIQAEATgHASQgHASgOAKQAHAJADAKQAFASgGARQgGASgPALQgLAJgPACIADAJQAGARgFARQgGAWgVANQgPAJgQAAQAGAJABAMQADARgHARQgIARgPAJQgOAIgQAAIgEAAg");
	var mask_3_graphics_48 = new cjs.Graphics().p("AhnD4QgRgEgNgOQgNgOgCgSQgDgRAIgRQAIgRAQgJQAPgJATABIAEABIACgHQAJgaAagLIAGgBIAAgNQADgRAMgNQAKgKALgFQgFgOADgQQADgUAMgNIAEgEQgBgKADgKQAFgTAQgNQgGgJgBgLQgDgRAIgRIAGgJQgJgMgCgPQgDgRAIgRQAIgRAQgJQAPgJATABQASABAOALQAOALAGASQAGASgFARQgCAKgHAJQAFAHADAJQAGASgFARQgFASgQAMIAFALQAFARgGATQgFAQgMAKIAAAMQgCAUgPAPQgJAKgLAFQADAIAAAJQACASgJAPQgMAWgYAGQABAOgGAMQgHAQgNAJQgMAKgRABIgNAAIgBAEQgGAWgVAMQgPAKgQAAQgGAAgHgCg");
	var mask_3_graphics_49 = new cjs.Graphics().p("AioElQgRgEgLgLQgNgOgCgTQgDgUAIgQQAIgQAQgKQAQgKASAAIAJABQAKgQATgHQASgHASAEIAAgEQADgRAMgNQANgOARgEIALgBQgCgVANgSQAKgOARgHQALgEAKAAQAAgHACgIQAFgSAPgMIABgBQgNgJgHgPQgJgSAEgSQADgTAOgNQAOgOASgDIAJAAQgFgOABgPQACgSAKgOIAGgGQgKgJgFgNQgJgVAHgUQAEgNAKgJQAJgKAMgFQAbgKAYAOQAaAOAEAeQACAQgHAPQgFALgHAIQAGAFAFAIQALASgCATQgBATgOAPQgOAQgTAEQgHABgGAAQAGAOgCARQgDATgMAOIgJAHIABABQARALAGARQAGARgGATQgGASgOALQgPALgTABIgCAAQAAAOgFAMQgIARgPAJQgNAJgQAAQACASgJAPQgMAWgZAHQgPADgNgDQgBAJgEAJQgHAPgNAKQgNAJgRACIgLAAQgEAHgHAFQgNAMgRAEQgHACgIAAQgJAAgIgDg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_3_graphics_44,x:29.3246,y:2.1286}).wait(1).to({graphics:mask_3_graphics_45,x:29.4256,y:7.895}).wait(1).to({graphics:mask_3_graphics_46,x:27.5032,y:15.1013}).wait(1).to({graphics:mask_3_graphics_47,x:25.1568,y:20.1272}).wait(1).to({graphics:mask_3_graphics_48,x:21.6589,y:21.1518}).wait(1).to({graphics:mask_3_graphics_49,x:15.2949,y:26.0564}).wait(52));

	// 四
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231916").s().p("AisD4QAAgGATgIQBcg4AjgjQAlgmAjg8QAbgwAUhGQAPg4ADg6QAAgVgFgTQgDgJAAgEQAEgLAKAAQAJAAAYANQAXANAAAKQAAAFgHALQgHAQgJAjQgWBkgbBFQggBLg+BBQg7A8hJAUQgZAIgOADQgIAAAAgEg");
	this.shape_3.setTransform(17.275,25.175);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(44).to({_off:false},0).wait(57));

	// 遮色片5 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_49 = new cjs.Graphics().p("AgNA6QgRgEgNgOQgNgOgCgSQgDgQAIgRQAIgRAQgJQAPgJASABQASABAOALQAOALAGASQAGASgFAQQgGAWgVAMQgPAKgPAAQgGAAgHgCg");
	var mask_4_graphics_50 = new cjs.Graphics().p("AAJBNQgSgKgIgVIgEgMIgGABQgUADgSgJQgQgJgIgSQgJgRAEgSQADgSAOgOQAOgOASgCQASgDASAJQAQAIAJARQAEAIACAJQAJgCAKABQAOABALAGQAaAPAEAcQACAQgHAQQgHAPgNAKQgNAJgRABIgEAAQgPAAgNgGg");
	var mask_4_graphics_51 = new cjs.Graphics().p("AAmB3QgQgJgJgSQgIgSADgSIABgBIgFABQgQABgOgIQgTgJgIgVQgGgOABgLQgVADgTgMQgPgKgHgQQgHgRADgRQACgRANgNQAMgOARgEQARgEARAGQARAGALAOQAKAOACASIAAAHQASgCARAKQAMAHAIALQAIAMACAOQACAJgCAIQARgCARAJQASAIAIARQAJAQgDATQgCAUgNANQgNAPgVADIgLABQgOAAgNgHg");
	var mask_4_graphics_52 = new cjs.Graphics().p("ABYCEQgSgEgMgOQgHgIgEgIIgFABQgQABgPgHQgSgKgJgVQgFgOABgMQgVADgTgMQgPgKgHgQQgDgHgBgIIgLABQgRABgOgHQgTgKgJgVQgIgWAHgUQAJgaAagKQAMgFAOABQANACALAGQAaAPAEAdQARgEARAGQAQAGALAOQAKAOACASIAAAHQATgDARAKQAMAHAIALIAFAJIANgBQATABAOALQAOALAGASQAGASgFARQgGAWgWAMQgPAJgPAAQgHAAgGgBg");
	var mask_4_graphics_53 = new cjs.Graphics().p("ABrCKIgLgHQgOAJgRABQgTAAgPgKQgPgKgHgSIgDgJQgSACgQgJQgQgJgIgRQgJgSAEgSIAAgEQgJABgKgCQgRgEgNgOQgMgMgDgQQgXAFgVgNQgOgKgHgQQgIgRADgRQADgRAMgNQANgOARgEQAQgEASAGQARAGAKAOQAIALADANQAIgBAIAAQASABAOALQAOALAGASQAGARgEAQQAPgCAQAIQARAJAJAPQAEAIABAJIAEAAQASgBARAMIACABQAGgEAHgDQAagKAZAOQAMAHAIALQAIAMABAOQADAQgHAPQgHAQgNAJQgNAKgRABIgEAAQgPAAgMgGg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(49).to({graphics:mask_4_graphics_49,x:36.6589,y:28.1518}).wait(1).to({graphics:mask_4_graphics_50,x:39.6712,y:32.0934}).wait(1).to({graphics:mask_4_graphics_51,x:43.3106,y:35.0921}).wait(1).to({graphics:mask_4_graphics_52,x:46.5056,y:37.7984}).wait(1).to({graphics:mask_4_graphics_53,x:48.99,y:36.9763}).wait(48));

	// 五
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231916").s().p("AAiBiQgSgLhXhhQgbgegYgWQgWgTgWgKQgJgBAAgHQAAgJAPAAQAVAAArAiQBTBJApAWQAsAXBbAgQANADAAAFQAAAGgMADQhGAQgZAAQgRAAgSgLg");
	this.shape_4.setTransform(50.125,37.525);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(49).to({_off:false},0).wait(52));

	// 遮色片6 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_53 = new cjs.Graphics().p("AhKARIAAghICVAAIAAAhg");
	var mask_5_graphics_54 = new cjs.Graphics().p("AhKAbIAAg1ICVAAIAAA1g");
	var mask_5_graphics_55 = new cjs.Graphics().p("AhKAlIAAhJICVAAIAABJg");
	var mask_5_graphics_56 = new cjs.Graphics().p("AhKAvIAAhdICVAAIAABdg");
	var mask_5_graphics_57 = new cjs.Graphics().p("AhKA5IAAhxICVAAIAABxg");
	var mask_5_graphics_58 = new cjs.Graphics().p("AhKBCIAAiEICVAAIAACEg");
	var mask_5_graphics_59 = new cjs.Graphics().p("AhKBMIAAiXICVAAIAACXg");
	var mask_5_graphics_60 = new cjs.Graphics().p("AhKBWIAAirICVAAIAACrg");
	var mask_5_graphics_61 = new cjs.Graphics().p("AhKBgIAAi/ICVAAIAAC/g");
	var mask_5_graphics_62 = new cjs.Graphics().p("AhKBqIAAjTICVAAIAADTg");
	var mask_5_graphics_63 = new cjs.Graphics().p("AhKB0IAAjnICVAAIAADng");
	var mask_5_graphics_64 = new cjs.Graphics().p("AhKB9IAAj5ICVAAIAAD5g");
	var mask_5_graphics_65 = new cjs.Graphics().p("AhKCHIAAkNICVAAIAAENg");
	var mask_5_graphics_66 = new cjs.Graphics().p("AhKCRIAAkhICVAAIAAEhg");
	var mask_5_graphics_67 = new cjs.Graphics().p("AhKCbIAAk1ICVAAIAAE1g");
	var mask_5_graphics_68 = new cjs.Graphics().p("AhKClIAAlJICVAAIAAFJg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(53).to({graphics:mask_5_graphics_53,x:20.875,y:37.275}).wait(1).to({graphics:mask_5_graphics_54,x:20.625,y:38.2}).wait(1).to({graphics:mask_5_graphics_55,x:20.375,y:39.15}).wait(1).to({graphics:mask_5_graphics_56,x:20.125,y:40.075}).wait(1).to({graphics:mask_5_graphics_57,x:19.875,y:41.025}).wait(1).to({graphics:mask_5_graphics_58,x:19.625,y:41.95}).wait(1).to({graphics:mask_5_graphics_59,x:19.375,y:42.875}).wait(1).to({graphics:mask_5_graphics_60,x:19.125,y:43.825}).wait(1).to({graphics:mask_5_graphics_61,x:18.825,y:44.775}).wait(1).to({graphics:mask_5_graphics_62,x:18.575,y:45.725}).wait(1).to({graphics:mask_5_graphics_63,x:18.325,y:46.65}).wait(1).to({graphics:mask_5_graphics_64,x:18.075,y:47.575}).wait(1).to({graphics:mask_5_graphics_65,x:17.825,y:48.525}).wait(1).to({graphics:mask_5_graphics_66,x:17.575,y:49.45}).wait(1).to({graphics:mask_5_graphics_67,x:17.325,y:50.4}).wait(1).to({graphics:mask_5_graphics_68,x:17.075,y:51.325}).wait(33));

	// 六
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231916").s().p("AgGBoQgFgKgBgHIACgLIABgbQAAgvgEgxQgBgYgFgZIgCgMQAAgJAGAAQAGAAAQAFQAPAGAAAHIgCC7QABAJgHALQgCAKgHAAQgFAAgGgOg");
	this.shape_5.setTransform(22.35,51.2);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(53).to({_off:false},0).wait(48));

	// 遮色片7 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_68 = new cjs.Graphics().p("AgcA0QgQgJgIgRQgJgSAEgRQADgTAOgNQAOgOASgDQARgDASAJQARAJAJAQQAIAQgCATQgDATgMAOQgOAOgVADIgKABQgOAAgNgHg");
	var mask_6_graphics_69 = new cjs.Graphics().p("AgNBBQgNgDgLgJQgIAFgKACQgZAGgWgOQgOgJgHgRQgIgQADgQQADgRAMgOQANgNARgEQAQgEASAGQAKADAIAHIACgCQAPgJASABQAMABAKAFIAAgBQANgNARgEQAQgEASAGQARAFAKAOQALAOABASQACARgJAQQgMAWgaAGQgVAGgTgKQgGAHgIAEQgPAKgPAAQgGAAgHgCg");
	var mask_6_graphics_70 = new cjs.Graphics().p("ABDA9QgKgHgGgKIgHACQgYAGgVgNIgKAHQgPAJgTgBQgJAAgIgDIgHAFQgWANgWgGQgRgEgNgOQgNgOgCgRQgDgRAIgRQAIgQAQgJQAPgJATABQAIAAAIADQAHgGAJgDQARgHARAEQALADAIAFQALgLAPgDQAQgEASAGQARAFAKAOIACADIAHgCQAQgEASAGQARAGAKAOQALAOABARQACASgJAPQgMAWgaAHQgHACgHAAQgRAAgQgKg");
	var mask_6_graphics_71 = new cjs.Graphics().p("ABUBtQgSAAgOgLQgUgOgEgZQgEgYAOgUIAFgFQgIAAgJgCIgMgEQgLANgSAEQgZAGgWgOIgCgBQgJAGgMADQgZAGgWgOQgOgJgHgQQgIgQADgRQADgRAMgOQANgNARgEQAQgEASAGQAIACAHAFQAJgHAMgCQAQgEASAGIAGACQAFgHAIgEQAPgJATABQASABAOALQAKAHAGALIAMAAQASABAOALQAOALAGASQAGARgFARQgEAQgNALQAEAIABAJQADARgHARQgIARgPAJQgOAIgQAAIgEAAg");
	var mask_6_graphics_72 = new cjs.Graphics().p("ABKB7QgQgGgKgNQgJgNgCgRQgBgRAGgPIAFgIIgHgLQgIgQACgPIgEADQgWAMgVgFQgRgDgNgOIgDgEQgGAIgIAGQgPAKgTAAQgUABgPgKQgPgKgGgSQgHgSAEgSQAGgSAQgNQAQgMATgBQATAAARAMQAGAFAFAGQAIgLAMgHQAPgJASABQALABAKAEIACgCQANgMATgDQAUgCAQAIQAPAIAIAQQAJAQgBARIgCAMQAOAIAIAOQAIAQgCATQgCAOgHAKQAOASgBAYQgBAVgPAQQgPARgUADIgJAAQgLAAgLgFg");
	var mask_6_graphics_73 = new cjs.Graphics().p("AAsCgQgOgKgHgQQgIgRADgRQADgRAMgNIAAAAIgGgMQgJgSAEgSQACgLAGgKIgEgHQgHgSAFgSIAEgKQgHgDgHgEIgGgEIgCABQgNALgUABQgTAAgPgKIgCgBQgLAIgQACQgUAEgSgKQgQgJgIgRQgJgSAEgSQADgTAOgNQAOgOASgDQASgDASAJIAJAGQAPgMATgBQATAAAQAMIADACQAKgJAOgDQAQgEASAGQAPAFAKAMQASgCARAIQARAJAJAQQAIAQgCAUQgDATgMAOIgGAFQAFARgGARIgGAMIACACQAIAQgCATQgDAUgMANIAAABQALAOABASQACASgJAPQgMAWgaAHQgHACgIAAQgQAAgQgKg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(68).to({graphics:mask_6_graphics_68,x:21.9774,y:39.7096}).wait(1).to({graphics:mask_6_graphics_69,x:28.6684,y:39.4518}).wait(1).to({graphics:mask_6_graphics_70,x:31.6565,y:39.61}).wait(1).to({graphics:mask_6_graphics_71,x:32.6708,y:43.1248}).wait(1).to({graphics:mask_6_graphics_72,x:31.6933,y:45.7795}).wait(1).to({graphics:mask_6_graphics_73,x:32.9774,y:50.464}).wait(28));

	// 七
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231916").s().p("AA0BPQAEAAADgPQACgMAAg6QAAhAgBgYQAAgKgNgBIgUAAQgeAAg3AMQgQAEgGAAQgPAAgEgEQgLgGAAgGQAAgCAIgBQA0gGBGgSQAhgLAFAAQAHgBAQALQAcAOAAANQAAAEgGAIQgEAJgBBEQAAAUANBHQAAAagOAZQgPATgLABg");
	this.shape_6.setTransform(32.975,50.8);
	this.shape_6._off = true;

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(68).to({_off:false},0).wait(33));

	// 遮色片8 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_73 = new cjs.Graphics().p("AggAhIAAhBIBBAAIAABBg");
	var mask_7_graphics_74 = new cjs.Graphics().p("AgnAhIAAhBIBPAAIAABBg");
	var mask_7_graphics_75 = new cjs.Graphics().p("AguAhIAAhBIBdAAIAABBg");
	var mask_7_graphics_76 = new cjs.Graphics().p("Ag1AhIAAhBIBrAAIAABBg");
	var mask_7_graphics_77 = new cjs.Graphics().p("Ag8AhIAAhBIB5AAIAABBg");
	var mask_7_graphics_78 = new cjs.Graphics().p("AhDAhIAAhBICHAAIAABBg");
	var mask_7_graphics_79 = new cjs.Graphics().p("AhKAhIAAhBICVAAIAABBg");
	var mask_7_graphics_80 = new cjs.Graphics().p("AhRAhIAAhBICjAAIAABBg");
	var mask_7_graphics_81 = new cjs.Graphics().p("AhYAhIAAhBICxAAIAABBg");
	var mask_7_graphics_82 = new cjs.Graphics().p("AhfAhIAAhBIC/AAIAABBg");
	var mask_7_graphics_83 = new cjs.Graphics().p("AhnAhIAAhBIDOAAIAABBg");
	var mask_7_graphics_84 = new cjs.Graphics().p("AhuAhIAAhBIDdAAIAABBg");
	var mask_7_graphics_85 = new cjs.Graphics().p("Ah0AhIAAhBIDqAAIAABBg");
	var mask_7_graphics_86 = new cjs.Graphics().p("Ah8AhIAAhBID5AAIAABBg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(73).to({graphics:mask_7_graphics_73,x:15.575,y:50.575}).wait(1).to({graphics:mask_7_graphics_74,x:16.65,y:50.375}).wait(1).to({graphics:mask_7_graphics_75,x:17.75,y:50.175}).wait(1).to({graphics:mask_7_graphics_76,x:18.8,y:50.025}).wait(1).to({graphics:mask_7_graphics_77,x:19.9,y:49.825}).wait(1).to({graphics:mask_7_graphics_78,x:20.975,y:49.625}).wait(1).to({graphics:mask_7_graphics_79,x:22.075,y:49.425}).wait(1).to({graphics:mask_7_graphics_80,x:23.125,y:49.275}).wait(1).to({graphics:mask_7_graphics_81,x:24.225,y:49.075}).wait(1).to({graphics:mask_7_graphics_82,x:25.3,y:48.875}).wait(1).to({graphics:mask_7_graphics_83,x:26.4,y:48.675}).wait(1).to({graphics:mask_7_graphics_84,x:27.45,y:48.525}).wait(1).to({graphics:mask_7_graphics_85,x:28.55,y:48.325}).wait(1).to({graphics:mask_7_graphics_86,x:29.625,y:48.125}).wait(15));

	// 八
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231916").s().p("AhFATQgPgFAAgGQAAgIAYAAQAvgIAlgKIAOgCQAIAAAUAEQASAHABAEQgBAIgWAEQgSABgJACIgwAIQgVADgLAAQgQAAgIgCg");
	this.shape_7.setTransform(31.4,49);
	this.shape_7._off = true;

	var maskedShapeInstanceList = [this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(73).to({_off:false},0).wait(28));

	// 遮色片9 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_86 = new cjs.Graphics().p("AgnAoIAAhQIBQAAIAABQg");
	var mask_8_graphics_87 = new cjs.Graphics().p("AAAgBIAAgBIABAFg");
	var mask_8_graphics_88 = new cjs.Graphics().p("AAXAoIAAgBIAAhCIhQAAIAAAkIgIgMIgBgDIAAghIAAAAIAAgBIBrAAIAaAuIAAAhIgsAAIAsAAIAAABgABDAngAhCgFIAAgBIABADg");
	var mask_8_graphics_89 = new cjs.Graphics().p("AAOApIAAgBIAAg9IhQAAIAAAhIgLgMIgCgCIAAglIAAAAIAAAAIB4AAIAnApIAAAlIhCABIBCgBIAAACgABQAngAhPgBIAAgBIACACg");
	var mask_8_graphics_90 = new cjs.Graphics().p("AAFAoIAAAAIAAg3IhQAAIAAAeIgOgKIgDgEIADAEIgDgDIAAgBIAAgpICFAAIA1AnIAAAoIhZABIBZgBIAAABgABeAng");
	var mask_8_graphics_91 = new cjs.Graphics().p("AgDAoIAAAAIAAgwIhRAAIAAAaIgTgKIgDgCIADACIgDgBIAAgBIAAgtIAAgBICTAAIBCAiIAAAtIhuABIBugBIAAABgABrAng");
	var mask_8_graphics_92 = new cjs.Graphics().p("AgMApIAAgBIAAgqIhRAAIAAAWIgYgIIgCgCIACACIgCgBIAAgBIAAgxIAAAAICgAAIBPAdIAAAyIiEAAICEAAIAAABgAB4Aog");
	var mask_8_graphics_93 = new cjs.Graphics().p("ABZAoIAsAAIAAAAgAgVAogAgoAoIg+gRIAAgUIBRAAIAAAlgAgVADIhRAAIAAAUIgcgHIgCgCIACACIgCgBIAAgBIAAg1IAAgBICtAAIBcAaIAAA2IgsAAIhuAAgACFAog");
	var mask_8_graphics_94 = new cjs.Graphics().p("ABhAoIAygBIAAACgAgeAJIhRAAIAAARIgggHIgDgBIADABIgDAAIAAgBIAAg5IAAAAIC7AAIBqAVIAAA5IgyABIh/ABgACTAng");
	var mask_8_graphics_95 = new cjs.Graphics().p("ACHAoIAZAAIAAAAgAgnAQIhRAAIAAANIgngFIAAg+IAAgCIDIAAIB3ARIAAA/IgZAAIiuAAgACgAog");
	var mask_8_graphics_96 = new cjs.Graphics().p("ACWAoIAXAAIAAABgAgwAoIAAgSIhRAAIAAAKIgpgEIgCgBIACABIgCAAIAAgBIAAhCIAAAAIDVAAICEAMIAABDIgXAAIi+ABgACtAog");
	var mask_8_graphics_97 = new cjs.Graphics().p("ACeAoIAcAAIgcAAIjGAAIgRgBIAAgLIhRAAIAAAHIgtgDIgCgBIACABIgCAAIAAgBIAAhGIAAgBIDiAAIB2AHIAbACIAABHIAAAAg");
	var mask_8_graphics_98 = new cjs.Graphics().p("AgoAoIgNAAIgNAAIAAgFIhRAAIAAADIg0gBIAAhMIAAgBIDwAAICIAEIAXABIAABLg");
	var mask_8_graphics_99 = new cjs.Graphics().p("AhLApIhRAAIg4AAIAAhQIGpAAIAABQg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(86).to({graphics:mask_8_graphics_86,x:13.65,y:61.75}).wait(1).to({graphics:mask_8_graphics_87,x:9.2125,y:60.8375}).wait(1).to({graphics:mask_8_graphics_88,x:15.45,y:61.6}).wait(1).to({graphics:mask_8_graphics_89,x:16.325,y:61.55}).wait(1).to({graphics:mask_8_graphics_90,x:17.25,y:61.5}).wait(1).to({graphics:mask_8_graphics_91,x:18.125,y:61.4}).wait(1).to({graphics:mask_8_graphics_92,x:19.025,y:61.35}).wait(1).to({graphics:mask_8_graphics_93,x:19.925,y:61.3}).wait(1).to({graphics:mask_8_graphics_94,x:20.825,y:61.25}).wait(1).to({graphics:mask_8_graphics_95,x:21.7,y:61.15}).wait(1).to({graphics:mask_8_graphics_96,x:22.625,y:61.1}).wait(1).to({graphics:mask_8_graphics_97,x:23.5,y:61.05}).wait(1).to({graphics:mask_8_graphics_98,x:24.425,y:60.95}).wait(1).to({graphics:mask_8_graphics_99,x:25.3,y:60.9}).wait(2));

	// 九
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231916").s().p("AhQAOQgGgGAAgHQAAgGAKgBQAwgDAogHQAVgEAJABQALAAATAJQAPAKAAAGQAAAEgGAAQgdAAgRACIhaAIQgTAAgGgGg");
	this.shape_8.setTransform(31.425,58.9);
	this.shape_8._off = true;

	var maskedShapeInstanceList = [this.shape_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(86).to({_off:false},0).wait(15));

	// 遮色片十 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_99 = new cjs.Graphics().p("AgaA2QgTgKgJgVQgIgWAHgTQAJgbAagJQAZgKAYANQAMAHAIAMQAIAMACANQACAPgHAQQgGAPgNAKQgNAJgRACIgEAAQgOAAgNgGg");
	var mask_9_graphics_100 = new cjs.Graphics().p("AABBVQgQgEgNgOQgNgOgCgSIgBgLIgDgCQgOgJgHgQQgIgQADgRQADgRAMgOQANgNARgEQAQgEARAGQARAFAKAOQALAOABASIABAHIAGAEQAOALAGARQAGASgFARQgGAWgVAMQgPAKgQAAQgGAAgHgCg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(99).to({graphics:mask_9_graphics_99,x:36.3248,y:59.6935}).wait(1).to({graphics:mask_9_graphics_100,x:37.1708,y:61.4518}).wait(1));

	// 十
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231916").s().p("AAKAWQgUglgPgNQAAgFAFAAIAaACIATBBQgHAAgIgMg");
	this.shape_9.setTransform(37.6,61.875);
	this.shape_9._off = true;

	var maskedShapeInstanceList = [this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(99).to({_off:false},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67.7,65.3);


(lib.吊繩 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 吊繩
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.吊繩, new cjs.Rectangle(0,0,38,214), null);


(lib.中燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 中燈籠
	this.ikNode_1 = new lib.吊繩();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(42.8,-281.45,1,1,0,0,0,38.1,0);

	this.ikNode_2 = new lib.燈本體();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(4.7,-67.45,1,1,0,0,0,87.3,0);

	this.ikNode_4 = new lib.燈下線();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(0.7,89.85,1,1,0,0,0,18.4,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_4,p:{rotation:0,x:0.7,y:89.85,regX:18.4}},{t:this.ikNode_2,p:{rotation:0,x:4.7,y:-67.45,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:0,y:-281.45,regY:0,x:42.8}}]}).to({state:[{t:this.ikNode_4,p:{rotation:0.0804,x:-9.55,y:88.55,regX:18.4}},{t:this.ikNode_2,p:{rotation:1.7007,x:-0.9,y:-68.45,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:1.5232,y:-281.4,regY:0,x:42.8}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.1617,x:-19.85,y:87,regX:18.4}},{t:this.ikNode_2,p:{rotation:3.4029,x:-6.55,y:-69.7,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:3.0465,y:-281.5,regY:-0.1,x:42.8}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.2422,x:-30.1,y:85.15,regX:18.4}},{t:this.ikNode_2,p:{rotation:5.1037,x:-12.15,y:-71.1,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:4.5694,y:-281.35,regY:0,x:42.8}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.3235,x:-40.3,y:83,regX:18.4}},{t:this.ikNode_2,p:{rotation:6.8056,x:-17.7,y:-72.6,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:6.0929,y:-281.35,regY:0,x:42.8}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.4039,x:-50.45,y:80.6,regX:18.4}},{t:this.ikNode_2,p:{rotation:8.5073,x:-23.25,y:-74.35,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:7.6164,y:-281.35,regY:0,x:42.75}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.4852,x:-60.5,y:77.85,regX:18.4}},{t:this.ikNode_2,p:{rotation:10.2086,x:-28.75,y:-76.15,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:9.1399,y:-281.35,regY:0,x:42.75}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.5657,x:-70.5,y:74.9,regX:18.4}},{t:this.ikNode_2,p:{rotation:11.91,x:-34.15,y:-78.15,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:10.6628,y:-281.35,regY:0,x:42.75}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.647,x:-80.4,y:71.6,regX:18.4}},{t:this.ikNode_2,p:{rotation:13.6115,x:-39.5,y:-80.25,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:12.1863,y:-281.35,regY:0,x:42.75}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.7274,x:-90.2,y:68.1,regX:18.4}},{t:this.ikNode_2,p:{rotation:15.3126,x:-44.85,y:-82.5,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:13.7097,y:-281.35,regY:0,x:42.75}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.8087,x:-99.9,y:64.25,regX:18.4}},{t:this.ikNode_2,p:{rotation:17.0149,x:-50.05,y:-84.9,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:15.2329,y:-281.35,regY:0,x:42.75}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.8892,x:-109.5,y:60.2,regX:18.4}},{t:this.ikNode_2,p:{rotation:18.7161,x:-55.25,y:-87.45,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:16.7563,y:-281.35,regY:0,x:42.8}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.9705,x:-119,y:55.8,regX:18.4}},{t:this.ikNode_2,p:{rotation:20.4179,x:-60.4,y:-90.1,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:18.2801,y:-281.35,regY:0,x:42.8}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.0509,x:-128.35,y:51.2,regX:18.4}},{t:this.ikNode_2,p:{rotation:22.119,x:-65.5,y:-92.95,regX:87.2,regY:0}},{t:this.ikNode_1,p:{rotation:19.8033,y:-281.35,regY:0,x:42.75}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.1322,x:-137.45,y:46.3,regX:18.5}},{t:this.ikNode_2,p:{rotation:23.8205,x:-70.4,y:-95.9,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:21.3264,y:-281.35,regY:0,x:42.75}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.2127,x:-146.6,y:41.2,regX:18.5}},{t:this.ikNode_2,p:{rotation:25.5218,x:-75.3,y:-98.95,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:22.8504,y:-281.35,regY:0,x:42.75}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.294,x:-155.6,y:35.8,regX:18.4}},{t:this.ikNode_2,p:{rotation:27.2235,x:-80.05,y:-102.1,regX:87.4,regY:0}},{t:this.ikNode_1,p:{rotation:24.3734,y:-281.35,regY:0,x:42.75}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.3745,x:-164.4,y:30.2,regX:18.4}},{t:this.ikNode_2,p:{rotation:28.9249,x:-84.85,y:-105.5,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:25.8972,y:-281.35,regY:0,x:42.7}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.4558,x:-173,y:24.3,regX:18.4}},{t:this.ikNode_2,p:{rotation:30.6261,x:-89.5,y:-109,regX:87.2,regY:0}},{t:this.ikNode_1,p:{rotation:27.4202,y:-281.35,regY:0,x:42.75}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.5363,x:-181.45,y:18.2,regX:18.4}},{t:this.ikNode_2,p:{rotation:32.3282,x:-94,y:-112.5,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:28.9437,y:-281.3,regY:0,x:42.75}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.6176,x:-189.75,y:11.8,regX:18.4}},{t:this.ikNode_2,p:{rotation:34.0298,x:-98.4,y:-116.2,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:30.467,y:-281.35,regY:0,x:42.75}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.6989,x:-197.85,y:5.25,regX:18.4}},{t:this.ikNode_2,p:{rotation:35.731,x:-102.8,y:-119.9,regX:87.3,regY:0.1}},{t:this.ikNode_1,p:{rotation:31.9903,y:-281.3,regY:0,x:42.75}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.7794,x:-205.75,y:-1.45,regX:18.4}},{t:this.ikNode_2,p:{rotation:37.4322,x:-107.05,y:-124,regX:87.2,regY:0}},{t:this.ikNode_1,p:{rotation:33.5143,y:-281.3,regY:0,x:42.7}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.8608,x:-213.5,y:-8.45,regX:18.4}},{t:this.ikNode_2,p:{rotation:39.1341,x:-111.15,y:-128,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:35.0369,y:-281.35,regY:0,x:42.75}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.9412,x:-221,y:-15.7,regX:18.4}},{t:this.ikNode_2,p:{rotation:40.8358,x:-115.15,y:-132.1,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:36.5608,y:-281.3,regY:0,x:42.75}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.0226,x:-228.3,y:-23.15,regX:18.4}},{t:this.ikNode_2,p:{rotation:42.5369,x:-118.95,y:-136.45,regX:87.3,regY:-0.1}},{t:this.ikNode_1,p:{rotation:38.084,y:-281.3,regY:0,x:42.75}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.1031,x:-235.4,y:-30.75,regX:18.4}},{t:this.ikNode_2,p:{rotation:44.2383,x:-122.85,y:-140.75,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:39.6069,y:-281.3,regY:0,x:42.75}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.1835,x:-242.3,y:-38.65,regX:18.4}},{t:this.ikNode_2,p:{rotation:45.9397,x:-126.5,y:-145.15,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:41.1308,y:-281.35,regY:0,x:42.75}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.265,x:-248.95,y:-46.65,regX:18.4}},{t:this.ikNode_2,p:{rotation:47.6413,x:-130.1,y:-149.75,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:42.6539,y:-281.35,regY:0,x:42.7}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.3454,x:-255.4,y:-54.9,regX:18.4}},{t:this.ikNode_2,p:{rotation:49.3433,x:-133.45,y:-154.3,regX:87.4,regY:0}},{t:this.ikNode_1,p:{rotation:44.1771,y:-281.3,regY:0,x:42.7}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.2676,x:-249.2,y:-46.9,regX:18.4}},{t:this.ikNode_2,p:{rotation:47.6982,x:-130.2,y:-149.9,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:42.7046,y:-281.3,regY:0,x:42.75}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.1897,x:-242.75,y:-39.15,regX:18.4}},{t:this.ikNode_2,p:{rotation:46.0535,x:-126.75,y:-145.5,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:41.2324,y:-281.35,regY:0,x:42.75}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.111,x:-236.1,y:-31.55,regX:18.4}},{t:this.ikNode_2,p:{rotation:44.409,x:-123.2,y:-141.15,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:39.7596,y:-281.35,regY:0,x:42.75}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.0331,x:-229.25,y:-24.15,regX:18.4}},{t:this.ikNode_2,p:{rotation:42.764,x:-119.55,y:-136.95,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:38.2871,y:-281.3,regY:0,x:42.75}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.9544,x:-222.25,y:-16.9,regX:18.4}},{t:this.ikNode_2,p:{rotation:41.1191,x:-115.8,y:-132.85,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:36.8143,y:-281.3,regY:0,x:42.75}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.8765,x:-215,y:-9.9,regX:18.4}},{t:this.ikNode_2,p:{rotation:39.4746,x:-111.9,y:-128.8,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:35.3418,y:-281.3,regY:0,x:42.75}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.7986,x:-207.6,y:-3.05,regX:18.4}},{t:this.ikNode_2,p:{rotation:37.8299,x:-107.95,y:-124.85,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:33.8693,y:-281.3,regY:0,x:42.75}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.7199,x:-200,y:3.45,regX:18.4}},{t:this.ikNode_2,p:{rotation:36.1843,x:-103.9,y:-121.05,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:32.3966,y:-281.35,regY:0,x:42.7}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.6421,x:-192.2,y:9.9,regX:18.4}},{t:this.ikNode_2,p:{rotation:34.54,x:-99.75,y:-117.35,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:30.9245,y:-281.3,regY:0,x:42.75}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.5634,x:-184.25,y:16.1,regX:18.4}},{t:this.ikNode_2,p:{rotation:32.8954,x:-95.45,y:-113.75,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:29.4518,y:-281.3,regY:0,x:42.75}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.4856,x:-176.15,y:22.1,regX:18.4}},{t:this.ikNode_2,p:{rotation:31.25,x:-91.1,y:-110.2,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:27.979,y:-281.35,regY:0,x:42.75}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.4068,x:-167.85,y:27.85,regX:18.4}},{t:this.ikNode_2,p:{rotation:29.6056,x:-86.7,y:-106.85,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:26.506,y:-281.35,regY:0,x:42.75}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.329,x:-159.45,y:33.45,regX:18.4}},{t:this.ikNode_2,p:{rotation:27.9606,x:-82.15,y:-103.55,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:25.0334,y:-281.35,regY:0,x:42.75}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.2512,x:-150.9,y:38.7,regX:18.4}},{t:this.ikNode_2,p:{rotation:26.316,x:-77.55,y:-100.45,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:23.5609,y:-281.2,regY:0.1,x:42.7}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.1725,x:-142,y:43.8,regX:18.5}},{t:this.ikNode_2,p:{rotation:24.6712,x:-72.85,y:-97.4,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:22.0888,y:-281.3,regY:0,x:42.75}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.0946,x:-133.15,y:48.65,regX:18.5}},{t:this.ikNode_2,p:{rotation:23.0267,x:-68.1,y:-94.5,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:20.6157,y:-281.35,regY:0,x:42.75}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.016,x:-124.3,y:53.25,regX:18.4}},{t:this.ikNode_2,p:{rotation:21.3817,x:-63.25,y:-91.65,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:19.1433,y:-281.35,regY:0,x:42.75}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.9381,x:-115.2,y:57.6,regX:18.4}},{t:this.ikNode_2,p:{rotation:19.7367,x:-58.45,y:-88.9,regX:87.3,regY:0.1}},{t:this.ikNode_1,p:{rotation:17.6708,y:-281.35,regY:0,x:42.75}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.8594,x:-106,y:61.7,regX:18.4}},{t:this.ikNode_2,p:{rotation:18.0924,x:-53.35,y:-86.5,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:16.1983,y:-281.35,regY:0,x:42.75}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.7816,x:-96.7,y:65.55,regX:18.4}},{t:this.ikNode_2,p:{rotation:16.447,x:-48.3,y:-84.1,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:14.7252,y:-281.35,regY:0,x:42.75}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.7038,x:-87.3,y:69.2,regX:18.4}},{t:this.ikNode_2,p:{rotation:14.803,x:-43.25,y:-81.8,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:13.2529,y:-281.35,regY:0,x:42.8}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.6251,x:-77.8,y:72.5,regX:18.4}},{t:this.ikNode_2,p:{rotation:13.1577,x:-38.1,y:-79.7,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:11.7806,y:-281.35,regY:0,x:42.75}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.5473,x:-68.2,y:75.6,regX:18.4}},{t:this.ikNode_2,p:{rotation:11.5128,x:-32.9,y:-77.65,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:10.3081,y:-281.4,regY:0,x:42.8}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.4686,x:-58.5,y:78.45,regX:18.4}},{t:this.ikNode_2,p:{rotation:9.8685,x:-27.65,y:-75.8,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:8.8354,y:-281.35,regY:0,x:42.75}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.3908,x:-48.75,y:81,regX:18.4}},{t:this.ikNode_2,p:{rotation:8.2236,x:-22.35,y:-74,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:7.3624,y:-281.35,regY:0,x:42.8}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.3121,x:-38.95,y:83.3,regX:18.4}},{t:this.ikNode_2,p:{rotation:6.5785,x:-17,y:-72.4,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:5.8899,y:-281.4,regY:0,x:42.75}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.2343,x:-29.1,y:85.35,regX:18.4}},{t:this.ikNode_2,p:{rotation:4.9335,x:-11.6,y:-70.95,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:4.4177,y:-281.35,regY:0,x:42.8}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.1556,x:-19.2,y:87.1,regX:18.4}},{t:this.ikNode_2,p:{rotation:3.289,x:-6.15,y:-69.6,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:2.945,y:-281.4,regY:0,x:42.75}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.0778,x:-9.2,y:88.55,regX:18.4}},{t:this.ikNode_2,p:{rotation:1.6447,x:-0.7,y:-68.45,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:1.4724,y:-281.35,regY:0,x:42.8}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0,x:0.75,y:89.85,regX:18.4}},{t:this.ikNode_2,p:{rotation:0,x:4.75,y:-67.45,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:0,y:-281.45,regY:0,x:42.8}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-309.9,-307.8,393.9,511);


(lib.大燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 大燈籠
	this.ikNode_1 = new lib.吊繩();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(42.8,-281.45,1,1,0,0,0,38.1,0);

	this.ikNode_2 = new lib.燈本體();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(4.7,-67.45,1,1,0,0,0,87.3,0);

	this.ikNode_4 = new lib.燈下線();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(0.7,89.85,1,1,0,0,0,18.4,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_4,p:{rotation:0,x:0.7,y:89.85,regX:18.4}},{t:this.ikNode_2,p:{rotation:0,x:4.7,y:-67.45,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:0,x:42.8,y:-281.45,regY:0}}]}).to({state:[{t:this.ikNode_4,p:{rotation:0.0437,x:9.35,y:90.75,regX:18.4}},{t:this.ikNode_2,p:{rotation:-1.0431,x:10.5,y:-66.5,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-1.5441,x:42.75,y:-281.45,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.0874,x:18.05,y:91.6,regX:18.4}},{t:this.ikNode_2,p:{rotation:-2.0864,x:16.3,y:-65.7,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-3.0894,x:42.75,y:-281.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.1311,x:26.65,y:92.15,regX:18.4}},{t:this.ikNode_2,p:{rotation:-3.1297,x:22.1,y:-65,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-4.6343,x:42.7,y:-281.45,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.1757,x:35.35,y:92.5,regX:18.4}},{t:this.ikNode_2,p:{rotation:-4.1731,x:27.95,y:-64.55,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-6.1791,x:42.75,y:-281.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.2194,x:44.05,y:92.65,regX:18.4}},{t:this.ikNode_2,p:{rotation:-5.2161,x:33.85,y:-64.25,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-7.7248,x:42.7,y:-281.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.2632,x:52.75,y:92.65,regX:18.4}},{t:this.ikNode_2,p:{rotation:-6.2591,x:39.7,y:-64.05,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-9.2692,x:42.7,y:-281.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.3077,x:61.5,y:92.35,regX:18.4}},{t:this.ikNode_2,p:{rotation:-7.3024,x:45.55,y:-64.05,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-10.8141,x:42.7,y:-281.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.3515,x:70.2,y:91.85,regX:18.4}},{t:this.ikNode_2,p:{rotation:-8.3456,x:51.25,y:-64.2,regX:87.2,regY:0}},{t:this.ikNode_1,p:{rotation:-12.359,x:42.7,y:-281.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.3952,x:78.9,y:91.2,regX:18.4}},{t:this.ikNode_2,p:{rotation:-9.3889,x:57.25,y:-64.55,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-13.9041,x:42.7,y:-281.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.4398,x:87.55,y:90.3,regX:18.4}},{t:this.ikNode_2,p:{rotation:-10.4325,x:63.05,y:-65,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-15.4497,x:42.7,y:-281.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.4835,x:96.2,y:89.25,regX:18.4}},{t:this.ikNode_2,p:{rotation:-11.4754,x:68.9,y:-65.6,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-16.9938,x:42.7,y:-281.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.5272,x:104.85,y:87.95,regX:18.4}},{t:this.ikNode_2,p:{rotation:-12.5193,x:74.65,y:-66.35,regX:87.2,regY:0}},{t:this.ikNode_1,p:{rotation:-18.5392,x:42.65,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.5718,x:113.4,y:86.45,regX:18.4}},{t:this.ikNode_2,p:{rotation:-13.5621,x:80.5,y:-67.25,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-20.0843,x:42.7,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.6155,x:121.95,y:84.7,regX:18.4}},{t:this.ikNode_2,p:{rotation:-14.6058,x:86.15,y:-68.35,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-21.629,x:42.65,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.6592,x:130.5,y:82.75,regX:18.4}},{t:this.ikNode_2,p:{rotation:-15.6484,x:91.85,y:-69.6,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-23.1744,x:42.65,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.7038,x:138.95,y:80.7,regX:18.4}},{t:this.ikNode_2,p:{rotation:-16.6924,x:97.5,y:-71.15,regX:87.3,regY:-0.1}},{t:this.ikNode_1,p:{rotation:-24.7193,x:42.7,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.7475,x:147.35,y:78.35,regX:18.4}},{t:this.ikNode_2,p:{rotation:-17.7349,x:103.2,y:-72.6,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-26.264,x:42.65,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.7912,x:155.7,y:75.8,regX:18.4}},{t:this.ikNode_2,p:{rotation:-18.7789,x:108.8,y:-74.25,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-27.8093,x:42.7,y:-281.3,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.835,x:164,y:73.05,regX:18.4}},{t:this.ikNode_2,p:{rotation:-19.8221,x:114.35,y:-76.15,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-29.3543,x:42.65,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.8795,x:172.2,y:70.15,regX:18.4}},{t:this.ikNode_2,p:{rotation:-20.8653,x:119.85,y:-78.15,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-30.899,x:42.7,y:-281.3,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.9233,x:180.35,y:67,regX:18.4}},{t:this.ikNode_2,p:{rotation:-21.9087,x:125.3,y:-80.25,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-32.4441,x:42.65,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.967,x:188.4,y:63.65,regX:18.4}},{t:this.ikNode_2,p:{rotation:-22.9519,x:130.7,y:-82.6,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-33.9895,x:42.7,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.0116,x:196.4,y:60.1,regX:18.4}},{t:this.ikNode_2,p:{rotation:-23.9946,x:136,y:-85.05,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-35.5337,x:42.65,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.0553,x:204.25,y:56.4,regX:18.4}},{t:this.ikNode_2,p:{rotation:-25.0381,x:141.3,y:-87.6,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-37.079,x:42.65,y:-281.3,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.099,x:212.15,y:52.5,regX:18.5}},{t:this.ikNode_2,p:{rotation:-26.0818,x:146.45,y:-90.35,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-38.6243,x:42.65,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.1436,x:219.85,y:48.4,regX:18.5}},{t:this.ikNode_2,p:{rotation:-27.1253,x:151.55,y:-93.2,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-40.1692,x:42.6,y:-281.45,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.1874,x:227.45,y:44.15,regX:18.5}},{t:this.ikNode_2,p:{rotation:-28.1683,x:156.6,y:-96.2,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-41.7143,x:42.65,y:-281.3,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.2311,x:234.9,y:39.7,regX:18.5}},{t:this.ikNode_2,p:{rotation:-29.211,x:161.55,y:-99.35,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-43.2589,x:42.65,y:-281.3,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.2757,x:242.2,y:35.05,regX:18.4}},{t:this.ikNode_2,p:{rotation:-30.255,x:166.4,y:-102.65,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-44.804,x:42.65,y:-281.3,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.2328,x:235.15,y:39.55,regX:18.5}},{t:this.ikNode_2,p:{rotation:-29.2463,x:161.7,y:-99.45,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-43.3102,x:42.6,y:-281.4,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.19,x:227.95,y:43.9,regX:18.5}},{t:this.ikNode_2,p:{rotation:-28.2379,x:156.9,y:-96.4,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-41.8171,x:42.65,y:-281.3,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.148,x:220.65,y:48,regX:18.5}},{t:this.ikNode_2,p:{rotation:-27.2294,x:152.1,y:-93.5,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-40.3236,x:42.65,y:-281.3,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.1052,x:213.2,y:51.95,regX:18.5}},{t:this.ikNode_2,p:{rotation:-26.2202,x:147.15,y:-90.7,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-38.8295,x:42.7,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.0623,x:205.55,y:55.8,regX:18.4}},{t:this.ikNode_2,p:{rotation:-25.2121,x:142.15,y:-88.1,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-37.3368,x:42.65,y:-281.3,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.0203,x:197.95,y:59.4,regX:18.4}},{t:this.ikNode_2,p:{rotation:-24.2036,x:137.05,y:-85.55,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-35.8431,x:42.7,y:-281.3,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.9775,x:190.25,y:62.85,regX:18.4}},{t:this.ikNode_2,p:{rotation:-23.1951,x:131.95,y:-83.15,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-34.3496,x:42.65,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.9355,x:182.5,y:66.1,regX:18.4}},{t:this.ikNode_2,p:{rotation:-22.1868,x:126.75,y:-80.85,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-32.8562,x:42.65,y:-281.3,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.8926,x:174.65,y:69.2,regX:18.4}},{t:this.ikNode_2,p:{rotation:-21.1783,x:121.5,y:-78.8,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-31.3626,x:42.7,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.8498,x:166.7,y:72.05,regX:18.4}},{t:this.ikNode_2,p:{rotation:-20.1701,x:116.2,y:-76.8,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-29.8692,x:42.75,y:-281.2,regY:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.8079,x:158.75,y:74.8,regX:18.4}},{t:this.ikNode_2,p:{rotation:-19.1607,x:110.85,y:-74.95,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-28.376,x:42.65,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.765,x:150.7,y:77.35,regX:18.4}},{t:this.ikNode_2,p:{rotation:-18.153,x:105.45,y:-73.25,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-26.8821,x:42.7,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.7222,x:142.6,y:79.7,regX:18.4}},{t:this.ikNode_2,p:{rotation:-17.144,x:100,y:-71.7,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-25.3889,x:42.65,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.6802,x:134.45,y:81.8,regX:18.4}},{t:this.ikNode_2,p:{rotation:-16.1355,x:94.5,y:-70.25,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-23.8952,x:42.7,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.6374,x:126.25,y:83.75,regX:18.4}},{t:this.ikNode_2,p:{rotation:-15.1268,x:89,y:-69,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-22.4013,x:42.65,y:-281.3,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.5945,x:118,y:85.55,regX:18.4}},{t:this.ikNode_2,p:{rotation:-14.1185,x:83.55,y:-67.85,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-20.9085,x:42.7,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.5525,x:109.7,y:87.15,regX:18.4}},{t:this.ikNode_2,p:{rotation:-13.1102,x:77.95,y:-66.85,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-19.4145,x:42.7,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.5097,x:101.4,y:88.5,regX:18.4}},{t:this.ikNode_2,p:{rotation:-12.1014,x:72.4,y:-66.05,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-17.9213,x:42.7,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.4677,x:93.05,y:89.7,regX:18.4}},{t:this.ikNode_2,p:{rotation:-11.0929,x:66.75,y:-65.35,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-16.4279,x:42.75,y:-281.3,regY:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.4249,x:84.65,y:90.65,regX:18.4}},{t:this.ikNode_2,p:{rotation:-10.0843,x:61.15,y:-64.85,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-14.9341,x:42.7,y:-281.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.3821,x:76.25,y:91.4,regX:18.4}},{t:this.ikNode_2,p:{rotation:-9.0761,x:55.5,y:-64.4,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-13.4408,x:42.7,y:-281.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.3401,x:67.85,y:92,regX:18.4}},{t:this.ikNode_2,p:{rotation:-8.0673,x:49.85,y:-64.15,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-11.9476,x:42.7,y:-281.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.2973,x:59.45,y:92.45,regX:18.4}},{t:this.ikNode_2,p:{rotation:-7.0592,x:44.2,y:-64.05,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-10.4538,x:42.7,y:-281.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.2544,x:51,y:92.65,regX:18.4}},{t:this.ikNode_2,p:{rotation:-6.0516,x:38.5,y:-64.1,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-8.9601,x:42.75,y:-281.45,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.2124,x:42.6,y:92.65,regX:18.4}},{t:this.ikNode_2,p:{rotation:-5.0423,x:32.85,y:-64.25,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-7.4673,x:42.75,y:-281.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.1696,x:34.2,y:92.45,regX:18.4}},{t:this.ikNode_2,p:{rotation:-4.0337,x:27.2,y:-64.6,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-5.9733,x:42.7,y:-281.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.1268,x:25.75,y:92.1,regX:18.4}},{t:this.ikNode_2,p:{rotation:-3.0255,x:21.55,y:-65.1,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-4.48,x:42.75,y:-281.45,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.0848,x:17.45,y:91.55,regX:18.4}},{t:this.ikNode_2,p:{rotation:-2.0165,x:15.95,y:-65.7,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-2.9861,x:42.7,y:-281.45,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.042,x:9.1,y:90.75,regX:18.4}},{t:this.ikNode_2,p:{rotation:-1.0081,x:10.35,y:-66.5,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:-1.4934,x:42.75,y:-281.45,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0,x:0.75,y:89.85,regX:18.4}},{t:this.ikNode_2,p:{rotation:0,x:4.75,y:-67.45,regX:87.3,regY:0}},{t:this.ikNode_1,p:{rotation:0,x:42.8,y:-281.45,regY:0}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.6,-281.4,396.79999999999995,487.5);


(lib.小燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 小燈籠
	this.ikNode_1 = new lib.吊繩();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(42.8,-281.45,1,1,0,0,0,38.1,0);

	this.ikNode_2 = new lib.燈本體();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(4.7,-67.45,1,1,0,0,0,87.3,0);

	this.ikNode_4 = new lib.燈下線();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(0.7,89.85,1,1,0,0,0,18.4,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_4,p:{rotation:0,x:0.7,y:89.85,regX:18.4,regY:1.2}},{t:this.ikNode_2,p:{rotation:0,x:4.7,y:-67.45,regX:87.3}},{t:this.ikNode_1,p:{rotation:0,x:42.8,y:-281.45,regY:0}}]}).to({state:[{t:this.ikNode_4,p:{rotation:-3.5325,x:22.1,y:91.5,regX:18.4,regY:1.2}},{t:this.ikNode_2,p:{rotation:-3.4975,x:16.65,y:-65.65,regX:87.3}},{t:this.ikNode_1,p:{rotation:-3.1761,x:42.75,y:-281.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-7.0662,x:43.7,y:92,regX:18.4,regY:1.2}},{t:this.ikNode_2,p:{rotation:-6.9949,x:28.65,y:-64.55,regX:87.3}},{t:this.ikNode_1,p:{rotation:-6.3532,x:42.7,y:-281.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-10.5997,x:65.3,y:91.25,regX:18.4,regY:1.2}},{t:this.ikNode_2,p:{rotation:-10.4931,x:40.7,y:-64.05,regX:87.3}},{t:this.ikNode_1,p:{rotation:-9.5297,x:42.7,y:-281.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-14.1329,x:86.9,y:89.2,regX:18.5,regY:1.2}},{t:this.ikNode_2,p:{rotation:-13.9907,x:52.7,y:-64.25,regX:87.3}},{t:this.ikNode_1,p:{rotation:-12.7075,x:42.7,y:-281.45,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-17.6669,x:108.1,y:85.95,regX:18.4,regY:1.2}},{t:this.ikNode_2,p:{rotation:-17.4891,x:64.75,y:-65.15,regX:87.3}},{t:this.ikNode_1,p:{rotation:-15.8837,x:42.7,y:-281.45,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-21.1999,x:129.2,y:81.55,regX:18.4,regY:1.2}},{t:this.ikNode_2,p:{rotation:-20.987,x:76.7,y:-66.65,regX:87.3}},{t:this.ikNode_1,p:{rotation:-19.0609,x:42.7,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-24.7337,x:149.95,y:75.85,regX:18.4,regY:1.2}},{t:this.ikNode_2,p:{rotation:-24.4845,x:88.45,y:-68.9,regX:87.3}},{t:this.ikNode_1,p:{rotation:-22.2378,x:42.7,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-28.2669,x:170.4,y:69,regX:18.4,regY:1.2}},{t:this.ikNode_2,p:{rotation:-27.9821,x:100.15,y:-71.7,regX:87.3}},{t:this.ikNode_1,p:{rotation:-25.4143,x:42.7,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-31.8006,x:190.45,y:60.9,regX:18.4,regY:1.2}},{t:this.ikNode_2,p:{rotation:-31.4803,x:111.65,y:-75.25,regX:87.3}},{t:this.ikNode_1,p:{rotation:-28.5916,x:42.7,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-35.3343,x:209.9,y:51.75,regX:18.4,regY:1.2}},{t:this.ikNode_2,p:{rotation:-34.978,x:123,y:-79.35,regX:87.3}},{t:this.ikNode_1,p:{rotation:-31.768,x:42.7,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-38.8675,x:228.75,y:41.35,regX:18.4,regY:1.1}},{t:this.ikNode_2,p:{rotation:-38.4756,x:134.05,y:-84.1,regX:87.3}},{t:this.ikNode_1,p:{rotation:-34.9452,x:42.75,y:-281.2,regY:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-42.4008,x:247.05,y:30.05,regX:18.4,regY:1.2}},{t:this.ikNode_2,p:{rotation:-41.9743,x:144.85,y:-89.5,regX:87.3}},{t:this.ikNode_1,p:{rotation:-38.122,x:42.65,y:-281.3,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-45.9341,x:264.65,y:17.65,regX:18.4,regY:1.2}},{t:this.ikNode_2,p:{rotation:-45.4717,x:155.3,y:-95.45,regX:87.3}},{t:this.ikNode_1,p:{rotation:-41.2987,x:42.65,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-49.4674,x:281.45,y:4.25,regX:18.4,regY:1.2}},{t:this.ikNode_2,p:{rotation:-48.9696,x:165.4,y:-101.95,regX:87.3}},{t:this.ikNode_1,p:{rotation:-44.4764,x:42.7,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-53.0014,x:297.45,y:-10.15,regX:18.4,regY:1.2}},{t:this.ikNode_2,p:{rotation:-52.4674,x:175.25,y:-109.1,regX:87.4}},{t:this.ikNode_1,p:{rotation:-47.6524,x:42.65,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-56.535,x:312.65,y:-25.3,regX:18.4,regY:1.2}},{t:this.ikNode_2,p:{rotation:-55.9651,x:184.5,y:-116.65,regX:87.3}},{t:this.ikNode_1,p:{rotation:-50.8298,x:42.65,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-60.0682,x:326.95,y:-41.5,regX:18.5,regY:1.2}},{t:this.ikNode_2,p:{rotation:-59.4633,x:193.4,y:-124.75,regX:87.3}},{t:this.ikNode_1,p:{rotation:-54.006,x:42.7,y:-281.3,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-63.6011,x:340.2,y:-58.3,regX:18.5,regY:1.2}},{t:this.ikNode_2,p:{rotation:-62.9611,x:201.9,y:-133.35,regX:87.3}},{t:this.ikNode_1,p:{rotation:-57.1831,x:42.7,y:-281.3,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-67.1347,x:352.35,y:-75.9,regX:18.4,regY:1.1}},{t:this.ikNode_2,p:{rotation:-66.4591,x:209.8,y:-142.4,regX:87.3}},{t:this.ikNode_1,p:{rotation:-60.3603,x:42.7,y:-281.3,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-70.6679,x:363.7,y:-94.2,regX:18.4,regY:1.2}},{t:this.ikNode_2,p:{rotation:-69.9566,x:217.25,y:-151.85,regX:87.3}},{t:this.ikNode_1,p:{rotation:-63.537,x:42.7,y:-281.3,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-74.2018,x:373.7,y:-113.15,regX:18.4,regY:1.1}},{t:this.ikNode_2,p:{rotation:-73.4545,x:224.15,y:-161.75,regX:87.3}},{t:this.ikNode_1,p:{rotation:-66.7136,x:42.65,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-77.735,x:382.75,y:-132.6,regX:18.4,regY:1.1}},{t:this.ikNode_2,p:{rotation:-76.9528,x:230.5,y:-172,regX:87.3}},{t:this.ikNode_1,p:{rotation:-69.8905,x:42.65,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-81.2681,x:390.8,y:-152.6,regX:18.5,regY:1.2}},{t:this.ikNode_2,p:{rotation:-80.4507,x:236.3,y:-182.55,regX:87.3}},{t:this.ikNode_1,p:{rotation:-73.0673,x:42.65,y:-281.3,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-84.8023,x:397.45,y:-172.85,regX:18.4,regY:1.2}},{t:this.ikNode_2,p:{rotation:-83.9484,x:241.45,y:-193.45,regX:87.3}},{t:this.ikNode_1,p:{rotation:-76.2445,x:42.65,y:-281.3,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-88.3352,x:403,y:-193.55,regX:18.4,regY:1.2}},{t:this.ikNode_2,p:{rotation:-87.4463,x:246,y:-204.55,regX:87.3}},{t:this.ikNode_1,p:{rotation:-79.4217,x:42.65,y:-281.3,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-91.8678,x:407.3,y:-214.6,regX:18.4,regY:1.2}},{t:this.ikNode_2,p:{rotation:-90.9434,x:249.95,y:-216,regX:87.3}},{t:this.ikNode_1,p:{rotation:-82.5979,x:42.65,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-95.4014,x:410.4,y:-235.75,regX:18.4,regY:1.2}},{t:this.ikNode_2,p:{rotation:-94.4414,x:253.25,y:-227.55,regX:87.3}},{t:this.ikNode_1,p:{rotation:-85.7752,x:42.65,y:-281.3,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-98.9345,x:412.3,y:-257.2,regX:18.5,regY:1.2}},{t:this.ikNode_2,p:{rotation:-97.9393,x:255.9,y:-239.3,regX:87.3}},{t:this.ikNode_1,p:{rotation:-88.9517,x:42.65,y:-281.3,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-102.4682,x:412.8,y:-278.45,regX:18.4,regY:1.1}},{t:this.ikNode_2,p:{rotation:-101.437,x:257.9,y:-251.15,regX:87.3}},{t:this.ikNode_1,p:{rotation:-92.1276,x:42.65,y:-281.3,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-99.0523,x:412.3,y:-257.8,regX:18.4,regY:1.2}},{t:this.ikNode_2,p:{rotation:-98.0558,x:255.95,y:-239.7,regX:87.3}},{t:this.ikNode_1,p:{rotation:-89.0575,x:42.7,y:-281.3,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-95.6367,x:410.6,y:-237.15,regX:18.4,regY:1.2}},{t:this.ikNode_2,p:{rotation:-94.6738,x:253.45,y:-228.35,regX:87.3}},{t:this.ikNode_1,p:{rotation:-85.9873,x:42.65,y:-281.3,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-92.2212,x:407.7,y:-216.7,regX:18.4,regY:1.2}},{t:this.ikNode_2,p:{rotation:-91.2932,x:250.35,y:-217.15,regX:87.3}},{t:this.ikNode_1,p:{rotation:-82.9161,x:42.65,y:-281.3,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-88.8065,x:403.65,y:-196.5,regX:18.5,regY:1.2}},{t:this.ikNode_2,p:{rotation:-87.9127,x:246.6,y:-206.1,regX:87.3}},{t:this.ikNode_1,p:{rotation:-79.8447,x:42.65,y:-281.3,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-85.3912,x:398.5,y:-176.3,regX:18.4,regY:1.2}},{t:this.ikNode_2,p:{rotation:-84.531,x:242.25,y:-195.3,regX:87.3}},{t:this.ikNode_1,p:{rotation:-76.774,x:42.65,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-81.9751,x:392.2,y:-156.55,regX:18.4,regY:1.2}},{t:this.ikNode_2,p:{rotation:-81.1504,x:237.4,y:-184.7,regX:87.3}},{t:this.ikNode_1,p:{rotation:-73.7032,x:42.65,y:-281.3,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-78.5594,x:384.85,y:-137.2,regX:18.4,regY:1.2}},{t:this.ikNode_2,p:{rotation:-77.769,x:231.9,y:-174.4,regX:87.3}},{t:this.ikNode_1,p:{rotation:-70.6319,x:42.7,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-75.1438,x:376.35,y:-118.25,regX:18.4,regY:1.2}},{t:this.ikNode_2,p:{rotation:-74.387,x:225.9,y:-164.45,regX:87.3}},{t:this.ikNode_1,p:{rotation:-67.5607,x:42.7,y:-281.3,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-71.7282,x:366.85,y:-99.75,regX:18.4,regY:1.2}},{t:this.ikNode_2,p:{rotation:-71.0066,x:219.4,y:-154.8,regX:87.3}},{t:this.ikNode_1,p:{rotation:-64.4899,x:42.65,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-68.3126,x:356.2,y:-81.95,regX:18.4,regY:1.1}},{t:this.ikNode_2,p:{rotation:-67.625,x:212.4,y:-145.6,regX:87.4}},{t:this.ikNode_1,p:{rotation:-61.419,x:42.7,y:-281.3,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-64.897,x:344.8,y:-64.65,regX:18.4,regY:1.2}},{t:this.ikNode_2,p:{rotation:-64.2435,x:204.9,y:-136.7,regX:87.4}},{t:this.ikNode_1,p:{rotation:-58.3482,x:42.7,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-61.4808,x:332.35,y:-48.05,regX:18.4,regY:1.2}},{t:this.ikNode_2,p:{rotation:-60.8622,x:196.85,y:-128.15,regX:87.3}},{t:this.ikNode_1,p:{rotation:-55.2776,x:42.7,y:-281.3,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-58.0655,x:318.95,y:-32.1,regX:18.4,regY:1.2}},{t:this.ikNode_2,p:{rotation:-57.4812,x:188.45,y:-120.1,regX:87.3}},{t:this.ikNode_1,p:{rotation:-52.2063,x:42.7,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-54.6499,x:304.7,y:-17,regX:18.4,regY:1.2}},{t:this.ikNode_2,p:{rotation:-54.0999,x:179.6,y:-112.5,regX:87.3}},{t:this.ikNode_1,p:{rotation:-49.1351,x:42.8,y:-281.25,regY:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-51.2345,x:289.7,y:-2.9,regX:18.5,regY:1.2}},{t:this.ikNode_2,p:{rotation:-50.7187,x:170.3,y:-105.35,regX:87.2}},{t:this.ikNode_1,p:{rotation:-46.064,x:42.7,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-47.8183,x:273.75,y:10.6,regX:18.4,regY:1.2}},{t:this.ikNode_2,p:{rotation:-47.3375,x:160.75,y:-98.85,regX:87.3}},{t:this.ikNode_1,p:{rotation:-42.9929,x:42.6,y:-281.4,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-44.4028,x:257.15,y:23.15,regX:18.4,regY:1.2}},{t:this.ikNode_2,p:{rotation:-43.9558,x:150.8,y:-92.8,regX:87.3}},{t:this.ikNode_1,p:{rotation:-39.9222,x:42.65,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-40.9871,x:239.9,y:34.65,regX:18.5,regY:1.2}},{t:this.ikNode_2,p:{rotation:-40.5748,x:140.55,y:-87.3,regX:87.3}},{t:this.ikNode_1,p:{rotation:-36.8512,x:42.7,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-37.5713,x:221.95,y:45.35,regX:18.4,regY:1.2}},{t:this.ikNode_2,p:{rotation:-37.1939,x:130,y:-82.3,regX:87.3}},{t:this.ikNode_1,p:{rotation:-33.7803,x:42.7,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-34.1564,x:203.45,y:54.9,regX:18.4,regY:1.2}},{t:this.ikNode_2,p:{rotation:-33.8125,x:119.25,y:-77.95,regX:87.3}},{t:this.ikNode_1,p:{rotation:-30.7096,x:42.7,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-30.7402,x:184.45,y:63.5,regX:18.4,regY:1.2}},{t:this.ikNode_2,p:{rotation:-30.4313,x:108.15,y:-74.05,regX:87.2}},{t:this.ikNode_1,p:{rotation:-27.6384,x:42.7,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-27.3248,x:165.1,y:70.85,regX:18.5,regY:1.2}},{t:this.ikNode_2,p:{rotation:-27.0495,x:97.05,y:-70.9,regX:87.3}},{t:this.ikNode_1,p:{rotation:-24.5671,x:42.7,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-23.9093,x:145.1,y:77.2,regX:18.4,regY:1.1}},{t:this.ikNode_2,p:{rotation:-23.6686,x:85.65,y:-68.3,regX:87.3}},{t:this.ikNode_1,p:{rotation:-21.4964,x:42.7,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-20.4934,x:125,y:82.5,regX:18.4,regY:1.2}},{t:this.ikNode_2,p:{rotation:-20.2873,x:74.3,y:-66.3,regX:87.3}},{t:this.ikNode_1,p:{rotation:-18.4255,x:42.7,y:-281.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-17.0779,x:104.55,y:86.6,regX:18.4,regY:1.2}},{t:this.ikNode_2,p:{rotation:-16.9062,x:62.8,y:-65,regX:87.4}},{t:this.ikNode_1,p:{rotation:-15.3544,x:42.7,y:-281.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-13.662,x:83.95,y:89.55,regX:18.4,regY:1.2}},{t:this.ikNode_2,p:{rotation:-13.5244,x:51.15,y:-64.2,regX:87.3}},{t:this.ikNode_1,p:{rotation:-12.2839,x:42.75,y:-281.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-10.2468,x:63.1,y:91.4,regX:18.4,regY:1.2}},{t:this.ikNode_2,p:{rotation:-10.1438,x:39.5,y:-64.05,regX:87.3}},{t:this.ikNode_1,p:{rotation:-9.2125,x:42.7,y:-281.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-6.8311,x:42.25,y:92,regX:18.4,regY:1.2}},{t:this.ikNode_2,p:{rotation:-6.7624,x:27.85,y:-64.6,regX:87.3}},{t:this.ikNode_1,p:{rotation:-6.1413,x:42.75,y:-281.45,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-3.4152,x:21.4,y:91.45,regX:18.4,regY:1.2}},{t:this.ikNode_2,p:{rotation:-3.381,x:16.25,y:-65.7,regX:87.3}},{t:this.ikNode_1,p:{rotation:-3.0702,x:42.75,y:-281.45,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0,x:0.75,y:89.85,regX:18.4,regY:1.2}},{t:this.ikNode_2,p:{rotation:0,x:4.75,y:-67.45,regX:87.3}},{t:this.ikNode_1,p:{rotation:0,x:42.8,y:-281.45,regY:0}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.6,-360,610.1,566.7);


// stage content:
(lib.春燈 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 春
	this.instance = new lib.春();
	this.instance.setTransform(458.9,459.15,1,1,0,0,0,27.9,8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 小燈籠
	this.instance_1 = new lib.小燈籠();
	this.instance_1.setTransform(111.3,160.75,0.4451,0.4379,0,0,0,0.8,-39.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 中燈籠
	this.instance_2 = new lib.中燈籠();
	this.instance_2.setTransform(420.05,201.95,0.5951,0.6079,0,0,0,0.8,-39.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// 大燈籠
	this.instance_3 = new lib.大燈籠();
	this.instance_3.setTransform(262.6,274.95,0.9092,0.9092,0,0,0,0.8,-39.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// 底稿顏色
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5F3F2").s().p("EgruAs5MAAAhZxMBXdAAAMAAABZxg");
	this.shape.setTransform(279.925,288.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(279.5,288.2,280.4,287.2);
// library properties:
lib.properties = {
	id: '3B4B8E64BDFDCF458DB5D42B6D21CCD2',
	width: 559,
	height: 575,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/春燈_atlas_1.png", id:"春燈_atlas_1"}
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
an.compositions['3B4B8E64BDFDCF458DB5D42B6D21CCD2'] = {
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