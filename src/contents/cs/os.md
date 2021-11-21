---
title: "Operating System 총정리"
date: "2021-10-24"
draft: false
path: "/blog/cs/os"
series: "면접 대비하기"
tags: ["CS", "면접"]
---

<br>
<br>
<br>

## 🗡 운영체제

시스템의 자원과 동작을 관리하는 소프트웨어

<div style="text-align:center">
  <img src="https://media2.giphy.com/media/1HQ0xMcxsSECY/giphy.gif?cid=ecf05e4760h9xh9j45krr0rqaqy32nvj5m4khcweolxlw69d&rid=giphy.gif&ct=g" height="300">
  <p>내 마음속의 운영체제</p>
</div>

<br>
<br>
<br>

## 🗡 프로세스 관리

<br>
<br>

### 프로그램 · 프로세스 · 스레드

<br>

**프로그램**

- 어떤 작업을 실행하는 파일이다.
  - 하드 디스크 등에 저장되어 있는 실행코드

<br>

**프로세스**

- OS의 자원을 할당받아 실행되는 **작업단위**이다.
  - 프로그램의 객체 인스턴스, 상태가 메모리에 적재된다.
- **PCB** Process Control Block
  - 프로세스에 대한 중요 정보(PID, 상태, 스케줄링 정보, 메모리 정보 ...)를 저장한다.
  - Context Switching 할 때에 작업의 진행 상황을 모두 저장.
- 프로세스의 주소공간
  - code: 컴파일된 코드
  - data: 전역변수, 정적변수
  - heap: 동적으로 할당되는 메모리
  - stack: 지역변수, 매개변수

<div style="text-align:center">
  <img src="https://gmlwjd9405.github.io/images/os-process-and-thread/process.png" width="49%">
  <img src="https://gmlwjd9405.github.io/images/os-process-and-thread/thread.png" width="49%">
</div>

<br>

**스레드**

- 프로세스가 할당 받은 자원을 이용하는 **실행단위**이다.
- 프로세스의 code, data, heap영역을 공유한다.

<br>
<br>

---

<br>
<br>

### 멀티 프로세스 · 멀티 스레드

- 효율성
  - 스레드는 code, data, heap를 공유하기에 시스템 자원을 적게 소모한다.
  - 프로세스 Context Switching으로 인한 오버헤드도 줄일 수 있다.
  - 프로세스간 IPC 통신을 할 수 있지만 복잡하고 비용이 크다.
- 안정성
  - 프로세스는 독립적이기에 하나에 문제가 발생해도 다른 프로세스는 정상적으로 실행이 된다.
  - 반면 스레드는 다든 스레드에게 영향을 주기에 이런 동기화 문제를 대비해야 한다.

<br>
<br>

---

<br>
<br>

### 스케줄링

