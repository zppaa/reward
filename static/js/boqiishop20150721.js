
$(function (){
	
	$(".pointer").click(function(){
		var data = {
			ResponseStatus:0,
			ResponseData:{
				id:3
			}
		}
		if(data.ResponseStatus == 0){
			//var item = 0;
			var item = data.ResponseData.id;
			switch (item) {
				case 0:
					$('#prize').addClass('act0');
					setTimeout(function(){
						$('#prize3').css("display","block");
						//$(".shutUp img,#lBtn img,.thiv").css("display","block");
						stop();
					},3500)
					
					break;
				case 3:
					$('#prize').addClass('act3');
					setTimeout(function(){
						$('#prize1').css("display","block");
						//$(".shutUp img,#lBtn img,.thiv").css("display","block");
						stop();
					},3500)
					break;
				case 4:
					$('#prize').addClass('act4');
					setTimeout(function(){
						$('#prize2').css("display","block");
						//$(".shutUp img,#lBtn img,.thiv").css("display","block");
						stop();
					},3500)
					break;
			}
			console.log(item);

		}else{
			//$("#prize4").css("display","block");
			//$(".shutUp img,#lBtn1 img,.thiv").css("display","block");
			stop()
			//BQ.createTips("ÄúÒÑ¾­³é¹ý");
		}
	})


	// var BQ = {
	// 	//×Ô¶¨Òåµ¯´°
	// 	createTips:function(con){
	// 		var tips = '<div class="tips"><div class="tipscon">'+con+'</div></div>';
	// 		$("body").append(tips);
	// 		setTimeout(function(){
	// 			$(".tips").remove();
	// 		},2000);
	// 	},
	// 	//ÕýÔò±í´ïÊ½ÑéÖ¤ÊÖ»úºÅÂë
	// 	regExp:(function(){
	// 		return{
	// 			isMobil:function (s){
	// 				console.log(s);
	// 				var patrn= /^((\+?86)|(\(\+86\)))?1\d{10}$/;
	// 				if (!patrn.test(s))
	// 					return false;
	// 				return true;
	// 			},
	// 			isDigit:function(s){
	// 				var patrn=/^[0-9]{1,20}$/;
	// 				if (!patrn.test(s))
	// 					return false;
	// 				return true;
	// 			}
	// 		}
	// 	})(),
	// 	set:function(name,value,expires,path,domain){

	// 		if(typeof expires=="undefined"){
	// 			expires=new Date(new Date().getTime()+(10000000*60*60*24*30));
	// 		}
	// 		document.cookie=name+"="+escape(value)+((expires)?";expires="+expires.toGMTString():"")+((path)?";path="+path:";path=/")+((domain)?";domain="+domain:"");
			
	// 	}
	// };
	// BQ.GetQueryString = function (url) {
 //    var reg = new RegExp("(^|&)" + url + "=([^&]*)(&|$)","i");
 //    var r = window.location.search.substr(1).match(reg);
 //    if (r!=null) return (r[2]); return null;
 //  };
 //  	var soruce = BQ.GetQueryString("source");
	//µã»÷³é½±
	// $('.pointer').click(function (){

	// 	if( source && source == "h5" ){
 //            var UserId = localStorage.UserId;
 //            if(!UserId){
 //            	$("#login,.thiv").css("display","block");
	// 			stop();
	// 			//µÇÂ¼
	// 			$("#loginBtn").on("click",function(){
	// 		        var username = $("#telNum").val();
	// 		        var passwd = $("#pwd").val();
	// 				// md5¼ÓÃÜ
	// 		        var passwd1 = hex_md5(passwd);

	// 		        if(username == ''){
	// 		            BQ.createTips("ÕË»§²»¿ÉÎª¿Õ!");
	// 		            passok = false;
	// 		        }else if(passwd == ''){
	// 		            BQ.createTips("ÃÜÂë²»¿ÉÎª¿Õ");
	// 		            passok = false;
	// 		        }else{

	// 		            var param = {
	// 		                "Act":"UserLogin",
	// 		                "UserName":username,
	// 		                "Password":passwd1
	// 		            };

	// 		            $.ajax({
	// 		                type:"post",
	// 		                dataType:"json",
	// 		                data:param,
	// 		                url:"http://s.boqii.com/vetapi.php",

	// 		                success:function(data){
	// 		                	console.log(data);
	// 		                	localStorage.username = username;
	// 		                	localStorage.UserId = data.ResponseData.UserId;
			                	

	// 		                    if(data.ResponseStatus == 0){
	// 		                        localStorage.UserId = data.ResponseData.UserId;
	// 		                        // localStorage.username = username;
	// 		                        $(".success").css("display","block");
	// 		                        setTimeout(function(){
	// 									$(".success,.thiv").css("display","none");
	// 								},2000);
									
	// 		                        //BQ.createTips("µÇÂ¼³É¹¦");
	// 								// BQ.set("vTelephone",username,undefined,"/",".boqii.com");
	// 								// BQ.set("vUserId",data.ResponseData.UserId,undefined,"/",".boqii.com");
	// 								// BQ.set("vHasPayPassword","",undefined,"/",".boqii.com");
	// 								// BQ.set("vBalance","",undefined,"/",".boqii.com");

	// 		                        $("#login,.thiv").css("display","none");
	// 		                        stop();
	// 		                        $("#myForm")[0].reset();
	// 		                    }else{
	// 		                    	BQ.createTips(data.ResponseMsg);
	// 		                    	$("#myForm").find("input[name='Password']").val("");
	// 		                    }
	// 		                } 
	// 		            });
	// 		        }
	// 		    })
 //            }else{
 //            	if(localStorage.sign == 1){
	// 				$("#prize4").css("display","block");
	// 				$(".shutUp img,#lBtn1 img,.thiv").css("display","block");
	// 				stop();
	// 			}else{
	// 				var param = {
	// 				"Act":"o2oLotteryActivityForAnniversary",
	// 				"UserId":UserId,
	// 				"IsNew":1
	// 				}
	// 				$.ajax({
	// 					type:"post",
	// 					dataType:"json",
	// 					data:param,
	// 					url:"http://s.boqii.com/vetapi1.php",
	// 					success:function(data){
	// 						console.log(data);
	// 						if(data.ResponseStatus == 0){
	// 							//var item = 0;
	// 							var item = data.ResponseData.id;
	// 							switch (item) {
	// 								case 0:
	// 									$('#prize').addClass('act0');
	// 									setTimeout(function(){
	// 										$('#prize3').css("display","block");
	// 										$(".shutUp img,#lBtn img,.thiv").css("display","block");
	// 										stop();
	// 									},3500)
										
	// 									break;
	// 								case 3:
	// 									$('#prize').addClass('act3');
	// 									setTimeout(function(){
	// 										$('#prize1').css("display","block");
	// 										$(".shutUp img,#lBtn img,.thiv").css("display","block");
	// 										stop();
	// 									},3500)
	// 									break;
	// 								case 4:
	// 									$('#prize').addClass('act4');
	// 									setTimeout(function(){
	// 										$('#prize2').css("display","block");
	// 										$(".shutUp img,#lBtn img,.thiv").css("display","block");
	// 										stop();
	// 									},3500)
	// 									break;
	// 							}
	// 							console.log(item);

	// 						}else{
	// 							$("#prize4").css("display","block");
	// 							$(".shutUp img,#lBtn1 img,.thiv").css("display","block");
	// 							stop()
	// 							//BQ.createTips("ÄúÒÑ¾­³é¹ý");
	// 						}
	// 					}
	// 				});
	// 			}
 //            }
	// 	}else{
	// 		var UserId = BQ.GetQueryString("UserId");
	// 		if(!UserId){
	// 			$("#login,.thiv").css("display","block");
	// 			stop();
	// 			//µÇÂ¼
	// 			$("#loginBtn").on("click",function(){
	// 		        var username = $("#telNum").val();
	// 		        var passwd = $("#pwd").val();
	// 				// md5¼ÓÃÜ
	// 		        var passwd1 = hex_md5(passwd);

	// 		        if(username == ''){
	// 		            BQ.createTips("ÕË»§²»¿ÉÎª¿Õ!");
	// 		            passok = false;
	// 		        }else if(passwd == ''){
	// 		            BQ.createTips("ÃÜÂë²»¿ÉÎª¿Õ");
	// 		            passok = false;
	// 		        }else{

	// 		            var param = {
	// 		                "Act":"UserLogin",
	// 		                "UserName":username,
	// 		                "Password":passwd1
	// 		            };

	// 		            $.ajax({
	// 		                type:"post",
	// 		                dataType:"json",
	// 		                data:param,
	// 		                url:"http://s.boqii.com/vetapi.php",

	// 		                success:function(data){
	// 		                	console.log(data);
	// 		                	localStorage.username = username;

	// 		                    if(data.ResponseStatus == 0){
 //                                    UserId = data.ResponseData.UserId;
 //                                    BQ.createTips("µÇÂ¼³É¹¦£¡");
	// 		                        /*$(".success").css("display","block");
	// 		                        setTimeout(function(){
	// 									$(".success,.thiv").css("display","none");
	// 								},2000);*/
	// 								$("#login,.thiv").css("display","none");
	// 		                        stop();
	// 		                        $("#myForm")[0].reset();
	// 		                        var jsonStr = JSON.stringify(data.ResponseData);
	// 								//ÅÐ¶ÏÊÖ»úä¯ÀÀÆ÷
 //                                    var ua = navigator.userAgent;
 //                                    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
 //                                    isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
 //                                    isAndroid = ua.match(/(Android)\s+([\d.]+)/),
 //                                    isMobile = isIphone || isAndroid;
 //                                    if(isIphone || ipad){//Èç¹ûÊÇios²Ù×÷ÏµÍ³
 //                                    ¡¡¡¡//ÒªÖ´ÐÐµÄ´úÂëÆ¬¶Î
 //                                        window.location.href = encodeURIComponent("bqloginprotocol"+data.ResponseData.UserId+"bqloginprotocol");
 //                                        setTimeout(function(){
 //                                        	window.location.href = encodeURIComponent("bqloginprotocol"+data.ResponseData.UserId+"bqloginprotocol");
 //                						},200)
 //                                        /*var url = encodeURIComponent("bqloginprotocol"+data.ResponseData.UserId+"bqloginprotocol");
 //                                        $("#forms").attr("action",url);
 //                						$("#forms").submit();*/
 //                						setTimeout(function(){
 //                                        	window.location.href = "http://s.boqii.com/activity/boqiishop20150721.html?from=app&UserId="+encodeURIComponent(data.ResponseData.UserId);
 //                						},2000)
 //                                    }else{
 //                                    ¡¡¡¡//ÊÇ°²×¿ÏµÍ³ÊÇÒªÖ´ÐÐµÄ´úÂëÆ¬¶Î
 //                                        Boqii.Login(jsonStr,username);
 //                                        window.location.href = "http://s.boqii.com/activity/boqiishop20150721.html?from=app&UserId="+encodeURIComponent(data.ResponseData.UserId);

 //                                    }
	// 		                        //BQ.createTips("µÇÂ¼³É¹¦");
	// 								BQ.set("vTelephone",username,undefined,"/",".boqii.com");
	// 								BQ.set("vUserId",data.ResponseData.UserId,undefined,"/",".boqii.com");
	// 								BQ.set("vHasPayPassword","",undefined,"/",".boqii.com");
	// 								BQ.set("vBalance","",undefined,"/",".boqii.com");
	// 		                    }
	// 		                } 
	// 		            });
	// 		        }
	// 		    })
	// 		}else{
	// 			if(localStorage.sign == 1){
	// 				$("#prize4").css("display","block");
	// 				$(".shutUp img,#lBtn1 img,.thiv").css("display","block");
	// 				stop();
	// 			}else{
	// 				var param = {
	// 				"Act":"o2oLotteryActivityForAnniversary",
	// 				"UserId":UserId,
	// 				"IsNew":1
	// 				}
	// 				$.ajax({
	// 					type:"post",
	// 					dataType:"json",
	// 					data:param,
	// 					url:"http://s.boqii.com/vetapi1.php",
	// 					success:function(data){
	// 						console.log(data);
	// 						if(data.ResponseStatus == 0){
	// 							//var item = 0;
	// 							var item = data.ResponseData.id;
	// 							switch (item) {
	// 								case 0:
	// 									$('#prize').addClass('act0');
	// 									setTimeout(function(){
	// 										$('#prize3').css("display","block");
	// 										$(".shutUp img,#lBtn img,.thiv").css("display","block");
	// 										stop();
	// 									},3500)
										
	// 									break;
	// 								case 3:
	// 									$('#prize').addClass('act3');
	// 									setTimeout(function(){
	// 										$('#prize1').css("display","block");
	// 										$(".shutUp img,#lBtn img,.thiv").css("display","block");
	// 										stop();
	// 									},3500)
	// 									break;
	// 								case 4:
	// 									$('#prize').addClass('act4');
	// 									setTimeout(function(){
	// 										$('#prize2').css("display","block");
	// 										$(".shutUp img,#lBtn img,.thiv").css("display","block");
	// 										stop();
	// 									},3500)
	// 									break;
	// 							}
	// 							console.log(item);

	// 						}else{
	// 							$("#prize4").css("display","block");
	// 							$(".shutUp img,#lBtn1 img,.thiv").css("display","block");
	// 							stop()
	// 							//BQ.createTips("ÄúÒÑ¾­³é¹ý");
	// 						}
	// 					}
	// 				});
	// 			}
	// 		}
	// 	}
	// });


	//µã»÷¹Ø±Õµ¯´°
	// $(".shutUp").tap(function(){
	// 	$(".thiv,.prizePosi img,.pupWindow .rules,.notStart,.over").css("display","none");
	// 	stop();
	// });

	// //×èÖ¹ÊÂ¼þ»¬¶¯
	// function stopScroll(even){
	// 	event.preventDefault();
	// }
	// function stop(){
	// 	if($(".thiv").css("display") == "block"){
	// 		$(window).on("touchmove",stopScroll);
	// 	}else{
	// 		$(window).off("touchmove",stopScroll);
	// 	}
	// }
	// //¹Ø±ÕµÇÂ¼×¢²áÒ³Ãæ
	// $(".back").click(function(){
	// 	$(".thiv,#login,#register").css("display","none");
	// 	stop();
	// 	$("#myForm")[0].reset();
	// });

	// $(".loginRegister").click(function(){
	// 	$("#login").css("display","none");
	// 	$("#register").css("display","block");
	// });
	// $(".registerLogin").click(function(){
	// 	$("#register").css("display","none");
	// 	$("#login").css("display","block");
	// });
	// //»ñÈ¡ÑéÖ¤Âë
	// $("#getYzm").click(function(){
	// 	var tel = $(".register .inputs").find("input[name='UserName']").val();
 //        var pwd = $(".register .inputs").find("input[type='psssword']").val();
 //        var yzm = $(".register").find("input[name='yzm']").val();
 //        var passOk = true;
 //        if(tel == ""){
 //            BQ.createTips("ÇëÊäÈëÊÖ»úºÅÂë£¡");
 //            passOk = false;
 //        }else if(tel.length!=11){
 //            BQ.createTips("ÄúÊäÈëµÄÊÖ»úºÅÂë¸ñÊ½²»ÕýÈ·£¡");
 //            passOk = false;
 //        }else if(!BQ.regExp.isMobil(tel)){
 //            BQ.createTips("ÊÖ»úºÅÂë¸ñÊ½²»ÕýÈ·£¡");
 //            passOk = false;
 //        }else if(pwd == ""){
 //            BQ.createTips("ÇëÉèÖÃÃÜÂë!");
 //            passOk = false;
 //        }else{
 //            var seconds = 120;
 //            var timer = setInterval(function(){
 //                seconds--;
                
 //                if(seconds <= 0){
	// 				clearInterval(timer);
	// 				$("#getYzm").attr("disabled",false).removeClass("disabled").text("ÖØÐÂ»ñÈ¡");
	// 			}else{
	// 				$("#getYzm").text(seconds+"ÃëºóÖØÐÂ»ñÈ¡");
	// 			}
				
 //            },1000);
 //            var parme1={
 //                "Act":"SendAuthCode",
 //                "Account":tel
 //            }
 //            $.ajax({
 //                type:"post",
 //                dataType:"json",
 //                data:parme1,
 //                url:"http://s.boqii.com/vetapi.php",
 //                success:function(data){
 //                    if(data.ResponseStatus != 0){
 //                        BQ.createTips("Í¬Ò»¸öºÅÂë2·ÖÖÓÖ®ÄÚÖ»ÄÜ·¢ËÍÒ»´Î!");
 //                        clearInterval(timer);
 //                    }
 //                    console.log(data);
 //                }
 //            }); 
 //        }
 //    });
 //    //Í¬ÒâÐ­Òé
 //    $(".agree span").click(function(){
 //        if( $(this).hasClass("current") ){
 //            $(this).removeClass("current");
 //        }else{
 //            $(this).addClass("current");
 //        }
 //    });
	// //µã»÷×¢²á°´Å¥ --> Ö»¸ºÔð ÅÐ¶Ï ÊÇ·ñÎª¿Õ
	// $("#registerBtn").click(function(event){
	// 	var passok = true;
	// 	var tel = $("#register").find("input[name='UserName']").val();
 //        var pwd = $("#register").find("input[name='Password']").val();
 //        var yzm = $(".yzmWrap input").val();
	// 	var mi_pwd = hex_md5(pwd);

	// 	if( tel == '' ){
	// 		BQ.createTips("ÇëÊäÈë×¢²áÊÖ»úºÅ");
	// 		passok = false;
	// 	}else if( pwd == '' ){
	// 		BQ.createTips("ÇëÉèÖÃµÇÂ¼ÃÜÂë");
	// 		passok = false;
	// 	}else if( mi_pwd == '' ){
	// 		BQ.createTips("ÇëÊäÈëÑéÖ¤Âë");
	// 		passok = false;
	// 	}else if( !$(".agree span").hasClass("current") ){
	// 		BQ.createTips("ÇëÏÈÔÄ¶Á²¢Í¬Òâ²¨ÆæÍø·þÎñÐ­Òé");
	// 		passok = false;
	// 	}else{
	// 		var param = {
	// 			"Act":"UserRegister",
	// 			"UserName":tel,
	// 			"Password":mi_pwd,
	// 			"AuthCode":yzm,
	// 			"IsNew":1
	// 		};
	// 		$.ajax({
	// 			type:"post",
	// 			dataType:"json",
	// 			data:param,
	// 			url:"http://s.boqii.com/vetapi.php",
	// 			success:function(data){
	// 				if(data.ResponseStatus == 0){
	// 					console.log(data);
	// 					localStorage.UserId = data.ResponseData.UserId;
	// 					localStorage.username = tel;
 //                        UserId = data.ResponseData.UserId;
	// 					localStorage.IsNew = 1;
	// 					$("#myForm")[0].reset();
	// 					$("#register,.thiv").css("display","none");
	// 					stop();
	// 					BQ.createTips("×¢²á³É¹¦");
	// 					if( source && source == "h5" ){

	// 					}else{
	// 						var jsonStr = JSON.stringify(data.ResponseData);
	// 						//ÅÐ¶ÏÊÖ»úä¯ÀÀÆ÷
	//                         var ua = navigator.userAgent;
	//                         var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
	//                         isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
	//                         isAndroid = ua.match(/(Android)\s+([\d.]+)/),
	//                         isMobile = isIphone || isAndroid;
	//                         if(isIphone || ipad){//Èç¹ûÊÇios²Ù×÷ÏµÍ³
	//                         ¡¡¡¡//ÒªÖ´ÐÐµÄ´úÂëÆ¬¶Î
 //                                var url = encodeURIComponent("bqloginprotocol"+data.ResponseData.UserId+"bqloginprotocol");
 //                                $("#forms").attr("action",url);
 //        						$("#forms").submit();
 //        						setTimeout(function(){
 //                                	window.location.href = "http://s.boqii.com/activity/boqiishop20150721.html?from=app&UserId="+encodeURIComponent(data.ResponseData.UserId);
 //        						},300)
	//                         }else{
	//                         ¡¡¡¡//ÊÇ°²×¿ÏµÍ³ÊÇÒªÖ´ÐÐµÄ´úÂëÆ¬¶Î
	//                             Boqii.Login(jsonStr,tel);
	//                             window.location.href = "http://s.boqii.com/activity/boqiishop20150721.html?from=app&UserId="+encodeURIComponent(data.ResponseData.UserId);
	//                         }
	// 					}
			            
	// 					BQ.createTips("×¢²á³É¹¦");
	// 					BQ.set("vTelephone",tel,undefined,"/",".boqii.com");
	// 					// BQ.set("vTelephone",username,undefined,"/",".boqii.com");
	// 					BQ.set("vUserId",data.ResponseData.UserId,undefined,"/",".boqii.com");
	// 					BQ.set("vHasPayPassword","",undefined,"/",".boqii.com");
	// 					BQ.set("vBalance","",undefined,"/",".boqii.com");
	// 				}else if(data.ResponseStatus < 0){

	// 					BQ.createTips("²Ù×÷Ê§°Ü:"+data.ResponseMsg);
	// 					$("#myForm").find("input[name='yzm']").val("");

	// 				}
	// 			}
	// 		});
	// 	}
	// });

	//²é¿´»î¶¯¹æÔò
	// $("#rules").click(function(){
	// 	$(".pupWindow .rules,.thiv").css("display","block");
	// 	stop();
	// });
	// //ÅÐ¶ÏÊÇAPP»¹ÊÇä¯ÀÀÆ÷
	// var ua = navigator.userAgent,
 //    ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
 //    isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
 //    isAndroid = ua.match(/(Android)\s+([\d.]+)/),
 //    isMobile = isIphone || isAndroid;
	// var source = BQ.GetQueryString("source");
	// $("#check").live("click",function(){
	// 	if(source == "h5"){
	// 		window.location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.boqii.petlifehouse&ckey=CK1311529875734";
	// 	}else{
	// 		if( isIphone || ipad ){
	// 			var apiurl = encodeURIComponent("boqii://MyCouponViewController/bqh5?");
 //                $("#forms").attr("action",apiurl);
 //                $("#forms").submit();
 //               // window.location.href = "bqloginprotocol"+data.ResponseData.UserId+"bqloginprotocol";
 //            }else if( isAndroid ){
 //            	var path = "com.boqii.petlifehouse.activities.MainShoppingO2OActivity";
 //                Boqii.Jump(path, "INDEX=2");
 //            }
	// 	}
	// });
	// $(".nowUse").live("click",function(){
	// 	if(source == "h5"){
	// 		window.location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.boqii.petlifehouse&ckey=CK1311529875734";
	// 	}else{
	// 		if( isIphone || ipad ){
	// 			var apiurl = encodeURIComponent("boqii://IndexViewController/bqh5?");
 //                $("#forms").attr("action",apiurl);
 //                $("#forms").submit();
 //                //window.location.href = "bqloginprotocol"+data.ResponseData.UserId+"bqloginprotocol";
 //            }else if( isAndroid ){
 //            	var path = "com.boqii.petlifehouse.activities.MainShoppingO2OActivity";
 //                Boqii.Jump(path, "INDEX=2");
 //            }
	// 	}
	// });
	
	// $(".checkPrice").live("click",function(){
 //        var source = BQ.GetQueryString("source");
 //        if( source && source == "h5" ){
 //            window.location.href = "http://v.boqii.com/services/900/t/9000/a/0/o/0";
 //        }else{
 //            var ua = navigator.userAgent;
 //            var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
 //            isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
 //            isAndroid = ua.match(/(Android)\s+([\d.]+)/),
 //            isMobile = isIphone || isAndroid;
 //            var id = $(this).attr("goodsId");
 //            if( isIphone || ipad ){
 //               var apiurl = encodeURIComponent("boqii://IndexViewController/bqh5?");
 //                $("#forms").attr("action",apiurl);
 //                $("#forms").submit();

 //            }else if( isAndroid ){

 //                var path = "com.boqii.petlifehouse.activities.MainShoppingO2OActivity";
 //                Boqii.Jump(path, "INDEX=2");

 //            }
 //        } 
 //    });

});
