define([
		'lib/doT',
		'text!template/m.html!strip',
		'text!template/pc.html!strip',
		'text!template/item0.html!strip',
		'text!template/item1.html!strip',
		'text!template/item2.html!strip',
		'text!template/item3.html!strip',
		'plugin/detect',
		'plugin/fullpage'
	],
	function(
		doT, mTpl, pcTpl, item0, item1, item2, item3
	) {
		var itemTpl;

		function initView() {
			mTplFn = doT.template(mTpl);
			pcTplFn = doT.template(pcTpl);
			item0Fn = doT.template(item0);
			item1Fn = doT.template(item1);
			item2Fn = doT.template(item2);
			item3Fn = doT.template(item3);
			itemTpl = [item0Fn, item1Fn, item2Fn, item3Fn];

			if ($.os.phone) {
				$('.wrap').html(mTplFn());
				bindEvent();
			} else if ($.os.tablet) {
				$('.wrap').html(mTplFn());
				bindEvent();
			} else {
				$('.wrap').html(pcTplFn());
				pcInitView();
			}

			console.log("%c练小习，熟练掌握css，熟练掌握js，熟悉若干css以及js框架，喜欢研究，喜欢新技术。精通魔兽世界各职业pev技能，精通炉石传说各职业打法。", "background-image:-webkit-gradient( linear, left top, right top, color-stop(0, #4096EE), color-stop(0.15, #FF1A00), color-stop(0.3, #4096EE), color-stop(0.45, #FF1A00), color-stop(0.6, #4096EE),color-stop(0.75, #FF1A00), color-stop(0.9, #4096EE), color-stop(1, #FF1A00) );color:transparent;-webkit-background-clip: text;font-size:14px;");
			console.log("%c", "padding:40px 250px; line-height:150px;background:url('http://www.chengrang.net/image/233.gif') no-repeat;");
		}

		function pcInitView() {

		}

		function bindEvent() {
			var $fullEl = $('.m-wrap', $('body'));
			$fullEl.fullpage({
				verticalCentered: 'false',
				afterRender: mInit,
				afterLoad: addItem,
				continuousVertical: true,
				css3: true
			});
		}

		function mInit() {
			var animateNum = Math.floor(Math.random() * 7 + 1);
			var boxNum = Math.floor(Math.random() * 5 + 1);
			var data = {};
			data.num = animateNum;
			// data.i = e;
			data.box = boxNum;
			$('.section').find('.fp-tableCell').html('');
			$('.page0').find('.fp-tableCell').html(itemTpl[0](data));
		}

		function addItem(a, e) {
			var e = e - 1;
			var animateNum = Math.floor(Math.random() * 7 + 1);
			var boxNum = Math.floor(Math.random() * 5 + 1);
			var data = {};
			data.num = animateNum;
			// data.i = e;
			data.box = boxNum;
			$('.section').find('.fp-tableCell').html('');
			$('.page' + e).find('.fp-tableCell').html(itemTpl[e](data));
		}

		function clearItem() {

		}

		function show() {
			initView();
		}

		function preload() {
			return module;
		}
		var module = {
			preload: preload,
			show: show
		};
		return module;
	}
);