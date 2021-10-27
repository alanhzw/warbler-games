/*
 * @Author: 一尾流莺
 * @Description:游戏控制类
 * @Date: 2021-10-19 17:14:43
 * @LastEditTime: 2021-10-27 18:37:16
 * @FilePath: \warbler-games\贪吃蛇\src\game\GameControl.ts
 */

import { IsLive, Map } from '@/types';
import { addTicker, intervalTimer, stopTicker } from '@/utils';
import { Food } from './Food';
import { render, reset } from './render';
import { Snake } from './Snake';

export class GameControl {
  // 蛇
  private _snake: Snake;
  // 食物
  private _food: Food;
  // 创建一个属性来存储蛇的移动方向（也就是按键的方向）
  private _direction: string;
  // 地图
  private _map: Map;
  // 游戏状态
  private _isLive: IsLive;

  constructor(map: Map, isLive: IsLive) {
    this._map = map;
    this._direction = 'Right';
    this._snake = new Snake();
    this._food = new Food();
    this._isLive = isLive;
  }
  // 开始游戏
  start() {
    // 绑定键盘按键按下的事件
    document.addEventListener('keydown', this.keydownHandler.bind(this));
    // 添加到帧循环列表
    addTicker(this.handlerTicker.bind(this));
    // 标记游戏状态为开始
    this._isLive.value = 2;
  }
  // 创建一个键盘按下的响应函数
  keydownHandler(event: KeyboardEvent) {
    this._direction = event.key;
  }
  // 渲染map
  private _timeInterval = 200;
  // 是否移动蛇
  private _isMove = intervalTimer(this._timeInterval);
  // 定义帧循环函数
  handlerTicker(n: number) {
    if (this._isMove(n)) {
      try {
        this._snake.move(this._direction, this._food);
      } catch (error: any) {
        // 标记游戏状态为结束
        this._isLive.value = 3;
        // 停止循环
        stopTicker();
      }
    }
    render(this._map, this._snake, this._food);
  }
  // 重新开始游戏
  replay() {
    reset(this._map);
    this._direction = 'Right';
    this._snake = new Snake();
    this._food = new Food();
    this._isLive.value = 2;
    stopTicker();
    addTicker(this.handlerTicker.bind(this));
  }
  // 移动端修改移动方向
  changeMoveDirection(clickX, clickY) {
    // 根据点击的位置和蛇头的相对位置,进行方向的改变
    if (clickY < this._snake.head.x && this._direction !== 'Left' && this._direction !== 'Right') {
      this._direction = 'Left';
      return;
    }
    if (clickY > this._snake.head.x && this._direction !== 'Left' && this._direction !== 'Right') {
      this._direction = 'Right';
      return;
    }
    if (clickX < this._snake.head.y && this._direction !== 'Up' && this._direction !== 'Down') {
      this._direction = 'Up';
      return;
    }
    if (clickX > this._snake.head.y && this._direction !== 'Up' && this._direction !== 'Down') {
      this._direction = 'Down';
      return;
    }
  }
  changeDirection(direction: string) {
    if (direction === 'Left' && this._direction !== 'Left' && this._direction !== 'Right') {
      this._direction = 'Left';
      return;
    }
    if (direction === 'Right' && this._direction !== 'Left' && this._direction !== 'Right') {
      this._direction = 'Right';
      return;
    }
    if (direction === 'Up' && this._direction !== 'Up' && this._direction !== 'Down') {
      this._direction = 'Up';
      return;
    }
    if (direction === 'Down' && this._direction !== 'Up' && this._direction !== 'Down') {
      this._direction = 'Down';
      return;
    }
  }
}
