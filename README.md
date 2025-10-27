# 🍕 Pizza Selector

A React-based pizza ingredient selector with Vite and Tailwind CSS.

## Project Setup Complete ✅

- ✅ Vite + React configured
- ✅ Tailwind CSS integrated
- ✅ Build system working
- ✅ Pizza data with validation

## Project Structure

```
pizza-selector/
├── src/
│   ├── data/
│   │   └── pizzaData.js    # 88 ingredients, 45 pizzas with validation
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css           # Tailwind directives
├── dist/                   # Build output
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Data Structure

### Ingredients
- 88 unique ingredients with key-value pairs
- Keys: snake_case identifiers (e.g., `farska_champinjoner`)
- Values: Display names (e.g., `'Färska champinjoner'`)

### Pizzas
- 45 pizzas from the menu
- Each pizza has: `id`, `name`, `ingredients[]`, `price`
- Ingredient arrays use keys that reference the INGREDIENTS object

### Validation
The `validatePizzas()` function runs automatically on import and:
- Checks that all pizza ingredient keys exist in INGREDIENTS
- Throws descriptive errors for missing ingredients
- Logs success message when validation passes

## Available Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Current Status

The app currently displays:
- Number of pizzas loaded (45)
- Number of unique ingredients (88)
- Validation success message

## Next Steps

Ready to build the ingredient selector UI with:
- Ingredient filter checkboxes
- Pizza cards displaying matching pizzas
- Real-time filtering based on selected ingredients
