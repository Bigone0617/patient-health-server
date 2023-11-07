## 실행 방법
1. 터미널을 열어 원하는 디렉토리로 간다 -> git clone https://github.com/Bigone0617/patient-health-server.git
2. npm install
  - 주의할점 :  node version 16 이상.
3. app.module.ts 폴더를 연다.
  - mongooseModule.forRoot 함수 arguments로 이메일로 제공받은 값을 넣는다.
4. npm run start
  - 주의할점 : 다른곳에서 port:3200을 사용중이면 안된다.

## Error

**@nestjs/class-validater**
- 위 모듈을 사용하기 위해서는 아래 모듈도 같이 설치가 되어야 한다.
  - class-validator
  - class-transformer

## 사용 모듈
- @nestjs/class-validator
- @nestjs/mongoose 


## 문제풀이
- app.controller에서 비지니스 로직 컨트롤 하는 것이 아닌, api폴더 안에 각각의 비지니스 로직별로 폴더를 분리.
- 기저질환은 단일 선택이므로 string
- 통증부위는 다중 선택이므로 string[]
- 환자 관련된 api는 patient 폴더에 구성.
  - 기본적인 CRUD 구성.
  - 검색용 api 추가.