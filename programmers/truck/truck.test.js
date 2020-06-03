const minTimePass = (bridge_length, weight, truck_weights) => {
  let time = 0;
  const bridgeTrucks = [];
  const bridgeTrucksTime = [];

  while(true) {
    time += 1;
    
    if (bridgeTrucksTime[0] === time) {
      bridgeTrucks.shift();
      bridgeTrucksTime.shift();
    }

    if (getBridgeTruckSum(bridgeTrucks) + truck_weights[0] <= weight) {
      bridgeTrucks.push(truck_weights.shift());
      bridgeTrucksTime.push(time + bridge_length);
    }

    if (bridgeTrucks.length + truck_weights.length === 0) {
      break;
    }
  }

  return time;
}

const getBridgeTruckSum = arr => arr.reduce((acc, v) => acc += v, 0);

test('minTimePass', () => {
  expect(minTimePass(2, 10, [7, 4, 5, 6])).toBe(8);
  expect(minTimePass(2, 10, [1, 2, 3, 4])).toBe(6);
  expect(minTimePass(100,100,[10, 10, 10, 10, 10, 10, 10, 10, 10, 10])).toBe(110);
});

test('getBridgeTruckSum', () => {
  expect(getBridgeTruckSum([1,2,3])).toBe(6);
});