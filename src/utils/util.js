/** @format */

// 判断数据的类型
export const isType = (type) => (obj) => {
  return Object.prototype.toString.call.bind(obj) === '[object' + type + ']';
};
