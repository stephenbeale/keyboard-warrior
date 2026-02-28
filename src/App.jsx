import Layout from "./components/Layout";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import ResultCard from "./components/ResultCard";
import WorkflowCard from "./components/WorkflowCard";
import CoffeeNudge from "./components/CoffeeNudge";
import { useSearch } from "./hooks/useSearch";
import { useFavourites } from "./hooks/useFavourites";
import { categories } from "./data/shortcuts";

function App() {
  const { query, setQuery, selectedCategory, setSelectedCategory, results, clearSearch } =
    useSearch();
  const { toggleFavourite, isFavourite, count: favouriteCount } = useFavourites();

  const isSearching = query.trim().length >= 2;

  // Filter by favourites if selected
  const filteredResults =
    selectedCategory === "favourites"
      ? results.filter((r) => isFavourite(r.id))
      : results;

  // Group results by category when not searching
  const grouped = !isSearching
    ? categories
        .map((cat) => {
          const catItems = filteredResults.filter((r) => r.category === cat.id);
          return {
            ...cat,
            shortcuts: catItems.filter((r) => r.type === "shortcut"),
            workflows: catItems.filter((r) => r.type === "workflow"),
          };
        })
        .filter((g) => g.shortcuts.length > 0 || g.workflows.length > 0)
    : null;

  return (
    <Layout>
      <div className="space-y-6">
        <SearchBar
          query={query}
          setQuery={setQuery}
          clearSearch={clearSearch}
          resultCount={filteredResults.length}
        />

        <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          favouriteCount={favouriteCount}
        />

        <div className="space-y-6" role="region" aria-label="Search results">
          {isSearching ? (
            filteredResults.length > 0 ? (
              <div className="space-y-3">
                {filteredResults.map((item, i) => (
                  <div key={item.id}>
                    {item.type === "workflow" ? (
                      <WorkflowCard
                        workflow={item}
                        isFavourite={isFavourite(item.id)}
                        onToggleFavourite={() => toggleFavourite(item.id)}
                      />
                    ) : (
                      <ResultCard
                        shortcut={item}
                        isFavourite={isFavourite(item.id)}
                        onToggleFavourite={() => toggleFavourite(item.id)}
                      />
                    )}
                    {i === 0 && <CoffeeNudge />}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-text-muted">
                <p className="text-lg">No results found for &ldquo;{query}&rdquo;</p>
                <p className="text-sm mt-2">
                  Try different keywords or browse categories above
                </p>
              </div>
            )
          ) : grouped.length > 0 ? (
            grouped.map((group, gi) => (
              <section key={group.id} aria-labelledby={`heading-${group.id}`}>
                <h2
                  id={`heading-${group.id}`}
                  className="text-text-secondary text-sm font-semibold uppercase tracking-wider mb-3"
                >
                  {group.label}
                </h2>
                <div className="space-y-3">
                  {group.shortcuts.map((shortcut, si) => (
                    <div key={shortcut.id}>
                      <ResultCard
                        shortcut={shortcut}
                        isFavourite={isFavourite(shortcut.id)}
                        onToggleFavourite={() => toggleFavourite(shortcut.id)}
                      />
                      {gi === 0 && si === 0 && <CoffeeNudge />}
                    </div>
                  ))}
                </div>
                {group.workflows.length > 0 && (
                  <div className="mt-4">
                    <h3 className="text-text-muted text-xs font-semibold uppercase tracking-wider mb-2">
                      Workflows
                    </h3>
                    <div className="space-y-3">
                      {group.workflows.map((workflow) => (
                        <WorkflowCard
                          key={workflow.id}
                          workflow={workflow}
                          isFavourite={isFavourite(workflow.id)}
                          onToggleFavourite={() => toggleFavourite(workflow.id)}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </section>
            ))
          ) : (
            <div className="text-center py-12 text-text-muted">
              <p className="text-lg">No favourites yet</p>
              <p className="text-sm mt-2">
                Click the heart icon on any shortcut to save it here
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default App;