![스케줄링](https://user-images.githubusercontent.com/13609011/91695344-f2dfae80-eba8-11ea-9a9b-702192316170.jpeg)

- Ready Queue는 CPU가 작업하기 전 대기하는 메모리 영역이다.
- Waiting에서는 이 프로세스에 대한 I/O 요청과 같은 이벤트에 대한 피드벡을 기다린다.

<br>

- 장기 스케줄러 ( Job ) New -> Ready
- 단기 스케줄러 ( CPU ) Ready -> Running
- 중기 스케줄러 ( Swapper ) Ready -> Suspended ~~&nbsp;쫒겨나는거다.&nbsp;~~

<br>
<br>

**CPU 스케줄링**

- 선점 / 비선점
  - 비선점형은 CPU에서 작업이 끝나면 Ready Queue 제일 앞에 있는 프로세스를 할당한다.
  - ~~이 CPU는 이제 제껍니다.~~ 최신 운영체제는 거의 선점형을 사용한다.
- Starvation
  - 작업순위에서 차별을 받아 계속 CPU에 할당받지 못하는 문제이다.

<br>

- FCFS ( First Come First Served )
  - 비선점
  - 먼저 온 프로세스를 선택한다.
  - 실행시간이 짧은 프로세스가 긴 프로세스의 작업을 계속 기다리게 되면서 CPU 사용률이 낮아진다.
- SJF ( Shortest Job First )
  - 비선점
  - 작업소요시간이 가장 짧은 프로세스를 선택한다.
  - SRTF ( Shortest Remaining Time First )
    - 선점형. Ready Queue에 더 짧은 프로세스가 있으면 바로 선점한다.
  - 장점. 최소 평균 대기 시간을 보장할 수 있다.
  - 단점. 작업시간을 알기 어렵고 Starvation 문제가 발생할 수 있다.
- PS ( Priority Scheduling )
  - 선점 / 비선점 모두 가능하다.
  - Aging
    - Ready Queue에 있는 시간이 길어지면 우선순위를 높여주면서 Starvation을 해결한다.
- **RR ( Round Robin )**
  - 선점
  - 각 프로세스는 동일한 크기의 할당 시간(time quantum)을 갖는다. 할당시간이 지나면 Ready Queue 제일 뒤에 적재한다.
  - 할당시간이 길면 FCFS과 같아지고 짧으면 잦은 Context Swtich로 오버헤드가 발생한다.

<br>
<br>

---

<br>
<br>

### 프로세스 동기화

멀티프로세싱, 멀티스레드 환경에서 **실행 순서 규칙**을 통해 **공유자원의 일관성**을 보장하는 것.

어떠한 문제를 방지하기 위함일까?

<br>
<br>

**경쟁 상태 ( Race Condition )**

- 여러 프로세스가 공유 자원에 대해 동시에 접근할 때, 실행순서에 따라 결과가 달라지는 상태이다. (동시성 문제)
- **임계영역 ( Critical Section )**
  - 자원을 동시에 접근하면 안되는 코드 영역이다.
- 상호배제를 통해 이를 해결할 수 있다. ( 자원은 한번에 한 프로세스만이 사용 )

  - **뮤텍스 ( Mutex )**
    - Locking 메커니즘
      - 오직 1개의 Lock만이 있다.
      - 프로세스가 Lock을 설정하고 임계영역에 진입하며 작업을 종료하면 Lock을 반환한다.
      - Lock을 설정한 프로세스만이 Lock을 해제할 수 있다. (Semaphore와의 차이점)
      - Lock을 갖기 전까지 busy waiting(무한루프)하지 않고 sleep상태로 들어 간다. (Spin Lock 과의 차이점)
  - **세마포어 ( Semaphore )**

    - Signaling 메커니즘
      - 뮤텍스와 달리 Lock을 설정하지않은 프로세스도 Signal를 보내서 락을 해제할 수 있다.
      - |                      |                                                 |
        | -------------------- | ----------------------------------------------- |
        | 카운팅 세마포어      | 여러개의 Lock를 갖을 수 있다.                   |
        | 이진 세마포어        | 1개의 Lock을 갖고 있어 Mutex처럼 사용할 수 있다 |
        | 강성 & 약성 세마포어 | 큐에서 프로세스를 깨우는 순서(FIFO)가 있는지.   |
    - <details>
      <summary>&nbsp; 코드로 이해</summary>
      <p>

      ```js
      struct semaphore {
        int count;
        queueType queue;
      };

      void semWait(semaphore s) {
        s.count--;
        if(s.count <= 0){
            // enqueue 프로세스
            // block 프로세스
        }
      }

      void semSignal(semaphore s) {
        s.count++;
        if(s.count <= 0){
            // dequeue 프로세스
            //
        }
      }
      ```

    </p>
    </details>

<br>
<br>

**데드락 ( Deadlock )**

<div style="text-align:center">
  <img src="https://lh3.googleusercontent.com/proxy/bL2pYcwcm4Jmo-B3IhRkUFpZg5KbSqGJXOjnAAn03N07QqJ4eHJGBtvvuQ6bPDxekdGpRRmVfS96_N0" width="49%">
  <p>먼저 놔라..</p>
</div>

- 서로가 서로의 자원을 받기를 무기한으로 대기하는 상황이다.
- **4가지 발생조건** ( 이중 하나라도 성립되지 않으면 문제를 해결할 수 있다. )
  - |                                            |                                                        |
    | ------------------------------------------ | ------------------------------------------------------ |
    | **상호 배제** ( **Mut**ual **Ex**clusion ) | 자원은 한번에 한 프로세스만이 사용한다.                |
    | 점유 대기                                  | 자원을 점유하면서 추가로 점유해야하는 자원을 대기한다. |
    | 비선점                                     | 할당된 자원을 도중에 강제로 빼앗을 수 없다.            |
    | 순환 대기                                  | 프로세스의 집합에서 순환 형태로 자원을 대기한다.       |
- **해결법**
  - 예방
    - 4가지 조건 중 하나를 깨뜨린다.
    - 비용이 많이 발생하여 시스템의 성능을 떨어질 수 있다.
  - 회피
    - 서로가 대기하지 않는 안전상태 ( safe state )를 보장한다.
    - 은행원 알고리즘.
      - 은행에서 오늘의 모든 출금을 충족시킬 수 있는 현금을 준비하는 것.
      - 자원 할당량을 사전에 파악하여
  - 탐지 및 회복
    - 데드락이 발생했는지 탐색을 하고 순환대기 상태를 깨뜨린다.
      - 자원 할당 그래프를 통해 탐색.
      - 프로세스를 하나씩 중단 or 전체 중단.
      - 자원 선점.

<br>
<br>

---

<br>
<br>

## 🗡 메모리 관리

<br>
<br>

### 페이징 · 세그멘테이션

- 프로세스는 각각 독립적인 메모리 공간을 갖는다. (서로 서로의 메모리 공간을 접근할 수 없다)
- **Swapping**
  - round-robin와 같이 다중 프로그래밍 환경에서 CPU 할당 시간이 끝난 프로세스의 메모리를 교체해주는 기법
  - 간단히 말하면 [ 보조 기억장치 <-> 메모리 ]
  - 메모리 공간이 부족할 때 진행된다.
- **Fragmentation 단편화**

  - 메모리에 프로세스들을 할당하면서 틈새에 사용할 수 없는 빈공간이 생기는 것.
  - `외부 단편화` 프로세스 사이사이의 빈 공간
  - `내부 단편화` 프로세스가 할당 받은 메모리 중 남은 공간

- 압축을 통해 빈공간을 끌어모아 자유공간을 확보할 수 있지만 작업효율이 좋지않다.
- 빈 공간을 없애기 위해서 `불연속 메모리 할당` 기법을 사용한다.

<br>
<br>

**페이징 ( Paging )**

- 메모리를 물리적으로 Frame 이라는 고정 크기로 분리했다면, 논리적으로는 Page라는 **고정 크기**의 블록으로 분리한다.
- Page와 Frame이 매핑되기에 Frame을 순서상관없이 메모리에 저장할 수 있다.
- 내부 단편화 문제의 비중이 늘어나게 된다.

<br>
<br>

**세그멘테이션 (Segmentation)**

- 고정 크기가 아닌 **서로 다른 크기**의 segmentation으로 분리한다.
- 테이블에 segment의 시작주소와 길이를 저장한다.
- 외부 단편화 문제의 비중이 늘어나게 된다.

<br>
<br>

---

<br>
<br>

### 페이지 교체

- `페이지 부재` 동작에 필요한 페이지가 물리 메모리 공간에 없으면 가져와야 한다.
- 앞으로 자주 사용되는 페이지를 메모리에 남겨 두는 것이 가장 이상적이다.

<br>
<br>

- **FIFO ( Frist In Frist Out )**

  - 메모리에 가장 오래된 페이지 교체

- **OPT ( Optimal Page Replacement )**

  - 가장 오랫동안 사용되지 않을 페이지 찾아 교체
  - 하지만 찾는 것이 사실상 불가능

- **LRU ( Least Recfently Used )**

  - 최적 알고리즘
  - 가장 오래 사용되지 않는 페이지를 교체

- **LFU (Least Frequently Used)**

  - 참조 횟수가 가장 적은 페이지를 교체

- **MFU (Most Frequently Used)**
  - 참조 횟수가 가장 많은 페이지 교체

<br>
<br>

---

<br>
<br>

### 가상메모리

- 프로세스의 일부분만 메모리에 적재하는 기법.
  - 프로그램이 물리 메모리 크기에 제약을 받지 않는다.
  - 더 많은 프로그램을 동시 실행할 수 있게 되어 CPU 이용률과 처리율은 높아진다.
  - swap에 필요한 입출력이 줄어들기 때문에 프로그램들이 빠르게 실행된다.
- **가상 주소 공간**
  - 물리 메모리에 자장하지 않고 다른 저장공간을 논리적으로 구분되는 곳
- 요구 페이징 전략
  - 초기에 프로세스가 필요한 것들만 물리 메모리에 저장
  - 한 번도 접근되지 않은 페이지는 물리 메모리에 적재되지 않는다.

<br>
<br>

---

<br>
<br>

### 캐시

- 캐시 메모리는 속도가 빠른 장치와 느린 장치간의 속도차에 따른 병목 현상을 줄이기 위한 범용 메모리이다.
- 캐시의 **지역성 원리**
  - `적중율(Hit rate)`을 극대화하기 위함이다.
    - CPU가 참조할 데이터가 캐시에 있으면 적중.
- 캐싱 라인
  - 데이터를 저장할 때 특정 자료구조를 사용하여 묶음으로 저장한다.
  - DB의 인덱싱과 비슷한 개념

<br>
<br>

---

<br>
<br>

## 🗡 번외

**Blocking / Non-blocking**

- **호출된 함수**가 자신의 일을 마칠 때까지 제어권을 가지고 있는지?
- `기다린다` = 대기 큐에 머문다.

**Synchronous / Asynchronous**

- **호출된 함수**의 수행 결과 및 종료를 호출된 함수 혼자 직접 신경 쓰고 처리하는지 (callback)
- system call의 완료를 기다리는지 ??
- `callback`이란?
  - 다른 함수의 인자로써 이용되는 함수
  - 어떤 이벤트에 의해 호출되어지는 함수
  - called at the back

<br>
<br>

---

<br>
<br>

## 🗡 참고

- https://gyoogle.dev/blog/computer-science/operating-system/Process%20vs%20Thread.html
- https://gmlwjd9405.github.io/2018/09/14/process-vs-thread.html
- [데드락](https://kukuta.tistory.com/281)
