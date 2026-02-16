const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/User');
const Product = require('../src/models/Product');

describe('Product Routes', () => {
  let token;
  let user;

  beforeEach(async () => {
    user = await User.create({
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123'
    });

    const response = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'test@example.com',
        password: 'password123'
      });

    token = response.body.token;
  });

  describe('POST /api/products', () => {
    it('should create a new product', async () => {
      const productData = {
        name: 'Test Product',
        description: 'Test description',
        price: 99.99,
        quantity: 10
      };

      const response = await request(app)
        .post('/api/products')
        .set('Authorization', `Bearer ${token}`)
        .send(productData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.data.name).toBe(productData.name);
      expect(response.body.data.description).toBe(productData.description);
      expect(response.body.data.price).toBe(productData.price);
      expect(response.body.data.quantity).toBe(productData.quantity);
    });

    it('should not create product without authentication', async () => {
      const productData = {
        name: 'Test Product',
        description: 'Test description',
        price: 99.99,
        quantity: 10
      };

      const response = await request(app)
        .post('/api/products')
        .send(productData)
        .expect(401);

      expect(response.body.success).toBe(false);
    });

    it('should not create product with invalid data', async () => {
      const productData = {
        name: '',
        description: 'Test description',
        price: -10,
        quantity: -5
      };

      const response = await request(app)
        .post('/api/products')
        .set('Authorization', `Bearer ${token}`)
        .send(productData)
        .expect(400);

      expect(response.body.success).toBe(false);
    });
  });

  describe('GET /api/products', () => {
    beforeEach(async () => {
      await Product.create({
        name: 'Product 1',
        description: 'Description 1',
        price: 10.99,
        quantity: 5,
        user: user._id
      });

      await Product.create({
        name: 'Product 2',
        description: 'Description 2',
        price: 20.99,
        quantity: 10,
        user: user._id
      });
    });

    it('should get all products for authenticated user', async () => {
      const response = await request(app)
        .get('/api/products')
        .set('Authorization', `Bearer ${token}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.length).toBe(2);
      expect(response.body.count).toBe(2);
    });

    it('should not get products without authentication', async () => {
      const response = await request(app)
        .get('/api/products')
        .expect(401);

      expect(response.body.success).toBe(false);
    });
  });

  describe('GET /api/products/:id', () => {
    let product;

    beforeEach(async () => {
      product = await Product.create({
        name: 'Test Product',
        description: 'Test description',
        price: 99.99,
        quantity: 10,
        user: user._id
      });
    });

    it('should get a single product', async () => {
      const response = await request(app)
        .get(`/api/products/${product._id}`)
        .set('Authorization', `Bearer ${token}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data._id).toBe(product._id.toString());
      expect(response.body.data.name).toBe(product.name);
    });

    it('should not get product without authentication', async () => {
      const response = await request(app)
        .get(`/api/products/${product._id}`)
        .expect(401);

      expect(response.body.success).toBe(false);
    });

    it('should not get product that does not exist', async () => {
      const fakeId = '507f1f77bcf86cd799439011';
      const response = await request(app)
        .get(`/api/products/${fakeId}`)
        .set('Authorization', `Bearer ${token}`)
        .expect(404);

      expect(response.body.success).toBe(false);
    });
  });

  describe('PUT /api/products/:id', () => {
    let product;

    beforeEach(async () => {
      product = await Product.create({
        name: 'Test Product',
        description: 'Test description',
        price: 99.99,
        quantity: 10,
        user: user._id
      });
    });

    it('should update a product', async () => {
      const updateData = {
        name: 'Updated Product',
        description: 'Updated description',
        price: 199.99,
        quantity: 20
      };

      const response = await request(app)
        .put(`/api/products/${product._id}`)
        .set('Authorization', `Bearer ${token}`)
        .send(updateData)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.name).toBe(updateData.name);
      expect(response.body.data.description).toBe(updateData.description);
      expect(response.body.data.price).toBe(updateData.price);
      expect(response.body.data.quantity).toBe(updateData.quantity);
    });

    it('should not update product without authentication', async () => {
      const updateData = {
        name: 'Updated Product'
      };

      const response = await request(app)
        .put(`/api/products/${product._id}`)
        .send(updateData)
        .expect(401);

      expect(response.body.success).toBe(false);
    });

    it('should not update product that does not exist', async () => {
      const fakeId = '507f1f77bcf86cd799439011';
      const updateData = {
        name: 'Updated Product'
      };

      const response = await request(app)
        .put(`/api/products/${fakeId}`)
        .set('Authorization', `Bearer ${token}`)
        .send(updateData)
        .expect(404);

      expect(response.body.success).toBe(false);
    });
  });

  describe('DELETE /api/products/:id', () => {
    let product;

    beforeEach(async () => {
      product = await Product.create({
        name: 'Test Product',
        description: 'Test description',
        price: 99.99,
        quantity: 10,
        user: user._id
      });
    });

    it('should delete a product', async () => {
      const response = await request(app)
        .delete(`/api/products/${product._id}`)
        .set('Authorization', `Bearer ${token}`)
        .expect(200);

      expect(response.body.success).toBe(true);

      // Verify product is deleted
      const deletedProduct = await Product.findById(product._id);
      expect(deletedProduct).toBeNull();
    });

    it('should not delete product without authentication', async () => {
      const response = await request(app)
        .delete(`/api/products/${product._id}`)
        .expect(401);

      expect(response.body.success).toBe(false);
    });

    it('should not delete product that does not exist', async () => {
      const fakeId = '507f1f77bcf86cd799439011';
      const response = await request(app)
        .delete(`/api/products/${fakeId}`)
        .set('Authorization', `Bearer ${token}`)
        .expect(404);

      expect(response.body.success).toBe(false);
    });
  });

  describe('Product Authorization', () => {
    let otherUser;
    let otherToken;
    let product;

    beforeEach(async () => {
      // Create another user
      otherUser = await User.create({
        name: 'Other User',
        email: 'other@example.com',
        password: 'password123'
      });

      const loginResponse = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'other@example.com',
          password: 'password123'
        });

      otherToken = loginResponse.body.token;

      // Create product owned by first user
      product = await Product.create({
        name: 'Test Product',
        description: 'Test description',
        price: 99.99,
        quantity: 10,
        user: user._id
      });
    });

    it('should not allow other user to access product', async () => {
      const response = await request(app)
        .get(`/api/products/${product._id}`)
        .set('Authorization', `Bearer ${otherToken}`)
        .expect(401);

      expect(response.body.success).toBe(false);
      expect(response.body.message).toContain('Not authorized');
    });

    it('should not allow other user to update product', async () => {
      const updateData = {
        name: 'Updated Product'
      };

      const response = await request(app)
        .put(`/api/products/${product._id}`)
        .set('Authorization', `Bearer ${otherToken}`)
        .send(updateData)
        .expect(401);

      expect(response.body.success).toBe(false);
      expect(response.body.message).toContain('Not authorized');
    });

    it('should not allow other user to delete product', async () => {
      const response = await request(app)
        .delete(`/api/products/${product._id}`)
        .set('Authorization', `Bearer ${otherToken}`)
        .expect(401);

      expect(response.body.success).toBe(false);
      expect(response.body.message).toContain('Not authorized');
    });
  });
});
