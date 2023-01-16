/* 두개의 값을 받아 그 중 1개의 랜덤값 출력 */
function rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  /* 1부터 45의 랜덤값을 받아옴*/
  let lotto_num;
  function lotto_rand() {
      return lotto_num = rand(1,46);
  }
  
  
  
  /* 총 6개의 번호를 받아옴 */
  let lotto_six = [];
  function lotto_six_num() {
      lotto_six = [];
      for (let i = 0; i < 6; i++) {
          lotto_six.push(lotto_rand());
          for(let c = 0; c<i; c++){
                  if (lotto_six[i] === lotto_six[c]) {
                      lotto_six.pop();
                      i--;  
                  }
              }
      }
      
      lotto_six.sort(function compare(a, b) {
        return a - b;
      });
  
  }