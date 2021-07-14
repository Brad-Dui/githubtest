/*
 * @Date: 2021-07-01 13:37:27
 * @LastEditTime: 2021-07-10 17:15:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\index.js
 */
/**
 * Promise对象 代表一个异步编程最终的成功与失败 
 * .then的方法链式执行异步操作 
 * .catch 可以捕获失败
 */
setTimeout(() => console.log("1"));
Promise.resolve()
    .then(() => {
        console.log('2');
        Promise.resolve()
            .then(() => {
                console.log('3');
            })
        setTimeout(() => console.log("4"));
    })
    .then(() => {
        console.log('5');
    });
