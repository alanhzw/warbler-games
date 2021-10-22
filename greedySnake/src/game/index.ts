/*
 * @Author: 一尾流莺
 * @Description:game下所有文件的总出口
 * @Date: 2021-10-14 16:03:52
 * @LastEditTime: 2021-10-21 19:25:02
 * @FilePath: \greedySnake\src\game\index.ts
 */

import { Map } from '@/types';
import { setRem } from '@/utils/rem';
import { GameControl } from './GameControl';
import { initMap } from './map';

let gameControl: GameControl;

// 初始化游戏
export function initGame(map: Map) {
  setRem();
  gameControl = new GameControl(initMap(map));
}

// 开始游戏
export function startGame() {
  gameControl.start();
}
