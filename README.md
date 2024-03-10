## wangxiangshanhai
CREATE TABLE behemoth (
    id INT,
    name VARCHAR(255),
    age VARCHAR(255),
    location VARCHAR(255),
    element VARCHAR(255),
    needSeals VARCHAR(255),
    parts VARCHAR(255),
    attack VARCHAR(255)
);

INSERT INTO behemoth (id, name, age, location, element, needSeals, parts, attack) VALUES
('1', '莽苍•草龟', '万年', '', '木', '庚', '首, 背', '首:438, 背:438'),
('2', '凌铄•长右', '万年', '', '金', '庚', '首, 尾', '首:398, 尾:438'),
('3', '凛狐', '万年', '中山', '', '壬', '首, 颈, 尾', '首:398, 颈:398, 尾:438'),
('4', '并封', '万年', '西岛', '', '庚, 辛', NULL, NULL);

export const behemoth = [{
    id: "1",
    name: '莽苍•草龟',
    age: "万年",
    location: "",
    element: "木",
    needSeals: ['庚'],
    parts: ['首', '背'],
    attack: {
        '首': 438,
        '背': 438
    }
},
{
    id: "2",
    name: '凌铄•长右',
    age: "万年",
    location: "",
    element: "金",
    needSeals: ['庚'],
    parts: ['首', '尾'],
    attack: {
        '首': 398,
        '尾': 438
    }
},
{
    id: "3",
    name: '凛狐',
    age: "万年",
    location: "中山",
    element: "",
    needSeals: ['壬'],
    parts: ['首', '颈', '尾'],
    attack: {
        '首': 398,
        '颈': 398,
        '尾': 438
    }
},
{
    id: "4",
    name: '并封',
    age: "万年",
    location: "西岛",
    element: "",
    needSeals: ['庚', '辛'],
    parts: ['首'],
    attack: {
        '首': 398,
    }
},
{
    id: "5",
    name: '蔽影巫人',
    age: "万年",
    location: "西岛",
    element: "",
    needSeals: ['庚', '辛'],
    parts: [],
    attack: {}
},
{
    id: "6",
    name: '梅茸',
    age: "万年",
    location: "西岛",
    element: "",
    needSeals: ['庚', '辛'],
    parts: ['角', '臂', '尾'],
    attack: {
        '角': 358,
        '臂': 438,
        '尾': 438
    }
},
{
    id: "7",
    name: '狻象',
    age: "万年",
    location: "",
    element: "",
    needSeals: ['庚', '辛'],
    parts: ['首', '尾'],
    attack: {
        '首': 398,
        '尾': 438
    }
},
{
    id: "8",
    name: '犴罴',
    age: "万年",
    location: "",
    element: "",
    needSeals: ['庚', '辛'],
    parts: [],
    attack: {}
},
{
    id: "9",
    name: '剑骨龙',
    age: "万年",
    location: "",
    element: "",
    needSeals: ['庚', '辛'],
    parts: ['首', '背', '尾'],
    attack: {
        '首': 398,
        '背': 398,
        '尾': 438
    }
},
{
    id: "10",
    name: '凌烁凫傒',
    age: "万年",
    location: "",
    element: "金",
    needSeals: ['庚', '辛'],
    parts: [ '翅'],
    attack: {
        '翅': 438,
    }
},
{
    id: "11",
    name: '龙涎鲸',
    age: "万年",
    location: "",
    element: "",
    needSeals: ['庚', '癸'],
    parts: [],
    attack: {}
},
{
    id: "12",
    name: '犀羚',
    age: "万年",
    location: "",
    element: "",
    needSeals: ['辛', '癸'],
    parts: ['首', '尾'],
    attack: {
        '首': 398,
        '尾': 438
    }
},
{
    id: "13",
    name: '狪狪',
    age: "万年",
    location: "东岛",
    element: "",
    needSeals: ['辛', '癸'],
    parts: ['首', '尾'],
    attack: {
        '首': 398,
        '尾': 398
    }
},
{
    id: "14",
    name: '火狐',
    age: "万年",
    location: "中山",
    element: "",
    needSeals: ['辛', '壬'],
    parts: ['首', '颈', '尾'],
    attack: {
        '首': 398,
        '颈': 398,
        '尾': 438
    }
},
{
    id: "15",
    name: '小青',
    age: "万年",
    location: "中山",
    element: "",
    needSeals: ['辛', '壬'],
    parts: ['首', '臂'],
    attack: {
        '首': 358,
        '臂': 438,
    }
},
{
    id: "16",
    name: '翡翠龙',
    age: "万年",
    location: "中山",
    element: "",
    needSeals: ['辛', '壬'],
    parts: ['颈', '背', '翅', '角', '尾'],
    attack: {
        '背': 398,
        '颈': 398,
        '翅': 358,
        '角': 358,
        '尾': 438
    }
},
{
    id: "17",
    name: '冰烜',
    age: "万年",
    location: "中山",
    element: "",
    needSeals: ['癸', '壬'],
    parts: ['首', '臂'],
    attack: {
        '首': 398,
        '臂': 438,
    }
},
{
    id: "18",
    name: '丛丛',
    age: "万年",
    location: "东岛",
    element: "",
    needSeals: ['庚', '癸', '壬'],
    parts: ['首', '角', '尾'],
    attack: {
        '首': 398,
        '角': 358,
        '尾': 438
    }
},
{
    id: "19",
    name: '师鱼',
    age: "万年",
    location: "",
    element: "",
    needSeals: ['庚', '辛', '癸'],
    parts: ['首', '翅', '尾'],
    attack: {
        '首': 398,
        '翅': 398,
        '尾': 398
    }
},
{
    id: "20",
    name: '刀螳',
    age: "一万三千年",
    location: "",
    element: "",
    needSeals: ['庚', '壬'],
    parts: ['翅', '角', '臂', '尾'],
    attack: {
        '臂': 398,
        '翅': 398,
        '角': 398,
        '尾': 398
    }
},
{
    id: "21",
    name: '犰狳',
    age: "一万三千年",
    location: "",
    element: "",
    needSeals: ['辛', '癸'],
    parts: ['首', '尾'],
    attack: {
        '首': 398,
        '尾': 398
    }
},
{
    id: "22",
    name: '强电滑溪',
    age: "一万三千年",
    location: "西岛",
    element: "",
    needSeals: ['辛', '癸'],
    parts: [],
    attack: {}
},
{
    id: "23",
    name: '乘黄',
    age: "一万三千年",
    location: "西岛",
    element: "",
    needSeals: ['辛', '癸'],
    parts: ['首', '背', '尾'],
    attack: {
        '首': 358,
        '背': 358,
        '尾': 398
    }
},
{
    id: "24",
    name: '巨噬花',
    age: "一万三千年",
    location: "东岛",
    element: "",
    needSeals: ['辛', '癸'],
    parts: ['尾'],
    attack: {
        '尾': 438
    }
},
{
    id: "25",
    name: '蔽蔽',
    age: "一万三千年",
    location: "东岛",
    element: "",
    needSeals: ['辛', '癸'],
    parts: ['首', '尾'],
    attack: {
        '首': 398,
        '尾': 438
    }
},
{
    id: "26",
    name: '冉遗鱼',
    age: "一万三千年",
    location: "中山",
    element: "",
    needSeals: ['辛', '癸', '壬'],
    parts: ['首', '角', '尾'],
    attack: {
        '首': 398,
        '角': 398,
        '尾': 398,
    }
},
{
    id: "27",
    name: '蔽日巫人',
    age: "一万三千年",
    location: "西岛",
    element: "",
    needSeals: ['辛', '癸', '壬'],
    parts: [],
    attack: {}
},
{
    id: "28",
    name: '蒲夷鱼',
    age: "一万八千年",
    location: "北山",
    element: "",
    needSeals: ['辛', '癸', '壬'],
    parts: ['首', '角', '尾'],
    attack: {
        '首': 398,
        '角': 398,
        '尾': 398,
    }
},
{
    id: "29",
    name: '履雪羽骏',
    age: "一万八千年",
    location: "北山",
    element: "",
    needSeals: ['辛', '癸', '壬'],
    parts: ['首', '角', '翅', '尾'],
    attack: {
        '首': 358,
        '角': 438,
        '翅': 438,
        '尾': 398
    }
},
{
    id: "30",
    name: '脊背龙',
    age: "一万八千年",
    location: "西岛",
    element: "",
    needSeals: ['辛', '癸', '壬'],
    parts: ['首', '背', '尾'],
    attack: {
        '首': 398,
        '背': 398,
        '尾': 438
    }
},
{
    id: "31",
    name: '大王酸浆鱿',
    age: "一万八千年",
    location: "西岛",
    element: "",
    needSeals: ['辛', '癸', '壬'],
    parts: [],
    attack: {}
},
{
    id: "32",
    name: '龙鱼',
    age: "一万八千年",
    location: "西岛",
    element: "",
    needSeals: ['辛', '癸', '壬'],
    parts: ['角', '尾'],
    attack: {
        '角': 398,
        '尾': 398,
    }

},
{
    id: "33",
    name: '绵寿乘黄',
    age: "一万八千年",
    location: "西岛",
    element: "",
    needSeals: ['辛', '癸', '壬'],
    parts: ['首', '背', '尾'],
    attack: {
        '首': 358,
        '背': 358,
        '尾': 398
    }
},
{
    id: "34",
    name: '虹虹',
    age: "一万八千年",
    location: "东岛",
    element: "",
    needSeals: ['辛', '癸', '壬'],
    parts: ['首', '角'],
    attack: {
        '首': 398,
        '角': 358,
    }
},
{
    id: "35",
    name: '貛',
    age: "一万八千年",
    location: "东岛",
    element: "",
    needSeals: ['辛', '癸', '壬'],
    parts: ['首', '尾'],
    attack: {
        '首': 398,
        '尾': 438,
    }
},
{
    id: "36",
    name: '冲炎•九虺',
    age: "一万八千年",
    location: "",
    element: "火",
    needSeals: ['辛', '庚', '壬'],
    parts: ['首', '角'],
    attack: {
        '首': 398,
        '角': 358,
    }
},
{
    id: "37",
    name: '飒踏•孟极',
    age: "一万八千年",
    location: "",
    element: "风",
    needSeals: ['辛', '庚', '壬'],
    parts: [ '尾'],
    attack: {
        '尾': 438,
    }
},
{
    id: "38",
    name: '飒踏•絮钩',
    age: "一万八千年",
    location: "",
    element: "风",
    needSeals: ['辛', '庚', '壬'],
    parts: ['颈', '翅', '尾'],
    attack: {
        '颈': 398,
        '翅': 358,
        '尾': 438
    }
},
{
    id: "39",
    name: '飒踏•类',
    age: "三万年",
    location: "",
    element: "风",
    needSeals: ['辛', '庚', '壬'],
    parts: ['尾'],
    attack: {
        '尾': 509,
    }
},
{
    id: "40",
    name: '苍茫蠡蝗',
    age: "三万年",
    location: "",
    element: "木",
    needSeals: ['辛', '癸', '壬'],
    parts: ['首', '翅', '角', '尾'],
    attack: {
        '首': 462,
        '翅': 416,
        '角': 416,
        '尾': 509
    }
},
{
    id: "41",
    name: '黾围',
    age: "三万年",
    location: "",
    element: "木",
    needSeals: ['辛', '癸', '壬'],
    parts: ['首', '角', '尾'],
    attack: {
        '首': 509,
        '角': 416,
        '尾': 462
    }
},
{
    id: "42",
    name: '肥遗',
    age: "三万年",
    location: "",
    element: "",
    needSeals: ['庚', '辛', '癸', '壬'],
    parts: ['首', '颈', '尾'],
    attack: {
        '首': 462,
        '颈': 462,
        '尾': 509
    }
},
{
    id: "43",
    name: '玄煞并封',
    age: "三万年",
    location: "",
    element: "",
    needSeals: ['庚', '辛', '癸', '壬'],
    parts: ['首'],
    attack: {
        '首': 462,
    }
},
{
    id: "44",
    name: '蔽天巫人',
    age: "三万年",
    location: "",
    element: "",
    needSeals: ['庚', '辛', '癸', '壬'],
    parts: [],
    attack: {}
},
{
    id: "45",
    name: '薄片蛇颈龙',
    age: "三万年",
    location: "",
    element: "",
    needSeals: ['庚', '辛', '癸', '壬'],
    parts: ['颈'],
    attack: {
        '颈': 462,
    }
},
{
    id: "46",
    name: '沧龙',
    age: "三万年",
    location: "北冥海",
    element: "",
    needSeals: ['庚', '辛', '癸', '壬'],
    parts: [],
    attack: {}
},
{
    id: "47",
    name: '霸王龙',
    age: "三万年",
    location: "北山",
    element: "",
    needSeals: ['庚', '辛', '癸', '壬'],
    parts: ['首', '尾'],
    attack: {
        '尾': 509,
        '首': 462
    }
},
{
    id: "48",
    name: '猊煌',
    age: "三万年",
    location: "西岛",
    element: "",
    needSeals: ['庚', '辛', '癸', '壬'],
    parts: ['首', '尾'],
    attack: {
        '尾': 509,
        '首': 462
    }
},
{
    id: "49",
    name: '飒踏•大颚',
    age: "万年",
    location: "北山",
    element: "",
    needSeals: ['庚', '辛', '癸', '壬'],
    parts: ['首', '翅', '尾'],
    attack: {
        '首': 358,
        '翅': 438,
        '尾': 398
    }
},
{
    id: "50",
    name: '巨噬花',
    age: "三万年",
    location: "北山",
    element: "",
    needSeals: ['庚', '辛', '癸', '壬'],
    parts: ['首', '尾'],
    attack: {
        '尾': 509,
        '首': 462
    }
},
{
    id: "51",
    name: '飒踏•孟极',
    age: "四万年",
    location: "",
    element: "风",
    needSeals: ['庚', '辛', '癸'],
    parts: ['首', '尾'],
    attack: {
        '尾': 509,
        '首': 462
    }
},
{
    id: "52",
    name: '凌铄•鴸',
    age: "四万年",
    location: "",
    element: "风",
    needSeals: ['庚', '辛', '癸'],
    parts: ['尾'],
    attack: {
        '尾': 462,
    }
},
{
    id: "53",
    name: '凌铄•长右',
    age: "四万年",
    location: "",
    element: "金",
    needSeals: ['庚', '辛', '癸'],
    parts: ['首', '尾'],
    attack: {
        '首': 462,
        '尾': 509
    }
},
{
    id: "54",
    name: '厉煞丛丛',
    age: "四万年",
    location: "东岛",
    element: "",
    needSeals: ['庚', '壬', '癸'],
    parts: ['首', '角', '尾'],
    attack: {
        '首': 462,
        '角': 416,
        '尾':509
    }
},
{
    id: "55",
    name: '忱心火狐',
    age: "五万年",
    location: "东岛",
    element: "",
    needSeals: ['壬', '癸'],
    parts: ['首','颈','尾'],
    attack: {
        '首': 527,
        '颈': 527,
        '尾': 579
    }
},
{
    id: "56",
    name: '莽苍•草龟',
    age: "五万年",
    location: "",
    element: "木",
    needSeals: ['庚', '壬', '辛'],
    parts: ['首', '背'],
    attack: {
        '首': 579,
        '背': 579
    }
},
{
    id: "57",
    name: '酸与',
    age: "五万年",
    location: "东岛",
    element: "",
    needSeals: ['庚', '壬', '癸'],
    parts: ['首', '颈', '翅', '尾'],
    attack: {
        '首': 474,
        '翅': 579,
        '颈':527,
        '尾':579
    }
},
{
    id: "58",
    name: '波澜虹虹',
    age: "五万年",
    location: "东岛",
    element: "",
    needSeals: ['辛', '壬', '癸'],
    parts: ['首', '角'],
    attack: {
        '首': 527,
        '角': 474,
    }
},
{
    id: "59",
    name: '凌铄•妴胡',
    age: "五万年",
    location: "",
    element: "金",
    needSeals: ['辛', '壬', '癸'],
    parts: ['角', '背', '尾'],
    attack: {
        '背':527,
        '角':474,
        '尾':579
    }
},
{
    id: "60",
    name: '凌铄•凫傒',
    age: "五万年",
    location: "",
    element: "金",
    needSeals: ['辛', '壬', '癸'],
    parts: ['首', '翅', '尾'],
    attack: {
        '首': 474,
        '翅':579,
        '尾':527
    }
},
{
    id: "61",
    name: '凌铄•寄居蟹',
    age: "万年",
    location: "",
    element: "金",
    needSeals: ['庚', '壬', '癸'],
    parts: ['首', '臂', '背'],
    attack: {
        '首': 438,
        '背': 438,
        '臂': 398,
    }
},
{
    id: "62",
    name: '凌铄•寄居鳌蟹',
    age: "五万年",
    location: "",
    element: "金",
    needSeals: [],
    parts: [],
    attack: {}
},
{
    id: "63",
    name: '飒踏•狡',
    age: "五万年",
    location: "",
    element: "风",
    needSeals: ['辛', '壬', '癸'],
    parts: ['首', '角', '尾'],
    attack: {
        '首': 527,
        '角': 474,
        '尾': 579
    }
},
{
    id: "64",
    name: '莽苍•鷩鸟',
    age: "五万年",
    location: "",
    element: "木",
    needSeals: ['辛', '壬', '癸'],
    parts: ['首', '翅'],
    attack: {
        '首': 474,
        '翅': 579,
    }
},
{
    id: "65",
    name: '飒踏•类',
    age: "万年",
    location: "",
    element: "风",
    needSeals: ['辛', '壬', '庚'],
    parts: ['首'],
    attack: {
        '首': 398,
    }
},
{
    id: "66",
    name: '莽苍•巽羽六雏',
    age: "万年",
    location: "",
    element: "木",
    needSeals: ['庚', '癸'],
    parts: ['首', '翅'],
    attack: {
        '首': 358,
        '翅': 438,
    }
},
{
    id: "67",
    name: '莽苍•仙鹤',
    age: "万年",
    location: "",
    element: "木",
    needSeals: ['庚', '壬'],
    parts: ['翅', '尾'],
    attack: {
        '翅': 438,
        '尾': 398
    }
},
{
    id: "68",
    name: '狮癖',
    age: "万年",
    location: "",
    element: "",
    needSeals: ['庚', '辛', '癸'],
    parts: ['首'],
    attack: {
        '首': 398,
    }
},
{
    id: "69",
    name: '冰烜',
    age: "万年",
    location: "",
    element: "",
    needSeals: ['庚', '壬'],
    parts: ['首', '臂'],
    attack: {
        '首': 398,
        '臂': 438,
    }
}

]