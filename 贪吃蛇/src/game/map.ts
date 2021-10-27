/*
 * @Author: 一尾流莺
 * @Description:地图
 * @Date: 2021-10-19 17:10:53
 * @LastEditTime: 2021-10-27 11:50:31
 * @FilePath: \warbler-games\贪吃蛇\src\game\map.ts
 */

import type { Map } from '../types/index';

const width = document.documentElement.clientWidth - 20;
const height = document.documentElement.clientHeight - 40;

// 行数
export const gameRow = width > 700 ? Math.floor(height / 54) : Math.floor(height / 34);

// 列数
export const gameCol = width > 700 ? Math.floor(width / 54) : Math.floor(width / 34);

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
