var oTotal = document.getElementsByClassName("total_time")[0]
			var oAudio = document.getElementById("audio")
			var opic = document.getElementById("pic")
			var oPlay = document.getElementById("play")
			var oCircle = document.getElementById("circle")
			var oCircle_sound = document.getElementById("circle_sound")
			var oStart = document.getElementById("start_time")
			var oRound = document.getElementById("round")
			var oRound_sound = document.getElementById("round_sound")
			var oLoad = document.getElementById("load")
			var oSound = document.getElementById("sound")
			var oUl = document.getElementById("ul")
			var oLi = oUl.getElementsByTagName("li") /////////////////////////////////
			var oTop = document.getElementById("top")
			var oDown = document.getElementById("down")
			var num = 0
			var arr = ["src/song/阿肆,林宥嘉 - 致姗姗来迟的你.mp3", "src/song/雷雨心 - 记·念(live).mp3",
				"src/song/张宇桦 - 优美的小调(钢琴曲).mp3", "src/song/几米 - 拥有Masbfca (广告配乐完整版).mp3"
			]
			var arr_pic = ["src/pic/001.png", "src/pic/002.png", "src/pic/003.png", "src/pic/004.png"]
			oAudio.src = arr[num]
			opic.src = arr_pic[num]


			//lyric
			var lyric001 = {
				"[00:00.10]": "致姗姗来迟的你",
				"[00:00.20]": "阿肆&林宥嘉",
				"[00:00.30]": "",
				"[00:00.40]": "作词：阿肆",
				"[00:00.50]": "作曲：阿肆",
				"[00:00.60]": "",
				"[00:00.79]": "我不介意你慢动作",
				"[00:05.39]": "也不介意这次先擦肩而过",
				"[00:14.24]": "吃一人份的饭 刷一人份的碗",
				"[00:18.21]": "真的我并没有觉得孤单",
				"[00:22.05]": "逛一人份的街 买一人份的单",
				"[00:26.23]": "真的我并没有觉得孤单",
				"[00:29.10]": "我相信你正在与我相遇的路上马不停蹄",
				"[00:36.87]": "所以当我拥抱整个世界的孤寂",
				"[00:41.39]": "也像拥抱着你",
				"[00:45.32]": "我不介意你慢动作",
				"[00:49.03]": "也不介意这次先擦肩而过",
				"[00:53.98]": "某天我们总会遇到对方然后说",
				"[00:59.50]": "原来 是你噢",
				"[01:01.21]": "我不介意你慢动作",
				"[01:05.13]": "也不介意这次先擦肩而过",
				"[01:10.01]": "某天你会发现灯火阑珊处的我",
				"[01:15.31]": "等了你 好久噢",
				"[01:20.47]": "",
				"[01:34.20]": "吃一人份的饭 刷一人份的碗",
				"[01:38.14]": "真的我并没有觉得孤单",
				"[01:42.06]": "逛一人份的街 买一人份的单",
				"[01:46.04]": "真的我并没有觉得孤单",
				"[01:48.93]": "我相信你正在与我相遇的路上马不停蹄",
				"[01:56.81]": "所以当我拥抱整个世界的孤寂",
				"[02:01.25]": "也像拥抱着你",
				"[02:05.18]": "我不介意你慢动作",
				"[02:09.15]": "也不介意这次先擦肩而过",
				"[02:13.97]": "某天我们总会遇到对方然后说",
				"[02:19.43]": "原来 是你噢",
				"[02:21.17]": "我不介意你慢动作",
				"[02:24.96]": "也不介意这次先擦肩而过",
				"[02:29.93]": "某天你会发现灯火阑珊处的我",
				"[02:35.31]": "等了你 好久噢",
				"[02:37.49]": "",
				"[02:38.21]": "正在与我相遇的路上马不停蹄",
				"[02:42.23]": "就算这次先擦肩而过",
				"[02:45.97]": "所以当我拥抱整个世界的孤寂",
				"[02:49.28]": "也像拥抱着你",
				"[02:53.26]": "我不介意你慢动作",
				"[02:57.01]": "也不介意这次先擦肩而过",
				"[03:01.88]": "某天我们总会遇到对方然后说",
				"[03:07.29]": "好巧噢",
				"[03:13.07]": "",
				"[03:26.58]": "你总会等到姗姗来迟的我",
				"[03:38.51]": "你总会等到姗姗来迟的我",
				"[03:54.60]": "你总会等到姗姗来迟的我",
				"[03:30.53]": "我总会等到姗姗来迟的你",
				"[03:42.45]": "我总会等到姗姗来迟的你",
				"[03:34.63]": "我总会等到姗姗来迟的你",
				"[03:46.46]": "我总会等到姗姗来迟的你",
				"[03:38.51]": "你总会等到姗姗来迟的我",
				"[03:50.48]": "你总会等到姗姗来迟的我"
			};
			var lyric002 = {
				"[00:00.00]": "记·念 - 雷雨心",
				"[00:02.00]": "词：雷雨心,蒋思涵",
				"[00:04.00]": "曲：雷雨心",
				"[00:08.00]": "",
				"[00:09.79]": "时间一转眼就过去了三年",
				"[00:14.08]": "一切在我心里开的好皎洁",
				"[00:18.48]": "现在倒计时也不剩几天",
				"[00:22.55]": "脚边的纸片",
				"[00:24.78]": "来不及去捡",
				"[00:27.08]": "仿佛是快要冲破压力的茧",
				"[00:31.47]": "离校后大家又各自熬夜",
				"[00:35.92]": "早上的黑眼圈",
				"[00:38.06]": "课上的小困倦",
				"[00:40.31]": "一天一天又一天",
				"[00:45.98]": "我只想要拉住流年",
				"[00:48.98]": "好好的说声再见",
				"[00:51.18]": "遗憾感谢都回不去昨天",
				"[00:54.98]": "我只想铭记这瞬间",
				"[00:58.61]": "我们一起走过的光年",
				"[01:04.31]": "六月后 光年成纪念",
				"[01:11.56]": "",
				"[01:16.47]": "这个班级太傲娇",
				"[01:18.52]": "什么课都不发言",
				"[01:20.60]": "但是还是很温暖",
				"[01:23.06]": "同学之间的寒暄",
				"[01:25.86]": "压着课本抄作业",
				"[01:27.97]": "考试上的看一眼",
				"[01:30.10]": "现在想起来",
				"[01:31.27]": "会不会觉得很亲切",
				"[01:37.83]": "我只想要拉住流年",
				"[01:41.09]": "好好的说声再见",
				"[01:43.55]": "遗憾感谢都回不去昨天",
				"[01:47.15]": "我只想铭记这瞬间",
				"[01:50.87]": "我们一起走过的光年",
				"[01:55.59]": "我只想要拉住流年",
				"[01:58.63]": "好好的说声再见",
				"[02:00.79]": "在心中刻下你们的笑脸",
				"[02:04.83]": "当流星划过天边",
				"[02:08.37]": "许下我们的心愿",
				"[02:13.30]": "让现在成为永远",
				"[02:21.63]": "永远 永远",
				"[02:28.82]": " ",
			};
			var lyric003 = {
				"[00:00.00]": "纯音乐 无歌词"
			};
			var lyric004 = {
				"[00:00.00]": "纯音乐 无歌词"
			};

			var arr_lrc = [lyric001, lyric002, lyric003, lyric004]

			var lrcTime = []; //歌词对应的时间数组
			var ul = $("#lrclist")[0]; //获取ul

			function lyricInit(x) {
				console.log("lyricinit");
				var i = 0; //i后面会是歌词最后一行的下标数
				lrcJSON = arr_lrc[x];
				$("#lrclist").find("li").remove();
				$.each(lrcJSON, function(key, value) { //遍历lrc
					lrcTime[i++] = parseFloat(key.substr(1, 3)) * 60 + parseFloat(key.substring(4, 10)); //00:00.000转化为00.000格式
					ul.innerHTML += "<li><p>" + lrcJSON[key] + "</p></li>"; //ul里填充歌词
				});
				lrcTime[lrcTime.length] = lrcTime[lrcTime.length - 1] + 3; //如不另加一个结束时间，到最后歌词滚动不到最后一句
				console.log("这首歌为" + x);
				console.log("这首歌的歌词最后一句下标为" + i);
				currentLine = 0;
				lastLine = 0;

				oAudio.volume = 0.5
				oCircle_sound.style.width = "25px"
				oRound_sound.style.left = "25px"
			}
			lyricInit(0);


			var $li = $("#lrclist>li"); //获取所有li
			var currentLine = 0; //当前播放到哪一句了
			var currentTime; //当前播放的时间
			var audio = document.getElementById("audio");
			var ppxx; //保存ul的translateY值
			var lastLine = 0;


			//点击切换歌曲
			for (var i = 0; i < oLi.length; i++) {
				oLi[i].index = i
				oLi[i].onclick = function() { //onclick当用户点击某个对象时调用的事件句柄。
					num = this.index
					oAudio.src = arr[this.index]
					oAudio.play()
					opic.src = arr_pic[this.index]
					opic.style.animationPlayState = "running"

					oPlay.innerHTML = '<i class="iconfont icon-tingzhi"></i>'

					lyricInit(num);
				}
			}

			//转换总时长
			oAudio.addEventListener("canplay", function() {
				oTotal.innerHTML = getMin(this.duration) //getmin 在下面定义
			})

			//点击开始播放
			oPlay.onclick = function() {
				if (oAudio.paused) {
					oAudio.play()
					oPlay.innerHTML = '<i class="iconfont icon-tingzhi"></i>'
					// img.style.animation-play-state = "running"
					opic.style.animationPlayState = "running"

				} else {
					oAudio.pause()
					oPlay.innerHTML = '<i class="iconfont icon-bofang"></i>'
					// img.style.animation-play-state = "paused"
					opic.style.animationPlayState = "paused"
				}
			}

			//监听进度变化
			oAudio.ontimeupdate = function() {
				var pre = Math.floor(oAudio.currentTime / oAudio.duration * 200)
				oCircle.style.width = pre + "px"
				oStart.innerHTML = getMin(oAudio.currentTime)
				oRound.style.left = oCircle.style.width
				if (num != 2 && num != 3) {
					//lyric
					currentTime = audio.currentTime;
					for (j = currentLine, len = lrcTime.length; j < len; j++) {
						if (currentTime < lrcTime[j + 1] && currentTime > lrcTime[j]) {
							currentLine = j;
							ppxx = 280 - (currentLine * 32);
							ul.style.transform = "translateY(" + ppxx + "px)";
							//$li.get(currentLine-1).className="";    
							//不应该简单地用currentLine-1,这样跳换进度时,有可能另一个进程改变currentLine的值,会无法把应该取消红色的歌词,取消红色
							//所以添加一个lastLine变量
							//$li.get(currentLine-1).className="";
							if (lastLine != currentLine) {
								$li.get(lastLine).className = "";
								lastLine = currentLine;
							}
							console.log("on" + currentLine);
							$li.get(currentLine).className = "on";
							break;
						}
					}
				}
				if (oAudio.currentTime == oAudio.duration) {
					opic.style.animationPlayState = "paused"
				}
			}

			//点击进度变化
			oLoad.onclick = function(e) {
				var l = e.clientX - oLoad.offsetLeft
				oAudio.currentTime = (l / 200) * oAudio.duration
				//lyric
				currentTime = oAudio.currentTime;
				console.log("  off" + currentLine);
				//$li.get(currentLine-1).className="";    
				//不应该简单地用currentLine-1,这样跳换进度时,有可能另一个进程改变currentLine的值,会无法把应该取消红色的歌词,取消红色
				//所以添加一个lastLine变量
				if (lastLine != currentLine) {
					$li.get(lastLine).className = "";
					lastLine = currentLine;
				}
				for (k = 0, len = lrcTime.length; k < len; k++) {
					if (currentTime < lrcTime[k + 1] && currentTime < lrcTime[k]) {
						currentLine = k;
						break;
					}
				}
			}

			//拖拽原点
			oRound.onmousedown = function(e) {
				document.onmousemove = function(e) {
					var l = e.clientX - oLoad.offsetLeft
					oAudio.currentTime = (l / 200) * oAudio.duration
					//lyric
					currentTime = oAudio.currentTime;
					console.log("  off" + currentLine);
					//$li.get(currentLine-1).className="";    
					//不应该简单地用currentLine-1,这样跳换进度时,有可能另一个进程改变currentLine的值,会无法把应该取消红色的歌词,取消红色
					//所以添加一个lastLine变量
					if (lastLine != currentLine) {
						$li.get(lastLine).className = "";
						lastLine = currentLine;
					}
					for (k = 0, len = lrcTime.length; k < len; k++) {
						if (currentTime < lrcTime[k + 1] && currentTime < lrcTime[k]) {
							currentLine = k;
							break;
						}
					}

				}
				document.onmouseup = function() {
					document.onmousedown = null
					document.onmousemove = null
					//					console.log("up")
				}
				return false
			}

			//点击声音变化
			oSound.onclick = function(e) {
				var s = e.clientX - oSound.offsetLeft
				oAudio.volume = (s / 50)
				var pre = oAudio.volume * 50
				oCircle_sound.style.width = pre + "px"
				oRound_sound.style.left = oCircle_sound.style.width
			}

			//拖拽声音原点
			oRound_sound.onmousedown = function(e) {
				document.onmousemove = function(e) {
					var s = e.clientX - oSound.offsetLeft
					console.log(s)
					// oAudio.currentTime = (l / 200) * oAudio.duration
					oAudio.volume = (s / 50)
					var pre = oAudio.volume * 50
					oCircle_sound.style.width = pre + "px"
					oRound_sound.style.left = oCircle_sound.style.width
				}
				document.onmouseup = function() {
					document.onmousedown = null
					document.onmousemove = null
					console.log("up")
				}
				return false
			}

			//获取分钟的函数
			function getMin(time) {
				var m = Math.floor(time / 60)
				var s = Math.floor(time % 60)
				if (m <= 9) {
					m = "0" + m
				}
				if (s <= 9) {
					s = "0" + s
				}
				return m + ":" + s
			}

			//上一首
			oTop.onclick = function() {
				num--
				if (num < 0) {
					num = arr.length - 1
				}
				oAudio.src = arr[num]
				oAudio.play()
				opic.src = arr_pic[num]
				opic.style.animationPlayState = "running"

				lyricInit(num);
			}

			//下一首
			oDown.onclick = function() {
				num++
				if (num > arr.length - 1) {
					num = 0
				}
				oAudio.src = arr[num]
				oAudio.play()
				opic.src = arr_pic[num]
				opic.style.animationPlayState = "running"

				lyricInit(num);
			}
