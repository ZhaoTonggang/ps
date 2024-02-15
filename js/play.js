// 严格模式
"use strict";
//获取游戏信息
let gameInfo = {};
const url = window.location.href;
const urldata = decodeURI(url);
//游戏状态
let setgame = false;
// 参数合法性
const urlerr = () => {
	alert('参数传入不合法');
	window.location.href = "/";
	return;
}
// 判断数据合法性
if (window.top != window) {
	alert('当您看到这条提示意味着：您所访问的网站正在恶意调用本站资源，本站对偷盗资源的行为0容忍，点击确认跳转正版体验。');
	window.open('https://gba.heheda.top', '_self');
} else if (urldata.indexOf('?') > -1 && urldata.indexOf('&') > -1 && urldata.indexOf('=') > -1) {
	const urlarr = urldata.split('?')[1];
	if (urldata.indexOf('index') > -1) {
		window.open('./?' + urlarr, '_self');
	} else {
		const urlarrs = urlarr.split('&');
		for (let i = 0; i < urlarrs.length; i++) {
			let data = urlarrs[i].split('=');
			if (data == "") {
				urlerr();
			}
			gameInfo[data[0]] = data[1];
		}
		cocoMessage.warning("正在配置资源！", 2000);
		const showload = document.getElementById('btn_load');
		//展示游戏名称
		const gnm = !gameInfo.v ? '' : '(' + gameInfo.v + ')';
		document.getElementById('name').innerHTML = gameInfo.n + gnm;
		// 修改title
		document.title = gameInfo.n + gnm + ' - ' + 'PS游戏盒';
		window.gameName = gameInfo.n + gnm;
		// 游戏ID
		window.gameId = gameInfo.i;
		// 封面
		window.backgroundImg = '../imgs/' + gameInfo.i + '.png';
		//BIOS
		if (gameInfo.b) {
			window.biosUrl = '../bios/' + gameInfo.b + '.7z';
		}
		// ROM
		window.gameUrl = "https://arcade-rom.heheda.top/" + gameInfo.i + ".7z";
		// 初始化
		window.EJS_player = "#show_box";
		window.dataPath = "https://other.heheda.top/gamelib/";
		// 核心
		window.system = "psx";
		// 全屏
		window.fullscreenOnLoad = true;
		// 广告
		window.adUrl = "../ads/";
		// 广告时间
		window.adTimer = 5000;
		// 音量
		window.volume = 1;
		// 菜单配置
		window.defaultOptions = {
			'shader': 'crt-easymode.glslp',
			'save-state-location': 'browser'
		}
		// 背景模糊
		window.backgroundBlur = true;
		// 背景颜色
		window.backgroundColor = "#ffffff00";
		window.langJson = {
			"0": "0",
			"1": "1",
			"2": "2",
			"3": "3",
			"4": "4",
			"5": "5",
			"6": "6",
			"7": "7",
			"8": "8",
			"9": "9",
			"Restart": "重新开始",
			"Pause": "暂停",
			"Play": "开始",
			"Save State": "存档",
			"Load State": "读档",
			"Control Settings": "控制设置",
			"Cheats": "作弊",
			"Cache Manager": "缓存管理器",
			"Export Save File": "导出存档文件",
			"Import Save File": "导入存档文件",
			"Netplay": "网络游玩",
			"Mute": "静音",
			"Unmute": "取消静音",
			"Settings": "设置",
			"Enter Fullscreen": "进入全屏",
			"Exit Fullscreen": "退出全屏",
			"Reset": "重置",
			"Clear": "清除",
			"Close": "关闭",
			"QUICK SAVE STATE": "快速存档",
			"QUICK LOAD STATE": "快速读档",
			"CHANGE STATE SLOT": "改变状态槽",
			"FAST FORWARD": "快进",
			"Player": "玩家",
			"Connected Gamepad": "连接游戏手柄",
			"Gamepad": "游戏手柄",
			"Keyboard": "键盘",
			"Set": "设置",
			"Add Cheat": "添加作弊",
			"Create a Room": "创建房间",
			"Rooms": "房间",
			"Start Game": "开始游戏",
			"Loading...": "正在加载...",
			"Download Game Core": "下载游戏核心",
			"Decompress Game Core": "解压游戏核心",
			"Download Game Data": "下载游戏数据",
			"Decompress Game Data": "解压游戏数据",
			"Context Menu": "菜单",
			"Shaders": "着色器",
			"Disabled": "禁用",
			"2xScaleHQ": "2xScaleHQ",
			"4xScaleHQ": "4xScaleHQ",
			"CRT easymode": "CRT简易模式",
			"CRT aperture": "CRT荫栅式",
			"CRT geom": "CRT几何",
			"CRT mattias": "CRT马蒂亚斯",
			"FPS": "FPS",
			"show": "展示",
			"hide": "隐藏",
			"Fast Forward Ratio": "快进速率",
			"Fast Forward": "快进",
			"Enabled": "启用",
			"Save State Slot": "保存状态槽",
			"Save State Location": "保存状态位置",
			"Download": "下载",
			"Keep in Browser": "保留在浏览器中",
			"speed": "速度",
			"adjust": "调整",
			"samplerate": "采样率",
			"input": "输入",
			"None": "无",
			"Player 1": "玩家1",
			"Player 2": "玩家2",
			"Both": "两者",
			"SAVED STATE TO SLOT": "已将状态保存到插槽",
			"LOADED STATE FROM SLOT": "已从插槽加载状态",
			"SET SAVE STATE SLOT TO": "将保存状态槽设置为",
			"Network Error": "网络错误",
			"Submit": "提交",
			"Description": "描述",
			"Code": "代码",
			"Add Cheat Code": "添加作弊码",
			"Leave Room": "退出房间",
			"Password": "密码",
			"Password (optional)": "密码（可选）",
			"Max Players": "最大玩家数",
			"Room Name": "房间名称",
			"Join": "加入",
			"Player Name": "玩家名称",
			"Set Player Name": "设置玩家名称",
			"Left Handed Mode": "左手模式",
			"Virtual Gamepad": "虚拟手柄",
			"Disk": "磁盘",
			"Press Keyboard": "按键盘",
			"INSERT COIN": "投币",
			"Remove": "消除",
			"SAVE LOADED FROM BROWSER": "已从浏览器加载状态",
			"SAVE SAVED TO BROWSER": "已将状态保存到浏览器",
			"Join the discord": "加入discord",
			"View on GitHub": "在GitHub上查看",
			"Failed to start game": "无法开始游戏",
			"Download Game BIOS": "下载游戏BIOS",
			"Decompress Game BIOS": "解压游戏BIOS",
			"Download Game Parent": "下载游戏父级",
			"Decompress Game Parent": "解压游戏父级",
			"Download Game Patch": "下载游戏补丁",
			"Decompress Game Patch": "解压游戏补丁",
			"Download Game State": "下载游戏状态",
			"Check console": "检查控制台",
			"Error for site owner": "给站长的错误提醒",
			"EmulatorJS": "EmulatorJS",
			"Clear All": "全部清除",
			"Take Screenshot": "截图",
			"Start screen recording": "开始录屏",
			"Stop screen recording": "停止录屏",
			"Quick Save": "快速保存",
			"Quick Load": "快速加载",
			"REWIND": "快退",
			"Rewind Enabled (requires restart)": "已启用快退（需要重新启动）",
			"Rewind Granularity": "快退粒度",
			"Slow Motion Ratio": "慢动作比率",
			"Slow Motion": "慢动作",
			"Home": "主页",
			"EmulatorJS License": "EmulatorJS 许可证",
			"RetroArch License": "RetroArch 许可证",
			"SLOW MOTION": "慢动作",
			"A": "A",
			"B": "B",
			"SELECT": "选择",
			"START": "开始",
			"UP": "向上",
			"DOWN": "向下",
			"LEFT": "向左",
			"RIGHT": "向右",
			"X": "X",
			"Y": "Y",
			"L": "L",
			"R": "R",
			"Z": "Z",
			"STICK UP": "摇杆向上",
			"STICK DOWN": "摇杆向下",
			"STICK LEFT": "摇杆向左",
			"STICK RIGHT": "摇杆向右",
			"C-PAD UP": "C-PAD 向上",
			"C-PAD DOWN": "C-PAD 向下",
			"C-PAD LEFT": "C-PAD 向左",
			"C-PAD RIGHT": "C-PAD 向右",
			"MICROPHONE": "麦克风",
			"BUTTON 1 / START": "按钮 1 / 开始",
			"BUTTON 2": "按钮2",
			"BUTTON": "按钮",
			"BUTTON_1": "BUTTON_1",
			"BUTTON_2": "BUTTON_2",
			"up arrow": "up arrow",
			"down arrow": "down arrow",
			"left arrow": "left arrow",
			"right arrow": "right arrow",
			"Rewind": "Rewind",
			"LEFT D-PAD UP": "左方向键向上",
			"LEFT D-PAD DOWN": "左方向键向下",
			"LEFT D-PAD LEFT": "左方向键向左",
			"LEFT D-PAD RIGHT": "左方向键向右",
			"RIGHT D-PAD UP": "右方向键向上",
			"RIGHT D-PAD DOWN": "右方向键向下",
			"RIGHT D-PAD LEFT": "右方向键向左",
			"RIGHT D-PAD RIGHT": "右方向键向右",
			"C": "C",
			"MODE": "模式",
			"FIRE": "开火",
			"RESET": "重置",
			"LEFT DIFFICULTY A": "左难易度A",
			"LEFT DIFFICULTY B": "左难易度B",
			"RIGHT DIFFICULTY A": "右难易度A",
			"RIGHT DIFFICULTY B": "右难易度B",
			"COLOR": "彩色",
			"B/W": "黑白",
			"PAUSE": "暂停",
			"OPTION": "选项",
			"OPTION 1": "选项1",
			"OPTION 2": "选项2",
			"L2": "L2",
			"R2": "R2",
			"L3": "L3",
			"R3": "R3",
			"L STICK UP": "左摇杆向上",
			"L STICK DOWN": "左摇杆向下",
			"L STICK LEFT": "左摇杆向左",
			"L STICK RIGHT": "左摇杆向右",
			"R STICK UP": "右摇杆向上",
			"R STICK DOWN": "右摇杆向下",
			"R STICK LEFT": "右摇杆向左",
			"R STICK RIGHT": "右摇杆向右",
			"Start": "开始",
			"Select": "选择",
			"Fast": "加速",
			"Slow": "减速",
			"a": "a",
			"b": "b",
			"c": "d",
			"d": "d",
			"e": "e",
			"f": "f",
			"g": "g",
			"h": "h",
			"i": "i",
			"j": "j",
			"k": "k",
			"l": "l",
			"m": "m",
			"n": "n",
			"o": "o",
			"p": "p",
			"q": "q",
			"r": "r",
			"s": "s",
			"t": "t",
			"u": "u",
			"v": "v",
			"w": "w",
			"x": "x",
			"y": "y",
			"z": "z",
			"enter": "回车",
			"escape": "Esc",
			"space": "空格",
			"tab": "Tab",
			"backspace": "退格",
			"delete": "删除",
			"arrowup": "向上箭头",
			"arrowdown": "向下箭头",
			"arrowleft": "向左箭头",
			"arrowright": "向右箭头",
			"f1": "f1",
			"f2": "f2",
			"f3": "f3",
			"f4": "f4",
			"f5": "f5",
			"f6": "f6",
			"f7": "f7",
			"f8": "f8",
			"f9": "f9",
			"f10": "f10",
			"f11": "f11",
			"f12": "F12",
			"shift": "Shift",
			"control": "Ctrl",
			"alt": "Alt",
			"meta": "Win",
			"capslock": "大写锁定",
			"insert": "Insert",
			"home": "Home",
			"end": "End",
			"pageup": "向上翻页",
			"pagedown": "向下翻页",
			"!": "！",
			"@": "@",
			"#": "#",
			"$": "$",
			"%": "%",
			"^": "^",
			"&": "&",
			"*": "*",
			"(": "（",
			")": "）",
			"-": "-",
			"_": "_",
			"+": "+",
			"=": "=",
			"[": "[",
			"]": "]",
			"{": "{",
			"}": "}",
			";": ";",
			":": ":",
			"'": "'",
			"\"": "”",
			",": ",",
			".": "。",
			"<": "<",
			">": ">",
			"/": "/",
			"?": "？",
			"LEFT_STICK_X": "LEFT_STICK_X",
			"LEFT_STICK_Y": "LEFT_STICK_Y",
			"RIGHT_STICK_X": "RIGHT_STICK_X",
			"RIGHT_STICK_Y": "RIGHT_STICK_Y",
			"LEFT_TRIGGER": "左扳机",
			"RIGHT_TRIGGER": "右扳机",
			"A_BUTTON": "按键A",
			"B_BUTTON": "按键B",
			"X_BUTTON": "按键X",
			"Y_BUTTON": "按键Y",
			"START_BUTTON": "开始键",
			"SELECT_BUTTON": "选择键",
			"L1_BUTTON": "L1键",
			"R1_BUTTON": "R1键",
			"L2_BUTTON": "L2键",
			"R2_BUTTON": "R2键",
			"LEFT_THUMB_BUTTON": "左拇指按键",
			"RIGHT_THUMB_BUTTON": "右拇指按键",
			"DPAD_UP": "十字键向上",
			"DPAD_DOWN": "十字键向下",
			"DPAD_LEFT": "十字键向左",
			"DPAD_RIGHT": "十字键向右"
		}
		// 按键映射
		window.defaultControllers = {
			0: {
				0: {
					'value': 'b',
					'value2': 'BUTTON_2'
				},
				1: {
					'value': 'h',
					'value2': 'BUTTON_4'
				},
				2: {
					'value': 'space',
					'value2': 'SELECT'
				},
				3: {
					'value': 'enter',
					'value2': 'START'
				},
				4: {
					'value': 'w',
					'value2': 'DPAD_UP'
				},
				5: {
					'value': 's',
					'value2': 'DPAD_DOWN'
				},
				6: {
					'value': 'a',
					'value2': 'DPAD_LEFT'
				},
				7: {
					'value': 'd',
					'value2': 'DPAD_RIGHT'
				},
				8: {
					'value': 'v',
					'value2': 'BUTTON_1'
				},
				9: {
					'value': 'g',
					'value2': 'BUTTON_3'
				},
				10: {
					'value': 'z',
					'value2': 'LEFT_TOP_SHOULDER'
				},
				11: {
					'value': 'x',
					'value2': 'RIGHT_TOP_SHOULDER'
				},
				12: {
					'value2': 'LEFT_BOTTOM_SHOULDER'
				},
				13: {
					'value2': 'RIGHT_BOTTOM_SHOULDER'
				},
				14: {
					'value2': 'LEFT_STICK'
				},
				15: {
					'value2': 'RIGHT_STICK'
				},
				16: {
					'value2': 'LEFT_STICK_X:+1'
				},
				17: {
					'value2': 'LEFT_STICK_X:-1'
				},
				18: {
					'value2': 'LEFT_STICK_Y:+1'
				},
				19: {
					'value2': 'LEFT_STICK_Y:-1'
				},
				20: {
					'value2': 'RIGHT_STICK_X:+1'
				},
				21: {
					'value2': 'RIGHT_STICK_X:-1'
				},
				22: {
					'value2': 'RIGHT_STICK_Y:+1'
				},
				23: {
					'value2': 'RIGHT_STICK_Y:-1'
				},
				24: {
					'value': '1'
				},
				25: {
					'value': '2'
				},
				26: {
					'value': '3'
				}
			},
			1: {
				0: {
					'value': 'l',
					'value2': 'BUTTON_2'
				},
				1: {
					'value': 'p',
					'value2': 'BUTTON_4'
				},
				2: {
					'value': 'dash',
					'value2': 'SELECT'
				},
				3: {
					'value': 'equal sign',
					'value2': 'START'
				},
				4: {
					'value': 'up arrow',
					'value2': 'DPAD_UP'
				},
				5: {
					'value': 'down arrow',
					'value2': 'DPAD_DOWN'
				},
				6: {
					'value': 'left arrow',
					'value2': 'DPAD_LEFT'
				},
				7: {
					'value': 'right arrow',
					'value2': 'DPAD_RIGHT'
				},
				8: {
					'value': 'k',
					'value2': 'BUTTON_1'
				},
				9: {
					'value': 'o',
					'value2': 'BUTTON_3'
				},
				10: {
					'value': 'comma',
					'value2': 'LEFT_TOP_SHOULDER'
				},
				11: {
					'value': 'period',
					'value2': 'RIGHT_TOP_SHOULDER'
				},
				12: {
					'value2': 'LEFT_BOTTOM_SHOULDER'
				},
				13: {
					'value2': 'RIGHT_BOTTOM_SHOULDER'
				},
				14: {
					'value2': 'LEFT_STICK'
				},
				15: {
					'value2': 'RIGHT_STICK'
				},
				16: {
					'value2': 'LEFT_STICK_X:+1'
				},
				17: {
					'value2': 'LEFT_STICK_X:-1'
				},
				18: {
					'value2': 'LEFT_STICK_Y:+1'
				},
				19: {
					'value2': 'LEFT_STICK_Y:-1'
				},
				20: {
					'value2': 'RIGHT_STICK_X:+1'
				},
				21: {
					'value2': 'RIGHT_STICK_X:-1'
				},
				22: {
					'value2': 'RIGHT_STICK_Y:+1'
				},
				23: {
					'value2': 'RIGHT_STICK_Y:-1'
				},
				24: {
					'value': '4'
				},
				25: {
					'value': '5'
				},
				26: {
					'value': '6'
				}
			},
			2: {
				0: {
					'value2': 'BUTTON_2'
				},
				1: {
					'value2': 'BUTTON_4'
				},
				2: {
					'value2': 'SELECT'
				},
				3: {
					'value2': 'START'
				},
				4: {
					'value2': 'DPAD_UP'
				},
				5: {
					'value2': 'DPAD_DOWN'
				},
				6: {
					'value2': 'DPAD_LEFT'
				},
				7: {
					'value2': 'DPAD_RIGHT'
				},
				8: {
					'value2': 'BUTTON_1'
				},
				9: {
					'value2': 'BUTTON_3'
				},
				10: {
					'value2': 'LEFT_TOP_SHOULDER'
				},
				11: {
					'value2': 'RIGHT_TOP_SHOULDER'
				},
				12: {
					'value2': 'LEFT_BOTTOM_SHOULDER'
				},
				13: {
					'value2': 'RIGHT_BOTTOM_SHOULDER'
				},
				14: {
					'value2': 'LEFT_STICK'
				},
				15: {
					'value2': 'RIGHT_STICK'
				},
				16: {
					'value2': 'LEFT_STICK_X:+1'
				},
				17: {
					'value2': 'LEFT_STICK_X:-1'
				},
				18: {
					'value2': 'LEFT_STICK_Y:+1'
				},
				19: {
					'value2': 'LEFT_STICK_Y:-1'
				},
				20: {
					'value2': 'RIGHT_STICK_X:+1'
				},
				21: {
					'value2': 'RIGHT_STICK_X:-1'
				},
				22: {
					'value2': 'RIGHT_STICK_Y:+1'
				},
				23: {
					'value2': 'RIGHT_STICK_Y:-1'
				}
			},
			3: {
				0: {
					'value2': 'BUTTON_2'
				},
				1: {
					'value2': 'BUTTON_4'
				},
				2: {
					'value2': 'SELECT'
				},
				3: {
					'value2': 'START'
				},
				4: {
					'value2': 'DPAD_UP'
				},
				5: {
					'value2': 'DPAD_DOWN'
				},
				6: {
					'value2': 'DPAD_LEFT'
				},
				7: {
					'value2': 'DPAD_RIGHT'
				},
				8: {
					'value2': 'BUTTON_1'
				},
				9: {
					'value2': 'BUTTON_3'
				},
				10: {
					'value2': 'LEFT_TOP_SHOULDER'
				},
				11: {
					'value2': 'RIGHT_TOP_SHOULDER'
				},
				12: {
					'value2': 'LEFT_BOTTOM_SHOULDER'
				},
				13: {
					'value2': 'RIGHT_BOTTOM_SHOULDER'
				},
				14: {
					'value2': 'LEFT_STICK'
				},
				15: {
					'value2': 'RIGHT_STICK'
				},
				16: {
					'value2': 'LEFT_STICK_X:+1'
				},
				17: {
					'value2': 'LEFT_STICK_X:-1'
				},
				18: {
					'value2': 'LEFT_STICK_Y:+1'
				},
				19: {
					'value2': 'LEFT_STICK_Y:-1'
				},
				20: {
					'value2': 'RIGHT_STICK_X:+1'
				},
				21: {
					'value2': 'RIGHT_STICK_X:-1'
				},
				22: {
					'value2': 'RIGHT_STICK_Y:+1'
				},
				23: {
					'value2': 'RIGHT_STICK_Y:-1'
				}
			}
		}
		// 初始化模拟器
		window.EJS_emulator = new EmulatorJS(EJS_player, window);
		// 游戏状态
		window.EJS_emulator.on("start", () => {
			cocoMessage.success("启动游戏引擎！", 2000);
			//隐藏鼠标和工具栏
			const hhtml = document.getElementsByTagName("html")[0];
			const pl1 = document.getElementById("player1");
			const pl2 = document.getElementById("player2");
			const gname = document.getElementById("name");
			const titler = document.getElementsByClassName("titler")[0];
			const titlel = document.getElementsByClassName("titlel")[0];
			let timer = null;
			let isshow = false;
			document.onmousemove = () => {
				if (isshow) {
					isshow = false;
					hhtml.style.cursor = "default";
					pl2.style.right = "20px";
					pl1.style.left = "20px";
					gname.style.top = "20px";
					titler.style.left = "20px";
					titlel.style.right = "20px";
				} else {
					if (timer) {
						clearTimeout(timer);
					};
					timer = setTimeout(() => {
						isshow = true;
						hhtml.style.cursor = "none";
						pl2.style.right = "-200px";
						pl1.style.left = "-200px";
						gname.style.top = "-120px";
						titler.style.left = "-220px";
						titlel.style.right = "-220px";
					}, 3000)
				}
			}
			setgame = true;
			// 卸载提示
			window.onbeforeunload = (bfe) => {
				bfe.preventDefault();
				bfe.returnValue = "退出前，别忘记保存游戏进度哦！";
			}
		})
		cocoMessage.success("资源配置完成！", 2000);
		showload.style.display = 'none';
		// 移除遮罩
		document.body.classList.remove('is-loading');
	}
} else {
	urlerr();
}
// 设置按钮状态
if (navigator.share) {
	document.getElementById("share").style.display = "inline";
} else {
	console.log("分享功能禁用");
}
//获取设备类型
let isMobile = /(iPhone|iPod|Android|ios|iOS|iPad|WebOS|Symbian|Windows Phone|Phone)/i.test(navigator.userAgent);
//设置操作方式
const mobile = () => {
	const player1 = document.getElementById("player1");
	const player2 = document.getElementById("player2");
	if (isMobile) {
		player1.style.display = "none";
		player2.style.display = "none";
		isMobile = false;
	} else {
		player1.style.display = "block";
		player2.style.display = "block";
		isMobile = true;
	}
}
mobile();
// 分享
const share = () => {
	navigator.share({
		title: '在线玩《' + gameInfo.n + '》',
		url: url,
		text: '推荐使用电脑，运行更加流畅！在线免费畅玩或下载GBA经典游戏，让我们一同找回童年的快乐！玩红白机游戏，就认准GBA游戏盒！'
	});
}
// 下载rom按钮
const dowrom = () => {
	const dorom = confirm('您要下载此游戏的ROM文件吗？');
	if (dorom == true) {
		cocoMessage.warning("即将开始下载！", 2000);
		window.open("https://arcade-rom.heheda.top/" + gameInfo.i + ".zip");
	} else {
		cocoMessage.warning("您取消了下载！", 2000);
	}
}
// 截屏
const screenshot = () => {
	if (setgame) {
		const canvas = document.getElementsByClassName("ejs_canvas")[0];
		let data = canvas.toDataURL('image/png');
		let image = new Image();
		image.src = data;
		let w = window.open("", "_blank");
		w.document.write(image.outerHTML);
	} else {
		cocoMessage.warning("请先开始游戏！", 2000);
	}
}
//重置游戏配置
const chongzai = () => {
	window.location.reload();
}
//禁止双击缩放
window.addEventListener('dblclick', (e) => {
	e.preventDefault()
}, {
	passive: false
})