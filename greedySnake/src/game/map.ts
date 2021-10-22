/*
 * @Author: 一尾流莺
 * @Description:地图
 * @Date: 2021-10-19 17:10:53
 * @LastEditTime: 2021-10-19 17:50:14
 * @FilePath: \greedySnake\src\game\map.ts
 */

import type { Map } from '../types/index';

// 行数
export const gameRow = 15;
// 列数
export const gameCol = 15;

// 初始化地图  现在所有的位置type都是0
export function initMap(map: Map) {
  for (let i = 0; i < gameRow; i++) {
    const arr: Array<number> = [];
    for (let j = 0; j < gameCol; j++) {
      arr.push(0);
    }
    map.push(arr);
  }
  return map;
}
