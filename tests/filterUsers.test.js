const { filterUsers } = require("../src/utils");

const mockUsers = [
  { id: 1, name: "Alice", role: "admin", active: true },
  { id: 2, name: "Bob", role: "user", active: true },
  { id: 3, name: "Charlie", role: "admin", active: false },
  { id: 4, name: "Diana", role: "user", active: false },
];

describe("filterUsers", () => {
  it("should return all users when no filters are provided", () => {
    const result = filterUsers(mockUsers);
    expect(result.length).toBe(4);
  });

  it("should filter users by role", () => {
    const result = filterUsers(mockUsers, "admin");
    expect(result.length).toBe(2);
    result.forEach(user => {
      expect(user.role).toBe("admin");
    });
  });

  it("should filter users by active status", () => {
    const result = filterUsers(mockUsers, undefined, true);
    expect(result.length).toBe(2);
    result.forEach(user => {
      expect(user.active).toBe(true);
    });
  });

  it("should filter users by role and active status", () => {
    const result = filterUsers(mockUsers, "admin", true);
    expect(result.length).toBe(1);
    expect(result[0].name).toBe("Alice");
  });

  it("should return empty array if no match", () => {
    const result = filterUsers(mockUsers, "admin", false);
    expect(result.length).toBe(1); // Charlie
  });
});
