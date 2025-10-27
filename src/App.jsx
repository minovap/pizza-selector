import { useState } from 'react'
import { INGREDIENTS, PIZZAS } from './data/pizzaData'

function App() {
  const [selectedIngredients, setSelectedIngredients] = useState([])

  // Top 20 ingredients - edit this array to change order and content
  const topIngredients = [
    'oxfile',
    'skinka',
    'tonfisk',
    'rakat',
    'champinjoner',
    'lök',
    'ananas',
    'paprika',
    'bacon',
    'salami'
  ]

  // Filter pizzas based on selected ingredients
  const filteredPizzas = selectedIngredients.length === 0
    ? PIZZAS
    : PIZZAS.filter(pizza =>
        selectedIngredients.every(ing => pizza.ingredients.includes(ing))
      )

  const toggleIngredient = (ingredient) => {
    setSelectedIngredients(prev =>
      prev.includes(ingredient)
        ? prev.filter(ing => ing !== ingredient)
        : [...prev, ingredient]
    )
  }

  const resetFilters = () => {
    setSelectedIngredients([])
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-white border-b-2 border-orange-200 shadow-lg z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Filter Controls */}
          <div className="mb-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-end gap-3 mb-4">
              <button
                onClick={resetFilters}
                disabled={selectedIngredients.length === 0}
                className="px-5 py-2.5 bg-red-500 hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg disabled:shadow-none"
              >
                ✕ Rensa alla
              </button>
            </div>
            
            {/* Ingredient Toggle Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {topIngredients.map(ingredient => {
                const isSelected = selectedIngredients.includes(ingredient)
                return (
                  <button
                    key={ingredient}
                    onClick={() => toggleIngredient(ingredient)}
                    className={`
                      relative px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200
                      border-2 min-h-[3rem] flex items-center justify-center text-center
                      ${isSelected
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white border-orange-600 shadow-lg scale-105 ring-2 ring-orange-300'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-orange-400 hover:bg-orange-50 shadow-sm hover:shadow-md'
                      }
                    `}
                  >
                    {isSelected && (
                      <span className="absolute top-1 right-1 text-white text-xs">✓</span>
                    )}
                    {INGREDIENTS[ingredient]}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Pizza List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredPizzas.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPizzas.map(pizza => (
              <div
                key={pizza.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-orange-300"
              >
                {/* Pizza Header */}
                <div className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-white">{pizza.name}</h3>
                    <div className="bg-white px-3 py-1 rounded-full">
                      <span className="text-lg font-extrabold text-orange-600">{pizza.price} kr</span>
                    </div>
                  </div>
                </div>
                
                {/* Ingredients */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {/* Selected ingredients first */}
                    {pizza.ingredients
                      .filter(ing => selectedIngredients.includes(ing))
                      .map(ing => (
                        <span
                          key={ing}
                          className="px-3 py-1.5 rounded-full text-xs font-medium transition-colors bg-orange-500 text-white ring-2 ring-orange-300"
                        >
                          ✓ {INGREDIENTS[ing]}
                        </span>
                      ))
                    }
                    {/* Non-selected ingredients after */}
                    {pizza.ingredients
                      .filter(ing => !selectedIngredients.includes(ing))
                      .map(ing => (
                        <span
                          key={ing}
                          className="px-3 py-1.5 rounded-full text-xs font-medium transition-colors bg-gray-100 text-gray-700 border border-gray-300"
                        >
                          {INGREDIENTS[ing]}
                        </span>
                      ))
                    }
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl shadow-lg border-2 border-dashed border-gray-300">
            <div className="text-6xl mb-4">😕</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">Inga pizzor hittades</h3>
            <p className="text-gray-500 mb-6">Inga pizzor innehåller alla dessa ingredienser tillsammans</p>
            <button
              onClick={resetFilters}
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-colors shadow-md"
            >
              Rensa filter och försök igen
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
