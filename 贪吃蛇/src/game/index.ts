/*
 * @Author: 一尾流莺
 * @Description:game下所有文件的总出口
 * @Date: 2021-10-14 16:03:52
 * @LastEditTime: 2021-10-27 11:14:09
 * @FilePath: \warbler-games\贪吃蛇\src\game\index.ts
 */

import { Map } from '@/types';
import { Ref } from 'vue';
import { GameControl } from './GameControl';
import { initMap } from './map';

let gameControl: GameControl;

// 初始化游戏
export function initGame(map: Map, isLive: Ref<boolean>) {
  gameControl = new GameControl(initMap(map), isLive);
}

// 开始游戏
export function startGame() {
  gameControl.start();
}

// 重新开始游戏
export function replayGame() {
  gameControl.replay();
}
