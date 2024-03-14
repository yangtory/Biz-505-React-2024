# TEXTY 프로젝트 시작

## ReactJS 프로젝트

## NextJS 프로젝트

- `React` 와 `NextJS` Framework 가 적용된 프로젝트 생성하기

```bash
npx create-next-app@latest [프로젝트]
npm init next-app [프로젝트]
yarn create-next-app [프로젝트]
```

- 명령 실행 후 옵션 선택하기
  ![명령 실행 후 옵션](images/image.png)

  ## git clone 한 prisma project 재 설정

  - `git hub` 에서 clone 한 prisma project 는 몇가지 설정 파일이 생략되고, 설정 환경이 초기화 되어 버린다. clone 한 프로젝트를 다시 재설정 해주어야 한다.
  - `.env` 생성하고, 다음 항목을 작성한다.

  ```json
  DATABASE_URL = "mysql://[userid]:[password]@localhost:3306/[mydb]"
  ```

  - 최초 prisma 프로젝트는 시작할때 `npx prisma init` 를 실행했는데 clone 한 projext 는 `init` 를 건너뛴다.
  - 생성하기 : `npx prisma generate`

- 업데이트 메시지 나타나면 업데이트 실행하기

```bash
Update available 5.10.2 -> 5.11.0
  Run the following to update
    npm i --save-dev prisma@latest
    npm i @prisma/client@latest
```

- Database 와 table(최초) 생성하기

```bash
npx prisma db push
```

- schema.prisma 파일에 model 을 새로 생성, 변경했을 경우
- y눌러서 실행하기

```bash
npx prisma migrate dev --name init
```
