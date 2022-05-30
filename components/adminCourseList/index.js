export async function GetCoursesList() {
    const response = await fetch('http://localhost:1337/api/courses/');
    const data = await response.json();
    const result = data.data;
   
    // console.log('All results from data', jsonArray);
console.log(result)
function CourseCards(array){
    for (let i = 0; i < array.length; i++)
    document.querySelector('.admin-courses_list').innerHTML += `
    <div class="admin-courses_card">
    <div class="short-title_box">
    <h3>${array[i].attributes.short_title}</h3>
    </div>
    <div class="se_btn">
    <a href="/details?id=${array[i].id}">Se</a>
    </div>
    <div class="endre_btn">
    <a href="/details?id=${array[i].id}">Endre</a>
    </div>
    <div class="slett_btn">
    <a href="/details?id=${array[i].id}">Slett</a>
    </div>

   
    </div>
    `;
    }
    CourseCards(result);
}


GetCoursesList();