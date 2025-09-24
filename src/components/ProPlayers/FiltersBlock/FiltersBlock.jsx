'use client';
import { useState, useEffect } from 'react';
import ToggleButton from '@/components/Common/ToggleButton/ToggleButton';
import transformToCamelCase from '@/lib/transformToCamelCase'
import s from './FiltersBlock.module.scss';

const FiltersBlock = ({ leftText, rightText, orderBy, onSetOrderBy, leftSortType, rightSortType }) => {
  const leftValue = transformToCamelCase(leftText);
  const rightValue = transformToCamelCase(rightText);
  const [activeSortButton, setActiveSortButton] = useState(leftValue);

  useEffect(() => {
    if (orderBy === rightSortType) {
      setActiveSortButton(rightValue);
    } else {
      setActiveSortButton(leftValue);
    }
  }, [orderBy, rightSortType, leftValue, rightValue]);

  const handleFilterChange = (value, sortType) => {
    setActiveSortButton(value);
    onSetOrderBy(sortType);
  };

  return (
    <>
      <span className={s.filterLabel}>Sort by:</span>
      <div className={`${s.battonWrapper} ${activeSortButton === rightValue ? s.active : ''}`}>
        <ToggleButton
          btnClass='lefToggle'
          iconClass='leftToggleIconSmall'
          isActive={activeSortButton === leftValue}
          onToggle={() => handleFilterChange(leftValue, leftSortType)}
          iconHref={`/assets/sprite.svg#${leftValue}`}
          label={leftText}
        />

        <ToggleButton
          btnClass='rightToggle'
          iconClass='rightToggleIconSmall'
          isActive={activeSortButton === rightValue}
          onToggle={() => handleFilterChange(rightValue, rightSortType)}
          iconHref={`/assets/sprite.svg#${rightValue}`}
          label={rightText}
        />
      </div>
    </>
  )
}

export default FiltersBlock