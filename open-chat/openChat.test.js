const solution = (record) => {
  let result = [];
  let attendees = [];

  for (let i = 0; i < record.length; i++) {
    const [action, id, name] = record[i].split(' ');
    if (action === 'Enter' || action === 'Change') {
      attendees[id] = name;
    }

    if (action !== 'Change') {
      result.push([action, id]);
    }
  }

  return result.map(v => v[0] === 'Enter' ? attendees[v[1]] + '님이 들어왔습니다.' : attendees[v[1]] + '님이 나갔습니다.');
}

test('solution', () => {
  expect(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"])).toEqual(["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]);
})