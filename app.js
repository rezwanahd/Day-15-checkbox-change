const skills = document.querySelectorAll('.skill');
const all_list = document.querySelector('.all-list');



skills.forEach(skill => {

    skill.addEventListener('change', function() {

        let all_data =document.querySelectorAll('.skill:checked');

       let skills_arr = [];

       all_data.forEach(data => {

        skills_arr.push(data.value);

           
       });
       
       
       let list = '';
       skills_arr.map( data => {
        
        list += `<li class="list-group-item">${data}</li><br>`

        

       })

       all_list.innerHTML = list;


});


});