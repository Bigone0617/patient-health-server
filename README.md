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
