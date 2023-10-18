import { EventBusType } from "./eventBusType"

export class EventBus {
    // 事件名称 和 方法的映射关系
  // eventMap: Record<EventBusType, undefined | Array<(...args: any[]) => void>> = {};
  eventMap: Record<string, undefined | Array<(...args: any[]) => void>> = {};
  constructor() {
  }
  /**
   *  监听
   *  因为可能有相同的名字监听，但是回调函数不一样
   *  所以使用数组存储
   */
  on(eventName: EventBusType, fn:()=>void) {
    if (!this.eventMap[eventName]) {
      this.eventMap[eventName] = [];
    }
    this.eventMap[eventName]?.push(fn);
  }
  /**
   * 发射事件
   * 一发射就自动调用方法
   */
  emit(eventName: EventBusType, ...args:any[]) {
    if (!this.eventMap[eventName]) return;
    this.eventMap[eventName]?.forEach((fn) => {
      fn(...args);
    });
  }
  /**
   * 删除事件
   * 删除事件名和其对应的函数
   */
  off(eventName: EventBusType, fn: (...args: any[])=>void) {
    if (!this.eventMap[eventName]) return;

    // 可能拥有相同的事件名和相同的函数，所以循环删除
    const itemIndex = this.eventMap[eventName]?.findIndex((itemFn, index) => {
      return itemFn === fn
    });
    if (itemIndex !== undefined && itemIndex >= 0) {
      this.eventMap[eventName]?.splice(itemIndex, 1)
    }

    // 如果eventFns已经清空了
    if (this.eventMap[eventName]?.length === 0) {
      delete this.eventMap[eventName];
    }
  }
  /**
   * 清空事件名对应的事件函数数组
   */
  clear(eventName: EventBusType) {
    if (!this.eventMap[eventName]) return;
    delete this.eventMap[eventName];
  }
  /**
   * 清空所有事件
   */
  clearAll() {
    this.eventMap = {};
  }

  static INS = new EventBus()
  static on(eventName: EventBusType, fn:()=>void) {
    return this.INS.on(eventName, fn)
  }
  static emit(eventName: EventBusType, ...args:any[]) {
    return this.INS.emit(eventName, ...args)
  }
  static off(eventName: EventBusType, fn: (...args: any[])=>void) {
    return this.INS.off(eventName,fn)
  }
  static clear(eventName: EventBusType) {
    return this.INS.clear(eventName)
  }
  static clearAll() {
    return this.INS.clearAll()
  }
}
