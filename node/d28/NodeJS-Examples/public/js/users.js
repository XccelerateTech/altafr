$(()=>{
    $.get('/api/prisoners').then((data)=>{
        data.forEach(e=>{
            $('#user-list').append(User(escapeHtml(e.first_name),escapeHtml(e.last_name),escapeHtml(e.email)));
        });
    });

    function escapeHtml(unsafe) {
        return unsafe
             .replace(/&/g, "&amp;")
             .replace(/</g, "&lt;")
             .replace(/>/g, "&gt;")
             .replace(/"/g, "&quot;")
             .replace(/'/g, "&#039;");
     }
    const User = (firstName, lastName,email)=>{
        return `
            <div class="info-container">
                <img class="avator" src="/images/male-user-100.png" alt="avator">
                <label class="lbl-info">First Name: </label><p>${firstName}</p>
                <label class="lbl-info">Last Name: </label><p>${lastName}</p>
                <label class="lbl-info">Email: </label><p>${email}</p>
            </div>`
    };
})