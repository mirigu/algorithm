//@ts-check

/**
 * 문제:
 * 정수 배열 arr가 주어집니다. arr를 이용해 새로운 배열 stk를 만드려고 합니다.
 * 변수 i를 만들어 초기값을 0으로 설정한 후 i가 arr의 길이보다 작으면 다음 작업을 반복합니다.
 *
 * 만약 stk가 빈 배열이라면 arr[i]를 stk에 추가하고 i에 1을 더합니다.
 * stk에 원소가 있고, stk의 마지막 원소가 arr[i]보다 작으면 arr[i]를 stk의 뒤에 추가하고 i에 1을 더합니다.
 * stk에 원소가 있는데 stk의 마지막 원소가 arr[i]보다 크거나 같으면 stk의 마지막 원소를 stk에서 제거합니다.
 *
 * 위 작업을 마친 후 만들어진 stk를 return 하는 solution 함수를 완성해 주세요.
 */

/**
 * @param {number[]} arr
 * @returns {number[]}
 */

const solution = (arr) => {
  let stk = []; // 새로운 배열 stk
  let i = 0; // 반복 변수 i

  // i가 배열의 길이보다 작은 경우, 아래 코드를 반복 실행한다.
  while (i < arr.length) {
    // stk가 비어있으면 현재 arr[i]를 stk에 추가하고 i를 1 증가한다.
    if (stk.length === 0) {
      stk.push(arr[i]);
      i += 1;
    }

    // stk가 비어있지 않을 경우,
    if (stk.length !== 0) {
      // stk의 마지막 요소가 arr[i]보다 작으면 arr[i]를 stk에 추가하고 i를 1 증가한다.
      if (stk[stk.length - 1] < arr[i]) {
        stk.push(arr[i]);
        i += 1;
        // stk의 마지막 요소가 arr[i]보다 크거나 같으면 stk의 마지막 요소를 제거한다.
      } else {
        stk.pop();
      }
    }
  }

  // 최종 stk를 반환한다.
  return stk;
};

console.log(solution([1, 4, 2, 5, 3]));
