/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const Main = ({ stores }) => {
  const regex = /[0-9][0-9]:[0-9][0-9]/g;
  const today = new Date();
  const dateNow = `${today.getHours()}: ${today.getMinutes()}`;

  return (
    <main className="main">
      <div className="main__container">

        <form action="/" className="adress-delivery adress-delivery__main">
          <span>When</span>
          <span>To</span>
          <div htmlFor="destination-details">
            <select
              name=""
              id="destination-details"
              className="adress-delivery__destination-details"
            >
              <option value="ASAP">ASAP</option>
            </select>
          </div>
          <div className="search__container">
            <button type="button" className="dest_btn abs_btn" />
            <img src="img/local.svg" alt="location" />
            <input
              type="text"
              className="destination_input dest_style"
              placeholder="ul. Tarasivska St, 16"
            />
          </div>
        </form>

        <section className="catalog">

          <h1 className="catalog-header">Moscow products</h1>

          <div className="catalog__container">
            {
              stores.map(store => (
                <section className="product">
                  <a href="/#" className="product__photo product__img">
                    {store.closedMessage.match(regex) > dateNow
                      ? (
                        <h1
                          className="product__information__close"
                        >
                          {store.closedMessage}
                        </h1>
                      )
                      : ''}
                    <img
                      className={
                        classNames({
                          is__Visible__now: store.closedMessage
                            .match(regex) > dateNow,
                        })}
                      src={store.heroImageUrl}
                      alt="card__restorant"
                    />
                  </a>
                  <div className="hidding__product_details">
                    <h2 className="product__name">{store.title}</h2>
                    <ul className="product__categories">
                      <li className="product__categories__item">
                        {store.categories.join(' • ')}
                      </li>

                    </ul>
                    <p className="product__details">
                      {store.etaRange
                        ? store.etaRange.text
                        : store.feedback
                          ? (
                            <div className="product__categories__rating">
                              <p>{store.feedback.rating}</p>
                              <p>✰ </p>
                              <p>{store.feedback.ratingCount}</p>
                            </div>
                          )
                          : '' }
                    </p>
                  </div>
                </section>
              ))}
          </div>

        </section>

      </div>
    </main>
  );
};

Main.propTypes = {
  stores: PropTypes.objectOf(
    PropTypes.number,
  ).isRequired,
};

export default Main;
