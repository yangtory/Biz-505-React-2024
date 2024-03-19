# React NextJS, Prisma 프로젝트

- 프로젝트 폴더에서 다음 실행

```bash
npm install prisma --save-dev
npm install @prisma/client
```

- prisma DB 연결 환경 설정

```bash
npx prisma init --datasource-provider mysql
```

- 기존의 DBMS 의 Schema 를 import 하는 명령어
- `주의` : schema.prisma 파일에 model 정보가 있다면 새로운 import 를 하면서 기존 model 이 삭제될 수 있음

```bash
npx prisma db pull
```

- 만약 model 을 코딩했다면
- db Schema 를 DBMS 에 export
- `주의` : 기존 DBMS 에 데이터가 있는 경우 데이터가 삭제 됨

```bash
npx prisma db push
```

- 만약 model 코드를 변경했다면 업그레이드하기
- `주의` : 기존 DBMS 에 데이터가 있는 경우 데이터가 삭제 됨

```bash
npx prisma migrate -dev
```

- prisma compile 하기
- db와 프로젝트 연결

```bash
npx prisma generate
```

## 프로젝트를 git 에서 clone 했을때

- git 에 push 할때 .env 파일과 prisma 컴파일 정보가 업로드되지 않는다
- clone 을 한 후에는 프로젝트를 다시 설정해야 한다

```.env
DATABASE_URL="mysql://USERNAME:PASSWORD@localhost:3306/scoreDB"
```

- 컴파일 하기

```bash
npx prisma generate
```
