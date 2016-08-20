window.onload = function() {
	var q;
	var click = 0;
	var mySwiper = new Swiper('.wrap',{
	    mode: 'vertical',
	    followFinger:false,
	    resistance : false,
	    updateFormElements:true,
	    noSwiping : true,
		noSwipingClass : 'stop-swiping',
	    onSlideNext: function(swiper) {
	    	var timer = null;
	    	var j = 0;
	    	
	    	var _index = mySwiper.activeLoopIndex;
	    	console.log('aa' + _index);
	    	
	    	if(_index == 1) {
	    		$('.page1 .car').addClass('out');
	    		$('.page2 .car').removeClass('inTout');
	    		$('.page2 .text').addClass('text2');
	    	}else if (_index==0||_index==2) {
  				$('.page2 .car').addClass('inTout');
  				$('.page2 .text').removeClass('text2');
  			};
  			if(_index == 2) {
	    		$('.page3 .text').removeClass('text3');
	    		touch.on('.big img','tap',function() {
	    			$(this).addClass('bigChd').parent().addClass('bigPar');
	    		})
	    		touch.on('.small img','tap',function() {
	    			$(this).addClass('smallChd').parent().addClass('smallPar');
	    		})
	    		// 点击圆球加类 
	    		var i = 0,ybball=0;
	    		touch.on('.page3 .touch','tap',function() {
	    			i++;
	    			if (i<=3) {
	    				$(this).addClass('butto');
	    			};
	    			console.log('i=' + i);
	    			if (i == 3&&ybball==0) {
	    				ybball=1;
	    				setTimeout(function() {
	    					mySwiper.swipeNext();
	    					_index = _index + 1;
	    					if(_index == 3) {
					    		touch.on('.page4 .btn','tap',function() {
					    			// $('.page4 .road').addClass('scaleFast'); // 汽车不让在道路上跑了 注释掉
					    			setTimeout(function() {
					    				mySwiper.swipeNext();
					    				_index = _index + 1;
					    				if(_index == 4) {
					    					$('.page5').addClass('stop-swiping');
								    		$('.page5 .car').addClass('jump');
								    		setTimeout(function(){
								    			$('.yb_dq').addClass('ybdq');
								    		},100)
								    		setTimeout(function() {
								    			$('.page5 .fly').removeClass('none');
								    			setTimeout(function(){
								    				$('.page5 .fly img').removeClass('opa');								    				
								    			},50)
								    		},1300)
								    		setTimeout(function() {
								    			$('.page5').removeClass('stop-swiping');
								    			mySwiper.swipeNext();
								    			_index = _index + 1;
								    			if(_index == 5) {
									  				$('.page6 .car').removeClass('inTout');
										    		touch.on('.page6 .box span','tap',function() {
										    			$('.page6').removeClass('stop-swiping');
										    			q = $(this).index()-3;
										    			$(this).addClass('current').siblings().removeClass('current');
										    		})
										    	}else if (_index== 4||_index==6) {
										    		$('.page6 .car').addClass('inTout');
										    	};
								    		},4500)
								    	}else if (_index==3||_index==5) {
							  				$('.page5 .car').removeClass('jump');
							  			};
					    			},500)
					    			$('.page4').removeClass('stop-swiping');
					    		})
					    	}else if (_index==2||_index==4) {
				  				$('.page4 .road').removeClass('scaleFast');
				  			};
	    				},400)
	    				$('.page3').removeClass('stop-swiping');
	    			};
	    		})
	    	} else if (_index==1||_index==3) {
  				$('.page3 .text').addClass('text3');
  				$('.big img').removeClass('bigChd').parent().removeClass('bigPar');
  				$('.small img').removeClass('smallChd').parent().removeClass('smallPar');
  				$('.com').removeClass('scale');
  				$('.page3 div img').removeClass('bigChd').removeClass('smallChd');
  				$('.page3 div').removeClass('bigPar').removeClass('smallPar');
  			};
  			if(_index == 3) {
  				$('.page4').addClass('stop-swiping');
	    		touch.on('.page4 .btn','touchstart',function() {
	    			// $('.page4 .road').addClass('scaleFast');
	    		})
	    	}else if (_index==2||_index==4) {
  				// $('.page4 .road').removeClass('scaleFast');
  			};
  			if(_index == 4) {
  				$('.page3').addClass('stop-swiping');
	    		$('.page5 .car').addClass('jump');
	    	}else if (_index==3||_index==5) {
  				$('.page5 .car').removeClass('jump');
  			};
  			
	    	if(_index == 5) {
	   //  		$('.page8 .dot').removeClass('none');
	   //  		touch.on('.dot','touchstart',function(){
	   //  			if($(this).attr('data-cli')==0){
	   //  				var _icli = $(this).index();
	   //  				$(this).attr({'data-cli':'1'});
	   //  				j++;
	   //  				console.log(j);
	   //  				if (j==3) {
	   //  					$(this).addClass('none').siblings('.ybdot').eq(_icli-1).removeClass('none');
	   //  					setTimeout(function(){
	   //  						alert('xiayiye');
	   //  						$('.page8 div').removeClass('none');
	   //  					},1000)
		  //   			} else {
		  //   				$(this).addClass('none').siblings('.ybdot').eq(_icli-1).removeClass('none');
		  //   			}
	   //  			}
	   //  		})
	   //  		var angle = 0;
				// touch.on('.page8 .bg', 'touchstart', function(ev){
				//     ev.startRotate();
				//     ev.preventDefault();
				// });

				// touch.on('.page8 .bg', 'rotate', function(ev){
				//     var totalAngle = angle + ev.rotation;
				//     if(ev.fingerStatus === 'end'){
				//         angle = angle + ev.rotation;
				//     }
				//     this.style.webkitTransform = 'rotate(' + totalAngle + 'deg)';
				//     if (click == 0) {
				//     	click ++;
				//     	if(totalAngle>10||totalAngle<-10) {
				// 	    	mySwiper.swipeNext();
				// 	    };
				//     }
				    
				// });
	    		// var t;
	    		// $('.page8 .guang1').removeClass('opa');
	    		// setTimeout(function() {
	    		// 	$('.page8 .guang2').removeClass('opa');
	    		// },500)

	    		// touch.on('.page8 .point2','touchstart',function() {
	    		// 	t =2;
	    		// 	console.log('t2:' + t);
	    		// })
	    		// touch.on('.page8 .bg','move',function(ev) {
	    		// 	// t =3;
	    		// 	// console.log('t3:' + t);
		    	// 	// 	if (t == 3) {
		    	// 	// 	setTimeout(function() {
		    	// 	// 		mySwiper.swipeNext();
		    	// 	// 	},200)
		    	// 	// };
		    	// 	console.log('huadong'+ev.x);
	    		// })
	    		setTimeout(function() {
	    			$('.page8 div.t .cont,.yb_drag').addClass('none');
	    			$('.page8 div.t').css({'background':'transparent'})
	    		},1000)
	    		$('.page8 .dots1').addClass('none');
    			$('.page8 .dots2').removeClass('none').addClass('slideOne');
				setTimeout(function() {
					$('.page8 .dots2').addClass('none');
					$('.page8 .dots1').removeClass('none').addClass('slideTwo');
				},1500)
	    		setInterval(function() {
	    			$('.page8 .dots1').addClass('none');
	    			$('.page8 .dots2').removeClass('none').addClass('slideOne');
					setTimeout(function() {
						$('.page8 .dots2').addClass('none');
						$('.page8 .dots1').removeClass('none').addClass('slideTwo');
					},1500)
	    		},3400)
				
	    	} else if (_index==4||_index==6) {
  				// $('.page8  div .dot').removeClass('none').siblings('.dot').addClass('none');
  			};
  			if(_index == 6) {
  				allowSwipeToNext : false;
  				$('.page9 .car').removeClass('transCar');
  			}else if (_index==5||_index==7) {
  				$('.page9 .car').addClass('transCar');
  				setTimeout(function() {
  					$('.page9').removeClass('stop-swiping');
  				},100)
  			};
  			if (_index == 5||_index == 7) {
  				$('.page9').addClass('stop-swiping');
  			};
  			if(_index == 9) {
  				$('.page6 .car').removeClass('inTout');
	    		touch.on('.page6 .box span','tap',function() {
	    			$(this).addClass('current').siblings().removeClass('current');
	    		})
	    	}else if (_index== 8||_index==10) {
	    		$('.page6 .car').addClass('inTout');
	    	};


  			if(_index == 10) {
  				$('.page7 .pic').eq(q).removeClass('none').siblings('.pic').addClass('none');
  				$('.page7 .car').removeClass('inTout');
  				$('.page7 .one').removeClass('bmTop');
  				timer = setTimeout(function() {
  					$('.page7 .two').removeClass('bmTop');
  					timer = setTimeout(function() {
  						$('.page7 .thr').removeClass('bmTop');
  					},300)
  				},300)
  			}else if (_index==9||_index==11) {
  				clearTimeout(timer);
  				$('.page7 .car').addClass('inTout');
  				$('.page7 .one').addClass('bmTop');
  				$('.page7 .two').addClass('bmTop');
  				$('.page7 .thr').addClass('bmTop');
  			};
		},onSlidePrev: function() {
			var timer = null;
	    	var j = 0;
			var _index = mySwiper.activeLoopIndex;
			console.log(_index);
			if(_index == 0) {
	    		$('.page1 .car').removeClass('out');
	    	}
			if (_index == 1) {
				$('.page1 .car').addClass('out');
			};
			if (_index==0||_index==2) {
  				$('.page2 .car').addClass('inTout');
  				$('.page2 .text').removeClass('text2');
  			};
  			if (_index==1||_index==3) {
  				$('.page3 .text').addClass('text3');
  				$('.big img').removeClass('bigChd').parent().removeClass('bigPar');
  				$('.small img').removeClass('smallChd').parent().removeClass('smallPar');
  				$('.com').removeClass('scale');
  				$('.page3 div img').removeClass('bigChd').removeClass('smallChd');
  				$('.page3 div').removeClass('bigPar').removeClass('smallPar');
  			};
  			if (_index==2||_index==4) {
  				// $('.page4 .road').removeClass('scaleFast');
  			};
  			if (_index==3||_index==5) {
  				$('.page5 .car').removeClass('jump');
  			};
  			if (_index==4||_index==6) {
  				$('.page8  div .dot').removeClass('none').siblings('.dot').addClass('none');
  			};
  			if(_index == 5) {
  				// $('.page8 div').css('-webkit-transform','rotate(0)');
  				// $('.now').addClass('none').siblings('.dot').removeClass('none');
  				ybslider=0; // 返回解锁页 可以滑动
  			};
  			if(_index == 6) {
  				$('.page9 .car').removeClass('transCar');
  			};
  			if (_index==5||_index==7) {
  				$('.page9 .car').addClass('transCar');
  			};
  			if(_index == 9 ) {
  				$('.page6 .car').removeClass('inTout');
  			}
  			if (_index== 8||_index==10) {
	    		$('.page6 .car').addClass('inTout');
	    	};
	    	if(_index == 10) {
  				$('.page7 .car').removeClass('inTout');
  				$('.page7 .one').removeClass('bmTop');
  				timer = setTimeout(function() {
  					$('.page7 .two').removeClass('bmTop');
  					timer = setTimeout(function() {
  						$('.page7 .thr').removeClass('bmTop');
  					},300)
  				},300)
  			};
	    	if (_index==9||_index==11) {
  				clearTimeout(timer);
  				$('.page7 .car').addClass('inTout');
  				$('.page7 .one').addClass('bmTop');
  				$('.page7 .two').addClass('bmTop');
  				$('.page7 .thr').addClass('bmTop');
  			};
		}
	})
	var mySwiper2 = new Swiper('.page10 .swiper-container,.page11 .swiper-container',{
		loop:true,
		// autoplay:4000,
		slidesPerView : 2,
		autoplayDisableOnInteraction : false,
		grabCursor: true,
		paginationClickable: true,
		useCSS3Transforms : true,
		updateOnImagesReady : true,
		calculateHeight : true,
	    updateFormElements:true
	})
	$('.page10 .arrow-left').on('click', function(e){
		e.preventDefault()
		mySwiper2.swipePrev()
	})
	$('.page10 .arrow-right').on('click', function(e){
		e.preventDefault()
		mySwiper2.swipeNext()
	})
	var mySwiper3 = new Swiper('.page11 .swiper-container',{
		loop:true,
		// autoplay:4000,
		slidesPerView : 2,
		autoplayDisableOnInteraction : false,
		grabCursor: true,
		paginationClickable: true,
		useCSS3Transforms : true,
		updateOnImagesReady : true,
		calculateHeight : true,
	    updateFormElements:true
	})
	$('.page11 .arrow-left').on('click', function(e){
		e.preventDefault()
		mySwiper3.swipePrev()
	})
	$('.page11 .arrow-right').on('click', function(e){
		e.preventDefault()
		mySwiper3.swipeNext()
	})
	//----------蒙版的弹出，隐藏效果-------------
	touch.on('.page10 .swiper-slide img,.page11 .swiper-slide img','tap',function() {
		var height = $(window).height()/2;
		var H = $('.detail div').height()/2;
		$('.detail').removeClass('none');
		var src = $(this).attr('src');
		$('.detail img').attr('src',src);
		$('.detail div').css('margin-top',(height-H)/2.5);
	})
	touch.on('.detail .cancle','tap',function() {
		$('.detail').addClass('none');
	})

	touch.on('.page9 .know','tap',function() {
		$('.stt').removeClass('none');
	})
	touch.on('.stt .cancle','tap',function() {
		$('.stt').addClass('none');
	})

	touch.on('.page10 .know','tap',function() {
		$('.tech').removeClass('none');
	})
	touch.on('.tech .cancle','tap',function() {
		$('.tech').addClass('none');
	})

	touch.on('.page11 .know','tap',function() {
		$('.global').removeClass('none');
	})
	touch.on('.global .cancle','tap',function() {
		$('.global').addClass('none');
	})

	// addressInit('cmbProvince', 'cmbCity', 'cmbArea', '陕西', '宝鸡市', '金台区');
	// 
	touch.on('.page8 .dot1','touchstart',function(ev) {
		$(this).addClass('none').siblings('.now1').removeClass('none');
	})
	touch.on('.page8 .dot2','touchstart',function(ev) {
		$(this).addClass('none').siblings('.now2').removeClass('none');
	})
	touch.on('.page8 .dot3','touchstart',function(ev) {
		$(this).addClass('none').siblings('.now3').removeClass('none');
	})
	touch.on('.page12 .know','touchstart',function(ev) {
		$('.page12 .meng').removeClass('none');
		$('.success').addClass('none');
	})
	touch.on('.page12 .meng .cancle','tap',function(ev) {
		$('.page12 .meng').addClass('none');
	})
	touch.on('.success .cancle','tap',function(ev) {
		$('.success').addClass('none');
	})
	touch.on('.select .texs','touchstart',function() {
	 	$('.woqu').removeClass('none');
	})
	touch.on('.woqu .cancle','touchstart',function() {
	 	$('.woqu').addClass('none');
	})
	var music = document.getElementById('duang');
	touch.on('.page4 .btn', 'touchstart', function(ev){
		music.play();
	})



	// 滑动解锁
	 var dx, dy,MaxX,MaxY,ybslider=0;
	 touch.on('.page8 .bg,.page .t','touchstart',function(ev) {
	 	ev.preventDefault();
	 })
	 // touch.on('.page8 .yb_drag','touchstart',function(ev) {
	 // 	console.log(111);
		// $('.page8 div.t .cont,.yb_drag').addClass('none');
		// $('.page8 div.t').css({'background':'transparent'})
	 // })
	 touch.on('.page8 .bg .t,.page8 .yb_drag','drag',function(ev) {
	 	ev.preventDefault();
		console.log(ev.x);
		console.log(ev.y);
		dx = ev.x;
		dy = ev.y;
		if (dx>=40) {  
			MaxX=1;
		};
		if (dy>=40) {
			MaxY=1;
		};
		if (MaxX==1&&MaxY==1&&ybslider==0) {
			ybslider=1;
			setTimeout(function(){
				mySwiper.swipeNext();
				MaxX=0,MaxY=0;
			},400)
		};
	})



	 touch.on('.page12 .select .ch','touchstart',function() {
         var lyj_a=$('.ch').attr('a');
         if(lyj_a==0)
         {
             $('.ch').attr('a','1');
         }else{
             $('.ch').attr('a','0');
         }

	 	$('.page12 .select').toggleClass('chose');
	 })
}