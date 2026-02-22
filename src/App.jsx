import Layout from "./components/Layout";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import ResultCard from "./components/ResultCard";
import { useSearch } from "./hooks/useSearch";
import { categories } from "./data/shortcuts";

function App() {
  const { query, setQuery, selectedCategory, setSelectedCategory, results, clearSearch } =
    useSearch();

  const isSearching = query.trim().length >= 2;

  // Group results by category when not searching
  const grouped = !isSearching
    ? categories
        .map((cat) => ({
          ...cat,
          items: results.filter((r) => r.category === cat.id),
        }))
        .filter((g) => g.items.length > 0)
    : null;

  return (
    <Layout>
      <div className="space-y-6">
        <SearchBar
          query={query}
          setQuery={setQuery}
          clearSearch={clearSearch}
          resultCount={results.length}
        />

        <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <div className="space-y-6" role="region" aria-label="Search results">
          {isSearching ? (
            results.length > 0 ? (
              <div className="space-y-3">
                {results.map((shortcut) => (
                  <ResultCard key={shortcut.id} shortcut={shortcut} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-text-muted">
                <p className="text-lg">No shortcuts found for "{query}"</p>
                <p className="text-sm mt-2">
                  Try different keywords or browse categories above
                </p>
              </div>
            )
          ) : (
            grouped.map((group) => (
              <section key={group.id} aria-labelledby={`heading-${group.id}`}>
                <h2
                  id={`heading-${group.id}`}
                  className="text-text-secondary text-sm font-semibold uppercase tracking-wider mb-3"
                >
                  {group.label}
                </h2>
                <div className="space-y-3">
                  {group.items.map((shortcut) => (
                    <ResultCard key={shortcut.id} shortcut={shortcut} />
                  ))}
                </div>
              </section>
            ))
          )}
        </div>
      </div>
    </Layout>
  );
}

export default App;
