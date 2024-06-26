import React from 'react';
import { RATING_VALUES } from '../const';

type FormRatingProps = {
  isDisabled?: boolean;
}

function FormRating({isDisabled = false}: FormRatingProps): JSX.Element {
  return (
    <div className="reviews__rating-form form__rating">
      {RATING_VALUES.map((item) => {
        const { value, title } = item;
        return (
          <React.Fragment key={`star-${title}`}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              defaultValue={value}
              id={`${value}-stars`}
              type="radio"
              disabled={isDisabled}
            />
            <label
              htmlFor={`${value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={title}
            >
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default FormRating;
