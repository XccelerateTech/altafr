// $(()=>{
//     const person = (firstName, lastName, profession, countryOfOrigin)=>{
//         return `
//             <div class="info-container">
//                 <label class="lbl-info">First Name: </label><p>${firstName}</p>
//                 <label class="lbl-info">Last Name: </label><p>${lastName}</p>
//                 <label class="lbl-info">Occupation: </label><p>${profession}</p>
//                 <label class="lbl-info">Country of Origin: </label><p>${countryOfOrigin}</p>
//             </div>`
//     };


// })

const californiaPerson = Handlebars.compile(`
{{#each people}}
{{ this }}
<h1>Person</h1>
<h3>First name:</h3>
{{first}}
<h3>Last name:</h3>
{{name}}
<h3>Profession:</h3>
{{profession}}
<h3>Country of Origin</h3>
{{born}}
<br/>
{{/each}}
`)

function reloadPeople(person){
    $('#people-list').html(californiaPerson({person: person}))
}