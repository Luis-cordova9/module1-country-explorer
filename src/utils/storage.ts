// manejo de favoritos 
const FAVORITES_KEY = 'favoriteCountries';

// obtener datos guardados (favoritos)
export function getFavorites(): string[] {
  const stored = localStorage.getItem(FAVORITES_KEY);
  return stored ? JSON.parse(stored) : [];
}

// guarda los favoritos
export function saveFavorites(favorites: string[]): void {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

// gestionar favoritos (borrar / eliminar )
export function toggleFavorite(countryCode: string): string[] {
  const favorites = getFavorites();

  const index = favorites.indexOf(countryCode);

  if (index === -1) {
    favorites.push(countryCode);
  } else {
    favorites.splice(index, 1);
  }

  saveFavorites(favorites);
  return favorites;
}

// ver si un pais es favorito 
export function isFavorite(countryCode: string): boolean {
  return getFavorites().includes(countryCode);
}

// limpiar favoritos (reset de favoritos )
export function clearFavorites(): void {
  localStorage.removeItem(FAVORITES_KEY);
}