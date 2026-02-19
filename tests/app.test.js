const request = require("supertest");
const app = require("../src/app");

describe("GET /api/users", () => {
  it("should return all users with status 200", async () => {
    const res = await request(app).get("/api/users");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThanOrEqual(2);
  });

  it("should return users filtered by role", async () => {
    const res = await request(app).get("/api/users?role=admin");
    expect(res.statusCode).toBe(200);
    res.body.forEach((user) => {
      expect(user.role).toBe("admin");
    });
  });

  it("should return 404 when no users match the filter", async () => {
    const res = await request(app).get("/api/users?role=nonexistent");
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty("message", "No users found");
  });
});

describe("GET /api/users/:id", () => {
  it("should return a single user by ID", async () => {
    const res = await request(app).get("/api/users/1");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("name");
    expect(res.body).toHaveProperty("email");
  });

  it("should return 404 for a non-existent user", async () => {
    const res = await request(app).get("/api/users/999");
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty("message", "User not found");
  });
});

describe("POST /api/users", () => {
  it("should create a new user and return 201", async () => {
    const res = await request(app)
      .post("/api/users")
      .send({ name: "Charlie", email: "charlie@example.com" });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body).toHaveProperty("name", "Charlie");
  });
});

describe("POST /api/login", () => {
  it("should return a token", async () => {
    const res = await request(app)
      .post("/api/login")
      .send({ email: "alice@example.com", password: "secret" });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token");
  });
});
