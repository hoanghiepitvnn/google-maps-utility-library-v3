function b(a){var d=a||{};this.d=this.c=false;if(a.visible==undefined)a.visible=true;if(a.shadow==undefined)a.shadow="7px -3px 5px rgba(88,88,88,0.7)";if(a.anchor==undefined)a.anchor=f.BOTTOM;this.setValues(d)}b.prototype=new google.maps.OverlayView;window.RichMarker=b;b.prototype.getVisible=function(){return this.get("visible")};b.prototype.getVisible=b.prototype.getVisible;b.prototype.setVisible=function(a){this.set("visible",a)};b.prototype.setVisible=b.prototype.setVisible; b.prototype.r=function(){if(this.c){this.a.style.display=this.getVisible()?"":"none";this.draw()}};b.prototype.visible_changed=b.prototype.r;b.prototype.setFlat=function(a){this.set("flat",!!a)};b.prototype.setFlat=b.prototype.setFlat;b.prototype.getFlat=function(){return this.get("flat")};b.prototype.getFlat=b.prototype.getFlat;b.prototype.setShadow=function(a){this.set("shadow",a);this.g()};b.prototype.setShadow=b.prototype.setShadow;b.prototype.getShadow=function(){return this.get("shadow")}; b.prototype.getShadow=b.prototype.getShadow;b.prototype.g=function(){if(this.c)this.a.style.boxShadow=this.a.style.webkitBoxShadow=this.a.style.MozBoxShadow=this.getFlat()?"":this.getShadow()};b.prototype.flat_changed=b.prototype.g;b.prototype.setZIndex=function(a){this.set("zIndex",a)};b.prototype.setZIndex=b.prototype.setZIndex;b.prototype.getZIndex=function(){return this.get("zIndex")};b.prototype.getZIndex=b.prototype.getZIndex; b.prototype.s=function(){if(this.getZIndex()&&this.c)this.a.style.zIndex=this.o()};b.prototype.zIndex_changed=b.prototype.s;b.prototype.getDraggable=function(){return this.get("draggable")};b.prototype.getDraggable=b.prototype.getDraggable;b.prototype.setDraggable=function(a){this.set("draggable",!!a)};b.prototype.setDraggable=b.prototype.setDraggable;b.prototype.k=function(){if(this.c)this.getDraggable()?g(this,this.a):h(this)};b.prototype.draggable_changed=b.prototype.k; b.prototype.getPosition=function(){return this.get("position")};b.prototype.getPosition=b.prototype.getPosition;b.prototype.setPosition=function(a){this.set("position",a)};b.prototype.setPosition=b.prototype.setPosition;b.prototype.p=function(){this.draw()};b.prototype.position_changed=b.prototype.p;b.prototype.l=function(){return this.get("anchor")};b.prototype.getAnchor=b.prototype.l;b.prototype.q=function(a){this.set("anchor",a)};b.prototype.setAnchor=b.prototype.q;b.prototype.n=function(){this.draw()}; b.prototype.anchor_changed=b.prototype.n;function j(a,d){var c=document.createElement("DIV");c.innerHTML=d;if(c.childNodes.length==1)return c.removeChild(c.firstChild);else{for(var e=document.createDocumentFragment();c.firstChild;)e.appendChild(c.firstChild);return e}}function k(a,d){if(d)for(var c;c=d.firstChild;)d.removeChild(c)}b.prototype.setContent=function(a){this.set("content",a)};b.prototype.setContent=b.prototype.setContent;b.prototype.getContent=function(){return this.get("content")}; b.prototype.getContent=b.prototype.getContent; b.prototype.j=function(){if(this.b){k(this,this.b);var a=this.getContent();if(a){if(typeof a=="string"){a=a.replace(/^\s*([\S\s]*)\b\s*$/,"$1");a=j(this,a)}this.b.appendChild(a);var d=this;a=this.b.getElementsByTagName("IMG");for(var c=0,e;e=a[c];c++){google.maps.event.addDomListener(e,"mousedown",function(i){if(d.getDraggable()){i.preventDefault();i.returnValue=false}});google.maps.event.addDomListener(e,"load",function(){d.draw()})}google.maps.event.trigger(this,"domready")}this.c&&this.draw()}}; b.prototype.content_changed=b.prototype.j;function l(a,d){if(a.c){var c="";if(navigator.userAgent.indexOf("Gecko/")!==-1){if(d=="dragging")c="-moz-grabbing";if(d=="dragready")c="-moz-grab"}else if(d=="dragging"||d=="dragready")c="move";if(d=="draggable")c="pointer";if(a.a.style.cursor!=c)a.a.style.cursor=c}} function m(a,d){if(a.getDraggable())if(!a.d){a.d=true;var c=a.getMap();a.m=c.get("draggable");c.set("draggable",false);a.h=d.clientX;a.i=d.clientY;l(a,"dragready");a.a.style.MozUserSelect="none";a.a.style.KhtmlUserSelect="none";a.a.style.WebkitUserSelect="none";a.a.unselectable="on";a.a.onselectstart=function(){return false};n(a);google.maps.event.trigger(a,"dragstart")}} function o(a){if(a.getDraggable())if(a.d){a.d=false;a.getMap().set("draggable",a.m);a.h=a.i=a.m=null;a.a.style.MozUserSelect="";a.a.style.KhtmlUserSelect="";a.a.style.WebkitUserSelect="";a.a.unselectable="off";a.a.onselectstart=function(){};p(a);l(a,"draggable");google.maps.event.trigger(a,"dragend");a.draw()}}function h(a){if(a.e){google.maps.event.removeListener(a.e);delete a.e}l(a,"")} function g(a,d){if(d){a.e=google.maps.event.addDomListener(d,"mousedown",function(c){m(a,c)});l(a,"draggable")}} function n(a){a.f=[google.maps.event.addDomListener(window,"mousemove",function(d){if(!a.getDraggable()||!a.d)o(a);else{var c=a.h-d.clientX,e=a.i-d.clientY;a.h=d.clientX;a.i=d.clientY;d=parseInt(a.a.style.left,10)-c;e=parseInt(a.a.style.top,10)-e;a.a.style.left=d+"px";a.a.style.top=e+"px";c=q(a);e=new google.maps.Point(d-c.width,e-c.height);a.setPosition(a.getProjection().fromDivPixelToLatLng(e));l(a,"dragging");google.maps.event.trigger(a,"drag")}},true),google.maps.event.addDomListener(window,"mouseup", function(){o(a)},true)]}function p(a){if(a.f){for(var d=0,c;c=a.f[d];d++)google.maps.event.removeListener(c);a.f.length=0}} function q(a){var d=a.l();if(typeof d=="object")return d;var c=new google.maps.Size(0,0);if(!a.b)return c;var e=a.b.offsetWidth;a=a.b.offsetHeight;switch(d){case f.TOP_LEFT:break;case f.TOP:c.width=-e/2;break;case f.TOP_RIGHT:c.width=-e;break;case f.LEFT:c.height=-a/2;break;case f.MIDDLE:c.width=-e/2;c.height=-a/2;break;case f.RIGHT:c.width=-e;c.height=-a/2;break;case f.BOTTOM_LEFT:c.height=-a;break;case f.BOTTOM:c.width=-e/2;c.height=-a;break;case f.BOTTOM_RIGHT:c.width=-e;c.height=-a;break}return c} b.prototype.onAdd=function(){if(!this.a){this.a=document.createElement("DIV");this.a.style.position="absolute"}if(this.getZIndex())this.a.style.zIndex=this.o();this.a.style.display=this.getVisible()?"":"none";if(!this.b){this.b=document.createElement("DIV");this.a.appendChild(this.b);var a=this;google.maps.event.addDomListener(this.b,"click",function(){google.maps.event.trigger(a,"click")})}this.c=true;this.j();this.g();this.k();var d=this.getPanes();d&&d.overlayImage.appendChild(this.a);google.maps.event.trigger(this, "ready")};b.prototype.onAdd=b.prototype.onAdd;b.prototype.draw=function(){if(!(!this.c||this.d)){var a=this.getProjection();if(a){var d=this.get("position");a=a.fromLatLngToDivPixel(d);d=q(this);this.a.style.top=a.y+d.height+"px";this.a.style.left=a.x+d.width+"px"}}};b.prototype.draw=b.prototype.draw;b.prototype.onRemove=function(){this.a&&this.a.parentNode&&this.a.parentNode.removeChild(this.a);h(this)};b.prototype.onRemove=b.prototype.onRemove; var f={TOP_LEFT:1,TOP:2,TOP_RIGHT:3,LEFT:4,MIDDLE:5,RIGHT:6,BOTTOM_LEFT:7,BOTTOM:8,BOTTOM_RIGHT:9};window.RichMarkerPosition=f;