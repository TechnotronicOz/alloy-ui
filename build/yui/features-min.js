/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.2.0
build: nightly
*/
YUI.add("features",function(B){var C={};B.mix(B.namespace("Features"),{tests:C,add:function(D,E,F){C[D]=C[D]||{};C[D][E]=F;},all:function(E,F){var G=C[E],D="";if(G){B.Object.each(G,function(I,H){D+=H+":"+(B.Features.test(E,H,F)?1:0)+";";});}return D;},test:function(E,G,F){var D,I,K,J=C[E],H=J&&J[G];if(!H){}else{D=H.result;if(B.Lang.isUndefined(D)){I=H.ua;if(I){D=(B.UA[I]);}K=H.test;if(K&&((!I)||D)){D=K.apply(B,F);}H.result=D;}}return D;}});var A=B.Features.add;A("load","0",{"trigger":"node-base","ua":"ie"});A("load","1",{"test":function(E){var D=E.config.doc.documentMode;return E.UA.ie&&(!("onhashchange" in E.config.win)||!D||D<8);},"trigger":"history-hash"});A("load","2",{"test":function(D){return(D.config.win&&("ontouchstart" in D.config.win&&!D.UA.chrome));},"trigger":"dd-drag"});},"3.2.0",{requires:["yui-base"]});