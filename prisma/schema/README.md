# Modular Prisma Schema

This directory contains modular Prisma schema files organized by domain for better maintainability and scalability.

## Structure

### `base.prisma`
Contains the core Prisma configuration:
- Generator settings
- Datasource configuration
- Environment variables

### `auth.prisma`
Authentication-related models:
- `Account` - OAuth provider accounts
- `Session` - User sessions
- `VerificationToken` - Email verification tokens

### `user.prisma`
User management models:
- `User` - Main user model
- `Role` - User role enumeration

### `content.prisma`
Content and data models:
- `Post` - Blog posts or content items
- Future content models can be added here

## Adding New Models

When adding new models, follow these guidelines:

1. **Create domain-specific files**: Group related models together
   ```
   prisma/schema/
   ├── ecommerce.prisma    # Product, Order, Cart models
   ├── messaging.prisma    # Message, Chat, Notification models
   ├── analytics.prisma    # Event, Metric, Report models
   ```

2. **Use consistent naming**:
   - File names should be lowercase with domain names
   - Model names should be PascalCase
   - Field names should be camelCase

3. **Add proper documentation**:
   - Include comments explaining the purpose of each model
   - Document complex relationships
   - Add field descriptions for business logic

4. **Update main schema**: The main `schema.prisma` file should be updated to include all models from the modular files.

## Example: Adding E-commerce Models

```prisma
// prisma/schema/ecommerce.prisma
// E-commerce related models

model Product {
  id          String   @id @default(auto()) @map("_id") @db.ObjectId
  name        String
  description String?
  price       Float
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  // Relations
  orders      OrderItem[]
  
  @@map("products")
}

model Order {
  id        String      @id @default(auto()) @map("_id") @db.ObjectId
  userId    String      @db.ObjectId
  status    OrderStatus @default(PENDING)
  total     Float
  createdAt DateTime    @default(now())
  updatedAt DateTime    @updatedAt
  
  // Relations
  user      User        @relation(fields: [userId], references: [id])
  items     OrderItem[]
  
  @@map("orders")
}

enum OrderStatus {
  PENDING
  CONFIRMED
  SHIPPED
  DELIVERED
  CANCELLED
}
```

## Benefits

- **Maintainability**: Easier to find and modify related models
- **Scalability**: Can handle large schemas without becoming unwieldy
- **Team Collaboration**: Multiple developers can work on different domains
- **Code Organization**: Clear separation of concerns
- **Future Growth**: Easy to add new domains without cluttering

## Migration Notes

When making schema changes:
1. Update the appropriate modular file
2. Update the main `schema.prisma` file
3. Run `prisma generate` to update the client
4. Create and run migrations with `prisma migrate dev`