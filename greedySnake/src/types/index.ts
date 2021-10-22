/*
 * @Author: 一尾流莺
 * @Description:类型声明文件
 * @Date: 2021-10-19 17:40:22
 * @LastEditTime: 2021-10-21 18:39:51
 * @FilePath: \greedySnake\src\types\index.ts
 */
export type Map = Array<Array<number>>;

export interface SnakeHead {
  x: number;
  y: number;
  status: number;
}

export type SnakeBody = SnakeHead;

export type SnakeBodies = SnakeBody[];
