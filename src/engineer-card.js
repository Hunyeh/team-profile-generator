// dynamically creates the manager card on the html
const engineerCard = employee => {
    return `
    <div class="col">
    <div class="card p-2 mt-4" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${employee.name}</h5>
          <p class="card-text"><i class="fa-solid fa-glasses"></i> ${employee.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${employee.id}</li>
          <li class="list-group-item">Email: ${employee.email}</li>
          <a class="list-group-item" href="https://github.com/${employee.github}">Github: ${employee.github}</a>
        </ul>
      </div>
</div>
    `
};

module.exports = engineerCard;