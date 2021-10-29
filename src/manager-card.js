// dynamically creates the manager card on the html
const managerCard = employee => {
    return `
    <div class="col">
    <div class="card p-2 mt-4" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${employee.name}</h5>
          <p class="card-text"><i class="fas fa-mug-hot"></i> ${employee.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${employee.id}</li>
          <li class="list-group-item">Email: ${employee.email}</li>
          <li class="list-group-item">Office Number: ${employee.officeNumber}</li>
        </ul>
      </div>
</div>
    `
};

module.exports = managerCard;