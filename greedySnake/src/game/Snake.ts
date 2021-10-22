/*
 * @Author: 一尾流莺
 * @Description:蛇类 -1 食物 1 蛇身体 2 蛇头
 * @Date: 2021-10-19 17:14:52
 * @LastEditTime: 2021-10-21 18:53:46
 * @FilePath: \greedySnake\src\game\Snake.ts
 */

import { SnakeBodies, SnakeHead } from '@/types';
import { Food } from './Food';
import { hitFence, hitSelf } from './hit';

export class Snake {
  bodies: SnakeBodies;
  head: SnakeHead;
  constructor() {
    this.head = {
      x: 1,
      y: 0,
      status: 2,
    };
    this.bodies = [
      {
        x: 0,
        y: 0,
        status: 1,
      },
    ];
  }
  // 定义一个方法，用来检查蛇是否吃到食物
  checkEat(food: Food) {
    if (this.head.x === food.x && this.head.y === food.y) {
      // 食物的位置要进行重置
      food.change(this);
      // 分数增加
      // this.scorePanel.addScore();
      // 蛇要增加一节
      this.bodies.unshift({
        x: food.x,
        y: food.y,
        status: 1,
      });
    }
  }
  // 控制蛇移动
  move(direction: string, food: Food) {
    // 判断是否游戏结束
    if (hitFence(this.head, direction) || hitSelf(this.head, this.bodies)) {
      throw new Error('出界了');
    }
    const headX = this.head.x;
    const headY = this.head.y;
    const bodyX = this.bodies[this.bodies.length - 1].x;
    const bodyY = this.bodies[this.bodies.length - 1].y;
    switch (direction) {
      case 'ArrowUp':
      case 'Up':
        // 向上移动 需要检测按键是否相反方向
        if (headY - 1 === bodyY && headX === bodyX) {
          moveDown(this.head, this.bodies);
          direction = 'Down';
          return;
        }
        moveUp(this.head, this.bodies);
        break;
      case 'ArrowDown':
      case 'Down':
        // 向下移动 需要检测按键是否相反方向
        if (headY + 1 === bodyY && headX === bodyX) {
          moveUp(this.head, this.bodies);
          direction = 'Up';
          return;
        }
        moveDown(this.head, this.bodies);
        break;
      case 'ArrowLeft':
      case 'Left':
        // 向左移动 需要检测按键是否相反方向
        if (headY === bodyY && headX - 1 === bodyX) {
          moveRight(this.head, this.bodies);
          direction = 'Right';
          return;
        }
        moveLeft(this.head, this.bodies);
        break;
      case 'ArrowRight':
      case 'Right':
        // 向右移动 需要检测按键是否相反方向
        if (headY === bodyY && headX + 1 === bodyX) {
          moveLeft(this.head, this.bodies);
          direction = 'Left';
          return;
        }
        moveRight(this.head, this.bodies);
        break;
      default:
        break;
    }
    // 检查蛇是否吃到食物
    this.checkEat(food);
  }
}

// 向上移动
function moveUp(head: SnakeHead, bodies: SnakeBodies) {
  head.y--;
  bodies.push({
    x: head.x,
    y: head.y + 1,
    status: 1,
  });
  bodies.shift();
}

// 向下移动
function moveDown(head: SnakeHead, bodies: SnakeBodies) {
  head.y++;
  bodies.push({
    x: head.x,
    y: head.y - 1,
    status: 1,
  });
  bodies.shift();
}

// 向右移动
function moveRight(head: SnakeHead, bodies: SnakeBodies) {
  head.x++;
  bodies.push({
    x: head.x - 1,
    y: head.y,
    status: 1,
  });
  bodies.shift();
}

// 向左移动
function moveLeft(head: SnakeHead, bodies: SnakeBodies) {
  head.x--;
  bodies.push({
    x: head.x + 1,
    y: head.y,
    status: 1,
  });
  bodies.shift();
}
