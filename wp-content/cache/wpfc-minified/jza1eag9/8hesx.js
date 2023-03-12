// source --> /wp-content/themes/ldvptheme/assets/js/owl.carousel.min.js?ver=140aea48735cb3412049037301acb66e 
/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g--;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;c<d;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.settings.center&&(this.$stage.children(".center").removeClass("center"),this.$stage.children().eq(this.current()).addClass("center"))}}],e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var b,c,e;b=this.$element.find("img"),c=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,e=this.$element.children(c).width(),b.length&&e<=0&&this.preloadAutoWidthImages(b)}this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+' class="'+this.settings.stageClass+'"/>').wrap('<div class="'+this.settings.stageOuterClass+'"/>'),this.$element.append(this.$stage.parent()),this.replace(this.$element.children().not(this.$stage.parent())),this.$element.is(":visible")?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){a<=b&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};b<c;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.$element.is(":visible")&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),this.settings.responsive!==!1&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var d=-1,e=30,f=this.width(),g=this.coordinates();return this.settings.freeDrag||a.each(g,a.proxy(function(a,h){return"left"===c&&b>h-e&&b<h+e?d=a:"right"===c&&b>h-f-e&&b<h-f+e?d=a+1:this.op(b,"<",h)&&this.op(b,">",g[a+1]||h-f)&&(d="left"===c?a+1:a),d===-1},this)),this.settings.loop||(this.op(b,">",g[this.minimum()])?d=b=this.minimum():this.op(b,"<",g[this.maximum()])&&(d=b=this.maximum())),d},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){a=this.normalize(a),a!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||c<1?a=d:(a<0||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){for(b=this._items.length,c=this._items[--b].width(),d=this.$element.width();b--&&(c+=this._items[b].width()+this.settings.margin,!(c>d)););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2===0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(e<0),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=f*-1*g),a=c+e,d=((a-h)%g+g)%g+h,d!==a&&d-e<=i&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.$element.is(":visible")&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){if(a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},e.prototype.viewport=function(){var d;return this.options.responsiveBaseElement!==b?d=a(this.options.responsiveBaseElement).width():b.innerWidth?d=b.innerWidth:c.documentElement&&c.documentElement.clientWidth?d=c.documentElement.clientWidth:console.warn("Can not detect viewport width."),d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){a=this.normalize(a,!0),a!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),this.settings.responsive!==!1&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:a<c;case">":return d?a<c:a>c;case">=":return d?a<=c:a>=c;case"<=":return d?a>=c:a<=c}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&a.namespace.indexOf("owl")!==-1?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.$element.is(":visible"),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.$element.is(":visible")!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type))for(var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&e*-1||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":'url("'+g+'")',opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"==a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.$stage.children().toArray().slice(b,c),e=[],f=0;a.each(d,function(b,c){e.push(a(c).height())}),f=Math.max.apply(null,e),this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?'style="width:'+c.width+"px;height:"+c.height+'px;"':"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(a){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?'<div class="owl-video-tn '+j+'" '+i+'="'+a+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+a+')"></div>',b.after(d),b.after(e)};if(b.wrap('<div class="owl-video-wrapper"'+g+"></div>"),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length)return l(h.attr(i)),h.remove(),!1;"youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}})},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),"youtube"===f.type?c='<iframe width="'+g+'" height="'+h+'" src="//www.youtube.com/embed/'+f.id+"?autoplay=1&rel=0&v="+f.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===f.type?c='<iframe src="//player.vimeo.com/video/'+f.id+'?autoplay=1" width="'+g+'" height="'+h+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>':"vzaar"===f.type&&(c='<iframe frameborder="0"height="'+h+'"width="'+g+'" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/'+f.id+'/player?autoplay=true"></iframe>'),a('<div class="owl-video-frame">'+c+"</div>").insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},
a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._timeout=null,this._paused=!1,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._core.settings.autoplay&&this._setAutoPlayInterval()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype.play=function(a,b){this._paused=!1,this._core.is("rotating")||(this._core.enter("rotating"),this._setAutoPlayInterval())},e.prototype._getNextTimeout=function(d,e){return this._timeout&&b.clearTimeout(this._timeout),b.setTimeout(a.proxy(function(){this._paused||this._core.is("busy")||this._core.is("interacting")||c.hidden||this._core.next(e||this._core.settings.autoplaySpeed)},this),d||this._core.settings.autoplayTimeout)},e.prototype._setAutoPlayInterval=function(){this._timeout=this._getNextTimeout()},e.prototype.stop=function(){this._core.is("rotating")&&(b.clearTimeout(this._timeout),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&(this._paused=!0)},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","div",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;a<e;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){if(g[b]!==d)return e=!c||b,!1}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);
// source --> /wp-content/themes/ldvptheme/assets/js/stripes.js?ver=140aea48735cb3412049037301acb66e 
"use strict";
$(function () {
    ldvp_setup_stripes();
    if (jQuery('.stripes_fullscreen_on').length > 0) {
        jQuery('html').addClass('ldvp_stripes_fullscreen').addClass('ldvp_transparent_header');
        if (jQuery('.stripes_fullscreen_on').length > 1) {
            jQuery('.stripes_fullscreen_on:not(:first)').remove();
        }
        jQuery('footer.ldvp_footer').remove();
    }
});

jQuery(window).resize(function () {
    ldvp_setup_stripes();
});

jQuery(window).on('load', function () {
    ldvp_setup_stripes();
});

function ldvp_setup_stripes() {
    if (jQuery('#wpadminbar').length > 0) {
        var setTop = jQuery('#wpadminbar').height();

        if (jQuery('.stripes_fullscreen_on').length > 0) {
            var setHeight = jQuery(window).height() - jQuery('#wpadminbar').height();
        } else {
            setHeight = jQuery(window).height() - jQuery('#wpadminbar').height() - jQuery('header').height();
        }
    } else {
        setTop = 0;

        if (jQuery('.stripes_fullscreen_on').length > 0) {
            setHeight = jQuery(window).height();
        } else {
            setHeight = jQuery(window).height() - jQuery('header').height();
        }
    }

    if (jQuery('.stripes_fullscreen_on').length > 0) {
        jQuery('.stripes_fullscreen_on').height(setHeight).css('top', setTop + 'px');
    } else {
        jQuery('.ldvp_stripes').height(setHeight);
    }
    jQuery('.ldvp_stripes').each(function () {
        var set_width = Math.floor(jQuery(this).width() / jQuery(this).find('.ldvp_stripes_item').length);
        jQuery(this).find('.ldvp_stripes_item').width(set_width).height(setHeight);
    });
};
// source --> /wp-content/themes/ldvptheme/assets/js/jquery.swipebox.js?ver=140aea48735cb3412049037301acb66e 
/*! Swipebox v1.4.4 | Constantin Saguin csag.co | MIT License | github.com/brutaldesign/swipebox */

;( function ( window, document, $, undefined ) {

	$.swipebox = function( elem, options ) {

		// Default options
		var ui,
			defaults = {
				useCSS : true,
				useSVG : false,
				initialIndexOnArray : 0,
				removeBarsOnMobile : true,
				hideCloseButtonOnMobile : false,
				hideBarsDelay : 3000,
				videoMaxWidth : 1140,
				vimeoColor : 'cccccc',
				beforeOpen: null,
				afterOpen: null,
				afterClose: null,
				afterMedia: null,
				nextSlide: null,
				prevSlide: null,
				loopAtEnd: false,
				autoplayVideos: false,
				queryStringData: {},
				toggleClassOnLoad: ''
			},

			plugin = this,
			elements = [], // slides array [ { href:'...', title:'...' }, ...],
			$elem,
			selector = elem.selector,
			isMobile = navigator.userAgent.match( /(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i ),
			isTouch = isMobile !== null || document.createTouch !== undefined || ( 'ontouchstart' in window ) || ( 'onmsgesturechange' in window ) || navigator.msMaxTouchPoints,
			supportSVG = !! document.createElementNS && !! document.createElementNS( 'http://www.w3.org/2000/svg', 'svg').createSVGRect,
			winWidth = window.innerWidth ? window.innerWidth : $( window ).width(),
			winHeight = window.innerHeight ? window.innerHeight : $( window ).height(),
			currentX = 0,
			/* jshint multistr: true */
			html = '<div id="swipebox-overlay">\
					<div id="swipebox-container">\
						<div id="swipebox-slider"></div>\
						<div id="swipebox-top-bar">\
							<div id="swipebox-title"></div>\
						</div>\
						<div id="swipebox-bottom-bar">\
							<div id="swipebox-arrows">\
								<a id="swipebox-prev"></a>\
								<a id="swipebox-next"></a>\
							</div>\
						</div>\
						<a id="swipebox-close"></a>\
					</div>\
			</div>';

		plugin.settings = {};

		$.swipebox.close = function () {
			ui.closeSlide();
		};

		$.swipebox.extend = function () {
			return ui;
		};

		plugin.init = function() {

			plugin.settings = $.extend( {}, defaults, options );
			
			selector = plugin.settings.selector;

			if ( $.isArray( elem ) ) {

				elements = elem;
				ui.target = $( window );
				ui.init( plugin.settings.initialIndexOnArray );

			} else {

				$( document ).on( 'click', selector, function( event ) {

					// console.log( isTouch );

					if ( event.target.parentNode.className === 'slide current' ) {

						return false;
					}

					if ( ! $.isArray( elem ) ) {
						ui.destroy();
						$elem = $( selector );
						ui.actions();
					}

					elements = [];
					var index, relType, relVal;

					// Allow for HTML5 compliant attribute before legacy use of rel
					if ( ! relVal ) {
						relType = 'data-rel';
						relVal = $( this ).attr( relType );
					}

					if ( ! relVal ) {
						relType = 'rel';
						relVal = $( this ).attr( relType );
					}

					if ( relVal && relVal !== '' && relVal !== 'nofollow' ) {
						$elem = $( selector ).filter( '[' + relType + '="' + relVal + '"]' );
					} else {
						$elem = $( selector );
					}

					$elem.each( function() {

						var title = null,
							href = null;

						if ( $( this ).attr( 'title' ) ) {
							title = $( this ).attr( 'title' );
						}


						if ( $( this ).attr( 'href' ) ) {
							href = $( this ).attr( 'href' );
						}

						elements.push( {
							href: href,
							title: title
						} );
					} );

					index = $elem.index( $( this ) );
					event.preventDefault();
					event.stopPropagation();
					ui.target = $( event.target );
					ui.init( index );
				} );
			}
		};

		ui = {

			/**
			 * Initiate Swipebox
			 */
			init : function( index ) {
				if ( plugin.settings.beforeOpen ) {
					plugin.settings.beforeOpen();
				}
				this.target.trigger( 'swipebox-start' );
				$.swipebox.isOpen = true;
				this.build();
				this.openSlide( index );
				this.openMedia( index );
				this.preloadMedia( index+1 );
				this.preloadMedia( index-1 );
				if ( plugin.settings.afterOpen ) {
					plugin.settings.afterOpen(index);
				}
			},

			/**
			 * Built HTML containers and fire main functions
			 */
			build : function () {
				var $this = this, bg;

				$( 'body' ).append( html );

				if ( supportSVG && plugin.settings.useSVG === true ) {
					bg = $( '#swipebox-close' ).css( 'background-image' );
					bg = bg.replace( 'png', 'svg' );
					$( '#swipebox-prev, #swipebox-next, #swipebox-close' ).css( {
						'background-image' : bg
					} );
				}

				if ( isMobile && plugin.settings.removeBarsOnMobile ) {
					$( '#swipebox-bottom-bar, #swipebox-top-bar' ).remove();
				}

				$.each( elements,  function() {
					$( '#swipebox-slider' ).append( '<div class="slide"></div>' );
				} );

				$this.setDim();
				$this.actions();

				if ( isTouch ) {
					$this.gesture();
				}

				// Devices can have both touch and keyboard input so always allow key events
				$this.keyboard();

				$this.animBars();
				$this.resize();

			},

			/**
			 * Set dimensions depending on windows width and height
			 */
			setDim : function () {

				var width, height, sliderCss = {};

				// Reset dimensions on mobile orientation change
				if ( 'onorientationchange' in window ) {

					window.addEventListener( 'orientationchange', function() {
						if ( window.orientation === 0 ) {
							width = winWidth;
							height = winHeight;
						} else if ( window.orientation === 90 || window.orientation === -90 ) {
							width = winHeight;
							height = winWidth;
						}
					}, false );


				} else {

					width = window.innerWidth ? window.innerWidth : $( window ).width();
					height = window.innerHeight ? window.innerHeight : $( window ).height();
				}

				sliderCss = {
					width : width,
					height : height
				};

				$( '#swipebox-overlay' ).css( sliderCss );

			},

			/**
			 * Reset dimensions on window resize envent
			 */
			resize : function () {
				var $this = this;

				$( window ).resize( function() {
					$this.setDim();
				} ).resize();
			},

			/**
			 * Check if device supports CSS transitions
			 */
			supportTransition : function () {

				var prefixes = 'transition WebkitTransition MozTransition OTransition msTransition KhtmlTransition'.split( ' ' ),
					i;

				for ( i = 0; i < prefixes.length; i++ ) {
					if ( document.createElement( 'div' ).style[ prefixes[i] ] !== undefined ) {
						return prefixes[i];
					}
				}
				return false;
			},

			/**
			 * Check if CSS transitions are allowed (options + devicesupport)
			 */
			doCssTrans : function () {
				if ( plugin.settings.useCSS && this.supportTransition() ) {
					return true;
				}
			},

			/**
			 * Touch navigation
			 */
			gesture : function () {

				var $this = this,
					index,
					hDistance,
					vDistance,
					hDistanceLast,
					vDistanceLast,
					hDistancePercent,
					vSwipe = false,
					hSwipe = false,
					hSwipMinDistance = 10,
					vSwipMinDistance = 50,
					startCoords = {},
					endCoords = {},
					bars = $( '#swipebox-top-bar, #swipebox-bottom-bar' ),
					slider = $( '#swipebox-slider' );

				bars.addClass( 'visible-bars' );
				$this.setTimeout();

				$( 'body' ).on( 'touchstart', function( event ) {

					$( this ).addClass( 'touching' );
					index = $( '#swipebox-slider .slide' ).index( $( '#swipebox-slider .slide.current' ) );
					endCoords = event.originalEvent.targetTouches[0];
					startCoords.pageX = event.originalEvent.targetTouches[0].pageX;
					startCoords.pageY = event.originalEvent.targetTouches[0].pageY;

					$( '#swipebox-slider' ).css( {
						'-webkit-transform' : 'translate3d(' + currentX +'%, 0, 0)',
						'transform' : 'translate3d(' + currentX + '%, 0, 0)'
					} );

					$( '.touching' ).on( 'touchmove',function( event ) {
						event.preventDefault();
						event.stopPropagation();
						endCoords = event.originalEvent.targetTouches[0];

						if ( ! hSwipe ) {
							vDistanceLast = vDistance;
							vDistance = endCoords.pageY - startCoords.pageY;
							if ( Math.abs( vDistance ) >= vSwipMinDistance || vSwipe ) {
								var opacity = 0.75 - Math.abs(vDistance) / slider.height();

								slider.css( { 'top': vDistance + 'px' } );
								slider.css( { 'opacity': opacity } );

								vSwipe = true;
							}
						}

						hDistanceLast = hDistance;
						hDistance = endCoords.pageX - startCoords.pageX;
						hDistancePercent = hDistance * 100 / winWidth;

						if ( ! hSwipe && ! vSwipe && Math.abs( hDistance ) >= hSwipMinDistance ) {
							$( '#swipebox-slider' ).css( {
								'-webkit-transition' : '',
								'transition' : ''
							} );
							hSwipe = true;
						}

						if ( hSwipe ) {

							// swipe left
							if ( 0 < hDistance ) {

								// first slide
								if ( 0 === index ) {
									// console.log( 'first' );
									$( '#swipebox-overlay' ).addClass( 'leftSpringTouch' );
								} else {
									// Follow gesture
									$( '#swipebox-overlay' ).removeClass( 'leftSpringTouch' ).removeClass( 'rightSpringTouch' );
									$( '#swipebox-slider' ).css( {
										'-webkit-transform' : 'translate3d(' + ( currentX + hDistancePercent ) +'%, 0, 0)',
										'transform' : 'translate3d(' + ( currentX + hDistancePercent ) + '%, 0, 0)'
									} );
								}

							// swipe rught
							} else if ( 0 > hDistance ) {

								// last Slide
								if ( elements.length === index +1 ) {
									// console.log( 'last' );
									$( '#swipebox-overlay' ).addClass( 'rightSpringTouch' );
								} else {
									$( '#swipebox-overlay' ).removeClass( 'leftSpringTouch' ).removeClass( 'rightSpringTouch' );
									$( '#swipebox-slider' ).css( {
										'-webkit-transform' : 'translate3d(' + ( currentX + hDistancePercent ) +'%, 0, 0)',
										'transform' : 'translate3d(' + ( currentX + hDistancePercent ) + '%, 0, 0)'
									} );
								}

							}
						}
					} );

					return false;

				} ).on( 'touchend',function( event ) {
					event.preventDefault();
					event.stopPropagation();

					$( '#swipebox-slider' ).css( {
						'-webkit-transition' : '-webkit-transform 0.4s ease',
						'transition' : 'transform 0.4s ease'
					} );

					vDistance = endCoords.pageY - startCoords.pageY;
					hDistance = endCoords.pageX - startCoords.pageX;
					hDistancePercent = hDistance*100/winWidth;

					// Swipe to bottom to close
					if ( vSwipe ) {
						vSwipe = false;
						if ( Math.abs( vDistance ) >= 2 * vSwipMinDistance && Math.abs( vDistance ) > Math.abs( vDistanceLast ) ) {
							var vOffset = vDistance > 0 ? slider.height() : - slider.height();
							slider.animate( { top: vOffset + 'px', 'opacity': 0 },
								300,
								function () {
									$this.closeSlide();
								} );
						} else {
							slider.animate( { top: 0, 'opacity': 1 }, 300 );
						}

					} else if ( hSwipe ) {

						hSwipe = false;

						// swipeLeft
						if( hDistance >= hSwipMinDistance && hDistance >= hDistanceLast) {

							$this.getPrev();

						// swipeRight
						} else if ( hDistance <= -hSwipMinDistance && hDistance <= hDistanceLast) {

							$this.getNext();
						}

					} else { // Top and bottom bars have been removed on touchable devices
						// tap
						if ( ! bars.hasClass( 'visible-bars' ) ) {
							$this.showBars();
							$this.setTimeout();
						} else {
							$this.clearTimeout();
							$this.hideBars();
						}
					}

					$( '#swipebox-slider' ).css( {
						'-webkit-transform' : 'translate3d(' + currentX + '%, 0, 0)',
						'transform' : 'translate3d(' + currentX + '%, 0, 0)'
					} );

					$( '#swipebox-overlay' ).removeClass( 'leftSpringTouch' ).removeClass( 'rightSpringTouch' );
					$( '.touching' ).off( 'touchmove' ).removeClass( 'touching' );

				} );
			},

			/**
			 * Set timer to hide the action bars
			 */
			setTimeout: function () {
				if ( plugin.settings.hideBarsDelay > 0 ) {
					var $this = this;
					$this.clearTimeout();
					$this.timeout = window.setTimeout( function() {
							$this.hideBars();
						},

						plugin.settings.hideBarsDelay
					);
				}
			},

			/**
			 * Clear timer
			 */
			clearTimeout: function () {
				window.clearTimeout( this.timeout );
				this.timeout = null;
			},

			/**
			 * Show navigation and title bars
			 */
			showBars : function () {
				var bars = $( '#swipebox-top-bar, #swipebox-bottom-bar' );
				if ( this.doCssTrans() ) {
					bars.addClass( 'visible-bars' );
				} else {
					$( '#swipebox-top-bar' ).animate( { top : 0 }, 500 );
					$( '#swipebox-bottom-bar' ).animate( { bottom : 0 }, 500 );
					setTimeout( function() {
						bars.addClass( 'visible-bars' );
					}, 1000 );
				}
			},

			/**
			 * Hide navigation and title bars
			 */
			hideBars : function () {
				var bars = $( '#swipebox-top-bar, #swipebox-bottom-bar' );
				if ( this.doCssTrans() ) {
					bars.removeClass( 'visible-bars' );
				} else {
					$( '#swipebox-top-bar' ).animate( { top : '-50px' }, 500 );
					$( '#swipebox-bottom-bar' ).animate( { bottom : '-50px' }, 500 );
					setTimeout( function() {
						bars.removeClass( 'visible-bars' );
					}, 1000 );
				}
			},

			/**
			 * Animate navigation and top bars
			 */
			animBars : function () {
				var $this = this,
					bars = $( '#swipebox-top-bar, #swipebox-bottom-bar' );

				bars.addClass( 'visible-bars' );
				$this.setTimeout();

				$( '#swipebox-slider' ).on( 'click', function() {
					if ( ! bars.hasClass( 'visible-bars' ) ) {
						$this.showBars();
						$this.setTimeout();
					}
				} );

				$( '#swipebox-bottom-bar' ).on( 'hover',function() {
					$this.showBars();
					bars.addClass( 'visible-bars' );
					$this.clearTimeout();

				}, function() {
					if ( plugin.settings.hideBarsDelay > 0 ) {
						bars.removeClass( 'visible-bars' );
						$this.setTimeout();
					}

				} );
			},

			/**
			 * Keyboard navigation
			 */
			keyboard : function () {
				var $this = this;
				$( window ).on( 'keyup', function( event ) {
					event.preventDefault();
					event.stopPropagation();

					if ( event.keyCode === 37 ) {

						$this.getPrev();

					} else if ( event.keyCode === 39 ) {

						$this.getNext();

					} else if ( event.keyCode === 27 ) {

						$this.closeSlide();
					}
				} );
			},

			/**
			 * Navigation events : go to next slide, go to prevous slide and close
			 */
			actions : function () {
				var $this = this,
					action = 'touchend click'; // Just detect for both event types to allow for multi-input

				if ( elements.length < 2 ) {

					$( '#swipebox-bottom-bar' ).hide();

					if ( undefined === elements[ 1 ] ) {
						$( '#swipebox-top-bar' ).hide();
					}

				} else {
					$( '#swipebox-prev' ).on( action, function( event ) {
						event.preventDefault();
						event.stopPropagation();
						$this.getPrev();
						$this.setTimeout();
					} );

					$( '#swipebox-next' ).on( action, function( event ) {
						event.preventDefault();
						event.stopPropagation();
						$this.getNext();
						$this.setTimeout();
					} );
				}

				$( '#swipebox-close' ).on( action, function() {
					$this.closeSlide();
				} );
			},

			/**
			 * Set current slide
			 */
			setSlide : function ( index, isFirst ) {

				isFirst = isFirst || false;

				var slider = $( '#swipebox-slider' );

				currentX = -index*100;

				if ( this.doCssTrans() ) {
					slider.css( {
						'-webkit-transform' : 'translate3d(' + (-index*100)+'%, 0, 0)',
						'transform' : 'translate3d(' + (-index*100)+'%, 0, 0)'
					} );
				} else {
					slider.animate( { left : ( -index*100 )+'%' } );
				}

				$( '#swipebox-slider .slide' ).removeClass( 'current' );
				$( '#swipebox-slider .slide' ).eq( index ).addClass( 'current' );
				this.setTitle( index );

				if ( isFirst ) {
					slider.fadeIn();
				}

				$( '#swipebox-prev, #swipebox-next' ).removeClass( 'disabled' );

				if ( index === 0 ) {
					$( '#swipebox-prev' ).addClass( 'disabled' );
				} else if ( index === elements.length - 1 && plugin.settings.loopAtEnd !== true ) {
					$( '#swipebox-next' ).addClass( 'disabled' );
				}
			},

			/**
			 * Open slide
			 */
			openSlide : function ( index ) {
				$( 'html' ).addClass( 'swipebox-html' );
				if ( isTouch ) {
					$( 'html' ).addClass( 'swipebox-touch' );

					if ( plugin.settings.hideCloseButtonOnMobile ) {
						$( 'html' ).addClass( 'swipebox-no-close-button' );
					}
				} else {
					$( 'html' ).addClass( 'swipebox-no-touch' );
				}
				$( window ).trigger( 'resize' ); // fix scroll bar visibility on desktop
				this.setSlide( index, true );
			},

			/**
			 * Set a time out if the media is a video
			 */
			preloadMedia : function ( index ) {
				var $this = this,
					src = null;

				if ( elements[ index ] !== undefined ) {
					src = elements[ index ].href;
				}

				if ( ! $this.isVideo( src ) ) {
					setTimeout( function() {
						$this.openMedia( index );
					}, 1000);
				} else {
					$this.openMedia( index );
				}
			},

			/**
			 * Open
			 */
			openMedia : function ( index ) {
				var $this = this,
					src,
					slide;

				if ( elements[ index ] !== undefined ) {
					src = elements[ index ].href;
				}

				if ( index < 0 || index >= elements.length ) {
					return false;
				}

				slide = $( '#swipebox-slider .slide' ).eq( index );

				if ( ! $this.isVideo( src ) ) {
					slide.addClass( 'slide-loading' );
					$this.loadMedia( src, function() {
						slide.removeClass( 'slide-loading' );
						slide.html( this );

						if ( plugin.settings.afterMedia ) {
							plugin.settings.afterMedia( index );
						}
					} );
				} else {
					slide.html( $this.getVideo( src ) );

					if ( plugin.settings.afterMedia ) {
						plugin.settings.afterMedia( index );
					}
				}

			},

			/**
			 * Set link title attribute as caption
			 */
			setTitle : function ( index ) {
				var title = null;

				$( '#swipebox-title' ).empty();

				if ( elements[ index ] !== undefined ) {
					title = elements[ index ].title;
				}

				if ( title ) {
					$( '#swipebox-top-bar' ).show();
					$( '#swipebox-title' ).append( title );
				} else {
					$( '#swipebox-top-bar' ).hide();
				}
			},

			/**
			 * Check if the URL is a video
			 */
			isVideo : function ( src ) {

				if ( src ) {
					if ( src.match( /(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || src.match( /vimeo\.com\/([0-9]*)/ ) || src.match( /youtu\.be\/([a-zA-Z0-9\-_]+)/ ) ) {
						return true;
					}

					if ( src.toLowerCase().indexOf( 'swipeboxvideo=1' ) >= 0 ) {

						return true;
					}
				}

			},

			/**
			 * Parse URI querystring and:
			 * - overrides value provided via dictionary
			 * - rebuild it again returning a string
			 */
			parseUri : function (uri, customData) {
				var a = document.createElement('a'),
					qs = {};

				// Decode the URI
				a.href = decodeURIComponent( uri );

				// QueryString to Object
				if ( a.search ) {
					qs = JSON.parse( '{"' + a.search.toLowerCase().replace('?','').replace(/&/g,'","').replace(/=/g,'":"') + '"}' );
				}
				
				// Extend with custom data
				if ( $.isPlainObject( customData ) ) {
					qs = $.extend( qs, customData, plugin.settings.queryStringData ); // The dev has always the final word
				}

				// Return querystring as a string
				return $
					.map( qs, function (val, key) {
						if ( val && val > '' ) {
							return encodeURIComponent( key ) + '=' + encodeURIComponent( val );
						}
					})
					.join('&');
			},

			/**
			 * Get video iframe code from URL
			 */
			getVideo : function( url ) {
				var iframe = '',
					youtubeUrl = url.match( /((?:www\.)?youtube\.com|(?:www\.)?youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/ ),
					youtubeShortUrl = url.match(/(?:www\.)?youtu\.be\/([a-zA-Z0-9\-_]+)/),
					vimeoUrl = url.match( /(?:www\.)?vimeo\.com\/([0-9]*)/ ),
					qs = '';
				if ( youtubeUrl || youtubeShortUrl) {
					if ( youtubeShortUrl ) {
						youtubeUrl = youtubeShortUrl;
					}
					qs = ui.parseUri( url, {
						'autoplay' : ( plugin.settings.autoplayVideos ? '1' : '0' ),
						'v' : ''
					});
					iframe = '<iframe width="560" height="315" src="//' + youtubeUrl[1] + '/embed/' + youtubeUrl[2] + '?' + qs + '" frameborder="0" allowfullscreen></iframe>';

				} else if ( vimeoUrl ) {
					qs = ui.parseUri( url, {
						'autoplay' : ( plugin.settings.autoplayVideos ? '1' : '0' ),
						'byline' : '0',
						'portrait' : '0',
						'color': plugin.settings.vimeoColor
					});
					iframe = '<iframe width="560" height="315"  src="//player.vimeo.com/video/' + vimeoUrl[1] + '?' + qs + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';

				} else {
					iframe = '<iframe width="560" height="315" src="' + url + '" frameborder="0" allowfullscreen></iframe>';
				}

				return '<div class="swipebox-video-container" style="max-width:' + plugin.settings.videoMaxWidth + 'px"><div class="swipebox-video">' + iframe + '</div></div>';
			},

			/**
			 * Load image
			 */
			loadMedia : function ( src, callback ) {
                // Inline content
                if ( src.trim().indexOf('#') === 0 ) {
                    callback.call(
                    	$('<div>', {
                    		'class' : 'swipebox-inline-container'
                    	})
                    	.append(
                    		$(src)
	                    	.clone()
	                    	.toggleClass( plugin.settings.toggleClassOnLoad )
	                    )
                    );
                }
                // Everything else
                else {
    				if ( ! this.isVideo( src ) ) {
    					var img = $( '<img>' ).on( 'load', function() {
    						callback.call( img );
    					} );

    					img.attr( 'src', src );
    				}
                }
			},

			/**
			 * Get next slide
			 */
			getNext : function () {
				var $this = this,
					src,
					index = $( '#swipebox-slider .slide' ).index( $( '#swipebox-slider .slide.current' ) );
				if ( index + 1 < elements.length ) {

					src = $( '#swipebox-slider .slide' ).eq( index ).contents().find( 'iframe' ).attr( 'src' );
					$( '#swipebox-slider .slide' ).eq( index ).contents().find( 'iframe' ).attr( 'src', src );
					index++;
					$this.setSlide( index );
					$this.preloadMedia( index+1 );
					if ( plugin.settings.nextSlide ) {
						plugin.settings.nextSlide(index);
					}
				} else {

					if ( plugin.settings.loopAtEnd === true ) {
						src = $( '#swipebox-slider .slide' ).eq( index ).contents().find( 'iframe' ).attr( 'src' );
						$( '#swipebox-slider .slide' ).eq( index ).contents().find( 'iframe' ).attr( 'src', src );
						index = 0;
						$this.preloadMedia( index );
						$this.setSlide( index );
						$this.preloadMedia( index + 1 );
						if ( plugin.settings.nextSlide ) {
							plugin.settings.nextSlide(index);
						}
					} else {
						$( '#swipebox-overlay' ).addClass( 'rightSpring' );
						setTimeout( function() {
							$( '#swipebox-overlay' ).removeClass( 'rightSpring' );
						}, 500 );
					}
				}
			},

			/**
			 * Get previous slide
			 */
			getPrev : function () {
				var index = $( '#swipebox-slider .slide' ).index( $( '#swipebox-slider .slide.current' ) ),
					src;
				if ( index > 0 ) {
					src = $( '#swipebox-slider .slide' ).eq( index ).contents().find( 'iframe').attr( 'src' );
					$( '#swipebox-slider .slide' ).eq( index ).contents().find( 'iframe' ).attr( 'src', src );
					index--;
					this.setSlide( index );
					this.preloadMedia( index-1 );
					if ( plugin.settings.prevSlide ) {
						plugin.settings.prevSlide(index);
					}
				} else {
					$( '#swipebox-overlay' ).addClass( 'leftSpring' );
					setTimeout( function() {
						$( '#swipebox-overlay' ).removeClass( 'leftSpring' );
					}, 500 );
				}
			},
			/* jshint unused:false */
			nextSlide : function ( index ) {
				// Callback for next slide
			},

			prevSlide : function ( index ) {
				// Callback for prev slide
			},

			/**
			 * Close
			 */
			closeSlide : function () {
				$( 'html' ).removeClass( 'swipebox-html' );
				$( 'html' ).removeClass( 'swipebox-touch' );
				$( window ).trigger( 'resize' );
				this.destroy();
			},

			/**
			 * Destroy the whole thing
			 */
			destroy : function () {
				$( window ).unbind( 'keyup' );
				$( 'body' ).unbind( 'touchstart' );
				$( 'body' ).unbind( 'touchmove' );
				$( 'body' ).unbind( 'touchend' );
				$( '#swipebox-slider' ).unbind();
				$( '#swipebox-overlay' ).remove();

				if ( ! $.isArray( elem ) ) {
					elem.removeData( '_swipebox' );
				}

				if ( this.target ) {
					this.target.trigger( 'swipebox-destroy' );
				}

				$.swipebox.isOpen = false;

				if ( plugin.settings.afterClose ) {
					plugin.settings.afterClose();
				}
			}
		};

		plugin.init();
	};

	$.fn.swipebox = function( options ) {

		if ( ! $.data( this, '_swipebox' ) ) {
			var swipebox = new $.swipebox( this, options );
			this.data( '_swipebox', swipebox );
		}
		return this.data( '_swipebox' );

	};

}( window, document, jQuery ) );
// source --> /wp-content/themes/ldvptheme/assets/js/jquery.viewportchecker.min.js?ver=140aea48735cb3412049037301acb66e 
/**
 * jQuery-viewport-checker - v1.8.8 - 2017-09-25
 * https://github.com/dirkgroenen/jQuery-viewport-checker
 *
 * Copyright (c) 2017 Dirk Groenen
 * Licensed MIT <https://github.com/dirkgroenen/jQuery-viewport-checker/blob/master/LICENSE>
 */

!function(a){a.fn.viewportChecker=function(b){var c={classToAdd:"visible",classToRemove:"invisible",classToAddForFullView:"full-visible",removeClassAfterAnimation:!1,offset:100,repeat:!1,invertBottomOffset:!0,callbackFunction:function(a,b){},scrollHorizontal:!1,scrollBox:window};a.extend(c,b);var d=this,e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()};return this.checkElements=function(){var b,f;c.scrollHorizontal?(b=Math.max(a("html").scrollLeft(),a("body").scrollLeft(),a(window).scrollLeft()),f=b+e.width):(b=Math.max(a("html").scrollTop(),a("body").scrollTop(),a(window).scrollTop()),f=b+e.height),d.each(function(){var d=a(this),g={},h={};if(d.data("vp-add-class")&&(h.classToAdd=d.data("vp-add-class")),d.data("vp-remove-class")&&(h.classToRemove=d.data("vp-remove-class")),d.data("vp-add-class-full-view")&&(h.classToAddForFullView=d.data("vp-add-class-full-view")),d.data("vp-keep-add-class")&&(h.removeClassAfterAnimation=d.data("vp-remove-after-animation")),d.data("vp-offset")&&(h.offset=d.data("vp-offset")),d.data("vp-repeat")&&(h.repeat=d.data("vp-repeat")),d.data("vp-scrollHorizontal")&&(h.scrollHorizontal=d.data("vp-scrollHorizontal")),d.data("vp-invertBottomOffset")&&(h.scrollHorizontal=d.data("vp-invertBottomOffset")),a.extend(g,c),a.extend(g,h),!d.data("vp-animated")||g.repeat){String(g.offset).indexOf("%")>0&&(g.offset=parseInt(g.offset, 10)/100*e.height);var i=g.scrollHorizontal?d.offset().left:d.offset().top,j=g.scrollHorizontal?i+d.width():i+d.height(),k=Math.round(i)+g.offset,l=g.scrollHorizontal?k+d.width():k+d.height();g.invertBottomOffset&&(l-=2*g.offset),k<f&&l>b?(d.removeClass(g.classToRemove),d.addClass(g.classToAdd),g.callbackFunction(d,"add"),j<=f&&i>=b?d.addClass(g.classToAddForFullView):d.removeClass(g.classToAddForFullView),d.data("vp-animated",!0),g.removeClassAfterAnimation&&d.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){d.removeClass(g.classToAdd)})):d.hasClass(g.classToAdd)&&g.repeat&&(d.removeClass(g.classToAdd+" "+g.classToAddForFullView),g.callbackFunction(d,"remove"),d.data("vp-animated",!1))}})},("ontouchstart"in window||"onmsgesturechange"in window)&&a(document).on("touchmove MSPointerMove pointermove",this.checkElements),a(c.scrollBox).on("load scroll",this.checkElements),a(window).resize(function(b){e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()},d.checkElements()}),this.checkElements(),this}}(jQuery);
//# sourceMappingURL=jquery.viewportchecker.min.js.map;
// source --> /wp-content/themes/ldvptheme/assets/js/jquery.spincrement.min.js?ver=140aea48735cb3412049037301acb66e 
!function(t){t.extend(t.easing,{spincrementEasing:function(t,a,e,n,r){return a===r?e+n:n*(-Math.pow(2,-10*a/r)+1)+e}}),t.fn.spincrement=function(a){function e(t,a){if(t=t.toFixed(a),a>0&&"."!==r.decimalPoint&&(t=t.replace(".",r.decimalPoint)),r.thousandSeparator)for(;o.test(t);)t=t.replace(o,"$1"+r.thousandSeparator+"$2");return t}var n={from:0,to:null,decimalPlaces:null,decimalPoint:".",thousandSeparator:",",duration:1e3,leeway:50,easing:"spincrementEasing",fade:!0,complete:null},r=t.extend(n,a),o=new RegExp(/^(-?[0-9]+)([0-9]{3})/);return this.each(function(){var a=t(this),n=r.from;a.attr("data-from")&&(n=parseFloat(a.attr("data-from")));var o;if(a.attr("data-to"))o=parseFloat(a.attr("data-to"));else if(null!==r.to)o=r.to;else{var i=t.inArray(r.thousandSeparator,["\\","^","$","*","+","?","."])>-1?"\\"+r.thousandSeparator:r.thousandSeparator,l=new RegExp(i,"g");o=parseFloat(a.text().replace(l,""))}var c=r.duration;r.leeway&&(c+=Math.round(r.duration*(2*Math.random()-1)*r.leeway/100));var s;if(a.attr("data-dp"))s=parseInt(a.attr("data-dp"),10);else if(null!==r.decimalPlaces)s=r.decimalPlaces;else{var d=a.text().indexOf(r.decimalPoint);s=d>-1?a.text().length-(d+1):0}a.css("counter",n),r.fade&&a.css("opacity",0),a.animate({counter:o,opacity:1},{easing:r.easing,duration:c,step:function(t){a.html(e(t*o,s))},complete:function(){a.css("counter",null),a.html(e(o,s)),r.complete&&r.complete(a)}})})}}(jQuery);
// source --> /wp-content/themes/ldvptheme/assets/js/kube.js?ver=140aea48735cb3412049037301acb66e 
/*
	Kube. CSS & JS Framework
	Version 6.5.2
	Updated: February 2, 2017

	http://imperavi.com/kube/

	Copyright (c) 2009-2017, Imperavi LLC.
	License: MIT
*/
if (typeof jQuery === 'undefined') {throw new Error('Kube\'s requires jQuery')};
;(function($) { var version = $.fn.jquery.split('.'); if (version[0] == 1 && version[1] < 8) {throw new Error('Kube\'s requires at least jQuery v1.8'); }})(jQuery);

;(function()
{
    // Inherits
    Function.prototype.inherits = function(parent)
    {
        var F = function () {};
        F.prototype = parent.prototype;
        var f = new F();

        for (var prop in this.prototype) f[prop] = this.prototype[prop];
        this.prototype = f;
        this.prototype.super = parent.prototype;
    };

    // Core Class
    var Kube = function(element, options)
    {
        options = (typeof options === 'object') ? options : {};

        this.$element = $(element);
        this.opts     = $.extend(true, this.defaults, $.fn[this.namespace].options, this.$element.data(), options);
        this.$target  = (typeof this.opts.target === 'string') ? $(this.opts.target) : null;
    };

    // Core Functionality
    Kube.prototype = {
        getInstance: function()
        {
            return this.$element.data('fn.' + this.namespace);
        },
        hasTarget: function()
        {
           return !(this.$target === null);
        },
        callback: function(type)
        {
    		var args = [].slice.call(arguments).splice(1);

            // on element callback
            if (this.$element)
            {
                args = this._fireCallback($._data(this.$element[0], 'events'), type, this.namespace, args);
            }

            // on target callback
            if (this.$target)
            {
                args = this._fireCallback($._data(this.$target[0], 'events'), type, this.namespace, args);
    		}

    		// opts callback
    		if (this.opts && this.opts.callbacks && $.isFunction(this.opts.callbacks[type]))
    		{
                return this.opts.callbacks[type].apply(this, args);
    		}

    		return args;
        },
        _fireCallback: function(events, type, eventNamespace, args)
        {
            if (events && typeof events[type] !== 'undefined')
            {
    			var len = events[type].length;
    			for (var i = 0; i < len; i++)
    			{
    				var namespace = events[type][i].namespace;
    				if (namespace === eventNamespace)
    				{
    					var value = events[type][i].handler.apply(this, args);
    				}
    			}
    		}

            return (typeof value === 'undefined') ? args : value;
        }
    };

    // Scope
    window.Kube = Kube;

})();
/**
 * @library Kube Plugin
 * @author Imperavi LLC
 * @license MIT
 */
(function(Kube)
{
    Kube.Plugin = {
        create: function(classname, pluginname)
        {
            pluginname = (typeof pluginname === 'undefined') ? classname.toLowerCase() : pluginname;

            $.fn[pluginname] = function(method, options)
            {
                var args = Array.prototype.slice.call(arguments, 1);
                var name = 'fn.' + pluginname;
                var val = [];

                this.each(function()
                {
                    var $this = $(this), data = $this.data(name);
                    options = (typeof method === 'object') ? method : options;

                    if (!data)
                    {
                        // Initialization
                        $this.data(name, {});
                        $this.data(name, (data = new Kube[classname](this, options)));
                    }

                    // Call methods
                    if (typeof method === 'string')
                    {
                        if ($.isFunction(data[method]))
                        {
                            var methodVal = data[method].apply(data, args);
                            if (methodVal !== undefined)
                            {
                                val.push(methodVal);
                            }
                        }
                        else
                        {
                            $.error('No such method "' + method + '" for ' + classname);
                        }
                    }

                });

                return (val.length === 0 || val.length === 1) ? ((val.length === 0) ? this : val[0]) : val;
            };

            $.fn[pluginname].options = {};

            return this;
        },
        autoload: function(pluginname)
        {
            var arr = pluginname.split(',');
            var len = arr.length;

            for (var i = 0; i < len; i++)
            {
                var name = arr[i].toLowerCase().split(',').map(function(s) { return s.trim() }).join(',');
                this.autoloadQueue.push(name);
            }

            return this;
        },
        autoloadQueue: [],
        startAutoload: function()
        {
            if (!window.MutationObserver || this.autoloadQueue.length === 0)
            {
                return;
            }

            var self = this;
    		var observer = new MutationObserver(function(mutations)
    		{
    			mutations.forEach(function(mutation)
    			{
    				var newNodes = mutation.addedNodes;
    			    if (newNodes.length === 0 || (newNodes.length === 1 && newNodes.nodeType === 3))
    			    {
    				    return;
    				}

                    self.startAutoloadOnce();
    			});
    		});

    		// pass in the target node, as well as the observer options
    		observer.observe(document, {
    			 subtree: true,
    			 childList: true
    		});
        },
        startAutoloadOnce: function()
        {
            var self = this;
            var $nodes = $('[data-component]').not('[data-loaded]');
    		$nodes.each(function()
    		{
        		var $el = $(this);
        		var pluginname = $el.data('component');

                if (self.autoloadQueue.indexOf(pluginname) !== -1)
                {
            		$el.attr('data-loaded', true);
                    $el[pluginname]();
                }
            });

        },
        watch: function()
        {
            Kube.Plugin.startAutoloadOnce();
            Kube.Plugin.startAutoload();
        }
    };

    $(window).on('load', function()
    {
        Kube.Plugin.watch();
    });

}(Kube));
/**
 * @library Kube Animation
 * @author Imperavi LLC
 * @license MIT
 */
(function(Kube)
{
    Kube.Animation = function(element, effect, callback)
    {
        this.namespace = 'animation';
        this.defaults = {};

        // Parent Constructor
        Kube.apply(this, arguments);

        // Initialization
        this.effect = effect;
        this.completeCallback = (typeof callback === 'undefined') ? false : callback;
        this.prefixes = ['', '-moz-', '-o-animation-', '-webkit-'];
        this.queue = [];

        this.start();
    };

    Kube.Animation.prototype = {
        start: function()
        {
	    	if (this.isSlideEffect()) this.setElementHeight();

			this.addToQueue();
			this.clean();
			this.animate();
        },
        addToQueue: function()
        {
            this.queue.push(this.effect);
        },
        setElementHeight: function()
        {
            this.$element.height(this.$element.height());
        },
        removeElementHeight: function()
        {
            this.$element.css('height', '');
        },
        isSlideEffect: function()
        {
            return (this.effect === 'slideDown' || this.effect === 'slideUp');
        },
        isHideableEffect: function()
        {
            var effects = ['fadeOut', 'slideUp', 'flipOut', 'zoomOut', 'slideOutUp', 'slideOutRight', 'slideOutLeft'];

			return ($.inArray(this.effect, effects) !== -1);
        },
        isToggleEffect: function()
        {
            return (this.effect === 'show' || this.effect === 'hide');
        },
        storeHideClasses: function()
        {
            if (this.$element.hasClass('hide-sm'))      this.$element.data('hide-sm-class', true);
            else if (this.$element.hasClass('hide-md')) this.$element.data('hide-md-class', true);
        },
        revertHideClasses: function()
        {
            if (this.$element.data('hide-sm-class'))      this.$element.addClass('hide-sm').removeData('hide-sm-class');
            else if (this.$element.data('hide-md-class')) this.$element.addClass('hide-md').removeData('hide-md-class');
            else                                          this.$element.addClass('hide');
        },
        removeHideClass: function()
        {
            if (this.$element.data('hide-sm-class'))      this.$element.removeClass('hide-sm');
            else if (this.$element.data('hide-md-class')) this.$element.removeClass('hide-md');
            else                                          this.$element.removeClass('hide');
        },
        animate: function()
        {
            this.storeHideClasses();
            if (this.isToggleEffect())
			{
				return this.makeSimpleEffects();
            }

            this.$element.addClass('kubeanimated');
			this.$element.addClass(this.queue[0]);
            this.removeHideClass();

			var _callback = (this.queue.length > 1) ? null : this.completeCallback;
			this.complete('AnimationEnd', $.proxy(this.makeComplete, this), _callback);
        },
        makeSimpleEffects: function()
        {
           	if      (this.effect === 'show') this.removeHideClass();
            else if (this.effect === 'hide') this.revertHideClasses();

            if (typeof this.completeCallback === 'function') this.completeCallback(this);
        },
		makeComplete: function()
		{
            if (this.$element.hasClass(this.queue[0]))
            {
				this.clean();
				this.queue.shift();

				if (this.queue.length) this.animate();
			}
		},
        complete: function(type, make, callback)
		{
    		var event = type.toLowerCase() + ' webkit' + type + ' o' + type + ' MS' + type;

			this.$element.one(event, $.proxy(function()
			{
				if (typeof make === 'function')     make();
				if (this.isHideableEffect())        this.revertHideClasses();
				if (this.isSlideEffect())           this.removeElementHeight();
				if (typeof callback === 'function') callback(this);

				this.$element.off(event);

			}, this));
		},
		clean: function()
		{
			this.$element.removeClass('kubeanimated').removeClass(this.queue[0]);
		}
    };

    // Inheritance
    Kube.Animation.inherits(Kube);

}(Kube));

// Plugin
(function($)
{
    $.fn.animation = function(effect, callback)
    {
        var name = 'fn.animation';

        return this.each(function()
        {
            var $this = $(this), data = $this.data(name);

            $this.data(name, {});
            $this.data(name, (data = new Kube.Animation(this, effect, callback)));
        });
    };

    $.fn.animation.options = {};

})(jQuery);
/**
 * @library Kube Detect
 * @author Imperavi LLC
 * @license MIT
 */
(function(Kube)
{
    Kube.Detect = function() {};

    Kube.Detect.prototype = {
    	isMobile: function()
    	{
    		return /(iPhone|iPod|BlackBerry|Android)/.test(navigator.userAgent);
    	},
    	isDesktop: function()
    	{
    		return !/(iPhone|iPod|iPad|BlackBerry|Android)/.test(navigator.userAgent);
    	},
    	isMobileScreen: function()
    	{
    		return ($(window).width() <= 768);
    	},
    	isTabletScreen: function()
    	{
    		return ($(window).width() >= 768 && $(window).width() <= 1024);
    	},
    	isDesktopScreen: function()
    	{
    		return ($(window).width() > 1024);
    	}
    };


}(Kube));
/**
 * @library Kube FormData
 * @author Imperavi LLC
 * @license MIT
 */
(function(Kube)
{
    Kube.FormData = function(app)
    {
        this.opts = app.opts;
    };

    Kube.FormData.prototype = {
        set: function(data)
        {
            this.data = data;
        },
        get: function(formdata)
    	{
        	this.formdata = formdata;

            if (this.opts.appendForms) this.appendForms();
            if (this.opts.appendFields) this.appendFields();

            return this.data;
    	},
    	appendFields: function()
    	{
    		var $fields = $(this.opts.appendFields);
    		if ($fields.length === 0)
    		{
        		return;
            }

    		var self = this;
            var str = '';

            if (this.formdata)
            {
                $fields.each(function()
    			{
    				self.data.append($(this).attr('name'), $(this).val());
    			});
            }
            else
            {
    			$fields.each(function()
    			{
    				str += '&' + $(this).attr('name') + '=' + $(this).val();
    			});

    			this.data = (this.data === '') ? str.replace(/^&/, '') : this.data + str;
            }
    	},
    	appendForms: function()
    	{
    		var $forms = $(this.opts.appendForms);
    		if ($forms.length === 0)
    		{
    			return;
    		}

            if (this.formdata)
            {
                var self = this;
                var formsData = $(this.opts.appendForms).serializeArray();
                $.each(formsData, function(i,s)
                {
                	self.data.append(s.name, s.value);
                });
            }
            else
            {
                var str = $forms.serialize();

                this.data = (this.data === '') ? str : this.data + '&' + str;
            }
    	}
    };


}(Kube));
/**
 * @library Kube Response
 * @author Imperavi LLC
 * @license MIT
 */
(function(Kube)
{
    Kube.Response = function(app) {};

    Kube.Response.prototype = {
        parse: function(str)
    	{
        	if (str === '') return false;

    		var obj = {};

    		try {
    			obj = JSON.parse(str);
    		} catch (e) {
    			return false;
    		}

    		if (obj[0] !== undefined)
    		{
    			for (var item in obj)
    			{
    				this.parseItem(obj[item]);
    			}
    		}
    		else
    		{
    			this.parseItem(obj);
    		}

    		return obj;
    	},
    	parseItem: function(item)
    	{
    		if (item.type === 'value')
    		{
    			$.each(item.data, $.proxy(function(key, val)
    			{
        			val = (val === null || val === false) ? 0 : val;
        			val = (val === true) ? 1 : val;

    				$(key).val(val);

    			}, this));
    		}
    		else if (item.type === 'html')
    		{
    			$.each(item.data, $.proxy(function(key, val)
    			{
        			val = (val === null || val === false) ? '' : val;

    				$(key).html(this.stripslashes(val));

    			}, this));
    		}
    		else if (item.type === 'addClass')
    		{
    			$.each(item.data, function(key, val)
    			{
    				$(key).addClass(val);
    			});
            }
    		else if (item.type === 'removeClass')
    		{
    			$.each(item.data, function(key, val)
    			{
    				$(key).removeClass(val);
    			});
            }
    		else if (item.type === 'command')
    		{
    			$.each(item.data, function(key, val)
    			{
    				$(val)[key]();
    			});
    		}
    		else if (item.type === 'animation')
    		{
    			$.each(item.data, function(key, data)
    			{
    				data.opts = (typeof data.opts === 'undefined') ? {} : data.opts;

    				$(key).animation(data.name, data.opts);
    			});
    		}
    		else if (item.type === 'location')
    		{
    			top.location.href = item.data;
    		}
    		else if (item.type === 'notify')
    		{
    			$.notify(item.data);
    		}

    		return item;
    	},
        stripslashes: function(str)
    	{
    		return (str+'').replace(/\0/g, '0').replace(/\\([\\'"])/g, '$1');
        }
    };


}(Kube));
/**
 * @library Kube Utils
 * @author Imperavi LLC
 * @license MIT
 */
(function(Kube)
{
    Kube.Utils = function() {};

    Kube.Utils.prototype = {
        disableBodyScroll: function()
    	{
    		var $body = $('html');
    		var windowWidth = window.innerWidth;

    		if (!windowWidth)
    		{
    			var documentElementRect = document.documentElement.getBoundingClientRect();
    			windowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
    		}

    		var isOverflowing = document.body.clientWidth < windowWidth;
    		var scrollbarWidth = this.measureScrollbar();

    		$body.css('overflow', 'hidden');
    		if (isOverflowing) $body.css('padding-right', scrollbarWidth);
    	},
    	measureScrollbar: function()
    	{
    		var $body = $('body');
    		var scrollDiv = document.createElement('div');
    		scrollDiv.className = 'scrollbar-measure';

    		$body.append(scrollDiv);
    		var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    		$body[0].removeChild(scrollDiv);
    		return scrollbarWidth;
    	},
    	enableBodyScroll: function()
    	{
    		$('html').css({ 'overflow': '', 'padding-right': '' });
    	}
    };


}(Kube));
/**
 * @library Kube Message
 * @author Imperavi LLC
 * @license MIT
 */
(function(Kube)
{
    Kube.Message = function(element, options)
    {
        this.namespace = 'message';
        this.defaults = {
            closeSelector: '.close',
            closeEvent: 'click',
            animationOpen: 'fadeIn',
            animationClose: 'fadeOut',
            callbacks: ['open', 'opened', 'close', 'closed']
        };

        // Parent Constructor
        Kube.apply(this, arguments);

        // Initialization
        this.start();
    };

    // Functionality
    Kube.Message.prototype = {
        start: function()
        {
            this.$close = this.$element.find(this.opts.closeSelector);
            this.$close.on(this.opts.closeEvent + '.' + this.namespace, $.proxy(this.close, this));
            this.$element.addClass('open');
        },
        stop: function()
        {
            this.$close.off('.' + this.namespace);
            this.$element.removeClass('open');
        },
        open: function(e)
        {
            if (e) e.preventDefault();

            if (!this.isOpened())
            {
                this.callback('open');
                this.$element.animation(this.opts.animationOpen, $.proxy(this.onOpened, this));
            }
        },
        isOpened: function()
        {
            return this.$element.hasClass('open');
        },
        onOpened: function()
        {
            this.callback('opened');
            this.$element.addClass('open');
        },
        close: function(e)
        {
            if (e) e.preventDefault();

            if (this.isOpened())
            {
                this.callback('close');
                this.$element.animation(this.opts.animationClose, $.proxy(this.onClosed, this));
            }
        },
        onClosed: function()
        {
            this.callback('closed');
            this.$element.removeClass('open');
        }
    };

    // Inheritance
    Kube.Message.inherits(Kube);

    // Plugin
    Kube.Plugin.create('Message');
    Kube.Plugin.autoload('Message');

}(Kube));
/**
 * @library Kube Sticky
 * @author Imperavi LLC
 * @license MIT
 */
(function(Kube)
{
    Kube.Sticky = function(element, options)
    {
        this.namespace = 'sticky';
        this.defaults = {
            classname: 'fixed',
            offset: 0, // pixels
            callbacks: ['fixed', 'unfixed']
        };

        // Parent Constructor
        Kube.apply(this, arguments);

        // Initialization
        this.start();
    };

    // Functionality
    Kube.Sticky.prototype = {
        start: function()
        {
    	    this.offsetTop = this.getOffsetTop();

    	    this.load();
    	    $(window).scroll($.proxy(this.load, this));
    	},
    	getOffsetTop: function()
    	{
        	return this.$element.offset().top;
    	},
    	load: function()
    	{
    		return (this.isFix()) ? this.fixed() : this.unfixed();
    	},
    	isFix: function()
    	{
            return ($(window).scrollTop() > (this.offsetTop + this.opts.offset));
    	},
    	fixed: function()
    	{
    		this.$element.addClass(this.opts.classname).css('top', this.opts.offset + 'px');
    		this.callback('fixed');
    	},
    	unfixed: function()
    	{
    		this.$element.removeClass(this.opts.classname).css('top', '');
    		this.callback('unfixed');
        }
    };

    // Inheritance
    Kube.Sticky.inherits(Kube);

    // Plugin
    Kube.Plugin.create('Sticky');
    Kube.Plugin.autoload('Sticky');

}(Kube));
/**
 * @library Kube Toggleme
 * @author Imperavi LLC
 * @license MIT
 */
(function(Kube)
{
    Kube.Toggleme = function(element, options)
    {
        this.namespace = 'toggleme';
        this.defaults = {
            toggleEvent: 'click',
            target: null,
            text: '',
            animationOpen: 'slideDown',
            animationClose: 'slideUp',
            callbacks: ['open', 'opened', 'close', 'closed']
        };

        // Parent Constructor
        Kube.apply(this, arguments);

        // Initialization
        this.start();
    };

    // Functionality
    Kube.Toggleme.prototype = {
        start: function()
        {
            if (!this.hasTarget()) return;

            this.$element.on(this.opts.toggleEvent + '.' + this.namespace, $.proxy(this.toggle, this));
        },
        stop: function()
        {
            this.$element.off('.' + this.namespace);
            this.revertText();
        },
        toggle: function(e)
        {
            if (this.isOpened()) this.close(e);
            else                 this.open(e);
        },
        open: function(e)
        {
            if (e) e.preventDefault();

            if (!this.isOpened())
            {
                this.storeText();
                this.callback('open');
                this.$target.animation('slideDown', $.proxy(this.onOpened, this));

                // changes the text of $element with a less delay to smooth
                setTimeout($.proxy(this.replaceText, this), 100);
    		}
        },
        close: function(e)
        {
            if (e) e.preventDefault();

            if (this.isOpened())
            {
                this.callback('close');
                this.$target.animation('slideUp', $.proxy(this.onClosed, this));
    		}
        },
    	isOpened: function()
        {
            return (this.$target.hasClass('open'));
        },
        onOpened: function()
        {
            this.$target.addClass('open');
         	this.callback('opened');
        },
        onClosed: function()
        {
            this.$target.removeClass('open');
            this.revertText();
        	this.callback('closed');
        },
        storeText: function()
        {
            this.$element.data('replacement-text', this.$element.html());
        },
        revertText: function()
        {
            var text = this.$element.data('replacement-text');
            if (text) this.$element.html(text);

            this.$element.removeData('replacement-text');
        },
        replaceText: function()
        {
            if (this.opts.text !== '')
            {
                this.$element.html(this.opts.text);
            }
        }
    };

    // Inheritance
    Kube.Toggleme.inherits(Kube);

    // Plugin
    Kube.Plugin.create('Toggleme');
    Kube.Plugin.autoload('Toggleme');

}(Kube));
/**
 * @library Kube Offcanvas
 * @author Imperavi LLC
 * @license MIT
 */
(function(Kube)
{
    Kube.Offcanvas = function(element, options)
    {
        this.namespace = 'offcanvas';
        this.defaults = {
    		target: null, // selector
    		push: true, // boolean
    		width: '250px', // string
    		direction: 'left', // string: left or right
    		toggleEvent: 'click',
    		clickOutside: true, // boolean
    		animationOpen: 'slideInLeft',
    		animationClose: 'slideOutLeft',
    		callbacks: ['open', 'opened', 'close', 'closed']
        };

        // Parent Constructor
        Kube.apply(this, arguments);

        // Services
        this.utils = new Kube.Utils();
        this.detect = new Kube.Detect();

        // Initialization
        this.start();
    };

    // Functionality
    Kube.Offcanvas.prototype = {
        start: function()
        {
            if (!this.hasTarget()) return;

            this.buildTargetWidth();
            this.buildAnimationDirection();

            this.$close = this.getCloseLink();
            this.$element.on(this.opts.toggleEvent + '.' + this.namespace, $.proxy(this.toggle, this));
            this.$target.addClass('offcanvas');
    	},
    	stop: function()
    	{
        	this.closeAll();

            this.$element.off('.' + this.namespace);
            this.$close.off('.' + this.namespace);
            $(document).off('.' + this.namespace);
    	},
    	toggle: function(e)
    	{
        	if (this.isOpened()) this.close(e);
        	else                 this.open(e);
        },
    	buildTargetWidth: function()
    	{
            this.opts.width = ($(window).width() < parseInt(this.opts.width)) ? '100%' : this.opts.width;
    	},
    	buildAnimationDirection: function()
    	{
            if (this.opts.direction === 'right')
            {
                this.opts.animationOpen = 'slideInRight';
    			this.opts.animationClose = 'slideOutRight';
            }
    	},
    	getCloseLink: function()
    	{
            return this.$target.find('.close');
    	},
    	open: function(e)
    	{
        	if (e) e.preventDefault();

            if (!this.isOpened())
            {
                this.closeAll();
        		this.callback('open');

                this.$target.addClass('offcanvas-' + this.opts.direction);
                this.$target.css('width', this.opts.width);

                this.pushBody();

        		this.$target.animation(this.opts.animationOpen, $.proxy(this.onOpened, this));
    		}
    	},
    	closeAll: function()
    	{
    		var $elms = $(document).find('.offcanvas');
    		if ($elms.length !== 0)
    		{
                $elms.each(function()
                {
                    var $el = $(this);

                    if ($el.hasClass('open'))
                    {
                        $el.css('width', '').animation('hide');
                        $el.removeClass('open offcanvas-left offcanvas-right');
                    }

                });

                $(document).off('.' + this.namespace);
                $('body').css('left', '');
    		}
    	},
    	close: function(e)
    	{
        	if (e)
        	{
            	var $el = $(e.target);
            	var isTag = ($el[0].tagName === 'A' || $el[0].tagName === 'BUTTON');
            	if (isTag && $el.closest('.offcanvas').length !== 0 && !$el.hasClass('close'))
            	{
                	return;
            	}

            	e.preventDefault();
            }

            if (this.isOpened())
        	{
        		this.utils.enableBodyScroll();
        		this.callback('close');
                this.pullBody();
        		this.$target.animation(this.opts.animationClose, $.proxy(this.onClosed, this));
    		}
    	},
    	isOpened: function()
        {
            return (this.$target.hasClass('open'));
        },
    	onOpened: function()
    	{
    		if (this.opts.clickOutside) $(document).on('click.' + this.namespace, $.proxy(this.close, this));
    		if (this.detect.isMobileScreen()) $('html').addClass('no-scroll');

            $(document).on('keyup.' + this.namespace, $.proxy(this.handleKeyboard, this));
            this.$close.on('click.' + this.namespace, $.proxy(this.close, this));

    		this.utils.disableBodyScroll();
            this.$target.addClass('open');
            this.callback('opened');
    	},
    	onClosed: function()
    	{
    		if (this.detect.isMobileScreen()) $('html').removeClass('no-scroll');

            this.$target.css('width', '').removeClass('offcanvas-' + this.opts.direction);

            this.$close.off('.' + this.namespace);
    		$(document).off('.' + this.namespace);

            this.$target.removeClass('open');
    		this.callback('closed');
    	},
    	handleKeyboard: function(e)
    	{
    		if (e.which === 27) this.close();
    	},
    	pullBody: function()
    	{
            if (this.opts.push)
            {
                $('body').animate({ left: 0 }, 350, function() { $(this).removeClass('offcanvas-push-body'); });
            }
    	},
    	pushBody: function()
    	{
            if (this.opts.push)
            {
                var properties = (this.opts.direction === 'left') ? { 'left': this.opts.width } : { 'left': '-' + this.opts.width };
                $('body').addClass('offcanvas-push-body').animate(properties, 200);
            }
    	}
    };

    // Inheritance
    Kube.Offcanvas.inherits(Kube);

    // Plugin
    Kube.Plugin.create('Offcanvas');
    Kube.Plugin.autoload('Offcanvas');

}(Kube));
/**
 * @library Kube Collapse
 * @author Imperavi LLC
 * @license MIT
 */
(function(Kube)
{
    Kube.Collapse = function(element, options)
    {
        this.namespace = 'collapse';
        this.defaults = {
            target: null,
            toggle: true,
            active: false, // string (hash = tab id selector)
            toggleClass: 'collapse-toggle',
            boxClass: 'collapse-box',
            callbacks: ['open', 'opened', 'close', 'closed'],

            // private
            hashes: [],
        	currentHash: false,
        	currentItem: false
        };

        // Parent Constructor
        Kube.apply(this, arguments);

        // Initialization
        this.start();
    };

    // Functionality
    Kube.Collapse.prototype = {
        start: function()
        {
            // items
            this.$items = this.getItems();
            this.$items.each($.proxy(this.loadItems, this));

            // boxes
            this.$boxes = this.getBoxes();

            // active
            this.setActiveItem();
        },
        getItems: function()
        {
            return this.$element.find('.' + this.opts.toggleClass);
        },
        getBoxes: function()
        {
            return this.$element.find('.' + this.opts.boxClass);
        },
    	loadItems: function(i, el)
    	{
    		var item = this.getItem(el);

    		// set item identificator
    		item.$el.attr('rel', item.hash);

            // active
    		if (!$(item.hash).hasClass('hide'))
    		{
    			this.opts.currentItem = item;
    			this.opts.active = item.hash;

                item.$el.addClass('active');
            }

    		// event
    		item.$el.on('click.collapse', $.proxy(this.toggle, this));

    	},
    	setActiveItem: function()
    	{
    		if (this.opts.active !== false)
    		{
    			this.opts.currentItem = this.getItemBy(this.opts.active);
    			this.opts.active = this.opts.currentItem.hash;
    		}

            if (this.opts.currentItem !== false)
            {
    		    this.addActive(this.opts.currentItem);
    		    this.opts.currentItem.$box.removeClass('hide');
    		}
    	},
    	addActive: function(item)
    	{
    		item.$box.removeClass('hide').addClass('open');
    		item.$el.addClass('active');

    		if (item.$caret !== false) item.$caret.removeClass('down').addClass('up');
    		if (item.$parent !== false) item.$parent.addClass('active');

    		this.opts.currentItem = item;
    	},
    	removeActive: function(item)
    	{
    		item.$box.removeClass('open');
    		item.$el.removeClass('active');

    		if (item.$caret !== false) item.$caret.addClass('down').removeClass('up');
    		if (item.$parent !== false) item.$parent.removeClass('active');

    		this.opts.currentItem = false;
    	},
        toggle: function(e)
        {
            if (e) e.preventDefault();

            var target = $(e.target).closest('.' + this.opts.toggleClass).get(0) || e.target;
            var item = this.getItem(target);

            if (this.isOpened(item.hash)) this.close(item.hash);
            else                          this.open(e)
        },
        openAll: function()
        {
            this.$items.addClass('active');
            this.$boxes.addClass('open').removeClass('hide');
        },
        open: function(e, push)
        {
        	if (typeof e === 'undefined') return;
    		if (typeof e === 'object') e.preventDefault();

            var target = $(e.target).closest('.' + this.opts.toggleClass).get(0) || e.target;
    		var item = (typeof e === 'object') ? this.getItem(target) : this.getItemBy(e);

    		if (item.$box.hasClass('open'))
    		{
        		return;
    		}

    		if (this.opts.toggle) this.closeAll();

    		this.callback('open', item);
    		this.addActive(item);

            item.$box.animation('slideDown', $.proxy(this.onOpened, this));
        },
        onOpened: function()
        {
    		this.callback('opened', this.opts.currentItem);
        },
        closeAll: function()
        {
            this.$items.removeClass('active').closest('li').removeClass('active');
            this.$boxes.removeClass('open').addClass('hide');
        },
        close: function(num)
        {
    		var item = this.getItemBy(num);

    		this.callback('close', item);

    		this.opts.currentItem = item;

    		item.$box.animation('slideUp', $.proxy(this.onClosed, this));
        },
        onClosed: function()
        {
            var item = this.opts.currentItem;

    		this.removeActive(item);
    		this.callback('closed', item);
        },
        isOpened: function(hash)
        {
            return $(hash).hasClass('open');
        },
    	getItem: function(element)
    	{
    		var item = {};

    		item.$el = $(element);
    		item.hash = item.$el.attr('href');
    		item.$box = $(item.hash);

    		var $parent = item.$el.parent();
    		item.$parent = ($parent[0].tagName === 'LI') ? $parent : false;

    		var $caret = item.$el.find('.caret');
    		item.$caret = ($caret.length !== 0) ? $caret : false;

    		return item;
    	},
    	getItemBy: function(num)
    	{
    		var element = (typeof num === 'number') ? this.$items.eq(num-1) : this.$element.find('[rel="' + num + '"]');

    		return this.getItem(element);
        }
    };

    // Inheritance
    Kube.Collapse.inherits(Kube);

    // Plugin
    Kube.Plugin.create('Collapse');
    Kube.Plugin.autoload('Collapse');

}(Kube));
/**
 * @library Kube Dropdown
 * @author Imperavi LLC
 * @license MIT
 */
(function(Kube)
{
    Kube.Dropdown = function(element, options)
    {
        this.namespace = 'dropdown';
        this.defaults = {
    		target: null,
    		toggleEvent: 'click',
    		height: false, // integer
    		width: false, // integer
    		animationOpen: 'slideDown',
        	animationClose: 'slideUp',
    		caretUp: false,
            callbacks: ['open', 'opened', 'close', 'closed']
        };

        // Parent Constructor
        Kube.apply(this, arguments);

        // Services
        this.utils = new Kube.Utils();
        this.detect = new Kube.Detect();

        // Initialization
        this.start();
    };

    // Functionality
    Kube.Dropdown.prototype = {
        start: function()
        {
            this.buildClose();
            this.buildCaret();

            if (this.detect.isMobile()) this.buildMobileAnimation();

            this.$target.addClass('hide');
            this.$element.on(this.opts.toggleEvent + '.' + this.namespace, $.proxy(this.toggle, this));

    	},
    	stop: function()
    	{
        	this.$element.off('.' + this.namespace);
            this.$target.removeClass('open').addClass('hide');
    		this.disableEvents();
    	},
    	buildMobileAnimation: function()
    	{
            this.opts.animationOpen = 'fadeIn';
            this.opts.animationClose = 'fadeOut';
    	},
    	buildClose: function()
    	{
            this.$close = this.$target.find('.close');
    	},
    	buildCaret: function()
    	{
            this.$caret = this.getCaret();
    		this.buildCaretPosition();
    	},
    	buildCaretPosition: function()
    	{
    		var height = this.$element.offset().top + this.$element.innerHeight() + this.$target.innerHeight();

    		if ($(document).height() > height)
    		{
    			return;
    		}

            this.opts.caretUp = true;
    		this.$caret.addClass('up');
    	},
    	getCaret: function()
    	{
        	return this.$element.find('.caret');
    	},
    	toggleCaretOpen: function()
    	{
    		if (this.opts.caretUp) this.$caret.removeClass('up').addClass('down');
    		else                   this.$caret.removeClass('down').addClass('up');
    	},
    	toggleCaretClose: function()
    	{
    		if (this.opts.caretUp) this.$caret.removeClass('down').addClass('up');
    		else                   this.$caret.removeClass('up').addClass('down');
    	},
    	toggle: function(e)
    	{
        	if (this.isOpened()) this.close(e);
        	else                 this.open(e);
    	},
    	open: function(e)
    	{
        	if (e) e.preventDefault();

            this.callback('open');
    		$('.dropdown').removeClass('open').addClass('hide');

    		if (this.opts.height) this.$target.css('min-height', this.opts.height + 'px');
    		if (this.opts.width)  this.$target.width(this.opts.width);

    		this.setPosition();
    		this.toggleCaretOpen();

    		this.$target.animation(this.opts.animationOpen, $.proxy(this.onOpened, this));
    	},
    	close: function(e)
    	{
            if (!this.isOpened())
    		{
    			return;
    		}

    		if (e)
    		{
    			if (this.shouldNotBeClosed(e.target))
    			{
    				return;
    			}

    			e.preventDefault();
    		}

    		this.utils.enableBodyScroll();
    		this.callback('close');
    		this.toggleCaretClose();

    		this.$target.animation(this.opts.animationClose, $.proxy(this.onClosed, this));
    	},
    	onClosed: function()
    	{
            this.$target.removeClass('open');
    		this.disableEvents();
    		this.callback('closed');
    	},
    	onOpened: function()
    	{
    		this.$target.addClass('open');
    		this.enableEvents();
    		this.callback('opened');
    	},
    	isOpened: function()
    	{
        	return (this.$target.hasClass('open'));
    	},
    	enableEvents: function()
    	{
    		if (this.detect.isDesktop())
    		{
    			this.$target.on('mouseover.' + this.namespace, $.proxy(this.utils.disableBodyScroll, this.utils))
    			            .on('mouseout.' + this.namespace,  $.proxy(this.utils.enableBodyScroll, this.utils));
    		}

    		$(document).on('scroll.' + this.namespace, $.proxy(this.setPosition, this));
    		$(window).on('resize.' + this.namespace, $.proxy(this.setPosition, this));
     		$(document).on('click.' + this.namespace + ' touchstart.' + this.namespace, $.proxy(this.close, this));
    		$(document).on('keydown.' + this.namespace, $.proxy(this.handleKeyboard, this));
    		this.$target.find('[data-action="dropdown-close"]').on('click.' + this.namespace, $.proxy(this.close, this));
    	},
    	disableEvents: function()
    	{
    		this.$target.off('.' + this.namespace);
    		$(document).off('.' + this.namespace);
    		$(window).off('.' + this.namespace);
    	},
    	handleKeyboard: function(e)
    	{
    		if (e.which === 27) this.close(e);
    	},
    	shouldNotBeClosed: function(el)
    	{
            if ($(el).attr('data-action') === 'dropdown-close' || el === this.$close[0])
            {
                return false;
        	}
        	else if ($(el).closest('.dropdown').length === 0)
        	{
            	return false;
        	}

        	return true;
    	},
        isNavigationFixed: function()
    	{
        	return (this.$element.closest('.fixed').length !== 0);
      	},
    	getPlacement: function(height)
    	{
    		return ($(document).height() < height) ? 'top' : 'bottom';
    	},
    	getOffset: function(position)
    	{
    		return (this.isNavigationFixed()) ? this.$element.position() : this.$element.offset();
    	},
    	getPosition: function()
    	{
    		return (this.isNavigationFixed()) ? 'fixed' : 'absolute';
    	},
    	setPosition: function()
    	{
    		if (this.detect.isMobile())
    		{
                this.$target.addClass('dropdown-mobile');
                return;
    		}

    		var position = this.getPosition();
			var coords = this.getOffset(position);
			var height = this.$target.innerHeight();
			var width = this.$target.innerWidth();
			var placement = this.getPlacement(coords.top + height + this.$element.innerHeight());
			var leftFix = ($(window).width() < (coords.left + width)) ? (width - this.$element.innerWidth()) : 0;
			var top, left = coords.left - leftFix;

			if (placement === 'bottom')
			{
    			if (!this.isOpened()) this.$caret.removeClass('up').addClass('down');

				this.opts.caretUp = false;
				top = coords.top + this.$element.outerHeight() + 1;
			}
			else
			{
				this.opts.animationOpen = 'show';
				this.opts.animationClose = 'hide';

                if (!this.isOpened()) this.$caret.addClass('up').removeClass('down');

				this.opts.caretUp = true;
				top = coords.top - height - 1;
			}

			this.$target.css({ position: position, top: top + 'px', left: left + 'px' });
    	}
    };

    // Inheritance
    Kube.Dropdown.inherits(Kube);

    // Plugin
    Kube.Plugin.create('Dropdown');
    Kube.Plugin.autoload('Dropdown');

}(Kube));
/**
 * @library Kube Tabs
 * @author Imperavi LLC
 * @license MIT
 */
(function(Kube)
{
    Kube.Tabs = function(element, options)
    {
        this.namespace = 'tabs';
        this.defaults = {
    		equals: false,
    		active: false, // string (hash = tab id selector)
    		live: false, // class selector
    		hash: true, //boolean
    		callbacks: ['init', 'next', 'prev', 'open', 'opened', 'close', 'closed']
        };

        // Parent Constructor
        Kube.apply(this, arguments);

        // Initialization
        this.start();
    };

    // Functionality
    Kube.Tabs.prototype = {
        start: function()
        {
            if (this.opts.live !== false) this.buildLiveTabs();

            this.tabsCollection = [];
            this.hashesCollection = [];
            this.currentHash = [];
            this.currentItem = false;

            // items
            this.$items = this.getItems();
            this.$items.each($.proxy(this.loadItems, this));

            // tabs
    		this.$tabs = this.getTabs();

            // location hash
    		this.currentHash = this.getLocationHash();

    		// close all
    		this.closeAll();

            // active & height
    		this.setActiveItem();
    		this.setItemHeight();

            // callback
    		this.callback('init');

    	},
    	getTabs: function()
    	{
        	return $(this.tabsCollection).map(function()
        	{
            	return this.toArray();
            });
    	},
    	getItems: function()
    	{
    		return this.$element.find('a');
    	},
    	loadItems: function(i, el)
    	{
    		var item = this.getItem(el);

    		// set item identificator
    		item.$el.attr('rel', item.hash);

    		// collect item
            this.collectItem(item);

            // active
    		if (item.$parent.hasClass('active'))
    		{
    			this.currentItem = item;
    			this.opts.active = item.hash;
    		}

    		// event
            item.$el.on('click.tabs', $.proxy(this.open, this));
    	},
    	collectItem: function(item)
    	{
    		this.tabsCollection.push(item.$tab);
    		this.hashesCollection.push(item.hash);
    	},
    	buildLiveTabs: function()
    	{
    		var $layers = $(this.opts.live);

    		if ($layers.length === 0)
    		{
    			return;
    		}

    		this.$liveTabsList = $('<ul />');
    		$layers.each($.proxy(this.buildLiveItem, this));

    		this.$element.html('').append(this.$liveTabsList);

    	},
    	buildLiveItem: function(i, tab)
    	{
    		var $tab = $(tab);
    		var $li = $('<li />');
    		var $a = $('<a />');
    		var index = i + 1;

    		$tab.attr('id', this.getLiveItemId($tab, index));

    		var hash = '#' + $tab.attr('id');
    		var title = this.getLiveItemTitle($tab);

    		$a.attr('href', hash).attr('rel', hash).text(title);
    		$li.append($a);

    		this.$liveTabsList.append($li);
    	},
    	getLiveItemId: function($tab, index)
    	{
        	return (typeof $tab.attr('id') === 'undefined') ? this.opts.live.replace('.', '') + index : $tab.attr('id');
    	},
    	getLiveItemTitle: function($tab)
    	{
        	return (typeof $tab.attr('data-title') === 'undefined') ? $tab.attr('id') : $tab.attr('data-title');
    	},
    	setActiveItem: function()
    	{
    		if (this.currentHash)
    		{
    			this.currentItem = this.getItemBy(this.currentHash);
    			this.opts.active = this.currentHash;
    		}
    		else if (this.opts.active === false)
    		{
    			this.currentItem = this.getItem(this.$items.first());
    			this.opts.active = this.currentItem.hash;
    		}

    		this.addActive(this.currentItem);
    	},
    	addActive: function(item)
    	{
    		item.$parent.addClass('active');
    		item.$tab.removeClass('hide').addClass('open');

    		this.currentItem = item;
    	},
    	removeActive: function(item)
    	{
    		item.$parent.removeClass('active');
    		item.$tab.addClass('hide').removeClass('open');

    		this.currentItem = false;
    	},
    	next: function(e)
    	{
    		if (e) e.preventDefault();

    		var item = this.getItem(this.fetchElement('next'));

    		this.open(item.hash);
    		this.callback('next', item);

    	},
    	prev: function(e)
    	{
    		if (e) e.preventDefault();

    		var item = this.getItem(this.fetchElement('prev'));

    		this.open(item.hash);
    		this.callback('prev', item);
    	},
    	fetchElement: function(type)
    	{
            var element;
    		if (this.currentItem !== false)
    		{
    			// prev or next
    			element = this.currentItem.$parent[type]().find('a');

    			if (element.length === 0)
    			{
    				return;
    			}
    		}
    		else
    		{
    			// first
    			element = this.$items[0];
    		}

    		return element;
    	},
    	open: function(e, push)
    	{
        	if (typeof e === 'undefined') return;
    		if (typeof e === 'object') e.preventDefault();

    		var item = (typeof e === 'object') ? this.getItem(e.target) : this.getItemBy(e);
    		this.closeAll();

    		this.callback('open', item);
    		this.addActive(item);

    		// push state (doesn't need to push at the start)
            this.pushStateOpen(push, item);
    		this.callback('opened', item);
    	},
    	pushStateOpen: function(push, item)
    	{
    		if (push !== false && this.opts.hash !== false)
    		{
    			history.pushState(false, false, item.hash);
    		}
    	},
    	close: function(num)
    	{
    		var item = this.getItemBy(num);

    		if (!item.$parent.hasClass('active'))
    		{
    			return;
    		}

    		this.callback('close', item);
    		this.removeActive(item);
    		this.pushStateClose();
    		this.callback('closed', item);

    	},
    	pushStateClose: function()
    	{
            if (this.opts.hash !== false)
            {
    			history.pushState(false, false, ' ');
    		}
    	},
    	closeAll: function()
    	{
    		this.$tabs.removeClass('open').addClass('hide');
    		this.$items.parent().removeClass('active');
    	},
    	getItem: function(element)
    	{
    		var item = {};

    		item.$el = $(element);
    		item.hash = item.$el.attr('href');
    		item.$parent = item.$el.parent();
    		item.$tab = $(item.hash);

    		return item;
    	},
    	getItemBy: function(num)
    	{
    		var element = (typeof num === 'number') ? this.$items.eq(num-1) : this.$element.find('[rel="' + num + '"]');

    		return this.getItem(element);
    	},
    	getLocationHash: function()
    	{
    		if (this.opts.hash === false)
    		{
    			return false;
    		}

    		return (this.isHash()) ? top.location.hash : false;
    	},
    	isHash: function()
    	{
        	return !(top.location.hash === '' || $.inArray(top.location.hash, this.hashesCollection) === -1);
    	},
    	setItemHeight: function()
    	{
    		if (this.opts.equals)
    		{
    	    	var minHeight = this.getItemMaxHeight() + 'px';
        		this.$tabs.css('min-height', minHeight);
    		}
    	},
    	getItemMaxHeight: function()
    	{
    		var max = 0;
    		this.$tabs.each(function()
    		{
    			var h = $(this).height();
    			max = h > max ? h : max;
    		});

    		return max;
    	}
    };

    // Inheritance
    Kube.Tabs.inherits(Kube);

    // Plugin
    Kube.Plugin.create('Tabs');
    Kube.Plugin.autoload('Tabs');

}(Kube));
/**
 * @library Kube Modal
 * @author Imperavi LLC
 * @license MIT
 */
(function($)
{
    $.modalcurrent = null;
	$.modalwindow = function(options)
	{
    	var opts = $.extend({}, options, { show: true });
    	var $element = $('<span />');

    	$element.modal(opts);
	};

})(jQuery);

(function(Kube)
{
    Kube.Modal = function(element, options)
    {
        this.namespace = 'modal';
        this.defaults = {
            target: null,
            show: false,
    		url: false,
    		header: false,
    		width: '600px', // string
    		height: false, // or string
    		maxHeight: false,
    		position: 'center', // top or center
    		overlay: true,
    		appendForms: false,
    		appendFields: false,
    		animationOpen: 'show',
        	animationClose: 'hide',
    		callbacks: ['open', 'opened', 'close', 'closed']
        };

        // Parent Constructor
        Kube.apply(this, arguments);

        // Services
        this.utils = new Kube.Utils();
        this.detect = new Kube.Detect();

        // Initialization
        this.start();
    };

    // Functionality
    Kube.Modal.prototype = {
        start: function()
        {
            if (!this.hasTarget())
    		{
    			return;
    		}

            if (this.opts.show) this.load();
    		else this.$element.on('click.' + this.namespace, $.proxy(this.load, this));
    	},
    	buildModal: function()
    	{
    		this.$modal = this.$target.find('.modal');
    		this.$header = this.$target.find('.modal-header');
    		this.$close = this.$target.find('.close');
    		this.$body = this.$target.find('.modal-body');
    	},
    	buildOverlay: function()
    	{
    		if (this.opts.overlay === false)
    		{
    			return;
    		}

    		if ($('#modal-overlay').length !== 0)
    		{
    			this.$overlay = $('#modal-overlay');
    		}
    		else
    		{
    			this.$overlay = $('<div id="modal-overlay">').addClass('hide');
    			$('body').prepend(this.$overlay);
    		}

    		this.$overlay.addClass('overlay');
    	},
    	buildHeader: function()
    	{
        	if (this.opts.header) this.$header.html(this.opts.header);
    	},
    	load: function(e)
    	{
    		this.buildModal();
    		this.buildOverlay();
    		this.buildHeader();

            if (this.opts.url) this.buildContent();
            else               this.open(e);
    	},
    	open: function(e)
    	{
        	if (e) e.preventDefault();

            if (this.isOpened())
    		{
    			return;
    		}

    		if (this.detect.isMobile()) this.opts.width = '96%';
    		if (this.opts.overlay)      this.$overlay.removeClass('hide');

    		this.$target.removeClass('hide');
    		this.$modal.removeClass('hide');

            this.enableEvents();
    		this.findActions();

    		this.resize();
    		$(window).on('resize.' + this.namespace, $.proxy(this.resize, this));

    		if (this.detect.isDesktop()) this.utils.disableBodyScroll();

    		// enter
    		this.$modal.find('input[type=text],input[type=url],input[type=email]').on('keydown.' + this.namespace, $.proxy(this.handleEnter, this));

    		this.callback('open');
    		this.$modal.animation(this.opts.animationOpen, $.proxy(this.onOpened, this));
        },
        close: function(e)
        {
            if (!this.$modal || !this.isOpened())
    		{
    			return;
    		}

    		if (e)
    		{
    			if (this.shouldNotBeClosed(e.target))
    			{
    				return;
    			}

    			e.preventDefault();
    		}

    		this.callback('close');
    		this.disableEvents();

    		this.$modal.animation(this.opts.animationClose, $.proxy(this.onClosed, this));

            if (this.opts.overlay) this.$overlay.animation(this.opts.animationClose);
        },
    	onOpened: function()
    	{
    		this.$modal.addClass('open');
            this.callback('opened');

            $.modalcurrent = this;
    	},
    	onClosed: function()
    	{
    		this.callback('closed');

            this.$target.addClass('hide');
            this.$modal.removeClass('open');

    		if (this.detect.isDesktop()) this.utils.enableBodyScroll();

    		this.$body.css('height', '');
            $.modalcurrent = null;
    	},
    	isOpened: function()
    	{
        	return (this.$modal.hasClass('open'));
    	},
    	getData: function()
    	{
            var formdata = new Kube.FormData(this);
            formdata.set('');

            return formdata.get();
    	},
    	buildContent: function()
    	{
    		$.ajax({
    			url: this.opts.url + '?' + new Date().getTime(),
    			cache: false,
    			type: 'post',
    			data: this.getData(),
    			success: $.proxy(function(data)
    			{
    				this.$body.html(data);
    				this.open();

    			}, this)
    		});
    	},
    	buildWidth: function()
    	{
    		var width = this.opts.width;
    		var top = '2%';
    		var bottom = '2%';
    		var percent = width.match(/%$/);

    		if ((parseInt(this.opts.width) > $(window).width()) && !percent)
    		{
                width = '96%';
    		}
    		else if (!percent)
    		{
                top = '16px';
                bottom = '16px';
    		}

    		this.$modal.css({ 'width': width, 'margin-top': top, 'margin-bottom': bottom });

    	},
    	buildPosition: function()
    	{
    		if (this.opts.position !== 'center')
    		{
    			return;
    		}

    		var windowHeight = $(window).height();
    		var height = this.$modal.outerHeight();
    		var top = (windowHeight/2 - height/2) + 'px';

    		if (this.detect.isMobile())     top = '2%';
    		else if (height > windowHeight) top = '16px';

    		this.$modal.css('margin-top', top);
    	},
    	buildHeight: function()
    	{
    		var windowHeight = $(window).height();

    		if (this.opts.maxHeight)
    		{
        		var padding = parseInt(this.$body.css('padding-top')) + parseInt(this.$body.css('padding-bottom'));
        		var margin = parseInt(this.$modal.css('margin-top')) + parseInt(this.$modal.css('margin-bottom'));
    			var height = windowHeight - this.$header.innerHeight() - padding - margin;

    			this.$body.height(height);
    		}
    		else if (this.opts.height !== false)
    		{
    			this.$body.css('height', this.opts.height);
    		}

    		var modalHeight = this.$modal.outerHeight();
    		if (modalHeight > windowHeight)
    		{
    			this.opts.animationOpen = 'show';
    			this.opts.animationClose = 'hide';
    		}
    	},
    	resize: function()
    	{
    		this.buildWidth();
    		this.buildPosition();
    		this.buildHeight();
    	},
    	enableEvents: function()
    	{
    		this.$close.on('click.' + this.namespace, $.proxy(this.close, this));
    		$(document).on('keyup.' + this.namespace, $.proxy(this.handleEscape, this));
    		this.$target.on('click.' + this.namespace, $.proxy(this.close, this));
    	},
    	disableEvents: function()
    	{
    		this.$close.off('.' + this.namespace);
    		$(document).off('.' + this.namespace);
    		this.$target.off('.' + this.namespace);
    		$(window).off('.' + this.namespace);
    	},
    	findActions: function()
    	{
    		this.$body.find('[data-action="modal-close"]').on('mousedown.' + this.namespace, $.proxy(this.close, this));
    	},
    	setHeader: function(header)
    	{
    		this.$header.html(header);
    	},
    	setContent: function(content)
    	{
    		this.$body.html(content);
    	},
    	setWidth: function(width)
    	{
    		this.opts.width = width;
    		this.resize();
    	},
    	getModal: function()
    	{
            return this.$modal;
    	},
    	getBody: function()
    	{
            return this.$body;
    	},
    	getHeader: function()
    	{
            return this.$header;
    	},
    	handleEnter: function(e)
    	{
        	if (e.which === 13)
        	{
            	e.preventDefault();
            	this.close(false);
            }
    	},
    	handleEscape: function(e)
    	{
        	return (e.which === 27) ? this.close(false) : true;
    	},
    	shouldNotBeClosed: function(el)
    	{
            if ($(el).attr('data-action') === 'modal-close' || el === this.$close[0])
            {
                return false;
        	}
        	else if ($(el).closest('.modal').length === 0)
        	{
            	return false;
        	}

        	return true;
    	}
    };

    // Inheritance
    Kube.Modal.inherits(Kube);

    // Plugin
    Kube.Plugin.create('Modal');
    Kube.Plugin.autoload('Modal');

}(Kube));
// source --> /wp-content/themes/ldvptheme/assets/js/maps.js?ver=140aea48735cb3412049037301acb66e 


 function initialize() {      
    var styleArray = [ 
   { 
    "featureType": "all", 
    "elementType": "labels.text.fill", 
    "stylers": [ 
     { 
      "saturation": 36 
     }, 
     { 
      "color": "#000000" 
     }, 
     { 
      "lightness": 40 
     } 
    ] 
   }, 
   { 
    "featureType": "all", 
    "elementType": "labels.text.stroke", 
    "stylers": [ 
     { 
      "visibility": "on" 
     }, 
     { 
      "color": "#000000" 
     }, 
     { 
      "lightness": 16 
     } 
    ] 
   }, 
   { 
    "featureType": "all", 
    "elementType": "labels.icon", 
    "stylers": [ 
     { 
      "visibility": "on" 
     } 
    ] 
   }, 
   { 
    "featureType": "administrative", 
    "elementType": "geometry.fill", 
    "stylers": [ 
     { 
      "color": "#35383d" 
     }, 
     { 
      "lightness": "0" 
     } 
    ] 
   }, 
   { 
    "featureType": "administrative", 
    "elementType": "geometry.stroke", 
    "stylers": [ 
     { 
      "color": "#000000" 
     }, 
     { 
      "lightness": 17 
     }, 
     { 
      "weight": 1.2 
     } 
    ] 
   }, 
   { 
    "featureType": "administrative", 
    "elementType": "labels", 
    "stylers": [ 
     { 
      "visibility": "on" 
     } 
    ] 
   }, 
   { 
    "featureType": "administrative.country", 
    "elementType": "all", 
    "stylers": [ 
     { 
      "visibility": "simplified" 
     } 
    ] 
   }, 
   { 
    "featureType": "administrative.country", 
    "elementType": "geometry", 
    "stylers": [ 
     { 
      "visibility": "simplified" 
     } 
    ] 
   }, 
   { 
    "featureType": "administrative.country", 
    "elementType": "labels.text", 
    "stylers": [ 
     { 
      "visibility": "simplified" 
     } 
    ] 
   }, 
   { 
    "featureType": "administrative.province", 
    "elementType": "all", 
    "stylers": [ 
     { 
      "visibility": "on" 
     } 
    ] 
   }, 
   { 
    "featureType": "administrative.locality", 
    "elementType": "all", 
    "stylers": [ 
     { 
      "visibility": "simplified" 
     }, 
     { 
      "saturation": "-100" 
     }, 
     { 
      "lightness": "30" 
     } 
    ] 
   }, 
   { 
    "featureType": "administrative.neighborhood", 
    "elementType": "all", 
    "stylers": [ 
     { 
      "visibility": "on" 
     } 
    ] 
   }, 
   { 
    "featureType": "administrative.land_parcel", 
    "elementType": "all", 
    "stylers": [ 
     { 
      "visibility": "on" 
     } 
    ] 
   }, 
   { 
    "featureType": "landscape", 
    "elementType": "all", 
    "stylers": [ 
     { 
      "visibility": "simplified" 
     }, 
     { 
      "gamma": "0.00" 
     }, 
     { 
      "lightness": "74" 
     } 
    ] 
   }, 
   { 
    "featureType": "landscape", 
    "elementType": "geometry", 
    "stylers": [ 
     { 
      "color": "#000000" 
     }, 
     { 
      "lightness": 20 
     } 
    ] 
   }, 
   { 
    "featureType": "landscape", 
    "elementType": "geometry.fill", 
    "stylers": [ 
     { 
      "color": "#35383d" 
     } 
    ] 
   }, 
   { 
    "featureType": "landscape.man_made", 
    "elementType": "all", 
    "stylers": [ 
     { 
      "lightness": "3" 
     } 
    ] 
   }, 
   { 
    "featureType": "poi", 
    "elementType": "all", 
    "stylers": [ 
     { 
      "visibility": "on" 
     } 
    ] 
   }, 
   { 
    "featureType": "poi", 
    "elementType": "geometry", 
    "stylers": [ 
     { 
      "color": "#000000" 
     }, 
     { 
      "lightness": 21 
     } 
    ] 
   }, 
   { 
    "featureType": "poi.government", 
    "elementType": "geometry.fill", 
    "stylers": [ 
     { 
      "color": "#ff0000" 
     } 
    ] 
   }, 
   { 
    "featureType": "road", 
    "elementType": "geometry", 
    "stylers": [ 
     { 
      "visibility": "simplified" 
     } 
    ] 
   }, 
   { 
    "featureType": "road.highway", 
    "elementType": "geometry.fill", 
    "stylers": [ 
     { 
      "color": "#2a2d32" 
     }, 
     { 
      "lightness": "0" 
     } 
    ] 
   }, 
   { 
    "featureType": "road.highway", 
    "elementType": "geometry.stroke", 
    "stylers": [ 
     { 
      "color": "#000000" 
     }, 
     { 
      "lightness": 29 
     }, 
     { 
      "weight": 0.2 
     } 
    ] 
   }, 
   {
 "featureType": "road.arterial", 
    "elementType": "geometry", 
    "stylers": [ 
     { 
      "color": "#000000" 
     }, 
     { 
      "lightness": 18 
     } 
    ] 
   }, 
   { 
    "featureType": "road.arterial", 
    "elementType": "geometry.fill", 
    "stylers": [ 
     { 
      "color": "#2a2d32" 
     } 
    ] 
   }, 
   { 
    "featureType": "road.local", 
    "elementType": "geometry", 
    "stylers": [ 
     { 
      "color": "#000000" 
     }, 
     { 
      "lightness": 16 
     } 
    ] 
   }, 
   { 
    "featureType": "road.local", 
    "elementType": "geometry.fill", 
    "stylers": [ 
     { 
      "color": "#2a2d32" 
     } 
    ] 
   }, 
   { 
    "featureType": "transit", 
    "elementType": "geometry", 
    "stylers": [ 
     { 
      "color": "#000000" 
     }, 
     { 
      "lightness": 19 
     } 
    ] 
   }, 
   { 
    "featureType": "transit", 
    "elementType": "geometry.fill", 
    "stylers": [ 
     { 
      "color": "#35383d" 
     } 
    ] 
   }, 
   { 
    "featureType": "water", 
    "elementType": "geometry", 
    "stylers": [ 
     { 
      "color": "#000000" 
     }, 
     { 
      "lightness": 17 
     } 
    ] 
   }, 
   { 
    "featureType": "water", 
    "elementType": "geometry.fill", 
    "stylers": [ 
     { 
      "color": "#272a2f" 
     } 
    ] 
   } 
    ]; 
    var myLatlng = new google.maps.LatLng(35.4803918, -79.1801819);
    var point1 = new google.maps.LatLng(35.4803918, -79.1801819);
      var icon = '/wp-content/themes/ldvptheme/assets/img/marker-01.png'
     
    var mapOptions = { 
   zoom: 18, 
   scrollwheel: false, 
   center: myLatlng, 
   //mapTypeId: google.maps.MapTypeId.ROADMAP, 
   styles: styleArray 
    };      
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions); 
    var marker = new google.maps.Marker({ 
     position: point1, 
     map: map, 
     title: 'New York!', 
     //icon: icon 
    });
  }      
  google.maps.event.addDomListener(window, 'load', initialize);
// source --> /wp-content/themes/ldvptheme/assets/js/index.js?ver=140aea48735cb3412049037301acb66e 
"use strict";

var ldvp_window = jQuery(window);
$(function(){


    /* Menu */

   	if (jQuery('.mobile_header').length > 0) {
        jQuery('.mobile_header').after('<div class="mobile_menu_wrapper"><ul class="mobile_menu"/></div>');
        jQuery('.mobile_menu').html(jQuery('.ldvp_menu_cont').find('ul.ldvp_menu').html());
        jQuery('.mobile_menu_wrapper').hide();
        jQuery('.btn_mobile_menu').on('click', function () {
            jQuery('.mobile_menu_wrapper').stop().slideToggle(300);
            jQuery('.ldvp_header').toggleClass('opened');
        });
    }

    jQuery('.mobile_menu .menu-item-has-children a').on('click', function(){
    jQuery(this).toggleClass('opened').next().slideToggle(300);
    });


	/* Swipebox */

    if (jQuery('a.swipebox-video').length) {
        jQuery('html').addClass('ldvp_swipe_box');
        jQuery('.swipebox-video').swipebox({
      selector: '.swipebox-video',
            afterOpen: function () {
                ldvp_setup_box();
            }
        });
    }
	if (jQuery('a.swipebox').length) {
        jQuery('html').addClass('ldvp_swipe_box');
        jQuery('.swipebox').swipebox({
     	selector: '.swipebox',
            afterOpen: function () {
                ldvp_setup_box();
            }
        });
    }
    function ldvp_setup_box() {
	    var swipe_slider = jQuery('#swipebox-slider'),
	        swipe_title = jQuery('#swipebox-top-bar'),
	        swipe_bottom = jQuery('#swipebox-bottom-bar'),
	        setHeight = 0;
	    setHeight = jQuery(window).height() - swipe_title.height() - swipe_bottom.height();
    swipe_slider.height(setHeight).css('top', swipe_title.height());
	}

	jQuery(document).on("click", "#swipebox-container .slide.current img", function (e) {
    	jQuery('#swipebox-next').trigger('click');
   	 e.stopPropagation();
	});

	jQuery(document).on("click", "#swipebox-container", function (e) {
    	jQuery('#swipebox-close').trigger('click');
	});

	/* Contact Form */
	
  jQuery('.ldvp_form input[type=submit]').on('click', function(){
    var this_contact = jQuery(this).parents('form');
    jQuery.post('mail.php', {
      send_mail: 'true',
      form_name: this_contact.find('input[name=name]').val(),
      form_email: this_contact.find('input[name=email]').val(),
      form_text: this_contact.find('textarea[name=message]').val(),
    }).done(function (data) {
      alert(data);
    });

    return false;
  });


  if (jQuery('.ldvp_js_bg_image').length > 0) {
        jQuery('.ldvp_js_bg_image').each(function () {
            jQuery(this).css('background-image', 'url(' + jQuery(this).attr('data-src') + ')');
        });
    }

  ldvp_countdown();
  ldvp_404_page_centered();
  // ldvp_cs_page_centered();
  if (jQuery('.ldvp_counts').length) {
   $('.ldvp_counts').viewportChecker({
    callbackFunction: function(elem, action){
      $(".spincrement").spincrement({
      thousandSeparator: "",
      duration: 2000
      }); 
    },
  });  
}


    if (jQuery('.ldvp_single_album_head').length > 0) {
        setup_ldvp_single_album();
        jQuery('html').addClass('ldvp_single_album');

        if (ldvp_window.scrollTop() > 10) {
            jQuery('html').addClass('header_scrolled');
        }
        ldvp_window.on('scroll', function () {
            if (ldvp_window.scrollTop() > 10) {
                jQuery('html').addClass('header_scrolled');
            } else {
                jQuery('html').removeClass('header_scrolled');
            }
        });
        jQuery('a.ldvp_album_down_arrow').on('click', function () {
            
             var ldvp_album_featured_height = ldvp_window.height();
           

            jQuery('html, body').stop().animate({scrollTop: ldvp_album_featured_height + 'px'}, 600);
        });
    }

    


  
    /* Back To Top */

    jQuery('.ldvp_back_to_top').attr('data-bottom', parseInt(jQuery('.ldvp_back_to_top').css('bottom'), 10));
    if (ldvp_window.scrollTop() > ldvp_window.height()) {
        jQuery('.ldvp_back_to_top').addClass('ldvp_show_me');
    } else {
        jQuery('.ldvp_back_to_top').removeClass('ldvp_show_me');
        if (jQuery('.ldvp_footer').length > 0) {
            var footer_offset = jQuery('.ldvp_footer').offset().top,
                check_footer_state = ldvp_window.scrollTop() + ldvp_window.height(),
                ldvp_footer_showed = 'no',
                ldvp_b2t_fixer = 0;
                
            if ( check_footer_state >= footer_offset) {
                ldvp_b2t_fixer = check_footer_state - footer_offset;
                ldvp_footer_showed = 'yes';
            } else {
                ldvp_footer_showed = 'no';
                ldvp_b2t_fixer = 0;
            }
            jQuery('.ldvp_back_to_top').css('bottom', parseInt(jQuery('.ldvp_back_to_top').attr('data-bottom'), 10) + ldvp_b2t_fixer + 'px');
        }
    }
    ldvp_window.on('scroll', function(){
        if (ldvp_window.scrollTop() > ldvp_window.height()/2) {
            jQuery('.ldvp_back_to_top').addClass('ldvp_show_me');
        } else {
            jQuery('.ldvp_back_to_top').removeClass('ldvp_show_me');
        }
        if (jQuery('.ldvp_footer').length > 0) {
            var footer_offset = jQuery('.ldvp_footer').offset().top,
                check_footer_state = ldvp_window.scrollTop() + ldvp_window.height(),
                ldvp_footer_showed = 'no',
                ldvp_b2t_fixer = 0;
                
            if ( check_footer_state >= footer_offset) {
                ldvp_b2t_fixer = check_footer_state - footer_offset;
                ldvp_footer_showed = 'yes';
            } else {
                ldvp_footer_showed = 'no';
                ldvp_b2t_fixer = 0;
            }
            jQuery('.ldvp_back_to_top').css('bottom', parseInt(jQuery('.ldvp_back_to_top').attr('data-bottom'), 10) + ldvp_b2t_fixer + 'px');
        }
    });
    jQuery('.ldvp_back_to_top').on('click', function(){
        jQuery('html, body').stop().animate({scrollTop: 0}, 400, function(){
            jQuery('.ldvp_back_to_top').removeClass('ldvp_show_me');
        });
    });
});


jQuery(window).on('load', function(){
    if (jQuery('.ldvp_preloader_wrapper').length > 0) {
        jQuery('.ldvp_preloader_wrapper').addClass('remove_preloader');
        setTimeout("jQuery('.ldvp_preloader_wrapper').remove()", 600);
    }
    
    if (jQuery('.ldvp_slider1i_auto_height').length) {
    $('.ldvp_slider1i_auto_height').owlCarousel({
        slideSpeed:200, 
        items:1,
        // autoplay: true,
        autoplayTimeout:2000,
        smartSpeed:200,
        autoplayHoverPause:true,
        autoHeight:true,
        nav: true,
        loop:true
    });
    }

    $(function(){
    var tabContainers = $('div.container > div');
  
    $('div.container ul.tabs a').on('click', function(){
        tabContainers.fadeOut(400);
        tabContainers.filter(this.hash).fadeIn(600);
        $('div.container ul.tabs a').removeClass('active');
        $(this).addClass('active');
        return false;
  }).filter('.active').click();

    })
   
});
jQuery(window).resize(function(){
    ldvp_404_page_centered();
    if (jQuery('.ldvp_blog_grid_ratio').length > 0) {
        jQuery('.ldvp_blog_grid_ratio').each(function () {
            var setHeight = Math.floor(jQuery(this).width() * jQuery(this).attr('data-ratio'));
            jQuery(this).height(setHeight);
        });
    }
    
});



/* About slider */

	if (jQuery('.ldvp_slider1i').length) {
	$('.ldvp_slider1i').owlCarousel({
	    slideSpeed:200, 
	    items:1,
	    autoplay: true,
        navText: ["",""],
	    autoplayTimeout:2000,
	    smartSpeed:200,
	    autoplayHoverPause:true,
	    nav: true,
	    loop:true
	});
	}
    if (jQuery('.ldvp_slider1i_anim').length) {
    $('.ldvp_slider1i_anim').owlCarousel({
        slideSpeed:200, 
        items:1,
        // autoplay: true,
        navText: ["",""],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout:4000,
        smartSpeed:200,
        autoplayHoverPause:true,
        nav: true,
        loop:true
    });
    }
    
/* Isopope */

	if (jQuery('.grid').length) {
	var $grid = $('.grid').imagesLoaded().progress( function() {
	        $grid.isotope({
	            itemSelector: '.grid-item',
	            layoutMode: 'fitRows'
	        });
	    }); 

	    // bind filter button click
	    $('.filters-button-group').on( 'click', 'button', function() {
	        var filterValue = $( this ).attr('data-filter');
	        // use filterFn if matches value
	      
	    $grid.isotope({ filter: filterValue });
	    });
	    // change is-checked class on buttons
	    $('.button-group').each( function( i, buttonGroup ) {
	        var $buttonGroup = $( buttonGroup );
	        $buttonGroup.on( 'click', 'button', function() {
	        $buttonGroup.find('.is-checked').removeClass('is-checked');
	        $( this ).addClass('is-checked');
	        });
	    })
	}
 


	if (jQuery('.grid1').length) {
	var $grid1 = $('.grid1').imagesLoaded().progress( function() {
	        $grid1.isotope({
	            itemSelector: '.grid-item'
	            
	        });
	    });     
	}

     // Iframes in Blog Listings
    var ldvp_iframe = jQuery('.ldvp_post_formats iframe'),
        ldvp_iframe_width = jQuery(ldvp_iframe).width();

    jQuery(ldvp_iframe).height(ldvp_iframe_width);


	function ldvp_countdown() {
    jQuery('.ldvp_countdown').each(function(){
        var pm_year = jQuery(this).attr('data-year'),
            pm_month = jQuery(this).attr('data-month'),
            pm_day = jQuery(this).attr('data-day'),
            austDay = new Date(pm_year, pm_month - 1, pm_day);

        jQuery(this).countdown({
            until: austDay,
            padZeroes: true
        });
    });
	}

    function ldvp_404_page_centered(){
    var container_404_height = jQuery(window).height() - jQuery('header').height(),
        inner_container_404_height = jQuery('.ldvp_404_content_inner').height();

    if (inner_container_404_height < container_404_height) {
        var white_space = container_404_height - inner_container_404_height;

        jQuery('.ldvp_404_content_wrapper').css({'padding-top': white_space / 2, 'padding-bottom': white_space / 2});
    }
};