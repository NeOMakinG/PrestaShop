/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */

import Router from '@components/router';

const {$} = window;

export default class CombinationsService {
  /**
   * @param {Number} productId
   */
  constructor(productId) {
    this.productId = productId;
    this.router = new Router();
  }

  /**
   * @param {Number} offset
   * @param {Number} limit
   *
   * @returns {Promise}
   */
  fetch(offset, limit) {
    return $.get(
      this.router.generate('admin_products_combinations', {
        productId: this.productId,
        offset,
        limit,
      }),
    );
  }

  /**
   * @returns {Promise}
   */
  fetchAll() {
    /* return $.get(
      this.router.generate('admin_products_combinations_definitions', {
        productId: this.productId
      })
    ); */
    const dummyDatas = async () => [
      {
        id_combination: 1,
        name: 'Color',
        childs: [
          {
            id_combination: 2,
            name: 'Red',
            color: '#ff0000',
            value: '#ff0000',
          },
          {
            id_combination: 3,
            name: 'Blue',
            color: '#0000ff',
            value: '#0000ff',
          },
          {
            id_combination: 4,
            name: 'Green',
            color: '#008000',
            value: '#008000',
          },
        ],
      },
      {
        id_combination: 5,
        name: 'Size',
        childs: [
          {
            id_combination: 6,
            name: 'S',
            color: false,
            value: 'S',
          },
          {
            id_combination: 7,
            name: 'M',
            color: false,
            value: 'M',
          },
          {
            id_combination: 8,
            name: 'XL',
            color: false,
            value: 'XL',
          },
        ],
      },
    ];

    return dummyDatas();
  }

  /**
   * @param {Number} combinationId
   * @param {Object} data
   *
   * @returns {Promise}
   */
  updateListedCombination(combinationId, data) {
    return $.ajax({
      url: this.router.generate('admin_products_combinations_update_combination_from_listing', {
        combinationId,
      }),
      data,
      type: 'PATCH',
    });
  }
}
