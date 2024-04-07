//@ts-check

/**
 * 문제:
 * 오늘 해야 할 일이 담긴 문자열 배열 todo_list와 각각의 일을 지금 마쳤는지를 나타내는 boolean 배열 finished가 매개변수로 주어질 때,
 * todo_list에서 아직 마치지 못한 일들을 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.
 */

/**
 *
 * @param {string[]} todo_list
 * @param {boolean[]} finished
 * @returns {string[]}
 */

const solution = (todo_list, finished) => {
  // todo_list 배열을 순회하면서 완료된 항목을 제외한 요소만 필터링한 새로운 배열을 반환한다.
  return todo_list.filter((_, idx) => !finished[idx]);
};

console.log(
  solution(
    ['problemsolving', 'practiceguitar', 'swim', 'studygraph'],
    [true, false, true, false]
  )
); // ["practiceguitar", "studygraph"]
