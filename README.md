# Libraries, frameworks, technologies
-	Development:
1.	Prisma: https://www.prisma.io/ 
2.	Postgres: https://www.postgresql.org/ 
3.	Next JS: https://nextjs.org/ 
4.	Email JS: https://www.emailjs.com/ 
5.	React hook form: https://react-hook-form.com/ 
6.	Yup validator: https://www.npmjs.com/package/yup 
7.	Typescript: https://www.typescriptlang.org/ 
8.	NextAuth.js: https://next-auth.js.org/ 
-	UI:
9.	Mui material: https://mui.com/ 
10.	tailwind UI: https://tailwindui.com/ 
11.	Tailwind: https://tailwindcss.com/ 
-	Production:
12.	Vercel: https://vercel.com
13.	GitHub actions: https://docs.github.com/es/actions 

# How to use it
Todo next It is software with academic reasons which helps you manage and organize tasks in a safe and reliable way.

- You can log in with your Google account, github, or by entering your credentials. If you do not have credentials, the system will create a user for you.

![imagen](https://github.com/wilmer-energy/next_test/assets/96258090/1769294c-7c0c-4168-8319-3a99690087cb)

- You can add your task, and when you complete it, you can click on check. You can delete all completed tasks with the Delete tasks completed button.

![imagen](https://github.com/wilmer-energy/next_test/assets/96258090/41c2d576-5524-49e8-815c-f74c169219ac)

- In the items section you can see a list of trial items which you can add to your shopping cart.

![imagen](https://github.com/wilmer-energy/next_test/assets/96258090/5956dc66-385a-4129-a1d4-d7df00c9ad2d)

- In the shopping cart you can see all the added items and edit them.

![imagen](https://github.com/wilmer-energy/next_test/assets/96258090/06f63dd8-bd06-4f86-9a70-c771588349a2)

- You can send me an feedback email, or want my services.

![imagen](https://github.com/wilmer-energy/next_test/assets/96258090/30e36821-fbec-4674-a96f-82eb00def573)

# Development
Steps to build the app in development


1. Create the database
```
docker compose up -d
```

2. Create a copy of .env.template and rename it to .env
3. Replace environment variables
4. Run the command ```npm install```
5. Run the command ```npm run dev```
6. Run these Prisma commands
```
npx prisma migrate dev
npx prisma generate
```
7. Run the SEED to [create local database](localhost:3000/api/seed)


## Note: Default user
__user:__  test1@google.com
__password:__ 123456


# Prisma commnads
```
npx prisma init
npx prisma migrate dev
npx prisma generate




# Prod


# Stage
