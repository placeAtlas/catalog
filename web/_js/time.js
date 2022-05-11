/*
	========================================================================
	The 2022 /r/place Atlas

	An atlas of Reddit's 2022 /r/place, with information to each
	artwork	of the canvas provided by the community.

	Copyright (c) 2017 Roland Rytz <roland@draemm.li>
	Copyright (c) 2022 Place Atlas contributors

	Licensed under the GNU Affero General Public License Version 3
	https://place-atlas.stefanocoding.me/license.txt
	========================================================================
*/

const entriesList = document.querySelector('#entriesList')

const variationsConfig = {
	default: {
		name: "r/place",
		code: "",
		default: 164,
		versions: [
			{ "timestamp": 1648818000, "url": ["./_img/canvas/place30ex/start.png"] },
			{ "timestamp": 1648819800, "url": ["./_img/canvas/place30/005.png", "./_img/canvas/place30/000_005.png"] },
			{ "timestamp": 1648821600, "url": ["./_img/canvas/place30/005.png", "./_img/canvas/place30/001_005.png"] },
			{ "timestamp": 1648823400, "url": ["./_img/canvas/place30/005.png", "./_img/canvas/place30/002_005.png"] },
			{ "timestamp": 1648825200, "url": ["./_img/canvas/place30/005.png", "./_img/canvas/place30/003_005.png"] },
			{ "timestamp": 1648827000, "url": ["./_img/canvas/place30/005.png", "./_img/canvas/place30/004_005.png"] },
			{ "timestamp": 1648828800, "url": "./_img/canvas/place30/005.png" },
			{ "timestamp": 1648830600, "url": ["./_img/canvas/place30/005.png", "./_img/canvas/place30/006_005.png"] },
			{ "timestamp": 1648832400, "url": ["./_img/canvas/place30/005.png", "./_img/canvas/place30/007_005.png"] },
			{ "timestamp": 1648834200, "url": ["./_img/canvas/place30/005.png", "./_img/canvas/place30/008_005.png"] },
			{ "timestamp": 1648836000, "url": ["./_img/canvas/place30/005.png", "./_img/canvas/place30/009_005.png"] },
			{ "timestamp": 1648837800, "url": ["./_img/canvas/place30/005.png", "./_img/canvas/place30/010_005.png"] },
			{ "timestamp": 1648839600, "url": ["./_img/canvas/place30/016.png", "./_img/canvas/place30/011_016.png"] },
			{ "timestamp": 1648841400, "url": ["./_img/canvas/place30/016.png", "./_img/canvas/place30/012_016.png"] },
			{ "timestamp": 1648843200, "url": ["./_img/canvas/place30/016.png", "./_img/canvas/place30/013_016.png"] },
			{ "timestamp": 1648845000, "url": ["./_img/canvas/place30/016.png", "./_img/canvas/place30/014_016.png"] },
			{ "timestamp": 1648846800, "url": ["./_img/canvas/place30/016.png", "./_img/canvas/place30/015_016.png"] },
			{ "timestamp": 1648848600, "url": "./_img/canvas/place30/016.png" },
			{ "timestamp": 1648850400, "url": ["./_img/canvas/place30/016.png", "./_img/canvas/place30/017_016.png"] },
			{ "timestamp": 1648852200, "url": ["./_img/canvas/place30/016.png", "./_img/canvas/place30/018_016.png"] },
			{ "timestamp": 1648854000, "url": ["./_img/canvas/place30/016.png", "./_img/canvas/place30/019_016.png"] },
			{ "timestamp": 1648855800, "url": ["./_img/canvas/place30/016.png", "./_img/canvas/place30/020_016.png"] },
			{ "timestamp": 1648857600, "url": ["./_img/canvas/place30/016.png", "./_img/canvas/place30/021_016.png"] },
			{ "timestamp": 1648859400, "url": ["./_img/canvas/place30/027.png", "./_img/canvas/place30/022_027.png"] },
			{ "timestamp": 1648861200, "url": ["./_img/canvas/place30/027.png", "./_img/canvas/place30/023_027.png"] },
			{ "timestamp": 1648863000, "url": ["./_img/canvas/place30/027.png", "./_img/canvas/place30/024_027.png"] },
			{ "timestamp": 1648864800, "url": ["./_img/canvas/place30/027.png", "./_img/canvas/place30/025_027.png"] },
			{ "timestamp": 1648866600, "url": ["./_img/canvas/place30/027.png", "./_img/canvas/place30/026_027.png"] },
			{ "timestamp": 1648868400, "url": "./_img/canvas/place30/027.png" },
			{ "timestamp": 1648870200, "url": ["./_img/canvas/place30/027.png", "./_img/canvas/place30/028_027.png"] },
			{ "timestamp": 1648872000, "url": ["./_img/canvas/place30/027.png", "./_img/canvas/place30/029_027.png"] },
			{ "timestamp": 1648873800, "url": ["./_img/canvas/place30/027.png", "./_img/canvas/place30/030_027.png"] },
			{ "timestamp": 1648875600, "url": ["./_img/canvas/place30/027.png", "./_img/canvas/place30/031_027.png"] },
			{ "timestamp": 1648877400, "url": ["./_img/canvas/place30/027.png", "./_img/canvas/place30/032_027.png"] },
			{ "timestamp": 1648879200, "url": ["./_img/canvas/place30/038.png", "./_img/canvas/place30/033_038.png"] },
			{ "timestamp": 1648881000, "url": ["./_img/canvas/place30/038.png", "./_img/canvas/place30/034_038.png"] },
			{ "timestamp": 1648882800, "url": ["./_img/canvas/place30/038.png", "./_img/canvas/place30/035_038.png"] },
			{ "timestamp": 1648884600, "url": ["./_img/canvas/place30/038.png", "./_img/canvas/place30/036_038.png"] },
			{ "timestamp": 1648886400, "url": ["./_img/canvas/place30/038.png", "./_img/canvas/place30/037_038.png"] },
			{ "timestamp": 1648888200, "url": "./_img/canvas/place30/038.png" },
			{ "timestamp": 1648890000, "url": ["./_img/canvas/place30/038.png", "./_img/canvas/place30/039_038.png"] },
			{ "timestamp": 1648891800, "url": ["./_img/canvas/place30/038.png", "./_img/canvas/place30/040_038.png"] },
			{ "timestamp": 1648893600, "url": ["./_img/canvas/place30/038.png", "./_img/canvas/place30/041_038.png"] },
			{ "timestamp": 1648895400, "url": ["./_img/canvas/place30/038.png", "./_img/canvas/place30/042_038.png"] },
			{ "timestamp": 1648897200, "url": ["./_img/canvas/place30/038.png", "./_img/canvas/place30/043_038.png"] },
			{ "timestamp": 1648899000, "url": ["./_img/canvas/place30/049.png", "./_img/canvas/place30/044_049.png"] },
			{ "timestamp": 1648900800, "url": ["./_img/canvas/place30/049.png", "./_img/canvas/place30/045_049.png"] },
			{ "timestamp": 1648902600, "url": ["./_img/canvas/place30/049.png", "./_img/canvas/place30/046_049.png"] },
			{ "timestamp": 1648904400, "url": ["./_img/canvas/place30/049.png", "./_img/canvas/place30/047_049.png"] },
			{ "timestamp": 1648906200, "url": ["./_img/canvas/place30/049.png", "./_img/canvas/place30/048_049.png"] },
			{ "timestamp": 1648908000, "url": "./_img/canvas/place30/049.png" },
			{ "timestamp": 1648909800, "url": ["./_img/canvas/place30/049.png", "./_img/canvas/place30/050_049.png"] },
			{ "timestamp": 1648911600, "url": ["./_img/canvas/place30/049.png", "./_img/canvas/place30/051_049.png"] },
			{ "timestamp": 1648913400, "url": ["./_img/canvas/place30/049.png", "./_img/canvas/place30/052_049.png"] },
			{ "timestamp": 1648915200, "url": ["./_img/canvas/place30/049.png", "./_img/canvas/place30/053_049.png"] },
			{ "timestamp": 1648917000, "url": ["./_img/canvas/place30/049.png", "./_img/canvas/place30/054_049.png"] },
			{ "timestamp": 1648918800, "url": ["./_img/canvas/place30/060.png", "./_img/canvas/place30/055_060.png"] },
			{ "timestamp": 1648920600, "url": ["./_img/canvas/place30/060.png", "./_img/canvas/place30/056_060.png"] },
			{ "timestamp": 1648922400, "url": ["./_img/canvas/place30/060.png", "./_img/canvas/place30/057_060.png"] },
			{ "timestamp": 1648924200, "url": ["./_img/canvas/place30/060.png", "./_img/canvas/place30/058_060.png"] },
			{ "timestamp": 1648926000, "url": ["./_img/canvas/place30/060.png", "./_img/canvas/place30/059_060.png"] },
			{ "timestamp": 1648927800, "url": "./_img/canvas/place30/060.png" },
			{ "timestamp": 1648929600, "url": ["./_img/canvas/place30/060.png", "./_img/canvas/place30/061_060.png"] },
			{ "timestamp": 1648931400, "url": ["./_img/canvas/place30/060.png", "./_img/canvas/place30/062_060.png"] },
			{ "timestamp": 1648933200, "url": ["./_img/canvas/place30/060.png", "./_img/canvas/place30/063_060.png"] },
			{ "timestamp": 1648935000, "url": ["./_img/canvas/place30/060.png", "./_img/canvas/place30/064_060.png"] },
			{ "timestamp": 1648936800, "url": ["./_img/canvas/place30/060.png", "./_img/canvas/place30/065_060.png"] },
			{ "timestamp": 1648938600, "url": ["./_img/canvas/place30/071.png", "./_img/canvas/place30/066_071.png"] },
			{ "timestamp": 1648940400, "url": ["./_img/canvas/place30/071.png", "./_img/canvas/place30/067_071.png"] },
			{ "timestamp": 1648942200, "url": ["./_img/canvas/place30/071.png", "./_img/canvas/place30/068_071.png"] },
			{ "timestamp": 1648944000, "url": ["./_img/canvas/place30/071.png", "./_img/canvas/place30/069_071.png"] },
			{ "timestamp": 1648945800, "url": ["./_img/canvas/place30/071.png", "./_img/canvas/place30/070_071.png"] },
			{ "timestamp": 1648947600, "url": "./_img/canvas/place30/071.png" },
			{ "timestamp": 1648949400, "url": ["./_img/canvas/place30/071.png", "./_img/canvas/place30/072_071.png"] },
			{ "timestamp": 1648951200, "url": ["./_img/canvas/place30/071.png", "./_img/canvas/place30/073_071.png"] },
			{ "timestamp": 1648953000, "url": ["./_img/canvas/place30/071.png", "./_img/canvas/place30/074_071.png"] },
			{ "timestamp": 1648954800, "url": ["./_img/canvas/place30/071.png", "./_img/canvas/place30/075_071.png"] },
			{ "timestamp": 1648956600, "url": ["./_img/canvas/place30/071.png", "./_img/canvas/place30/076_071.png"] },
			{ "timestamp": 1648958400, "url": ["./_img/canvas/place30/082.png", "./_img/canvas/place30/077_082.png"] },
			{ "timestamp": 1648960200, "url": ["./_img/canvas/place30/082.png", "./_img/canvas/place30/078_082.png"] },
			{ "timestamp": 1648962000, "url": ["./_img/canvas/place30/082.png", "./_img/canvas/place30/079_082.png"] },
			{ "timestamp": 1648963800, "url": ["./_img/canvas/place30/082.png", "./_img/canvas/place30/080_082.png"] },
			{ "timestamp": 1648965600, "url": ["./_img/canvas/place30/082.png", "./_img/canvas/place30/081_082.png"] },
			{ "timestamp": 1648967400, "url": "./_img/canvas/place30/082.png" },
			{ "timestamp": 1648969200, "url": ["./_img/canvas/place30/082.png", "./_img/canvas/place30/083_082.png"] },
			{ "timestamp": 1648971000, "url": ["./_img/canvas/place30/082.png", "./_img/canvas/place30/084_082.png"] },
			{ "timestamp": 1648972800, "url": ["./_img/canvas/place30/082.png", "./_img/canvas/place30/085_082.png"] },
			{ "timestamp": 1648974600, "url": ["./_img/canvas/place30/082.png", "./_img/canvas/place30/086_082.png"] },
			{ "timestamp": 1648976400, "url": ["./_img/canvas/place30/082.png", "./_img/canvas/place30/087_082.png"] },
			{ "timestamp": 1648978200, "url": ["./_img/canvas/place30/093.png", "./_img/canvas/place30/088_093.png"] },
			{ "timestamp": 1648980000, "url": ["./_img/canvas/place30/093.png", "./_img/canvas/place30/089_093.png"] },
			{ "timestamp": 1648981800, "url": ["./_img/canvas/place30/093.png", "./_img/canvas/place30/090_093.png"] },
			{ "timestamp": 1648983600, "url": ["./_img/canvas/place30/093.png", "./_img/canvas/place30/091_093.png"] },
			{ "timestamp": 1648985400, "url": ["./_img/canvas/place30/093.png", "./_img/canvas/place30/092_093.png"] },
			{ "timestamp": 1648987200, "url": "./_img/canvas/place30/093.png" },
			{ "timestamp": 1648989000, "url": ["./_img/canvas/place30/093.png", "./_img/canvas/place30/094_093.png"] },
			{ "timestamp": 1648990800, "url": ["./_img/canvas/place30/093.png", "./_img/canvas/place30/095_093.png"] },
			{ "timestamp": 1648992600, "url": ["./_img/canvas/place30/093.png", "./_img/canvas/place30/096_093.png"] },
			{ "timestamp": 1648994400, "url": ["./_img/canvas/place30/093.png", "./_img/canvas/place30/097_093.png"] },
			{ "timestamp": 1648996200, "url": ["./_img/canvas/place30/093.png", "./_img/canvas/place30/098_093.png"] },
			{ "timestamp": 1648998000, "url": ["./_img/canvas/place30/104.png", "./_img/canvas/place30/099_104.png"] },
			{ "timestamp": 1648999800, "url": ["./_img/canvas/place30/104.png", "./_img/canvas/place30/100_104.png"] },
			{ "timestamp": 1649001600, "url": ["./_img/canvas/place30/104.png", "./_img/canvas/place30/101_104.png"] },
			{ "timestamp": 1649003400, "url": ["./_img/canvas/place30/104.png", "./_img/canvas/place30/102_104.png"] },
			{ "timestamp": 1649005200, "url": ["./_img/canvas/place30/104.png", "./_img/canvas/place30/103_104.png"] },
			{ "timestamp": 1649007000, "url": "./_img/canvas/place30/104.png" },
			{ "timestamp": 1649008800, "url": ["./_img/canvas/place30/104.png", "./_img/canvas/place30/105_104.png"] },
			{ "timestamp": 1649010600, "url": ["./_img/canvas/place30/104.png", "./_img/canvas/place30/106_104.png"] },
			{ "timestamp": 1649012400, "url": ["./_img/canvas/place30/104.png", "./_img/canvas/place30/107_104.png"] },
			{ "timestamp": 1649014200, "url": ["./_img/canvas/place30/104.png", "./_img/canvas/place30/108_104.png"] },
			{ "timestamp": 1649016000, "url": ["./_img/canvas/place30/104.png", "./_img/canvas/place30/109_104.png"] },
			{ "timestamp": 1649017800, "url": ["./_img/canvas/place30/115.png", "./_img/canvas/place30/110_115.png"] },
			{ "timestamp": 1649019600, "url": ["./_img/canvas/place30/115.png", "./_img/canvas/place30/111_115.png"] },
			{ "timestamp": 1649021400, "url": ["./_img/canvas/place30/115.png", "./_img/canvas/place30/112_115.png"] },
			{ "timestamp": 1649023200, "url": ["./_img/canvas/place30/115.png", "./_img/canvas/place30/113_115.png"] },
			{ "timestamp": 1649025000, "url": ["./_img/canvas/place30/115.png", "./_img/canvas/place30/114_115.png"] },
			{ "timestamp": 1649026800, "url": "./_img/canvas/place30/115.png" },
			{ "timestamp": 1649028600, "url": ["./_img/canvas/place30/115.png", "./_img/canvas/place30/116_115.png"] },
			{ "timestamp": 1649030400, "url": ["./_img/canvas/place30/115.png", "./_img/canvas/place30/117_115.png"] },
			{ "timestamp": 1649032200, "url": ["./_img/canvas/place30/115.png", "./_img/canvas/place30/118_115.png"] },
			{ "timestamp": 1649034000, "url": ["./_img/canvas/place30/115.png", "./_img/canvas/place30/119_115.png"] },
			{ "timestamp": 1649035800, "url": ["./_img/canvas/place30/115.png", "./_img/canvas/place30/120_115.png"] },
			{ "timestamp": 1649037600, "url": ["./_img/canvas/place30/126.png", "./_img/canvas/place30/121_126.png"] },
			{ "timestamp": 1649039400, "url": ["./_img/canvas/place30/126.png", "./_img/canvas/place30/122_126.png"] },
			{ "timestamp": 1649041200, "url": ["./_img/canvas/place30/126.png", "./_img/canvas/place30/123_126.png"] },
			{ "timestamp": 1649043000, "url": ["./_img/canvas/place30/126.png", "./_img/canvas/place30/124_126.png"] },
			{ "timestamp": 1649044800, "url": ["./_img/canvas/place30/126.png", "./_img/canvas/place30/125_126.png"] },
			{ "timestamp": 1649046600, "url": "./_img/canvas/place30/126.png" },
			{ "timestamp": 1649048400, "url": ["./_img/canvas/place30/126.png", "./_img/canvas/place30/127_126.png"] },
			{ "timestamp": 1649050200, "url": ["./_img/canvas/place30/126.png", "./_img/canvas/place30/128_126.png"] },
			{ "timestamp": 1649052000, "url": ["./_img/canvas/place30/126.png", "./_img/canvas/place30/129_126.png"] },
			{ "timestamp": 1649053800, "url": ["./_img/canvas/place30/126.png", "./_img/canvas/place30/130_126.png"] },
			{ "timestamp": 1649055600, "url": ["./_img/canvas/place30/126.png", "./_img/canvas/place30/131_126.png"] },
			{ "timestamp": 1649057400, "url": ["./_img/canvas/place30/137.png", "./_img/canvas/place30/132_137.png"] },
			{ "timestamp": 1649059200, "url": ["./_img/canvas/place30/137.png", "./_img/canvas/place30/133_137.png"] },
			{ "timestamp": 1649061000, "url": ["./_img/canvas/place30/137.png", "./_img/canvas/place30/134_137.png"] },
			{ "timestamp": 1649062800, "url": ["./_img/canvas/place30/137.png", "./_img/canvas/place30/135_137.png"] },
			{ "timestamp": 1649064600, "url": ["./_img/canvas/place30/137.png", "./_img/canvas/place30/136_137.png"] },
			{ "timestamp": 1649066400, "url": "./_img/canvas/place30/137.png" },
			{ "timestamp": 1649068200, "url": ["./_img/canvas/place30/137.png", "./_img/canvas/place30/138_137.png"] },
			{ "timestamp": 1649070000, "url": ["./_img/canvas/place30/137.png", "./_img/canvas/place30/139_137.png"] },
			{ "timestamp": 1649071800, "url": ["./_img/canvas/place30/137.png", "./_img/canvas/place30/140_137.png"] },
			{ "timestamp": 1649073600, "url": ["./_img/canvas/place30/137.png", "./_img/canvas/place30/141_137.png"] },
			{ "timestamp": 1649075400, "url": ["./_img/canvas/place30/137.png", "./_img/canvas/place30/142_137.png"] },
			{ "timestamp": 1649077200, "url": ["./_img/canvas/place30/148.png", "./_img/canvas/place30/143_148.png"] },
			{ "timestamp": 1649079000, "url": ["./_img/canvas/place30/148.png", "./_img/canvas/place30/144_148.png"] },
			{ "timestamp": 1649080800, "url": ["./_img/canvas/place30/148.png", "./_img/canvas/place30/145_148.png"] },
			{ "timestamp": 1649082600, "url": ["./_img/canvas/place30/148.png", "./_img/canvas/place30/146_148.png"] },
			{ "timestamp": 1649084400, "url": ["./_img/canvas/place30/148.png", "./_img/canvas/place30/147_148.png"] },
			{ "timestamp": 1649086200, "url": "./_img/canvas/place30/148.png" },
			{ "timestamp": 1649088000, "url": ["./_img/canvas/place30/148.png", "./_img/canvas/place30/149_148.png"] },
			{ "timestamp": 1649089800, "url": ["./_img/canvas/place30/148.png", "./_img/canvas/place30/150_148.png"] },
			{ "timestamp": 1649091600, "url": ["./_img/canvas/place30/148.png", "./_img/canvas/place30/151_148.png"] },
			{ "timestamp": 1649093400, "url": ["./_img/canvas/place30/148.png", "./_img/canvas/place30/152_148.png"] },
			{ "timestamp": 1649095200, "url": ["./_img/canvas/place30/148.png", "./_img/canvas/place30/153_148.png"] },
			{ "timestamp": 1649097000, "url": ["./_img/canvas/place30/159.png", "./_img/canvas/place30/154_159.png"] },
			{ "timestamp": 1649098800, "url": ["./_img/canvas/place30/159.png", "./_img/canvas/place30/155_159.png"] },
			{ "timestamp": 1649100600, "url": ["./_img/canvas/place30/159.png", "./_img/canvas/place30/156_159.png"] },
			{ "timestamp": 1649102400, "url": ["./_img/canvas/place30/159.png", "./_img/canvas/place30/157_159.png"] },
			{ "timestamp": 1649104200, "url": ["./_img/canvas/place30/159.png", "./_img/canvas/place30/158_159.png"] },
			{ "timestamp": 1649106000, "url": "./_img/canvas/place30/159.png" },
			{ "timestamp": 1649107800, "url": ["./_img/canvas/place30/159.png", "./_img/canvas/place30/160_159.png"] },
			{ "timestamp": 1649109600, "url": ["./_img/canvas/place30/159.png", "./_img/canvas/place30/161_159.png"] },
			{ "timestamp": 1649111400, "url": ["./_img/canvas/place30/159.png", "./_img/canvas/place30/162_159.png"] },
			{ "timestamp": 1649112460, "url": ["./_img/canvas/place30ex/final.png"] },
			{ "timestamp": 1649113200, "url": ["./_img/canvas/place30/159.png", "./_img/canvas/place30/163_159.png"] },
			{ "timestamp": 1649115000, "url": ["./_img/canvas/place30/159.png", "./_img/canvas/place30/164_159.png"] },
			{ "timestamp": 1649116800, "url": ["./_img/canvas/place30/159.png", "./_img/canvas/place30/165_159.png"] },
			{ "timestamp": 1649116967, "url": ["./_img/canvas/place30ex/end.png"] }
		],
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 192 192" aria-hidden="true"><polygon points="154 0 154 38 39 38 39 192 0 192 0 0"/><polygon points="192 38 192 192 77 192 77 153 154 153 154 38"/><rect x="77" y="77" width="38" height="38"/></svg>',
		info: {
			description: "The original r/place canvas in 30-minute increments.",
			links: {
				subreddit: ["place"]
			}
		}
	},
	"#1": {
		name: "The Final Clean"
	},
	tfc: {
		name: "The Final Clean",
		code: "T",
		default: 2,
		versions: [
			{
				timestamp: "Draft 1",
				url: "./_img/canvas/tfc/draft1.png",
			},
			{
				timestamp: "Draft 2",
				url: "./_img/canvas/tfc/draft2.png",
			},
			{
				timestamp: "Final",
				url: "./_img/canvas/tfc/final.png",
			},
			{
				timestamp: "Final (w/ Overlays)",
				url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc/overlay/CHESS.png", "./_img/canvas/tfc/overlay/GAMESTOP.png", "./_img/canvas/tfc/overlay/PROFANITY.png"],
			}
		],
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 192 192"><defs><style>.a{fill-rule:evenodd;}</style></defs><path class="a" d="M69.79,83.55c-.47,.65-.59,1.35-.59,1.35-.26,1.47,.76,2.72,.92,3.12,2.84,7.1,4.49,13.93,3.97,16.39-.47,2.18-5.6,5.65-12.36,8.33-3.63,1.44-6.11,2.99-8.04,5.01-7.17,7.51-10.24,17.86-7.14,24.05,3.93,7.84,18.38,5.86,28.05-3.85,2.09-2.1,3.15-3.83,6.63-10.77,2.97-5.93,4.26-8.05,5.47-8.95,2.04-1.52,9.82,.1,17.41,3.64,1.71,.8,2.31,1.04,2.78,.98,0,0,.22-.05,.43-.14,1.31-.59,17.43-17,25.58-25.34-1.79,.09-3.57,.18-5.36,.28-2.84,2.63-5.68,5.27-8.52,7.9-10.85-10.85-21.7-21.71-32.55-32.56,1.73-1.8,3.46-3.6,5.18-5.4-.29-1.56-.57-3.12-.86-4.69-1.34,1.27-19.42,18.45-21.01,20.66Zm-10.45,44.57c2.5,0,4.53,2.03,4.53,4.53s-2.03,4.53-4.53,4.53-4.53-2.03-4.53-4.53,2.03-4.53,4.53-4.53Z"/><path class="f" d="M132.9,97.36c-.88,.22-7.88,1.92-9.91-1.04-1.11-1.62-1.05-4.71-.52-6.57,.74-2.59,.9-4.06,.25-4.73-.73-.76-2.03-.31-3.73-.18-3.4,.27-8.08-.86-9.6-3.16-2.77-4.21,4.48-13.03,2.31-14.69-.17-.13-.34-.16-.67-.22-4.24-.73-6.79,4.71-11.66,5.1-2.93,.24-6.21-1.39-7.72-4.02-1.11-1.94-1-3.96-.86-4.95h0s7.38-7.39,17.6-17.52c12.75,12.73,25.51,25.47,38.26,38.2l-13.75,13.79Z"/><polygon points="154 0 154 38 39 38 39 192 0 192 0 0"/><polygon points="192 38 192 192 77 192 77 153 154 153 154 38"/></svg>',
		info: {
			description: "Established since the 2017 event, The Final Clean is a collaborative cleanup effort for the final canvas of r/place.",
			links: {
				subreddit: ["TheFinalClean"],
				discord: ["yttybMtH8N"],
				website: ["https://www.reddit.com/r/place/comments/u27cth/communitycleaned_and_repaired_version_of_the/"]
			}
		}
	},
	"tfc-sl": {
		name: "Streamerless",
		code: "NS",
		default: 40,
		versions: [
			{ timestamp: 1649953207, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1649953207923.png"] },
			{ timestamp: 1650037801, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650037801565.png"] },
			{ timestamp: 1650068651, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650068651026.png"] },
			{ timestamp: 1650070350, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650070350104.png"] },
			{ timestamp: 1650076518, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650076518825.png"] },
			{ timestamp: 1650094287, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650094287109.png"] },
			{ timestamp: 1650170801, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650170801601.png"] },
			{ timestamp: 1650173976, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650173976749.png"] },
			{ timestamp: 1650181215, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650181215760.png"] },
			{ timestamp: 1650225370, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650225370813.png"] },
			{ timestamp: 1650231530, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650231530514.png"] },
			{ timestamp: 1650241224, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650241224723.png"] },
			{ timestamp: 1650244993, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650244993631.png"] },
			{ timestamp: 1650251540, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650251540555.png"] },
			{ timestamp: 1650298813, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650298813858.png"] },
			{ timestamp: 1650325182, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650325182895.png"] },
			{ timestamp: 1650338954, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650338954019.png"] },
			{ timestamp: 1650340682, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650340682893.png"] },
			{ timestamp: 1650347756, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650347756724.png"] },
			{ timestamp: 1650348063, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650348063921.png"] },
			{ timestamp: 1650390333, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650390333263.png"] },
			{ timestamp: 1650482702, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650482702832.png"] },
			{ timestamp: 1650523344, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650523344755.png"] },
			{ timestamp: 1650656395, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650656395980.png"] },
			{ timestamp: 1650737631, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650737631184.png"] },
			{ timestamp: 1650739338, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650739338735.png"] },
			{ timestamp: 1650741587, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650741587007.png"] },
			{ timestamp: 1650756543, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650756543586.png"] },
			// WIP OVERLAYS THREAD
			{ timestamp: 1650758783, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650758783360.png"] },
			{ timestamp: 1650839651, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650839651521.png"] },
			{ timestamp: 1650850860, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650850860680.png"] },
			{ timestamp: 1651044809, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1651044809379.png"] },
			{ timestamp: 1651335749, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1651335749070.png"] },
			{ timestamp: 1651352117, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1651352117027.png"] },
			{ timestamp: 1651353068, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1651353068110.png"] },
			{ timestamp: 1651361099, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1651361099763.png"] },
			{ timestamp: 1651524866, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1651524866522.png"] },
			{ timestamp: 1651525552, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1651525552287.png"] },
			{ timestamp: 1651625582, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1651625582430.png"] },
			{ timestamp: 1651889221, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1651889221094.png"] },
			{ timestamp: 1651893176, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1651893176863.png"] },
		],
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 192 192"><path d="M-.07,0V192H191.93V38h-38V117.2l-28.5,28.8h-29.6l-24.89,25.2v-25.2H38.93V38h115V0H-.07Z"/><path d="M72.56,73.7l-7.64,7.64,7.87,7.87-7.87,7.87,7.64,7.64,7.87-7.87,7.87,7.87,7.63-7.64-7.87-7.87,7.87-7.87-7.63-7.64-7.87,7.87-7.87-7.87Z"/><path d="M137.39,73.7l-7.87,7.87-7.87-7.87-7.63,7.63,7.87,7.87-7.87,7.87,7.64,7.64,7.87-7.87,7.87,7.87,7.64-7.64-7.87-7.87,7.87-7.87-7.64-7.64Z"/></svg>',
		info: {
			description: "The Streamerless sub-project \"aims to remove anything streamer-made that covered community art.\" This development is still ongoing.",
			links: {
				subreddit: ["TheFinalClean"],
				discord: ["yttybMtH8N"]
			}
		}
	},
	"tfc-uc": {
		name: "Unofficial Corrections",
		code: "NS",
		default: 6,
		versions: [
			{ timestamp: "Draft 1", url: "./_img/canvas/tfc-uc/1649971703561_TFC_PXcorrections.png" },
			{ timestamp: "Draft 2", url: "./_img/canvas/tfc-uc/1651105992815_unknown.png" },
			{ timestamp: "Draft 3", url: "./_img/canvas/tfc-uc/1651715467538_TFC_PXcorrections_Draft3.png" },
			{ timestamp: "Draft 4", url: "./_img/canvas/tfc-uc/1651804759807_TFC_PXcorrections_Draft4.png" },
			{ timestamp: 1652050001, url: "./_img/canvas/tfc-uc/1652050001062_final_0.png" },
			{ timestamp: 1652140583, url: "./_img/canvas/tfc-uc/1652140583877_final_1.png" },
			{ timestamp: "Final", url: "./_img/canvas/tfc-uc/1652141667878_final_2.png" },
		],
		info: {
			description: "Unofficial Corrections is a post-TFC project that made \"corrections based on existing submissions that went awry, or corrections to corrections that went awry.\"",
			links: {
				subreddit: ["TheFinalClean"],
				discord: ["yttybMtH8N"]
			}
		}
	},
	"#2": {
		name: "Redditor Cuts"
	},
	"cut-scaevolus": {
		name: "Last Averages (u/scaevolus)",
		code: "R1",
		default: 0,
		versions: [
			{ timestamp: "Last Hour Average", url: "./_img/canvas/redditor-cuts/hour-average-scaevolus.png"},
			{ timestamp: "Last 5-Minute Average", url: "./_img/canvas/redditor-cuts/5-min-average-scaevolus.png"}
		],
		info: {
			links: {
				website: [
					"https://www.reddit.com/r/place/comments/tx3w5f/rplace_denoised_final_image_8k/",
					"https://www.reddit.com/r/place/comments/tx3w5f/comment/i3kpvnf/?context=3"
				]
			}
		}
	},
	"cut-davidxga": {
		name: "Last Hour Median (u/DavidXGA)",
		code: "R2",
		default: 0,
		versions: [
			{ timestamp: "", url: "./_img/canvas/redditor-cuts/hour-median-davidxga.png"}
		],
		info: {
			links: {
				website: ["https://www.reddit.com/r/place/comments/tx7q9z/i_took_the_median_value_of_every_pixel_in_the/"]
			}
		}
	},
	"cut-dankrudesandstorm": {
		name: "u/DankRudeSandstorm Cut",
		code: "R3",
		default: 0,
		versions: [
			{ timestamp: "", url: "./_img/canvas/redditor-cuts/dankrudesandstorm-cut.png"}
		],
		info: {
			links: {
				website: ["https://www.reddit.com/r/place/comments/tzigrs/i_removed_stray_pixels_restored_the_artwork_of/"]
			}
		}
	},
	"cut-tiktaalik414": {
		name: "u/Tiktaalik414 Cut",
		code: "R4",
		default: 0,
		versions: [
			{ timestamp: "", url: "./_img/canvas/redditor-cuts/tiktaalik414-cut.png"}
		],
		info: {
			links: {
				website: ["https://www.reddit.com/r/place/comments/u35sth/after_around_40_hours_editing_i_finally_present/"]
			}
		}
	},
	"cut-poisonsnow": {
		name: "u/PoisonSnow Cut",
		code: "R5",
		default: 0,
		versions: [
			{ timestamp: "", url: "./_img/canvas/redditor-cuts/poisonsnow-cut.png"}
		],
		info: {
			links: {
				website: ["https://www.reddit.com/r/thefinalclean/comments/twlyly/i_made_a_16000_x_16000_version_of_rplace_that/"]
			}
		}
	},
	"#3": {
		name: "Visualizations"
	},
	"viz-alpaca_fur": {
		name: "Whole Average (u/alpaca_fur)",
		code: "V1",
		default: 0,
		versions: [
			{ timestamp: "", url: "./_img/canvas/visualizations/whole-average-alpaca_fur.png"}
		],
		info: {
			links: {
				website: ["https://www.reddit.com/r/place/comments/tx14va/i_made_an_image_of_the_average_pixel_color_of/"]
			}
		}
	},
	"viz-rwbaker16": {
		name: "Whole Average (u/Rwbaker16)",
		code: "V2",
		default: 0,
		versions: [
			{ timestamp: "", url: "./_img/canvas/visualizations/whole-average-rwbaker16.png"}
		],
		info: {
			links: {
				website: ["https://www.reddit.com/r/dataisbeautiful/comments/ty86cw/average_color_of_each_pixel_in_rplace_oc/"]
			}
		}
	},
	"viz-danielgriffin13": {
		name: "Pixels by Bots (u/danielgriffin13)",
		code: "V3",
		default: 0,
		versions: [
			{ timestamp: "", url: "./_img/canvas/visualizations/bots-danielgriffin13.png"}
		],
		info: {
			links: {
				website: ["https://www.reddit.com/r/dataisbeautiful/comments/u1btsb/oc_the_impact_of_bots_on_rplace_users_that_posted/"]
			}
		}
	},
	"viz-officer-zhang": {
		name: "Cooldown-Bypassed Pixels (u/officer-zhang)",
		code: "V4",
		default: 0,
		versions: [
			{ timestamp: "", url: "./_img/canvas/visualizations/bypass-officer-zhang.jpg"}
		],
		info: {
			links: {
				website: ["https://www.reddit.com/r/dataisbeautiful/comments/tylnkn/i_found_rplace_cheaters_that_skirted_the_5_min/"]
			}
		}
	},
	"viz-eyusd": {
		name: "Heatmap (u/Eyusd)",
		code: "V5",
		default: 0,
		versions: [
			{ timestamp: "", url: "./_img/canvas/visualizations/heatmap-eyusd.png"}
		],
		info: {
			links: {
				website: ["https://www.reddit.com/r/dataisbeautiful/comments/twulb1/oc_heatmap_of_rplace_start_to_end/"]
			}
		}
	},
	"viz-lornedon": {
		name: "Pixels by Age (u/Lornedon)",
		code: "V6",
		default: 0,
		versions: [
			{ timestamp: "", url: "./_img/canvas/visualizations/age-lornedon.png"}
		],
		info: {
			links: {
				website: ["https://www.reddit.com/r/dataisbeautiful/comments/tzi1j0/oc_the_age_of_each_pixel_on_the_final_canvas_of/"]
			}
		}
	}
	
}

const codeReference = {}
const imageCache = {}

const variantsEl = document.getElementById("variants")

for (const variation in variationsConfig) {
	const optionEl = document.createElement('option')
	variantsEl.appendChild(optionEl)
	optionEl.textContent = variationsConfig[variation].name
	if (variation.startsWith('#')) {
		optionEl.disabled = true
		optionEl.classList.add('fw-bold', 'fst-italic')
		continue 
	}
	codeReference[variationsConfig[variation].code] = variation
	optionEl.value = variation
}

const timelineSlider = document.getElementById("timeControlsSlider")
const timelineList = document.getElementById("timeControlsList")
const tooltip = document.getElementById("timeControlsTooltip")
const image = document.getElementById("image")
let abortController = new AbortController()
let currentUpdateIndex = 0
let updateTimeout = setTimeout(null, 0)
let tooltipDelayHide = setTimeout(null, 0)

let currentVariation = "default"
const defaultPeriod = variationsConfig[currentVariation].default
const defaultVariation = currentVariation
let currentPeriod = defaultPeriod
window.currentPeriod = currentPeriod
window.currentVariation = currentVariation
buildObjectsList(variationsConfig[currentVariation], currentVariation)

// SETUP
timelineSlider.max = variationsConfig[currentVariation].versions.length - 1
timelineSlider.value = currentPeriod
timelineList.children[0].value = defaultPeriod

timelineSlider.addEventListener("input", (event) => {
	updateTooltip(parseInt(event.target.value), currentVariation)
	clearTimeout(updateTimeout)
	updateTimeout = setTimeout(() => {
		updateTime(parseInt(timelineSlider.value), currentVariation)
		setTimeout(() => {
			if (timelineSlider.value != currentPeriod && abortController.signal.aborted) {
				updateTime(parseInt(timelineSlider.value), currentVariation)
			}
		}, 50)
	}, 25)
})

variantsEl.addEventListener("input", (event) => {
	updateTime(-1, event.target.value)
})

const dispatchTimeUpdateEvent = (period = timelineSlider.value) => {
	const timeUpdateEvent = new CustomEvent('timeupdate', {
		detail: {
			period: period
		}
	})
	document.dispatchEvent(timeUpdateEvent)
}

async function updateBackground(newPeriod = currentPeriod, newVariation = currentVariation) {
	abortController.abort()
	abortController = new AbortController()
	currentUpdateIndex++
	const myUpdateIndex = currentUpdateIndex
	const variationConfig = variationsConfig[newVariation]

	variantsEl.value = currentVariation
	if (variationConfig.icon) {
		variantsEl.previousElementSibling.innerHTML = variationConfig.icon
		variantsEl.previousElementSibling.classList.remove('d-none')
		variantsEl.parentElement.classList.add('input-group')
	} else {
		variantsEl.previousElementSibling.innerHTML = ""
		variantsEl.previousElementSibling.classList.add('d-none')
		variantsEl.parentElement.classList.remove('input-group')
	}


	const configObject = variationConfig.versions[currentPeriod]
	if (typeof configObject.url === "string") {
		if (imageCache[configObject.url] === undefined) {
			const fetchResult = await fetch(configObject.url, {
				signal: abortController.signal
			})
			if (currentUpdateIndex !== myUpdateIndex) {
				return [configObject, newPeriod, newVariation]
			}
			const imageBlob = await fetchResult.blob()
			imageCache[configObject.url] = URL.createObjectURL(imageBlob)
		}
		image.src = imageCache[configObject.url]
	} else {
		const canvas = document.createElement('canvas')
		const context = canvas.getContext('2d')
		context.canvas.width = 2000
		context.canvas.height = 2000
		await Promise.all(configObject.url.map(async url => {
			if (imageCache[url] === undefined) {
				const fetchResult = await fetch(url, {
					signal: abortController.signal
				})
				if (currentUpdateIndex !== myUpdateIndex) {
					return
				}
				const imageBlob = await fetchResult.blob()
				imageCache[url] = URL.createObjectURL(imageBlob)
			}
		}))
		for await (const url of configObject.url) {
			const imageLayer = new Image()
			await new Promise(resolve => {
				imageLayer.onload = () => {
					context.drawImage(imageLayer, 0, 0)
					resolve()
				}
				imageLayer.src = imageCache[url]
			})
		}

		if (currentUpdateIndex !== myUpdateIndex) return [configObject, newPeriod, newVariation]
		const blob = await new Promise(resolve => canvas.toBlob(resolve))
		image.src = URL.createObjectURL(blob)
	}
}

async function updateTime(newPeriod = currentPeriod, newVariation = currentVariation, forcePeriod = false) {
	document.body.dataset.canvasLoading = ""

	if (!variationsConfig[newVariation]) newVariation = defaultVariation
	const variationConfig = variationsConfig[newVariation]

	if (newPeriod < 0) newPeriod = 0
	else if (newPeriod > variationConfig.versions.length - 1) newPeriod = variationConfig.versions.length - 1

	currentPeriod = newPeriod
	if (currentVariation !== newVariation) {
		currentVariation = newVariation
		timelineSlider.max = variationConfig.versions.length - 1
		if (!forcePeriod) {
			currentPeriod = variationConfig.default
			newPeriod = currentPeriod
		}
		if (variationConfig.versions.length === 1) bottomBar.classList.add('no-time-slider')
		else bottomBar.classList.remove('no-time-slider')
		buildObjectsList(variationConfig, currentVariation)
	}
	timelineSlider.value = currentPeriod
	updateTooltip(newPeriod, newVariation)

	await updateBackground(newPeriod, newVariation)

	dispatchTimeUpdateEvent(newPeriod)
	delete document.body.dataset.canvasLoading
	tooltip.dataset.forceVisible = ""
	clearTimeout(tooltipDelayHide)
	tooltipDelayHide = setTimeout(() => {
		delete tooltip.dataset.forceVisible
	}, 1000)

}

function updateTooltip(newPeriod, newVariation) {
	const configObject = variationsConfig[newVariation].versions[newPeriod]

	// If timestap is a number return a UTC formatted date otherwise use exact timestap label
	if (typeof configObject.timestamp === "number") tooltip.querySelector('div').textContent = new Date(configObject.timestamp * 1000).toUTCString()
	else tooltip.querySelector('div').textContent = configObject.timestamp

	// Clamps position of tooltip to prevent from going off screen
	const timelineSliderRect = timelineSlider.getBoundingClientRect()
	let min = -timelineSliderRect.left + 12
	let max = (window.innerWidth - tooltip.offsetWidth) - timelineSliderRect.left + 4
	tooltip.style.left = Math.min(Math.max((timelineSlider.offsetWidth) * (timelineSlider.value) / (timelineSlider.max) - tooltip.offsetWidth / 2, min), max) + "px"
}

tooltip.parentElement.addEventListener('mouseenter', () => updateTooltip(parseInt(timelineSlider.value), currentVariation))

window.addEventListener('resize', () => updateTooltip(parseInt(timelineSlider.value), currentVariation))

function isOnPeriod(start, end, variation, currentPeriod, currentVariation) {
	if (start > end) [start, end] = [end, start]
	return currentPeriod >= start && currentPeriod <= end && variation === currentVariation
}

function parsePeriod(periodString) {
	let variation = defaultVariation
	periodString = periodString + ""
	if (periodString.split(':').length > 1) {
		const split = periodString.split(':')
		variation = codeReference[split[0]]
		periodString = split[1]
	}
	if (periodString.search('-') + 1) {
		let [start, end] = periodString.split('-').map(i => parseInt(i))
		if (start > end) [start, end] = [end, start]
		return [start, end, variation]
	} else if (codeReference[periodString]) {
		variation = codeReference[periodString]
		const defaultPeriod = variationsConfig[variation].default
		return [defaultPeriod, defaultPeriod, variation]
	} else {
		const periodNew = parseInt(periodString)
		return [periodNew, periodNew, variation]
	}
}

function formatPeriod(start, end, variation) {
	let periodString, variationString
	variationString = variationsConfig[variation].code
	if (start > end) [start, end] = [end, start]
	if (start === end) {
		if (start === variationsConfig[variation].default && variation !== defaultVariation) {
			periodString = ""
		}
		else periodString = start
	}
	else periodString = start + "-" + end
	if (periodString && variationString) return variationsConfig[variation].code + ":" + periodString
	if (variationString) return variationString
	return periodString
}

function buildObjectsList(variationConfig, id) {

	const entry = {
		name: variationConfig.name,
		links: {},
		id,
		...variationConfig.info
	}
	const element = createInfoBlock(entry)
	entriesList.replaceChildren(element)

}

