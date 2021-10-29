// dynamically creates the intern card on the html
const internCard = employee => {
    return `
    <div class="col">
    <div class="card p-2 mt-4" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${employee.name}</h5>
          <p class="card-text"><i class="fas fa-user-graduate"></i> ${employee.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${employee.id}</li>
          <li class="list-group-item">Email: ${employee.email}</li>
          <li class="list-group-item">School: ${employee.school}</li>
        </ul>
      </div>
</div>
    `
}

module.exports = internCard;