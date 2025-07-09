```md
# mangop

Minimal Mongoose schema options helper.

Simplifies repetitive schema configuration like hiding fields, converting `_id` to `id`, and enabling timestamps by default.

---

## 🔧 Installation

```bash
npm install mangop
```

---

## 🚀 Usage

```ts
import mongoose from "mongoose"
import mangop from "mangop"

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  mangop({
    hideFields: ["password"]
  })
)

export default mongoose.model("User", userSchema)
```

---

## ⚙️ Options

| Name         | Type         | Default | Description                            |
|--------------|--------------|---------|----------------------------------------|
| `hideFields` | `string[]`   | `[]`    | Field names to hide in `.toJSON()`     |
| `virtualId`  | `boolean`    | `true`  | Add `id` field from `_id`              |
| `timestamps` | `boolean`    | `true`  | Enable `createdAt` and `updatedAt`     |

---

## 📤 Output Example

Given:
```ts
mangop({ hideFields: ["password"] })
```

Returned object:
```json
{
  "id": "64a123...",
  "email": "test@example.com",
  "createdAt": "2025-07-09T10:00:00.000Z",
  "updatedAt": "2025-07-09T10:05:00.000Z"
}
```

Fields like `_id`, `__v`, and `password` are automatically removed.

---

## ✅ Why use `mangop`?

- Less boilerplate in every model
- Safe response shaping (no password leaks)
- Clean and consistent schema options
- 100% TypeScript support

---

## 📄 License

MIT — Akbar Iskanderov
```
