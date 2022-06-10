# Villa SULT - project exam 2

![image](https://user-images.githubusercontent.com/52622303/164316813-4b12d99f-aeb7-4069-85cf-e72b3a50ac99.png)

## Description

Villa SULT is an informative site for an eating disorder clinic who has courses for both health personal and people that are affected and close to someone with an eating disorder.

## Built With

Dependencies used in the project:

- [Next.js](https://nextjs.org/)
- [React.js](https://reactjs.org/)
- [Axios](https://axios-http.com/)
- [Nookies](https://github.com/maticzav/nookies)
- [Formik](https://formik.org/)
- [Yup](https://github.com/jquense/yup)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Installing

This is where you list how to get the project started. It typically just includes telling a person to clone the repo and then to install the dependencies e.g.

1. Clone the repo:

```bash
git clone git@github.com:NoroffFEU/portfolio-1-example.git
```

2. Install the dependencies:

```
npm install next react react-dom
```

```
npm install axios
```

```
npm install nookies
```

```
npm install formik -- save
```

```
npm install yup
```

### Running

To run the app, run the following commands:

```bash
npm run start
```

## Contributing

The project is utilising next.js and global styling in a global.css file. The folder structure is simple with all pages in a folder with the same name, that can be found in the root of the project, and contains folders for each page on the site. All the page folders contain an index.js file where the main code for that page is found. In the pages/details folder there is also a [ id ].js file which is used to fetch the id’s from the api. The pages/api folder contains login.js and logout.js which is used for logging in and out from the admin section.

There is an img folder in the root with the images that are used in the boxes on the homepage and the logo.

In the root of the project you will also find a components folder which contains folders that are pretty self-explanatory. The api is down so if you want the code that passes the api information to work you will have to use another api and change the code accordingly so you get the information.

## Contact

This is where you can leave your social links for people to contact you, such as a LinkedIn profile or Twitter link e.g.

[My Twitter page](www.twitter.com)

[My LinkedIn page](www.linkedin.com)
