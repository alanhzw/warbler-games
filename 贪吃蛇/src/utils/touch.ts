/*
 * @Author: 一尾流莺
 * @Description:移动端屏幕触摸事件
 * @Date: 2021-10-27 15:04:47
 * @LastEditTime: 2021-10-27 15:54:12
 * @FilePath: \warbler-games\贪吃蛇\src\utils\touch.ts
 */

let initX = 0;
let initY = 0;
let distanceX = 0;
let distanceY = 0;

// 开始触摸
export function touchstart(event: TouchEvent) {
  // 只监听单指划动，多指划动不作响应
  if (event.targetTouches.length > 1) {
    return;
  }
  // 获得触摸起始点坐标
  initX = event.targetTouches[0].pageX;
  initY = event.targetTouches[0].pageY;
}
// 触摸过程
export function touchmove(event: TouchEvent) {
  // 只监听单指划动，多指划动不作响应
  if (event.targetTouches.length > 1) {
    return;
  }
  distanceX = event.targetTouches[0].pageX - initX;
  distanceY = event.targetTouches[0].pageY - initY;
}
// 结束触摸
export function touchend(event: TouchEvent, fn: Function) {
  // 只监听单指划动，多指划动不作响应
  if (event.targetTouches.length > 1) {
    return;
  }
  console.log('🚀🚀~ distanceX:', distanceX);

  console.log('🚀🚀~ distanceY:', distanceY);
  if (distanceX > 20) {
    fn('Right');
    return;
  }
  if (distanceX < -20) {
    fn('Left');
    return;
  }
  if (distanceY > 20) {
    fn('Down');
    return;
  }
  if (distanceY < -20) {
    fn('Up');
    return;
  }
}
