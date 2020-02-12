const ironSticksCount = (arrangement) => {
    let result = 0;
    let st = [];
 
    for (let i=0; i < arrangement.length; i++) {
        if (arrangement[i] === '('){
            st.push(arrangement[i]);
        } else {
            st.pop();
            if (arrangement[i-1] === '(') {
                result += st.length;
            } else result +=1;
        }
    }
    return result ;
};


test('ironSticksCount', () => {
  expect(ironSticksCount('(((()())(())()))')).toBe(15);
  expect(ironSticksCount('()(((()())(())()))(())')).toBe(17);
})
