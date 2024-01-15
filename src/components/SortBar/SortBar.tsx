import React from 'react';
import cn from 'classnames';
import { SortType } from '../../types/Good';

type Props = {
  sortBy: SortType,
  ChangeSortMethods: (sortBy: SortType) => void,
  SetSortByDefault: () => void,
  isReversed: boolean,
  setIsReversed: (isReversed: boolean) => void,
};

export const SortBar: React.FC<Props> = ({
  sortBy,
  ChangeSortMethods,
  SetSortByDefault,
  isReversed,
  setIsReversed,
}) => {
  return (
    <div className="buttons">
      <button
        onClick={() => ChangeSortMethods(SortType.Alphabet)}
        type="button"
        className={
          cn(
            'button',
            'is-info',
            {
              'is-light': sortBy !== SortType.Alphabet,
            },
          )
        }
      >
        Sort alphabetically
      </button>

      <button
        onClick={() => ChangeSortMethods(SortType.Length)}
        type="button"
        className={
          cn(
            'button',
            'is-success',
            {
              'is-light': sortBy !== SortType.Length,
            },
          )
        }
      >
        Sort by length
      </button>

      <button
        onClick={() => setIsReversed(!isReversed)}
        type="button"
        className={cn(
          'button',
          'is-warning',
          {
            'is-light': !isReversed,
          },
        )}
      >
        Reverse
      </button>

      {(sortBy || isReversed) && (
        <button
          onClick={() => SetSortByDefault()}
          type="button"
          className="button is-danger is-light"
        >
          Reset
        </button>
      )}
    </div>
  );
};
