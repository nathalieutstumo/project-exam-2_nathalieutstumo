// import Head from "next/head";
// import Image from "next/image";
// import styles from "../../styles/Home.module.css";



// export default function Course({ title, kurs_description, kurs_info }) {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>People</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>{title}</h1>

//         <div>
//           <p>{kurs_description}</p>
//           <p>{kurs_info}</p>
//         </div>
//       </main>

     
//     </div>
//   );
// }

// export async function getStaticPaths() {
//   // Return a list of possible value for id

//   const getCourses = async () => {
//     const response = await fetch("http://localhost:1337/api/courses");
//     const data = await response.json();
//     const result = data.data;
//     return result.json;
//   };

//   const allCourses = await getCourses();

//   const paths = allCourses.map((course) => {
//     return {
//       params: {
//         id: course.id.toString(),
//       },
//     };
//   });

//   // paths = [
//   //   {
//   //     params: {
//   //       guid: "86a8a038-11df-4315-9d20-1d9f299a1007",
//   //     },
//   //   },
//   //   {
//   //     params: {
//   //       guid: "86a8a038-11df-4315-9d20-123123312",
//   //     },
//   //   },
//   // ];

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   // Fetch necessary data for the blog post using params.id
//   // const foundPerson = peopleJson.find((person) => person.guid === params.guid);

//   // We need to fetch the data for one spefici character here
//   const fetchCourse = async () => {
//     const response = await fetch(
//       `http://localhost:1337/api/courses/${params.id}`
//     );
//     const data = await response.json();
//     const result = data.data;
//     return result.json;
//   };
//   const foundCourse = await fetchCourse();

//   return {
//     props: foundCourse,
//   };
// }

// export default function Course({ kurs_id , kurs_description, kurs_info }) {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>People</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>


//         <div className='details'>
         
//         </div>
//       </main>

      
//     </div>
//   );
// }
// // if (typeof window === 'undefined') {
// // const queryString = location.search;
// // }
// // const params = new URLSearchParams(queryString);

// // const id = params.get('id');

// export async function getStaticPaths() {
//   // Return a list of possible value for id

//   const getCourseIds = async () => {
//     const response = await fetch("http://localhost:1337/api/courses/");
//     const data = await response.json();
//     const result = data.data;
//     return result.json;
//   };

//   const allCourses = await getCourseIds();

//   const paths = allCourses.map((course) => {
//     return {
//       params: {
//         id: course.id.toString(),
//       },
//     };
   
//   });

 

//   // paths = [
//   //   {
//   //     params: {
//   //       guid: "86a8a038-11df-4315-9d20-1d9f299a1007",
//   //     },
//   //   },
//   //   {
//   //     params: {
//   //       guid: "86a8a038-11df-4315-9d20-123123312",
//   //     },
//   //   },
//   // ];
  
//   return {
//     paths,
//     fallback: false,
//   };
  
// }



// export async function GetMeDetails() {
//     const response = await fetch('http://localhost:1337/api/courses/' + id );
//     const data = await response.json();
//     const result = data.data;
//     console.log(result)
//     // title = result.attributes.kurs_id;
    
// 	// console.log('All results from data', jsonArray);
// console.log(result)

// // document.querySelector('.course-title').innerHTML = result.attributes.title;
// // document.querySelector('.kurs_description').src = result.attributes.kurs_description;
// // document.querySelector('.kurs_info').innerHTML =  result.attributes.kurs_info;
// document.querySelector('.details').innerHTML += `
// <h1>${result.attributes.kurs_id}</h1>
// <h2>${result.attributes.kurs_description}</h2>
// <h3>${result.attributes.kurs_info}</h3>
// <h4 className="title">${result.attributes.kurs_start_title}</h4>
// <h4>${result.attributes.kurs_start}</h4>
// <h4 className="title">${result.attributes.kurs_content_title}</h4>
// <h4>${result.attributes.kurs_content}</h4>
// <h4 className="title">${result.attributes.kurs_arbeidsform_title}</h4>
// <h4>${result.attributes.kurs_arbeidsform}</h4>
// <h4 className="title">${result.attributes.kurs_tema_title}</h4>
// <h4>${result.attributes.kurs_tema}</h4>
// <h4 className="title">${result.attributes.kurs_tid_sted_title}</h4>
// <h4>${result.attributes.kurs_tid_sted}</h4>
// <h4 className="title">${result.attributes.kurs_registration_title}</h4>
// <h4>${result.attributes.kurs_registration}</h4>
// <h4 className="title">${result.attributes.kurs_target_audience}</h4>
// <h4>${result.attributes.kurs_target_audience_filter}</h4>
// <a href="#">Les mer/påmelding</a>
// `
// }


// GetMeDetails();
