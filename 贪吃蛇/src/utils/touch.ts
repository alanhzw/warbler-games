/*
 * @Author: 一尾流莺
 * @Description:移动端屏幕触摸事件
 * @Date: 2021-10-27 15:04:47
 * @LastEditTime: 2021-10-27 16:28:14
 * @FilePath: \warbler-games\贪吃蛇\src\utils\touch.ts
 */

const clientWidth = document.documentElement.clientWidth / 2;
const clientHeight = document.documentElement.clientHeight / 2;

// 开始触摸  把屏幕分为四个区域 A-左上 B-右上 C-左下 D-右下
export function touchstart(event: TouchEvent, change: Function) {
  // 只监听单指划动，多指划动不作响应
  if (event.targetTouches.length > 1) {
    return;
  }
  // A区
  if (event.targetTouches[0].pageX <= clientWidth && event.targetTouches[0].pageY <= clientHeight) {
    change('A');
  }
  // B区
  if (event.targetTouches[0].pageX > clientWidth && event.targetTouches[0].pageY <= clientHeight) {
    change('B');
  }
  // C区
  if (event.targetTouches[0].pageX <= clientWidth && event.targetTouches[0].pageY > clientHeight) {
    change('C');
  }
  // D区
  if (event.targetTouches[0].pageX > clientWidth && event.targetTouches[0].pageY > clientHeight) {
    change('D');
  }
}
