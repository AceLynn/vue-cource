import Mock from "mockjs";

const Random = Mock.Random;

export const getUserInfo = (options) => {
  // console.log(options);
  const template = {
    // 'str|1-2': 'lison',
    // 'name|3': '2',
    // 'age|+2': 18,
    // 'number|1-10': 1, // 最后的1只是用来确定类型，数值随便
    // 'float|3-10.2-5': 0,  // 3-10,浮点保留2-5位
    // 'bool|1': true, // 得到true的概率是1/2；
    // 'bool2|1-9': true,  //true的概率是 min/(min+max) 为1/（1+9）
    // 'obj|2': {  //随机抽取对象中的2个项，array同样如此
    //   a: 'aa',
    //   b: 'bb',
    //   c: 'cc'
    // },
    'arr|2-4': [1,2,3], // 重复2-4次
    'arr2|3': ['a', 'b'],
    'func': ()=>{
      return 'this is created by function'
    },
    // 正则表达式
    'reg': /[1-9][a-z]/,
    email: Random.email(),        // random提供了几大类占位符，和@xxx效果雷同
    email1: Mock.mock('@email'),  // email占位符
    img: Mock.mock('@dataImage'), // base64图片占位符等等
    range: Random.range(3, 10, 0.5),  // 范围值，3-10，步长0.5
    date: Random.date('yyyy-MM-dd HH:mm:ss'), // 返回的日期格式
    time: Random.time('hh:mm'),
    dateline: Random.datetime('yyyy-MM-dd hh:mm'),
    now: Random.now('hour', 'yyyy-MM-dd hh:mm'),
    img1: Random.image('100x200', '#00ff00', '#fff', 'png', 'Lision'), // 尺寸，图片底色，文本底色，图片格式，文本
    imgBase64: Random.dataImage('100x100', 'Text'),
    color: Random.color(),
    eParagraph: Random.paragraph(2, 3), // 返回几句英文句。 cparagraph返回中文段落
    cword: Random.cword('单据刀子', 2, 5),
    // first,last,name, cfirst,clast,cname
    cname: Random.cname(),
    // web: url,protocol,domain,tId,email,ip
    // address: region,province,city,country,zip 中国地址:大区，省份，城市，镇，邮编
    region: Random.region(),
    country: Random.county(true), // 设置true，会返回上级地址
    upperFirstLetter: Random.capitalize('small'), // 首字母大写,还有upper大写，lower都小写等
    pick: Random.pick([1,2,3,4]), // 随机抽取数组中的几个数
    shuffle: Random.shuffle([1,2,3,4]), //数组打乱后重组
    // guid， id（身份证等），increment生成不重复的序列号
    fruit: Random.fruit(),  // index自己写的扩展
  }
  // return {
  //   name: 'lison'
  // }
  return Mock.mock(template);
}
