const circleIntersect = (c1, c2) => {
  const distSq = (c1.x - c2.x) * (c1.x - c2.x) + (c1.y - c2.y) * (c1.y - c2.y); 
  const radSumSq = (c1.r + c2.r) * (c1.r + c2.r);

  return distSq < radSumSq;
}

const circleArea = radius => Math.PI * radius * radius;

module.exports = {
  circleIntersect,
  circleArea
}
