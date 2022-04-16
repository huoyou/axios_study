/*
 * @Description: default
 * @Autor: huoyou
 * @Date: 2022-04-15 23:14:29
 * @LastEditTime: 2022-04-16 21:28:10
 */
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// 不需延迟的时候注释此段代码
server.use(function (req, res, next) {
  setTimeout(next, 1000 + Math.random() * 2000);
});

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
