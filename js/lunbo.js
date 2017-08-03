window.mySwipe = Swipe(document.getElementById('slider'),
				{
				  startSlide: 0, //第几张开始
				  speed: 400,
				  auto: 0, 	  //是否自动播放。为0就不会自动播放
				  continuous: true,//无限循环
				  disableScroll: false,
				  stopPropagation: false,
				}
			);