AUI.add("aui-scheduler-view",function(B3){var CK=B3.Lang,Cb=CK.isObject,Bs=CK.isString,Au=CK.isBoolean,Ag=CK.isNumber,BE=function(A){return A==0?0:(A<0?-1:1);},Ak=function(A,AM){return Math.max(Math.abs(A),AM)*BE(A);},Bf=function(A){return parseFloat(A)||0;},Bh=function(AM,A){return Math.round(AM/A)*A;},AR=B3.DataType.DateMath,Bz=B3.WidgetStdMod,Al=AR.WEEK_LENGTH,Bj="scheduler-view",Af="scheduler-view-day",B7="scheduler-view-week",CU="scheduler-view-month",Be="activeView",A6="am",V="borderLeftWidth",CB="borderRightWidth",Aq="boundingBox",R="children",BW="childNodes",AG="col",i="colblank",Z="coldata",Ai="colday",B="colgrid",BR="colmonth",w="colspan",N="coltime",CP="columnNode",AX="colDaysNode",B5="colHeaderDaysNode",Ao="container",Am="content",CR="contentBox",AV="createDocumentFragment",BB="currentDate",BX="data",BA="dateFormat",CH="day",u="days",e="delegateConfig",x="div",BJ="division",AB="down",B9="dragNode",Br="duration",Aa="endDate",A2="event",Bx="events",Cd="eventRecorder",T="eventWidth",Ah="first",B8="firstDayOfWeek",A8="grid",Cc="hd",B1="header",A9="headerDateFormat",CY="headerTableNode",Bm="height",Ap="host",Ae="hourHeight",W="icon",AK="isoTime",BF="labelAM",Ac="labelPM",Ar="left",AY="locale",AC="marker",A4="markercell",Ax="markercellsNode",Bk="markercellNode",l="markers",Bc="month",A7="monthContainerNode",Ba="navigationDateFormat",An="next",Bi="nextDate",Ce="node",AJ="nomonth",AS="noscroll",B0="offsetHeight",k="offsetTop",B2="offsetWidth",CF="ownerDocument",B4="pad",CM="parentEvent",r="parentNode",AO="pm",AA="prevDate",BQ="proxy",AH="px",As="rendered",By="repeated",Ay="right",BO="row",S="scheduler",Ad="scheduler-event",y="scrollable",t="shim",B6="startDate",At="table",CS="tableColNode",K="tableDataNode",d="tableGridNode",BU="tableNode",Bt="tableTimeNode",BS="tbody",F="td",BL="time",AI="timesNode",H="title",AL="today",BP="top",CZ="tr",a="trigger",CN="week",BY="width",Bg="-",L="a",Bl=".",Bd="",BZ="%",v=" ",f=B3.ClassNameManager.getClassName,BK=f(Bj,AS),AD=f(Bj,y);var Aw=B3.Component.create({NAME:Bj,ATTRS:{bodyContent:{value:Bd},height:{value:600},isoTime:{value:false,validator:Au},name:{value:Bd,validator:Bs},navigationDateFormat:{value:"%A - %d %b %Y",validator:Bs},nextDate:{getter:"getNextDate",readOnly:true},prevDate:{getter:"getPrevDate",readOnly:true},scheduler:{lazyAdd:false,setter:"_setScheduler"},scrollable:{value:true,validator:Au},triggerNode:{setter:B3.one},visible:{value:false}},BIND_UI_ATTRS:[y],prototype:{initializer:function(){var A=this;A.after("render",A._afterRender);},syncUI:function(){var A=this;A.syncStdContent();},adjustCurrentDate:function(){var A=this;var Cf=A.get(S);var AM=Cf.get(BB);Cf.set(BB,AM);},flushViewCache:function(){},getNextDate:function(){},getPrevDate:function(){},getToday:function(){return AR.clearTime(new Date());},limitDate:function(AM,Cf){var A=this;if(AR.after(AM,Cf)){AM=AR.clone(Cf);}return AM;},plotEvents:function(A){},syncStdContent:function(){},syncEventUI:function(A){},_uiSetCurrentDate:function(A){},_afterRender:function(Cf){var A=this;var AM=A.get(S);A.adjustCurrentDate();A._uiSetScrollable(A.get(y));},_setScheduler:function(Cf){var A=this;var AM=A.get(S);if(AM){A.removeTarget(AM);}if(Cf){A.addTarget(Cf);Cf.after("eventsChange",B3.bind(A.flushViewCache,A));}return Cf;},_uiSetScrollable:function(Cf){var A=this;var AM=A.bodyNode;if(AM){AM.toggleClass(AD,Cf);AM.toggleClass(BK,!Cf);}},_uiSetVisible:function(AM){var A=this;Aw.superclass._uiSetVisible.apply(this,arguments);if(AM&&A.get(As)){A.adjustCurrentDate();}}}});B3.SchedulerView=B3.Base.create(Bj,Aw,[B3.WidgetStdMod]);var o=function(A,AM){return function(Cg){var Cf=Cg.all(A);return(Cf.size()>=AM)?Cf:null;};},Aj=f(Ad),Bo=f(Ad,BQ),b=f(Bj,Z),D=f(Bj,B),q=f(S,AL),AQ=f(S,AL,Cc),CC=f(Bj,A8),CD=f(Bj,A8,Ao),CG=f(Bj,A4),m=f(Bj,l),BI=f(Bj,AC,BJ),BV=f(Bj,At),CJ=f(Bj,CH,B1,At),U=f(Bj,CH,B1,CH),BH=f(Bj,CH,B1,CH,B4,Ay),Bq=f(Bj,CH,B1,CH,Ah),A1=f(Bj,CH,B1,AG),CW=f(Bj,At,AG),Ab=f(Bj,At,AG,t),p=f(Bj,At,i),h=f(Bj,At,Ai),O=f(Bj,At,Ai,B1),CO=f(Bj,At,N),BN=f(Bj,At,BL),AE='<div class="'+CG+'">'+'<div class="'+BI+'"></div>'+"</div>",AU='<table class="'+BV+'">'+"<tbody>"+'<tr class="'+D+'" height="1">'+'<td height="0" class="'+[CW,p].join(v)+'"></td>'+'<td class="'+CD+'" colspan="1">'+'<div class="'+CC+'">'+'<div class="'+m+'"></div>'+"</div>"+"</td>"+"</tr>"+'<tr class="'+b+'">'+'<td class="'+[CW,CO].join(v)+'"></td>'+"</tr>"+"</tbody>"+"</table>",BD='<td class="'+[CW,h].join(v)+'">'+'<div class="'+Ab+'"></div>'+"</td>",J='<div class="'+BN+'">{hour}</div>',AW='<table class="'+CJ+'">'+"<tbody>"+'<tr class="'+A1+'"></tr>'+"</tbody>"+"</table>",BG='<th class="'+U+'"><a href="#">&nbsp;</a></th>',AT='<td class="'+[U,Bq].join(v)+'"></td>',X='<th class="'+[U,BH].join(v)+'">&nbsp;</th>';var CX=B3.Component.create({NAME:Af,ATTRS:{bodyContent:{value:Bd},days:{value:1,validator:Ag},delegateConfig:{value:{},setter:function(AM){var A=this;return B3.merge({bubbleTargets:A,container:A.get(Aq),nodes:Bl+Aj},AM||{});},validator:Cb},headerDateFormat:{value:"%a %d/%m",validator:Bs},name:{value:CH},hourHeight:{value:52,validator:Ag},eventWidth:{value:95,validator:Ag},headerTableNode:{valueFn:function(){return B3.Node.create(AW);}},tableNode:{valueFn:function(){return B3.Node.create(AU);}},colDaysNode:{valueFn:"_valueColDaysNode"},colHeaderDaysNode:{valueFn:"_valueColHeaderDaysNode"},markercellsNode:{valueFn:"_valueMarkercellsNode"},timesNode:{valueFn:"_valueTimesNode"}},HTML_PARSER:{colHeaderDaysNode:o(Bl+U,2),colDaysNode:o(Bl+h,1),markercellsNode:o(Bl+CG,24),timesNode:o(Bl+BN,24),headerTableNode:Bl+CJ,tableNode:Bl+BV},EXTENDS:B3.SchedulerView,prototype:{initializer:function(){var A=this;A.colDaysNode=A.get(AX);A.colHeaderDaysNode=A.get(B5);A.headerTableNode=A.get(CY);A.markercellsNode=A.get(Ax);A.tableNode=A.get(BU);A.timesNode=A.get(AI);A.colShimNodes=A.colDaysNode.all(Bl+Ab);A.colDataNode=A.tableNode.one(Bl+b);A.colTimeNode=A.tableNode.one(Bl+CO);A.dayHeaderColNode=A.headerTableNode.one(Bl+A1);A.gridContainer=A.tableNode.one(Bl+CD);
A.markersNode=A.tableNode.one(Bl+m);},renderUI:function(){var A=this;A.colTimeNode.setContent(A.timesNode);A.markersNode.setContent(A.markercellsNode);A.colDaysNode.appendTo(A.colDataNode);A.colHeaderDaysNode.appendTo(A.dayHeaderColNode);},bindUI:function(){var A=this;A.headerTableNode.delegate("click",B3.bind(A._onClickDaysHeader,A),Bl+U);A.colDataNode.delegate("mousedown",B3.bind(A._onMouseDownTableCol,A),Bl+CW);A.colDataNode.delegate("mouseup",B3.bind(A._onMouseUpTableCol,A),Bl+CW);A.colDataNode.delegate("mousemove",B3.bind(A._onMouseMoveTableCol,A),Bl+CW);A.on("drag:end",A._onEventDragEnd);A.on("drag:start",A._onEventDragStart);A.on("drag:align",A._dragAlign);A.on("drag:tickAlignX",A._dragTickAlignX);A.on("drag:tickAlignY",A._dragTickAlignY);},syncUI:function(){var A=this;CX.superclass.syncUI.apply(this,arguments);A.gridContainer.attr(w,A.get(u));A._setupDragDrop();},syncStdContent:function(){var A=this;A.setStdModContent(Bz.BODY,A.tableNode.getDOM());A.setStdModContent(Bz.HEADER,A.headerTableNode.getDOM());},calculateTopByDate:function(Cg){var AM=this;var A=AM.get(Ae);var Cf=Cg.getHours();var Ch=Cg.getMinutes();var Ci=Cg.getSeconds();return((Cf*60)+Ch+(Ci/60))*(A/60);},calculateHoursByTop:function(Ch){var AM=this;var A=AM.get(Ae);var Cj=Bf((Ch/A).toFixed(2));var Ci=0;var Cg=Math.floor((Cj*100)%100*0.6);var Cf=Math.floor(Cj);return[Cf,Cg,Ci];},getNextDate:function(){var A=this;var Cf=A.get(S);var AM=Cf.get(BB);return AR.add(AM,AR.DAY,1);},getPrevDate:function(){var A=this;var Cf=A.get(S);var AM=Cf.get(BB);return AR.subtract(AM,AR.DAY,1);},getColumnByDate:function(Cf){var A=this;var Cg=A.get(S);var AM=AR.safeClearTime(Cg.get(BB));var Ch=AR.getDayOffset(AR.safeClearTime(Cf),AM);return A.colDaysNode.item(Ch);},getDateByColumn:function(Cf){var A=this;var Cg=A.get(S);var AM=AR.safeClearTime(Cg.get(BB));return AR.add(AM,AR.DAY,Cf);},plotEvents:function(Cf){var A=this;var AM=A.get(S);A.colShimNodes.each(function(Cj,Ci){var Ch=A.getDateByColumn(Ci);var Cg=AM.getEventsByDay(Ch);Cj.empty();B3.Array.each(Cg,function(Ck,Cl){if(!Ck.isDayOverlapEvent()){Cj.append(Ck.get(Ce));Ck.set(CP,Cj.get(r));A.syncEventTopUI(Ck);A.syncEventHeightUI(Ck);}});A.syncEventsIntersectionUI(Cg);});},syncColumnsUI:function(){var A=this;A.colDaysNode.each(function(Cg,Cf){var AM=A.getDateByColumn(Cf);Cg.toggleClass(q,AR.isToday(AM));});},syncDaysHeaderUI:function(){var Cf=this;var Ch=Cf.get(S);var Cg=Ch.get(BB);var AM=Cf.get(A9);var A=Cf.get(AY);Cf.colHeaderDaysNode.all(L).each(function(Ck,Cj){var Ci=AR.add(Cg,AR.DAY,Cj);var Cl=B3.DataType.Date.format(Ci,{format:AM,locale:A});Ck.toggleClass(AQ,AR.isToday(Ci));Ck.html(Cl);});},syncEventsIntersectionUI:function(AM){var A=this;var Cf=A.get(S);var Cg=A.get(T);Cf.flushEvents();B3.Array.each(AM,function(Ci,Cj){var Cl=A.findEventIntersections(Ci,AM);var Ck=Cl.length;var Ch=(Cg/Ck);B3.Array.each(Cl,function(Cn,Co){var Cm=Cn.get(Ce);var Cq=Ch*Co;var Cp=Ch*1.7;if(Co==(Ck-1)){Cp=Cg-Cq;}Cm.setStyle(BY,Cp+BZ);Cm.setStyle(Ar,Cq+BZ);var Cr=Cm.get(r);if(Cr){Cr.insert(Cm,Co);}Cn._filtered=true;});});},syncEventHeightUI:function(Cf){var AM=this;var A=AM.get(Ae);var Ch=AM.calculateTopByDate(Cf.get(B6));var Cg=AM.calculateTopByDate(Cf.get(Aa));Cf.get(Ce).set(B0,Math.max(Cg-Ch,A/2));},syncEventRecorderUI:function(Cg){var A=this;var Cf=A.get(S);var Ch=Cf.get(Cd);var AM=Ch.get(Ce);if(Cg&&!AM.inDoc()){Cg.append(AM);}A.syncEventTopUI(Ch);A.syncEventHeightUI(Ch);},syncEventTopUI:function(Cf){var AM=this;var A=Cf.get(Ce);var Cg=AM.calculateTopByDate(Cf.get(B6));A.setStyle(BP,Cg+AH);},findEventIntersections:function(AM,Cf){var A=this;var Cg=[];B3.Array.each(Cf,function(Ci,Ch){if(!AM._filtered&&!Ci.isDayOverlapEvent()&&AM.intersectHours(Ci)){Cg.push(Ci);}});return Cg;},_createEvents:function(){var A=this;var AM=function(Cf,Cg){A.publish(Cf,{defaultFn:Cg,queuable:false,emitFacade:true,bubbles:true});};},_dragTickAlignX:function(AM){var Cn=this;var Co=AM.target.get(Ap);var Cp=Cn._getColumnRefWidth();var Ch=Co.get(Ce);var Ck=Cn.proxyEvt;var Cl=Ch.getData(Ad);var Cm=(Co.actXY[0]-Cn.bodyNode.getX()-Cn.colTimeNode.get(B2));var Cf=Math.floor(Cm/Cp);var Cj=Cn.colDaysNode.item(Cf);var Ci=Cn.getDateByColumn(Cf);var A=AR.clone(Ci);var Cg=AR.clone(Ci);AR.copyHours(Cg,Ck.get(Aa));AR.copyHours(A,Ck.get(B6));Ck.set(Aa,Cg);Ck.set(B6,A);},_dragTickAlignY:function(Cf){var Ck=this;var Cl=Cf.target.get(Ap);var Ch=Cl.get(Ce);var Ci=Ck.proxyEvt;var Cj=Ch.getData(Ad);var AM=AR.clone(Ci.get(B6));var A=Ck.calculateHoursByTop(Bf(Cl.get(B9).getComputedStyle(BP)));Ck._setTickedHours(AM,A);var Cg=AR.clone(AM);Ci.set(Aa,AR.add(Cg,AR.MINUTES,Ck._currentEvtDuration));Ci.set(B6,AM);Ci.syncNodeTitleUI();},_getXYDelta:function(AM){var A=this;var Cg=AM.currentTarget;var Cf=Cg.getXY(),Ch=[AM.pageX,AM.pageY];return B3.Array.map(Cf,function(Cj,Ci){return(Ch[Ci]-Cj);});},_getTickY:function(){var A=this;return Bh(Math.ceil(A.get(Ae)/2),10);},_getColumnRefWidth:function(){var A=this;var AM=A.colDaysNode.item(0);return Bf(AM.getStyle(BY))-Bf(AM.getStyle(CB))-Bf(AM.getStyle(V));},_setupDragDrop:function(){var Cf=this;var Cg=Cf.get(Aq);if(!Cf.proxyEvt){var Ch=Cf.get(S);Cf.proxyEvt=new B3.SchedulerEvent({scheduler:Ch});Cf.proxyEvt.removeTarget(Ch);Cf.proxyEvt.get(Ce).addClass(Bo);}if(!Cf.delegate){Cf.delegate=new B3.DD.Delegate(Cf.get(e));}var AM=Cf.delegate.dd;var Ci=Cf.proxyEvt;var Cj=Cf.get(Ae)/2;var A=Cf._getColumnRefWidth();AM.unplug(B3.Plugin.DDConstrained);AM.unplug(B3.Plugin.DDNodeScroll);AM.plug(B3.Plugin.DDConstrained,{bubbleTargets:Cf,constrain:Cf.bodyNode,tickX:A,tickY:Cj});AM.plug(B3.Plugin.DDNodeScroll,{node:Cf.bodyNode,scrollDelay:150});},_uiSetCurrentDate:function(AM){var A=this;A.syncColumnsUI();A.syncDaysHeaderUI();},_onClickDaysHeader:function(Cg){var A=this;var Cf=A.get(S);if(Cg.target.test(L)){var Ch=Cf.getViewByName(CH);var AM=A.colHeaderDaysNode.indexOf(Cg.currentTarget)-1;if(Ch){Cf.set(BB,A.getDateByColumn(AM));Cf.set(Be,Ch);}}Cg.preventDefault();},_onEventDragEnd:function(A){var Ck=this;var Ch=Ck.get(S);var Cg=Ck.get(Aq);
var Cl=Ck.delegate.dd;var Cf=Cl.get(Ce);var Ci=Ck.proxyEvt;var AM=Ci.get(Ce);var Cj=Cf.getData(Ad);Cf.show();AM.hide();Cg.selectable();Cj.copyDates(Ci);Ch.syncEventsUI();},_onEventDragStart:function(A){var Ck=this;var Ch=Ck.get(Aq);var Cl=Ck.delegate.dd;var Cg=Cl.get(Ce);var Ci=Ck.proxyEvt;var Cj=Cg.getData(Ad);var Cf=Bf(Cg.getComputedStyle(Ar));if(Cf){Cl.deltaXY[0]=(Cf+Bf(Cl.deltaXY[0]));}if(Cj){var Cm=Cj.get(CP);var AM=Ci.get(Ce);Cl.set(B9,AM);Cm.append(AM);Ci.copyPropagateAttrValues(Cj);Ck.syncEventTopUI(Ci);Ck.syncEventHeightUI(Ci);AM.show();Ck._currentEvtDuration=Cj.getMinutesDuration();}Cg.hide();Ch.unselectable();},_onMouseDownTableCol:function(Cg){var A=this;var Cf=A.get(S);var Ch=Cf.get(Cd);if(Ch){Ch.hideOverlay();if(Cg.target.test(Bl+Ab)){var AM=A.colDaysNode.indexOf(Cg.currentTarget);A.dragXY=A.startXY=A._getXYDelta(Cg);A.ddStartDate=A.getDateByColumn(AM);A.ddEndDate=AR.clone(A.ddStartDate);A._setTickedHours(A.ddStartDate,A.calculateHoursByTop(A.startXY[1]));A.ddMaxDate=AR.clone(A.ddStartDate);A.ddMaxDate.setHours(23,59,59);Ch.set(B6,A.ddStartDate);Ch.set(Aa,A.limitDate(Ch.get(Aa),A.ddMaxDate));Cg.halt();}}},_onMouseMoveTableCol:function(Ch){var A=this;var Cg=A.get(S);var Ck=Cg.get(Cd);var Ci=A.ddStartDate;if(Ci){A.dragXY=A._getXYDelta(Ch);A._setTickedHours(A.ddEndDate,A.calculateHoursByTop(A.dragXY[1]));var Cj=AR.getMinutesOffset(A.ddEndDate,Ci);if((A.dragXY[1]-A.startXY[1])>0){Cj=Ak(Cj,Ck.get(Br));}var AM=A.limitDate(AR.add(Ci,AR.MINUTES,Cj),A.ddMaxDate);if(Cj>0){Ck.set(Aa,AM);}else{var Cf=Ck.get(Aa);Ck.set(B6,AM);Ck.set(Aa,Cf);}A.syncEventRecorderUI(Ch.currentTarget);}},_onMouseUpTableCol:function(Cf){var A=this;var AM=A.get(S);var Cg=AM.get(Cd);if(Cg){if(A.ddStartDate){A.syncEventRecorderUI(Cf.currentTarget);Cg.showOverlay();}A.ddEndDate=null;A.ddStartDate=null;}},_setTickedHours:function(AM,Cf){var A=this;AM.setHours(Cf[0],Bh(Cf[1],A._getTickY()),Cf[2]);},_valueColDaysNode:function(){var A=this;var Cf=A.get(u);var AM=[];while(Cf--){AM.push(BD);}return B3.NodeList.create(AM.join(Bd));},_valueColHeaderDaysNode:function(){var A=this;var Cf=A.get(u);var AM=[];AM.push(AT);while(Cf--){AM.push(BG);}AM.push(X);return B3.NodeList.create(AM.join(Bd));},_valueMarkercellsNode:function(){var A=this;var AM=[];for(var Cf=0;Cf<=23;Cf++){AM.push(AE);}return B3.NodeList.create(AM.join(Bd));},_valueTimesNode:function(){var A=this;var Cg=A.get(AK);var Cf=[];for(var AM=0;AM<=23;AM++){Cf.push(B3.substitute(J,{hour:Cg?AR.toIsoTimeString(AM):AR.toUsTimeString(AM,false,true)}));}return B3.NodeList.create(Cf.join(Bd));}}});B3.SchedulerDayView=CX;var AN=B3.Component.create({NAME:B7,ATTRS:{bodyContent:{value:Bd},days:{value:7},name:{value:CN}},EXTENDS:B3.SchedulerDayView,prototype:{adjustCurrentDate:function(){var A=this;var Cg=A.get(S);var AM=Cg.get(BB);var Cf=Cg.get(B8);Cg.set(BB,AR.getFirstDayOfWeek(AM,Cf));},getNextDate:function(){var A=this;var Cf=A.get(S);var AM=Cf.get(BB);var Cg=A._firstDayOfWeek(AM);return AR.add(Cg,AR.WEEK,1);},getPrevDate:function(){var A=this;var Cf=A.get(S);var AM=Cf.get(BB);var Cg=A._firstDayOfWeek(AM);return AR.subtract(Cg,AR.WEEK,1);},getToday:function(){var A=this;var AM=AN.superclass.getToday.apply(this,arguments);return A._firstDayOfWeek(AM);},_firstDayOfWeek:function(Cf){var A=this;var Cg=A.get(S);var AM=Cg.get(B8);return AR.getFirstDayOfWeek(Cf,AM);}}});B3.SchedulerWeekView=AN;var I=f(Bj,Bc,Ao),A3=f(Bj,Bc,B1,AG),Y=f(Bj,Bc,B1,CH),CT=f(Bj,Bc,B1,At),Bv=f(Bj,Bc,BO),AP=f(Bj,Bc,BO,Ao),G=f(W),M=f(W,"arrowstop-1-l"),CQ=f(W,"arrowstop-1-r"),Bw=f(Bj,Bc,B),C=f(Bj,Bc,B,AL),P=f(Bj,Bc,B,Ah),Bb=f(Bj,Bc,At,BX),Az=f(Bj,Bc,At,BX,Ah),Bu=f(Bj,Bc,At,BX,AG),CA=f(Bj,Bc,At,BX,AG,Ah),A0=f(Bj,Bc,At,BX,AG,AJ),Av=f(Bj,Bc,At,BX,AG,H),s=f(Bj,Bc,At,BX,AG,H,AL),AF=f(Bj,Bc,At,BX,AG,H,Ah),c=f(Bj,Bc,At,BX,AG,H,An),CV=f(Bj,Bc,At,BX,AG,H,AB),BM=f(Bj,Bc,At,BX,A2),E=f(Bj,Bc,At,BX,A2,Ar),Bn=f(Bj,Bc,At,BX,A2,Ay),Q=f(Bj,Bc,At,BX,A2,By),BC=f(Bj,Bc,At,A8),CL=f(Bj,Bc,At,A8,Ah),Ca=f(Bj,At,BR,B1),g='<table class="'+CT+'">'+"<tbody>"+'<tr class="'+A3+'"></tr>'+"</tbody>"+"</table>",n='<th class="'+Y+'"><div>&nbsp;</div></th>',CI='<div class="'+I+'">'+'<div class="'+AP+'">'+'<div class="'+Bv+'" style="top: 0; height: 16.6667%;"></div>'+'<div class="'+Bv+'" style="top: 16.6667%; height: 16.6667%;"></div>'+'<div class="'+Bv+'" style="top: 33.3333%; height: 16.6667%;"></div>'+'<div class="'+Bv+'" style="top: 50%; height: 16.6667%;"></div>'+'<div class="'+Bv+'" style="top: 66.6667%; height: 16.6667%;"></div>'+'<div class="'+Bv+'" style="top: 83.3333%; height: 16.6667%;"></div>'+"</div>"+"</div>",BT='<table cellspacing="0" cellpadding="0" class="'+BC+'">'+"<tbody>"+"<tr>"+'<td class="'+[Bw,P].join(v)+'">&nbsp;</td>'+'<td class="'+Bw+'">&nbsp;</td>'+'<td class="'+Bw+'">&nbsp;</td>'+'<td class="'+Bw+'">&nbsp;</td>'+'<td class="'+Bw+'">&nbsp;</td>'+'<td class="'+Bw+'">&nbsp;</td>'+'<td class="'+Bw+'">&nbsp;</td>'+"</tr>"+"</tbody>"+"</table>",Bp='<table cellspacing="0" cellpadding="0" class="'+Bb+'">'+"<tbody></tbody>"+"</table>",CE="<tr></tr>",A5='<td class="'+Bu+'"><div></div></td>',z='<span class="'+[G,M].join(v)+'"></span>',j='<span class="'+[G,CQ].join(v)+'"></span>';var AZ=B3.Component.create({NAME:CU,ATTRS:{bodyContent:{value:Bd},name:{value:Bc},headerDateFormat:{value:"%a"},navigationDateFormat:{value:"%b %Y"},scrollable:{value:false},monthContainerNode:{valueFn:function(){return B3.Node.create(CI);}},headerTableNode:{valueFn:function(){return B3.Node.create(g);}},colHeaderDaysNode:{valueFn:"_valueColHeaderDaysNode"},tableGridNode:{valueFn:"_valueTableGridNode"}},HTML_PARSER:{tableGridNode:o(Bl+BC,7),colHeaderDaysNode:o(Bl+Y,7),monthContainerNode:Bl+I,headerTableNode:Bl+CT},EXTENDS:B3.SchedulerView,prototype:{evtDateStack:null,evtDataTableStack:null,initializer:function(){var A=this;var AM=A.get(S);A.evtDateStack={};A.evtDataTableStack={};A.colHeaderDaysNode=A.get(B5);A.headerTableNode=A.get(CY);A.monthContainerNode=A.get(A7);A.tableGridNode=A.get(d);A.dayHeaderColNode=A.headerTableNode.one(Bl+A3);A.monthRows=A.monthContainerNode.all(Bl+Bv);
A.tableGridCols=A.tableGridNode.all(F);},renderUI:function(){var A=this;A.colHeaderDaysNode.appendTo(A.dayHeaderColNode);A.monthRows.each(function(Cg,Cf){var AM=A.tableGridNode.item(Cf);Cg.append(AM.toggleClass(CL,(Cf==0)));});},buildEventsTable:function(AM,Cj){var Cp=this;var Cm=5;var Cg=AR.clearTime(Cp._findCurrentMonthEnd());var Co=AR.clearTime(Cp._findCurrentMonthStart());var Cl=String(Co.getTime()).concat(AM.getTime()).concat(Cj.getTime());var Ck=Cp.evtDataTableStack[Cl];if(!Ck){Ck=B3.Node.create(Bp);var Cn=Ck.one(BS);var Ch=B3.Node.create(CE);Cp.loopDates(AM,Cj,function(Cr,Cq){var Cs=B3.Node.create(A5);Cs.addClass(Av).toggleClass(AF,(Cq==0)).toggleClass(s,AR.isToday(Cr)).toggleClass(c,AR.isToday(AR.subtract(Cr,AR.DAY,1))).toggleClass(CV,AR.isToday(AR.subtract(Cr,AR.WEEK,1)));if(AR.before(Cr,Co)||AR.after(Cr,Cg)){Cs.addClass(A0);}Ch.append(Cs.setContent(Cr.getDate()));});Cn.append(Ch);for(var A=0;A<Cm;A++){var Ci=0;var Cf=B3.Node.create(CE);Cp.loopDates(AM,Cj,function(Cv,Ct){if(Ci<=Ct){var Cu=Cp.getIntersectEvents(Cv),Cr=Cu[A];var Cw=B3.Node.create(A5);if(Cr){var Cq=Cw.one(x);var Cs=Cp._getEvtSplitInfo(Cr,AM,Cj);Cw.attr(w,Cs.colspan);Cq.addClass(BM).setContent(Cp._getEvtLabel(Cr));if(Cs.left){Cq.addClass(E).prepend(z);}if(Cs.right){Cq.addClass(Bn).append(j);}if(Cr.get(CM)){Cq.addClass(Q);}Ci+=Cs.colspan;}else{Ci++;}Cf.append(Cw);}});Cn.append(Cf);}Cp.evtDataTableStack[Cl]=Ck;}return Ck;},flushViewCache:function(){var A=this;A.evtDateStack={};A.evtDataTableStack={};},getIntersectEvents:function(AM){var A=this;var Cg=A.get(S);var Cf=String(AM.getTime());if(!A.evtDateStack[Cf]){A.evtDateStack[Cf]=Cg.getIntersectEvents(AM);}return A.evtDateStack[Cf];},loopDates:function(A,Cg,Cj,Ck,Ci){var Cl=this;var AM=AR.clone(A);var Cf=Cg.getTime();for(var Ch=0;AM.getTime()<=Cf;Ch++){Cj.apply(Cl,[AM,Ch]);AM=AR.add(AM,(Ck||AR.DAY),(Ci||1));}},plotEvents:function(){var AM=this;var Cf=AM._findCurrentMonthStart();var A=AR.safeClearTime(AM._findFirstDayOfWeek(Cf));AM.bodyNode.all(Bl+Bb).remove();AM.monthRows.each(function(Cj,Ch){var Cg=AR.add(A,AR.WEEK,Ch);var Ck=AR.add(Cg,AR.DAY,Al-1);var Ci=AM.buildEventsTable(Cg,Ck);if(Ch==0){Ci.addClass(Az);}Cj.append(Ci);});},syncStdContent:function(){var A=this;A.setStdModContent(Bz.BODY,A.monthContainerNode.getDOM());A.setStdModContent(Bz.HEADER,A.headerTableNode.getDOM());},syncGridUI:function(){var Cl=this;var Cf=Cl.getToday();var AM=Cl.get(S);Cl.tableGridCols.removeClass(C);if(AR.isSameMonth(Cf,AM.get(BB))){var A=AM.get(B8);var Cf=Cl.getToday();var Ch=Cl._findCurrentMonthStart();var Cj=Cl._findFirstDayOfWeek(Cf);var Cg=AR.getWeekNumber(Cf,A)-AR.getWeekNumber(Ch,A);var Ck=(Cf.getDate()-Cj.getDate());var Ci=Cl.tableGridNode.item(Cg).all(F).item(Ck);if(Ci){Ci.addClass(C);}}},adjustCurrentDate:function(){var A=this;var AM=A.get(S);AM.set(BB,A._findCurrentMonthStart());},getNextDate:function(){var A=this;var Cf=A.get(S);var AM=Cf.get(BB);return AR.add(AM,AR.MONTH,1);},getPrevDate:function(){var A=this;var Cf=A.get(S);var AM=Cf.get(BB);return AR.subtract(AM,AR.MONTH,1);},syncDaysHeaderUI:function(){var Cf=this;var Ci=Cf.get(S);var Cg=Ci.get(BB);var AM=Cf.get(A9);var A=Cf.get(AY);var Ch=Cf._findFirstDayOfWeek(Cg);Cf.colHeaderDaysNode.all(x).each(function(Cl,Ck){var Cj=AR.add(Ch,AR.DAY,Ck);var Cm=B3.DataType.Date.format(Cj,{format:AM,locale:A});Cl.html(Cm);});},_findCurrentMonthEnd:function(){var A=this;var Cf=A.get(S);var AM=Cf.get(BB);return AR.findMonthEnd(AM);},_findCurrentMonthStart:function(){var A=this;var Cf=A.get(S);var AM=Cf.get(BB);return AR.findMonthStart(AM);},_findFirstDayOfWeek:function(Cf){var A=this;var Cg=A.get(S);var AM=Cg.get(B8);return AR.getFirstDayOfWeek(Cf,AM);},_getEvtLabel:function(Cf){var AM=this;var Cg=Cf.get(Aa);var A=Cf.get(B6);return[A.getHours(),Bg,Cg.getHours(),v,Cf.get(Am)].join(Bd);},_getEvtSplitInfo:function(Ck,A,Ci){var Cl=this;var AM=Ck.getClearStartDate();var Cj=Ck.getClearEndDate();var Ch=Ck.getDaysDuration();var Cg={};var Cf=1;if(AR.after(AM,A)){Cf=Math.min(Ch,Math.abs(AR.getDayOffset(Ci,AM))+1);if(Cf>1){Cg.right=true;}}else{Cf=Math.abs(AR.getDayOffset(Cj,A)+1);if(Cf>1){Cg.left=true;}}Cg.colspan=Math.min(Cf,Al);if(Cf>=Al){Cg.right=true;Cg.left=true;}return Cg;},_uiSetCurrentDate:function(AM){var A=this;A.syncDaysHeaderUI();A.syncGridUI();},_valueColHeaderDaysNode:function(){var A=this;return A._valueNodeList(Al,n);},_valueTableGridNode:function(){var A=this;return A._valueNodeList(Al,BT);},_valueNodeList:function(Cg,Cf){var A=this;var AM=[];while(Cg--){AM.push(Cf);}return B3.NodeList.create(AM.join(Bd));}}});B3.SchedulerMonthView=AZ;},"@VERSION@",{skinnable:true,requires:["aui-scheduler-event","aui-calendar","aui-button-item","substitute","dd-drag","dd-delegate","dd-drop","dd-constrain"]});