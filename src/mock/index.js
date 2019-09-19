import Mock from 'mockjs'
import {
  getUserInfo
} from './response/user'

const Random = Mock.Random;
// Mock.mock('http://localhost:4000/getUserInfo', 'post', getUserInfo);
Mock.mock(/\getUserInfo/, 'post', getUserInfo);


// Mock.setup
// Mock.setup({
//   // 500ms后才会响应ajax
//   timeout: 500
// })

// Mock扩展
Random.extend({
  fruit() {
    const fruit = ['apple', 'pear', 'lemon'];
    // this->Random
    return this.pick(fruit);
  }
});

export default Mock;
