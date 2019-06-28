 const Mock = require('mockjs');

 const Random = Mock.Random;

 let data = [];
 for (let i = 0; i < 10; i++) {
     let newData = {
         title:Random.csentence(5,30),
         word:Random.cword(2,2),
         tag1:Random.cword(4,5),
         tag2:Random.cword(4,5),
         tag3:Random.cword(4,5),
         paragraph:Random.cparagraph(10),
         thumb_pic:Random.dataImage('192x106','内容图片'),
         num:Random.integer(500, 1000),
         num_comment:Random.integer(100, 1000),
         author_pic:Random.image('24X24', '头像'),
         author_name:Random.cname(),
         date_time:Random.date() + '' + Random.time()
     }
     data.push(newData);
 }

Mock.mock('data/index', 'post', data);
