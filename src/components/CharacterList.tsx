import { useState, useEffect } from 'react';
import { useCharacters, usePrefetchNextPage } from '../hooks/useCharacters';
import CharacterCard from './CharacterCard';
import SkeletonLoader from './SkeletonLoader';
import { UI_CONFIG } from '../config/constants';
import './CharacterList.css';

const CharacterList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const { data, isLoading, isError, error } = useCharacters(currentPage);
  const { prefetchNextPage } = usePrefetchNextPage();

  const totalPages = data?.info.pages ?? 1;
  const canGoToNext = currentPage < totalPages;
  const canGoToPrevious = currentPage > 1;

  const goToNextPage = () => {
    if (canGoToNext) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const goToPreviousPage = () => {
    if (canGoToPrevious) {
      setCurrentPage((prev) => Math.max(prev - 1, 1));
    }
  };

  useEffect(() => {
    if (data?.info.pages) {
      prefetchNextPage(currentPage, data.info.pages);
    }
  }, [currentPage, data, prefetchNextPage]);

  if (isError) {
    return (
      <div className="error-container">
        <div className="error-content">
          <h2>Oops! Something went wrong</h2>
          <p>{error instanceof Error ? error.message : 'Failed to fetch characters'}</p>
          <button onClick={() => window.location.reload()} className="retry-btn">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="character-list-container">
      {isLoading ? (
        <div className="characters-grid">
          {[...Array(UI_CONFIG.SKELETON_COUNT)].map((_, idx) => (
            <SkeletonLoader key={idx} />
          ))}
        </div>
      ) : (
        <>
          <div className="characters-grid">
            {data?.results.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>

          {data && (
            <div className="pagination-controls">
              <button
                onClick={goToPreviousPage}
                disabled={!canGoToPrevious}
                className="page-btn"
              >
                Previous
              </button>
              
              <div className="page-info">
                <span className="page-number">
                  Page {currentPage} of {data.info.pages}
                </span>
                <span className="total-characters">
                  ({data.info.count} characters total)
                </span>
              </div>

              <button
                onClick={goToNextPage}
                disabled={!canGoToNext}
                className="page-btn"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CharacterList;

