# NumPro
## Interactive application for solving numerical methods!

The primary goal of this project is to help students by providing an intuitive tool for problem-solving using numerical methods. To meet this objective, the project was developed to fulfill the following requirements:

* Correct implementation of the most important numerical methods discussed in the course.
* Easy to navigate interface that separates the different types of numerical methods.
* Effective user guiding and error handling.
* Relevant information display: graphs, criteria, and process tables.

## Try it yourself!

<a href="https://num-pro.vercel.app/" target="_blank">
<img src="https://github.com/Castro-1/NumProFront/assets/82610906/afcd73a8-dbf4-42fb-be5c-bc5c9d3355f9" width="50"/></a>

## How to use NumPro

1. Fork NumProFront:
```
git fork https://github.com/Castro-1/NumProFront.git
```

2. Install dependencies:
```
npm install
```

3. Run NumProFront:
```
npm run dev
```

At this point you will be running the frontend of NumPro locally and accessing the NumProBack API that is deployed. If you want to also use the NumProBack locally do the following:

1. Change API url:
Go to NumProFront -> src -> assets -> url, comment the deployed url and uncomment the localhost url.
<div><img src="https://github.com/Castro-1/NumProFront/assets/82610906/95c6c1a1-7c43-44c0-a4ed-ba7466422de3" /></div>

2. Fork NumProBack:
```
git fork https://github.com/Castro-1/NumProBack.git
```

3. Install dependencies:
```
pip install -r requirements.txt
```

4. Run NumProBack:
```
uvicorn main:app --reload
```

## Congratulations, You are running NumPro locally!

**PD:** If you find any bug on my code or have a better idea on how to implement it, please tell me, I would love to improve my skills!

