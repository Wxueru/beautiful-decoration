app.controller("diaryCtrl", function ($scope, $css) {

    $css.removeAll();
    $css.add('./diary/css/diary.css');

    $.get("http://localhost:8888/diary/select.json",function(data){    	
    	var select = data.select;
			$.each(select,function(idx,ele){
				$(`
					<li>
						<div>
							<p><span><img src="" alt="">4万+</span><span><img src="" alt="">234</span></p>
						</div>
						<p><img src="${ele.img}" alt=""></p>
						<section>
							<p><span><img src="diary/imgs/031.png" alt=""></span></p>
							<div>
								<p>半路出家的装修高手</p>
								<p>[嘉兴]三室两厅一厨一卫</p>
							</div>
						</section>
					</li>
				`).appendTo('.libry .select-data ul')
   			 })
	});

   

    $.get("http://localhost:8888/diary/new.json",function(data){
    	var newData = data.new;
    	$.each(newData,function(index,value){
    		$(`
	    		<section>
					<div class="title">
						<h2>${value.title}</h2>
						<span>${value.p}</span>
						<img src="diary/imgs/07.png"/>
						<p>${value.passage}</p>
						<p class="green">全文</p>
					</div>

						<div class="pics">
							<a href="#"><img src="${value.img[0].imgin}"/></a>
							<a href="#"><img src="${value.img[1].imgin}"/></a>
							<a href="#"><img src="${value.img[2].imgin}"/></a>
						</div>


					<div class="text">
						<nav>
							<div class="left">
								<img src="diary/imgs/20.png"/>
								<span class="white">921</span>
							</div>

							<div class="right">
								<a href="#">
									<img src="diary/imgs/011.png"/>
								</a><span class="grey">0</span>
								<a href="#">
									<img src="diary/imgs/013.png"/>
								</a><span class="grey">21</span>
							</div>
						</nav>
					</div>
				</section>`).appendTo('.libry .new .banner')

	   	})

    });

		$('.libry header .header-sec .sec').on('click',function(){
			$('.libry header .header-sec span').css({
				backgroundColor:"#c0c0c0"
				});
			$(this).css({
				backgroundColor:"#96C85C"
			})
			$('.libry .select-data').show();
			$('.libry .new').hide();
			

		});


		$('.libry header .header-sec .newBest').on('click',function(){
			$('.libry header .header-sec span').css({
				backgroundColor:"#c0c0c0"
				});
			$(this).css({
				backgroundColor:"#96C85C"
			})
			$('.libry .select-data').hide();
			$('.libry .new').show();
			
			})

})