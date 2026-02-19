/**
 * Filters users by role and active status
 * @param {Array} users
 * @param {string} role
 * @param {boolean} active
 * @returns {Array}
 */
function filterUsers(users, role, active) {
  let result = users;

  if (role) {
    result = result.filter(user => user.role === role);
  }

  if (typeof active === 'boolean') {
    result = result.filter(user => user.active === active);
  }

  return result;
}

module.exports = {
  filterUsers
};
